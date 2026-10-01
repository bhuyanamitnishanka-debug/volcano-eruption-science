/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Flame,
  Shield,
  Triangle,
  CircleDot,
  Mountain,
  Info,
  Sparkles,
  MapPin,
  Wind,
  Thermometer,
  AlertTriangle,
  Layers,
  CloudFog,
  Sun,
  Activity,
} from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface VolcanoTypesExplorerProps {
  language: Language;
}

type VolcanoTypeKey = 'shield' | 'stratovolcano' | 'cinder' | 'dome';
type ExplorerMode = 'morphology' | 'viscosity' | 'ash';

interface VolcanoDetails {
  key: VolcanoTypeKey;
  name: { en: string; hi: string; or: string };
  shape: { en: string; hi: string; or: string };
  eruptionType: { en: string; hi: string; or: string };
  formation: { en: string; hi: string; or: string };
  example: string;
  location: string;
  viscosity: string;
  slopeAngle: string;
  svgColor: string;
}

const VOLCANO_CATALOG: VolcanoDetails[] = [
  {
    key: 'shield',
    name: {
      en: 'Shield Volcano',
      hi: 'शील्ड ज्वालामुखी',
      or: 'ଶିଲ୍ଡ ଜ୍ୱାଳାମୁଖୀ',
    },
    shape: {
      en: 'Broad, wide, and flat—resembling a fallen warrior’s shield.',
      hi: 'चौड़ा, चपटा और फैला हुआ—योद्धा की ढाल जैसा दिखाई देता है।',
      or: 'ପ୍ରଶସ୍ତ, ଚେପ୍ଟା ଏବଂ ପ୍ରସାରିତ—ଯୋଦ୍ଧାର ଢାଲ ପରି ଦେଖାଯାଏ।',
    },
    eruptionType: {
      en: 'Effusive (Gentle, runny basaltic lava flows, low VEI 0–1).',
      hi: 'शांत प्रवाह (पतला, बहने वाला बेसाल्टिक लावा, धीमी गति)।',
      or: 'ଶାନ୍ତ ପ୍ରବାହ (ପତଳା ତରଳ ବାସାଲ୍ଟ ଲାଭା ନଦୀ)।',
    },
    formation: {
      en: 'Built by successive layers of low-viscosity basaltic lava that travels tens of kilometers before solidifying.',
      hi: 'कम चिपचिपे बेसाल्टिक लावा की परतों के जमने से बनता है जो दूर-दूर तक फैल जाती हैं।',
      or: 'କମ ବହଳିଆ ବାସାଲ୍ଟ ଲାଭା ବହୁ ଦୂର ପର୍ଯ୍ୟନ୍ତ ବହିଯାଇ ଧୀରେ ଧୀରେ ଜମି ଏହା ଗଠନ କରେ।',
    },
    example: 'Mauna Loa & Kilauea',
    location: 'Hawaii, USA (Hotspot)',
    viscosity: 'Very Low (Fluid Basalt)',
    slopeAngle: '2° – 10° (Gentle slope)',
    svgColor: '#ea580c',
  },
  {
    key: 'stratovolcano',
    name: {
      en: 'Composite Volcano (Stratovolcano)',
      hi: 'मिश्रित ज्वालामुखी (स्ट्रैटोज्वालामुखी)',
      or: 'ଷ୍ଟ୍ରାଟୋଜ୍ୱାଳାମୁଖୀ (Stratovolcano)',
    },
    shape: {
      en: 'Tall, steep, symmetrical cones with a prominent summit crater.',
      hi: 'ऊंचा, खड़ी ढलानों वाला और सुंदर सममित शंकु।',
      or: 'ଉଚ୍ଚ, ଖଡ଼ି ଢଳାଣ ଏବଂ ସୁନ୍ଦର ଶଙ୍କୁ ଆକୃତି।',
    },
    eruptionType: {
      en: 'Highly Explosive (Billowing ash columns, gas detonations, viscous lava).',
      hi: 'अत्यधिक विस्फोटक (राख का गुबार, गैस विस्फोट और गाढ़ा लावा)।',
      or: 'ଅତ୍ୟଧିକ ବିସ୍ଫୋରକ (ପାଉଁଶ ଧୂଆଁ, ଗ୍ୟାସ୍ ଏବଂ ବହଳିଆ ଲାଭା)।',
    },
    formation: {
      en: 'Alternating strata of hardened lava flows, tephra cinders, and volcanic ash from repeated violent cycles.',
      hi: 'हिंसक विस्फोटों से निकली राख, पत्थरों और जमे हुए लावे की वैकल्पिक परतों (Strata) से बनता है।',
      or: 'ବାରମ୍ବାର ବିସ୍ଫୋରଣରୁ ବାହାରିଥିବା ପାଉଁଶ, ପଥର ଏବଂ ଲାଭାର ଗୋଟିଏ ପରେ ଗୋଟିଏ ପରସ୍ତରୁ ନିର୍ମିତ।',
    },
    example: 'Mount Fuji (Japan) & Barren Island (India)',
    location: 'Pacific Ring of Fire & Andaman Sea Subduction Zone',
    viscosity: 'High (Andesitic / Dacitic)',
    slopeAngle: '30° – 35° (Steep flanks)',
    svgColor: '#dc2626',
  },
  {
    key: 'cinder',
    name: {
      en: 'Cinder Cone (Scoria Cone)',
      hi: 'सिंडर कोन (अंगार शंकु)',
      or: 'ସିଣ୍ଡର କୋନ୍ (Cinder Cone)',
    },
    shape: {
      en: 'Small, steep, cone-shaped hills with a bowl-shaped crater at the top.',
      hi: 'छोटी, खड़ी ढलान वाली शंकु पहाड़ी जिसके शीर्ष पर कटोरीनुमा गड्ढा होता है।',
      or: 'ଛୋଟ, ଖଡ଼ି ଢଳାଣ ବିଶିଷ୍ଟ ପାହାଡ଼ ଯାହାର ମୁଣ୍ଡିଆରେ କୁଣ୍ଡ ପରି ଗର୍ତ୍ତ ଥାଏ।',
    },
    eruptionType: {
      en: 'Short, explosive bursts of lava blobs (Strombolian fountains).',
      hi: 'हवा में लावे के फव्वारे और उछलते हुए अंगारे (स्ट्रोम्बोलियन विस्फोट)।',
      or: 'ଆକାଶକୁ ଲାଭାର ଫୁଆରା ଓ ଅଙ୍ଗାର ପଥର ଛିଞ୍ଚି ହେବା।',
    },
    formation: {
      en: 'Formed when gas-charged lava sprays into the air, shatters into cinders (scoria), and piles up around the central vent.',
      hi: 'गैस से भरा लावा हवा में उछलकर छोटे पत्थरों (सिंडर) में टूटता है और मुंह के चारों ओर ढेर बन जाता है।',
      or: 'ଗ୍ୟାସ୍ ପୂର୍ଣ୍ଣ ଲାଭା ଆକାଶକୁ ଫିଙ୍ଗି ହୋଇ ଥଣ୍ଡା ଅଙ୍ଗାର (ସିଣ୍ଡର) ଭାବେ ଚାରିପାଖେ ଜମା ହୁଏ।',
    },
    example: 'Parícutin (Grew out of a cornfield in 1943)',
    location: 'Michoacán, Mexico',
    viscosity: 'Moderate to Low',
    slopeAngle: '30° – 40° (Angle of repose)',
    svgColor: '#f59e0b',
  },
  {
    key: 'dome',
    name: {
      en: 'Lava Dome (Volcanic Plug)',
      hi: 'लावा गुंबद (लावा डोम)',
      or: 'ଲାଭା ଡୋମ୍ (Lava Dome)',
    },
    shape: {
      en: 'Small, rounded, steep bumpy mounds or dome-shaped plugs.',
      hi: 'छोटा, गोल और ऊबड़-खाबड़ गुंबद या क्रेटर के भीतर डाट (Plug)।',
      or: 'ଛୋଟ, ଗୋଲ ଓ ଖଦଡ଼ିଆ ଗମ୍ବୁଜ ଆକୃତି।',
    },
    eruptionType: {
      en: 'Slow, non-explosive extrusion of ultra-thick, pasty magma.',
      hi: 'अत्यधिक गाढ़े और चिपचिपे लावे का धीरे-धीरे बाहर रिसना।',
      or: 'ଅତ୍ୟନ୍ତ ବହଳିଆ ଅଠାଳିଆ ଲାଭାର ଧୀର ଉତୁରିବା।',
    },
    formation: {
      en: 'Thick, silica-rich rhyolitic lava cannot flow far; it squeezes out like toothpaste and piles up directly over the vent.',
      hi: 'गाढ़ा रायोलाइटिक लावा बह नहीं पाता; यह टूथपेस्ट की तरह मुंह पर ही फूलकर गुंबद बना लेता है।',
      or: 'ଅତ୍ୟଧିକ ବହଳିଆ ଲାଭା ବହି ନପାରି ଟୁଥପେଷ୍ଟ ପରି ମୁହଁ ଉପରେ ଜମା ହୋଇ ଗମ୍ବୁଜ ସୃଷ୍ଟି କରେ।',
    },
    example: 'Mount St. Helens Crater Dome',
    location: 'Washington, USA',
    viscosity: 'Extreme (Rhyolite / Dacite)',
    slopeAngle: 'Bulbous steep dome',
    svgColor: '#a855f7',
  },
];

