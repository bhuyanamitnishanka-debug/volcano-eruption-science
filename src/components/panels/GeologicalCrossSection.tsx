/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, Info, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface GeologicalCrossSectionProps {
  language: Language;
}

interface LayerItem {
  id: string;
  name: { en: string; hi: string; or: string };
  depth: string;
  temp: string;
  desc: { en: string; hi: string; or: string };
  roleInVolcanism: { en: string; hi: string; or: string };
}

const EARTH_LAYERS: LayerItem[] = [
  {
    id: 'crust',
    name: {
      en: 'Crust & Lithosphere',
      hi: 'भूपर्पटी एवं लिथोस्फीयर',
      or: 'ଭୂତ୍ୱକ୍ ଓ ଲିଥୋସ୍ଫିୟର୍',
    },
    depth: '0 – 100 km',
    temp: '0°C – 1,000°C',
    desc: {
      en: 'Rigid, brittle outer shell fractured into moving tectonic plates. Oceanic crust is dense basalt (5–10 km thick), continental crust is buoyant granite (30–70 km thick).',
      hi: 'पृथ्वी की सबसे बाहरी ठोस परत जो टेक्टोनिक प्लेटों में बंटी है। महासागरीय क्रस्ट पतला और भारी होता है, जबकि महाद्वीपीय क्रस्ट मोटा और हल्का होता है।',
      or: 'ପୃଥିବୀର ବାହ୍ୟ କଠିନ ପରସ୍ତ ଯାହା ପ୍ଲେଟ୍ଗୁଡ଼ିକରେ ବିଭକ୍ତ। ସମୁଦ୍ର ତଳ ପତଳା ଏବଂ ସ୍ଥଳଭାଗ ମୋଟା ହୋଇଥାଏ।',
    },
    roleInVolcanism: {
      en: 'Fractures here provide conduits for magma; houses shallow magma storage chambers and volcanic vents.',
      hi: 'यहाँ की दरारों से मैग्मा बाहर आता है और यहीं मैग्मा चैंबर बनते हैं।',
      or: 'ଏହିଠାରେ ଫାଟ ସୃଷ୍ଟି ହୋଇ ମାଗ୍ମା ବାହାରକୁ ଆସିବା ପାଇଁ ରାସ୍ତା ପାଏ।',
    },
  },
  {
    id: 'asthenosphere',
    name: {
      en: 'Asthenosphere (Upper Mantle)',
      hi: 'एस्थेनोस्फीयर (ऊपरी मेंटल)',
      or: 'ଆସ୍ଥେନୋସ୍ଫିୟର୍ (ଉପର ମେଣ୍ଟଲ୍)',
    },
    depth: '100 – 410 km',
    temp: '1,300°C – 1,600°C',
    desc: {
      en: 'Highly viscous, ductile, mechanically weak zone. Rock is near its melting point, allowing plastic flow and seismic low-velocity anomalies.',
      hi: 'प्लास्टिक जैसा गाढ़ा लचीला क्षेत्र। यहाँ की चट्टानें पिघलने के कगार पर होती हैं, जिससे टेक्टोनिक प्लेटें इसके ऊपर तैरती हैं।',
      or: 'ଏକ ନମନୀୟ ଓ ଗରମ ଅଞ୍ଚଳ, ଯାହା ଉପରେ ପ୍ଲେଟ୍ଗୁଡ଼ିକ ଭାସମାନ ଅବସ୍ଥାରେ ଗତି କରନ୍ତି।',
    },
    roleInVolcanism: {
      en: 'Primary zone for decompression melting (at mid-ocean ridges) and flux melting (at subduction zones).',
      hi: 'अपसारी कटकों पर दबाव घटने और सबडक्शन में पानी मिलने से यहीं मैग्मा बनता है।',
      or: 'ପ୍ଲେଟ୍ ଦୂରେଇବା ଏବଂ ସବଡକ୍ସନ୍ ସମୟରେ ଏହି ଅଞ୍ଚଳରେ ହିଁ ମାଗ୍ମା ପ୍ରସ୍ତୁତ ହୁଏ।',
    },
  },
  {
    id: 'mesosphere',
    name: {
      en: 'Lower Mantle (Mesosphere)',
      hi: 'निचला मेंटल (मेसोस्फीयर)',
      or: 'ତଳ ମେଣ୍ଟଲ୍ (ମେସୋସ୍ଫିୟର୍)',
    },
    depth: '660 – 2,890 km',
    temp: '1,800°C – 3,700°C',
    desc: {
      en: 'Comprises over 55% of Earth by volume. High pressure forces silicate minerals into ultra-dense bridgmanite and ferropericlase solid structures.',
      hi: 'पृथ्वी के कुल आयतन का 55% से अधिक हिस्सा। अत्यधिक दबाव के कारण यहाँ की चट्टानें ठोस ब्रिजमेनाइट खनिजों में बदल जाती हैं।',
      or: 'ପୃଥିବୀର ୫୫% ରୁ ଅଧିକ ଭାଗ ଏହିଠାରେ ରହିଛି, ଯାହା ଅତ୍ୟନ୍ତ ଘନ ପଥରରେ ଗଠିତ।',
    },
    roleInVolcanism: {
      en: 'Carries colossal ascending thermal convection loops and descending subducted slabs over 100-million-year timescales.',
      hi: 'यह 10 करोड़ साल के चक्र में विशाल संवहन धाराओं को कोर से क्रस्ट तक पहुंचाता है।',
      or: 'ଏହା ମାଧ୍ୟମରେ କନଭେକ୍ସନ୍ କରେଣ୍ଟ୍ କୋର୍ରୁ ଉପରକୁ ଉଠି ମହାଦେଶଗୁଡ଼ିକୁ ଘୁଞ୍ଚାଏ।',
    },
  },
  {
    id: 'd-double-prime',
    name: {
      en: 'D\'\' Layer (Core-Mantle Boundary)',
      hi: 'डी\'\' परत (कोर-मेंटल सीमा)',
      or: 'D\'\' ପରସ୍ତ (କୋର୍-ମେଣ୍ଟଲ୍ ସୀମା)',
    },
    depth: '2,700 – 2,890 km',
    temp: '3,800°C – 4,500°C',
    desc: {
      en: 'A turbulent, mysterious thermo-chemical boundary layer featuring ultra-low velocity zones (ULVZs) and large low-shear-velocity provinces (LLSVPs).',
      hi: 'एक रहस्यमयी सीमा जहां कोर की तरल धातु मेंटल की ठोस चट्टान से मिलती है।',
      or: 'ଏକ ରହସ୍ୟମୟ ଅଞ୍ଚଳ ଯେଉଁଠାରେ ତରଳ କୋର୍ ଏବଂ କଠିନ ମେଣ୍ଟଲ୍ ପରସ୍ପରକୁ ଭେଟନ୍ତି।',
    },
    roleInVolcanism: {
      en: 'The thermal nursery that spawns deep mantle superplumes feeding hotspots like Hawaii, Iceland, and Yellowstone.',
      hi: 'हवाई और येलोस्टोन जैसे हॉटस्पॉट को जन्म देने वाले गहरे मैग्मा प्लूम्स यहीं पैदा होते हैं।',
      or: 'ହୱାଇ ଏବଂ ଆଇସଲ୍ୟାଣ୍ଡ ପରି ହଟ୍ସ୍ପଟ୍ ପାଇଁ ମାଗ୍ମା ପ୍ଲୁମ୍ ଏହିଠାରୁ ସୃଷ୍ଟି ହୁଏ।',
    },
  },
  {
    id: 'outer-core',
    name: {
      en: 'Outer Core',
      hi: 'बाहरी कोर',
      or: 'ବାହାର କୋର୍ (Outer Core)',
    },
    depth: '2,890 – 5,150 km',
    temp: '4,500°C – 6,000°C',
    desc: {
      en: 'Vigorous molten liquid iron-nickel alloy. Flowing metallic convection currents here generate Earth’s protective geomagnetic field (geodynamo).',
      hi: 'उबलता हुआ तरल लोहा और निकेल। यहाँ बहने वाली धातुएं पृथ्वी का चुंबकीय क्षेत्र बनाती हैं।',
      or: 'ତରଳ ଲୁହା ଓ ନିକେଲ୍ରେ ପରିପୂର୍ଣ୍ଣ। ଏହାର ପ୍ରବାହ ପୃଥିବୀର ଚୁମ୍ବକୀୟ କ୍ଷେତ୍ର ସୃଷ୍ଟି କରେ।',
    },
    roleInVolcanism: {
      en: 'The ultimate thermal dynamo heating the entire base of the mantle, sustaining mantle convection for 4.5 billion years.',
      hi: 'यह पृथ्वी का प्राथमिक हीटर है जो मेंटल संवहन को ऊर्जा प्रदान करता है।',
      or: 'ଏହା ପୃଥିବୀର ମୁଖ୍ୟ ଉତ୍ତାପ ଇଞ୍ଜିନ୍, ଯାହା ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍ କୁ ଶକ୍ତି ଯୋଗାଏ।',
    },
  },
];

