/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  BookOpen,
  Sparkles,
  Bot,
  UserCheck,
  Flame,
  Info,
} from 'lucide-react';
import { NovelChapter, NovelPanel, Language } from '../types/novel';
import { NOVEL_CHAPTERS } from '../data/novelData';
import { soundEngine } from '../utils/audio';
import { MantleConvectionSim } from './panels/MantleConvectionSim';
import { TectonicBoundariesSim } from './panels/TectonicBoundariesSim';
import { MagmaChamberLab } from './panels/MagmaChamberLab';
import { EarthRecyclingSim } from './panels/EarthRecyclingSim';
import { MountainBuildingSim } from './panels/MountainBuildingSim';
import { VolcanoTypesExplorer } from './panels/VolcanoTypesExplorer';
import { EruptionPredictionLab } from './panels/EruptionPredictionLab';
import { HydrothermalVentsSim } from './panels/HydrothermalVentsSim';
import { AtollFormationSim } from './panels/AtollFormationSim';
import { CoastalMarineLandforms } from './panels/CoastalMarineLandforms';
import { TectonicPlatesMap } from './panels/TectonicPlatesMap';
import { SamudrayaanSim } from './panels/SamudrayaanSim';
import { SupercriticalVolcanoLab } from './panels/SupercriticalVolcanoLab';

interface GraphicNovelReaderProps {
  language: Language;
}

