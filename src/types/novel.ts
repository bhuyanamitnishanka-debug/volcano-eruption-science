/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'hi' | 'or';

export interface LocalizedText {
  en: string;
  hi: string;
  or: string;
}

export interface ComicDialogue {
  id: string;
  character: 'maya' | 'jax' | 'ananya' | 'narrator';
  characterName: LocalizedText;
  avatarIcon: string;
  text: LocalizedText;
  type: 'speech' | 'thought' | 'caption' | 'shout';
}

export interface SoundBurst {
  text: string;
  color: string;
  rotation: string;
  top: string;
  left: string;
}

export interface NovelPanel {
  id: string;
  panelNumber: number;
  title: LocalizedText;
  subtitle: LocalizedText;
  visualType:
    | 'convection'
    | 'boundaries'
    | 'magma-chamber'
    | 'eruption'
    | 'recycling'
    | 'cross-section'
    | 'mountains'
    | 'volcano-types'
    | 'prediction'
    | 'vents'
    | 'atoll'
    | 'coastal-marine'
    | 'plates-map'
    | 'samudrayaan'
    | 'supercritical-power';
  dialogues: ComicDialogue[];
  soundBursts?: SoundBurst[];
  scienceNote: LocalizedText;
  interactiveHint?: LocalizedText;
  highlightFact: LocalizedText;
}

export interface NovelChapter {
  id: string;
  actNumber: number;
  romanNumeral: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  panels: NovelPanel[];
}

export interface QuizQuestion {
  id: string;
  question: LocalizedText;
  options: {
    id: string;
    text: LocalizedText;
    isCorrect: boolean;
  }[];
  explanation: LocalizedText;
  deepFact: LocalizedText;
}
