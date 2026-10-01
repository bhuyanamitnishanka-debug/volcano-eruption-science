/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { GraphicNovelReader } from './components/GraphicNovelReader';
import { MantleConvectionSim } from './components/panels/MantleConvectionSim';
import { MagmaChamberLab } from './components/panels/MagmaChamberLab';
import { EarthRecyclingSim } from './components/panels/EarthRecyclingSim';
import { MountainBuildingSim } from './components/panels/MountainBuildingSim';
import { VolcanoTypesExplorer } from './components/panels/VolcanoTypesExplorer';
import { EruptionPredictionLab } from './components/panels/EruptionPredictionLab';
import { GeologicalCrossSection } from './components/panels/GeologicalCrossSection';
import { HydrothermalVentsSim } from './components/panels/HydrothermalVentsSim';
import { AtollFormationSim } from './components/panels/AtollFormationSim';
import { CoastalMarineLandforms } from './components/panels/CoastalMarineLandforms';
import { TectonicPlatesMap } from './components/panels/TectonicPlatesMap';
import { SamudrayaanSim } from './components/panels/SamudrayaanSim';
import { ScienceQuiz } from './components/ScienceQuiz';
import { Language } from './types/novel';
import { soundEngine } from './utils/audio';
import { Flame, Compass, RefreshCw, Mountain, Triangle, Waves, Globe } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    'novel' | 'mantle' | 'magma' | 'mountains' | 'types' | 'ocean' | 'recycling' | 'quiz'
  >('novel');
  const [language, setLanguage] = useState<Language>('en');
  const [isMuted, setIsMuted] = useState<boolean>(soundEngine.isMuted);

  const handleToggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-body selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Bar adhering to strict Top Bar Contract */}
      <TopNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        language={language}
        onLanguageChange={setLanguage}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Hero Section if on Graphic Novel mode */}
        {currentTab === 'novel' && (
          <div className="relative border-b border-neutral-800 pb-8 pt-2">
            <div className="max-w-4xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
                <span>Earth Science Comic Series</span>
                <span aria-hidden="true">·</span>
                <span>Volumetric Thermodynamic Edition</span>
                <span aria-hidden="true">·</span>
                <span>Tri-Lingual</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                volcano-eruption-science
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {language === 'hi'
                  ? 'पृथ्वी के 6,000°C कोर संवहन से लेकर प्लेटों के टकराव (हिमालय का निर्माण), 4 प्रकार के ज्वालामुखी (बैरन द्वीप), 400°C हाइड्रोथर्मल वेंट, कोरल एटोल और पूर्व-चेतावनी प्रणाली तक: एक एनिमेटेड ग्राफिक उपन्यास एवं सिमुलेटर।'
                  : language === 'or'
                  ? 'ପୃଥିବୀର ଭିତର ଉତ୍ତାପ, ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍, ପ୍ଲେଟ୍ ଘର୍ଷଣରୁ ପର୍ବତ ସୃଷ୍ଟି (ହିମାଳୟ), ୪ ପ୍ରକାର ଜ୍ୱାଳାମୁଖୀ (ବାରେନ୍ ଦ୍ୱୀପ), ସାମୁଦ୍ରିକ ଝରଣା, ଏଟୋଲ୍ ଓ ପୂର୍ବାନୁମାନ ବିଜ୍ଞାନ।'
                  : 'From Earth’s 6,000°C core heat loops to plate friction mountain building (Himalayas), the 4 volcano morphologies (Barren Island), undersea 400°C hydrothermal vents, sinking coral atolls, and early warning forecasting.'}
              </p>

              {/* Functional Quick Action Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    soundEngine.playEruptionBoom();
                    setCurrentTab('magma');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                >
                  <Flame className="w-4 h-4" />
                  <span>Launch Magma Lab</span>
                </button>

                <button
                  onClick={() => {
                    soundEngine.playCrack();
                    setCurrentTab('mountains');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <Mountain className="w-4 h-4 text-amber-400" />
                  <span>Mountain Collision (Rug Crumple)</span>
                </button>

                <button
                  onClick={() => {
                    soundEngine.playBubblePop();
                    setCurrentTab('types');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <Triangle className="w-4 h-4 text-orange-400" />
                  <span>4 Volcano Types & Barren Island</span>
                </button>

                <button
                  onClick={() => {
                    soundEngine.playBubblePop();
                    setCurrentTab('ocean');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <Waves className="w-4 h-4 text-cyan-400" />
                  <span>Samudrayaan & Ocean Abyss</span>
                </button>

                <button
                  onClick={() => {
                    soundEngine.playRumble(500);
                    setCurrentTab('mantle');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>Mantle Engine</span>
                </button>

                <button
                  onClick={() => {
                    soundEngine.playChime();
                    setCurrentTab('recycling');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-4 h-4 text-emerald-400" />
                  <span>Crust Recycling</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Routing */}
        {currentTab === 'novel' && (
          <div className="space-y-12">
            <GraphicNovelReader language={language} />
            <GeologicalCrossSection language={language} />
            <EruptionPredictionLab language={language} />
          </div>
        )}

        {currentTab === 'mantle' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Mantle Convection & Thermal Engine
              </h2>
              <p className="text-xs text-neutral-400">
                Core-mantle thermal boundary layer, buoyant silicate plumes, and planetary conveyor belts.
              </p>
            </div>
            <MantleConvectionSim language={language} />
            <GeologicalCrossSection language={language} />
          </div>
        )}

        {currentTab === 'magma' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Magma Chamber Physics & Eruption Lab
              </h2>
              <p className="text-xs text-neutral-400">
                Decompression exsolution, silica viscosity tuning, and explosive Plinian vs effusive Hawaiian eruptions.
              </p>
            </div>
            <MagmaChamberLab language={language} />
          </div>
        )}

        {currentTab === 'mountains' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Tectonic Plate Friction & Mountain Orogeny
              </h2>
              <p className="text-xs text-neutral-400">
                How friction buckles rock layers: Fold Mountains (Himalayas) and fractured Fault-Block ranges (horsts and grabens).
              </p>
            </div>
            <MountainBuildingSim language={language} />
          </div>
        )}

        {currentTab === 'types' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                The Four Volcano Morphologies & Forecasting Radar
              </h2>
              <p className="text-xs text-neutral-400">
                Shield, Stratovolcano (Barren Island), Cinder Cone, and Lava Dome comparison alongside early warning predictive instrumentation.
              </p>
            </div>
            <VolcanoTypesExplorer language={language} />
            <EruptionPredictionLab language={language} />
          </div>
        )}

        {currentTab === 'ocean' && (
          <div className="space-y-10">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Undersea Geothermal Abyss, Atolls & Coastal Landforms
              </h2>
              <p className="text-xs text-neutral-400">
                400°C Black Smoker vents, Darwinian coral atoll subsidence, 3,000-km Bengal Submarine Fan, and tectonic plate boundaries.
              </p>
            </div>
            <SamudrayaanSim language={language} />
            <HydrothermalVentsSim language={language} />
            <AtollFormationSim language={language} />
            <CoastalMarineLandforms language={language} />
            <TectonicPlatesMap language={language} />
          </div>
        )}

        {currentTab === 'recycling' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Earth’s Closed Crustal Recycling Machine
              </h2>
              <p className="text-xs text-neutral-400">
                Answering why Earth neither shrinks nor expands: dynamic equilibrium between seafloor spreading, subduction, and erosion.
              </p>
            </div>
            <EarthRecyclingSim language={language} />
          </div>
        )}

        {currentTab === 'quiz' && (
          <div className="space-y-6">
            <ScienceQuiz language={language} />
          </div>
        )}
      </main>

      {/* Clean, quiet Footer */}
      <footer className="mt-16 border-t border-neutral-900 bg-neutral-950 py-8 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">volcano-eruption-science</span>
            <span>·</span>
            <span>Geological Science Graphic Novel & Sandbox</span>
          </div>

          <div className="text-neutral-400 flex items-center gap-4">
            <span>Core Thermodynamics</span>
            <span>Plate Tectonics</span>
            <span>Exsolution Physics</span>
            <span>Crust Conservation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
