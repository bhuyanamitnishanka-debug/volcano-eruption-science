/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, Droplets, MapPin, Sparkles, Waves, Globe, Info } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface CoastalMarineLandformsProps {
  language: Language;
}

type LandformKey = 'shelf' | 'estuary' | 'bay' | 'delta-fan' | 'atoll';

interface LandformItem {
  key: LandformKey;
  name: { en: string; hi: string; or: string };
  shortDef: { en: string; hi: string; or: string };
  mechanism: { en: string; hi: string; or: string };
  significance: { en: string; hi: string; or: string };
  example: string;
  depthOrScale: string;
}

const LANDFORMS_DATA: LandformItem[] = [
  {
    key: 'shelf',
    name: {
      en: 'Continental Shelf & Slope',
      hi: 'महाद्वीपीय मग्नतट एवं ढाल',
      or: 'ମହାଦେଶୀୟ ସେଲ୍ଫ ଓ ଢାଲ',
    },
    shortDef: {
      en: 'The shallow, gently sloping submerged edge of a continent extending into the ocean before dropping steeply into the abyss.',
      hi: 'महाद्वीप का उथला और डूबा हुआ किनारा जो गहरे समुद्र में जाने से पहले धीरे-धीरे ढलान बनाता है।',
      or: 'ମହାଦେଶର ସମୁଦ୍ର ଭିତରକୁ ଲମ୍ବିଥିବା କମ ଗଭୀର ପରସ୍ତ, ଯାହା ପରେ ଗଭୀର ସମୁଦ୍ରକୁ ତୀବ୍ର ଢାଲ ହୋଇ ଖସିଥାଏ।',
    },
    mechanism: {
      en: 'Formed by sedimentary accumulation over continental crust thinned during continental rifting. Water depth is typically less than 150–200 meters.',
      hi: 'महाद्वीपों के टूटने और नदियों द्वारा लाई गई मिट्टी के जमने से बनता है। इसकी गहराई आमतौर पर 200 मीटर से कम होती है।',
      or: 'ନଦୀର ପଟୁମାଟି ଜମା ହୋଇ ସୃଷ୍ଟି ହୁଏ। ଏହାର ଗଭୀରତା ପ୍ରାୟ ୨୦୦ ମିଟରରୁ କମ ଥାଏ।',
    },
    significance: {
      en: 'Houses 90% of global commercial fisheries, extensive coral reef ecosystems, and vast offshore petroleum and gas reserves.',
      hi: 'दुनिया की 90% व्यावसायिक मछलियां और विशाल तेल व प्राकृतिक गैस भंडार यहीं पाए जाते हैं।',
      or: 'ପୃଥିବୀର ୯୦% ମାଛ ଏବଂ ପ୍ରଚୁର ପେଟ୍ରୋଲିୟମ୍ ଖଣି ଏହିଠାରେ ମିଳିଥାଏ।',
    },
    example: 'Siberian Shelf (1,500 km wide) & Indian Eastern Continental Shelf',
    depthOrScale: 'Depth: 0 – 200m · Slope: ~0.1°',
  },
  {
    key: 'estuary',
    name: {
      en: 'Estuary (Brackish Nursery)',
      hi: 'ज्वारनदमुख (एश्चुअरी)',
      or: 'ଜୁଆରିଆ ମୁହାଣ (Estuary)',
    },
    shortDef: {
      en: 'A partially enclosed coastal body of water where river freshwater mixes with tidal ocean saltwater.',
      hi: 'तटीय जल निकाय जहां नदियों का मीठा पानी समुद्र के खारे पानी से मिलता है (नमकीन-मीठा मिश्रण)।',
      or: 'ନଦୀର ମିଠା ପାଣି ଏବଂ ସମୁଦ୍ରର ଲୁଣିଆ ପାଣି ମିଶୁଥିବା ଉପକୂଳବର୍ତ୍ତୀ ମୁହାଣ।',
    },
    mechanism: {
      en: 'Tidal forces and river currents continuously mix nutrients, trapping organic sediments and creating productive brackish ecosystems.',
      hi: 'ज्वार-भाटा और नदी की धाराएं मिलकर पोषक तत्वों को फंसाती हैं, जिससे बेहद उपजाऊ दलदल बनते हैं।',
      or: 'ଜୁଆର ଓ ନଦୀର ସ୍ରୋତ ମିଶି ପଟୁମାଟି ଜମା କରି ଏକ ଉର୍ବର ଜଳବାୟୁ ସୃଷ୍ଟି କରନ୍ତି।',
    },
    significance: {
      en: 'Functions as nature’s water filter, buffers coastlines against storm surges, and serves as critical nurseries for juvenile fish, crabs, and oysters.',
      hi: 'प्राकृतिक जल शोधक का काम करती है, तूफानों से तटों की रक्षा करती है और मछलियों के बच्चों की नर्सरी है।',
      or: 'ପ୍ରାକୃତିକ ପାଣି ଫିଲ୍ଟର୍ ଭାବେ କାମ କରେ ଓ ଛୋଟ ମାଛ, କଙ୍କଡ଼ାଙ୍କ ପାଇଁ ସୁରକ୍ଷିତ ବାସସ୍ଥାନ।',
    },
    example: 'Hooghly River Estuary, Narmada Estuary & Chesapeake Bay',
    depthOrScale: 'Salinity: 0.5 – 30 PSU (Brackish)',
  },
  {
    key: 'bay',
    name: {
      en: 'Bay & Gulf (Protected Waters)',
      hi: 'खाड़ी (Bay)',
      or: 'ଉପସାଗର (Bay)',
    },
    shortDef: {
      en: 'A broad, recessed coastal body of water partially enclosed by land with a wide opening to the open sea.',
      hi: 'जमीन से तीन तरफ से घिरा हुआ पानी का एक बड़ा हिस्सा जिसका मुंह समुद्र की ओर खुला होता है।',
      or: 'ତିନି ପଟେ ସ୍ଥଳଭାଗ ଦ୍ୱାରା ଘେରା ହୋଇଥିବା ପ୍ରଶସ୍ତ ସମୁଦ୍ର ମୁହାଣ।',
    },
    mechanism: {
      en: 'Created by differential coastal erosion (soft rocks erode faster than hard headlands) or continental rifting and tectonic subsidence.',
      hi: 'समुद्री लहरों द्वारा नरम चट्टानों के कटाव या टेक्टोनिक प्लेटों के खिसकने से बनता है।',
      or: 'ନରମ ପଥର କ୍ଷୟ ହୋଇ କିମ୍ବା ଟେକ୍ଟୋନିକ୍ ଭୂ-ନିମଜ୍ଜନ ଯୋଗୁଁ ତିଆରି ହୁଏ।',
    },
    significance: {
      en: 'Provides sheltered deep-water harbors protected from open ocean swell, fostering maritime trade, fisheries, and naval bases.',
      hi: 'तूफानों से सुरक्षित बंदरगाह प्रदान करती है, जहां बड़े जहाजों का आवागमन और व्यापार होता है।',
      or: 'ଝଡ଼-ତୋଫାନରୁ ରକ୍ଷା ପାଉଥିବା ପ୍ରାକୃତିକ ବନ୍ଦର ଯାହା ବାଣିଜ୍ୟ ପାଇଁ ଅତ୍ୟନ୍ତ ଉପଯୋଗୀ।',
    },
    example: 'Bay of Bengal (World’s largest bay) & Hudson Bay',
    depthOrScale: 'Bay of Bengal Area: 2.6 million km²',
  },
  {
    key: 'delta-fan',
    name: {
      en: 'Surface Deltas & Submarine Sedimentary Fans',
      hi: 'डेल्टा एवं अंतःसमुद्री तलछटी पंखा (Submarine Fan)',
      or: 'ତ୍ରିକୋଣଭୂମି (Delta) ଓ ସମୁଦ୍ର ଗର୍ଭର ଫ୍ୟାନ୍ (Submarine Fan)',
    },
    shortDef: {
      en: 'Surface Deltas form at river mouths; Submarine Fans are their deep-sea counterparts—massive sedimentary fans on the abyssal floor.',
      hi: 'नदियां मुहाने पर गाद जमा करके डेल्टा बनाती हैं; समुद्र के भीतर यही मिट्टी गहरी खाइयों में विशाल पंखे (Submarine Fan) बनाती है।',
      or: 'ନଦୀ ମୁହାଣରେ ତ୍ରିକୋଣଭୂମି ଗଠନ କରେ; ସମୁଦ୍ର ଭିତରେ ଏହି ପଟୁମାଟି ଖସି ଅଗାଧ ସମୁଦ୍ରରେ ବିଶାଳ ଫ୍ୟାନ୍ ସୃଷ୍ଟି କରେ।',
    },
    mechanism: {
      en: 'A river slows as it hits the ocean, dropping sand and silt to form a subaerial delta. Turbidity currents carry the remaining sediment through submarine canyons to deposit deep-sea fans.',
      hi: 'नदी की गति धीमी होने पर रेत और मिट्टी जमा होकर त्रिकोणीय डेल्टा बनाती है। बाकी गाद पानी के अंदर गहरी खाइयों से बहकर समुद्र तल पर फैल जाती है।',
      or: 'ନଦୀର ଗତି ମନ୍ଥର ହେଲେ ତ୍ରିକୋଣଭୂମି ସୃଷ୍ଟି ହୁଏ। ବାକି ପଟୁମାଟି କେନିୟନ୍ ଦେଇ ସମୁଦ୍ର ତଳକୁ ଖସିଯାଏ।',
    },
    significance: {
      en: 'The Sundarbans Delta is Earth’s largest mangrove forest; the Bengal Submarine Fan is the largest sediment body on Earth, stretching 3,000 km!',
      hi: 'सुंदरवन दुनिया का सबसे बड़ा डेल्टा है; और बंगाल का सबमरीन फैन पृथ्वी का सबसे विशाल तलछटी पंखा है जो 3,000 किमी लंबा है!',
      or: 'ସୁନ୍ଦରବନ ପୃଥିବୀର ସବୁଠାରୁ ବଡ଼ ଡେଲଟା ଏବଂ ବଙ୍ଗୋପସାଗର ସବମେରିନ୍ ଫ୍ୟାନ୍ ପୃଥିବୀର ସବୁଠାରୁ ବିଶାଳ ପଟୁମାଟି ସଂରଚନା (୩,୦୦୦ କିମି)।',
    },
    example: 'Sundarbans Ganges-Brahmaputra Delta & The Bengal Submarine Fan',
    depthOrScale: 'Bengal Fan Length: 3,000 km · Thickness: Up to 16 km',
  },
  {
    key: 'atoll',
    name: {
      en: 'Coral Reefs & Ring Atolls',
      hi: 'प्रवाल भित्तियां एवं अंगूठीनुमा एटोल',
      or: 'ପ୍ରବାଳ ଦ୍ୱୀପ ଓ ଏଟୋଲ୍ (Atoll)',
    },
    shortDef: {
      en: 'Ring-shaped coral reef surrounding a central lagoon, formed when an extinct volcanic island completely sinks underwater.',
      hi: 'एक केंद्रीय लैगून को घेरने वाली अंगूठी के आकार की प्रवाल भित्ति, जो ज्वालामुखी के डूबने पर बनती है।',
      or: 'ମଝିରେ ସମୁଦ୍ର ହ୍ରଦ (Lagoon) କୁ ଘେରି ରହିଥିବା ମୁଦି ଆକାରର ପ୍ରବାଳ ଦ୍ୱୀପ।',
    },
    mechanism: {
      en: 'Coral polyps secrete calcium carbonate ($CaCO_3$) skeletons. As the underlying volcanic peak subsides, corals grow upward to keep pace with sunlight.',
      hi: 'कोरल जीव चूनेदार कंकाल बनाते हैं। जैसे-जैसे ज्वालामुखी नीचे धंसता है, कोरल ऊपर की ओर बढ़ते रहते हैं।',
      or: 'ପ୍ରବାଳ କୀଟମାନେ କ୍ୟାଲସିୟମ୍ କାର୍ବୋନେଟ୍ର କଙ୍କାଳ ତିଆରି କରନ୍ତି। ଜ୍ୱାଳାମୁଖୀ ବୁଡ଼ିଲେ ମଧ୍ୟ ସେମାନେ ଉପରକୁ ବଢ଼ି ରହନ୍ତି।',
    },
    significance: {
      en: 'Protects fragile tropical lagoons and supports the most biodiverse marine ecosystems on Earth (the "rainforests of the ocean").',
      hi: 'समुद्र के वर्षावन कहलाने वाले ये एटोल जैव विविधता के सबसे समृद्ध केंद्र हैं।',
      or: 'ଏହା ସମୁଦ୍ରର ସବୁଠାରୁ ଜୈବ-ବିବିଧତାପୂର୍ଣ୍ଣ ଅଞ୍ଚଳ (ସମୁଦ୍ରର ବର୍ଷାବଣ)।',
    },
    example: 'Lakshadweep (India), Maldives & Great Barrier Reef',
    depthOrScale: 'Lagoon Depth: 10 – 60m · Coral Wall: 1,000+ m',
  },
];

