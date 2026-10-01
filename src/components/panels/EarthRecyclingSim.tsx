/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Scale, RefreshCw, Globe, ArrowDown, ArrowUp, CheckCircle, Info } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface EarthRecyclingSimProps {
  language: Language;
}

export const EarthRecyclingSim: React.FC<EarthRecyclingSimProps> = ({ language }) => {
  const [spreadingRate, setSpreadingRate] = useState<number>(3.4); // km3/year
  const [subductionRate, setSubductionRate] = useState<number>(3.4); // km3/year
  const [sedimentRate, setSedimentRate] = useState<number>(1.2); // km3/year

  const netBalance = Number((spreadingRate - subductionRate).toFixed(2));
  const isBalanced = Math.abs(netBalance) < 0.1;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-400" />
            <span>
              {language === 'hi'
                ? 'पृथ्वी का चट्टान पुनर्चक्रण एवं संतुलन'
                : language === 'or'
                ? 'ପୃଥିବୀର ପୁନଃଚକ୍ରଣ ବ୍ୟବସ୍ଥା (Recycling System)'
                : 'Earth’s Closed Crustal Recycling Machine'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'आंतरिक पिघलन और सतह के कटाव के बावजूद पृथ्वी का आकार स्थिर कैसे रहता है?'
              : language === 'or'
              ? 'କାହିଁକି ପୃଥିବୀ ସଂକୁଚିତ ନ ହୋଇ ସନ୍ତୁଳନ ରକ୍ଷା କରେ?'
              : 'Why Earth neither expands nor collapses: Dynamic equilibrium between creation and destruction'}
          </p>
        </div>

        <button
          onClick={() => {
            setSpreadingRate(3.4);
            setSubductionRate(3.4);
            setSedimentRate(1.2);
            soundEngine.playChime();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Restore Natural Balance</span>
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Interactive SVG Diagram: The Complete Crustal Recycling Loop */}
        <div className="lg:col-span-8 bg-neutral-950 p-6 flex flex-col items-center justify-center relative min-h-[420px]">
          <svg viewBox="0 0 640 380" className="w-full h-auto drop-shadow-md">
            <defs>
              <linearGradient id="crustRecycleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="coreGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#7c2d12" />
              </linearGradient>
            </defs>

            {/* Earth Mantle Baseline */}
            <rect x="0" y="220" width="640" height="160" fill="url(#coreGlow)" opacity="0.85" />
            <text x="320" y="360" fill="#fef08a" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
              BOILING MANTLE (Rock Melting & Convective Recirculation)
            </text>

            {/* 1. SEAT OF NEW LAND: Mid-Ocean Ridge (Divergent) on Left */}
            <path d="M 0 140 L 140 140 L 170 220 L 0 220 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
            <path d="M 200 140 L 320 140 L 320 220 L 170 220 Z" fill="#334155" stroke="#475569" strokeWidth="2" />

            {/* Fresh Magma Ridge Eruption */}
            <polygon points="170,140 155,220 185,220" fill="#f97316" />
            <ellipse cx="170" cy="140" rx="10" ry="4" fill="#fef08a" className="animate-pulse" />
            <text x="170" y="115" fill="#f97316" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
              + NEW CRUST FORMED
            </text>
            <text x="170" y="130" fill="#fed7aa" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
              {spreadingRate} km³/yr
            </text>

            {/* 2. CONTINENTAL LANDMASS & MOUNTAINS in Center-Right */}
            <path d="M 320 140 L 460 70 L 520 140 L 640 140 L 640 220 L 320 220 Z" fill="#44403c" stroke="#57534e" strokeWidth="2" />
            <polygon points="410,140 460,70 510,140" fill="#57534e" stroke="#78716c" strokeWidth="2" />
            <text x="460" y="60" fill="#e7e5e4" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
              CONTINENTAL MOUNTAINS
            </text>

            {/* 3. WEATHERING, RAIN & EROSION ARROWS */}
            <g stroke="#38bdf8" strokeWidth="2" fill="#38bdf8">
              {/* Rain drops */}
              <line x1="430" y1="40" x2="420" y2="60" strokeDasharray="3,3" />
              <line x1="470" y1="35" x2="460" y2="55" strokeDasharray="3,3" />
              {/* River flow washing silt down to coast */}
              <path d="M 460 70 Q 510 110 560 140" fill="none" stroke="#0284c7" strokeWidth="4" />
              <text x="540" y="110" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono">
                River Silt & Sediment
              </text>
            </g>

            {/* Delta Growth / Plains on East coast */}
            <ellipse cx="570" cy="140" rx="28" ry="8" fill="#15803d" />
            <text x="570" y="160" fill="#86efac" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
              Delta & Fertile Plains
            </text>

            {/* 4. SUBDUCTION TRENCH on Far Right */}
            {/* Sinking oceanic plate plunging back into mantle */}
            <path d="M 520 140 L 580 290 L 530 310 L 480 220 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="560" y="270" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">
              - CRUST CONSUMED
            </text>
            <text x="560" y="285" fill="#bae6fd" fontSize="10" fontFamily="JetBrains Mono">
              {subductionRate} km³/yr
            </text>

            {/* Meltdown into fresh magma */}
            <circle cx="560" cy="320" r="16" fill="rgba(249, 115, 22, 0.7)" className="animate-pulse" />
            <path d="M 560 310 Q 510 240 480 140" fill="none" stroke="#ea580c" strokeWidth="4" strokeDasharray="6,4" />
            <text x="480" y="200" fill="#fb923c" fontSize="10" fontFamily="JetBrains Mono">
              ↑ Magma Recycled
            </text>

            {/* Balance Status Indicator */}
            <rect x="200" y="10" width="240" height="34" rx="8" fill="#0f172a" stroke={isBalanced ? '#10b981' : '#f59e0b'} strokeWidth="2" />
            <text x="320" y="32" fill={isBalanced ? '#34d399' : '#fbbf24'} fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
              {isBalanced ? '● PERFECT PLANETARY EQUILIBRIUM' : '▲ DISBALANCE DRIFT DETECTED'}
            </text>
          </svg>
        </div>

        {/* Right Scientific Deck & Sliders */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Closed Mass Balance Controls
            </span>
          </div>

          {/* New Crust Creation Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-neutral-300">New Crust Creation (Seafloor Spreading)</span>
              <span className="font-mono text-emerald-400 font-semibold">{spreadingRate} km³/yr</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={6.0}
              step={0.1}
              value={spreadingRate}
              onChange={(e) => {
                setSpreadingRate(Number(e.target.value));
                soundEngine.playCrack();
              }}
              className="w-full accent-emerald-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Crust Destruction Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-neutral-300">Crust Destruction (Subduction Sinks)</span>
              <span className="font-mono text-cyan-400 font-semibold">{subductionRate} km³/yr</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={6.0}
              step={0.1}
              value={subductionRate}
              onChange={(e) => {
                setSubductionRate(Number(e.target.value));
                soundEngine.playCrack();
              }}
              className="w-full accent-cyan-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Net Equilibrium Card */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400">Net Planetary Volume Change:</span>
              <span
                className={`font-mono font-bold ${
                  isBalanced
                    ? 'text-emerald-400'
                    : netBalance > 0
                    ? 'text-amber-400'
                    : 'text-red-400'
                }`}
              >
                {netBalance > 0 ? `+${netBalance}` : netBalance} km³/yr
              </span>
            </div>

            <div className="text-[11px] text-neutral-400 leading-relaxed">
              {isBalanced ? (
                <div className="flex items-start gap-1.5 text-emerald-400">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    {language === 'hi'
                      ? 'पूर्ण संतुलन: जितनी नई जमीन बन रही है, उतनी ही सबडक्शन में नष्ट होकर मेंटल में वापस जा रही है। पृथ्वी का आकार स्थिर रहता है!'
                      : language === 'or'
                      ? 'ସମ୍ପୂର୍ଣ୍ଣ ସନ୍ତୁଳନ: ଯେତିକି ନୂଆ ସ୍ଥଳଭାଗ ତିଆରି ହେଉଛି, ସେତିକି ପୁରୁଣା ଭାଗ ମେଣ୍ଟଲ୍ରେ ତରଳିଯାଏ। ତେଣୁ ପୃଥିବୀ ସଂକୁଚିତ ହୁଏନାହିଁ!'
                      : 'Perfect closed loop: Rates of crust generation at mid-ocean ridges match slab destruction at trenches. Earth’s diameter remains rigorously constant!'}
                  </span>
                </div>
              ) : (
                <div className="text-amber-400">
                  {netBalance > 0
                    ? 'Hypothetical: Creation exceeds subduction. On real Earth, negative feedback dynamically speeds up subduction!'
                    : 'Hypothetical: Consumption exceeds creation. On real Earth, slab pull tensions trigger fresh ridge eruptions!'}
                </div>
              )}
            </div>
          </div>

          {/* Odia & Scientific Insight Callout */}
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs space-y-1.5">
            <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              <span>
                {language === 'hi'
                  ? 'पृथ्वी क्यों नहीं सिकुड़ती? (3 कारण)'
                  : language === 'or'
                  ? 'ପୃଥିବୀ ସଂକୁଚିତ ନ ହେବାର ୩ଟି ମୁଖ୍ୟ କାରଣ'
                  : 'Why Earth Doesn’t Shrink (3 Pillars)'}
              </span>
            </div>
            <ul className="text-neutral-300 text-[11px] space-y-1">
              <li>
                <strong>1. {language === 'or' ? 'ନୂଆ ସ୍ଥଳଭାଗ' : 'New Land Creation'}:</strong>{' '}
                {language === 'or'
                  ? 'ଜ୍ୱାଳାମୁଖୀ ବିସ୍ଫୋରଣ ତରଳ ମାଗ୍ମାକୁ ଉପରକୁ ଆଣି ନୂଆ କଠିନ ପଥର ତିଆରି କରେ।'
                  : 'Volcanism transfers molten mantle rock into solid surface crust.'}
              </li>
              <li>
                <strong>2. {language === 'or' ? 'ମାଟି କ୍ଷୟ ନଷ୍ଟ ହୁଏନାହିଁ' : 'Erosion Conservation'}:</strong>{' '}
                {language === 'or'
                  ? 'ନଦୀ ମାଟିକୁ ବୋହି ନେଇ ନୂଆ ଡେଲଟା ଓ ସମତଳ ଭୂମି ସୃଷ୍ଟି କରେ।'
                  : 'Sedimentation deposits weathered rock into deltas and coastal shelves.'}
              </li>
              <li>
                <strong>3. {language === 'or' ? 'ପୁନଃଚକ୍ରଣ ସନ୍ତୁଳନ' : 'Subduction Recycling'}:</strong>{' '}
                {language === 'or'
                  ? 'ଗୋଟିଏ ପଟେ ନୂଆ ସ୍ଥଳଭାଗ ତିଆରି ହେବା ସହ ଅନ୍ୟପଟେ ପୁରୁଣା ଭାଗ ତରଳି ସନ୍ତୁଳନ ରଖେ।'
                  : 'Seafloor spreading and subduction balance mass in an eternal geological loop.'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
