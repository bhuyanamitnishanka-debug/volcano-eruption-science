/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Flame, AlertTriangle, Play, RefreshCw, Gauge, Zap, Wind } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface MagmaChamberLabProps {
  language: Language;
}

export const MagmaChamberLab: React.FC<MagmaChamberLabProps> = ({ language }) => {
  // Geochemical parameters
  const [silica, setSilica] = useState<number>(50); // 48% (Basalt) to 75% (Rhyolite)
  const [gasContent, setGasContent] = useState<number>(1.5); // 0.5% to 6.0% (wt% H2O + CO2)
  const [chamberDepth, setChamberDepth] = useState<number>(6); // km (2 to 12 km)
  const [isRecharged, setIsRecharged] = useState<boolean>(false);
  const [isErupting, setIsErupting] = useState<boolean>(false);
  const [eruptionProgress, setEruptionProgress] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Physical calculations
  // Viscosity increases exponentially with silica content: 10^2 Pa.s (basalt) to 10^7 Pa.s (rhyolite)
  const logViscosity = 2 + ((silica - 48) / (75 - 48)) * 5;
  const viscosityLabel =
    silica < 53
      ? 'Low (Basaltic · Runny)'
      : silica < 63
      ? 'Moderate (Andesitic · Sticky)'
      : 'Extreme (Rhyolitic · Viscous)';

  // Lithostatic confining pressure in MPa: ~27 MPa per km depth
  const lithostaticPressure = Math.round(chamberDepth * 27);
  // Overpressure from gas exsolution and recharge
  const gasOverpressure = Math.round(gasContent * 18);
  const rechargeOverpressure = isRecharged ? 45 : 0;
  const totalChamberPressure = lithostaticPressure + gasOverpressure + rechargeOverpressure;
  const fractureThreshold = lithostaticPressure + 30; // Rock failure point

  // Eruption style classification
  const isExplosive = silica > 60 || gasContent > 3.0 || isRecharged;
  const vei = !isExplosive ? 0 : silica > 68 && gasContent > 4.0 ? 6 : silica > 62 ? 4 : 2;

  const eruptionTypeName =
    vei === 0
      ? 'Effusive Hawaiian / Icelandic'
      : vei <= 2
      ? 'Strombolian / Vulcanian'
      : vei <= 4
      ? 'Sub-Plinian Explosive'
      : 'Ultra-Plinian Cataclysm';

  // Trigger Eruption
  const handleTriggerEruption = () => {
    setIsErupting(true);
    setEruptionProgress(0);

    if (isExplosive) {
      soundEngine.playEruptionBoom();
    } else {
      soundEngine.playRumble(1200);
      soundEngine.playBubblePop();
    }
  };

  // Reset Lab
  const handleReset = () => {
    setIsErupting(false);
    setEruptionProgress(0);
    setIsRecharged(false);
    soundEngine.playCrack();
  };

  // Canvas render loop for volcano cross-section and dynamic eruption
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;

    const render = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      // Clear sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.45);
      if (isErupting && isExplosive) {
        skyGrad.addColorStop(0, '#18181b');
        skyGrad.addColorStop(0.7, '#27272a');
        skyGrad.addColorStop(1, '#451a03');
      } else {
        skyGrad.addColorStop(0, '#0f172a');
        skyGrad.addColorStop(1, '#1e293b');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h * 0.45);

      // Draw Earth Crust Cross-Section (Bottom 55% of canvas)
      const groundY = h * 0.45;
      const crustGrad = ctx.createLinearGradient(0, groundY, 0, h);
      crustGrad.addColorStop(0, '#292524');
      crustGrad.addColorStop(0.6, '#1c1917');
      crustGrad.addColorStop(1, '#0c0a09');
      ctx.fillStyle = crustGrad;
      ctx.fillRect(0, groundY, w, h - groundY);

      // Volcanic Edifice (Cone on surface)
      const craterX = w * 0.5;
      const craterY = groundY - 70;
      ctx.fillStyle = '#3f3f46';
      ctx.beginPath();
      ctx.moveTo(craterX - 160, groundY);
      ctx.lineTo(craterX - 25, craterY);
      ctx.lineTo(craterX + 25, craterY);
      ctx.lineTo(craterX + 160, groundY);
      ctx.closePath();
      ctx.fill();

      // Crater depression
      ctx.fillStyle = '#27272a';
      ctx.beginPath();
      ctx.ellipse(craterX, craterY, 25, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Magma Chamber (Depth mapped: 2km -> high, 12km -> deep)
      const chamberY = groundY + 50 + (chamberDepth / 12) * 160;
      const chamberRadiusX = 65 + (isRecharged ? 15 : 0);
      const chamberRadiusY = 40 + (isRecharged ? 10 : 0);

      // Draw Chamber Glow
      const chamberGrad = ctx.createRadialGradient(
        craterX,
        chamberY,
        5,
        craterX,
        chamberY,
        chamberRadiusX
      );
      if (silica < 55) {
        // Hot yellow/orange basalt
        chamberGrad.addColorStop(0, '#fef08a');
        chamberGrad.addColorStop(0.5, '#f97316');
        chamberGrad.addColorStop(1, '#7c2d12');
      } else {
        // Sticky orange/red dacite/rhyolite
        chamberGrad.addColorStop(0, '#fed7aa');
        chamberGrad.addColorStop(0.5, '#ea580c');
        chamberGrad.addColorStop(1, '#450a0a');
      }
      ctx.fillStyle = chamberGrad;
      ctx.beginPath();
      ctx.ellipse(craterX, chamberY, chamberRadiusX, chamberRadiusY, 0, 0, Math.PI * 2);
      ctx.fill();

      // Conduit (Pipe from chamber to crater)
      ctx.fillStyle = isErupting ? '#f97316' : '#9a3412';
      ctx.fillRect(craterX - 7, craterY, 14, chamberY - craterY);

      // Gas Bubbles inside Chamber and Conduit
      const bubbleCount = Math.round(gasContent * 10);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      for (let i = 0; i < bubbleCount; i++) {
        const bx = craterX + Math.sin(frame * 0.05 + i) * (chamberRadiusX * 0.65);
        const by = chamberY + Math.cos(frame * 0.04 + i * 1.5) * (chamberRadiusY * 0.65);
        const bRadius = 1.5 + (gasContent / 6) * 3;
        ctx.beginPath();
        ctx.arc(bx, by, bRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Deep Magma Recharge feeder from mantle (if active)
      if (isRecharged) {
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(craterX - 5, chamberY + chamberRadiusY, 10, h - (chamberY + chamberRadiusY));
        // Pulsing recharge arrows
        ctx.fillStyle = '#fef08a';
        const pulseY = chamberY + chamberRadiusY + 30 - ((frame * 2) % 30);
        ctx.beginPath();
        ctx.moveTo(craterX, pulseY - 8);
        ctx.lineTo(craterX - 6, pulseY);
        ctx.lineTo(craterX + 6, pulseY);
        ctx.closePath();
        ctx.fill();
      }

      // ================= ERUPTION VISUALIZATION =================
      if (isErupting) {
        if (!isExplosive) {
          // EFFUSIVE HAWAIIAN: Lava Fountains & Gentle Rivers
          // Lava fountain at vent
          ctx.fillStyle = '#f97316';
          for (let i = 0; i < 15; i++) {
            const fx = craterX + (Math.random() - 0.5) * 20;
            const fy = craterY - Math.random() * 45;
            ctx.beginPath();
            ctx.arc(fx, fy, 3 + Math.random() * 3, 0, Math.PI * 2);
            ctx.fill();
          }

          // Lava flows cascading down flanks
          ctx.strokeStyle = '#ea580c';
          ctx.lineWidth = 5;
          // Left flank flow
          ctx.beginPath();
          ctx.moveTo(craterX - 20, craterY);
          ctx.quadraticCurveTo(craterX - 70, groundY - 30, craterX - 130, groundY);
          ctx.stroke();

          // Right flank flow
          ctx.beginPath();
          ctx.moveTo(craterX + 20, craterY);
          ctx.quadraticCurveTo(craterX + 80, groundY - 25, craterX + 140, groundY);
          ctx.stroke();

          // Gentle white steam wisps
          ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
          ctx.beginPath();
          ctx.arc(craterX + Math.sin(frame * 0.05) * 20, craterY - 60, 18, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // EXPLOSIVE PLINIAN: Colossal Ash Column, Volcanic Lightning & Pyroclastic Flow
          // 1. Towering Ash Column
          const columnGrad = ctx.createLinearGradient(craterX, craterY, craterX, 10);
          columnGrad.addColorStop(0, '#ea580c'); // Incandescent vent base
          columnGrad.addColorStop(0.3, '#3f3f46');
          columnGrad.addColorStop(0.8, '#18181b');
          ctx.fillStyle = columnGrad;

          // Main vertical column stem
          ctx.beginPath();
          ctx.moveTo(craterX - 18, craterY);
          ctx.lineTo(craterX - 35, 70);
          ctx.lineTo(craterX + 35, 70);
          ctx.lineTo(craterX + 18, craterY);
          ctx.closePath();
          ctx.fill();

          // Stratospheric Umbrella Cloud (Spreads at top)
          ctx.fillStyle = 'rgba(24, 24, 27, 0.9)';
          ctx.beginPath();
          ctx.ellipse(craterX, 40, 180, 32, 0, 0, Math.PI * 2);
          ctx.fill();

          // Ash billows
          for (let i = 0; i < 8; i++) {
            const bx = craterX - 140 + i * 38 + Math.sin(frame * 0.1 + i) * 8;
            const by = 40 + Math.cos(frame * 0.08 + i) * 12;
            ctx.beginPath();
            ctx.arc(bx, by, 22, 0, Math.PI * 2);
            ctx.fill();
          }

          // 2. Volcanic Lightning Bolts
          if (frame % 8 < 3) {
            ctx.strokeStyle = '#67e8f9';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(craterX - 30, 60);
            ctx.lineTo(craterX - 15, 45);
            ctx.lineTo(craterX - 25, 30);
            ctx.lineTo(craterX - 5, 20);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(craterX + 25, 55);
            ctx.lineTo(craterX + 45, 40);
            ctx.lineTo(craterX + 35, 25);
            ctx.stroke();
          }

          // 3. Pyroclastic Density Currents (Lethal ground avalanches)
          ctx.fillStyle = 'rgba(120, 53, 15, 0.85)';
          // Left surge
          ctx.beginPath();
          ctx.ellipse(craterX - 110, groundY - 10, 45, 18, 0, 0, Math.PI * 2);
          ctx.fill();
          // Right surge
          ctx.beginPath();
          ctx.ellipse(craterX + 115, groundY - 10, 50, 20, 0, 0, Math.PI * 2);
          ctx.fill();

          // Incandescent bombs flying
          ctx.fillStyle = '#fef08a';
          for (let i = 0; i < 6; i++) {
            const bombX = craterX + Math.sin(frame * 0.2 + i * 1.5) * 80;
            const bombY = craterY - 40 - Math.abs(Math.cos(frame * 0.15 + i)) * 60;
            ctx.beginPath();
            ctx.arc(bombX, bombY, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Depth indicators on the side
      ctx.fillStyle = '#78716c';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText('0 km (Surface)', 12, groundY);
      ctx.fillText('5 km', 12, groundY + 80);
      ctx.fillText('10 km', 12, groundY + 160);
      ctx.fillText('15 km (Mantle)', 12, h - 10);

      // Chamber depth marker line
      ctx.strokeStyle = '#f97316';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(12, chamberY);
      ctx.lineTo(craterX - chamberRadiusX - 10, chamberY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillText(`Chamber Depth: ${chamberDepth} km`, 12, chamberY - 4);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [silica, gasContent, chamberDepth, isRecharged, isErupting, isExplosive]);

  return (
    <div
      className={`bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl transition-all ${
        isErupting && isExplosive ? 'animate-shake' : ''
      }`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500" />
            <span>
              {language === 'hi'
                ? 'मैग्मा चैंबर एवं विस्फोट प्रयोगशाला'
                : language === 'or'
                ? 'ମାଗ୍ମା ଚାମ୍ବର ଓ ବିସ୍ଫୋରଣ ଲ୍ୟାବ୍'
                : 'Magma Chamber & Eruption Simulator'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'सिलिका की मात्रा, घुली हुई गैसें, गहराई और नए मैग्मा के प्रभाव की जांच करें'
              : language === 'or'
              ? 'ସିଲିକା ପରିମାଣ, ଗ୍ୟାସ୍ ପ୍ରସାରଣ ଏବଂ ନୂଆ ମାଗ୍ମାର ପ୍ରବେଶ ପରୀକ୍ଷା କରନ୍ତୁ'
              : 'Tune Geochemistry, Volatiles & Lithostatic Decompression to Trigger Realistic Eruptions'}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Chamber</span>
          </button>

          <button
            onClick={handleTriggerEruption}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg text-white transition-all shadow-md ${
              isExplosive
                ? 'bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 animate-pulse'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>
              {isErupting
                ? 'Erupting Now...'
                : isExplosive
                ? 'TRIGGER EXPLOSIVE BLAST'
                : 'TRIGGER EFFUSIVE FLOW'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Simulation Stage (Left) & Controls/Diagnostics (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Stage */}
        <div className="lg:col-span-8 bg-neutral-950 p-4 flex flex-col items-center justify-center relative">
          <canvas
            ref={canvasRef}
            width={800}
            height={520}
            className="w-full h-auto max-h-[520px] rounded-lg border border-neutral-800 shadow-inner"
          />

          {/* Eruption Status Floating Banner */}
          <div className="absolute top-8 left-8 right-8 flex flex-wrap items-center justify-between bg-neutral-950/85 backdrop-blur-md px-4 py-2 rounded-lg border border-neutral-800 text-xs">
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${
                  isErupting
                    ? isExplosive
                      ? 'bg-red-500 animate-ping'
                      : 'bg-orange-500 animate-pulse'
                    : 'bg-emerald-500'
                }`}
              />
              <span className="font-semibold text-white">
                {isErupting ? `ACTIVE ERUPTION: ${eruptionTypeName}` : 'CHAMBER STATUS: Pressurized & Monitoring'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-neutral-400">
              <span>
                VEI Index: <strong className="text-amber-400 font-mono">VEI {vei}</strong>
              </span>
              <span>·</span>
              <span>
                Type:{' '}
                <strong className={isExplosive ? 'text-red-400' : 'text-emerald-400'}>
                  {isExplosive ? 'Explosive' : 'Effusive'}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Controls & Scientific Deck */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Geochemical Controls
            </span>
            <span className="text-[11px] font-mono text-neutral-400">P = {totalChamberPressure} MPa</span>
          </div>

          {/* Silica Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="font-medium text-neutral-300">Silica Content (SiO₂)</span>
              <span className="font-mono text-amber-400 font-semibold">{silica}%</span>
            </div>
            <input
              type="range"
              min={48}
              max={75}
              step={1}
              value={silica}
              onChange={(e) => {
                setSilica(Number(e.target.value));
                soundEngine.playCrack();
              }}
              className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
              <span>48% (Basalt · Fluid)</span>
              <span>65% (Andesite)</span>
              <span>75% (Rhyolite · Gooey)</span>
            </div>
          </div>

          {/* Dissolved Gas / Volatiles Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="font-medium text-neutral-300">Dissolved Volatiles (H₂O, CO₂, SO₂)</span>
              <span className="font-mono text-cyan-400 font-semibold">{gasContent.toFixed(1)} wt%</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={6.0}
              step={0.1}
              value={gasContent}
              onChange={(e) => {
                setGasContent(Number(e.target.value));
                soundEngine.playBubblePop();
              }}
              className="w-full accent-cyan-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
              <span>0.5% (Degassed)</span>
              <span>3.0% (Subduction Avg)</span>
              <span>6.0% (Supercritical)</span>
            </div>
          </div>

          {/* Chamber Depth Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="font-medium text-neutral-300">Chamber Depth</span>
              <span className="font-mono text-emerald-400 font-semibold">{chamberDepth} km</span>
            </div>
            <input
              type="range"
              min={2}
              max={12}
              step={0.5}
              value={chamberDepth}
              onChange={(e) => {
                setChamberDepth(Number(e.target.value));
                soundEngine.playCrack();
              }}
              className="w-full accent-emerald-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
              <span>2 km (Shallow)</span>
              <span>12 km (Lower Crust)</span>
            </div>
          </div>

          {/* Deep Magma Recharge Influx Toggle */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Deep Mantle Magma Recharge</span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                Injects 1,200°C basalt from mantle convection
              </div>
            </div>
            <button
              onClick={() => {
                setIsRecharged(!isRecharged);
                soundEngine.playRumble(800);
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                isRecharged
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              {isRecharged ? 'ACTIVE (+45 MPa)' : 'OFF'}
            </button>
          </div>

          {/* Chamber Physics Readouts */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2 text-xs">
            <div className="font-semibold text-neutral-300 flex items-center justify-between">
              <span>Chamber Overpressure State</span>
              <span
                className={`font-mono text-[11px] px-2 py-0.5 rounded font-bold ${
                  totalChamberPressure > fractureThreshold
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {totalChamberPressure > fractureThreshold ? 'CRITICAL FRACTURE' : 'CONTAINED'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-neutral-500">Magma Viscosity:</span>
                <div className="font-mono text-white font-semibold">10^{logViscosity.toFixed(1)} Pa·s</div>
              </div>
              <div>
                <span className="text-neutral-500">Ash Column Height:</span>
                <div className="font-mono text-white font-semibold">
                  {!isExplosive ? '0.2 km' : `${Math.round(vei * 6 + gasContent * 2)} km`}
                </div>
              </div>
              <div>
                <span className="text-neutral-500">Gas Bubble Vol%:</span>
                <div className="font-mono text-cyan-400 font-semibold">{Math.round(gasContent * 14)}%</div>
              </div>
              <div>
                <span className="text-neutral-500">Conduit Exit Speed:</span>
                <div className="font-mono text-orange-400 font-semibold">
                  {!isExplosive ? '5 m/s' : `${Math.round(vei * 80 + 120)} m/s`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
