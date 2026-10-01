/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Language } from '../types/novel';
import { soundEngine } from '../utils/audio';

interface TopNavProps {
  currentTab: 'novel' | 'mantle' | 'magma' | 'mountains' | 'types' | 'ocean' | 'recycling' | 'quiz';
  onSelectTab: (tab: 'novel' | 'mantle' | 'magma' | 'mountains' | 'types' | 'ocean' | 'recycling' | 'quiz') => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentTab,
  onSelectTab,
  language,
  onLanguageChange,
  isMuted,
  onToggleMute,
}) => {
  return (
    <header className="sticky top-0 z-50 flex flex-col px-4 lg:px-8 py-2.5 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 text-neutral-100 gap-2">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            soundEngine.playCrack();
            onSelectTab('novel');
          }}
          className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap text-left"
        >
          volcano-eruption-science
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-neutral-300">
        <button
          onClick={() => {
            soundEngine.playCrack();
            onSelectTab('novel');
          }}
          className={`hover:text-white transition-colors whitespace-nowrap ${
            currentTab === 'novel' ? 'text-amber-400 font-semibold underline underline-offset-8 decoration-amber-500 decoration-2' : ''
          }`}
        >
          {language === 'hi' ? 'उपन्यास' : language === 'or' ? 'ନଭେଲ୍' : 'Graphic Novel'}
        </button>
        <button
          onClick={() => {
            soundEngine.playRumble(400);
            onSelectTab('mantle');
          }}
          className={`hover:text-white transition-colors whitespace-nowrap ${
            currentTab === 'mantle' ? 'text-amber-400 font-semibold underline underline-offset-8 decoration-amber-500 decoration-2' : ''
          }`}
        >
          {language === 'hi' ? 'मेंटल' : language === 'or' ? 'ମେଣ୍ଟଲ୍' : 'Mantle Engine'}
        </button>
        <button
          onClick={() => {
            soundEngine.playBubblePop();
            onSelectTab('magma');
          }}
          className={`hover:text-white transition-colors whitespace-nowrap ${
            currentTab === 'magma' ? 'text-amber-400 font-semibold underline underline-offset-8 decoration-amber-500 decoration-2' : ''
          }`}
        >
          {language === 'hi' ? 'मैग्मा लैब' : language === 'or' ? 'ମାଗ୍ମା ଲ୍ୟାବ୍' : 'Magma Lab'}
        </button>
        <button
          onClick={() => {
            soundEngine.playCrack();
            onSelectTab('mountains');
          }}
          className={`hover:text-white transition-colors whitespace-nowrap ${
            currentTab === 'mountains' ? 'text-amber-400 font-semibold underline underline-offset-8 decoration-amber-500 decoration-2' : ''
          }`}
        >
          {language === 'hi' ? 'पर्वत निर्माण' : language === 'or' ? 'ପର୍ବତ ସୃଷ୍ଟି' : 'Mountains'}
        </button>
        <button
          onClick={() => {
            soundEngine.playEruptionBoom();
            onSelectTab('types');
          }}
          className={`hover:text-white transition-colors whitespace-nowrap ${
            currentTab === 'types' ? 'text-amber-400 font-semibold underline underline-offset-8 decoration-amber-500 decoration-2' : ''
          }`}
        >
          {language === 'hi' ? 'ज्वालामुखी प्रकार' : language === 'or' ? 'ଜ୍ୱାଳାମୁଖୀ ପ୍ରକାର' : 'Volcano Types'}
        </button>
        <button
          onClick={() => {
            soundEngine.playBubblePop();
            onSelectTab('ocean');
          }}
          className={`hover:text-white transition-colors whitespace-nowrap ${
            currentTab === 'ocean' ? 'text-amber-400 font-semibold underline underline-offset-8 decoration-amber-500 decoration-2' : ''
          }`}
        >
          {language === 'hi' ? 'समुद्री वेंट व एटोल' : language === 'or' ? 'ସମୁଦ୍ର ଝରଣା ଓ ଏଟୋଲ୍' : 'Ocean Abyss & Vents'}
        </button>
      </nav>

      {/* Zone 3: 1-2 primary actions */}
      <div className="flex items-center gap-2">
        {/* Language selector segmented control */}
        <div className="flex items-center p-0.5 bg-neutral-900 border border-neutral-800 rounded-lg">
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-2 py-1 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              language === 'en' ? 'bg-amber-500 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
            title="English"
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange('hi')}
            className={`px-2 py-1 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              language === 'hi' ? 'bg-amber-500 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
            title="हिन्दी"
          >
            हिन्दी
          </button>
          <button
            onClick={() => onLanguageChange('or')}
            className={`px-2 py-1 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              language === 'or' ? 'bg-amber-500 text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
            title="ଓଡ଼ିଆ"
          >
            ଓଡ଼ିଆ
          </button>
        </div>

        {/* Audio Mute toggle */}
        <button
          onClick={onToggleMute}
          className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
          title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
        </button>

        {/* Field Quiz Action Button */}
        <button
          onClick={() => {
            soundEngine.playChime();
            onSelectTab('quiz');
          }}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shadow-sm whitespace-nowrap ${
            currentTab === 'quiz'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Field Quiz</span>
        </button>
      </div>
      </div>

      {/* Mobile & Tablet Horizontal Tab Sub-Bar */}
      <div className="w-full flex lg:hidden items-center gap-2 overflow-x-auto pt-2 pb-1 border-t border-neutral-800/80 scrollbar-none text-xs">
        <button
          onClick={() => {
            soundEngine.playCrack();
            onSelectTab('novel');
          }}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'novel'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'text-neutral-400 hover:text-white bg-neutral-900/60'
          }`}
        >
          {language === 'hi' ? 'उपन्यास' : language === 'or' ? 'ନଭେଲ୍' : 'Novel'}
        </button>
        <button
          onClick={() => {
            soundEngine.playRumble(400);
            onSelectTab('mantle');
          }}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'mantle'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'text-neutral-400 hover:text-white bg-neutral-900/60'
          }`}
        >
          {language === 'hi' ? 'मेंटल' : language === 'or' ? 'ମେଣ୍ଟଲ୍' : 'Mantle'}
        </button>
        <button
          onClick={() => {
            soundEngine.playBubblePop();
            onSelectTab('magma');
          }}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'magma'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'text-neutral-400 hover:text-white bg-neutral-900/60'
          }`}
        >
          {language === 'hi' ? 'मैग्मा' : language === 'or' ? 'ମାଗ୍ମା' : 'Magma Lab'}
        </button>
        <button
          onClick={() => {
            soundEngine.playCrack();
            onSelectTab('mountains');
          }}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'mountains'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'text-neutral-400 hover:text-white bg-neutral-900/60'
          }`}
        >
          {language === 'hi' ? 'पर्वत' : language === 'or' ? 'ପର୍ବତ' : 'Mountains'}
        </button>
        <button
          onClick={() => {
            soundEngine.playEruptionBoom();
            onSelectTab('types');
          }}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'types'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'text-neutral-400 hover:text-white bg-neutral-900/60'
          }`}
        >
          {language === 'hi' ? 'प्रकार' : language === 'or' ? 'ପ୍ରକାର' : 'Volcano Types'}
        </button>
        <button
          onClick={() => {
            soundEngine.playBubblePop();
            onSelectTab('ocean');
          }}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'ocean'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'text-neutral-400 hover:text-white bg-neutral-900/60'
          }`}
        >
          {language === 'hi' ? 'समुद्र वेंट' : language === 'or' ? 'ସମୁଦ୍ର' : 'Ocean & Vents'}
        </button>
        <button
          onClick={() => {
            soundEngine.playChime();
            onSelectTab('recycling');
          }}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'recycling'
              ? 'bg-amber-400 text-neutral-950 font-bold'
              : 'text-neutral-400 hover:text-white bg-neutral-900/60'
          }`}
        >
          {language === 'hi' ? 'रीसाइक्लिंग' : language === 'or' ? 'ରିସାଇକ୍ଲିଂ' : 'Recycling'}
        </button>
      </div>
    </header>
  );
};