export const VolcanoTypesExplorer: React.FC<VolcanoTypesExplorerProps> = ({ language }) => {
  const [activeMode, setActiveMode] = useState<ExplorerMode>('morphology');
  const [selectedKey, setSelectedKey] = useState<VolcanoTypeKey>('stratovolcano');
  const [isLavaFlowing, setIsLavaFlowing] = useState<boolean>(true);

  // Viscosity Lab State
  const [silicaPercent, setSilicaPercent] = useState<number>(50); // 45% to 75%
  const magmaTemp = Math.round(1200 - ((silicaPercent - 45) / 30) * 450); // 1200°C down to 750°C
  const viscosityExp = Math.round(1 + ((silicaPercent - 45) / 30) * 7); // 10^1 to 10^8 Pa·s
  const magmaType =
    silicaPercent < 52
      ? { name: 'Basaltic Magma', color: '#ea580c', speed: 'Fast (10–30 km/h)', erupt: 'Effusive / Fluid Sheets' }
      : silicaPercent < 63
      ? { name: 'Andesitic Magma', color: '#dc2626', speed: 'Moderate (1–5 km/h)', erupt: 'Explosive Pulses' }
      : silicaPercent < 69
      ? { name: 'Dacitic Magma', color: '#b91c1c', speed: 'Sluggish (m/day)', erupt: 'Pyroclastic Blasts' }
      : { name: 'Rhyolitic Magma', color: '#7f1d1d', speed: 'Rigid Plug / Dome', erupt: 'Cataclysmic Super-Eruption' };

  // Ash & Aerosols Climate Lab State (Mount Tambora 1815 simulation)
  const [ashMegatons, setAshMegatons] = useState<number>(100); // 10 to 150 Megatons
  const tempDropC = (-(ashMegatons / 100) * 0.9).toFixed(2);
  const solarDimmingPercent = Math.round((ashMegatons / 150) * 28);

  const activeVolcano = VOLCANO_CATALOG.find((v) => v.key === selectedKey) || VOLCANO_CATALOG[1];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Triangle className="w-5 h-5 text-amber-500" />
            <span>
              {activeMode === 'morphology'
                ? language === 'hi'
                  ? 'ज्वालामुखी के 4 मुख्य प्रकार'
                  : language === 'or'
                  ? 'ଜ୍ୱାଳାମୁଖୀର ୪ଟି ମୁଖ୍ୟ ପ୍ରକାରଭେଦ'
                  : 'The Four Main Volcano Morphologies'
                : activeMode === 'viscosity'
                ? language === 'hi'
                  ? 'लावा चिपचिपापन (Viscosity) एवं सिलिका प्रयोगशाला'
                  : language === 'or'
                  ? 'ଲାଭା ସିଲିକା ଏବଂ ବହଳିଆପଣ ପରୀକ୍ଷାଗାର'
                  : 'Lava Viscosity & Silica Rheology Lab'
                : language === 'hi'
                ? 'ज्वालामुखीय राख, एरोसोल एवं तांबोरा 1815 जलवायु प्रभाव'
                : language === 'or'
                ? 'ପାଉଁଶ ଏରୋସଲ୍ ଏବଂ ତାମ୍ବୋରା ୧୮୧୫ ଜଳବାୟୁ ପ୍ରଭାବ'
                : 'Volcanic Ash, Stratospheric Aerosols & Tambora 1815'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {activeMode === 'morphology'
              ? language === 'hi'
                ? 'शील्ड, मिश्रित (स्ट्रैटो), सिंडर कोन और लावा गुंबद के आकार, लावा के गाढ़ेपन और विस्फोट की तुलना'
                : language === 'or'
                ? 'ଶିଲ୍ଡ, ଷ୍ଟ୍ରାଟୋ, ସିଣ୍ଡର କୋନ୍ ଓ ଲାଭା ଡୋମ୍ର ଆକାର, ବିସ୍ଫୋରଣ ଓ ବୈଶିଷ୍ଟ୍ୟ'
                : 'Interactive morphologic comparison: Shield, Composite/Stratovolcano, Cinder Cone & Lava Dome'
              : activeMode === 'viscosity'
              ? language === 'hi'
                ? 'बेसाल्टिक बनाम रायोलिटिक लावा: सिलिका प्रतिशत (SiO₂), तापमान (1200°C–750°C) और विस्फोटक गैस दबाव'
                : language === 'or'
                ? 'ବାସାଲ୍ଟିକ୍ ବନାମ ରାଇଓଲାଇଟ୍ ଲାଭା: ସିଲିକା ହାର, ତାପମାତ୍ରା ଓ ବିସ୍ଫୋରଣ ଚାପ'
                : 'Basaltic vs Rhyolitic magma: Silica % (SiO₂), temperature (1200°C–750°C), and gas bubble entrapment'
              : language === 'hi'
              ? 'स्ट्रैटोस्फीयर में SO₂ एरोसोल, सौर प्रकाश अवरोध और 1815 तांबोरा विस्फोट: "बिना ग्रीष्म का वर्ष (1816)"'
              : language === 'or'
              ? 'ଷ୍ଟ୍ରାଟୋସ୍ଫିୟର୍ରେ SO₂ ଏରୋସଲ୍ ଏବଂ ୧୮୧୫ ତାମ୍ବୋରା ବିସ୍ଫୋରଣ: "ଗ୍ରୀଷ୍ମ ବିହୀନ ବର୍ଷ (୧୮୧୬)"'
              : 'Stratospheric SO₂ aerosol veils, solar dimming & Mount Tambora 1815: "The Year Without a Summer (1816)"'}
          </p>
        </div>

        {/* Global Explorer Mode Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-800 rounded-lg overflow-x-auto scrollbar-none">
          <button
            onClick={() => {
              setActiveMode('morphology');
              soundEngine.playCrack();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap ${
              activeMode === 'morphology' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            4 Morphologies
          </button>
          <button
            onClick={() => {
              setActiveMode('viscosity');
              soundEngine.playBubblePop();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap flex items-center gap-1 ${
              activeMode === 'viscosity' ? 'bg-red-500 text-white font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Viscosity Lab</span>
          </button>
          <button
            onClick={() => {
              setActiveMode('ash');
              soundEngine.playEruptionBoom();
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all whitespace-nowrap flex items-center gap-1 ${
              activeMode === 'ash' ? 'bg-indigo-500 text-white font-bold' : 'text-neutral-300 hover:text-white'
            }`}
          >
            <CloudFog className="w-3.5 h-3.5" />
            <span>Ash &amp; Tambora 1815</span>
          </button>
        </div>
      </div>

      {/* MODE 1: MORPHOLOGY EXPLORER */}
      {activeMode === 'morphology' && (
        <div>
          {/* Sub-bar for 4 Type Selectors */}
          <div className="px-6 py-2.5 bg-neutral-950 border-b border-neutral-800/80 flex items-center justify-between gap-3 overflow-x-auto">
            <span className="text-xs text-neutral-400 font-medium">Select Volcano Architecture:</span>
            <div className="flex items-center gap-1.5">
              {VOLCANO_CATALOG.map((v) => (
                <button
                  key={v.key}
                  onClick={() => {
                    setSelectedKey(v.key);
                    if (v.key === 'shield') soundEngine.playBubblePop();
                    else if (v.key === 'stratovolcano') soundEngine.playEruptionBoom();
                    else soundEngine.playCrack();
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    selectedKey === v.key
                      ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                      : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                  }`}
                >
                  {v.name[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid: Visual Cross-Section Stage + Scientific Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Stage: Morphological Shape Cross Section SVG */}
        <div className="lg:col-span-8 bg-neutral-950 p-6 flex flex-col items-center justify-center relative min-h-[420px]">
          <svg viewBox="0 0 600 340" className="w-full h-auto drop-shadow-lg">
            <defs>
              <linearGradient id="skyVolc" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#09090b" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect x="0" y="0" width="600" height="240" fill="url(#skyVolc)" />
            {/* Ground Baseline */}
            <rect x="0" y="240" width="600" height="100" fill="#1c1917" stroke="#292524" strokeWidth="2" />

            {/* 1. SHIELD VOLCANO SHAPE (Very broad, flat slope: 5 deg) */}
            {selectedKey === 'shield' && (
              <g>
                {/* Broad warrior shield outline */}
                <path
                  d="M 20 240 Q 200 210 280 180 L 320 180 Q 400 210 580 240 Z"
                  fill="#78350f"
                  stroke="#ea580c"
                  strokeWidth="3"
                />
                {/* Thin basaltic lava flow sheets */}
                {isLavaFlowing && (
                  <g stroke="#f97316" strokeWidth="4" fill="none">
                    <path d="M 285 180 Q 200 210 50 240" />
                    <path d="M 315 180 Q 400 215 550 240" />
                    <circle cx="300" cy="178" r="8" fill="#fef08a" className="animate-pulse" />
                  </g>
                )}
                <ellipse cx="300" cy="180" rx="20" ry="5" fill="#451a03" />

                <text x="300" y="215" fill="#fed7aa" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  BROAD SHIELD: FLUID BASALTIC APRON
                </text>
                <text x="300" y="232" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Width: 100+ km · Slope: 2°–8° · Height: 4–9 km
                </text>
              </g>
            )}

            {/* 2. COMPOSITE / STRATOVOLCANO SHAPE (Steep symmetrical 33 deg cone) */}
            {selectedKey === 'stratovolcano' && (
              <g>
                {/* Alternating strata layers (Lava + Ash/Tephra) */}
                {/* Layer 1: Base Lava */}
                <polygon points="120,240 300,70 480,240" fill="#44403c" stroke="#57534e" strokeWidth="2" />
                {/* Layer 2: Pyroclastic ash band */}
                <polygon points="150,240 300,90 450,240" fill="#71717a" opacity="0.8" />
                {/* Layer 3: Upper hardened lava */}
                <polygon points="190,240 300,110 410,240" fill="#991b1b" opacity="0.8" />

                {/* Summit Crater */}
                <ellipse cx="300" cy="70" rx="16" ry="6" fill="#18181b" />

                {/* Explosive Ash Column & Plume */}
                {isLavaFlowing && (
                  <g>
                    <path d="M 292 70 L 270 20 L 330 20 L 308 70 Z" fill="#ea580c" />
                    <circle cx="300" cy="20" r="24" fill="rgba(63, 63, 70, 0.9)" />
                    <circle cx="280" cy="15" r="16" fill="rgba(82, 82, 91, 0.8)" />
                    <circle cx="320" cy="15" r="18" fill="rgba(82, 82, 91, 0.8)" />
                    <ellipse cx="300" cy="70" rx="12" ry="4" fill="#fef08a" />
                  </g>
                )}

                <text x="300" y="160" fill="#fecaca" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  ALTERNATING STRATA (Lava + Ash)
                </text>
                <text x="300" y="180" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Steep conical flanks: 30°–35° · Highly Explosive
                </text>
              </g>
            )}

            {/* 3. CINDER CONE SHAPE (Small steep scoria mound with bowl crater) */}
            {selectedKey === 'cinder' && (
              <g>
                {/* Steep scoria cinder pile */}
                <polygon points="210,240 300,130 390,240" fill="#52525b" stroke="#71717a" strokeWidth="2" />
                {/* Deep bowl crater at top */}
                <path d="M 270 145 Q 300 170 330 145 Z" fill="#27272a" stroke="#3f3f46" />

                {/* Fountain of exploding cinder blobs */}
                {isLavaFlowing && (
                  <g fill="#f59e0b">
                    <circle cx="300" cy="120" r="4" className="animate-ping" />
                    <circle cx="285" cy="110" r="3" />
                    <circle cx="315" cy="105" r="3.5" />
                    <circle cx="295" cy="90" r="2.5" />
                    <circle cx="305" cy="95" r="3" />
                  </g>
                )}

                <text x="300" y="210" fill="#fef08a" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  SCORIA & CINDER ACCUMULATION
                </text>
                <text x="300" y="226" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Height: 100–400m · Crater bowl width: ~200m
                </text>
              </g>
            )}

            {/* 4. LAVA DOME SHAPE (Bulbous pasty viscous plug) */}
            {selectedKey === 'dome' && (
              <g>
                {/* Previous caldera floor / crater rim */}
                <polygon points="140,240 220,180 250,240" fill="#3f3f46" />
                <polygon points="350,240 380,180 460,240" fill="#3f3f46" />

                {/* Bulbous viscous dome growing inside crater */}
                <path
                  d="M 230 240 Q 230 130 300 120 Q 370 130 370 240 Z"
                  fill="#7e22ce"
                  stroke="#c084fc"
                  strokeWidth="3"
                />
                {/* Fissured cooling crust on dome */}
                <path d="M 270 170 Q 300 150 330 170" fill="none" stroke="#fef08a" strokeWidth="2" />
                <path d="M 290 200 Q 310 180 320 220" fill="none" stroke="#fef08a" strokeWidth="2" />

                <text x="300" y="195" fill="#f3e8ff" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  VISCOUS SILICIC PLUG (Rhyolite)
                </text>
                <text x="300" y="212" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                  Toothpaste-like extrusion · Plugs volcanic vent
                </text>
              </g>
            )}

            {/* Scale Marker & Active Label */}
            <rect x="20" y="20" width="220" height="34" rx="6" fill="#0f172a" stroke="#27272a" />
            <text x="30" y="42" fill="#fef08a" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">
              {activeVolcano.name.en}
            </text>
          </svg>
        </div>

        {/* Right Details Deck */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Morphology & Mechanics
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-neutral-400 font-semibold block mb-0.5">Appearance & Shape:</span>
              <p className="text-white leading-relaxed">{activeVolcano.shape[language]}</p>
            </div>

            <div>
              <span className="text-neutral-400 font-semibold block mb-0.5">Eruption Style:</span>
              <p className="text-amber-400 font-medium leading-relaxed">{activeVolcano.eruptionType[language]}</p>
            </div>

            <div>
              <span className="text-neutral-400 font-semibold block mb-0.5">How It Forms:</span>
              <p className="text-neutral-300 leading-relaxed">{activeVolcano.formation[language]}</p>
            </div>
          </div>

          {/* Geological Diagnostics Box */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Magma Viscosity:</span>
              <span className="font-mono text-cyan-400 font-semibold">{activeVolcano.viscosity}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">Slope Angle:</span>
              <span className="font-mono text-amber-400 font-semibold">{activeVolcano.slopeAngle}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-neutral-500">Famous Example:</span>
              <span className="font-semibold text-white text-right">{activeVolcano.example}</span>
            </div>
            <div className="flex justify-between items-start text-[11px]">
              <span className="text-neutral-500">Tectonic Setting:</span>
              <span className="text-emerald-400 text-right">{activeVolcano.location}</span>
            </div>
          </div>

          {/* Spotlight Highlight for Barren Island & Mount Fuji */}
          {selectedKey === 'stratovolcano' && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs space-y-2">
              <div className="font-bold text-red-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Spotlight: Barren Island, India</span>
                </span>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">
                  Erupted 2025–2026
                </span>
              </div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                {language === 'hi'
                  ? 'अंडमान सागर में स्थित भारत का एकमात्र सक्रिय ज्वालामुखी 30 जुलाई 2025 से 11 जनवरी 2026 तक सक्रिय रूप से फटा था। सितंबर 2025 में पास आए 4.2 तीव्रता के भूकंप ने इसके मैग्मा चैंबर को हिला दिया था, जिससे भारी राख व लावा निकला। वर्तमान (अक्टूबर 2026) में यह शांत रहकर केवल धुआं (फ्यूमरोल) छोड़ रहा है।'
                  : language === 'or'
                  ? 'ଆଣ୍ଡାମାନ ସାଗରରେ ଥିବା ଭାରତର ଏକମାତ୍ର ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ ୩୦ ଜୁଲାଇ ୨୦୨୫ ରୁ ୧୧ ଜାନୁଆରୀ ୨୦୨୬ ମଧ୍ୟରେ ବିସ୍ଫୋରକ ଭାବେ ଫାଟିଥିଲା। ସେପ୍ଟେମ୍ବର ୨୦୨୫ ରେ ୪.୨ ତୀବ୍ରତାର ଭୂମିକମ୍ପ ପରେ ପ୍ରବଳ ପାଉଁଶ ଓ ଲାଭା ବାହାରିଥିଲା। ବର୍ତ୍ତମାନ ଏହା ଶାନ୍ତ ଅଛି।'
                  : 'Barren Island actively erupted between July 30, 2025 and January 11, 2026 (confirmed by Smithsonian GVP). In September 2025, a nearby M4.2 earthquake perturbed the magma chamber, producing twin explosive pulses and lava flows before calming to fumarolic steaming in 2026.'}
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
      )}

      {/* MODE 2: LAVA VISCOSITY & SILICA LAB */}
      {activeMode === 'viscosity' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Dynamic Viscosity Flow Simulation */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 flex flex-col justify-between relative min-h-[440px]">
            <div className="relative w-full h-80 rounded-xl overflow-hidden border border-neutral-800 bg-[#0a0705]">
              <svg viewBox="0 0 500 300" className="w-full h-full">
                <defs>
                  <linearGradient id="volcSlopeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#27272a" />
                    <stop offset="100%" stopColor="#18181b" />
                  </linearGradient>
                </defs>

                {/* Volcanic Slope Incline */}
                <path d="M 0 60 L 220 180 L 500 240 L 500 300 L 0 300 Z" fill="url(#volcSlopeGrad)" />
                <line x1="0" y1="60" x2="220" y2="180" stroke="#3f3f46" strokeWidth="2" />
                <line x1="220" y1="180" x2="500" y2="240" stroke="#3f3f46" strokeWidth="2" />

                {/* Dynamic Lava Behavior based on Silica Content */}
                {silicaPercent < 55 ? (
                  // Basaltic: Fast, fluid sheet flow
                  <g>
                    <path
                      d="M 0 65 Q 110 125 220 183 Q 360 213 500 243 L 500 255 Q 360 225 220 195 Q 110 135 0 80 Z"
                      fill="#ea580c"
                      stroke="#facc15"
                      strokeWidth="2"
                    />
                    <path d="M 40 85 Q 150 145 280 200" stroke="#fef08a" strokeWidth="2" strokeDasharray="8,4" fill="none" />
                    <circle cx="120" cy="130" r="3" fill="#fef08a" />
                    <circle cx="260" cy="195" r="4" fill="#fef08a" />
                    <circle cx="420" cy="235" r="3" fill="#fef08a" />
                    <text x="320" y="160" fill="#facc15" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">
                      Fast Fluid Sheets (1,000°C–1,200°C)
                    </text>
                    <text x="320" y="176" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">
                      Low Silica (~48% SiO₂) · Gas Escapes Freely
                    </text>
                  </g>
                ) : silicaPercent < 68 ? (
                  // Intermediate Andesitic: Chunky blocky lava flow
                  <g>
                    <path
                      d="M 0 70 Q 110 135 200 195 L 320 225 L 320 250 L 190 220 L 0 95 Z"
                      fill="#dc2626"
                      stroke="#f97316"
                      strokeWidth="3"
                    />
                    <ellipse cx="260" cy="220" rx="20" ry="12" fill="#7f1d1d" stroke="#ef4444" />
                    <ellipse cx="290" cy="230" rx="16" ry="10" fill="#7f1d1d" stroke="#ef4444" />
                    <text x="300" y="140" fill="#ef4444" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">
                      Chunky Viscous Andesite Flow
                    </text>
                  </g>
                ) : (
                  // Rhyolitic: Bulbous, rigid plug sealing the vent with explosive gas bubbles trapped
                  <g>
                    {/* Massive sticky dome that refuses to flow */}
                    <ellipse cx="80" cy="95" rx="75" ry="55" fill="#7f1d1d" stroke="#ef4444" strokeWidth="4" />
                    <ellipse cx="80" cy="95" rx="50" ry="35" fill="#991b1b" />
                    {/* Trapped high-pressure gas bubbles */}
                    <circle cx="65" cy="80" r="10" fill="#f59e0b" opacity="0.8" />
                    <circle cx="95" cy="100" r="12" fill="#f59e0b" opacity="0.8" />
                    <circle cx="80" cy="115" r="8" fill="#f59e0b" opacity="0.8" />
                    {/* Cracks bursting from trapped gas pressure */}
                    <line x1="40" y1="80" x2="10" y2="70" stroke="#facc15" strokeWidth="2.5" />
                    <line x1="120" y1="75" x2="150" y2="60" stroke="#facc15" strokeWidth="2.5" />
                    <text x="180" y="80" fill="#ef4444" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">
                      Structural Rhyolite Plug (&gt;70% SiO₂)
                    </text>
                    <text x="180" y="98" fill="#fca5a5" fontSize="10" fontFamily="JetBrains Mono">
                      Ultra-High Viscosity (10⁷–10⁸ Pa·s)
                    </text>
                    <text x="180" y="114" fill="#facc15" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
                      ⚠️ Traps Dissolved Gases Until Cataclysmic Explosion!
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Silica % Interactive Slider */}
            <div className="mt-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Magma Silica Content (SiO₂):</span>
                </span>
                <span className="font-mono text-amber-400 font-bold text-sm">{silicaPercent}% SiO₂</span>
              </div>
              <input
                type="range"
                min={45}
                max={75}
                step={1}
                value={silicaPercent}
                onChange={(e) => {
                  setSilicaPercent(Number(e.target.value));
                  if (Number(e.target.value) % 5 === 0) soundEngine.playBubblePop();
                }}
                className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                <span>45% (Basalt · Fluid)</span>
                <span>57% (Andesite)</span>
                <span>65% (Dacite)</span>
                <span>75% (Rhyolite · Explosive Plug)</span>
              </div>
            </div>
          </div>

          {/* Right: Magma Rheology & Physics Breakdown */}
          <div className="lg:col-span-5 bg-neutral-900 p-6 flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-neutral-800 text-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="font-bold uppercase tracking-wider text-amber-400">Magma Classification</span>
                <span className="font-mono px-2 py-0.5 rounded bg-neutral-800 text-cyan-400 font-bold">
                  {magmaType.name}
                </span>
              </div>

              {/* Physical Parameters Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Temperature:</span>
                  <span className="text-amber-400 font-mono font-bold">{magmaTemp}°C</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Dynamic Viscosity:</span>
                  <span className="text-red-400 font-mono font-bold">~10^{viscosityExp} Pa·s</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Flow Dynamics:</span>
                  <span className="text-cyan-400 font-medium">{magmaType.speed}</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Eruption Style:</span>
                  <span className="text-rose-400 font-semibold">{magmaType.erupt}</span>
                </div>
              </div>

              {/* Silica Network Polymerization Science Card */}
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-amber-400" />
                  <span>Silica Polymerization: The Root of Viscosity</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {language === 'hi'
                    ? 'सिलिका (SiO₄⁴⁻) के टेट्राहेड्रोन आपस में मिलकर लंबे बहुलक (polymer networks) बनाते हैं। जब सिलिका 50% से कम होती है, तो लावा पतला व तरल होता है (बेसाल्ट 1000°C–1200°C)। लेकिन जब सिलिका 70% से अधिक (रायोलिटिक) हो जाती है, तो यह इतना गाढ़ा हो जाता है कि वेंट को एक कॉर्क की तरह बंद कर देता है, जिससे अंदर गैस का भारी दबाव बनता है और भयानक विस्फोट होता है!'
                    : language === 'or'
                    ? 'ସିଲିକା ହାର ବଢ଼ିଲେ ଲାଭା ଅଠାଳିଆ ହୋଇଯାଏ। ୭୦% ରୁ ଅଧିକ ସିଲିକା ଥିବା ରାଇଓଲାଇଟ୍ ଲାଭା ଜ୍ୱାଳାମୁଖୀ ମୁହଁକୁ ବନ୍ଦ କରିଦିଏ, ଯାହା ଭୟଙ୍କର ବିସ୍ଫୋରଣ ଘଟାଏ।'
                    : 'Silicon-oxygen tetrahedra (SiO₄⁴⁻) cross-link into complex three-dimensional polymers. In low-silica basaltic melt (45–52%), chains remain short and fluid (1,000°C–1,200°C). In high-silica rhyolite (&gt;70%), extensive cross-linking increases viscosity by a factor of 10,000,000, forming a rigid plug that locks in volatile gases until cataclysmic fragmentation!'}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (silicaPercent > 65) soundEngine.playEruptionBoom();
                else soundEngine.playBubblePop();
              }}
              className="w-full py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white rounded-lg font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4" />
              <span>Simulate Magma Eruption Shockwave</span>
            </button>
          </div>
        </div>
      )}

      {/* MODE 3: VOLCANIC ASH AEROSOLS & TAMBORA 1815 */}
      {activeMode === 'ash' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Atmospheric Aerosol & Solar Dimming Visualizer */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 flex flex-col justify-between relative min-h-[440px]">
            <div className="relative w-full h-80 rounded-xl overflow-hidden border border-neutral-800 bg-[#020617]">
              {/* Sun & Stratospheric Aerosol Veil Simulation */}
              <svg viewBox="0 0 500 300" className="w-full h-full">
                <defs>
                  {/* Stratospheric Aerosol Veil */}
                  <linearGradient id="aerosolVeil" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.2 + (ashMegatons / 150) * 0.6} />
                    <stop offset="50%" stopColor="#78716c" stopOpacity={0.3 + (ashMegatons / 150) * 0.5} />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Sun behind the sulfurous stratospheric aerosol haze */}
                <circle cx="250" cy="65" r="38" fill="#facc15" opacity={Math.max(0.2, 1 - solarDimmingPercent / 35)} />
                <circle cx="250" cy="65" r="48" fill="#fde047" opacity={Math.max(0.1, 0.4 - solarDimmingPercent / 70)} />

                {/* Stratosphere (15–35 km) Aerosol Layer */}
                <rect x="0" y="20" width="500" height="90" fill="url(#aerosolVeil)" />
                <line x1="0" y1="110" x2="500" y2="110" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4,4" opacity="0.6" />
                <text x="15" y="40" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono">
                  Stratospheric SO₂ Aerosol Veil (20–30 km Altitude)
                </text>
                <text x="15" y="55" fill="#fde047" fontSize="9" fontFamily="JetBrains Mono">
                  Solar Reflection: -{solarDimmingPercent}% Sunlight Transmission
                </text>

                {/* Troposphere & Volcanic Ash Column */}
                <path d="M 230 250 L 245 110 L 255 110 L 270 250 Z" fill="#52525b" />
                {/* Ash Plume Canopy spreading laterally across the stratosphere */}
                <ellipse cx="250" cy="110" rx="220" ry="30" fill="#71717a" opacity="0.8" />
                <ellipse cx="250" cy="105" rx="160" ry="20" fill="#a1a1aa" opacity="0.7" />

                {/* Ground Landscape (Frosted/Chilled Crops under Dimmed Skies) */}
                <path d="M 0 250 Q 150 240 250 250 Q 350 260 500 248 L 500 300 L 0 300 Z" fill="#1e293b" />
                <text x="250" y="280" fill="#93c5fd" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                  Global Temperature Anomaly: {tempDropC}°C (Freezing Summer)
                </text>
              </svg>
            </div>

            {/* Ash & SO₂ Injection Slider */}
            <div className="mt-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                  <CloudFog className="w-4 h-4 text-indigo-400" />
                  <span>Volcanic Ash &amp; SO₂ Injected:</span>
                </span>
                <span className="font-mono text-indigo-400 font-bold text-sm">{ashMegatons} Megatons</span>
              </div>
              <input
                type="range"
                min={10}
                max={150}
                step={5}
                value={ashMegatons}
                onChange={(e) => {
                  setAshMegatons(Number(e.target.value));
                  if (Number(e.target.value) % 25 === 0) soundEngine.playEruptionBoom();
                }}
                className="w-full accent-indigo-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                <span>10 Mt (Pinatubo 1991)</span>
                <span>100 Mt (Mount Tambora 1815)</span>
                <span>150 Mt (Supervolcanic Caldera)</span>
              </div>
            </div>
          </div>

          {/* Right: Tambora 1815 Dossier & Atmospheric Chemistry */}
          <div className="lg:col-span-5 bg-neutral-900 p-6 flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-neutral-800 text-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="font-bold uppercase tracking-wider text-indigo-400">Historical Case Dossier</span>
                <span className="font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                  Mount Tambora 1815
                </span>
              </div>

              {/* Climate Impact Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Global Temp Drop:</span>
                  <span className="text-cyan-400 font-mono font-bold">{tempDropC}°C</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Solar Dimming:</span>
                  <span className="text-amber-400 font-mono font-bold">-{solarDimmingPercent}%</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Ash Nature:</span>
                  <span className="text-white font-medium">Jagged Glass Shards</span>
                </div>
                <div className="p-2.5 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Historical Year:</span>
                  <span className="text-rose-400 font-bold">1816 "Year Without a Summer"</span>
                </div>
              </div>

              {/* Tambora 1815 Historical Narrative Card */}
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>The Year Without a Summer (1816)</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {language === 'hi'
                    ? '1815 में इंडोनेशिया के माउंट तांबोरा के महाविस्फोट ने 100+ मेगाटन सल्फर डाइऑक्साइड (SO₂) और तीखी कांच जैसी राख समताप मंडल (stratosphere) में फेंक दी। SO₂ ने सल्फेट एरोसोल का निर्माण किया जिसने सूर्य के प्रकाश को अंतरिक्ष में वापस परावर्तित कर दिया। 1816 में दुनिया भर में ग्रीष्म ऋतु आई ही नहीं—जुलाई में बर्फबारी हुई, फसलें नष्ट हो गईं और यूरोप, अमेरिका और एशिया में व्यापक अकाल पड़ा।'
                    : language === 'or'
                    ? '୧୮୧୫ ରେ ଇଣ୍ଡୋନେସିଆର ମାଉଣ୍ଟ ତାମ୍ବୋରା ବିସ୍ଫୋରଣରୁ ବାହାରିଥିବା ସଲଫର୍ ଷ୍ଟ୍ରାଟୋସ୍ଫିୟର୍ରେ ସୂର୍ଯ୍ୟ କିରଣ ଅଟକାଇ ଦେଇଥିଲା। ଫଳରେ ୧୮୧୬ ରେ "ବିନା ଗ୍ରୀଷ୍ମର ବର୍ଷ" ଆସିଥିଲା ଓ ବିଶ୍ୱବ୍ୟାପୀ ଫସଲ ନଷ୍ଟ ହୋଇଥିଲା।'
                    : 'The April 1815 eruption of Mount Tambora ejected over 100 Megatons of SO₂ and micro-pulverized volcanic glass into the stratosphere. SO₂ reacted with atmospheric moisture to produce reflective sulfuric acid aerosols (H₂SO₄). In 1816, the world experienced the "Year Without a Summer"—global temperatures dropped by nearly 1°C, killing frosts struck North America and Europe in July, causing widespread famine and agricultural collapse.'}
                </p>
              </div>

              {/* Micro-Glass Tephra Hazard Card */}
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 space-y-1.5">
                <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Volcanic Ash vs Wood Ash: Micro-Glass Shards</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  Volcanic ash is not soft carbon ash. It consists of jagged, abrasive shards of shattered volcanic glass and minerals with a hardness of 5–7 on the Mohs scale. When ingested into jet turbine engines at 1,400°C, the ash melts into molten glass, coating turbine blades and causing complete engine shutdown!
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setAshMegatons(100);
                soundEngine.playEruptionBoom();
              }}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Sun className="w-4 h-4 text-amber-300" />
              <span>Reset to Tambora 1815 Baseline (100 Mt)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
