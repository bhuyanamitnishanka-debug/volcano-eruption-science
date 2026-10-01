/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldAlert, Sparkles, Layers, Info } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface TectonicBoundariesSimProps {
  language: Language;
}

type BoundaryMode = 'divergent' | 'convergent' | 'hotspot';

export const TectonicBoundariesSim: React.FC<TectonicBoundariesSimProps> = ({ language }) => {
  const [mode, setMode] = useState<BoundaryMode>('convergent');
  const [spreadRate, setSpreadRate] = useState<number>(3); // cm/yr
  const [subductionAngle, setSubductionAngle] = useState<number>(45); // deg
  const [showWaterMolecules, setShowWaterMolecules] = useState<boolean>(true);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header with Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Compass className="w-5 h-5 text-orange-500" />
            <span>
              {language === 'hi'
                ? 'टेक्टोनिक प्लेट सीमाएं और ज्वालामुखी'
                : language === 'or'
                ? 'ଟେକ୍ଟୋନିକ୍ ପ୍ଲେଟ୍ ସୀମା ଓ ଜ୍ୱାଳାମୁଖୀ'
                : 'Tectonic Boundaries & Magma Generation'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'अपसारी कटक (दूर जाना), सबडक्शन जोन (टकराना) और मेंटल हॉटस्पॉट का विश्लेषण'
              : language === 'or'
              ? 'ପ୍ଲେଟ୍ ଦୂରେଇବା (Divergent), ଧକ୍କା ହେବା (Subduction) ଏବଂ ହଟ୍ସ୍ପଟ୍ (Hotspot)'
              : 'Interactive mechanics of Decompression Melting, Hydrous Flux Melting, and Deep Plumes'}
          </p>
        </div>

        {/* Boundary Mode Segmented Buttons */}
        <div className="flex items-center p-1 bg-neutral-800 rounded-lg">
          <button
            onClick={() => {
              setMode('divergent');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              mode === 'divergent'
                ? 'bg-amber-500 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'अपसारी (Divergent)' : language === 'or' ? 'ଦୂରେଇବା (Divergent)' : 'Divergent (Pulling Apart)'}
          </button>
          <button
            onClick={() => {
              setMode('convergent');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              mode === 'convergent'
                ? 'bg-amber-500 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'अभिसारी (Subduction)' : language === 'or' ? 'ଧକ୍କା ହେବା (Subduction)' : 'Convergent (Subduction)'}
          </button>
          <button
            onClick={() => {
              setMode('hotspot');
              soundEngine.playRumble(500);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              mode === 'hotspot'
                ? 'bg-amber-500 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'हॉटस्पॉट (Hotspot)' : language === 'or' ? 'ହଟ୍ସ୍ପଟ୍ (Hotspot)' : 'Mantle Hotspot (Plume)'}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-8 bg-neutral-950 p-6 flex flex-col items-center justify-center relative min-h-[420px]">
          {/* 1. DIVERGENT SVG SIMULATION */}
          {mode === 'divergent' && (
            <div className="w-full max-w-2xl relative">
              <svg viewBox="0 0 600 340" className="w-full h-auto drop-shadow-md">
                <defs>
                  <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0c4a6e" />
                    <stop offset="100%" stopColor="#082f49" />
                  </linearGradient>
                  <linearGradient id="mantleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7c2d12" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>

                {/* Ocean Water Layer */}
                <rect x="0" y="0" width="600" height="90" fill="url(#oceanGrad)" />
                <text x="20" y="30" fill="#38bdf8" fontSize="12" fontFamily="JetBrains Mono">
                  OCEANIC WATER COLUMN (4,000m Depth)
                </text>

                {/* Left Oceanic Plate moving Left */}
                <path d="M 0 90 L 260 90 L 285 160 L 0 160 Z" fill="#292524" stroke="#44403c" strokeWidth="2" />
                {/* Right Oceanic Plate moving Right */}
                <path d="M 340 90 L 600 90 L 600 160 L 315 160 Z" fill="#292524" stroke="#44403c" strokeWidth="2" />

                {/* Mantle below */}
                <rect x="0" y="160" width="600" height="180" fill="url(#mantleGrad)" opacity="0.85" />

                {/* Decompression melting zone / Magma plume rising into the rift */}
                <polygon points="300,90 270,260 330,260" fill="#f97316" opacity="0.9" />
                <polygon points="300,90 285,220 315,220" fill="#fef08a" />

                {/* Pillow lavas / under-sea fissure vents */}
                <ellipse cx="300" cy="90" rx="14" ry="7" fill="#ef4444" />
                <ellipse cx="295" cy="85" rx="8" ry="4" fill="#fbbf24" />
                <ellipse cx="305" cy="86" rx="6" ry="3" fill="#fbbf24" />

                {/* Animated Hydrothermal black smokers / steam */}
                <circle cx="300" cy="65" r="4" fill="#cbd5e1" opacity="0.7" className="animate-ping" />
                <circle cx="298" cy="50" r="6" fill="#cbd5e1" opacity="0.5" />
                <circle cx="302" cy="35" r="8" fill="#cbd5e1" opacity="0.3" />

                {/* Drift Vectors */}
                <g stroke="#38bdf8" strokeWidth="3" fill="#38bdf8">
                  <line x1="220" y1="125" x2="160" y2="125" markerEnd="url(#arrow)" />
                  <polygon points="160,121 145,125 160,129" />
                  <text x="140" y="115" fill="#38bdf8" fontSize="12" fontFamily="JetBrains Mono" textAnchor="end">
                    ← Drift {spreadRate} cm/yr
                  </text>

                  <line x1="380" y1="125" x2="440" y2="125" />
                  <polygon points="440,121 455,125 440,129" />
                  <text x="460" y="115" fill="#38bdf8" fontSize="12" fontFamily="JetBrains Mono">
                    Drift {spreadRate} cm/yr →
                  </text>
                </g>

                {/* Explanatory Callouts */}
                <text x="300" y="295" fill="#fef08a" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  DECOMPRESSION MELTING ZONE
                </text>
                <text x="300" y="315" fill="#fed7aa" fontSize="11" fontFamily="Plus Jakarta Sans" textAnchor="middle">
                  Pressure drops as crust thins → Solid peridotite melts without extra heat!
                </text>
              </svg>
            </div>
          )}

          {/* 2. CONVERGENT SUBDUCTION SVG SIMULATION */}
          {mode === 'convergent' && (
            <div className="w-full max-w-2xl relative">
              <svg viewBox="0 0 600 340" className="w-full h-auto drop-shadow-md">
                <defs>
                  <linearGradient id="oceanGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0c4a6e" />
                    <stop offset="100%" stopColor="#082f49" />
                  </linearGradient>
                </defs>

                {/* Ocean on Left */}
                <rect x="0" y="0" width="300" height="90" fill="url(#oceanGrad2)" />

                {/* Continental Plate on Right */}
                <path d="M 280 90 L 600 90 L 600 240 L 330 240 Z" fill="#44403c" stroke="#57534e" strokeWidth="2" />

                {/* Stratovolcano on Continent */}
                <polygon points="460,90 490,20 520,90" fill="#57534e" stroke="#78716c" strokeWidth="2" />
                {/* Volcanic crater & explosive plume */}
                <polygon points="485,20 490,14 495,20" fill="#ef4444" />
                <path d="M 490 14 Q 470 -20 450 -40 Q 530 -20 490 14" fill="#71717a" opacity="0.8" />
                <circle cx="490" cy="10" r="16" fill="rgba(249, 115, 22, 0.4)" className="animate-pulse" />

                {/* Magma Conduit ascending to Stratovolcano */}
                <path d="M 370 230 Q 420 160 490 20" fill="none" stroke="#f97316" strokeWidth="10" strokeLinecap="round" />
                <path d="M 370 230 Q 420 160 490 20" fill="none" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />

                {/* Sinking Oceanic Plate (Subducting Slab at 45 deg angle) */}
                <path d="M 0 90 L 250 90 L 400 340 L 320 340 L 210 160 L 0 160 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />

                {/* Deep Oceanic Trench */}
                <text x="245" y="80" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="end">
                  DEEP TRENCH ▼
                </text>

                {/* Water molecules / dehydration sweat (H2O escaping from subducting slab) */}
                {showWaterMolecules && (
                  <g fill="#38bdf8" className="animate-pulse">
                    <circle cx="310" cy="190" r="4" />
                    <circle cx="330" cy="210" r="4" />
                    <circle cx="340" cy="230" r="4" />
                    <text x="345" y="200" fill="#67e8f9" fontSize="10" fontFamily="JetBrains Mono">
                      ↑ H₂O Fluids
                    </text>
                  </g>
                )}

                {/* Flux melting zone in mantle wedge */}
                <circle cx="380" cy="220" r="28" fill="rgba(239, 68, 68, 0.4)" />
                <circle cx="380" cy="220" r="14" fill="rgba(254, 240, 138, 0.7)" />

                {/* Text callouts */}
                <text x="390" y="270" fill="#f87171" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">
                  FLUX MELTING (Wedge)
                </text>
                <text x="390" y="288" fill="#cbd5e1" fontSize="10" fontFamily="Plus Jakarta Sans">
                  Trapped water lowers peridotite melting point
                </text>
                <text x="490" y="115" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  PACIFIC RING OF FIRE VOLCANO
                </text>
              </svg>
            </div>
          )}

          {/* 3. HOTSPOT MANTLE PLUME SVG SIMULATION */}
          {mode === 'hotspot' && (
            <div className="w-full max-w-2xl relative">
              <svg viewBox="0 0 600 340" className="w-full h-auto drop-shadow-md">
                <defs>
                  <linearGradient id="oceanGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0c4a6e" />
                    <stop offset="100%" stopColor="#082f49" />
                  </linearGradient>
                </defs>

                {/* Ocean */}
                <rect x="0" y="0" width="600" height="110" fill="url(#oceanGrad3)" />

                {/* Oceanic Plate moving Left across stationary plume */}
                <rect x="0" y="110" width="600" height="50" fill="#334155" stroke="#475569" strokeWidth="2" />

                {/* Plate Drift Vector */}
                <g stroke="#38bdf8" strokeWidth="2.5" fill="#38bdf8">
                  <line x1="500" y1="135" x2="380" y2="135" />
                  <polygon points="380,131 365,135 380,139" />
                  <text x="440" y="128" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
                    ← Pacific Plate Drift (8 cm/yr)
                  </text>
                </g>

                {/* Extinct Older Islands on Left (Kauai, Oahu, Maui) */}
                {/* Kauai (Extinct, eroded) */}
                <polygon points="80,110 110,65 140,110" fill="#15803d" />
                <text x="110" y="125" fill="#86efac" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Kauai (5 Ma)
                </text>

                {/* Oahu (Extinct) */}
                <polygon points="170,110 205,50 240,110" fill="#16a34a" />
                <text x="205" y="125" fill="#86efac" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Oahu (3 Ma)
                </text>

                {/* Maui (Dormant) */}
                <polygon points="270,110 310,40 350,110" fill="#65a30d" />
                <text x="310" y="125" fill="#bef264" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Maui (1 Ma)
                </text>

                {/* Hawaii Big Island (ACTIVE OVER PLUME) */}
                <polygon points="400,110 450,20 500,110" fill="#78350f" stroke="#ea580c" strokeWidth="2" />
                <ellipse cx="450" cy="20" rx="10" ry="4" fill="#ef4444" />
                <circle cx="450" cy="18" r="8" fill="#fbbf24" className="animate-ping" />
                <text x="450" y="10" fill="#f97316" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  Hawaii Big Island (ACTIVE)
                </text>

                {/* Stationary Mantle Superplume from deep Core boundary */}
                <path d="M 440 340 L 440 200 Q 440 130 450 110 Q 460 130 460 200 L 460 340 Z" fill="#f97316" />
                <path d="M 446 340 L 446 190 Q 446 130 450 110 Q 454 130 454 190 L 454 340 Z" fill="#fef08a" />
                <circle cx="450" cy="230" r="30" fill="rgba(249, 115, 22, 0.4)" className="animate-pulse" />

                {/* Plume annotations */}
                <text x="450" y="300" fill="#fef08a" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  STATIONARY DEEP MANTLE PLUME
                </text>
                <text x="450" y="320" fill="#fed7aa" fontSize="10" fontFamily="Plus Jakarta Sans" textAnchor="middle">
                  Anchored at core-mantle boundary · Burns island chain through drifting plate
                </text>
              </svg>
            </div>
          )}
        </div>

        {/* Right Zone: Controls & Scientific Deep Dive */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="border-b border-neutral-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                {mode === 'divergent'
                  ? 'Decompression Physics'
                  : mode === 'convergent'
                  ? 'Flux Melting Chemistry'
                  : 'Hotspot Dynamics'}
              </span>
            </div>

            {/* Dynamic Controls based on selected mode */}
            {mode === 'divergent' && (
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-300">Spreading Rate</span>
                    <span className="font-mono text-cyan-400 font-semibold">{spreadRate} cm/year</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    step={0.5}
                    value={spreadRate}
                    onChange={(e) => setSpreadRate(Number(e.target.value))}
                    className="w-full accent-cyan-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                    <span>1 cm/yr (Mid-Atlantic)</span>
                    <span>10 cm/yr (East Pacific)</span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs space-y-1.5">
                  <div className="text-amber-400 font-bold">Key Mechanism: Decompression Melting</div>
                  <p className="text-neutral-400 leading-relaxed">
                    Under normal lithostatic pressure, mantle peridotite remains solid despite being 1,300°C. When plates pull apart, pressure drops, lowering the rock solidus and generating basaltic magma.
                  </p>
                </div>
              </div>
            )}

            {mode === 'convergent' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-xs text-neutral-300 font-medium">Show Trapped H₂O Dehydration</span>
                  <input
                    type="checkbox"
                    checked={showWaterMolecules}
                    onChange={(e) => setShowWaterMolecules(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs space-y-1.5">
                  <div className="text-orange-400 font-bold">Key Mechanism: Hydrous Flux Melting</div>
                  <p className="text-neutral-400 leading-relaxed">
                    The oceanic plate drags seawater and serpentine minerals 100 km deep. Under high temperature and pressure, water is squeezed out, acting as a flux that breaks silica-oxygen bonds and drops mantle melting temperature by 200°C.
                  </p>
                </div>
              </div>
            )}

            {mode === 'hotspot' && (
              <div className="space-y-3">
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs space-y-1.5">
                  <div className="text-amber-400 font-bold">Key Mechanism: Mantle Plume Burn-Through</div>
                  <p className="text-neutral-400 leading-relaxed">
                    Unlike plate boundary volcanoes, hotspots originate from superheated plumes anchored deep at the core-mantle boundary (~2,900 km). As the oceanic plate moves northwest over the fixed torch, a trail of aged volcanic islands is created (Hawaiian-Emperor seamount chain).
                  </p>
                </div>
              </div>
            )}

            {/* Geological Examples Card */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs">
              <span className="font-semibold text-amber-400 block mb-1">Real-World Analogues:</span>
              <ul className="text-neutral-300 space-y-1 text-[11px]">
                {mode === 'divergent' && (
                  <>
                    <li>• <strong className="text-white">Mid-Atlantic Ridge:</strong> Splits North America and Eurasia</li>
                    <li>• <strong className="text-white">Iceland:</strong> Divergent boundary rising visibly above sea level</li>
                  </>
                )}
                {mode === 'convergent' && (
                  <>
                    <li>• <strong className="text-white">Pacific Ring of Fire:</strong> 450+ explosive volcanoes</li>
                    <li>• <strong className="text-white">Cascades / Mt. St. Helens:</strong> Juan de Fuca plate subducting</li>
                  </>
                )}
                {mode === 'hotspot' && (
                  <>
                    <li>• <strong className="text-white">Hawaii (Kilauea & Mauna Loa):</strong> Pacific plate moving ~8 cm/yr</li>
                    <li>• <strong className="text-white">Yellowstone Supervolcano:</strong> Continental hotspot track</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
