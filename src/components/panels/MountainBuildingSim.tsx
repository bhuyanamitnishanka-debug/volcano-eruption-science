/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mountain, Compass, RotateCcw, Info, ArrowRight, Layers } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface MountainBuildingSimProps {
  language: Language;
}

type MountainType = 'fold' | 'fault-block';

export const MountainBuildingSim: React.FC<MountainBuildingSimProps> = ({ language }) => {
  const [type, setType] = useState<MountainType>('fold');
  const [compression, setCompression] = useState<number>(45); // 0 to 100% collision stress

  // Computed metrics
  const upliftMeters = Math.round(compression * 88.48); // up to 8,848m (Mt Everest)
  const plateSpeed = (compression * 0.05).toFixed(1); // cm/yr

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Mountain className="w-5 h-5 text-amber-500" />
            <span>
              {language === 'hi'
                ? 'टेक्टोनिक घर्षण और पर्वतों का निर्माण'
                : language === 'or'
                ? 'ପ୍ଲେଟ୍ ଘର୍ଷଣ ଓ ପର୍ବତ ସୃଷ୍ଟି ବିଜ୍ଞାନ'
                : 'Tectonic Friction: How Mountains & Hills Form'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'जैसे दो कालीनों को धक्का देने पर वे मुड़ जाती हैं: वलित पर्वत (हिमालय) एवं भ्रंशोत्थ पर्वत (Fault-Block)'
              : language === 'or'
              ? 'ଦୁଇଟି ଗାଲିଚାକୁ ଠେଲିବା ପରି ଭୂପୃଷ୍ଠ ଭାଙ୍ଗି ଫୋଲ୍ଡ ପର୍ବତ (ହିମାଳୟ) ଓ ଫଲ୍ଟ ବ୍ଲକ୍ ପାହାଡ଼ ଗଠନ ହୁଏ'
              : 'Rug crumple mechanics: Fold mountains (Himalayas) and brittle fault-block horsts & grabens'}
          </p>
        </div>

        {/* Mountain Type Toggle Buttons */}
        <div className="flex items-center p-1 bg-neutral-800 rounded-lg">
          <button
            onClick={() => {
              setType('fold');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              type === 'fold'
                ? 'bg-amber-500 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'वलित पर्वत (Fold Mountains)' : language === 'or' ? 'ଭଙ୍ଗିଳ ପର୍ବତ (Fold)' : 'Fold Mountains (Himalayas)'}
          </button>
          <button
            onClick={() => {
              setType('fault-block');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              type === 'fault-block'
                ? 'bg-amber-500 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'भ्रंशोत्थ पर्वत (Fault-Block)' : language === 'or' ? 'ଫଲ୍ଟ-ବ୍ଲକ୍ ପାହାଡ଼' : 'Fault-Block Mountains'}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage & Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-8 bg-neutral-950 p-6 flex flex-col items-center justify-center relative min-h-[400px]">
          {/* 1. FOLD MOUNTAINS INTERACTIVE DIAGRAM */}
          {type === 'fold' && (
            <div className="w-full max-w-2xl relative">
              <svg viewBox="0 0 600 320" className="w-full h-auto drop-shadow-md">
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                </defs>

                {/* Sky */}
                <rect x="0" y="0" width="600" height="150" fill="url(#skyGrad)" />

                {/* Uplift peak curve calculated dynamically from compression % */}
                {/* At 0%: completely flat at y=150. At 100%: towering peaks reaching y=25 */}
                {(() => {
                  const peakHeight = 150 - (compression / 100) * 125;
                  const subPeak1 = 150 - (compression / 100) * 85;
                  const subPeak2 = 150 - (compression / 100) * 95;

                  return (
                    <g>
                      {/* Top Rock Layer (Limestone / Sandstone - Amber) */}
                      <path
                        d={`M 0 150 Q 140 ${subPeak1} 220 ${subPeak1 + 10} Q 300 ${peakHeight} 380 ${subPeak2} Q 460 ${subPeak2 + 10} 600 150 L 600 190 Q 460 ${subPeak2 + 50} 380 ${subPeak2 + 40} Q 300 ${peakHeight + 40} 220 ${subPeak1 + 50} Q 140 ${subPeak1 + 40} 0 190 Z`}
                        fill="#d97706"
                        stroke="#b45309"
                        strokeWidth="2"
                      />

                      {/* Middle Rock Layer (Shale / Slate - Dark Bronze) */}
                      <path
                        d={`M 0 190 Q 140 ${subPeak1 + 40} 220 ${subPeak1 + 50} Q 300 ${peakHeight + 40} 380 ${subPeak2 + 40} Q 460 ${subPeak2 + 50} 600 190 L 600 240 Q 460 ${subPeak2 + 100} 380 ${subPeak2 + 90} Q 300 ${peakHeight + 90} 220 ${subPeak1 + 100} Q 140 ${subPeak1 + 90} 0 240 Z`}
                        fill="#78350f"
                        stroke="#92400e"
                        strokeWidth="2"
                      />

                      {/* Deep Crustal Roots / Crystalline Basement (Granite - Slate) */}
                      <path
                        d={`M 0 240 Q 140 ${subPeak1 + 90} 220 ${subPeak1 + 100} Q 300 ${peakHeight + 90} 380 ${subPeak2 + 90} Q 460 ${subPeak2 + 100} 600 240 L 600 320 L 0 320 Z`}
                        fill="#292524"
                        stroke="#44403c"
                        strokeWidth="2"
                      />

                      {/* Snowcaps on summit when compression > 40% */}
                      {compression > 40 && (
                        <polygon
                          points={`300,${peakHeight} ${285},${peakHeight + 25} ${315},${peakHeight + 25}`}
                          fill="#f8fafc"
                        />
                      )}

                      {/* Fold Terminology Labels: Anticline (Crest) & Syncline (Trough) */}
                      {compression > 25 && (
                        <g fill="#fef08a" fontSize="11" fontFamily="JetBrains Mono">
                          <text x="300" y={peakHeight - 12} textAnchor="middle" fontWeight="bold">
                            ▲ ANTICLINE (Upfold Peak)
                          </text>
                          <text x="300" y={peakHeight - 26} fill="#38bdf8" textAnchor="middle" fontSize="12" fontWeight="bold">
                            Elevation: {upliftMeters.toLocaleString()} m
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })()}

                {/* Colliding Tectonic Plate Arrows */}
                <g stroke="#ef4444" strokeWidth="4" fill="#ef4444">
                  {/* Indian Plate pushing from South/Left */}
                  <line x1="30" y1="280" x2="140" y2="280" />
                  <polygon points="140,274 155,280 140,286" />
                  <text x="85" y="270" fill="#f87171" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                    Indian Plate →
                  </text>

                  {/* Eurasian Plate resisting from North/Right */}
                  <line x1="570" y1="280" x2="460" y2="280" />
                  <polygon points="460,274 445,280 460,286" />
                  <text x="515" y="270" fill="#f87171" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                    ← Eurasian Plate
                  </text>
                </g>

                {/* Rug Crumple Metaphor Label */}
                <rect x="15" y="15" width="260" height="30" rx="6" fill="#0f172a" stroke="#334155" />
                <text x="25" y="34" fill="#cbd5e1" fontSize="11" fontFamily="Plus Jakarta Sans">
                  Metaphor: Rugs crushing & buckling
                </text>
              </svg>
            </div>
          )}

          {/* 2. FAULT-BLOCK MOUNTAINS INTERACTIVE DIAGRAM */}
          {type === 'fault-block' && (
            <div className="w-full max-w-2xl relative">
              <svg viewBox="0 0 600 320" className="w-full h-auto drop-shadow-md">
                {/* Sky */}
                <rect x="0" y="0" width="600" height="150" fill="#0f172a" />

                {/* Fault block motion offsets based on compression % */}
                {(() => {
                  const horstLift = (compression / 100) * 65; // Uplifted horst block
                  const grabenDrop = (compression / 100) * 35; // Dropped valley block

                  return (
                    <g>
                      {/* Left Block (Valley / Graben) */}
                      <polygon
                        points={`0,${150 + grabenDrop} 180,${150 + grabenDrop} 130,320 0,320`}
                        fill="#3f3f46"
                        stroke="#52525b"
                        strokeWidth="2"
                      />
                      <text x="70" y={140 + grabenDrop} fill="#94a3b8" fontSize="11" fontFamily="JetBrains Mono">
                        GRABEN (Rift Valley)
                      </text>

                      {/* Center Block: UPLIFTED HORST MOUNTAIN */}
                      <polygon
                        points={`200,${150 - horstLift} 400,${150 - horstLift} 350,320 150,320`}
                        fill="#d97706"
                        stroke="#f59e0b"
                        strokeWidth="3"
                      />
                      <text x="300" y={135 - horstLift} fill="#fef08a" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                        ▲ HORST (Uplifted Fault-Block)
                      </text>

                      {/* Right Block (Valley / Graben) */}
                      <polygon
                        points={`420,${150 + grabenDrop} 600,${150 + grabenDrop} 600,320 370,320`}
                        fill="#3f3f46"
                        stroke="#52525b"
                        strokeWidth="2"
                      />
                      <text x="490" y={140 + grabenDrop} fill="#94a3b8" fontSize="11" fontFamily="JetBrains Mono">
                        GRABEN (Valley)
                      </text>

                      {/* Fault Line Planes */}
                      <line x1="180" y1="110" x2="130" y2="320" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5,5" />
                      <line x1="400" y1="110" x2="350" y2="320" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5,5" />

                      <text x="145" y="210" fill="#f87171" fontSize="10" fontFamily="JetBrains Mono" transform="rotate(75, 145, 210)">
                        Fault Plane →
                      </text>
                      <text x="365" y="210" fill="#f87171" fontSize="10" fontFamily="JetBrains Mono" transform="rotate(75, 365, 210)">
                        Fault Plane →
                      </text>
                    </g>
                  );
                })()}

                <text x="300" y="300" fill="#fed7aa" fontSize="11" fontFamily="Plus Jakarta Sans" textAnchor="middle">
                  Intense friction cracks brittle crust into blocks; vertical displacement forms horsts and grabens.
                </text>
              </svg>
            </div>
          )}
        </div>

        {/* Right Controls & Scientific Context */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Collision Stress Controls
            </span>
          </div>

          {/* Compression Stress Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-neutral-300">Tectonic Collision Pressure</span>
              <span className="font-mono text-amber-400 font-semibold">{compression}% Stress</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={compression}
              onChange={(e) => {
                setCompression(Number(e.target.value));
                if (Number(e.target.value) % 15 === 0) soundEngine.playCrack();
              }}
              className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
              <span>0% (Pre-Collision)</span>
              <span>50% (Active Orogeny)</span>
              <span>100% (Everest Peak)</span>
            </div>
          </div>

          {/* Live Telemetry Card */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2 text-xs">
            <div className="flex justify-between items-center text-neutral-400">
              <span>Simulated Elevation:</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">{upliftMeters.toLocaleString()} m</span>
            </div>
            <div className="flex justify-between items-center text-neutral-400">
              <span>Ongoing Collision Speed:</span>
              <span className="font-mono font-bold text-amber-400">~5 cm / year</span>
            </div>
            <div className="flex justify-between items-center text-neutral-400">
              <span>Active Orogeny:</span>
              <span className="text-neutral-200">Himalayan-Tibetan Plateau</span>
            </div>
          </div>

          {/* Scientific Callout Card */}
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs space-y-1.5 leading-relaxed">
            <div className="font-semibold text-amber-400 flex items-center gap-1.5">
              <Info className="w-4 h-4 shrink-0" />
              <span>
                {type === 'fold'
                  ? language === 'hi'
                    ? 'वलित पर्वत: हिमालय का निर्माण'
                    : language === 'or'
                    ? 'ଭଙ୍ଗିଳ ପର୍ବତ: ହିମାଳୟ ସୃଷ୍ଟି'
                    : 'Fold Mountains: The Rug Analogy'
                  : language === 'hi'
                  ? 'भ्रंशोत्थ पर्वत: दरारें और घाटियां'
                  : language === 'or'
                  ? 'ଫଲ୍ଟ ବ୍ଲକ୍: ପଥର ଫାଟି ପାହାଡ଼ ସୃଷ୍ଟି'
                  : 'Fault-Block: Fractured Crust Blocks'}
              </span>
            </div>
            <p className="text-neutral-300 text-[11px]">
              {type === 'fold'
                ? language === 'hi'
                  ? 'जब दो प्लेटें आपस में टकराती हैं, तो कोई भी प्लेट आसानी से नहीं हटती। अत्यधिक घर्षण और दबाव से चट्टानें मुड़कर ऊपर उठ जाती हैं। भारतीय प्लेट लगातार यूरेशियन प्लेट से टकरा रही है, जिससे हिमालय आज भी प्रति वर्ष 5 मिमी ऊपर उठ रहा है!'
                  : language === 'or'
                  ? 'ଦୁଇଟି ପ୍ଲେଟ୍ ଧକ୍କା ହେଲେ ଅତ୍ୟଧିକ ଚାପ ଯୋଗୁଁ ପଥର ସ୍ତର ବଙ୍କା ହୋଇ ଉପରକୁ ଉଠିଯାଏ। ଭାରତୀୟ ପ୍ଲେଟ୍ ଏସିଆନ୍ ପ୍ଲେଟ୍ ସହ ଧକ୍କା ଖାଇବା ଯୋଗୁଁ ହିମାଳୟ ସୃଷ୍ଟି ହୋଇଛି ଏବଂ ଆଜି ମଧ୍ୟ ବଢ଼ୁଛି!'
                  : 'When tectonic plates jam together, immense friction prevents smooth sliding. Rock layers fold upward like two pushed rugs. The collision of the Indian Plate into the Eurasian Plate continues today, uplifting the Himalayas by ~5 mm annually!'
                : language === 'hi'
                  ? 'जब अत्यधिक घर्षण से कठोर क्रस्ट में गहरी दरारें (Faults) पड़ जाती हैं, तो कुछ खंड ऊपर उठकर पहाड़ (Horst) बनाते हैं और कुछ धंसकर घाटियां (Graben) बनाते हैं (उदा. सिएरा नेवादा)।'
                  : language === 'or'
                  ? 'ଭୂପୃଷ୍ଠ ଫାଟି ଖଣ୍ଡ ଖଣ୍ଡ ହୋଇ କିଛି ଅଂଶ ଉପରକୁ ଉଠି ପାହାଡ଼ (Horst) ଏବଂ କିଛି ଅଂଶ ତଳକୁ ଖସି ଉପତ୍ୟକା (Graben) ସୃଷ୍ଟି କରେ।'
                  : 'Intense friction fractures the brittle crust into colossal blocks. Pressure pushes blocks upward (horsts) while adjacent blocks sink (grabens), creating jagged fault-block ranges like the Sierra Nevada.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
