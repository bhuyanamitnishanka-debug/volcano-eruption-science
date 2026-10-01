/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Flame,
  Zap,
  Gauge,
  Thermometer,
  RotateCcw,
  Sparkles,
  Info,
  Layers,
  Activity,
  ArrowDown,
  CheckCircle,
  Wind,
} from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface SupercriticalVolcanoLabProps {
  language: Language;
}

export const SupercriticalVolcanoLab: React.FC<SupercriticalVolcanoLabProps> = ({ language }) => {
  const [wellDepth, setWellDepth] = useState<number>(4500); // 500m to 5000m
  const [activeFacility, setActiveFacility] = useState<'iddp' | 'olkaria'>('iddp');
  const [isTurbineSpinning, setIsTurbineSpinning] = useState<boolean>(true);

  // Thermodynamic calculations based on well depth approaching magma chamber fringes
  // Critical Point of water: 374.14°C and 221.2 bars (22.1 MPa)
  const pressureBars = Math.round(50 + (wellDepth / 5000) * 220); // up to 270 bars
  const tempCelsius = Math.round(150 + (wellDepth / 5000) * 320); // up to 470°C

  const isSupercritical = tempCelsius >= 374 && pressureBars >= 221;

  // Power output: Conventional ~5-10 MW; Supercritical reaches 50 to 100 MW!
  const powerOutputMw = isSupercritical
    ? Math.round(50 + ((tempCelsius - 374) / 96) * 50)
    : Math.round(5 + (wellDepth / 4000) * 25);

  const enthalpyKjKg = isSupercritical
    ? Math.round(3100 + ((tempCelsius - 374) / 100) * 400)
    : Math.round(1200 + (tempCelsius / 374) * 1400);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span>
              {language === 'hi'
                ? 'ज्वालामुखी से बिजली उत्पादन: सुपरक्रिटिकल भू-तापीय ऊर्जा'
                : language === 'or'
                ? 'ଜ୍ୱାଳାମୁଖୀରୁ ବିଜୁଳି ଉତ୍ପାଦନ: ସୁପରକ୍ରିଟିକାଲ୍ ଭୂ-ତାପୀୟ ଶକ୍ତି'
                : 'Volcanic Power: Supercritical Geothermal Energy Lab'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'मैग्मा चैंबर के किनारे 374°C और 222 बार दबाव पर सुपरक्रिटिकल पानी से 10 गुना अधिक स्वच्छ बिजली'
              : language === 'or'
              ? 'ମାଗ୍ମା ନିକଟରେ ୩୭୪°C ଓ ୨୨୨ ବାର୍ ଚାପରେ ୧୦ ଗୁଣ ଅଧିକ ସ୍ୱଚ୍ଛ ବିଦ୍ୟୁତ ଶକ୍ତି'
              : 'Harvesting 10x electricity from magma margins using supercritical fluids (>374°C, >222 bars)'}
          </p>
        </div>

        {/* Facility Spotlight Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-800 rounded-lg">
          <button
            onClick={() => {
              setActiveFacility('iddp');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
              activeFacility === 'iddp' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Iceland IDDP (Magma Well)
          </button>
          <button
            onClick={() => {
              setActiveFacility('olkaria');
              soundEngine.playBubblePop();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
              activeFacility === 'olkaria' ? 'bg-orange-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Kenya Olkaria (860 MW)
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Well Drilling & Turbine (Left) + Thermodynamics & Case Studies (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Drilling & Power Generation Stage */}
        <div className="lg:col-span-7 bg-neutral-950 p-6 flex flex-col justify-between relative min-h-[460px]">
          {/* Visual Canvas of Deep Volcanic Well & Surface Turbine */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden border border-neutral-800 bg-[#090a0f]">
            <svg viewBox="0 0 540 320" className="w-full h-full">
              <defs>
                {/* Magma Chamber Gradient */}
                <radialGradient id="magmaChamberGlow" cx="50%" cy="100%" r="70%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#c2410c" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.1" />
                </radialGradient>
                {/* Supercritical Steam Plume */}
                <linearGradient id="supercriticalSteam" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>

              {/* Surface Ground & Mountain Horizon */}
              <rect x="0" y="0" width="540" height="70" fill="#0f172a" />
              <polygon points="40,70 120,30 200,70" fill="#1e293b" />
              <polygon points="340,70 420,25 500,70" fill="#1e293b" />
              <line x1="0" y1="70" x2="540" y2="70" stroke="#334155" strokeWidth="2" />

              {/* Surface Geothermal Power Station */}
              <rect x="190" y="32" width="160" height="38" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              {/* Spinning Turbine Generator symbol */}
              <circle
                cx="270"
                cy="51"
                r="14"
                fill="#0f172a"
                stroke={isSupercritical ? '#f59e0b' : '#38bdf8'}
                strokeWidth="2"
                strokeDasharray="4,2"
                className={isTurbineSpinning ? 'animate-spin' : ''}
              />
              <Zap cx="270" cy="51" className="w-4 h-4 text-amber-400" />
              <text x="270" y="24" fill="#fde68a" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                SUPERCRITICAL TURBINE
              </text>

              {/* Subsurface Rock Stratum Layers */}
              {/* Layer 1: Basalt Crust */}
              <rect x="0" y="70" width="540" height="70" fill="#18181b" />
              <text x="20" y="90" fill="#71717a" fontSize="9" fontFamily="JetBrains Mono">
                Basalt Crust (0–1,500m)
              </text>

              {/* Layer 2: Hydrothermal Fracture Zone */}
              <rect x="0" y="140" width="540" height="80" fill="#1c1917" />
              <text x="20" y="160" fill="#78716c" fontSize="9" fontFamily="JetBrains Mono">
                Permeable Fracture Zone (1,500–3,500m)
              </text>

              {/* Layer 3: Magma Chamber Fringes (Supercritical Region) */}
              <rect x="0" y="220" width="540" height="100" fill="url(#magmaChamberGlow)" />
              <text x="20" y="240" fill="#fca5a5" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">
                Magma Chamber Margin (&gt;374°C Supercritical Zone)
              </text>

              {/* Active Magma Body at the base */}
              <ellipse cx="270" cy="320" rx="220" ry="60" fill="#ea580c" opacity="0.85" />
              <ellipse cx="270" cy="320" rx="140" ry="35" fill="#facc15" opacity="0.9" />

              {/* Geothermal Drilling Well Stem */}
              {/* Calculate well tip position */}
              {(() => {
                const wellTipY = 70 + (wellDepth / 5000) * 230;
                return (
                  <g>
                    {/* Steel Casing Line */}
                    <line x1="267" y1="70" x2="267" y2={wellTipY} stroke="#94a3b8" strokeWidth="4" />
                    <line x1="273" y1="70" x2="273" y2={wellTipY} stroke="#94a3b8" strokeWidth="4" />

                    {/* Upward Supercritical Fluid Flow */}
                    <line
                      x1="270"
                      y1={wellTipY}
                      x2="270"
                      y2="70"
                      stroke={isSupercritical ? 'url(#supercriticalSteam)' : '#38bdf8'}
                      strokeWidth="3"
                      strokeDasharray="6,4"
                    />

                    {/* Diamond Drill Head */}
                    <polygon
                      points={`264,${wellTipY} 276,${wellTipY} 270,${wellTipY + 12}`}
                      fill="#f59e0b"
                      stroke="#d97706"
                    />

                    {/* Heat Radiance Ring at Well Tip */}
                    <circle
                      cx="270"
                      cy={wellTipY + 6}
                      r={isSupercritical ? 18 : 10}
                      fill={isSupercritical ? 'rgba(245, 158, 11, 0.4)' : 'rgba(56, 189, 248, 0.3)'}
                      className="animate-ping"
                    />

                    {/* Live Readout Badge at Well Tip */}
                    <rect x="290" y={wellTipY - 14} width="160" height="28" rx="4" fill="#0f172a" stroke="#334155" />
                    <text x="298" y={wellTipY + 4} fill={isSupercritical ? '#f59e0b' : '#38bdf8'} fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                      {isSupercritical ? '★ SUPERCRITICAL FLUID' : 'SUB-CRITICAL WATER'}
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Interactive Well Depth Slider */}
          <div className="mt-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                <ArrowDown className="w-4 h-4 text-amber-400" />
                <span>Geothermal Drilling Depth:</span>
              </span>
              <span className="font-mono text-amber-400 font-bold text-sm">
                {wellDepth.toLocaleString()} meters
              </span>
            </div>

            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={wellDepth}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setWellDepth(val);
                if (val >= 4200 && !isSupercritical) soundEngine.playEruptionBoom();
              }}
              className="w-full accent-amber-500 h-2 bg-neutral-800 rounded-lg cursor-pointer"
            />

            <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
              <span>500m (Hydrothermal)</span>
              <span>2,500m (Conventional)</span>
              <span className="text-amber-400 font-bold">3,800m+ (Supercritical Magma Margin)</span>
            </div>
          </div>
        </div>

        {/* Right: Thermodynamics & Real-World Plants Deck */}
        <div className="lg:col-span-5 p-6 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          {/* Live Physical Diagnostics Matrix */}
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Thermodynamic & Electric Metrics
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
              <span className="text-neutral-500 block">Temperature:</span>
              <span className={`font-mono font-bold text-sm ${tempCelsius >= 374 ? 'text-red-400' : 'text-amber-400'}`}>
                {tempCelsius}°C
              </span>
              <span className="text-[10px] text-neutral-400 block mt-0.5">Critical: 374.14°C</span>
            </div>

            <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
              <span className="text-neutral-500 block">Reservoir Pressure:</span>
              <span className={`font-mono font-bold text-sm ${pressureBars >= 221 ? 'text-amber-400' : 'text-cyan-400'}`}>
                {pressureBars} bars
              </span>
              <span className="text-[10px] text-neutral-400 block mt-0.5">Critical: 221.2 bars</span>
            </div>

            <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
              <span className="text-neutral-500 block">Energy Output per Well:</span>
              <span className={`font-mono font-bold text-sm ${isSupercritical ? 'text-emerald-400' : 'text-neutral-200'}`}>
                {powerOutputMw} MW
              </span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">
                {isSupercritical ? '⚡ 10x Standard Well!' : 'Standard Output'}
              </span>
            </div>

            <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
              <span className="text-neutral-500 block">Steam Enthalpy:</span>
              <span className="font-mono font-bold text-sm text-amber-400">
                {enthalpyKjKg} kJ/kg
              </span>
              <span className="text-[10px] text-neutral-400 block mt-0.5">Ultra-Dense Energy</span>
            </div>
          </div>

          {/* Supercritical State Badge Alert */}
          {isSupercritical ? (
            <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-xl text-xs space-y-2">
              <div className="font-bold text-amber-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Supercritical Thermodynamic State Achieved!</span>
                </span>
                <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">
                  10x Power Output
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-1">
                <div className="bg-neutral-900 p-1.5 rounded border border-neutral-800">
                  <span className="text-neutral-500 block">Surface Tension (γ):</span>
                  <span className="text-amber-400 font-bold">0 mN/m (Micro-Fissure Penetration)</span>
                </div>
                <div className="bg-neutral-900 p-1.5 rounded border border-neutral-800">
                  <span className="text-neutral-500 block">Density &amp; Phase:</span>
                  <span className="text-cyan-400 font-bold">~320 kg/m³ (Liquid/Gas Hybrid)</span>
                </div>
              </div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                {language === 'hi'
                  ? 'पानी अपनी क्रांतिक सीमा (T &gt; 374°C, P &gt; 222 बार) को पार कर चुका है। सतह तनाव (surface tension) शून्य हो जाने से यह गर्म चट्टानों के सूक्ष्म दरारों में आसानी से समा जाता है और 10 गुना अधिक ऊष्मागतिक गतिज ऊर्जा (kinetic energy) टरबाइन तक पहुंचाता है!'
                  : language === 'or'
                  ? 'ପାଣି ଏଠାରେ ସୁପରକ୍ରିଟିକାଲ୍ ଅବସ୍ଥାରେ ପହଞ୍ଚିଛି। ପୃଷ୍ଠତାନ (Surface tension) ଶୂନ୍ୟ ହେତୁ ଏହା ପଥର ଫାଟରେ ପଶି ୧୦ ଗୁଣ ଅଧିକ ଶକ୍ତି ସହ ଟର୍ବାଇନ୍ ଘୁରାଏ।'
                  : 'Water has crossed its critical threshold (T &gt; 374.15°C, P &gt; 221.2 bars). Surface tension vanishes completely (γ = 0), allowing fluid to penetrate rock micro-fissures and transport 10x more thermodynamic kinetic enthalpy (h &gt; 3,100 kJ/kg) to high-yield turbines!'}
              </p>
            </div>
          ) : (
            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs space-y-1">
              <div className="font-bold text-neutral-400 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-neutral-400" />
                <span>Sub-Critical Geothermal Reservoir</span>
              </div>
              <p className="text-neutral-400 text-[11px]">
                Drill deeper toward the magma chamber margin to exceed 374°C and enter the supercritical state for 10x power output.
              </p>
            </div>
          )}

          {/* FACILITY CASE STUDIES */}
          {activeFacility === 'iddp' && (
            <div className="p-3.5 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 text-xs">
              <div className="font-bold text-cyan-400 flex items-center justify-between">
                <span>Iceland Deep Drilling Project (IDDP)</span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded font-mono">Reykjanes & Krafla</span>
              </div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                {language === 'hi'
                  ? 'आइसलैंड के वैज्ञानिकों ने 4,500 मीटर गहराई में सीधे मैग्मा चैंबर के किनारे ड्रिल किया। वहाँ 450°C गर्म सुपरक्रिटिकल भाप मिली, जिससे एक अकेले कुएं ने 50 मेगावाट से अधिक बिजली पैदा कर पारंपरिक कुओं से 10 गुना अधिक दक्षता दर्ज की!'
                  : language === 'or'
                  ? 'ଆଇସଲ୍ୟାଣ୍ଡ ବୈଜ୍ଞାନିକମାନେ ୪,୫୦୦ ମିଟର ଖୋଳି ସିଧାସଳଖ ମାଗ୍ମା ପାଖରେ ୪୫୦°C ସୁପରକ୍ରିଟିକାଲ୍ ବାଷ୍ପ ପାଇଥିଲେ, ଯାହା ଗୋଟିଏ କୂଅରୁ ୫୦ MW ରୁ ଅଧିକ ବିଜୁଳି ଉତ୍ପନ୍ନ କରିଥିଲା!'
                  : 'Engineers in Iceland drilled 4.5 km deep into the fringe of a molten rhyolite magma chamber, encountering 450°C supercritical steam. A single IDDP well produces up to 50–100 MW of power, revolutionizing baseload geothermal energy.'}
              </p>
            </div>
          )}

          {activeFacility === 'olkaria' && (
            <div className="p-3.5 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 text-xs">
              <div className="font-bold text-orange-400 flex items-center justify-between">
                <span>Olkaria Geothermal Complex, Kenya</span>
                <span className="text-[10px] bg-orange-950 text-orange-300 px-1.5 py-0.5 rounded font-mono">Great Rift Valley</span>
              </div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                {language === 'hi'
                  ? 'केन्या के ओल्कारिया में सक्रिय ज्वालामुखी रिफ्ट के भीतर 300°C भाप के कुएं खोदे गए हैं। यह संयंत्र 860+ मेगावाट बिजली उत्पन्न करता है, जिससे केन्या की कुल राष्ट्रीय बिजली मांग का लगभग 50% सीधे ज्वालामुखी की गर्मी से पूरा होता है!'
                  : language === 'or'
                  ? 'କେନିଆର ଓଲକାରିଆରେ ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ ମଧ୍ୟରୁ ୩୦୦°C ଗରମ ବାଷ୍ପ କାଢ଼ି ୮୬୦ MW ବିଜୁଳି ତିଆରି ହୁଏ, ଯାହା କେନିଆର ସମଗ୍ର ଦେଶର ପ୍ରାୟ ୫୦% ବିଦ୍ୟୁତ ଚାହିଦା ମେଣ୍ଟାଏ!'
                  : 'Kenya drilled directly into the active volcanic system of the Great Rift Valley, generating over 860 MW of electricity. Today, nearly 50% of Kenya’s national electricity is powered directly by active volcanic steam!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
