/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Compass,
  Layers,
  Thermometer,
  Gauge,
  Sparkles,
  Info,
  Shield,
  Anchor,
  Droplets,
  BookOpen,
  ArrowDown,
  Activity,
  Zap,
  Cpu,
  Volume2,
  Atom,
  Flame,
} from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface SamudrayaanSimProps {
  language: Language;
}

export const SamudrayaanSim: React.FC<SamudrayaanSimProps> = ({ language }) => {
  const [depth, setDepth] = useState<number>(4500); // 0 to 6000 meters
  const [activeTab, setActiveTab] = useState<'matsya' | 'ebw' | 'nodules' | 'institutions' | 'ancient' | 'kumarikandam'>('matsya');
  const [headlightsOn, setHeadlightsOn] = useState<boolean>(true);
  const [ebwVoltage, setEbwVoltage] = useState<number>(120); // 60 to 150 kV
  const [weldingMethod, setWeldingMethod] = useState<'ebw' | 'arc'>('ebw');
  const [ancientScript, setAncientScript] = useState<'sanskrit' | 'tamil'>('sanskrit');

  // Dynamic physical calculations based on depth
  const pressureAtm = Math.round(1 + depth / 10); // ~1 atm per 10m
  const pressureMpa = (pressureAtm * 0.101325).toFixed(1);
  const tempCelsius =
    depth < 200
      ? (28 - (depth / 200) * 12).toFixed(1)
      : depth < 1000
      ? (16 - ((depth - 200) / 800) * 11).toFixed(1)
      : depth < 3000
      ? (5 - ((depth - 1000) / 2000) * 3).toFixed(1)
      : '1.8';

  let oceanicZone = 'Epipelagic (Sunlit Zone)';
  let zoneColor = '#38bdf8';
  if (depth > 4000) {
    oceanicZone = 'Abyssopelagic (Abyss: Pitch Black)';
    zoneColor = '#a855f7';
  } else if (depth > 1000) {
    oceanicZone = 'Bathypelagic (Midnight Zone)';
    zoneColor = '#6366f1';
  } else if (depth > 200) {
    oceanicZone = 'Mesopelagic (Twilight Zone)';
    zoneColor = '#0284c7';
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Anchor className="w-5 h-5 text-cyan-400" />
            <span>
              {language === 'hi'
                ? 'समुद्रयान मिशन एवं मत्स्य 6000: 6,000 मीटर अतल गहराइयां'
                : language === 'or'
                ? 'ସମୁଦ୍ରଯାନ ମିଶନ୍ ଓ ମତ୍ସ୍ୟ ୬୦୦୦: ୬,୦୦୦ ମିଟର ଗଭୀର ସମୁଦ୍ର'
                : 'Samudrayaan Mission & Matsya 6000: The 6,000m Abyss'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'पृथ्वी विज्ञान मंत्रालय (MoES) का डीप ओशन मिशन: टाइटेनियम सबमर्सिबल, पॉलीमेटैलिक नोड्यूल और कुमारी कंदम भूविज्ञान'
              : language === 'or'
              ? 'ଭାରତର ଡିପ୍ ଓସେନ୍ ମିଶନ୍: ଟାଇଟାନିୟମ୍ ସବମର୍ସିବଲ୍, ଖଣିଜ ନୋଡ୍ୟୁଲ୍ ଓ କୁମାରୀ କନ୍ଦମ୍ ଭୌଗୋଳିକ ଇତିହାସ'
              : 'Ministry of Earth Sciences (MoES) Deep Ocean Mission: Titanium submersible, polymetallic nodules & Kumari Kandam'}
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-800 rounded-lg overflow-x-auto scrollbar-none">
          <button
            onClick={() => {
              setActiveTab('matsya');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap ${
              activeTab === 'matsya' ? 'bg-cyan-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Matsya 6000 Specs
          </button>
          <button
            onClick={() => {
              setActiveTab('ebw');
              soundEngine.playZap();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap flex items-center gap-1 ${
              activeTab === 'ebw' ? 'bg-violet-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>EBW Metallurgy (80mm Ti)</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('nodules');
              soundEngine.playBubblePop();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap ${
              activeTab === 'nodules' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Polymetallic Nodules & Vents
          </button>
          <button
            onClick={() => {
              setActiveTab('institutions');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap ${
              activeTab === 'institutions' ? 'bg-indigo-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Bharat Ocean Triad
          </button>
          <button
            onClick={() => {
              setActiveTab('ancient');
              soundEngine.playChime();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap flex items-center gap-1 ${
              activeTab === 'ancient' ? 'bg-rose-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ancient Sanskrit & Tamil Shlokas</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('kumarikandam');
              soundEngine.playChime();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap ${
              activeTab === 'kumarikandam' ? 'bg-emerald-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Kumari Kandam Lore
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Descent Canvas (Left) + Mission Deck (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Dive Visualizer Stage */}
        <div className="lg:col-span-7 bg-neutral-950 p-6 flex flex-col justify-between relative min-h-[440px]">
          {/* SVG Submersible & Ocean Column Simulation */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden border border-neutral-800 bg-[#030712]">
            {/* Water Depth Background Gradient */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to bottom, #0284c7 0%, #0369a1 15%, #075985 30%, #0c4a6e 50%, #082f49 70%, #020617 100%)`,
                opacity: Math.max(0.15, 1 - depth / 3000),
              }}
            />

            {/* Depth Markers Overlay */}
            <div className="absolute left-3 top-3 text-[10px] font-mono text-cyan-400/80 space-y-1">
              <div>Zone: {oceanicZone}</div>
              <div>Hydrostatic Pressure: {pressureAtm} atm ({pressureMpa} MPa)</div>
              <div>Water Temp: {tempCelsius}°C</div>
            </div>

            {/* Submersible SVG Graphics (Matsya 6000) */}
            <svg viewBox="0 0 500 300" className="w-full h-full relative z-10">
              <defs>
                {/* Metallic Submersible Shading */}
                <linearGradient id="hullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="60%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
                {/* Headlight Beam */}
                <radialGradient id="headlightBeam" cx="15%" cy="50%" r="85%">
                  <stop offset="0%" stopColor="rgba(254, 240, 138, 0.55)" />
                  <stop offset="40%" stopColor="rgba(253, 224, 71, 0.2)" />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                </radialGradient>
              </defs>

              {/* Headlights beam into the deep ocean void */}
              {headlightsOn && (
                <polygon
                  points="210,145 480,80 480,220 210,155"
                  fill="url(#headlightBeam)"
                  className="transition-opacity duration-300"
                />
              )}

              {/* Abyssal Seafloor if depth > 4500m */}
              {depth >= 4500 && (
                <g>
                  {/* Rocky basalt ocean floor */}
                  <path d="M 0 260 Q 150 250 280 265 T 500 255 L 500 300 L 0 300 Z" fill="#0f172a" />
                  {/* Polymetallic Nodules scattered on seabed */}
                  <ellipse cx="80" cy="275" rx="8" ry="4" fill="#334155" stroke="#475569" />
                  <ellipse cx="120" cy="282" rx="11" ry="5" fill="#1e293b" stroke="#334155" />
                  <ellipse cx="360" cy="272" rx="10" ry="5" fill="#334155" stroke="#475569" />
                  <ellipse cx="420" cy="280" rx="14" ry="6" fill="#1e293b" stroke="#334155" />
                  <ellipse cx="460" cy="270" rx="9" ry="4" fill="#334155" stroke="#475569" />
                  <text x="380" y="294" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">
                    Polymetallic Nodules (Mn, Ni, Co, Cu)
                  </text>
                </g>
              )}

              {/* MATSYA 6000 SUBMERSIBLE BODY */}
              <g transform="translate(110, 80)">
                {/* Yellow Streamlined Hydrodynamic Fairing Body */}
                <ellipse cx="80" cy="65" rx="85" ry="55" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
                <path d="M 20 65 L 140 65" stroke="#ca8a04" strokeWidth="2" strokeDasharray="4,4" />

                {/* Titanium Personnel Sphere (2.1m diameter, 80mm thick titanium alloy) */}
                <circle cx="80" cy="65" r="42" fill="url(#hullGrad)" stroke="#475569" strokeWidth="3" />
                {/* 3 Aquanauts silhouette viewports */}
                <circle cx="95" cy="65" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="95" cy="65" r="10" fill="#0f172a" opacity="0.6" />

                {/* Conning tower / hatch */}
                <rect x="68" y="6" width="24" height="15" rx="4" fill="#ca8a04" stroke="#a16207" />

                {/* Robotic Manipulator Arm reaching to seafloor */}
                <path d="M 140 85 L 175 115 L 195 140" fill="none" stroke="#64748b" strokeWidth="4" />
                <circle cx="195" cy="140" r="4" fill="#38bdf8" />
                <polygon points="193,140 205,135 205,145" fill="#94a3b8" />

                {/* Propulsion Stern Thruster */}
                <rect x="-18" y="55" width="22" height="20" rx="3" fill="#334155" stroke="#1e293b" />
                {/* Bubble wake */}
                <circle cx="-24" cy="62" r="3" fill="#bae6fd" opacity="0.6" />
                <circle cx="-32" cy="66" r="4" fill="#bae6fd" opacity="0.4" />

                {/* Flag & Insignia: Bharat / MoES */}
                <rect x="55" y="42" width="20" height="10" rx="1" fill="#f97316" />
                <rect x="55" y="45" width="20" height="4" fill="#ffffff" />
                <rect x="55" y="49" width="20" height="3" fill="#16a34a" />
                <circle cx="65" cy="47" r="1.5" fill="#1d4ed8" />

                {/* High-Intensity LED Lights */}
                <circle cx="155" cy="50" r="5" fill="#fef08a" stroke="#ca8a04" />
                <circle cx="155" cy="80" r="5" fill="#fef08a" stroke="#ca8a04" />

                <text x="80" y="130" fill="#fef08a" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  MATSYA 6000
                </text>
                <text x="80" y="142" fill="#cbd5e1" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                  Titanium Sphere · 3 Aquanauts · 6,000m Depth
                </text>
              </g>
            </svg>
          </div>

          {/* Interactive Depth Descent Slider */}
          <div className="mt-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                <ArrowDown className="w-4 h-4 text-cyan-400" />
                <span>Submersible Descent Depth:</span>
              </span>
              <span className="font-mono text-cyan-400 font-bold text-sm">
                {depth.toLocaleString()} meters
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="6000"
              step="100"
              value={depth}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setDepth(val);
                if (val % 1000 === 0) soundEngine.playRumble(250);
              }}
              className="w-full accent-cyan-500 h-2 bg-neutral-800 rounded-lg cursor-pointer"
            />

            <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
              <span>0m (Surface)</span>
              <span>2,000m</span>
              <span>4,500m (Hydrothermal Vents)</span>
              <span>6,000m (Max Target)</span>
            </div>
          </div>
        </div>

        {/* Right: Technical & Historical Information Deck */}
        <div className="lg:col-span-5 p-6 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          {/* MATSYA 6000 SPECS VIEW */}
          {activeTab === 'matsya' && (
            <div className="space-y-4 text-xs">
              <div className="border-b border-neutral-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Submersible Engineering Specifications
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block">Crew Capacity:</span>
                  <span className="text-white font-bold">3 Aquanauts (Scientists)</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block">Personnel Sphere:</span>
                  <span className="text-amber-400 font-bold">2.1m Titanium Alloy (80mm)</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block">Crush Depth Rating:</span>
                  <span className="text-cyan-400 font-bold">6,000 Meters (600 atm)</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block">Endurance:</span>
                  <span className="text-emerald-400 font-bold">12 hrs normal / 96 hrs emergency</span>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="overflow-hidden rounded-lg border border-neutral-800">
                <table className="w-full text-[11px] text-left">
                  <thead className="bg-neutral-950 text-neutral-400 font-mono border-b border-neutral-800">
                    <tr>
                      <th className="p-2">Parameter</th>
                      <th className="p-2">Engineering Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60 bg-neutral-950/40">
                    <tr>
                      <td className="p-2 text-neutral-400">Max Depth</td>
                      <td className="p-2 font-mono font-bold text-cyan-400">6,000 meters (~20,000 ft)</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-neutral-400">Personnel Sphere</td>
                      <td className="p-2 text-white font-medium">Titanium Alloy (Ti6Al4V - ELI Grade)</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-neutral-400">Wall Thickness</td>
                      <td className="p-2 text-amber-400 font-bold">80 mm (Electron-beam welded by ISRO VSSC)</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-neutral-400">Internal Atmosphere</td>
                      <td className="p-2 text-neutral-200">1.0 atm (Normal Surface Pressure)</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-neutral-400">Pressure Rating</td>
                      <td className="p-2 text-red-400 font-mono">600 to 720 bars crush endurance</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-neutral-400">Safety Mechanisms</td>
                      <td className="p-2 text-emerald-400">DNV-certified, triple weight-drop emergency ascent</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-neutral-400">Total Vehicle Mass</td>
                      <td className="p-2 font-mono text-neutral-300">~20 Metric Tons</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>Strategic Autonomy (Elite 6-Nation Club)</span>
                </div>
                <p className="text-neutral-300 leading-relaxed text-[11px]">
                  {language === 'hi'
                    ? 'भारत इस मिशन के साथ उन चुनिंदा 6 देशों (अमेरिका, रूस, फ्रांस, जापान, चीन, भारत) के एलीट क्लब में शामिल हो गया है जो गहरे समुद्र में 6,000 मीटर नीचे मानवयुक्त अनुसंधान करने में सक्षम हैं।'
                    : language === 'or'
                    ? 'ଭାରତ ଏହି ମିଶନ୍ ସହ ଆମେରିକା, ରୁଷିଆ, ଫ୍ରାନ୍ସ, ଜାପାନ ଓ ଚୀନ୍ ପରି ଶକ୍ତିଶାଳୀ ଦେଶମାନଙ୍କ ତାଲିକାରେ ୬ଷ୍ଠ ଦେଶ ଭାବେ ସାମିଲ ହୋଇଛି।'
                    : 'With Matsya 6000, Bharat joins an elite 6-nation club (US, Russia, France, Japan, China, India) possessing indigenous crewed deep-submergence capability to 6,000m depths.'}
                </p>
              </div>

              <button
                onClick={() => {
                  setHeadlightsOn(!headlightsOn);
                  soundEngine.playCrack();
                }}
                className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Toggle Submersible High-Power LEDs ({headlightsOn ? 'ON' : 'OFF'})</span>
              </button>
            </div>
          )}

          {/* BHARAT OCEAN INSTITUTIONS & FUTURISTIC HABITATS VIEW */}
          {activeTab === 'institutions' && (
            <div className="space-y-4 text-xs">
              <div className="border-b border-neutral-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  National Ocean Institutions & Undersea Habitats
                </span>
              </div>

              <div className="space-y-2.5">
                {/* NIOT */}
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-400">NIOT, Chennai (Est. 1993)</span>
                    <span className="text-[10px] text-neutral-400 font-mono">MoES Nodal Agency</span>
                  </div>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">
                    National Institute of Ocean Technology spearheads the Samudrayaan project, deep-sea mining crawlers, Low-Temperature Thermal Desalination (LTTD), and underwater acoustic systems.
                  </p>
                </div>

                {/* NIO */}
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-400">NIO, Goa (CSIR)</span>
                    <span className="text-[10px] text-neutral-400 font-mono">Oceanographic Pioneer</span>
                  </div>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">
                    Focuses on seafloor bathymetric mapping, marine biological bioprospecting, chemical oceanography, and monitoring coastal and mangrove ecosystem health.
                  </p>
                </div>

                {/* INCOIS */}
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400">INCOIS, Hyderabad</span>
                    <span className="text-[10px] text-neutral-400 font-mono">Real-Time Data & Tsunami</span>
                  </div>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">
                    Operates the Indian Tsunami Early Warning Centre (ITEWC), real-time satellite ocean observations, and daily Potential Fishing Zone (PFZ) advisories for coastal communities.
                  </p>
                </div>

                {/* Futuristic Seabed Habitats */}
                <div className="p-2.5 bg-indigo-950/40 rounded-lg border border-indigo-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-indigo-300">Futuristic Under-Ocean Habitats (20–100m)</span>
                    <span className="text-[10px] text-amber-400 font-mono">Next-Gen Science</span>
                  </div>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">
                    {language === 'hi'
                      ? 'भविष्य की स्थायी मॉड्यूलर समुद्र-तल प्रयोगशालाएं 20 से 100 मीटर गहराई पर लंगर डालकर स्थापित की जाएंगी। इनमें सैचुरेशन डाइविंग लॉक, वायुमंडलीय स्क्रबर और समुद्री धाराओं से बनी बिजली होगी, जिससे वैज्ञानिक महीनों तक पानी के नीचे रहकर अनुसंधान कर सकेंगे।'
                      : language === 'or'
                      ? 'ଭବିଷ୍ୟତର ସ୍ଥାୟୀ ସମୁଦ୍ର-ତଳ ଗବେଷଣାଗାର ୨୦ ରୁ ୧୦୦ ମିଟର ଗଭୀରତାରେ ବସାଯିବ, ଯେଉଁଠାରେ ବୈଜ୍ଞାନିକମାନେ ମାସ ମାସ ଧରି ପାଣି ତଳେ ରହି ଗବେଷଣା କରିପାରିବେ।'
                      : 'Permanent seabed modular laboratories anchored at 20–100m depths with saturation diving airlocks, atmospheric scrubbers, and tidal energy—allowing aquanauts to live underwater for months continuous research!'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* POLYMETALLIC NODULES VIEW */}
          {activeTab === 'nodules' && (
            <div className="space-y-4 text-xs">
              <div className="border-b border-neutral-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Central Indian Ocean Mineral Wealth
                </span>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                <div className="font-semibold text-amber-400">Potato-Sized Polymetallic Nodules</div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {language === 'hi'
                    ? 'मध्य हिंद महासागरीय बेसिन में 4,000 से 5,500 मीटर नीचे आलू के आकार के पत्थर बिखरे हैं जिनमें कोबाल्ट, निकल, तांबा और मैंगनीज प्रचुर मात्रा में हैं। ये इलेक्ट्रिक वाहन (EV) बैटरी और स्वच्छ ऊर्जा के लिए रीढ़ की हड्डी हैं।'
                    : language === 'or'
                    ? 'ସମୁଦ୍ର ଗର୍ଭରେ ଥିବା ଏହି ଆଳୁ ଆକାରର ପଥରଗୁଡ଼ିକ କୋବାଲ୍ଟ, ନିକେଲ୍, ତମ୍ବା ଓ ମାଙ୍ଗାନିଜ୍ରେ ଭରପୂର, ଯାହା ବୈଦ୍ୟୁତିକ ଗାଡ଼ି (EV) ବ୍ୟାଟେରୀ ପାଇଁ ଅତ୍ୟନ୍ତ ଆବଶ୍ୟକ।'
                    : 'The Central Indian Ocean seafloor at 4,000–5,500m is strewn with potato-sized polymetallic nodules packed with critical EV battery metals: Cobalt (Co), Nickel (Ni), Copper (Cu), and Manganese (Mn).'}
                </p>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                <div className="font-semibold text-cyan-400">Central Indian Ridge Polymetallic Sulphides</div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {language === 'hi'
                    ? 'मध्य-महासागरीय कटक पर 400°C गर्म हाइड्रोथर्मल वेंट के पास सोने, चांदी, तांबे और जस्ता के विशाल भंडार मौजूद हैं। रोबोटिक क्रॉलर द्वारा इन नाजुक पारिस्थितिक तंत्रों का मानचित्रण किया जा रहा है।'
                    : language === 'or'
                    ? '୪୦୦°C ଗରମ ହାଇଡ୍ରୋଥର୍ମାଲ୍ ଭେଣ୍ଟ୍ ନିକଟରେ ସୁନା, ରୂପା, ତମ୍ବା ଓ ଜିଙ୍କ୍ର ବିଶାଳ ଭଣ୍ଡାର ରହିଛି।'
                    : 'Hydrothermal vents along the Central Indian Ridge precipitate massive polymetallic sulfides rich in Gold, Silver, Zinc, and Copper, while sustaining novel chemosynthetic enzymes.'}
                </p>
              </div>
            </div>
          )}

          {/* KUMARI KANDAM GEOLOGY VIEW */}
          {activeTab === 'kumarikandam' && (
            <div className="space-y-4 text-xs">
              <div className="border-b border-neutral-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Kumari Kandam: Sangam Lore vs Geological Science
                </span>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>The Literary Deluge (*Kadal Kol*)</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {language === 'hi'
                    ? 'प्राचीन तमिल संगम साहित्य (शिलप्पादिकारम, मणिमेखलै) में पांड्य राजाओं द्वारा शासित विशाल भूभाग "कुमारी कंदम" का उल्लेख है, जो समुद्र के अतिक्रमण (कडल कोल) से जलमग्न हो गया और तमिल अकादमियों को मदुरै की ओर पलायन करना पड़ा।'
                    : language === 'or'
                    ? 'ପ୍ରାଚୀନ ତାମିଲ ସଙ୍ଗମ ସାହିତ୍ୟରେ "କୁମାରୀ କନ୍ଦମ୍" ନାମକ ବିଶାଳ ରାଜ୍ୟର ବର୍ଣ୍ଣନା ଅଛି, ଯାହା ସମୁଦ୍ର ମାଡ଼ି ଆସିବା (Kadal Kol) ଯୋଗୁଁ ବୁଡ଼ି ଯାଇଥିଲା।'
                    : 'Classical Sangam texts (Silappadhikaram, Manimekalai) record the submerged realm of Kumari Kandam (Kumari Nadu), birthplace of the early Tamil Sangams, inundated by catastrophic ocean encroachments (*Kadal Kol*).'}
                </p>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1.5">
                <div className="font-semibold text-cyan-400 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>Sangam Maritime Geography & *Neythal*</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {language === 'hi'
                    ? 'संगम साहित्य में तटीय परिदृश्य को "नेथल" (Neythal) के रूप में सटीक रूप से वर्गीकृत किया गया था। प्राचीन तमिल नाविकों को मानसूनी हवाओं, समुद्री धाराओं और समुद्र तल की गहराई का गहरा ज्ञान था, जिससे वे हिंद महासागर के पार व्यापारिक मार्ग संचालित करते थे।'
                    : language === 'or'
                    ? 'ସଙ୍ଗମ ସାହିତ୍ୟରେ ଉପକୂଳବର୍ତ୍ତୀ ଅଞ୍ଚଳକୁ "ନେଥଲ୍" (Neythal) କୁହାଯାଉଥିଲା। ପ୍ରାଚୀନ ନାବିକମାନେ ମୌସୁମୀ ବାୟୁ ଓ ସମୁଦ୍ର ସ୍ରୋତ ବ୍ୟବହାର କରି ବାଣିଜ୍ୟ କରୁଥିଲେ।'
                    : 'Sangam literature systematically categorized coastal and marine ecosystems as *Neythal*. Ancient Tamil navigators possessed sophisticated hydrographic knowledge of monsoonal wind patterns and ocean currents long before modern cartography.'}
                </p>
              </div>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                <div className="font-semibold text-amber-400">The Modern Geological Reality</div>
                <div className="space-y-1.5 text-neutral-300 text-[11px]">
                  <div>
                    <strong className="text-white">1. Gondwana Supercontinent (120 Ma):</strong> India, Madagascar, Australia, and Antarctica were physically contiguous before oceanic rifting tore them apart.
                  </div>
                  <div>
                    <strong className="text-white">2. Ice Age Shelf Exposure (20,000 BP):</strong> During the Last Glacial Maximum, sea levels were 100–120m lower. The entire continental shelf off Kanyakumari, Gulf of Mannar, and Ram Setu was exposed fertile dry land!
                  </div>
                  <div>
                    <strong className="text-white">3. Capricorn Plate Tectonics:</strong> The Indo-Australian plate is currently splitting along the Central Indian Basin, directly under the waters of this ancient geographical legend.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HEAVY METALLURGY: ELECTRON BEAM WELDING (EBW) VIEW */}
          {activeTab === 'ebw' && (
            <div className="space-y-4 text-xs">
              <div className="border-b border-neutral-800 pb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-violet-400" />
                  <span>Electron Beam Welding (EBW) & Metallurgy</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono text-[10px]">
                  ISRO VSSC Synthesis
                </span>
              </div>

              {/* Interactive Welding Method Comparison Toggle */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setWeldingMethod('ebw');
                    soundEngine.playZap();
                  }}
                  className={`p-2 rounded-lg border text-left transition-all ${
                    weldingMethod === 'ebw'
                      ? 'bg-violet-950/60 border-violet-500 text-white shadow-md'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1 text-xs">
                    <Atom className="w-3.5 h-3.5 text-violet-400" />
                    <span>Electron Beam (EBW)</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">High Vacuum · Keyhole · Narrow HAZ</div>
                </button>

                <button
                  onClick={() => {
                    setWeldingMethod('arc');
                    soundEngine.playCrack();
                  }}
                  className={`p-2 rounded-lg border text-left transition-all ${
                    weldingMethod === 'arc'
                      ? 'bg-amber-950/60 border-amber-500 text-white shadow-md'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1 text-xs">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Standard Arc (TIG/MIG)</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">Atmospheric Shield · Wide HAZ</div>
                </button>
              </div>

              {/* Dynamic SVG Schematic: 80mm Titanium Alloy Cross-Section */}
              <div className="p-3 bg-[#080910] rounded-xl border border-neutral-800 space-y-2">
                <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400">
                  <span>80mm Ti-6Al-4V ELI Weld Profile:</span>
                  <span className={weldingMethod === 'ebw' ? 'text-violet-400 font-bold' : 'text-amber-400 font-bold'}>
                    {weldingMethod === 'ebw' ? 'HAZ: 1.2 mm (Zero Porosity)' : 'HAZ: 14.5 mm (Thermal Distortion)'}
                  </span>
                </div>

                <svg viewBox="0 0 360 140" className="w-full h-auto bg-neutral-950 rounded-lg border border-neutral-800/80">
                  <defs>
                    <linearGradient id="ebwBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                    </linearGradient>
                    <radialGradient id="arcPlasmaGrad" cx="50%" cy="30%" r="60%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#b45309" stopOpacity="0.2" />
                    </radialGradient>
                  </defs>

                  {/* Left Titanium Plate (80mm thick representation) */}
                  <rect x="20" y="40" width="150" height="85" fill="#334155" stroke="#475569" strokeWidth="1.5" />
                  <text x="30" y="85" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">
                    Ti-6Al-4V (80mm)
                  </text>

                  {/* Right Titanium Plate */}
                  <rect x="190" y="40" width="150" height="85" fill="#334155" stroke="#475569" strokeWidth="1.5" />
                  <text x="210" y="85" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">
                    Ti-6Al-4V (80mm)
                  </text>

                  {/* Welding Joint Comparison Visualization */}
                  {weldingMethod === 'ebw' ? (
                    <g>
                      {/* Vacuum Electron Beam Gun */}
                      <polygon points="172,5 188,5 182,38 178,38" fill="#7e22ce" stroke="#a855f7" />
                      {/* Focused Beam (Ultra-narrow, high kinetic energy) */}
                      <line x1="180" y1="5" x2="180" y2="125" stroke="url(#ebwBeamGrad)" strokeWidth="3" />
                      <line x1="180" y1="5" x2="180" y2="125" stroke="#ffffff" strokeWidth="1" />
                      {/* Deep Keyhole Penetration with Narrow HAZ */}
                      <path d="M 175 40 L 178 125 L 182 125 L 185 40 Z" fill="#c084fc" opacity="0.8" />
                      {/* Heat Affected Zone (HAZ) - Very narrow */}
                      <path d="M 172 40 L 176 125 L 184 125 L 188 40 Z" fill="none" stroke="#e879f9" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="180" y="136" fill="#c084fc" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
                        Deep Keyhole Melt (HAZ &lt;1.5mm)
                      </text>
                    </g>
                  ) : (
                    <g>
                      {/* Arc Welding Torch */}
                      <rect x="173" y="8" width="14" height="25" fill="#d97706" />
                      {/* Broad Arc Flare */}
                      <circle cx="180" cy="40" r="28" fill="url(#arcPlasmaGrad)" />
                      {/* Wide Shallow Weld Pool with Massive HAZ */}
                      <path d="M 155 40 Q 180 85 205 40 Z" fill="#f59e0b" opacity="0.7" />
                      {/* Micro-porosity bubbles under high pressure */}
                      <circle cx="175" cy="55" r="2" fill="#ef4444" />
                      <circle cx="184" cy="62" r="1.5" fill="#ef4444" />
                      <circle cx="178" cy="70" r="2.5" fill="#ef4444" />
                      <text x="180" y="105" fill="#ef4444" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
                        Shallow Depth &amp; Porosity Risk!
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Voltage & Vacuum Kinetic Energy Slider */}
              {weldingMethod === 'ebw' && (
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-300 font-medium">Electron Acceleration Voltage:</span>
                    <span className="font-mono text-violet-400 font-bold">{ebwVoltage} kV</span>
                  </div>
                  <input
                    type="range"
                    min={60}
                    max={150}
                    step={5}
                    value={ebwVoltage}
                    onChange={(e) => {
                      setEbwVoltage(Number(e.target.value));
                      if (Number(e.target.value) % 20 === 0) soundEngine.playZap();
                    }}
                    className="w-full accent-violet-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-neutral-400 pt-1">
                    <div className="bg-neutral-900 p-1.5 rounded">
                      <span className="text-neutral-500 block">Vacuum:</span>
                      <span className="text-cyan-400 font-bold">&lt;10⁻⁴ mbar</span>
                    </div>
                    <div className="bg-neutral-900 p-1.5 rounded">
                      <span className="text-neutral-500 block">Power Density:</span>
                      <span className="text-violet-400 font-bold">&gt;10⁷ W/cm²</span>
                    </div>
                    <div className="bg-neutral-900 p-1.5 rounded">
                      <span className="text-neutral-500 block">Crush Endurance:</span>
                      <span className="text-emerald-400 font-bold">600 bars (60 MPa)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Explanation Card */}
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-violet-400" />
                  <span>Why EBW is Mandatory for 6,000m Abyssal Hulls</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {language === 'hi'
                    ? '6,000 मीटर नीचे 600 बार का हाइड्रोस्टेटिक दबाव किसी भी सूक्ष्म छिद्र (micro-porosity) या वेल्डिंग की कमजोरी पर केंद्रित होकर सबमर्सिबल को सेकंड के सौवें हिस्से में नष्ट कर सकता है। इलेक्ट्रॉन बीम वेल्डिंग (EBW) निर्वात (vacuum) में 120,000 वोल्ट से त्वरित इलेक्ट्रॉनों की गतिज ऊर्जा को सीधे ऊष्मा में बदलकर 80 मिमी मोटे टाइटेनियम को बिना किसी वायुमंडलीय संदूषण या विकृति के जोड़ती है।'
                    : language === 'or'
                    ? '୬,୦୦୦ ମିଟର ଗଭୀରତାରେ ୬୦୦ ବାର୍ ଚାପ ସାମାନ୍ୟତମ ଛିଦ୍ରକୁ ବି ବିସ୍ଫୋରକ ଭାବେ ଚୂର୍ଣ୍ଣ କରିଦେଇପାରେ। ଇଲେକ୍ଟ୍ରନ୍ ବିମ୍ ୱେଲ୍ଡିଂ (EBW) ନିର୍ବାତ କୋଠରୀରେ ୮୦ ମିମି ଟାଇଟାନିୟମ୍କୁ ବିନା କୌଣସି ଫାଟରେ ଯୋଡ଼ିଥାଏ।'
                    : 'At 6,000m depth under 600 bars of hydrostatic pressure, any microscopic void or gas porosity acts as a catastrophic stress concentrator. Electron Beam Welding (EBW) bombards the joint in high vacuum (<10⁻⁴ mbar) with electrons accelerated to ~0.5c. Kinetic energy converts instantly to heat, creating deep keyhole fusion with virtually zero Heat-Affected Zone (HAZ), eliminating micro-cracking in the 80mm Ti-6Al-4V sphere.'}
                </p>
              </div>
            </div>
          )}

          {/* ANCIENT SCIENTIFIC RECORDS: SANSKRIT & TAMIL SHLOKAS VIEW */}
          {activeTab === 'ancient' && (
            <div className="space-y-4 text-xs">
              <div className="border-b border-neutral-800 pb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-rose-400" />
                  <span>Ancient Indian Geophysical & Metallurgical Texts</span>
                </span>
                {/* Script Selector */}
                <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-md border border-neutral-800">
                  <button
                    onClick={() => {
                      setAncientScript('sanskrit');
                      soundEngine.playChime();
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      ancientScript === 'sanskrit' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400'
                    }`}
                  >
                    संस्कृत (Vadavamukha)
                  </button>
                  <button
                    onClick={() => {
                      setAncientScript('tamil');
                      soundEngine.playChime();
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      ancientScript === 'tamil' ? 'bg-rose-500 text-white font-bold' : 'text-neutral-400'
                    }`}
                  >
                    தமிழ் (Katalvkol)
                  </button>
                </div>
              </div>

              {/* SANSKRIT PURANIC & METALLURGICAL RECORD */}
              {ancientScript === 'sanskrit' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-gradient-to-br from-amber-950/40 via-neutral-950 to-neutral-900 rounded-xl border border-amber-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 font-bold text-xs uppercase tracking-wide">
                        1. वडवामुख (Vadavamukha) / वडवाग्नि (Badavagni)
                      </span>
                      <button
                        onClick={() => soundEngine.playChime()}
                        className="px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded text-[10px] flex items-center gap-1 transition-colors"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>Chime Echo</span>
                      </button>
                    </div>

                    <p className="text-neutral-300 text-[11px] leading-relaxed">
                      {language === 'hi'
                        ? 'प्राचीन पुराणों और खगोलीय ग्रंथों में समुद्र के नीचे धधकती हुई आग को "वडवामुख" या "वडवाग्नि" कहा गया है—अर्थात वह अगाध अग्नि जो समुद्र के अथाह जल के नीचे स्थित है और जल का पान करती है। यह आधुनिक सबमरीन हाइड्रोथर्मल वेंट्स और समुद्र-तल के ज्वालामुखियों (submarine volcanism) का सटीक दार्शनिक व रूपकीय वर्णन है।'
                        : language === 'or'
                        ? 'ପୁରାଣରେ ସମୁଦ୍ର ତଳେ ଥିବା ଅଗ୍ନିକୁ "ବଡ଼ବାଗ୍ନି" ବୋଲି ବର୍ଣ୍ଣନା କରାଯାଇଛି, ଯାହା ଆଧୁନିକ ସାମୁଦ୍ରିକ ହାଇଡ୍ରୋଥର୍ମାଲ୍ ଭେଣ୍ଟ୍ ସହ ସମାନ।'
                        : 'In the Puranas and ancient Indian astronomical treatises, submarine volcanism is documented as "Vadavamukha" or "Badavagni"—the submarine fire burning beneath oceanic depths that consumes water, conceptually mirroring modern undersea hydrothermal vents and mantle plumes!'}
                    </p>
                  </div>

                  {/* Rasaratna Samucchaya Shloka on Gandhaka & Metallurgy */}
                  <div className="p-3.5 bg-gradient-to-br from-neutral-950 to-amber-950/30 rounded-xl border border-neutral-800 space-y-2">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      रसरत्नसमुच्चय (Rasaratna Samucchaya · Ancient Volcanic Mineralogy)
                    </div>
                    {/* The Sanskrit Verse */}
                    <div className="p-3 bg-neutral-950/80 rounded-lg border border-amber-500/20 font-serif text-amber-200 text-sm leading-relaxed text-center shadow-inner">
                      "तत्र गन्धकयोगेन नश्यति क्रूरता रसे।<br />
                      स्वभावतो भवेच्छान्तं दिव्यदेहप्रदायकम्॥"
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 text-center italic">
                      tatra gandhaka-yogena naśyati krūratā rase |<br />
                      svabhāvato bhavec-chāntaṁ divya-deha-pradāyakam ||
                    </div>

                    {/* Word-by-Word Geological Translation */}
                    <div className="p-2.5 bg-neutral-900/90 rounded-lg border border-neutral-800 text-[11px] space-y-1 text-neutral-300">
                      <div className="font-bold text-amber-400 text-xs">Scientific &amp; Metallurgical Exposition:</div>
                      <p className="leading-relaxed">
                        {language === 'hi'
                          ? '‘गन्धक’ (ज्वालामुखीय गंधक/Sulfur) के संपर्क से धातु-रस (खनिज तत्वों) की क्रूरता (भंगुरता व अशुद्धता) नष्ट हो जाती है और वे संरचनात्मक स्थिरता प्राप्त करते हैं। यह समुद्र-तल के वेंट्स में हाइड्रोजन सल्फाइड (H₂S) द्वारा पॉलीमेटैलिक सल्फाइड खनिज (सोना, तांबा, जस्ता) बनने की प्रक्रिया का प्राचीन ज्ञान है।'
                          : language === 'or'
                          ? 'ଜ୍ୱାଳାମୁଖୀରୁ ନିର୍ଗତ ଗନ୍ଧକ (ସଲଫର୍) ଯୋଗୁଁ ଧାତୁ ଶୁଦ୍ଧ ଓ ସ୍ଥିର ହୁଏ। ଏହା ସମୁଦ୍ର ତଳେ ପଲିମେଟାଲିକ୍ ସଲଫାଇଡ୍ ଖଣିଜ ସୃଷ୍ଟିର ପ୍ରାଚୀନ ରସାୟନ ବିଜ୍ଞାନ।'
                          : 'Through volcanic sulfur (Gandhaka), brittle metallic impurities dissolve, stabilizing molten metallic elements into crystalline solids. This poetic treatise captures the exact chemical synthesis where volcanic sulfur precipitation creates seafloor polymetallic sulfides!'}
                      </p>
                    </div>
                  </div>

                  {/* Sanskrit Classical Technical Terminology Grid */}
                  <div className="p-3 bg-neutral-950 rounded-xl border border-amber-500/20 space-y-2">
                    <div className="font-bold text-amber-400 text-xs flex items-center justify-between border-b border-neutral-800 pb-1.5">
                      <span>रसशास्त्र एवं वैमानिक तकनीकी शब्दावली (Classical Sanskrit Terms)</span>
                      <span className="font-mono text-[10px] text-neutral-400">Materials &amp; Geothermal Science</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-amber-300">भू-अग्नि / वडवाग्नि (Bhu-Agni / Badavagni)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Sub-Oceanic Geothermal Energy</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'समुद्र के नीचे धधकने वाली ज्वालामुखी अग्नि जो महासागर के जल को उबालने और विस्थापित करने में सक्षम है।'
                            : 'Subterranean geothermal and submarine volcanic heat sources capable of superheating ocean waters.'}
                        </p>
                      </div>

                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-amber-300">मूषा (Musha · Refractory Crucible)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Thermal Containment Chamber</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'अत्यधिक तापमान पर पिघली धातुओं को सुरक्षित रखने वाला उच्च-तापसह पात्र—आधुनिक थर्मल चैंबर का अग्रदूत।'
                            : 'Extreme thermal-resistant vessel for holding superheated molten minerals—precursor to modern containment hulls.'}
                        </p>
                      </div>

                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-amber-300">कोष्ठियन्त्र (Koshthi-Yantra)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Blast Furnace / Reduction Architecture</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'नियंत्रित वायु-प्रवाह से अयस्कों को पिघलाकर शुद्ध धातुओं को अलग करने वाला तकनीकी भट्ठी यंत्र।'
                            : 'Specialized forced-draft metallurgical furnace engineered for intensive ore reduction and alloy separation.'}
                        </p>
                      </div>

                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-amber-300">सत्त्वपातन (Sattvapatana)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Elemental Metal Extraction</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'गहरे खनिजों और ज्वालामुखीय अयस्कों से ऊष्मा द्वारा शुद्ध तात्विक धातु कोर निकालने की रासायनिक प्रक्रिया।'
                            : 'Chemical process of extracting the purest elemental metallic core from raw earth ores via thermal reduction.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAMIL SANGAM SUTRAS ON KATALVKOL & PAHRULI */}
              {ancientScript === 'tamil' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-gradient-to-br from-rose-950/40 via-neutral-950 to-neutral-900 rounded-xl border border-rose-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-rose-400 font-bold text-xs uppercase tracking-wide">
                        1. கடல்கோள் (Katalvkol · Catastrophic Marine Deluge)
                      </span>
                      <button
                        onClick={() => soundEngine.playChime()}
                        className="px-2 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded text-[10px] flex items-center gap-1 transition-colors"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>Chime Echo</span>
                      </button>
                    </div>

                    <p className="text-neutral-300 text-[11px] leading-relaxed">
                      {language === 'hi'
                        ? 'संगम साहित्य में समुद्र द्वारा भूमि को निगल जाने की घटना को "कडलकोल" (கடல்கோள்) कहा गया है। यह प्राचीन काल में हिंद महासागर में टेक्टोनिक हलचलों और हिमयुग के अंत में समुद्र स्तर के बढ़ने से तटीय भूमि के जलमग्न होने की ऐतिहासिक स्मृति है।'
                        : language === 'or'
                        ? 'ସଙ୍ଗମ ସାହିତ୍ୟରେ ସମୁଦ୍ର ମାଡ଼ି ଆସିବା ଘଟଣାକୁ "କଡ଼ଲକୋଲ୍" କୁହାଯାଇଛି, ଯାହା ଭାରତ ମହାସାଗରରେ ଟେକ୍ଟୋନିକ୍ ଫାଟ ଓ ସମୁଦ୍ର ବୃଦ୍ଧିର ଐତିହାସିକ ପ୍ରମାଣ।'
                        : 'Classical Tamil Sangam literature refers to catastrophic marine transgressions as "Katalvkol" (கடல்கோள்), preserving an empirical oral history of seismic sea displacements and post-glacial continental shelf drowning in the Indian Ocean.'}
                    </p>
                  </div>

                  {/* Silappadhikaram Verse */}
                  <div className="p-3.5 bg-gradient-to-br from-neutral-950 to-rose-950/30 rounded-xl border border-neutral-800 space-y-2">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      சிலப்பதிகாரம் (Silappadhikaram · Matuikkantaram 19–22)
                    </div>
                    {/* The Tamil Classical Verse */}
                    <div className="p-3 bg-neutral-950/80 rounded-lg border border-rose-500/20 font-serif text-rose-200 text-sm leading-relaxed text-center shadow-inner">
                      "பஃறுளி யாற்றுடன் பன்மலையடுக்கத்துக்<br />
                      குமரிக் கோடும் கொடுங்கடல் கொள்ள..."
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 text-center italic">
                      "Pahruḷi yāṟṟuṭan panmalaiyaṭukkattuk<br />
                      kumarik kōṭum koṭuṅkaṭal koḷḷa..."
                    </div>

                    {/* Word-by-Word Analysis */}
                    <div className="p-2.5 bg-neutral-900/90 rounded-lg border border-neutral-800 text-[11px] space-y-1 text-neutral-300">
                      <div className="font-bold text-rose-400 text-xs">Geomorphological Translation:</div>
                      <p className="leading-relaxed">
                        {language === 'hi'
                          ? '‘गर्जना करते हुए उग्र समुद्र ने पहरुली नदी और कुमारी की बहुस्तरीय पर्वत श्रृंखलाओं को अपने भीतर समाहित कर लिया...’ यह श्लोक आधुनिक भूविज्ञान के उस प्रमाण से मेल खाता है जहाँ कन्याकुमारी के आगे का महाद्वीपीय मग्नतट (continental shelf) और कैप्रिकॉर्न रिफ्ट समुद्र में डूबे भूभाग का साक्ष्य देते हैं।'
                          : language === 'or'
                          ? '‘ଗର୍ଜନ କରୁଥିବା ସମୁଦ୍ର ପହରୁଲି ନଦୀ ଓ କୁମାରୀ ପର୍ବତମାଳାକୁ ନିଜ ଭିତରେ ବୁଡ଼ାଇ ଦେଲା...’ ଏହା କନ୍ୟାକୁମାରୀ ନିକଟରେ ସମୁଦ୍ର ତଳେ ଥିବା ପ୍ରାଚୀନ ଭୂଭାଗର ପ୍ରମାଣ ଦିଏ।'
                          : '“The roaring ocean swallowed the Pahruli River and the multi-layered mountain ranges of the Kumari terrain...” This classical record directly aligns with bathymetric mapping showing submerged palaeo-channels and the diffuse Capricorn Plate boundary in the Central Indian Ocean!'}
                      </p>
                    </div>
                  </div>

                  {/* Tamil Classical Engineering & Marine Terminology Grid */}
                  <div className="p-3 bg-neutral-950 rounded-xl border border-rose-500/20 space-y-2">
                    <div className="font-bold text-rose-400 text-xs flex items-center justify-between border-b border-neutral-800 pb-1.5">
                      <span>சங்க காலப் புவிசார் மற்றும் உலோகவியல் கலைச்சொற்கள் (Sangam Technical Terms)</span>
                      <span className="font-mono text-[10px] text-neutral-400">Classical Tamil Geomechanics</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-rose-300">கடற்கொதிப்பு (Katar-Kothippu)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Submarine Hydrothermal Boiling</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'समुद्र के नीचे ज्वालामुखी गर्मी से पानी का खौलना और भाप का विशाल गुबार छोड़ना।'
                            : 'Severe boiling and degassing of seawater caused by intense submarine volcanic thermal contact.'}
                        </p>
                      </div>

                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-rose-300">உருக்கு விசை (Urukku-Visai)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Thermodynamic Melting Force</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'उच्च तापीय अवस्था में संरचनात्मक पिघलन और गतिज दबाव से उत्पन्न यांत्रिक बल।'
                            : 'Mechanical and thermodynamic energy released during high-heat phase melting of structural materials.'}
                        </p>
                      </div>

                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-rose-300">கருவறைச் சூழ் (Karuvarai-Sool)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Extreme Pressure Containment Core</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'विस्फोट या टूटने से पहले अत्यधिक दबाव और ऊर्जा को धारण करने वाला आंतरिक चैंबर।'
                            : 'Internal containment womb or core zone accumulating peak hydrostatic and magma pressures prior to release.'}
                        </p>
                      </div>

                      <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                        <div className="font-bold text-rose-300">திணிவு அழுத்தம் (Thinivu-Azhuttham)</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">High Compressive Density Pressure</div>
                        <p className="text-neutral-300 text-[10px] mt-1 leading-snug">
                          {language === 'hi'
                            ? 'गहरे समुद्र तल और भू-पर्पटी में चट्टानों व धातु आवरणों पर पड़ने वाला भारी संपीडक दबाव।'
                            : 'Severe structural density and compressive hydrostatic pressure acting on deep crustal strata and metallic hulls.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