export const GeologicalCrossSection: React.FC<GeologicalCrossSectionProps> = ({ language }) => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('crust');

  const selectedLayer = EARTH_LAYERS.find((l) => l.id === selectedLayerId) || EARTH_LAYERS[0];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl p-6">
      <div className="flex items-center gap-2 mb-4 border-b border-neutral-800 pb-3">
        <Layers className="w-5 h-5 text-amber-500" />
        <h3 className="text-lg font-bold text-white tracking-tight">
          {language === 'hi'
            ? 'पृथ्वी की आंतरिक संरचना एवं ज्वालामुखी'
            : language === 'or'
            ? 'ପୃଥିବୀର ଭିତର ସଂରଚନା ଏବଂ ଜ୍ୱାଳାମୁଖୀ'
            : 'Planetary Anatomy: From Liquid Core to Volcanic Vent'}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Layer Buttons / Interactive Strip */}
        <div className="lg:col-span-4 space-y-2">
          {EARTH_LAYERS.map((layer) => {
            const isSelected = selectedLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => {
                  setSelectedLayerId(layer.id);
                  soundEngine.playCrack();
                }}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between text-xs ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-500 text-white font-semibold shadow-sm'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="text-white text-xs">{layer.name[language]}</div>
                  <div className="text-[10px] font-mono text-neutral-500">{layer.depth}</div>
                </div>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Selected Layer Detailed Telemetry Card */}
        <div className="lg:col-span-8 bg-neutral-950 p-5 rounded-xl border border-neutral-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
            <div>
              <h4 className="text-base font-bold text-white">
                {selectedLayer.name[language]}
              </h4>
              <span className="text-xs font-mono text-amber-400">
                Depth: {selectedLayer.depth} · Temp: {selectedLayer.temp}
              </span>
            </div>
            <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
              {selectedLayer.id}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="font-semibold text-neutral-300 block mb-1">
                Geological Composition & Physical State:
              </span>
              <p className="text-neutral-400 leading-relaxed">
                {selectedLayer.desc[language]}
              </p>
            </div>

            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
              <span className="font-semibold text-amber-400 block mb-1">
                Role in Mantle Convection & Volcanic Eruptions:
              </span>
              <p className="text-neutral-300 leading-relaxed">
                {selectedLayer.roleInVolcanism[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