export const CoastalMarineLandforms: React.FC<CoastalMarineLandformsProps> = ({ language }) => {
  const [selectedKey, setSelectedKey] = useState<LandformKey>('delta-fan');

  const activeLandform = LANDFORMS_DATA.find((l) => l.key === selectedKey) || LANDFORMS_DATA[3];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            <span>
              {language === 'hi'
                ? 'तटीय एवं समुद्री भू-आकृतियां (महाद्वीपीय शेल्फ से सबमरीन फैन तक)'
                : language === 'or'
                ? 'ଉପକୂଳ ଓ ସାମୁଦ୍ରିକ ଭୂ-ରୂପ (ସେଲ୍ଫ, ଡେଲଟା ଓ ସବମେରିନ୍ ଫ୍ୟାନ୍)'
                : 'Coastal & Marine Landforms: Shelf to Abyssal Fan'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'महाद्वीपीय शेल्फ, एश्चुअरी, खाड़ी, सुंदरवन डेल्टा, बंगाल सबमरीन फैन और कोरल एटोल का भूगर्भीय विश्लेषण'
              : language === 'or'
              ? 'ମହାଦେଶୀୟ ସେଲ୍ଫ, ଜୁଆରିଆ ମୁହାଣ, ବଙ୍ଗୋପସାଗର, ସୁନ୍ଦରବନ ତ୍ରିକୋଣଭୂମି ଓ ବେଙ୍ଗଲ ଫ୍ୟାନ୍'
              : 'Interactive profile: Continental shelf, estuaries, bays, the Sundarbans Delta & the Bengal Submarine Fan'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 p-1 bg-neutral-800 rounded-lg overflow-x-auto">
          {LANDFORMS_DATA.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setSelectedKey(item.key);
                soundEngine.playCrack();
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                selectedKey === item.key
                  ? 'bg-blue-500 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.name[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Cross-Section Graphic (Left) + Scientific Detail Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Dynamic SVG Profile from Coast to Abyssal Plain */}
        <div className="lg:col-span-8 bg-neutral-950 p-6 flex flex-col items-center justify-center relative min-h-[420px]">
          <svg viewBox="0 0 620 340" className="w-full h-auto drop-shadow-lg">
            <defs>
              <linearGradient id="coastSeaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="35%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#082f49" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect x="0" y="0" width="620" height="90" fill="#0f172a" />

            {/* Sea Level Line */}
            <rect x="0" y="90" width="620" height="250" fill="url(#coastSeaGrad)" />
            <line x1="0" y1="90" x2="620" y2="90" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6,4" />
            <text x="15" y="82" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono">
              SEA LEVEL (0 m)
            </text>

            {/* 1. CONTINENTAL CRUST & COAST (Left side: Continent with River & Estuary) */}
            {/* Mountain / River Headwaters */}
            <polygon points="0,90 20,40 60,90" fill="#44403c" stroke="#57534e" />
            <path d="M 60 90 L 140 90 L 140 340 L 0 340 Z" fill="#292524" stroke="#44403c" />

            {/* Estuary / River mouth mixing freshwater into sea */}
            <path d="M 40 70 Q 90 85 130 90" fill="none" stroke="#60a5fa" strokeWidth="5" />
            <text x="70" y="65" fill="#93c5fd" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
              River Flow →
            </text>

            {/* 2. CONTINENTAL SHELF (Gently sloping from 0 to 200m depth, x=140 to x=280) */}
            <path
              d="M 140 90 L 280 120 L 280 340 L 140 340 Z"
              fill={selectedKey === 'shelf' ? '#d97706' : '#3f3f46'}
              stroke="#52525b"
              strokeWidth="2"
            />
            <text x="200" y="112" fill="#fed7aa" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">
              Shelf (0–200m)
            </text>

            {/* 3. CONTINENTAL SLOPE (Steep drop from 200m to 3,000m, x=280 to x=400) */}
            <path
              d="M 280 120 L 400 280 L 400 340 L 280 340 Z"
              fill="#27272a"
              stroke="#3f3f46"
              strokeWidth="2"
            />
            {/* Submarine Canyon cut into slope */}
            <line x1="280" y1="120" x2="400" y2="280" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,4" />
            <text x="320" y="190" fill="#fef08a" fontSize="9" fontFamily="JetBrains Mono" transform="rotate(45, 320, 190)">
              Submarine Canyon ▼
            </text>

            {/* 4. SUBMARINE FAN & ABYSSAL PLAIN (Deep sea floor, x=400 to x=620) */}
            <path
              d="M 400 280 L 620 295 L 620 340 L 400 340 Z"
              fill={selectedKey === 'delta-fan' ? '#b45309' : '#1c1917'}
              stroke="#44403c"
              strokeWidth="2"
            />

            {/* Submarine Fan Sedimentary Lobe (Bengal Fan sediment layer) */}
            <path
              d="M 390 270 Q 480 275 600 290 L 600 320 L 390 320 Z"
              fill="#92400e"
              opacity="0.85"
            />
            <text x="490" y="275" fill="#fde68a" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
              SUBMARINE SEDIMENTARY FAN (Bengal Fan)
            </text>
            <text x="490" y="290" fill="#cbd5e1" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
              Mud & Sand Turbidites deposited 3,000 km into the Abyss
            </text>

            {/* Coastal Delta (Sundarbans Mangrove Green on top of shelf edge) */}
            <ellipse cx="140" cy="90" rx="25" ry="6" fill="#15803d" />
            <text x="140" y="78" fill="#86efac" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
              Sundarbans Delta
            </text>

            {/* Depth Markers */}
            <g fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">
              <text x="280" y="135">200m Shelf Edge</text>
              <text x="410" y="315">3,000m Abyssal Plain</text>
            </g>
          </svg>
        </div>

        {/* Right: Scientific Insight & Local Spotlights */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Marine Geology Specification
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-neutral-400 font-semibold block mb-0.5">Definition:</span>
              <p className="text-white leading-relaxed">{activeLandform.shortDef[language]}</p>
            </div>

            <div>
              <span className="text-neutral-400 font-semibold block mb-0.5">Geological Formation:</span>
              <p className="text-neutral-300 leading-relaxed">{activeLandform.mechanism[language]}</p>
            </div>

            <div>
              <span className="text-neutral-400 font-semibold block mb-0.5">Ecological & Economic Role:</span>
              <p className="text-emerald-400 leading-relaxed">{activeLandform.significance[language]}</p>
            </div>
          </div>

          {/* Scale & Local Example Card */}
          <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 text-xs">
            <div className="flex justify-between items-center text-neutral-400">
              <span>Scale / Dimension:</span>
              <span className="font-mono text-cyan-400 font-bold">{activeLandform.depthOrScale}</span>
            </div>
            <div className="border-t border-neutral-800 pt-1.5">
              <span className="text-neutral-500 block text-[10px]">Iconic Local Example:</span>
              <span className="font-semibold text-amber-400">{activeLandform.example}</span>
            </div>
          </div>

          {/* Spotlight on Sundarbans & Bengal Fan */}
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs space-y-1">
            <div className="font-bold text-blue-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bay of Bengal Marvel: The Bengal Fan</span>
            </div>
            <p className="text-neutral-300 text-[11px] leading-relaxed">
              Every year, the Ganges and Brahmaputra rivers transport over 1 billion tons of Himalayan mountain silt. While part forms the Sundarbans Delta, the rest plunges through submarine canyons into the deep ocean to feed the <strong>Bengal Submarine Fan</strong>—the largest sediment deposit on Earth, spanning from Bangladesh to past Sri Lanka!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
