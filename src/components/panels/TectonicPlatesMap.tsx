/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Globe, MapPin, Compass, Layers, ShieldAlert, Sparkles, Info } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface TectonicPlatesMapProps {
  language: Language;
}

interface PlateItem {
  id: string;
  name: { en: string; hi: string; or: string };
  category: 'major' | 'microplate' | 'fracture';
  motionVector: string;
  type: string;
  keyFeature: { en: string; hi: string; or: string };
  description: { en: string; hi: string; or: string };
  color: string;
}

const PLATES_DATABASE: PlateItem[] = [
  {
    id: 'indo-australian',
    name: {
      en: 'Indo-Australian Plate',
      hi: 'भारत-ऑस्ट्रेलियाई प्लेट',
      or: 'ଭାରତ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍',
    },
    category: 'major',
    motionVector: 'North-Northeast @ 5 cm/year',
    type: 'Major Continental & Oceanic Plate',
    keyFeature: {
      en: 'Colliding into Eurasian Plate to uplift the Himalayas; subducting under Burma microplate to fuel Barren Island.',
      hi: 'यूरेशियन प्लेट से टकराकर हिमालय को ऊपर उठा रही है; बर्मा माइक्रोप्लेट के नीचे धंसकर बैरन द्वीप बनाती है।',
      or: 'ୟୁରେସିଆନ୍ ପ୍ଲେଟ୍ ସହ ଧକ୍କା ଖାଇ ହିମାଳୟ ସୃଷ୍ଟି କରେ ଓ ବାରେନ୍ ଦ୍ୱୀପ ଜ୍ୱାଳାମୁଖୀ ଗଠନ କରେ।',
    },
    description: {
      en: 'A massive tectonic plate stretching from the Indian subcontinent across Australia. Its rapid northward collision into Asia is the most powerful active continental collision on Earth.',
      hi: 'भारतीय उपमहाद्वीप से लेकर ऑस्ट्रेलिया तक फैली विशाल प्लेट। एशिया से इसकी तीव्र टक्कर दुनिया का सबसे शक्तिशाली सक्रिय टकराव है।',
      or: 'ଭାରତଠାରୁ ଅଷ୍ଟ୍ରେଲିଆ ପର୍ଯ୍ୟନ୍ତ ବ୍ୟାପ୍ତ ବିଶାଳ ପ୍ଲେଟ୍। ଏହାର ଉତ୍ତରମୁଖୀ ଗତି ପୃଥିବୀର ସବୁଠାରୁ ଶକ୍ତିଶାଳୀ ଧକ୍କା।',
    },
    color: '#f59e0b',
  },
  {
    id: 'capricorn-microplate',
    name: {
      en: 'Capricorn Plate & Kumari Kandam Rift',
      hi: 'कैप्रिकॉर्न प्लेट एवं कुमारी कंदम विखंडन',
      or: 'କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ ଓ କୁମାରୀ କନ୍ଦମ୍',
    },
    category: 'microplate',
    motionVector: 'Internal Tearing in Indian Ocean @ 1.4 cm/year',
    type: 'Newly Forming Sub-Tectonic Microplate',
    keyFeature: {
      en: 'Splitting of Indo-Australian Plate into Indian, Australian, and Capricorn plates; mirrors Sangam literature’s submerged Kumari Kandam (Kumari Nadu).',
      hi: 'इंडो-ऑस्ट्रेलियन प्लेट का भारतीय, ऑस्ट्रेलियाई और कैप्रिकॉर्न प्लेट में विभाजन; प्राचीन संगम कालीन जलमग्न कुमारी कंदम से संबंध।',
      or: 'ଇଣ୍ଡୋ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍ ଭାଙ୍ଗି କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ ସୃଷ୍ଟି; ପ୍ରାଚୀନ ସଙ୍ଗମ ସାହିତ୍ୟର ବୁଡ଼ିଯାଇଥିବା କୁମାରୀ କନ୍ଦମ୍ ସହ ସମ୍ପର୍କ।',
    },
    description: {
      en: 'Geophysicists confirmed the giant Indo-Australian Plate is not a single rigid block, but is actively tearing apart due to internal friction into the Indian, Australian, and Capricorn plates. Historians and researchers draw fascinating parallels with ancient Tamil Sangam texts describing the lost sunken continent of Kumari Kandam (Kumari Nadu), where southern India and Australia were once geologically contiguous.',
      hi: 'वैज्ञानिकों ने पुष्टि की है कि विशाल इंडो-ऑस्ट्रेलियन प्लेट अब एक सिंगल ब्लॉक नहीं रही, बल्कि आंतरिक घर्षण और भारी दबाव के कारण टूटकर विभाजित हो रही है, जिससे नई कैप्रिकॉर्न प्लेट बन रही है। प्राचीन तमिल साहित्य (संगम ग्रंथों) में वर्णित खोया हुआ भूभाग "कुमारी कंदम" इसी हिंद महासागरीय विखंडन और प्राचीन भूगर्भीय जुड़ाव से मेल खाता है।',
      or: 'ବୈଜ୍ଞାନିକମାନେ ପ୍ରମାଣ କରିଛନ୍ତି ଯେ ବିଶାଳ ଇଣ୍ଡୋ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍ ଆଭ୍ୟନ୍ତରୀଣ ଚାପ ଯୋଗୁଁ ଭାଙ୍ଗି କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ ସୃଷ୍ଟି କରୁଛି। ଏହା ପ୍ରାଚୀନ ସଙ୍ଗମ ସାହିତ୍ୟର ବୁଡ଼ିଯାଇଥିବା କୁମାରୀ କନ୍ଦମ୍ ଭୂଭାଗ ସହ ସାଦୃଶ୍ୟ ରଖେ।',
    },
    color: '#ec4899',
  },
  {
    id: 'burma-microplate',
    name: {
      en: 'Burma Microplate',
      hi: 'बर्मा माइक्रोप्लेट (उप-प्लेट)',
      or: 'ବର୍ମା ମାଇକ୍ରୋପ୍ଲେଟ୍ (ଉପ-ପ୍ଲେଟ୍)',
    },
    category: 'microplate',
    motionVector: 'North @ 4.6 cm/year (Oblique shear)',
    type: 'Sub-Tectonic Microplate',
    keyFeature: {
      en: 'Hosts Barren Island volcano (India’s only active volcano) and the 2004 Sumatra-Andaman subduction megathrust trench.',
      hi: 'भारत के एकमात्र सक्रिय ज्वालामुखी बैरन द्वीप और 2004 की सुनामी वाली सुमात्रा-अंडमान खाई की मेजबानी करती है।',
      or: 'ଭାରତର ଏକମାତ୍ର ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ ବାରେନ୍ ଦ୍ୱୀପ ଓ ଆଣ୍ଡାମାନ ସବଡକ୍ସନ୍ ଖାଇ ଏହିଠାରେ ଅବସ୍ଥିତ।',
    },
    description: {
      en: 'A small tectonic fragment trapped between the Indo-Australian Plate on the west and the Sunda Plate on the east. Subduction along its western margin melts oceanic lithosphere to generate the Andaman volcanic arc.',
      hi: 'इंडो-ऑस्ट्रेलियाई प्लेट और सुंडा प्लेट के बीच फंसा एक छोटा प्लेट खंड। इसके किनारे पर पिघलने वाली चट्टानें बैरन द्वीप को जन्म देती हैं।',
      or: 'ଭାରତୀୟ ଓ ସୁଣ୍ଡା ପ୍ଲେଟ୍ ମଝିରେ ଫସିଥିବା ଏକ ଛୋଟ ମାଇକ୍ରୋପ୍ଲେଟ୍, ଯାହାର ସବଡକ୍ସନ୍ ଯୋଗୁଁ ଆଣ୍ଡାମାନ ଜ୍ୱାଳାମୁଖୀ ସୃଷ୍ଟି ହୁଏ।',
    },
    color: '#ef4444',
  },
  {
    id: 'pacific-plate',
    name: {
      en: 'Pacific Plate',
      hi: 'प्रशांत प्लेट (Pacific Plate)',
      or: 'ପ୍ରଶାନ୍ତ ମହାସାଗରୀୟ ପ୍ଲେଟ୍',
    },
    category: 'major',
    motionVector: 'Northwest @ 8 cm/year',
    type: 'Largest Oceanic Tectonic Plate',
    keyFeature: {
      en: 'Ring of Fire boundaries, Hawaiian Hotspot island chain, Mariana Trench (11,034m deep).',
      hi: 'रिंग ऑफ फायर की सीमाएं, हवाई हॉटस्पॉट द्वीप श्रृंखला और मेरियाना ट्रेंच (11,034 मीटर गहरा)।',
      or: 'ରିଙ୍ଗ୍ ଅଫ୍ ଫାୟାର୍, ହୱାଇ ହଟ୍ସ୍ପଟ୍ ଏବଂ ମାରିଆନା ଟ୍ରେଞ୍ଚ୍ (୧୧,୦୩୪ ମିଟର ଗଭୀର)।',
    },
    description: {
      en: 'Spanning over 103 million km², the Pacific Plate is the fastest moving and most volcanically active plate on Earth, ringed by subduction trenches and transform faults.',
      hi: '10.3 करोड़ वर्ग किमी में फैली यह प्लेट सबसे तेज गति से चलने वाली और सबसे अधिक ज्वालामुखी वाली प्लेट है।',
      or: '୧୦ କୋଟି ବର୍ଗ କିମିରୁ ବଡ଼ ଏହି ପ୍ଲେଟ୍ ପୃଥିବୀର ଦ୍ରୁତତମ ଓ ସର୍ବାଧିକ ଜ୍ୱାଳାମୁଖୀ ପୂର୍ଣ୍ଣ ପ୍ଲେଟ୍।',
    },
    color: '#38bdf8',
  },
  {
    id: 'juan-de-fuca',
    name: {
      en: 'Juan de Fuca Microplate',
      hi: 'जुआन डि फूका माइक्रोप्लेट',
      or: 'ଜୁଆନ୍ ଡି ଫୁକା ମାଇକ୍ରୋପ୍ଲେଟ୍',
    },
    category: 'microplate',
    motionVector: 'East-Northeast @ 4 cm/year',
    type: 'Subducting Oceanic Microplate',
    keyFeature: {
      en: 'Subducting beneath North America to power the Cascade Volcanic Arc (Mount St. Helens, Mount Rainier).',
      hi: 'उत्तरी अमेरिका के नीचे धंसकर कैस्केड ज्वालामुखियों (माउंट सेंट हेलेंस) को मैग्मा प्रदान करती है।',
      or: 'ଉତ୍ତର ଆମେରିକା ତଳେ ବୁଡ଼ି କାସ୍କେଡ୍ ଜ୍ୱାଳାମୁଖୀ (ମାଉଣ୍ଟ ସେଣ୍ଟ ହେଲେନ୍ସ) ଗଠନ କରେ।',
    },
    description: {
      en: 'A remnant of the ancient Farallon Plate trapped off the coast of Washington and Oregon. Its hydrous flux melting triggers deadly explosive stratovolcano eruptions.',
      hi: 'वाशिंगटन और ओरेगन के तट पर स्थित एक प्राचीन प्लेट का अवशेष, जिसके पिघलने से विस्फोटक ज्वालामुखी फटते हैं।',
      or: 'ଏକ ପ୍ରାଚୀନ ପ୍ଲେଟ୍ର ଅବଶିଷ୍ଟାଂଶ ଯାହା ବିସ୍ଫୋରକ ଷ୍ଟ୍ରାଟୋଜ୍ୱାଳାମୁଖୀ ସୃଷ୍ଟି କରେ।',
    },
    color: '#f97316',
  },
  {
    id: 'san-andreas-fault',
    name: {
      en: 'Transform Faults & Fracture Zones (San Andreas)',
      hi: 'रूपांतर भ्रंश एवं फ्रैक्चर जोन (सैन एंड्रियास)',
      or: 'ଟ୍ରାନ୍ସଫର୍ମ ଫଲ୍ଟ ଓ ଫ୍ରାକ୍ଚର ଜୋନ୍ (ସାନ୍ ଆଣ୍ଡ୍ରିଆସ୍)',
    },
    category: 'fracture',
    motionVector: 'Horizontal Strike-Slip @ 3.5 cm/year',
    type: 'Transform Fracture Zone & Fault',
    keyFeature: {
      en: 'Plates sliding past horizontally; deep oceanic scars (Clarion-Clipperton) and land faults (San Andreas Fault).',
      hi: 'प्लेटें क्षैतिज रूप से फिसलती हैं; समुद्र तल पर गहरे फ्रैक्चर जोन और जमीन पर सैन एंड्रियास फॉल्ट।',
      or: 'ପ୍ଲେଟ୍ଗୁଡ଼ିକ ପରସ୍ପରକୁ ଘସି ହୋଇ ସମାନ୍ତରାଳ ଭାବେ ଖସନ୍ତି; ସମୁଦ୍ରରେ ଗଭୀର ଫାଟ ଓ ଭୂଭାଗରେ ସାନ୍ ଆଣ୍ଡ୍ରିଆସ୍ ଫଲ୍ଟ।',
    },
    description: {
      en: 'When tectonic plates grind past each other without creating or destroying crust, they form jagged fracture zones across ocean basins and seismic strike-slip faultlines on land.',
      hi: 'जब दो प्लेटें बिना नई जमीन बनाए या नष्ट किए एक-दूसरे से रगड़ खाती हैं, तो समुद्र में गहरी दरारें और जमीन पर विनाशकारी भूकंप पैदा होते हैं।',
      or: 'ଯେତେବେଳେ ପ୍ଲେଟ୍ଗୁଡ଼ିକ ଘସି ହୁଅନ୍ତି, ସେଠାରେ ଭୂମିକମ୍ପ ଓ ଗଭୀର ଫ୍ରାକ୍ଚର ଜୋନ୍ ସୃଷ୍ଟି ହୁଏ।',
    },
    color: '#a855f7',
  },
];

