/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, RotateCcw, ChevronRight, HelpCircle, Sparkles } from 'lucide-react';
import { Language, QuizQuestion } from '../types/novel';
import { QUIZ_QUESTIONS } from '../data/novelData';
import { soundEngine } from '../utils/audio';

interface ScienceQuizProps {
  language: Language;
}

export const ScienceQuiz: React.FC<ScienceQuizProps> = ({ language }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const question: QuizQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optId: string) => {
    if (hasAnswered) return;
    setSelectedOption(optId);
    setHasAnswered(true);

    const isCorrect = question.options.find((o) => o.id === optId)?.isCorrect;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      soundEngine.playChime();
    } else {
      soundEngine.playCrack();
    }
  };

  const handleNext = () => {
    soundEngine.playCrack();
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setIsCompleted(true);
      soundEngine.playChime();
    }
  };

  const handleRestart = () => {
    soundEngine.playCrack();
    setCurrentIdx(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
      {/* Quiz Header */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              {language === 'hi'
                ? 'भूगर्भीय विज्ञान परीक्षा'
                : language === 'or'
                ? 'ଭୂତାତ୍ତ୍ୱିକ ବିଜ୍ଞାନ କୁଇଜ୍'
                : 'Volcanology Field Certification Exam'}
            </h2>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            {language === 'hi'
              ? 'मेंटल संवहन, प्लेट टेक्टोनिक्स और मैग्मा भौतिकी पर अपनी समझ का परीक्षण करें'
              : language === 'or'
              ? 'ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍, ପ୍ଲେଟ୍ ସୀମା ଓ ମାଗ୍ମା ବିସ୍ଫୋରଣ ବିଜ୍ଞାନ ପରୀକ୍ଷା'
              : 'Test your mastery of mantle thermodynamics, volatile exsolution & crustal recycling'}
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs text-neutral-500 font-mono block">Score</span>
          <span className="font-mono text-base font-bold text-amber-400">
            {score} / {QUIZ_QUESTIONS.length}
          </span>
        </div>
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-full transition-all duration-300"
              style={{
                width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
              Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
              {question.question[language]}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              let btnStyle = 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 text-neutral-200';

              if (hasAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-medium';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'bg-red-950/40 border-red-500 text-red-200';
                } else {
                  btnStyle = 'bg-neutral-950/40 border-neutral-900 text-neutral-500 opacity-60';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between text-xs md:text-sm ${btnStyle}`}
                >
                  <span>{opt.text[language]}</span>
                  {hasAnswered && opt.isCorrect && (
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-3" />
                  )}
                  {hasAnswered && isSelected && !opt.isCorrect && (
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 ml-3" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box upon answering */}
          {hasAnswered && (
            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 animate-fadeIn text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <HelpCircle className="w-4 h-4" />
                <span>Geological Explanation</span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                {question.explanation[language]}
              </p>
              <div className="pt-2 border-t border-neutral-800/80 flex items-start gap-1.5 text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-emerald-300">
                  Deep Fact: {question.deepFact[language]}
                </span>
              </div>
            </div>
          )}

          {/* Next Button */}
          {hasAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-all shadow-md"
              >
                <span>
                  {currentIdx === QUIZ_QUESTIONS.length - 1 ? 'Complete Exam' : 'Next Question'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Completion Card */
        <div className="text-center py-8 space-y-6">
          <div className="inline-flex p-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              {score >= 5 ? 'Distinction: Senior Volcanologist' : 'Certification Completed!'}
            </h3>
            <p className="text-sm text-neutral-400 max-w-md mx-auto">
              You correctly solved {score} out of {QUIZ_QUESTIONS.length} geological challenges. You have mastered mantle convection, plate mechanics, and volcanic triggers!
            </p>
          </div>

          <div className="inline-block p-4 bg-neutral-950 rounded-xl border border-neutral-800 text-xs font-mono text-amber-400">
            FINAL SCORE: {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Science Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
