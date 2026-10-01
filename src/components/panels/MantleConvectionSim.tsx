/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Flame, Info, Gauge, Layers } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface MantleConvectionSimProps {
  language: Language;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  temp: number; // 0 (cold) to 1 (hot)
  size: number;
  life: number;
}

export const MantleConvectionSim: React.FC<MantleConvectionSimProps> = ({ language }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [coreTemp, setCoreTemp] = useState<number>(5500); // deg C
  const [viscosity, setViscosity] = useState<number>(1); // 0.5 (low), 1 (normal), 2 (high)
  const [activeLayer, setActiveLayer] = useState<string | null>('mantle');

  // Computed thermodynamic metrics
  const deltaT = coreTemp - 1200; // temp diff between core and lithosphere
  const rayleighNum = ((deltaT / 4300) * 1e7 * (1 / viscosity)).toExponential(2);
  const plateSpeed = ((deltaT / 1000) * 1.8 * (1 / viscosity)).toFixed(1);
  const heatFlux = Math.round((coreTemp / 5500) * 87);

  const particlesRef = useRef<Particle[]>([]);

  // Initialize convection particles
  useEffect(() => {
    const particles: Particle[] = [];
    const count = 180;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random(),
        y: 0.15 + Math.random() * 0.7,
        vx: 0,
        vy: 0,
        temp: Math.random(),
        size: 2.5 + Math.random() * 3,
        life: Math.random() * 100,
      });
    }
    particlesRef.current = particles;
  }, []);

  // Canvas animation loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const width = canvas.width;
      const height = canvas.height;

      // Clear with dark geological backdrop
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Boundaries definition
      const crustY = height * 0.16;
      const coreY = height * 0.86;

      // 1. Draw Outer Core (Bottom glowing layer)
      const coreGradient = ctx.createLinearGradient(0, coreY, 0, height);
      coreGradient.addColorStop(0, '#f97316');
      coreGradient.addColorStop(0.3, '#ea580c');
      coreGradient.addColorStop(1, '#7c2d12');
      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, coreY, width, height - coreY);

      // Core glow pulse
      ctx.fillStyle = `rgba(251, 146, 60, ${0.15 + Math.sin(time * 0.003) * 0.05})`;
      ctx.fillRect(0, coreY - 20, width, 30);

      // Core label
      ctx.fillStyle = '#fef08a';
      ctx.font = '600 12px "JetBrains Mono", monospace';
      ctx.fillText(`OUTER CORE (${coreTemp}°C) · Molten Iron-Nickel`, 16, height - 16);

      // 2. Draw Crust / Lithosphere (Top rigid layer)
      const crustGradient = ctx.createLinearGradient(0, 0, 0, crustY);
      crustGradient.addColorStop(0, '#1c1917');
      crustGradient.addColorStop(0.8, '#292524');
      crustGradient.addColorStop(1, '#44403c');
      ctx.fillStyle = crustGradient;
      ctx.fillRect(0, 0, width, crustY);

      // Crust fissure / Oceanic ridge line in middle
      const midX = width * 0.5;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(midX, crustY - 14);
      ctx.lineTo(midX, crustY + 6);
      ctx.stroke();

      // Top Crust text
      ctx.fillStyle = '#e7e5e4';
      ctx.font = '600 12px "JetBrains Mono", monospace';
      ctx.fillText('CRUST & LITHOSPHERE (0–100 km)', 16, 24);

      // Plate separation indicators
      if (isPlaying) {
        ctx.fillStyle = '#38bdf8';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.fillText(`← Plate Drift: ${plateSpeed} cm/yr`, midX - 170, crustY - 8);
        ctx.fillText(`Plate Drift: ${plateSpeed} cm/yr →`, midX + 30, crustY - 8);
      }

      // 3. Draw Convection Loop Streamlines
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      // Left convection cell loop
      ctx.beginPath();
      ctx.ellipse(width * 0.28, (crustY + coreY) * 0.5, width * 0.18, (coreY - crustY) * 0.38, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Right convection cell loop
      ctx.beginPath();
      ctx.ellipse(width * 0.72, (crustY + coreY) * 0.5, width * 0.18, (coreY - crustY) * 0.38, 0, 0, Math.PI * 2);
      ctx.stroke();

      // 4. Update & Draw Mantle Particles
      const particles = particlesRef.current;
      const speedMult = isPlaying ? (1 / viscosity) * 0.7 : 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isPlaying) {
          // Convection field physics: Two rolling counter-rotating cells
          const mantleHeight = coreY - crustY;
          const normY = (p.y * height - crustY) / mantleHeight; // 0 (top) to 1 (bottom)
          const normX = p.x; // 0 to 1

          // Left cell (0.0 to 0.5): ascends at 0.5 (center-left boundary), descends at 0.05
          // Right cell (0.5 to 1.0): ascends at 0.5, descends at 0.95
          let flowX = 0;
          let flowY = 0;

          if (normX < 0.5) {
            // Ascending plume near center (0.5)
            // Descending slab near left edge (0.08)
            const cellCenterDist = (normX - 0.25) / 0.25; // -1 to +1
            const cellYDist = (normY - 0.5) * 2; // -1 to +1

            // Counter-clockwise roll: Up on right (near midX), down on left (near 0)
            flowY = -cellCenterDist * 0.28;
            flowX = cellYDist * 0.35;
          } else {
            // Clockwise roll: Up on left (near midX), down on right (near width)
            const cellCenterDist = (normX - 0.75) / 0.25; // -1 to +1
            const cellYDist = (normY - 0.5) * 2; // -1 to +1

            flowY = cellCenterDist * 0.28;
            flowX = -cellYDist * 0.35;
          }

          // Thermal buoyancy modulation
          if (normY > 0.8) {
            // Near core: absorbs heat, becomes buoyant
            p.temp = Math.min(1, p.temp + dt * 0.6 * (coreTemp / 5500));
          } else if (normY < 0.2) {
            // Near crust: cools down, becomes denser
            p.temp = Math.max(0.1, p.temp - dt * 0.5);
          }

          // Buoyant force drives upward movement for high temp
          const buoyancy = (p.temp - 0.5) * 0.45;
          flowY -= buoyancy;

          p.vx = flowX * speedMult;
          p.vy = flowY * speedMult;

          p.x += p.vx * dt;
          p.y += p.vy * dt;

          // Wrap boundaries gracefully
          if (p.x < 0.02) p.x = 0.03;
          if (p.x > 0.98) p.x = 0.97;
          if (p.y * height < crustY + 5) {
            p.y = (crustY + 6) / height;
            p.temp = 0.2;
          }
          if (p.y * height > coreY - 5) {
            p.y = (coreY - 6) / height;
            p.temp = 0.95;
          }
        }

        // Draw particle with temperature color ramp
        const screenX = p.x * width;
        const screenY = p.y * height;

        // Color ramp: 0 (cool/dense: #3b82f6) -> 0.5 (medium: #f97316) -> 1 (hot buoyant: #fef08a)
        let r, g, b;
        if (p.temp < 0.5) {
          const t = p.temp / 0.5;
          r = Math.round(59 + t * (249 - 59));
          g = Math.round(130 + t * (115 - 130));
          b = Math.round(246 + t * (22 - 246));
        } else {
          const t = (p.temp - 0.5) / 0.5;
          r = Math.round(249 + t * (254 - 249));
          g = Math.round(115 + t * (240 - 115));
          b = Math.round(22 + t * (138 - 22));
        }

        const alpha = 0.6 + p.temp * 0.35;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra glow on scorching hot rising particles
        if (p.temp > 0.85) {
          ctx.fillStyle = `rgba(254, 240, 138, 0.25)`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Draw Ascending Magma Conduit to Ridge
      const conduitGrad = ctx.createLinearGradient(midX, coreY * 0.6, midX, crustY);
      conduitGrad.addColorStop(0, 'rgba(239, 68, 68, 0)');
      conduitGrad.addColorStop(1, 'rgba(239, 68, 68, 0.4)');
      ctx.fillStyle = conduitGrad;
      ctx.beginPath();
      ctx.moveTo(midX - 16, coreY * 0.5);
      ctx.lineTo(midX - 4, crustY);
      ctx.lineTo(midX + 4, crustY);
      ctx.lineTo(midX + 16, coreY * 0.5);
      ctx.closePath();
      ctx.fill();

      // Flow label
      ctx.fillStyle = '#f87171';
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('▲ BUOYANT MAGMA PLUME', midX, coreY * 0.45);
      ctx.textAlign = 'left';

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isPlaying, coreTemp, viscosity]);

  // Inject a superheated plume
  const handleInjectPlume = () => {
    soundEngine.playRumble(900);
    const canvas = canvasRef.current;
    if (!canvas) return;
    for (let i = 0; i < 25; i++) {
      particlesRef.current.push({
        x: 0.46 + Math.random() * 0.08,
        y: 0.82 + Math.random() * 0.04,
        vx: 0,
        vy: -0.8,
        temp: 1,
        size: 4 + Math.random() * 3,
        life: 100,
      });
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Sandbox Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <span>
              {language === 'hi'
                ? 'मेंटल संवहन सिमुलेटर'
                : language === 'or'
                ? 'ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍ ସିମୁଲେଟର୍'
                : 'Mantle Convection Simulator'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'कोर की गर्मी, मेंटल का चिपचिपापन और संवहन लूप को नियंत्रित करें'
              : language === 'or'
              ? 'କୋର୍ ଉତ୍ତାପ, ମେଣ୍ଟଲ୍ ଭିସ୍କୋସିଟି ଏବଂ କନଭେକ୍ସନ୍ ପ୍ରବାହକୁ ନିୟନ୍ତ୍ରଣ କରନ୍ତୁ'
              : 'Rayleigh-Bénard thermal convection mechanics powering planetary plate tectonics'}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
              soundEngine.playCrack();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            onClick={() => {
              setCoreTemp(5500);
              setViscosity(1);
              soundEngine.playCrack();
            }}
            className="p-1.5 text-xs rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
            title="Reset Simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={handleInjectPlume}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-400 hover:to-red-500 transition-all shadow-sm"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>
              {language === 'hi' ? 'थर्मल प्लूम इंजेक्ट करें' : language === 'or' ? 'ପ୍ଲୁମ୍ ଇଞ୍ଜେକ୍ଟ କରନ୍ତୁ' : 'Inject Mantle Plume'}
            </span>
          </button>
        </div>
      </div>

      {/* Two-Zone Layout: Interactive Stage + Control & Telemetry Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Zone: The Animated Simulation Stage */}
        <div className="lg:col-span-8 relative bg-neutral-950 flex flex-col justify-center items-center p-4">
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            className="w-full h-auto max-h-[500px] rounded-lg border border-neutral-800 shadow-inner"
          />

          {/* Quick interactive hint badge */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between text-xs text-neutral-400 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Yellow/Orange = Rising Buoyant Magma (~5,000°C)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span>Blue/Purple = Cooling Sinking Slab (~1,200°C)</span>
            </span>
          </div>
        </div>

        {/* Right Zone: Control & Concept Deck */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="border-b border-neutral-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Thermodynamic Controls</span>
            </div>

            {/* Core Temperature Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-medium text-neutral-300">
                  {language === 'hi' ? 'कोर तापमान' : language === 'or' ? 'କୋର୍ ତାପମାତ୍ରା' : 'Outer Core Temperature'}
                </span>
                <span className="font-mono text-amber-400 font-semibold">{coreTemp.toLocaleString()} °C</span>
              </div>
              <input
                type="range"
                min={3000}
                max={6500}
                step={100}
                value={coreTemp}
                onChange={(e) => {
                  setCoreTemp(Number(e.target.value));
                  soundEngine.playRumble(300);
                }}
                className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>3,000°C (Dormant)</span>
                <span>6,500°C (Hyperthermal)</span>
              </div>
            </div>

            {/* Mantle Viscosity Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-medium text-neutral-300">
                  {language === 'hi' ? 'चट्टान की श्यानता (चिपचिपापन)' : language === 'or' ? 'ମେଣ୍ଟଲ୍ ଭିସ୍କୋସିଟି' : 'Mantle Viscosity (Fluidity)'}
                </span>
                <span className="font-mono text-cyan-400 font-semibold">
                  {viscosity === 0.5 ? 'Low (Fluid)' : viscosity === 1 ? 'Normal (Ductile)' : 'High (Rigid)'}
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.5}
                value={viscosity}
                onChange={(e) => {
                  setViscosity(Number(e.target.value));
                  soundEngine.playCrack();
                }}
                className="w-full accent-cyan-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>0.5x (Fast)</span>
                <span>1.0x (Earth Standard)</span>
                <span>2.0x (Sluggish)</span>
              </div>
            </div>

            {/* Live Scientific Telemetry Box */}
            <div className="bg-neutral-950 p-3.5 rounded-lg border border-neutral-800 space-y-2">
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-amber-500" />
                <span>Geophysical Telemetry</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">Rayleigh Number (Ra)</div>
                  <div className="font-mono text-amber-400 font-bold">{rayleighNum}</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">Plate Drift Velocity</div>
                  <div className="font-mono text-emerald-400 font-bold">{plateSpeed} cm/yr</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">Core Heat Flux</div>
                  <div className="font-mono text-orange-400 font-bold">{heatFlux} mW/m²</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-neutral-500 text-[10px]">Turnover Period</div>
                  <div className="font-mono text-blue-400 font-bold">~120 Myr</div>
                </div>
              </div>
            </div>

            {/* Core Insight Callout */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-neutral-300 leading-relaxed">
              <p className="font-semibold text-amber-400 mb-1 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                <span>
                  {language === 'hi'
                    ? 'मुख्य वैज्ञानिक सिद्धांत'
                    : language === 'or'
                    ? 'ମୁଖ୍ୟ ବୈଜ୍ଞାନିକ ତଥ୍ୟ'
                    : 'The Planetary Heat Engine'}
                </span>
              </p>
              <p>
                {language === 'hi'
                  ? 'निचला मेंटल कोर से ऊष्मा लेकर फैलता है, उसका घनत्व घटता है, जिससे वह उत्प्लावन बल (Buoyancy) के कारण ऊपर उठता है। ऊपरी क्रस्ट पर ठंडा होकर वह फिर डूब जाता है।'
                  : language === 'or'
                  ? 'ମେଣ୍ଟଲ୍ର ପଥର କୋର୍ରୁ ଗରମ ହୋଇ ହାଲୁକା ହୁଏ ଏବଂ ଉପରକୁ ଉଠେ। ଉପରେ ଥଣ୍ଡା ହୋଇ ଭାରୀ ହେଲେ ପୁଣି ତଳକୁ ଖସି କନଭେକ୍ସନ୍ ସାଇକଲ୍ ଚଳାଏ।'
                  : 'Heat from the liquid outer core drives buoyant upwelling of hot silicate rock. As it reaches the lithosphere, it cools, increases in density, and sinks in a perpetual planetary conveyor belt.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