export const TectonicPlatesMap: React.FC<TectonicPlatesMapProps> = ({ language }) => {
  const [selectedPlateId, setSelectedPlateId] = useState<string>('burma-microplate');
  const [filter, setFilter] = useState<'all' | 'major' | 'microplate' | 'fracture'>('all');

  const activePlate = PLATES_DATABASE.find((p) => p.id === selectedPlateId) || PLATES_DATABASE[1];

  const filteredPlates = PLATES_DATABASE.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Globe className="w-5 h-5 text-amber-500" />
            <span>
              {language === 'hi'
                ? 'टेक्टोनिक प्लेटें, माइक्रोप्लेटें एवं फ्रैक्चर जोन'
                : language === 'or'
                ? 'ଟେକ୍ଟୋନିକ୍ ପ୍ଲେଟ୍, ମାଇକ୍ରୋପ୍ଲେଟ୍ ଓ ଫ୍ରାକ୍ଚର ଜୋନ୍'
                : 'Tectonic Plates, Microplates & Fracture Zones'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'प्रमुख प्लेटें, बर्मा और जुआन डि फूका माइक्रोप्लेटें, सैन एंड्रियास फॉल्ट और समुद्री फ्रैक्चर जोन'
              : language === 'or'
              ? 'ମୁଖ୍ୟ ପ୍ଲେଟ୍, ବର୍ମା ମାଇକ୍ରୋପ୍ଲେଟ୍ (ବାରେନ୍ ଦ୍ୱୀପ), ସାନ୍ ଆଣ୍ଡ୍ରିଆସ୍ ଫଲ୍ଟ ଓ ସମୁଦ୍ରର ଫାଟ'
              : 'Interactive planetary puzzle: Major plates, sub-tectonic microplates & transform boundaries'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1 p-1 bg-neutral-800 rounded-lg">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              filter === 'all' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Systems
          </button>
          <button
            onClick={() => setFilter('major')}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              filter === 'major' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Major Plates
          </button>
          <button
            onClick={() => setFilter('microplate')}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              filter === 'microplate' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Microplates
          </button>
          <button
            onClick={() => setFilter('fracture')}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
              filter === 'fracture' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Fracture Zones
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Stylized Global Tectonic Map (Left) + Detail Console (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Map Graphic */}
        <div className="lg:col-span-8 bg-neutral-950 p-6 flex flex-col items-center justify-center relative min-h-[420px]">
          <svg viewBox="0 0 640 360" className="w-full h-auto drop-shadow-md">
            <defs>
              <linearGradient id="mapOceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#082f49" />
                <stop offset="100%" stopColor="#0c4a6e" />
              </linearGradient>
            </defs>

            {/* Ocean Map Base */}
            <rect x="0" y="0" width="640" height="360" fill="url(#mapOceanGrad)" />

            {/* Continents Outlines (Simplified stylized vector geography) */}
            {/* North America */}
            <path d="M 60 70 L 170 50 L 220 90 L 180 160 L 120 180 L 100 130 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            {/* South America */}
            <path d="M 170 190 L 220 220 L 200 320 L 160 300 L 150 220 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            {/* Eurasia */}
            <path d="M 320 60 L 520 50 L 560 110 L 460 140 L 400 110 L 330 90 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            {/* Africa */}
            <path d="M 310 120 L 370 140 L 380 250 L 320 270 L 290 190 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            {/* India Subcontinent */}
            <path d="M 430 140 L 470 150 L 460 210 L 440 220 L 420 170 Z" fill="#d97706" stroke="#f59e0b" strokeWidth="2" />
            {/* Australia */}
            <path d="M 500 240 L 580 240 L 570 310 L 510 300 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />

            {/* TECTONIC PLATE BOUNDARIES & LABELS */}
            {/* 1. Indian Plate northward arrow */}
            <g stroke="#f59e0b" strokeWidth="3" fill="#f59e0b">
              <line x1="445" y1="210" x2="445" y2="160" />
              <polygon points="440,160 445,148 450,160" />
              <text x="445" y="235" fill="#fde68a" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                Indo-Australian (5 cm/yr ↑)
              </text>
            </g>

            {/* 2. Burma Microplate & Barren Island (Red Hotspot Pin in Andaman Sea) */}
            <g>
              <ellipse cx="482" cy="180" rx="14" ry="24" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
              {/* Barren Island volcano marker */}
              <circle cx="482" cy="180" r="5" fill="#ef4444" className="animate-ping" />
              <circle cx="482" cy="180" r="4" fill="#fbbf24" />
              <text x="500" y="185" fill="#fca5a5" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">
                Barren Island ▲
              </text>
              <text x="500" y="198" fill="#f87171" fontSize="9" fontFamily="JetBrains Mono">
                Burma Microplate
              </text>
            </g>

            {/* 2b. Capricorn Plate & Kumari Kandam Rift (Central Indian Ocean Basin) */}
            <g>
              <ellipse cx="465" cy="270" rx="36" ry="18" fill="rgba(236, 72, 153, 0.28)" stroke="#ec4899" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="435" y1="270" x2="495" y2="270" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="465" y="266" fill="#f472b6" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                Capricorn Plate
              </text>
              <text x="465" y="278" fill="#fbcfe8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">
                Kumari Kandam Rift (1.4 cm/yr)
              </text>
            </g>

            {/* 3. Pacific Plate & Ring of Fire trench line */}
            <path
              d="M 580 110 Q 620 170 590 230"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeDasharray="6,4"
            />
            <text x="550" y="170" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono">
              PACIFIC PLATE
            </text>

            {/* 4. Juan de Fuca Microplate (Pacific Northwest) */}
            <polygon points="105,100 125,95 120,120 100,125" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
            <text x="128" y="112" fill="#fdba74" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">
              Juan de Fuca
            </text>

            {/* 5. San Andreas Fault & Oceanic Fracture Zones */}
            <line x1="95" y1="125" x2="115" y2="155" stroke="#a855f7" strokeWidth="3" />
            <text x="95" y="170" fill="#d8b4fe" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">
              San Andreas Fault
            </text>

            {/* Equatorial Fracture Zones (Transform cracks on Atlantic & Pacific floors) */}
            <line x1="220" y1="180" x2="290" y2="180" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,4" />
            <line x1="210" y1="200" x2="280" y2="200" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,4" />
            <text x="250" y="172" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono">
              Transform Fracture Scars
            </text>

            {/* Click to inspect prompt */}
            <rect x="20" y="320" width="280" height="26" rx="6" fill="#0f172a" stroke="#1e293b" />
            <text x="30" y="337" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">
              Select any system from the right to inspect kinematics
            </text>
          </svg>
        </div>

        {/* Right: Plate Details & Kinematics Deck */}
        <div className="lg:col-span-4 p-5 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Plate Directory & Microplate Tectonics
            </span>
          </div>

          {/* Plate Selector Buttons */}
          <div className="space-y-1.5">
            {filteredPlates.map((plate) => {
              const isSelected = activePlate.id === plate.id;
              return (
                <button
                  key={plate.id}
                  onClick={() => {
                    setSelectedPlateId(plate.id);
                    soundEngine.playCrack();
                  }}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500 text-white font-semibold'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: plate.color }}
                    />
                    <span>{plate.name[language]}</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    {plate.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Plate Telemetry Card */}
          <div className="p-3.5 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2.5 text-xs">
            <div className="flex justify-between items-start border-b border-neutral-800 pb-2">
              <div>
                <h4 className="font-bold text-white text-sm">{activePlate.name[language]}</h4>
                <span className="text-[11px] text-amber-400 font-mono">{activePlate.type}</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                {activePlate.motionVector}
              </span>
            </div>

            <div>
              <span className="text-neutral-500 text-[10px] block">Key Geological Feature:</span>
              <p className="text-neutral-200 leading-relaxed font-medium">
                {activePlate.keyFeature[language]}
              </p>
            </div>

            <div>
              <span className="text-neutral-500 text-[10px] block">Kinematic Overview:</span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                {activePlate.description[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