export const GraphicNovelReader: React.FC<GraphicNovelReaderProps> = ({ language }) => {
  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(0);
  const [activePanelIdx, setActivePanelIdx] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [focusedPanel, setFocusedPanel] = useState<NovelPanel | null>(null);

  const currentChapter: NovelChapter = NOVEL_CHAPTERS[selectedChapterIdx];
  const panels = currentChapter.panels;

  // Auto-play timer for graphic novel narration
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlay) {
      timer = setTimeout(() => {
        if (activePanelIdx < panels.length - 1) {
          setActivePanelIdx((prev) => prev + 1);
          soundEngine.playCrack();
        } else if (selectedChapterIdx < NOVEL_CHAPTERS.length - 1) {
          setSelectedChapterIdx((prev) => prev + 1);
          setActivePanelIdx(0);
          soundEngine.playRumble(500);
        } else {
          setIsAutoPlay(false);
          soundEngine.playChime();
        }
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [isAutoPlay, activePanelIdx, selectedChapterIdx, panels.length]);

  const handleNextPanel = () => {
    soundEngine.playCrack();
    if (activePanelIdx < panels.length - 1) {
      setActivePanelIdx((prev) => prev + 1);
    } else if (selectedChapterIdx < NOVEL_CHAPTERS.length - 1) {
      setSelectedChapterIdx((prev) => prev + 1);
      setActivePanelIdx(0);
      soundEngine.playRumble(400);
    }
  };

  const handlePrevPanel = () => {
    soundEngine.playCrack();
    if (activePanelIdx > 0) {
      setActivePanelIdx((prev) => prev - 1);
    } else if (selectedChapterIdx > 0) {
      setSelectedChapterIdx((prev) => prev - 1);
      setActivePanelIdx(NOVEL_CHAPTERS[selectedChapterIdx - 1].panels.length - 1);
    }
  };

  // Render appropriate interactive visual for each panel
  const renderPanelVisual = (type: NovelPanel['visualType']) => {
    switch (type) {
      case 'convection':
        return <MantleConvectionSim language={language} />;
      case 'boundaries':
        return <TectonicBoundariesSim language={language} />;
      case 'magma-chamber':
      case 'eruption':
        return <MagmaChamberLab language={language} />;
      case 'recycling':
        return <EarthRecyclingSim language={language} />;
      case 'mountains':
        return <MountainBuildingSim language={language} />;
      case 'volcano-types':
        return <VolcanoTypesExplorer language={language} />;
      case 'prediction':
        return <EruptionPredictionLab language={language} />;
      case 'vents':
        return <HydrothermalVentsSim language={language} />;
      case 'atoll':
        return <AtollFormationSim language={language} />;
      case 'coastal-marine':
        return <CoastalMarineLandforms language={language} />;
      case 'plates-map':
        return <TectonicPlatesMap language={language} />;
      case 'samudrayaan':
        return <SamudrayaanSim language={language} />;
      case 'supercritical-power':
        return <SupercriticalVolcanoLab language={language} />;
      default:
        return <MantleConvectionSim language={language} />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Chapter Navigation Ribbon */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 shadow-lg">
        <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-thin">
          <div className="flex items-center gap-1.5 shrink-0">
            {NOVEL_CHAPTERS.map((chapter, idx) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setSelectedChapterIdx(idx);
                  setActivePanelIdx(0);
                  soundEngine.playCrack();
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  selectedChapterIdx === idx
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 font-bold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <span className="font-mono text-[10px] px-1 py-0.2 bg-black/20 rounded">
                  {chapter.romanNumeral}
                </span>
                <span>{chapter.title[language]}</span>
              </button>
            ))}
          </div>

          {/* Autoplay & Reading Mode Controls */}
          <div className="flex items-center gap-2 shrink-0 border-l border-neutral-800 pl-3">
            <button
              onClick={() => {
                setIsAutoPlay(!isAutoPlay);
                soundEngine.playCrack();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                isAutoPlay
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoPlay ? 'Auto-Reading' : 'Auto Play'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Prologue Header Card */}
      <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border-2 border-neutral-800 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl bg-halftone">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-comic text-2xl text-amber-500 tracking-wide comic-badge">
              {currentChapter.romanNumeral}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
              Interactive Graphic Novel
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentChapter.title[language]}
          </h1>

          <p className="text-sm md:text-base text-amber-400 font-medium">
            {currentChapter.subtitle[language]}
          </p>

          <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-3xl">
            {currentChapter.summary[language]}
          </p>
        </div>

        {/* Atmospheric Lava/Glow Corner Watermark Graphic */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Comic Panels Grid Spread */}
      <div className="space-y-12">
        {panels.map((panel, pIdx) => {
          const isCurrentActive = activePanelIdx === pIdx;

          return (
            <article
              key={panel.id}
              className={`relative bg-neutral-900 border-4 ${
                isCurrentActive ? 'border-amber-500 shadow-2xl shadow-orange-950/40' : 'border-neutral-800'
              } rounded-2xl p-5 md:p-7 transition-all duration-300`}
            >
              {/* Comic Sound Bursts */}
              {panel.soundBursts?.map((burst, bIdx) => (
                <div
                  key={bIdx}
                  style={{
                    top: burst.top,
                    left: burst.left,
                    transform: `rotate(${burst.rotation})`,
                    color: burst.color,
                  }}
                  className="absolute z-20 pointer-events-none hidden md:block font-comic text-3xl md:text-5xl font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] animate-pulse"
                >
                  {burst.text}
                </div>
              ))}

              {/* Panel Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-comic text-xl text-neutral-950 bg-amber-400 px-2.5 py-0.5 rounded font-black tracking-wide">
                    PANEL #{panel.panelNumber}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                      {panel.title[language]}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono">
                      {panel.subtitle[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500 font-mono">
                    Scene {pIdx + 1} of {panels.length}
                  </span>
                </div>
              </div>

              {/* Interactive Visual Engine Stage */}
              <div className="mb-6 relative rounded-xl overflow-hidden border border-neutral-800">
                {renderPanelVisual(panel.visualType)}
              </div>

              {/* Comic Dialogue & Narrator Balloons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {panel.dialogues.map((dialogue) => {
                  const isNarrator = dialogue.character === 'narrator';
                  const isJax = dialogue.character === 'jax';
                  const isShout = dialogue.type === 'shout';

                  return (
                    <div
                      key={dialogue.id}
                      className={`relative p-4 rounded-xl border transition-all ${
                        isNarrator
                          ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                          : isJax
                          ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200'
                          : isShout
                          ? 'bg-red-950/40 border-red-500/60 text-red-100 shadow-lg'
                          : 'bg-neutral-950 border-neutral-700 text-neutral-200'
                      }`}
                    >
                      {/* Character Label */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                          {isJax ? (
                            <Bot className="w-3.5 h-3.5 text-cyan-400" />
                          ) : isNarrator ? (
                            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                          ) : (
                            <UserCheck className="w-3.5 h-3.5 text-orange-400" />
                          )}
                          <span
                            className={
                              isJax
                                ? 'text-cyan-400 font-mono'
                                : isNarrator
                                ? 'text-amber-400 font-display'
                                : 'text-orange-400'
                            }
                          >
                            {dialogue.characterName[language]}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-black/40 rounded text-neutral-400">
                          {dialogue.type}
                        </span>
                      </div>

                      {/* Dialogue Body */}
                      <p
                        className={`text-xs md:text-sm leading-relaxed ${
                          isShout ? 'font-bold tracking-tight' : ''
                        }`}
                      >
                        "{dialogue.text[language]}"
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Scientific Note & Key Fact Footer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-neutral-800 text-xs">
                <div className="flex items-start gap-2 text-neutral-300">
                  <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-400">Scientific Foundation: </strong>
                    <span>{panel.scienceNote[language]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-neutral-300">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-400">Key Geological Fact: </strong>
                    <span>{panel.highlightFact[language]}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Pager Controls */}
      <div className="sticky bottom-4 z-40 flex items-center justify-between p-3 bg-neutral-950/95 backdrop-blur-md border border-neutral-800 rounded-xl shadow-2xl">
        <button
          onClick={handlePrevPanel}
          disabled={selectedChapterIdx === 0 && activePanelIdx === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Panel</span>
        </button>

        <div className="text-xs font-mono text-neutral-400">
          Act {currentChapter.romanNumeral} · Panel {activePanelIdx + 1} of {panels.length}
        </div>

        <button
          onClick={handleNextPanel}
          disabled={
            selectedChapterIdx === NOVEL_CHAPTERS.length - 1 &&
            activePanelIdx === panels.length - 1
          }
          className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-md"
        >
          <span>Next Panel</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
