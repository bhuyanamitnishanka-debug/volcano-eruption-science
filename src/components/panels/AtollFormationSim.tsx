/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CircleDot, Sparkles, Waves, Info, RotateCcw, Compass } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface AtollFormationSimProps {
  language: Language;
}

export const AtollFormationSim: React.FC<AtollFormationSimProps> = ({ language }) => {
  const [subsidence, setSubsidence] = useState<number>(45); // 0% (Active Island) to 100% (True Ring Atoll)

  // Determine stage based on subsidence percentage
  let stageName = 'Stage 1: Active Volcanic Island (Fringing Reef)';
  let stageDesc =
    'A volcanic island emerges from the sea. Coral polyps establish a fringing reef directly clinging to the volcanic shoreline in sunlit shallow waters.';
  if (subsidence > 75) {
    stageName = 'Stage 4: True Ring Atoll';
    stageDesc =
      'The central volcanic peak has completely sunk beneath the waves! Only a ring of living coral reefs and sand islets remains, encircling a tranquil turquoise lagoon.';
  } else if (subsidence > 40) {
    stageName = 'Stage 3: Barrier Reef & Growing Lagoon';
    stageDesc =
      'The volcanic island cools, becomes denser, and sinks deeper. Coral polyps grow upward toward sunlight at the same speed, creating a wide protective barrier reef and a calm lagoon.';
  } else if (subsidence > 15) {
    stageName = 'Stage 2: Early Subsidence (Fringing to Barrier)';
    stageDesc =
      'Volcanic activity stops. The island begins gradual subsidence as the underlying oceanic crust cools and moves away from the mantle hotspot.';
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <CircleDot className="w-5 h-5 text-emerald-400" />
            <span>
              {language === 'hi'
                ? 'एटोल निर्माण सिमुलेटर: डूबते ज्वालामुखी से कोरल रिंग'
                : language === 'or'
                ? 'ଏଟୋଲ୍ (Atoll) ସୃଷ୍ଟି: ବୁଡ଼ିଯାଉଥିବା ଜ୍ୱାଳାମୁଖୀରୁ ପ୍ରବାଳ ଦ୍ୱୀପ'
                : 'Atoll Formation: From Sinking Volcano to Coral Ring'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'डार्विन का धंसाव सिद्धांत (Subsidence Theory): फ्रिंजिंग रीफ, बैरियर रीफ और लैगून से घिरा एटोल'
              : language === 'or'
              ? 'ଡାରୱିନ୍ଙ୍କ ଭୂ-ନିମଜ୍ଜନ ତତ୍ତ୍ୱ: ଜ୍ୱାଳାମୁଖୀ ବୁଡ଼ିବା ସହ ପ୍ରବାଳ କୀଟ (Coral Polyps) ଉପରକୁ ବଢ଼ି ଏଟୋଲ୍ ସୃଷ୍ଟି କରନ୍ତି'
              : 'Darwin’s subsidence theory: How a sinking volcanic island transforms into a ring-shaped coral atoll'}
          </p>
        </div>

        {/* Quick Stage Jump Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-800 rounded-lg">
          <button
            onClick={() => {
              setSubsidence(0);
              soundEngine.playCrack();
            }}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              subsidence < 15 ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            1. Volcano
          </button>
          <button
            onClick={() => {
              setSubsidence(30);
              soundEngine.playBubblePop();
            }}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              subsidence >= 15 && subsidence <= 45 ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            2. Fringing
          </button>
          <button
            onClick={() => {
              setSubsidence(65);
              soundEngine.playBubblePop();
            }}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              subsidence > 45 && subsidence <= 75 ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            3. Barrier
          </button>
          <button
            onClick={() => {
              setSubsidence(100);
              soundEngine.playChime();
            }}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              subsidence > 75 ? 'bg-emerald-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            4. Atoll
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Cross Section (Left) + Scientific Controls (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Dynamic SVG Cross Section of Sinking Volcano and Growing Coral Reefs */}
        <div className="lg:col-span-8 bg-neutral-950 p-6 flex flex-col items-center justify-center relative min-h-[400px]">
          <svg viewBox="0 0 600 340" className="w-full h-auto drop-shadow-lg">
            <defs>
              <linearGradient id="oceanAtollGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="40%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#082f49" />
              </linearGradient>
              <linearGradient id="lagoonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect x="0" y="0" width="600" height="130" fill="#0f172a" />

            {/* Ocean Water Layer (Sea Level at y=130) */}
            <rect x="0" y="130" width="600" height="210" fill="url(#oceanAtollGrad)" />
            <line x1="0" y1="130" x2="600" y2="130" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6,4" />
            <text x="15" y="122" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono">
              SEA LEVEL ▼
            </text>

            {/* Submerged Oceanic Seabed Baseline */}
            <rect x="0" y="300" width="600" height="40" fill="#1c1917" />

            {/* DYNAMIC VOLCANIC CONE: Sinks as subsidence increases */}
            {/* Peak Y at 0%: y=40 (Towers 90px above water). At 100%: y=165 (35px under sea level!) */}
            {(() => {
              const peakY = 40 + (subsidence / 100) * 125;
              const isSubmerged = peakY > 130;

              return (
                <g>
                  {/* Volcanic Basalt Cone */}
                  <polygon
                    points={`120,300 300,${peakY} 480,300`}
                    fill="#3f3f46"
                    stroke="#52525b"
                    strokeWidth="2"
                  />

                  {/* Caldera / Crater Summit */}
                  <ellipse cx="300" cy={peakY} rx="16" ry="5" fill="#27272a" />

                  {/* Volcanic peak label */}
                  {!isSubmerged ? (
                    <text
                      x="300"
                      y={peakY - 10}
                      fill="#fef08a"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="JetBrains Mono"
                      textAnchor="middle"
                    >
                      Volcanic Island Peak
                    </text>
                  ) : (
                    <text
                      x="300"
                      y={peakY + 25}
                      fill="#94a3b8"
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                      textAnchor="middle"
                    >
                      [Drowned Volcanic Core]
                    </text>
                  )}

                  {/* LAGOON (If island has subsided, calm shallow lagoon fills center) */}
                  {subsidence > 25 && (
                    <ellipse
                      cx="300"
                      cy="130"
                      rx={Math.min(180, 40 + (subsidence / 100) * 140)}
                      ry="12"
                      fill="url(#lagoonGrad)"
                      opacity="0.9"
                    />
                  )}

                  {/* CORAL REEFS ON LEFT & RIGHT FLANKS (Growing upward as volcano sinks) */}
                  {/* Left Barrier Coral Reef Column */}
                  <path
                    d={`M 150 130 L 175 130 L 195 ${Math.min(280, 200 + (subsidence / 100) * 60)} L 140 300 Z`}
                    fill="#10b981"
                    stroke="#059669"
                    strokeWidth="2"
                  />
                  {/* Right Barrier Coral Reef Column */}
                  <path
                    d={`M 425 130 L 450 130 L 460 300 L 405 ${Math.min(280, 200 + (subsidence / 100) * 60)} Z`}
                    fill="#10b981"
                    stroke="#059669"
                    strokeWidth="2"
                  />

                  {/* Sand Cays / Coral Islets on reef rims */}
                  <ellipse cx="162" cy="128" rx="14" ry="4" fill="#fef08a" />
                  <ellipse cx="438" cy="128" rx="14" ry="4" fill="#fef08a" />

                  {/* Lagoon & Reef Labels */}
                  {subsidence > 40 && (
                    <text
                      x="300"
                      y="148"
                      fill="#2dd4bf"
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="JetBrains Mono"
                      textAnchor="middle"
                    >
                      CALM TURQUOISE LAGOON
                    </text>
                  )}

                  <text x="162" y="112" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                    Outer Reef
                  </text>
                  <text x="438" y="112" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                    Outer Reef
                  </text>
                </g>
              );
            })()}

            {/* Subsidence Indicator Arrow */}
            <g stroke="#f59e0b" strokeWidth="2.5" fill="#f59e0b">
              <line x1="300" y1="20" x2="300" y2="45" />
              <polygon points="296,45 300,52 304,45" />
              <text x="315" y="36" fill="#fef08a" fontSize="10" fontFamily="JetBrains Mono">
                Subsidence ({subsidence}%) ↓
              </text>
            </g>
          </svg>
        </div>

        {/* Right: Controls & Scientific Explanation */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Subsidence Evolution Slider
            </span>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-neutral-300">Volcanic Subsidence (Cooling Crust)</span>
              <span className="font-mono text-emerald-400 font-bold">{subsidence}% Sunk</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={subsidence}
              onChange={(e) => {
                setSubsidence(Number(e.target.value));
                if (Number(e.target.value) % 25 === 0) soundEngine.playBubblePop();
              }}
              className="w-full accent-emerald-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
              <span>0% (High Volcano)</span>
              <span>50% (Barrier Reef)</span>
              <span>100% (Submerged Atoll)</span>
            </div>
          </div>

          {/* Current Stage Card */}
          <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 space-y-1.5">
            <div className="text-xs font-bold text-amber-400">{stageName}</div>
            <p className="text-neutral-300 text-[11px] leading-relaxed">{stageDesc}</p>
          </div>

          {/* Darwin's 4 Evolutionary Stages */}
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs space-y-2">
            <div className="font-bold text-emerald-400 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              <span>Darwin’s 4 Evolutionary Stages (1842)</span>
            </div>
            <ol className="text-neutral-300 text-[11px] space-y-1.5 list-decimal pl-4">
              <li>
                <strong className="text-white">Active Island:</strong> Basaltic volcano builds above sea level over a hotspot.
              </li>
              <li>
                <strong className="text-white">Fringing Reef:</strong> Corals build skeletons right along the wave-washed coastline.
              </li>
              <li>
                <strong className="text-white">Barrier Reef:</strong> Island sinks, but corals grow upward toward sunlit water (~15 mm/yr), creating a wide lagoon.
              </li>
              <li>
                <strong className="text-white">True Atoll:</strong> Volcano vanishes completely underwater; a coral ring surrounding a lagoon remains!
              </li>
            </ol>
          </div>

          {/* Real World Examples */}
          <div className="text-[11px] text-neutral-400">
            <strong className="text-neutral-200">Iconic Real-World Atolls:</strong>
            <div className="mt-1">
              • <span className="text-white">Lakshadweep (India):</span> 36 coral atolls and reef islands in the Arabian Sea.
              <br />• <span className="text-white">Maldives:</span> 26 natural atolls atop Chagos-Laccadive Ridge.
              <br />• <span className="text-white">Bora Bora:</span> Stage 3 barrier reef surrounding a central volcanic spire!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
