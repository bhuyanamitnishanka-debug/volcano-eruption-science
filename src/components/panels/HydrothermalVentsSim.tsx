/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Waves, Sparkles, Flame, Info, Fish, Thermometer, Shield, Droplets, Activity, Zap } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface HydrothermalVentsSimProps {
  language: Language;
}

export const HydrothermalVentsSim: React.FC<HydrothermalVentsSimProps> = ({ language }) => {
  const [ventTemp, setVentTemp] = useState<number>(380); // 200°C to 420°C
  const [showChemosynthesis, setShowChemosynthesis] = useState<boolean>(true);
  const [mineralPrecipitation, setMineralPrecipitation] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Black smoker particles loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface VentParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      isMineral: boolean;
    }

    const particles: VentParticle[] = [];
    let frame = 0;

    const render = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      // Deep Abyssal Ocean Backdrop (Total pitch-black void at 2,500m depth)
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, w, h);

      // Flashlight beam from submersible exploring the vents
      const beamGrad = ctx.createRadialGradient(w * 0.48, h * 0.45, 10, w * 0.48, h * 0.45, 260);
      beamGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      beamGrad.addColorStop(0.6, 'rgba(14, 165, 233, 0.04)');
      beamGrad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, w, h);

      // Ocean Floor / Basaltic Seabed (2,500m below sea level)
      const bedY = h * 0.75;
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.moveTo(0, bedY + 20);
      ctx.quadraticCurveTo(w * 0.25, bedY - 15, w * 0.5, bedY + 10);
      ctx.quadraticCurveTo(w * 0.75, bedY + 30, w, bedY);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fill();

      // Deep Magma heat glow underneath the basalt cracks
      const magmaY = h * 0.94;
      const magmaGrad = ctx.createLinearGradient(0, magmaY, 0, h);
      magmaGrad.addColorStop(0, 'rgba(234, 88, 12, 0.8)');
      magmaGrad.addColorStop(1, 'rgba(124, 45, 18, 1)');
      ctx.fillStyle = magmaGrad;
      ctx.fillRect(0, magmaY, w, h - magmaY);

      // Cold Seawater Seepage Arrows (2°C Seawater descending through tectonic cracks)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      // Left seepage
      ctx.beginPath();
      ctx.moveTo(w * 0.18, bedY - 40);
      ctx.lineTo(w * 0.22, magmaY);
      ctx.stroke();
      // Right seepage
      ctx.beginPath();
      ctx.moveTo(w * 0.82, bedY - 40);
      ctx.lineTo(w * 0.78, magmaY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText('Cold Seawater Seeps In (2°C) ↓', w * 0.05, bedY - 45);
      ctx.fillText('↓ Heated by Magma (400°C)', w * 0.65, bedY - 45);

      // 1. Black Smoker Mineral Chimney (Porous anhydrite & polymetallic sulfides)
      const chimneyBaseX = w * 0.48;
      const chimneyTopY = bedY - 130;
      ctx.fillStyle = '#1f2937';
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(chimneyBaseX - 35, bedY + 15);
      ctx.lineTo(chimneyBaseX - 16, chimneyTopY);
      ctx.lineTo(chimneyBaseX + 16, chimneyTopY);
      ctx.lineTo(chimneyBaseX + 38, bedY + 18);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Secondary smaller chimney spire
      ctx.fillStyle = '#1f2937';
      ctx.beginPath();
      ctx.moveTo(chimneyBaseX + 30, bedY + 15);
      ctx.lineTo(chimneyBaseX + 45, chimneyTopY + 45);
      ctx.lineTo(chimneyBaseX + 60, chimneyTopY + 50);
      ctx.lineTo(chimneyBaseX + 70, bedY + 20);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Spawn black smoker mineral particles
      const spawnCount = Math.round((ventTemp / 400) * 4);
      for (let i = 0; i < spawnCount; i++) {
        particles.push({
          x: chimneyBaseX + (Math.random() - 0.5) * 14,
          y: chimneyTopY,
          vx: (Math.random() - 0.5) * 1.8,
          vy: -2.8 - (ventTemp / 400) * 3,
          size: 2 + Math.random() * 4,
          opacity: 0.85,
          isMineral: Math.random() > 0.4,
        });
      }

      // Update and render black smoker plume particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.size += 0.08;
        p.opacity -= 0.007;

        // Mineral color ramp: Superheated core (white/amber) -> Dense black sulfide smoke -> Billowing plume
        if (p.isMineral && mineralPrecipitation) {
          ctx.fillStyle = `rgba(15, 23, 42, ${p.opacity})`; // Iron/Copper Sulfides
        } else {
          ctx.fillStyle = `rgba(30, 41, 59, ${p.opacity * 0.9})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.opacity <= 0 || p.y < 10) {
          particles.splice(i, 1);
        }
      }

      // 2. Giant Riftia Hydrothermal Tube Worm Colonies (Living on the Chimney Flanks)
      if (showChemosynthesis) {
        // Red plumes & white chitinous tubes
        const worms = [
          { x: chimneyBaseX - 32, y: bedY, h: 42, angle: -0.3 },
          { x: chimneyBaseX - 24, y: bedY + 5, h: 48, angle: -0.2 },
          { x: chimneyBaseX - 16, y: bedY + 2, h: 54, angle: -0.1 },
          { x: chimneyBaseX + 22, y: bedY + 4, h: 45, angle: 0.15 },
          { x: chimneyBaseX + 32, y: bedY + 8, h: 50, angle: 0.25 },
          { x: chimneyBaseX + 42, y: bedY + 12, h: 40, angle: 0.35 },
        ];

        worms.forEach((wObj) => {
          ctx.strokeStyle = '#f8fafc'; // White tube
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(wObj.x, wObj.y);
          const topX = wObj.x + Math.sin(wObj.angle + Math.sin(frame * 0.03) * 0.05) * wObj.h;
          const topY = wObj.y - wObj.h;
          ctx.lineTo(topX, topY);
          ctx.stroke();

          // Bright Crimson Plume (Filled with hemoglobin to bind H2S & O2)
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.ellipse(topX, topY - 4, 4, 8, wObj.angle, 0, Math.PI * 2);
          ctx.fill();
        });

        // Label for Chemosynthetic Ecosystem
        ctx.fillStyle = '#f87171';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.fillText('GIANT TUBE WORMS (Riftia pachyptila)', chimneyBaseX - 140, bedY - 60);
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '10px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('Chemosynthetic bacteria in trophosome oxidize H₂S for food without sunlight!', chimneyBaseX - 140, bedY - 46);
      }

      // Hot Vent Exit Temperature Marker
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText(`▲ Superheated Mineral Discharge: ${ventTemp}°C`, chimneyBaseX - 120, chimneyTopY - 14);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, [ventTemp, showChemosynthesis, mineralPrecipitation]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Waves className="w-5 h-5 text-cyan-400" />
            <span>
              {language === 'hi'
                ? 'समुद्र के भीतर हाइड्रोथर्मल वेंट एवं ब्लैक स्मोकर'
                : language === 'or'
                ? 'ସମୁଦ୍ର ଗର୍ଭର ହାଇଡ୍ରୋଥର୍ମାଲ୍ ଭେଣ୍ଟ୍ ଓ ବ୍ଲାକ୍ ସ୍ମୋକର୍'
                : 'Undersea Geothermal Vents & Black Smokers'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'सूर्य की रोशनी के बिना जीवन: 400°C गर्म खनिज फव्वारे और कीमोसिंथेसिस (रसायन-संश्लेषण) आधारित पारिस्थितिकी'
              : language === 'or'
              ? 'ସୂର୍ଯ୍ୟ କିରଣ ବିନା ଗଭୀର ସମୁଦ୍ରରେ ଜୀବନ: ୪୦୦°C ଗରମ ଖଣିଜ ଝରଣା ଓ କେମୋସିନ୍ଥେସିସ୍'
              : 'Deep-ocean hydrothermal circulation: 400°C mineral chimneys & sunlight-free chemosynthetic life'}
          </p>
        </div>

        {/* Action button to trigger sound */}
        <button
          onClick={() => {
            soundEngine.playBubblePop();
            soundEngine.playRumble(600);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-cyan-300 transition-colors"
        >
          <Fish className="w-3.5 h-3.5" />
          <span>Inspect Vent Life</span>
        </button>
      </div>

      {/* Main Grid: Interactive Canvas + Chemistry & Biology Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Interactive Canvas Stage */}
        <div className="lg:col-span-8 bg-neutral-950 p-4 flex flex-col items-center justify-center relative">
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            className="w-full h-auto max-h-[500px] rounded-lg border border-neutral-800 shadow-inner"
          />

          {/* Depth Callout */}
          <div className="absolute top-7 left-7 px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] font-mono text-cyan-400">
            Depth: 2,500m (Abyssal Zone) · Total Darkness · Pressure: 250 atm
          </div>
        </div>

        {/* Right: Controls & Scientific Insight */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Hydrothermal Thermodynamics
            </span>
          </div>

          {/* Vent Fluid Temperature Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-neutral-300">Hydrothermal Fluid Temperature</span>
              <span className="font-mono text-amber-400 font-semibold">{ventTemp}°C</span>
            </div>
            <input
              type="range"
              min={150}
              max={430}
              step={10}
              value={ventTemp}
              onChange={(e) => {
                setVentTemp(Number(e.target.value));
                if (Number(e.target.value) % 40 === 0) soundEngine.playBubblePop();
              }}
              className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
              <span>150°C (White Smoker)</span>
              <span>380°C (Black Smoker)</span>
              <span>430°C (Supercritical)</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
              <span className="text-xs text-neutral-300 font-medium">Show Chemosynthetic Tube Worms</span>
              <input
                type="checkbox"
                checked={showChemosynthesis}
                onChange={(e) => setShowChemosynthesis(e.target.checked)}
                className="accent-red-500 w-4 h-4 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
              <span className="text-xs text-neutral-300 font-medium">Polymetallic Sulfide Minerals</span>
              <input
                type="checkbox"
                checked={mineralPrecipitation}
                onChange={(e) => setMineralPrecipitation(e.target.checked)}
                className="accent-cyan-500 w-4 h-4 cursor-pointer"
              />
            </div>
          </div>

          {/* Seafloor Ocean Chemistry Shifts Telemetry */}
          <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1.5">
              <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Vent Ocean Water Chemistry Shift</span>
              </span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">
                Hydrothermal Plume
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">pH (Extreme Acidity):</span>
                <span className="text-rose-400 font-bold">2.8 pH <span className="text-[9px] text-neutral-400">(vs 8.1 Ocean)</span></span>
              </div>
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">Dissolved O₂:</span>
                <span className="text-red-400 font-bold">0.0 mg/L <span className="text-[9px] text-neutral-400">(Anoxic)</span></span>
              </div>
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">Dissolved H₂S &amp; SO₂:</span>
                <span className="text-amber-400 font-bold">8.4 mmol/kg <span className="text-[9px] text-neutral-400">(Superheated)</span></span>
              </div>
              <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">Metallic Ion Efflux:</span>
                <span className="text-emerald-400 font-bold">Fe, Cu, Zn, Co, Au</span>
              </div>
            </div>

            <p className="text-neutral-300 text-[10px] leading-relaxed">
              {language === 'hi'
                ? 'सक्रिय हाइड्रोथर्मल वेंट के आसपास का पानी अत्यधिक अम्लीय (pH ~2.8) और ऑक्सीजन से पूरी तरह रहित हो जाता है। घुले हुए धातु आयन (तांबा, कोबाल्ट, सोना) 2°C के बर्फीले पानी में मिलते ही तेजी से अवक्षेपित (precipitate) होकर पॉलीमेटैलिक सल्फाइड चिमनी और नोड्यूल का निर्माण करते हैं!'
                : language === 'or'
                ? 'ଭେଣ୍ଟ୍ ନିକଟରେ ପାଣି ଅତ୍ୟଧିକ ଏସିଡିକ୍ (pH ~୨.୮) ଏବଂ ଅମ୍ଳଜାନ ଶୂନ୍ୟ ହୋଇଥାଏ। ଏଠାରେ ତମ୍ବା, କୋବାଲ୍ଟ ଓ ସୁନା ପରି ଧାତୁ ଜମି ନୋଡ୍ୟୁଲ୍ ତିଆରି କରନ୍ତି।'
                : 'Directly around the vent orifice, seawater turns fiercely acidic (pH 2.8) and completely anoxic. Superheated metallic ions (Fe, Cu, Zn, Co, Ni, Au) rapidly nucleate into polymetallic sulfides and seabed nodules as they quench against near-freezing 2°C bottom waters!'}
            </p>
          </div>

          {/* Chemosynthesis vs Photosynthesis Scientific Box */}
          <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 text-xs">
            <div className="font-bold text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Life Without Sunlight (Chemosynthesis)</span>
            </div>
            <p className="text-neutral-300 leading-relaxed text-[11px]">
              {language === 'hi'
                ? 'सतह पर जीवन सूर्य के प्रकाश (प्रकाश-संश्लेषण) पर निर्भर है। लेकिन समुद्र की अतल गहराइयों में जहां रोशनी नहीं पहुंचती, बैक्टीरिया हाइड्रोजन सल्फाइड (H₂S) को ऑक्सीडाइज करके रासायनिक ऊर्जा बनाते हैं!'
                : language === 'or'
                ? 'ସୂର୍ଯ୍ୟାଲୋକ ବିନା ଏଠାରେ ବ୍ୟାକ୍ଟେରିଆ ହାଇଡ୍ରୋଜେନ୍ ସଲଫାଇଡ୍ (H₂S) କୁ ବ୍ୟବହାର କରି କେମୋସିନ୍ଥେସିସ୍ ପ୍ରକ୍ରିୟାରେ ଖାଦ୍ୟ ତିଆରି କରନ୍ତି, ଯାହା ଉପରେ ବିଶାଳ ଟିଉବ୍ ୱାର୍ମ ବଞ୍ଚିଥାନ୍ତି।'
                : 'While surface life relies on solar photosynthesis ($6CO_2 + 6H_2O \to C_6H_{12}O_6 + 6O_2$), hydrothermal ecosystems thrive on bacterial chemosynthesis ($CO_2 + 4H_2S + O_2 \to CH_2O + 4S + 3H_2O$)!'}
            </p>
          </div>

          {/* Black Smoker Minerals Summary */}
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs space-y-1">
            <div className="font-bold text-amber-400">Polymetallic Sulfide Chimneys</div>
            <p className="text-neutral-300 text-[11px]">
              The black "smoke" is actually fine particles of iron, copper, and zinc sulfides (pyrite, chalcopyrite, sphalerite) precipitating when 400°C acidic hydrothermal fluid collides with near-freezing (2°C) alkaline seawater!
            </p>
          </div>

          {/* India's Deep Ocean Mission Spotlight */}
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs space-y-1.5">
            <div className="font-bold text-emerald-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>
                {language === 'hi'
                  ? 'भारत का डीप ओशन मिशन: 4,500 मीटर नीचे खोज'
                  : language === 'or'
                  ? 'ଭାରତର ଡିପ୍ ଓସେନ୍ ମିଶନ୍: ୪,୫୦୦ ମିଟର ଗଭୀରତାରେ ଆବିଷ୍କାର'
                  : 'India’s Deep Ocean Mission: 4,500m Discovery'}
              </span>
            </div>
            <p className="text-neutral-300 text-[11px] leading-relaxed">
              {language === 'hi'
                ? 'हाल ही में भारत के ‘डीप ओशन मिशन’ के तहत भारतीय वैज्ञानिकों ने हिंद महासागर में 4,500 मीटर नीचे एक सक्रिय हाइड्रोथर्मल वेंट की पहली उच्च-रिजॉल्यूशन तस्वीरें ली हैं। यहाँ 370°C+ खौलता पानी और बिना धूप के पनपने वाले ट्यूब वर्म व बैक्टीरिया मौजूद हैं!'
                : language === 'or'
                ? 'ଭାରତର ‘ଡିପ୍ ଓସେନ୍ ମିଶନ୍’ ଅଧୀନରେ ଭାରତୀୟ ବୈଜ୍ଞାନିକମାନେ ଭାରତ ମହାସାଗରରେ ୪,୫୦୦ ମିଟର ଗଭୀରରେ ଏକ ସକ୍ରିୟ ହାଇଡ୍ରୋଥର୍ମାଲ୍ ଭେଣ୍ଟର ପ୍ରଥମ ହାଇ-ରିଜୋଲ୍ୟୁସନ୍ ଫଟୋ ଉତ୍ତୋଳନ କରିଛନ୍ତି।'
                : 'Under India’s Deep Ocean Mission, Indian scientists captured the first high-resolution imagery of an active hydrothermal vent 4,500 meters deep in the Indian Ocean, documenting 370°C+ mineral plumes and chemoautotrophic biodiversity!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
