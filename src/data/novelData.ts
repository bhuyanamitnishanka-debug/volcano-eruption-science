/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NovelChapter, QuizQuestion } from '../types/novel';

export const NOVEL_CHAPTERS: NovelChapter[] = [
  {
    id: 'act-1-mantle-engine',
    actNumber: 1,
    romanNumeral: 'ACT I',
    title: {
      en: 'The Primordial Engine: Mantle Convection',
      hi: 'प्राथमिक इंजन: मेंटल संवहन धाराएं',
      or: 'ପୃଥିବୀର ମୁଖ୍ୟ ଇଞ୍ଜିନ୍: ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍',
    },
    subtitle: {
      en: 'How Earth’s 6,000°C Core Powers Planetary Heat Conveyors',
      hi: 'कैसे पृथ्वी का 6,000°C गर्म कोर संवहन धाराओं को चलाता है',
      or: 'କିପରି ପୃଥିବୀର କୋର୍ର ଅତ୍ୟଧିକ ଗରମ ତରଳ ପଥରକୁ ଘୂରାଏ',
    },
    summary: {
      en: 'Deep within Earth, the molten outer core transfers enormous thermal energy to the silicate mantle. Warmed rock expands, decreases in density, and ascends toward the crust, cooling and sinking in perpetual loops.',
      hi: 'पृथ्वी के कोर की भीषण गर्मी निचले मेंटल की चट्टानों को गर्म करती है। गर्म होकर मैग्मा हल्का हो जाता है और ऊपर उठता है, ठंडा होकर वापस डूबता है। यह चक्र संवहन धारा कहलाता है।',
      or: 'ପୃଥିବୀର କୋର ଅତ୍ୟଧିକ ଗରମ। ଏହା ମେଣ୍ଟଲ୍ର ପଥର ତରଳାଇ କମ ସାନ୍ଦ୍ର (less dense) କରି ଉପରକୁ ଉଠାଏ। ଉପରକୁ ଯାଇ ଥଣ୍ଡା ହେଲେ ଏହା ପୁଣି ତଳକୁ ଖସି କନଭେକ୍ସନ୍ ସାଇକଲ୍ ଗଠନ କରେ।',
    },
    panels: [
      {
        id: 'p1-1',
        panelNumber: 1,
        title: {
          en: 'Thermal Inception: The Outer Core Boundary',
          hi: 'ऊष्मा का उद्गम: कोर-मेंटल सीमा',
          or: 'ଉତ୍ତାପର ଉତ୍ସ: କୋର୍-ମେଣ୍ଟଲ୍ ସୀମା',
        },
        subtitle: {
          en: 'Depths of 2,890 km — Heat exceeding 5,000°C',
          hi: '2,890 किमी की गहराई — 5,000°C से अधिक तापमान',
          or: '୨,୮୯୦ କି.ମି. ଗଭୀରତା — ୫,୦୦୦°C ରୁ ଅଧିକ ତାପମାତ୍ରା',
        },
        visualType: 'convection',
        dialogues: [
          {
            id: 'd1',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Look at the telemetry from Jax-9. At the core-mantle boundary, thermal gradients are staggering—over 3,500 degrees differential!',
              hi: 'जैक्स-9 का डेटा देखिए। कोर-मेंटल सीमा पर तापमान का अंतर अविश्वसनीय है—3,500 डिग्री से भी अधिक!',
              or: 'ଜ୍ୟାକ୍ସ-୯ ରୁ ତଥ୍ୟ ଦେଖନ୍ତୁ। କୋର୍ ଏବଂ ମେଣ୍ଟଲ୍ ସୀମାରେ ୩,୫୦୦ ଡିଗ୍ରୀରୁ ଅଧିକ ତାପମାତ୍ରା ପାର୍ଥକ୍ୟ ରହିଛି!',
            },
            type: 'speech',
          },
          {
            id: 'd2',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Thermal expansion detected. Silicate rock density dropping from 5.5 g/cm³ to 4.8 g/cm³. Upward buoyant velocity: 5 cm/year.',
              hi: 'थर्मल फैलाव दर्ज। सिलिकेट चट्टान का घनत्व 5.5 से घटकर 4.8 g/cm³ हुआ। ऊपर उठने की गति: 5 सेमी/वर्ष।',
              or: 'ତାପୀୟ ପ୍ରସାରଣ ଚିହ୍ନଟ। ପଥରର ସାନ୍ଦ୍ରତା କମି ଯାଉଛି। ବୋୟାଣ୍ଟ ବେଗ: ବାର୍ଷିକ ୫ ସେଣ୍ଟିମିଟର।',
            },
            type: 'thought',
          },
        ],
        soundBursts: [
          { text: 'THRRRUMMM...', color: '#f97316', rotation: '-3deg', top: '15%', left: '8%' },
        ],
        scienceNote: {
          en: 'Mantle convection operates like a fluid over millions of years, despite mantle rock being ductile solid under extreme lithostatic pressure.',
          hi: 'अत्यधिक दबाव के बावजूद मेंटल की चट्टानें लाखों वर्षों के पैमाने पर एक गाढ़े तरल की तरह संवहन करती हैं।',
          or: 'ଅତ୍ୟଧିକ ଚାପ ସତ୍ତ୍ୱେ ମେଣ୍ଟଲ୍ ର ପଥର ଲକ୍ଷ ଲକ୍ଷ ବର୍ଷ ମଧ୍ୟରେ ଏକ ତରଳ ପରି ପ୍ରବାହିତ ହୋଇଥାଏ।',
        },
        highlightFact: {
          en: 'Mantle convection cells span nearly 2,900 km from the outer core to the bottom of the crust.',
          hi: 'संवहन धाराएं बाहरी कोर से लेकर क्रस्ट की गहराई तक लगभग 2,900 किमी तक फैली होती हैं।',
          or: 'ମେଣ୍ଟଲ୍ ସଂବହନ ପ୍ରକ୍ରିୟା ବାହାର କୋର୍ ଠାରୁ ଭୂପୃଷ୍ଠ ପର୍ଯ୍ୟନ୍ତ ପ୍ରାୟ ୨,୯୦୦ କିଲୋମିଟର ପର୍ଯ୍ୟନ୍ତ ବ୍ୟାପିଥାଏ।',
        },
      },
      {
        id: 'p1-2',
        panelNumber: 2,
        title: {
          en: 'The Sinking Slab & Complete Convection Loop',
          hi: 'ठंडी चट्टानों का डूबना एवं पूर्ण संवहन लूप',
          or: 'ଥଣ୍ଡା ପଥରର ନିମ୍ନଗତି ଓ ପୂର୍ଣ୍ଣ କନଭେକ୍ସନ୍ ଚକ୍ର',
        },
        subtitle: {
          en: 'Cooling at the Lithosphere causes density increase',
          hi: 'लिथोस्फीयर पर ठंडा होकर चट्टान का भारी होना',
          or: 'ଲିଥୋସ୍ଫିୟର୍ ନିକଟରେ ଥଣ୍ଡା ହୋଇ ସାନ୍ଦ୍ରତା ବୃଦ୍ଧି',
        },
        visualType: 'convection',
        dialogues: [
          {
            id: 'd3',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'As rising magma reaches the cooler upper mantle, heat conducts away into the crust. The rock becomes dense again and begins its 100-million-year descent.',
              hi: 'जैसे ही गर्म मैग्मा ऊपरी मेंटल तक पहुंचता है, यह ठंडा होकर भारी हो जाता है और 10 करोड़ साल लंबी वापसी यात्रा पर नीचे डूबने लगता है।',
              or: 'ଯେତେବେଳେ ମାଗ୍ମା ଉପର ମେଣ୍ଟଲ୍ ପାଖରେ ପହଞ୍ଚି ଥଣ୍ଡା ହୁଏ, ତାହା ଭାରୀ ହୋଇ ପୁଣି ତଳକୁ ଖସିବା ଆରମ୍ଭ କରେ।',
            },
            type: 'speech',
          },
          {
            id: 'd4',
            character: 'narrator',
            characterName: { en: 'Geological Chronicle', hi: 'भूगर्भीय विवरण', or: 'ଭୂତାତ୍ତ୍ୱିକ ଇତିହାସ' },
            avatarIcon: 'book-open',
            text: {
              en: 'These colossal circular convection currents act as Earth’s planetary conveyor belts, dragging continents and ocean floors along with them.',
              hi: 'ये विशाल गोलाकार संवहन धाराएं पृथ्वी की कन्वेयर बेल्ट हैं, जो महाद्वीपों और महासागरों को अपने ऊपर खिसकाती हैं।',
              or: 'ଏହି ବିଶାଳ ଚକ୍ରାକାର କନଭେକ୍ସନ୍ ସ୍ରୋତଗୁଡ଼ିକ ଏକ କନଭେୟର୍ ବେଲ୍ଟ ପରି ମହାଦେଶଗୁଡ଼ିକୁ ଟାଣି ନିଅନ୍ତି।',
            },
            type: 'caption',
          },
        ],
        scienceNote: {
          en: 'Rayleigh-Bénard thermal convection is governed by the Rayleigh number ($Ra \approx 10^7$ in the mantle), ensuring turbulent, multi-scale plumes.',
          hi: 'मेंटल में रेले संख्या (Ra) लगभग 10^7 है, जो जटिल और शक्तिशाली थर्मल प्लूम्स का निर्माण करती है।',
          or: 'ମେଣ୍ଟଲ୍ ଭିତରେ ଉଚ୍ଚ ରେଲେ ସଂଖ୍ୟା ଯୋଗୁଁ ନିରନ୍ତର ଶକ୍ତିଶାଳୀ ଥର୍ମାଲ୍ ପ୍ଲୁମ୍ ଗଠନ ହୁଏ।',
        },
        highlightFact: {
          en: 'One complete turnover of a mantle convection cell takes roughly 100 to 200 million years!',
          hi: 'मेंटल संवहन के एक पूरे चक्र को पूरा होने में लगभग 10 से 20 करोड़ वर्ष का समय लगता है!',
          or: 'ଗୋଟିଏ ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍ ଚକ୍ର ପୂରା ହେବା ପାଇଁ ପ୍ରାୟ ୧୦ ରୁ ୨୦ କୋଟି ବର୍ଷ ଲାଗିଥାଏ!',
        },
      },
    ],
  },
  {
    id: 'act-2-tectonic-boundaries',
    actNumber: 2,
    romanNumeral: 'ACT II',
    title: {
      en: 'Tectonic Boundaries: Where Continents Fracture',
      hi: 'टेक्टोनिक प्लेट सीमाएं: जहां धरती फटती है',
      or: 'ଟେକ୍ଟୋନିକ୍ ସୀମା: ଯେଉଁଠି ପୃଥିବୀ ଖଣ୍ଡବିଖଣ୍ଡିତ ହୁଏ',
    },
    subtitle: {
      en: 'Divergent Ridges, Convergent Subduction & Deep Mantle Hotspots',
      hi: 'अपसारी कटक, अभिसारी सबडक्शन एवं मेंटल हॉटस्पॉट',
      or: 'ପ୍ଲେଟ୍ ଦୂରେଇବା, ଧକ୍କା ହେବା (ସବଡକ୍ସନ୍) ଏବଂ ହଟ୍ସ୍ପଟ୍',
    },
    summary: {
      en: 'Mantle convection currents split plates apart at divergent ocean ridges, drive subduction at convergent trenches where water triggers flux-melting, and fuel stationary hotspot chains like Hawaii.',
      hi: 'मेंटल संवहन प्लेटों को अलग करता है (अपसारी), या आपस में टकराकर नीचे धंसने पर मजबूर करता है (अभिसारी सबडक्शन), जहां पानी चट्टानों को पिघलाकर विस्फोटक मैग्मा बनाता है।',
      or: 'କନଭେକ୍ସନ୍ ଯୋଗୁଁ ପ୍ଲେଟ୍ଗୁଡ଼ିକ ଦୂରେଇ ଯାଆନ୍ତି କିମ୍ବା ପରସ୍ପର ସହ ଧକ୍କା ହୋଇ ସବଡକ୍ସନ୍ ଜୋନ୍ ସୃଷ୍ଟି କରନ୍ତି, ଯେଉଁଠି ପାଣି ମିଶି ବିସ୍ଫୋରକ ମାଗ୍ମା ଜନ୍ମ ନିଏ।',
    },
    panels: [
      {
        id: 'p2-1',
        panelNumber: 3,
        title: {
          en: 'Divergent Boundaries: Decompression Melting',
          hi: 'अपसारी सीमाएं: दबाव कम होने से पिघलन',
          or: 'ପ୍ଲେଟ୍ ଦୂରେଇବା: ଚାପ କମି ମାଗ୍ମା ସୃଷ୍ଟି',
        },
        subtitle: {
          en: 'Mid-Atlantic Ridge: Plates Pull Apart at 2.5 cm/year',
          hi: 'मध्य-अटलांटिक कटक: प्लेटें 2.5 सेमी/वर्ष की दर से दूर हो रही हैं',
          or: 'ମିଡ୍-ଆଟଲାଣ୍ଟିକ୍ ରିଜ୍: ପ୍ଲେଟ୍ଗୁଡ଼ିକ ବାର୍ଷିକ ୨.୫ ସେମି ଦୂରେଇ ଯାଆନ୍ତି',
        },
        visualType: 'boundaries',
        dialogues: [
          {
            id: 'd5',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'As the North American and Eurasian plates pull apart, the lithosphere thins out. Confining pressure drops abruptly!',
              hi: 'जैसे ही प्लेटें एक-दूसरे से दूर खिंचती हैं, ऊपरी क्रस्ट पतली हो जाती है। अचानक दबाव कम हो जाता है!',
              or: 'ଯେତେବେଳେ ପ୍ଲେଟ୍ଗୁଡ଼ିକ ଦୂରେଇ ଯାଆନ୍ତି, ଉପର ଭୂପୃଷ୍ଠ ପତଳା ହୋଇ ଚାପ ହଠାତ୍ କମିଯାଏ!',
            },
            type: 'speech',
          },
          {
            id: 'd6',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Decompression melting threshold reached. Peridotite solidus drops below ambient temperature. Basaltic magma generation confirmed!',
              hi: 'दबाव घटने से चट्टानें स्वतः पिघलने लगी हैं। बेसाल्टिक मैग्मा सतह पर दरारों से बाहर आ रहा है!',
              or: 'ଚାପ କମିବା ଦ୍ୱାରା ପେରିଡୋଟାଇଟ୍ ପଥର ତରଳି ବାସାଲ୍ଟ ମାଗ୍ମା ସୃଷ୍ଟି ହେଉଛି!',
            },
            type: 'thought',
          },
        ],
        soundBursts: [
          { text: 'KRRRAAA-CK!', color: '#38bdf8', rotation: '4deg', top: '12%', left: '72%' },
        ],
        scienceNote: {
          en: 'No added heat is required! Simply relieving lithostatic pressure allows hot solid mantle rock to undergo decompression melting.',
          hi: 'इसके लिए अतिरिक्त गर्मी की आवश्यकता नहीं होती; सिर्फ दबाव कम होने से ही चट्टानें पिघल जाती हैं।',
          or: 'କୌଣସି ଅତିରିକ୍ତ ଗରମ ଦରକାର ନାହିଁ; କେବଳ ଚାପ କମିବା ଦ୍ୱାରା ହିଁ ପଥର ତରଳିଯାଏ।',
        },
        highlightFact: {
          en: 'Over 70% of Earth’s annual volcanic magma is extruded quietly underwater along divergent mid-ocean ridges.',
          hi: 'पृथ्वी के कुल ज्वालामुखी मैग्मा का 70% से अधिक हिस्सा समुद्र के भीतर मध्य-महासागरीय कटकों पर चुपचाप निकलता है।',
          or: 'ପୃଥିବୀର ୭୦% ରୁ ଅଧିକ ଜ୍ୱାଳାମୁଖୀ ମାଗ୍ମା ସମୁଦ୍ର ଭିତରେ ଥିବା ମିଡ୍-ଓସେନିକ୍ ରିଜ୍ରେ ବାହାରିଥାଏ।',
        },
      },
      {
        id: 'p2-2',
        panelNumber: 4,
        title: {
          en: 'Convergent Subduction: The Pacific Ring of Fire',
          hi: 'अभिसारी सबडक्शन: पैसिफिक रिंग ऑफ फायर',
          or: 'ସବଡକ୍ସନ୍ ଜୋନ୍: ପ୍ରଶାନ୍ତ ମହାସାଗରୀୟ ରିଙ୍ଗ୍ ଅଫ୍ ଫାୟାର୍',
        },
        subtitle: {
          en: 'Trapped Seawater Lowers Mantle Melting Point (Flux Melting)',
          hi: 'फंसा हुआ समुद्री जल मेंटल का गलनांक घटाता है (फ्लक्स मेल्टिंग)',
          or: 'ଫସି ରହିଥିବା ସମୁଦ୍ର ପାଣି ପଥରର ତରଳିବା ବିନ୍ଦୁକୁ କମାଇଦିଏ',
        },
        visualType: 'boundaries',
        dialogues: [
          {
            id: 'd7',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Notice the chemistry! The sinking oceanic plate carries hydrated minerals. At 100 km depth, water is forced out into the hot mantle wedge.',
              hi: 'रसायन विज्ञान देखिए! डूबने वाली समुद्री प्लेट अपने साथ पानी ले जाती है। 100 किमी गहराई पर यह पानी मेंटल की चट्टानों को पिघला देता है।',
              or: 'ରାସାୟନିକ ପ୍ରକ୍ରିୟା ଦେଖନ୍ତୁ! ତଳକୁ ଯାଉଥିବା ପ୍ଲେଟ୍ର ପାଣି ମେଣ୍ଟଲ୍ କୁ ଓଦା କରି ତରଳିବା ସହଜ କରେ। ଏହାକୁ ଫ୍ଲକ୍ସ ମେଲ୍ଟିଂ କୁହାଯାଏ।',
            },
            type: 'speech',
          },
          {
            id: 'd8',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Water acts like salt on ice—lowering the melting temperature! The result: silica-rich, gas-charged explosive magma feeding volcanic arcs!',
              hi: 'यह पानी बर्फ पर नमक जैसा काम करता है—गलनांक घटा देता है! इससे गैसों से भरा विस्फोटक मैग्मा बनता है जो रिंग ऑफ फायर को जन्म देता है!',
              or: 'ବରଫ ଉପରେ ଲୁଣ ପରି, ପାଣି ପଥରର ମେଲ୍ଟିଂ ପଏଣ୍ଟ କମାଇଦିଏ! ଏଥିରୁ ଅତ୍ୟନ୍ତ ବିସ୍ଫୋରକ ମାଗ୍ମା ସୃଷ୍ଟି ହୁଏ!',
            },
            type: 'shout',
          },
        ],
        soundBursts: [
          { text: 'HISSSSSSH!', color: '#eab308', rotation: '-6deg', top: '22%', left: '45%' },
        ],
        scienceNote: {
          en: 'Flux melting creates andesitic and rhyolitic magmas that contain high silica ($SiO_2 > 60\%$) and high dissolved water content (3–6 wt%).',
          hi: 'फ्लक्स मेल्टिंग से उच्च सिलिका और अत्यधिक गैसों वाला एंडीसाइटिक मैग्मा बनता है जो विनाशकारी विस्फोट करता है।',
          or: 'ଏହି ପ୍ରକ୍ରିୟାରେ ସିଲିକା ଏବଂ ଗ୍ୟାସ୍ ପୂର୍ଣ୍ଣ ମାଗ୍ମା ସୃଷ୍ଟି ହୁଏ, ଯାହା ଭୟଙ୍କର ବିସ୍ଫୋରଣ ଘଟାଏ।',
        },
        highlightFact: {
          en: 'The Pacific Ring of Fire hosts over 450 active volcanoes and accounts for 75% of Earth’s explosive eruptions.',
          hi: 'पैसिफिक रिंग ऑफ फायर में 450 से अधिक सक्रिय ज्वालामुखी हैं और 75% विस्फोटक घटनाएं यहीं होती हैं।',
          or: 'ପ୍ରଶାନ୍ତ ମହାସାଗରୀୟ ରିଙ୍ଗ୍ ଅଫ୍ ଫାୟାର୍ରେ ୪୫୦ ରୁ ଅଧିକ ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ ରହିଛି।',
        },
      },
    ],
  },
  {
    id: 'act-3-eruption-triggers',
    actNumber: 3,
    romanNumeral: 'ACT III',
    title: {
      en: 'The Three Triggers: Physics of an Overpressured Chamber',
      hi: 'विस्फोट के 3 मुख्य कारण: चैंबर के अति-दबाव का भौतिक विज्ञान',
      or: 'ବିସ୍ଫୋରଣର ୩ଟି ମୁଖ୍ୟ କାରଣ: ମାଗ୍ମା ଚାପ ଓ ଭୌତିକ ବିଜ୍ଞାନ',
    },
    subtitle: {
      en: 'Magma Buoyancy, Volatile Exsolution Bubbles & Deep Recharge Influx',
      hi: 'मैग्मा का हल्कापन, गैसों के बुलबुलों का फैलाव एवं नए मैग्मा का आगमन',
      or: 'ମାଗ୍ମାର ହାଲୁକାପଣ (ବୋୟାନ୍ସି), ଗ୍ୟାସ୍ ଚାପ ଏବଂ ନୂଆ ମାଗ୍ମା ଆସିବା',
    },
    summary: {
      en: 'Convection delivers magma upward, but the final eruption requires three physical triggers: density buoyancy differences, runaway gas bubble exsolution during depressurization, and sudden thermal injection of fresh mantle magma.',
      hi: 'संवहन धाराएं मैग्मा को ऊपर तो लाती हैं, लेकिन विस्फोट 3 कारणों से होता है: मैग्मा का हल्कापन, ऊपर उठने पर गैसों का तेजी से फैलना, और नीचे से नए गर्म मैग्मा का अचानक धक्का।',
      or: 'କନଭେକ୍ସନ୍ ମାଗ୍ମାକୁ ଉପରକୁ ଆଣେ, କିନ୍ତୁ ବିସ୍ଫୋରଣ ୩ଟି ମୁଖ୍ୟ କାରଣ ଯୋଗୁଁ ଘଟେ: ହାଲୁକାପଣ, ଗ୍ୟାସ୍ ବବଲ୍ସ ପ୍ରସାରଣ, ଏବଂ ନୂଆ ଗରମ ମାଗ୍ମାର ପ୍ରବେଶ।',
    },
    panels: [
      {
        id: 'p3-1',
        panelNumber: 5,
        title: {
          en: 'Trigger 1: Density Inversion & Buoyancy Lift',
          hi: 'कारण 1: घनत्व का अंतर और ऊपर उठने का बल (उत्प्लावन)',
          or: 'କାରଣ ୧: ସାନ୍ଦ୍ରତା ପାର୍ଥକ୍ୟ ଏବଂ ଉତ୍ପ୍ଲାବନ ବଳ (ବୋୟାନ୍ସି)',
        },
        subtitle: {
          en: 'Liquid Magma (2.4 g/cm³) vs Solid Wall Rock (2.8 g/cm³)',
          hi: 'पिघला मैग्मा (2.4 g/cm³) बनाम ठोस चट्टानें (2.8 g/cm³)',
          or: 'ତରଳ ମାଗ୍ମା (୨.୪ g/cm³) ବନାମ କଠିନ ପଥର (୨.୮ g/cm³)',
        },
        visualType: 'magma-chamber',
        dialogues: [
          {
            id: 'd9',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Density differential confirmed: $\\Delta\\rho = 0.45\\text{ g/cm}^3$. Net upward Archimedean force exceeds lithostatic yield strength.',
              hi: 'घनत्व का अंतर दर्ज: 0.45 g/cm³। मैग्मा ठोस चट्टानों की तुलना में हल्का होने के कारण स्वाभाविक रूप से ऊपर की ओर धकेला जा रहा है।',
              or: 'ସାନ୍ଦ୍ରତା ପାର୍ଥକ୍ୟ ଯୋଗୁଁ ମାଗ୍ମା କଠିନ ପଥରଠାରୁ ହାଲୁକା ହୋଇ ଉପରକୁ ଉଠିବା ପାଇଁ ବଳ ପ୍ରୟୋଗ କରୁଛି।',
            },
            type: 'thought',
          },
          {
            id: 'd10',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Just like an oil bubble in water or a hot air balloon! Magma exploits every microscopic fissure in the crust to migrate upward toward magma chambers.',
              hi: 'बिल्कुल पानी में तेल की बूंद या गर्म हवा के गुब्बारे की तरह! मैग्मा क्रस्ट की दरारों से रास्ता बनाकर ऊपर चैंबर में जमा होने लगता है।',
              or: 'ପାଣିରେ ତେଲ ବୁନ୍ଦା କିମ୍ବା ଗରମ ବେଲୁନ୍ ପରି! ମାଗ୍ମା ଫାଟ ଦେଇ ଉପର ଚାମ୍ବର ଆଡ଼କୁ ଗତି କରେ।',
            },
            type: 'speech',
          },
        ],
        scienceNote: {
          en: 'Buoyant ascent slows only when magma reaches the "Level of Neutral Buoyancy" (LNB), where magma density matches crustal density, forming storage chambers at 4–10 km depth.',
          hi: 'मैग्मा तब रुकता है जब उसका घनत्व आसपास की चट्टानों के बराबर हो जाता है (LNB), जहां 4-10 किमी की गहराई पर मैग्मा चैंबर बनते हैं।',
          or: 'ଯେତେବେଳେ ମାଗ୍ମାର ସାନ୍ଦ୍ରତା ଚାରିପାଖର ପଥର ସହ ସମାନ ହୋଇଯାଏ, ସେଠାରେ ୪-୧୦ କିମି ଗଭୀରତାରେ ମାଗ୍ମା ଚାମ୍ବର ଗଠନ ହୁଏ।',
        },
        highlightFact: {
          en: 'Under buoyant stress, crustal rocks can fracture in seconds, generating seismic tremor swarms.',
          hi: 'मैग्मा के दबाव से क्रस्ट की चट्टानें कुछ ही सेकंड में टूट सकती हैं, जिससे भूकंप के झटके आते हैं।',
          or: 'ମାଗ୍ମାର ଚାପ ଯୋଗୁଁ ଭୂପୃଷ୍ଠ ଫାଟି ଭୂମିକମ୍ପର ଛୋଟ ଝଟକା ସୃଷ୍ଟି ହୁଏ।',
        },
      },
      {
        id: 'p3-2',
        panelNumber: 6,
        title: {
          en: 'Trigger 2: Decompression Exsolution & The Soda Bottle Effect',
          hi: 'कारण 2: दबाव घटने से गैसों का विस्फोट (सोडा बोतल प्रभाव)',
          or: 'କାରଣ ୨: ଚାପ କମିବା ଦ୍ୱାରା ଗ୍ୟାସ୍ ବବଲ୍ସର ବିସ୍ଫୋରଣ (ସୋଡ଼ା ବୋତଲ ପ୍ରଭାବ)',
        },
        subtitle: {
          en: 'Dissolved H2O, CO2, SO2 Expand Thousands of Times',
          hi: 'घुली हुई जलवाष्प, CO2 और SO2 गैसें हजारों गुना फैलती हैं',
          or: 'ମାଗ୍ମାରେ ଥିବା ପାଣି ବାଷ୍ପ, CO2 ଏବଂ SO2 ହଜାର ଗୁଣ ପ୍ରସାରିତ ହୁଏ',
        },
        visualType: 'magma-chamber',
        dialogues: [
          {
            id: 'd11',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Look closely at Henry’s Law! Deep underground, enormous confining pressure forces gas to dissolve into the melt. But as magma rises, pressure drops!',
              hi: 'हेनरी का नियम याद रखिए! अत्यधिक दबाव में गैसें मैग्मा में घुली रहती हैं। लेकिन जैसे ही मैग्मा ऊपर आता है, दबाव घटते ही गैसें बुलबुलों में बदल जाती हैं!',
              or: 'ହେନ୍ରୀଙ୍କ ନିୟମ ଅନୁସାରେ ତଳେ ଅଧିକ ଚାପ ଯୋଗୁଁ ଗ୍ୟାସ୍ ମାଗ୍ମାରେ ମିଶି ରହିଥାଏ। କିନ୍ତୁ ଉପରକୁ ଆସିଲେ ଚାପ କମି ବବଲ୍ସ ବାହାରିଆସେ!',
            },
            type: 'speech',
          },
          {
            id: 'd12',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'It is identical to uncapping a shaken bottle of champagne! In thick, viscous magma, the bubbles cannot escape smoothly. Pressure spikes exponentially!',
              hi: 'यह सोडा की बंद बोतल को हिलाकर ढक्कन खोलने जैसा है! यदि मैग्मा गाढ़ा हो, तो बुलबुले निकल नहीं पाते और चैंबर फट पड़ता है!',
              or: 'ସୋଡ଼ା ବୋତଲକୁ ହଲାଇ ଠିପି ଖୋଲିବା ପରି! ଯଦି ମାଗ୍ମା ବହଳିଆ ହୋଇଥାଏ, ଗ୍ୟାସ୍ ବାହାରି ନପାରି ବିସ୍ଫୋରଣ ଘଟାଏ!',
            },
            type: 'shout',
          },
        ],
        soundBursts: [
          { text: 'POP! FZZZZZZZT!', color: '#ef4444', rotation: '-8deg', top: '18%', left: '60%' },
        ],
        scienceNote: {
          en: 'Water vapor expands over 1,000-fold when transitioning from dissolved supercritical fluid to atmospheric vapor.',
          hi: 'मैग्मा में घुला जलवाष्प गैस बनते ही अपने मूल आयतन से 1,000 गुना अधिक फैल जाता है।',
          or: 'ମାଗ୍ମାରେ ଥିବା ପାଣି ବାଷ୍ପ ଗ୍ୟାସ୍ରେ ପରିଣତ ହେବା ପରେ ୧,୦୦୦ ଗୁଣରୁ ଅଧିକ ବ୍ୟାପିଯାଏ।',
        },
        highlightFact: {
          en: 'When bubble volume exceeds 75% of the total magma volume, the magma shatters into pyroclastic ash fragments at supersonic speeds.',
          hi: 'जब बुलबुलों की मात्रा 75% से अधिक हो जाती है, तो मैग्मा राख और पत्थरों के टुकड़ों में टूटकर ध्वनिकी से तेज गति से बाहर फेंकता है।',
          or: 'ଯେତେବେଳେ ବବଲ୍ସର ପରିମାଣ ୭୫% ରୁ ଅଧିକ ହୁଏ, ମାଗ୍ମା ବିସ୍ଫୋରିତ ହୋଇ ତୀବ୍ର ବେଗରେ ପାଉଁଶରେ ପରିଣତ ହୁଏ।',
        },
      },
      {
        id: 'p3-3',
        panelNumber: 7,
        title: {
          en: 'Trigger 3: Deep Magma Recharge & Overpressurization',
          hi: 'कारण 3: गहरे मेंटल से नए मैग्मा का आगमन एवं ओवरलोडिंग',
          or: 'କାରଣ ୩: ଗଭୀର ମେଣ୍ଟଲ୍ରୁ ନୂଆ ମାଗ୍ମାର ପ୍ରବେଶ ଏବଂ ଓଭରପ୍ରେସର୍',
        },
        subtitle: {
          en: 'Sudden Influx of 1,200°C Basalt into an Evolved Magma Chamber',
          hi: '1,200°C गर्म बेसाल्टिक मैग्मा का शांत चैंबर में अचानक प्रवेश',
          or: 'ଶାନ୍ତ ଚାମ୍ବର ଭିତରକୁ ୧,୨୦୦°C ଗରମ ମାଗ୍ମାର ହଠାତ୍ ପ୍ରବେଶ',
        },
        visualType: 'magma-chamber',
        dialogues: [
          {
            id: 'd13',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'ALERT: Seismic harmonic tremor detected at 15 km depth. Massive ascending plume of primitive basalt detected entering the shallow chamber!',
              hi: 'चेतावनी: 15 किमी गहराई पर तीव्र भूकंपीय कंपन। मेंटल से नया और बेहद गर्म मैग्मा ऊपरी चैंबर में तेजी से प्रवेश कर रहा है!',
              or: 'ସତର୍କତା: ୧୫ କିମି ଗଭୀରତାରେ ଭୂକମ୍ପନ। ତଳୁ ନୂଆ ଅତ୍ୟଧିକ ଗରମ ମାଗ୍ମା ଉପର ଚାମ୍ବର ଭିତରକୁ ପଶୁଛି!',
            },
            type: 'shout',
          },
          {
            id: 'd14',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'The thermal shock is reheating the resident crystal mush! The sudden influx overpressurizes the chamber beyond the rock fracture limit. ERUPTION IMMINENT!',
              hi: 'इस अत्यधिक गर्मी से अंदर का पुराना मैग्मा खौल उठा है! चैंबर का दबाव चट्टानों की सहन सीमा पार कर गया है। विस्फोट किसी भी क्षण!',
              or: 'ଏହି ପ୍ରଚଣ୍ଡ ଗରମ ପୁରୁଣା ମାଗ୍ମାକୁ ଫୁଟାଇ ଦେଇଛି! ଚାମ୍ବର ଭିତରର ଚାପ ପଥର ଫଟାଇ ବାହାରକୁ ଆସିବାକୁ ପ୍ରସ୍ତୁତ!',
            },
            type: 'speech',
          },
        ],
        soundBursts: [
          { text: 'ROOOAAARRR!', color: '#dc2626', rotation: '5deg', top: '10%', left: '30%' },
        ],
        scienceNote: {
          en: 'Magma recharge often triggers rapid convection overturn in the chamber, observed prior to eruptions at Mount Pinatubo (1991) and Eyjafjallajökull (2010).',
          hi: 'नए मैग्मा का आना चैंबर में उथल-पुथल मचा देता है, जैसा माउंट पिनाटुबो (1991) के विस्फोट से ठीक पहले देखा गया था।',
          or: 'ଏହି ନୂଆ ମାଗ୍ମାର ପ୍ରବେଶ ଚାମ୍ବରରେ ଭୟଙ୍କର ଚାପ ସୃଷ୍ଟି କରେ, ଯେପରି ମାଉଣ୍ଟ ପିନାଟୁବୋ ବିସ୍ଫୋରଣରେ ଘଟିଥିଲା।',
        },
        highlightFact: {
          en: 'Chamber pressure can jump by 20 to 50 MPa in just days following a deep magma recharge event.',
          hi: 'नया मैग्मा आने पर कुछ ही दिनों में चैंबर का आंतरिक दबाव 20 से 50 मेगापास्कल तक बढ़ सकता है।',
          or: 'ନୂଆ ମାଗ୍ମା ଆସିବା ଦ୍ୱାରା କିଛି ଦିନ ମଧ୍ୟରେ ଚାମ୍ବରର ଚାପ ୨୦ ରୁ ୫୦ ମେଗାପାସ୍କାଲ ବଢ଼ିଯାଏ।',
        },
      },
    ],
  },
  {
    id: 'act-4-eruption-types',
    actNumber: 4,
    romanNumeral: 'ACT IV',
    title: {
      en: 'The Spectrum of Fury: Effusive vs. Explosive',
      hi: 'विस्फोट के रूप: शांत प्रवाह बनाम भयंकर प्रलय',
      or: 'ବିସ୍ଫୋରଣର ପ୍ରକାରଭେଦ: ଶାନ୍ତ ଲାଭା ପ୍ରବାହ ବନାମ ପ୍ରଳୟଙ୍କରୀ ବିସ୍ଫୋରଣ',
    },
    subtitle: {
      en: 'Hawaiian Shield Vents to Plinian Cataclysms & Pyroclastic Surges',
      hi: 'हवाईयन शांत लावा फव्वारे से लेकर प्लीनियन विनाशकारी प्रलय तक',
      or: 'ହୱାଇୟାନ୍ ଶାନ୍ତ ଲାଭା ଠାରୁ ପ୍ଲିନିଆନ୍ ଭୟଙ୍କର ବିସ୍ଫୋରଣ',
    },
    summary: {
      en: 'The style of eruption is dictated by two geochemical parameters: silica content ($SiO_2$), which controls viscosity, and volatile concentration. Low viscosity yields gentle basaltic lava rivers; high viscosity triggers cataclysmic Plinian columns and lethal pyroclastic flows.',
      hi: 'विस्फोट का प्रकार मैग्मा के गाढ़ेपन (सिलिका की मात्रा) और उसमें मौजूद गैसों पर निर्भर करता है। पतला मैग्मा शांत लावा नदियां बनाता है, जबकि गाढ़ा मैग्मा विनाशकारी प्लीनियन विस्फोट करता है।',
      or: 'ବିସ୍ଫୋରଣ କିପରି ହେବ ତାହା ସିଲିକାର ପରିମାଣ (ବହଳିଆପଣ) ଏବଂ ଗ୍ୟାସ୍ ଉପରେ ନିର୍ଭର କରେ। ପତଳା ମାଗ୍ମାରୁ ଶାନ୍ତ ଲାଭା ବହେ, ବହଳିଆ ମାଗ୍ମାରୁ ପ୍ରଚଣ୍ଡ ବିସ୍ଫୋରଣ ଘଟେ।',
    },
    panels: [
      {
        id: 'p4-1',
        panelNumber: 8,
        title: {
          en: 'Effusive Hawaiian Eruptions: Fluid Basaltic Rivers',
          hi: 'शांत हवाईयन विस्फोट: बहती बेसाल्टिक लावा नदियां',
          or: 'ଶାନ୍ତ ହୱାଇୟାନ୍ ବିସ୍ଫୋରଣ: ତରଳ ବାସାଲ୍ଟ ଲାଭା ନଦୀ',
        },
        subtitle: {
          en: 'Low Silica (45–52%), High Temp (1,150°C), Gases Escape Smoothly',
          hi: 'कम सिलिका (45-52%), उच्च तापमान (1,150°C), गैसें आसानी से बाहर निकलती हैं',
          or: 'କମ ସିଲିକା (୪୫-୫୨%), ଅଧିକ ତାପମାତ୍ରା (୧,୧୫୦°C), ଗ୍ୟାସ୍ ସହଜରେ ବାହାରିଯାଏ',
        },
        visualType: 'eruption',
        dialogues: [
          {
            id: 'd15',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Look at Kilauea! Because basaltic magma is hot and runny with very low silica, gas bubbles segregate and vent harmlessly into the sky.',
              hi: 'किलाउइया को देखिए! बेसाल्टिक मैग्मा पतला और बहुत गर्म होता है, इसलिए गैसें बिना किसी रुकावट के बुलबुलों के रूप में बाहर निकल जाती हैं।',
              or: 'କିଲାଉଏଆକୁ ଦେଖନ୍ତୁ! ଏଠାରେ ବାସାଲ୍ଟ ମାଗ୍ମା ଅତ୍ୟନ୍ତ ପତଳା ଓ ଗରମ, ତେଣୁ ଗ୍ୟାସ୍ ସହଜରେ ଆକାଶକୁ ଚାଲିଯାଏ।',
            },
            type: 'speech',
          },
          {
            id: 'd16',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'The magma fountains into beautiful curtains of fire and feeds pahoehoe lava tubes, gently building massive shield volcanoes layer upon layer.',
              hi: 'यह मैग्मा सुंदर आग के फव्वारे बनाता है और धीमी गति से बहकर विशाल शील्ड ज्वालामुखी (Shield Volcano) का निर्माण करता है।',
              or: 'ଏହି ମାଗ୍ମା ସୁନ୍ଦର ନିଆଁର ଫୁଆରା ସୃଷ୍ଟି କରେ ଏବଂ ଧୀରେ ଧୀରେ ବିଶାଳ ଶିଲ୍ଡ ଜ୍ୱାଳାମୁଖୀ ଗଠନ କରେ।',
            },
            type: 'speech',
          },
        ],
        scienceNote: {
          en: 'Effusive eruptions score 0–1 on the Volcanic Explosivity Index (VEI). Lava flows pose property threats but rarely claim human lives due to slow advance speeds.',
          hi: 'शांत विस्फोटों का VEI स्कोर 0-1 होता है। इनकी गति धीमी होने के कारण लोग समय रहते सुरक्षित स्थानों पर चले जाते हैं।',
          or: 'ଏହି ବିସ୍ଫୋରଣର VEI ସ୍କୋର ୦-୧ ଥାଏ। ଧୀର ଗତି ଯୋଗୁଁ ଧନଜୀବନ ରକ୍ଷା କରିବା ସମ୍ଭବ ହୁଏ।',
        },
        highlightFact: {
          en: 'Mauna Loa in Hawaii is Earth’s largest volcano, rising 9,000 meters from the ocean floor, built entirely from effusive basaltic flows.',
          hi: 'हवाई का मौना लोआ पृथ्वी का सबसे विशाल ज्वालामुखी है, जो समुद्र तल से 9,000 मीटर ऊंचा है और पूरी तरह शांत बेसाल्टिक प्रवाह से बना है।',
          or: 'ହୱାଇର ମୌନା ଲୋଆ ପୃଥିବୀର ସବୁଠାରୁ ବଡ଼ ଜ୍ୱାଳାମୁଖୀ, ଯାହା ଶାନ୍ତ ଲାଭା ଜମା ହୋଇ ସୃଷ୍ଟି ହୋଇଛି।',
        },
      },
      {
        id: 'p4-2',
        panelNumber: 9,
        title: {
          en: 'Explosive Plinian Cataclysm: Ash Columns & Pyroclastic Surges',
          hi: 'विनाशकारी प्लीनियन विस्फोट: राख का खंभा और पाइरोक्लास्टिक तूफान',
          or: 'ପ୍ଲିନିଆନ୍ ପ୍ରଳୟଙ୍କରୀ ବିସ୍ଫୋରଣ: ଆକାଶଛୁଆଁ ପାଉଁଶ ସ୍ତମ୍ଭ ଓ ଅଗ୍ନିଝଡ଼',
        },
        subtitle: {
          en: 'High Silica (65–75%), High Viscosity, 40 km Stratospheric Plume',
          hi: 'उच्च सिलिका (65-75%), गाढ़ा चिपचिपा मैग्मा, 40 किमी ऊंचा राख का गुबार',
          or: 'ଉଚ୍ଚ ସିଲିକା (୬୫-୭୫%), ଅତ୍ୟଧିକ ବହଳିଆ ମାଗ୍ମା, ୪୦ କିମି ଉଚ୍ଚ ପାଉଁଶ ଧୂଆଁ',
        },
        visualType: 'eruption',
        dialogues: [
          {
            id: 'd17',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'CRITICAL EVENT: Conduit fragmentation velocity: Mach 1.8! Eruption column has breached 35 kilometers into the stratosphere. Volcanic lightning detected!',
              hi: 'गंभीर चेतावनी: राख के कण ध्वनि की गति से लगभग दुगुनी रफ्तार से बाहर निकल रहे हैं! राख का खंभा 35 किमी ऊंचा पहुंच गया है!',
              or: 'ବିପଦ ସଙ୍କେତ: ଶବ୍ଦର ବେଗଠାରୁ ଦ୍ରୁତ ବେଗରେ ପାଉଁଶ ବାହାରୁଛି! ୩୫ କିମି ଉଚ୍ଚ ପାଉଁଶ ସ୍ତମ୍ଭ ଭିତରେ ବିଜୁଳି ଚମକୁଛି!',
            },
            type: 'shout',
          },
          {
            id: 'd18',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'The ash column is collapsing under its own weight! Pyroclastic density currents are screaming down the flanks at 300 km/h at 800°C! EVACUATE NOW!',
              hi: 'राख का खंभा अपने ही भार से ढह रहा है! 800 डिग्री गर्म पाइरोक्लास्टिक गैस और पत्थरों का तूफान 300 किमी/घंटा की गति से पहाड़ों से नीचे दौड़ रहा है!',
              or: 'ପାଉଁଶ ସ୍ତମ୍ଭ ନିଜ ଭାରରେ ତଳକୁ ଖସୁଛି! ୮୦୦ ଡିଗ୍ରୀ ଉତ୍ତପ୍ତ ପାଇରୋକ୍ଲାଷ୍ଟିକ୍ ତୋଫାନ୍ ଘଣ୍ଟାକୁ ୩୦୦ କିମି ବେଗରେ ମାଡ଼ିଆସୁଛି!',
            },
            type: 'shout',
          },
        ],
        soundBursts: [
          { text: 'KAAA-BOOOOOM!', color: '#b91c1c', rotation: '-10deg', top: '8%', left: '40%' },
          { text: 'CRACKLE-ZZZT!', color: '#67e8f9', rotation: '12deg', top: '35%', left: '75%' },
        ],
        scienceNote: {
          en: 'Plinian eruptions (VEI 5–8) pulverize rock into fine ash, pump millions of tons of sulfur dioxide ($SO_2$) into the stratosphere, and trigger global volcanic winters (e.g. Krakatoa 1883, Tambora 1815).',
          hi: 'प्लीनियन विस्फोट (VEI 5-8) लाखों टन सल्फर डाइऑक्साइड स्ट्रैटोस्फियर में छोड़ते हैं, जिससे पूरी दुनिया में सूर्य की रोशनी रुक जाती है और ठंड बढ़ जाती है।',
          or: 'ପ୍ଲିନିଆନ୍ ବିସ୍ଫୋରଣ ଲକ୍ଷ ଲକ୍ଷ ଟନ୍ ସଲଫର୍ ଡାଇଅକ୍ସାଇଡ୍ ବାୟୁମଣ୍ଡଳକୁ ପଠାଇ ବିଶ୍ୱବ୍ୟାପୀ ଜଳବାୟୁ ପରିବର୍ତ୍ତନ ଘଟାଏ (ଯେପରି ୧୮୮୩ କ୍ରାକାଟୋଆ)।',
        },
        highlightFact: {
          en: 'The 1815 Mount Tambora eruption ejected over 150 cubic kilometers of rock, causing the infamous "Year Without a Summer" in 1816.',
          hi: '1815 में माउंट तांबोरा के विस्फोट से 150 क्यूबिक किमी मलबा निकला, जिससे 1816 में दुनिया भर में ग्रीष्म ऋतु आई ही नहीं!',
          or: '୧୮୧୫ ରେ ମାଉଣ୍ଟ ତାମ୍ବୋରା ବିସ୍ଫୋରଣ ଯୋଗୁଁ ୧୮୧୬ ରେ ପୃଥିବୀରେ ଖରାଦିନ ଆସିନଥିଲା (Year Without a Summer)!',
        },
      },
    ],
  },
  {
    id: 'act-5-crust-recycling',
    actNumber: 5,
    romanNumeral: 'ACT V',
    title: {
      en: 'The Great Balance: Earth’s Closed Recycling Machine',
      hi: 'महान संतुलन: पृथ्वी की चट्टान पुनर्चक्रण प्रणाली',
      or: 'ପୃଥିବୀର ସନ୍ତୁଳନ: ପୁନଃଚକ୍ରଣ ପ୍ରକ୍ରିୟା (Recycling System)',
    },
    subtitle: {
      en: 'Why Earth Neither Expands Nor Collapses Under Volcanism & Erosion',
      hi: 'ज्वालामुखी और कटाव के बावजूद पृथ्वी क्यों न सिकुड़ती है न फैलती है',
      or: 'କାହିଁକି ପୃଥିବୀ ସଂକୁଚିତ ନ ହୋଇ ସନ୍ତୁଳିତ ରହିଥାଏ?',
    },
    summary: {
      en: 'Addressing the profound geological enigma: With interior rocks melting into magma and surface erosion scouring mountains, why does Earth maintain steady equilibrium? The answer lies in the closed crustal recycling loop: seafloor spreading creates new land at the exact rate subduction recycles it back into the mantle.',
      hi: 'एक गहरा वैज्ञानिक रहस्य: अगर अंदर से चट्टानें पिघल रही हैं और ऊपर हवा-पानी से पहाड़ घिस रहे हैं, तो पृथ्वी सिकुड़ती क्यों नहीं? इसका कारण है पृथ्वी का अद्भुत पुनर्चक्रण—जितनी नई जमीन बनती है, उतनी ही पुरानी जमीन सबडक्शन में वापस मेंटल में पिघल जाती है।',
      or: 'ଯଦି ପୃଥିବୀର ଭିତର ଭାଗ ଏତେ ଗରମ ଏବଂ ସେଠାରେ ପଥର ତରଳୁଛି, ପୁଣି ଉପରେ ପଥର/ମାଟିର କ୍ଷୟ (Erosion) ହେଉଛି, ତେବେ ପୃଥିବୀ ସଂକୁଚିତ (Squeeze) ନ ହୋଇ ସନ୍ତୁଳିତ ରହେ କାରଣ ଏହାର ପୁନଃଚକ୍ରଣ ବ୍ୟବସ୍ଥା (Recycling System) ନୂଆ ସ୍ଥଳଭାଗ ଗଠନ ଓ ପୁରୁଣା ଭାଗକୁ ତରଳାଇବାରେ ସମାନତା ରକ୍ଷା କରେ।',
    },
    panels: [
      {
        id: 'p5-1',
        panelNumber: 10,
        title: {
          en: '1. Magma Creates Brand New Land (New Crust Formation)',
          hi: '1. मैग्मा नई जमीन बनाता है (नया क्रस्ट निर्माण)',
          or: '୧. ମାଗ୍ମା ନୂଆ ସ୍ଥଳଭାଗ (New Land) ତିଆରି କରେ',
        },
        subtitle: {
          en: 'Volcanism & Seafloor Spreading Extrude Fresh Solid Rock Daily',
          hi: 'ज्वालामुखी विस्फोट और समुद्र तल का फैलाव रोज नई चट्टानें बनाते हैं',
          or: 'ଜ୍ଵାଳାମୁଖୀ ବିସ୍ଫୋରଣ ଏବଂ ସମୁଦ୍ର ଶଯ୍ୟାର ପ୍ରସାରଣ ନୂଆ ମାଟି ଓ ପଥର ସୃଷ୍ଟି କରେ',
        },
        visualType: 'recycling',
        dialogues: [
          {
            id: 'd19',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'The molten magma does not stay trapped in the deep! Volcanic eruptions and seafloor spreading expel molten rock to the surface, solidifying into fresh basalt and brand new continental crust.',
              hi: 'अंदर पिघलने वाली चट्टानें वहीं बंद नहीं रहतीं! ज्वालामुखी और समुद्र के बीच की दरारें इस मैग्मा को ऊपर लाती हैं, जो ठंडा होकर ठोस जमीन में बदल जाता है।',
              or: 'ଭୂତଳର ଗରମ ଯୋଗୁଁ ଯେଉଁ ପଥର ତରଳି ମାଗ୍ମା ପାଲଟିଥାଏ, ତାହା କେବଳ ଭିତରେ ରହେନାହିଁ। ଜ୍ଵାଳାମୁଖୀ ଏବଂ ସମୁଦ୍ର ଶଯ୍ୟାର ପ୍ରସାରଣ ଫଳରେ ଏହି ତରଳ ମାଗ୍ମା ଉପରକୁ ଆସି ନୂଆ ସ୍ଥଳଭାଗ ତିଆରି କରେ।',
            },
            type: 'speech',
          },
          {
            id: 'd20',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Global volumetric rate of fresh crust generation: 3.4 km³ per year along 65,000 km of planetary spreading centers.',
              hi: 'वैश्विक स्तर पर हर साल 3.4 क्यूबिक किलोमीटर नई जमीन समुद्र की गहराइयों में बनती है।',
              or: 'ପ୍ରତିବର୍ଷ ପୃଥିବୀର ବିଭିନ୍ନ ସ୍ଥାନରେ ୩.୪ ଘନ କିଲୋମିଟର ନୂଆ ସ୍ଥଳଭାଗ ଓ ପଥର ସୃଷ୍ଟି ହୁଏ।',
            },
            type: 'thought',
          },
        ],
        scienceNote: {
          en: 'Igneous cooling forms the primary crustal backbone. Iceland is an active example where seafloor spreading visibly rises above sea level.',
          hi: 'आग्नेय चट्टानें पृथ्वी के क्रस्ट की रीढ़ हैं। आइसलैंड इसका जीवंत उदाहरण है जहां समुद्र तल जमीन के ऊपर दिखता है।',
          or: 'ଆଗ୍ନେୟ ପଥର ପୃଥିବୀର ମୂଳଦୁଆ। ଆଇସଲ୍ୟାଣ୍ଡ ଏହାର ପ୍ରତ୍ୟକ୍ଷ ପ୍ରମାଣ ଯେଉଁଠି ସମୁଦ୍ର ଚଟାଣ ସ୍ଥଳଭାଗରେ ଦେଖାଯାଏ।',
        },
        highlightFact: {
          en: 'Every square kilometer of oceanic crust is less than 200 million years old because new crust is constantly being forged.',
          hi: 'समुद्र के नीचे का कोई भी क्रस्ट 20 करोड़ साल से अधिक पुराना नहीं है, क्योंकि वहां लगातार नई जमीन बनती रहती है।',
          or: 'ସମୁଦ୍ର ତଳର କୌଣସି ଅଂଶ ୨୦ କୋଟି ବର୍ଷରୁ ପୁରୁଣା ନୁହେଁ, କାରଣ ଏହା ସବୁବେଳେ ନୂଆ ହୋଇ ତିଆରି ହେଉଥାଏ।',
        },
      },
      {
        id: 'p5-2',
        panelNumber: 11,
        title: {
          en: '2. Erosion Never Destroys Matter: Sedimentation & Delta Growth',
          hi: '2. कटाव से चट्टानें गायब नहीं होतीं: अवसादन और नए डेल्टा का निर्माण',
          or: '୨. ମାଟି କ୍ଷୟ (Erosion) ହେଲେ ବି ନଷ୍ଟ ହୁଏନାହିଁ: ସେଡିମେଣ୍ଟେସନ୍',
        },
        subtitle: {
          en: 'Weathered Mountain Silt Builds Coastlines and Replenishes Trenches',
          hi: 'पहाड़ों से बहकर आई मिट्टी समुद्र तटों और नदी घाटियों में नई जमीन बनाती है',
          or: 'ପାହାଡ଼ରୁ ଖସିଆସୁଥିବା ମାଟି ନୂଆ ତ୍ରିକୋଣଭୂମି (Deltas) ଏବଂ ସମତଳ ଭୂମି ସୃଷ୍ଟି କରେ',
        },
        visualType: 'recycling',
        dialogues: [
          {
            id: 'd21',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'When rain and wind weather mountains, that rock does NOT vanish into thin air! Rivers carry sediments down to riverbeds and coastlines, depositing vast fertile deltas and coastal plains!',
              hi: 'जब बारिश और हवा से पहाड़ घिसते हैं, तो वह मिट्टी गायब नहीं होती! नदियां उसे बहाकर तटों पर ले जाती हैं, जिससे नए डेल्टा और उपजाऊ मैदान बनते हैं!',
              or: 'ତୁମେ ଯେଉଁ ଲ୍ୟାଣ୍ଡ ଏରୋଜନ୍ (Land Erosion) କଥା କହିଲ, ସେଥିରେ ମାଟି ବା ପଥର ପୃଥିବୀରୁ ଗାୟବ ହୋଇଯାଏ ନାହିଁ। ବର୍ଷା ଓ ନଦୀ ଦ୍ୱାରା ଏହା ଜମା ହୋଇ ନୂଆ ତ୍ରିକୋଣଭୂମି ଓ ସମତଳ ଭୂମି ସୃଷ୍ଟି କରେ।',
            },
            type: 'speech',
          },
          {
            id: 'd22',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'This is the law of conservation of mass! Sediments collect in deep oceanic trenches, where they are eventually dragged into subduction zones to be remelted into fresh magma!',
              hi: 'यह द्रव्यमान संरक्षण का नियम है! तलछट समुद्र की खाइयों में जमा होती है, जहां से वह वापस मेंटल में जाकर फिर से नया मैग्मा बन जाती है!',
              or: 'ଏହାକୁ ‘ସେଡିମେଣ୍ଟେସନ୍’ କୁହାଯାଏ। ଏହି ମାଟି ପୁଣି ସମୁଦ୍ର ଗର୍ଭକୁ ଯାଇ ମେଣ୍ଟଲ୍ରେ ତରଳି ନୂଆ ମାଗ୍ମା ହୋଇ ବାହାରିଆସେ!',
            },
            type: 'speech',
          },
        ],
        scienceNote: {
          en: 'The Ganges-Brahmaputra delta and the Mississippi delta deposit billions of tons of sediment annually, extending continental landmass seaward.',
          hi: 'गंगा-ब्रह्मपुत्र और मिसिसिपी डेल्टा हर साल अरबों टन तलछट जमा करते हैं, जिससे महाद्वीपीय भूमि समुद्र की ओर बढ़ती है।',
          or: 'ଗଙ୍ଗା-ବ୍ରହ୍ମପୁତ୍ର ଡେଲଟା ପ୍ରତିବର୍ଷ କୋଟି କୋଟି ଟନ୍ ମାଟି ଜମା କରି ନୂଆ ସ୍ଥଳଭାଗ ପ୍ରସାରିତ କରିଥାଏ।',
        },
        highlightFact: {
          en: 'Sedimentary rocks cover nearly 73% of Earth’s land surface, despite making up only 8% of the total crustal volume.',
          hi: 'तलछटी चट्टानें पृथ्वी के 73% भूमि क्षेत्र को ढकती हैं, जो निरंतर पुनर्चक्रण का प्रत्यक्ष प्रमाण है।',
          or: 'ପୃଥିବୀର ୭୩% ଭୂଭାଗ ସେଡିମେଣ୍ଟାରୀ ପଥର ଦ୍ୱାରା ଆଚ୍ଛାଦିତ, ଯାହା ପୁନଃଚକ୍ରଣର ବଡ଼ ପ୍ରମାଣ।',
        },
      },
      {
        id: 'p5-3',
        panelNumber: 12,
        title: {
          en: '3. The Dynamic Equilibrium: Seafloor Spreading vs. Subduction',
          hi: '3. गतिशील संतुलन: समुद्र का विस्तार बनाम सबडक्शन में पिघलन',
          or: '୩. ଗତିଶୀଳ ସନ୍ତୁଳନ (Dynamic Equilibrium): ସିଫ୍ଲୋର୍ ସ୍ପ୍ରେଡିଂ ବନାମ ସବଡକ୍ସନ୍',
        },
        subtitle: {
          en: 'As New Crust Is Forged at Ridges, Ancient Crust Melts in Subduction Trenches',
          hi: 'एक तरफ नई जमीन बनती है, तो दूसरी तरफ पुरानी जमीन मेंटल में पिघल जाती है',
          or: 'ଗୋଟିଏ ପଟେ ନୂଆ ସ୍ଥଳଭାଗ ତିଆରି ହେଉଥିବା ବେଳେ ଅନ୍ୟପଟେ ପୁରୁଣା ଭାଗ ତରଳି ଯାଏ',
        },
        visualType: 'recycling',
        dialogues: [
          {
            id: 'd23',
            character: 'narrator',
            characterName: { en: 'Geological Chronicle', hi: 'भूगर्भीय विवरण', or: 'ଭୂତାତ୍ତ୍ୱିକ ଇତିହାସ' },
            avatarIcon: 'book-open',
            text: {
              en: 'Thus, the cosmic question is solved: On one flank of the globe, seafloor spreading constructs new lithosphere; on the opposite flank, subduction trenches consume the ancient slab back into the boiling mantle.',
              hi: 'इस प्रकार रहस्य सुलझता है: एक तरफ नई जमीन बन रही है, और दूसरी तरफ सबडक्शन खाइयों में पुरानी चट्टानें मेंटल में पिघलकर संतुलित हो जाती हैं।',
              or: 'ଏହିପରି ଭାବରେ, ପୃଥିବୀର ଗୋଟିଏ ପଟେ ନୂଆ ସ୍ଥଳଭାଗ ତିଆରି ହେଉଥିବା ବେଳେ ଅନ୍ୟପଟେ ପୁରୁଣା ଭାଗ ତରଳି ଯାଉଥାଏ। ଏହି କାରଣରୁ ପୃଥିବୀ ସଂକୁଚିତ (Squeeze) ହୁଏନାହିଁ କିମ୍ବା ବଡ଼ ହୁଏନାହିଁ!',
            },
            type: 'caption',
          },
          {
            id: 'd24',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Earth is not a dead, dying rock, nor is it expanding like a balloon. It is a breathing, self-regulating thermodynamic marvel in eternal balance!',
              hi: 'पृथ्वी कोई निर्जीव या सिकुड़ती हुई चट्टान नहीं है, न ही यह गुब्बारे की तरह फूल रही है। यह एक निरंतर सांस लेती हुई संतुलित जीवित प्रणाली है!',
              or: 'ପୃଥିବୀ ସଙ୍କୁଚିତ ହୁଏନାହିଁ କିମ୍ବା ଅତ୍ୟଧିକ ବଢ଼ିଯାଏ ନାହିଁ—ଏହା ଏକ ଚିରନ୍ତନ ସନ୍ତୁଳନ (Perfect Equilibrium) ରକ୍ଷା କରି ଚାଲିଛି!',
            },
            type: 'shout',
          },
        ],
        scienceNote: {
          en: 'Planetary radius has remained constant within ±0.1 mm/year over hundreds of millions of years, confirming exact equivalence between spreading and subduction rates.',
          hi: 'उपग्रह मापों से सिद्ध हुआ है कि पृथ्वी की त्रिज्या करोड़ों वर्षों से स्थिर रही है, जो दर्शाता है कि नई जमीन बनने और नष्ट होने की दर बिल्कुल बराबर है।',
          or: 'ଉପଗ୍ରହ ଗଣନା ଅନୁସାରେ ପୃଥିବୀର ବ୍ୟାସାର୍ଦ୍ଧ ସମ୍ପୂର୍ଣ୍ଣ ସ୍ଥିର ରହିଛି, ଯାହା ପ୍ରମାଣ କରେ କି ସୃଷ୍ଟି ଓ ବିଲୟ ସମ୍ପୂର୍ଣ୍ଣ ସମାନ।',
        },
        highlightFact: {
          en: 'Earth’s crustal rock is completely recycled every ~2.5 billion years, making Earth unique among all rocky planets in the Solar System.',
          hi: 'पृथ्वी का पूरा क्रस्ट लगभग हर 2.5 अरब वर्ष में पूरी तरह रीसायकल हो जाता है, जो सौरमंडल में केवल हमारी पृथ्वी पर ही संभव है।',
          or: 'ପୃଥିବୀର ସମ୍ପୂର୍ଣ୍ଣ ଭୂତ୍ୱକ୍ ପ୍ରତି ୨.୫ ଆରବ ବର୍ଷରେ ଥରେ ପୁନଃଚକ୍ରିତ ହୁଏ, ଯାହା ଅନ୍ୟ କୌଣସି ଗ୍ରହରେ ଦେଖାଯାଏ ନାହିଁ।',
        },
      },
    ],
  },
  {
    id: 'act-6-mountain-building',
    actNumber: 6,
    romanNumeral: 'ACT VI',
    title: {
      en: 'The Colossal Jam: Why Plate Friction Forges Mountains & Hills',
      hi: 'महाटकराव: टेक्टोनिक घर्षण से पर्वतों और पहाड़ियों का जन्म',
      or: 'ମହାଧକ୍କା: ପ୍ଲେଟ୍ ଘର୍ଷଣରୁ କିପରି ପାହାଡ଼ ଓ ପର୍ବତ ସୃଷ୍ଟି ହୁଏ',
    },
    subtitle: {
      en: 'The Rug Crumple Metaphor: Fold Mountains (Himalayas) & Fault-Block Uplifts',
      hi: 'कालीनों का सिकुड़ना: वलित पर्वत (हिमालय) एवं भ्रंशोत्थ पर्वत (Fault-Block)',
      or: 'ଗାଲିଚା କୁଞ୍ଚିତ ହେବା ପରି: ଭଙ୍ଗିଳ ପର୍ବତ (ହିମାଳୟ) ଓ ଫଲ୍ଟ-ବ୍ଲକ୍ ପାହାଡ଼',
    },
    summary: {
      en: 'When tectonic plates move, they do not slide smoothly. Jagged rock creates immense friction. Pushed together like rugs on a floor, colliding plates crush and buckle upward—creating Fold Mountains like the Himalayas or cracking into Fault-Block mountain ranges.',
      hi: 'टेक्टोनिक प्लेटें चिकनी नहीं होतीं। जब दो प्लेटें टकराती हैं, तो घर्षण और भारी दबाव के कारण वे फर्श पर खिसकाई गई दो कालीनों की तरह बीच से मुड़कर ऊपर उठ जाती हैं। इससे वलित पर्वत (हिमालय) और भ्रंशोत्थ पर्वत बनते हैं।',
      or: 'ପ୍ଲେଟ୍ଗୁଡ଼ିକ ଖସିଲା ବେଳେ ପ୍ରବଳ ଘର୍ଷଣ ସୃଷ୍ଟି ହୁଏ। ଯେତେବେଳେ ଦୁଇଟି ପ୍ଲେଟ୍ ଧକ୍କା ହୁଅନ୍ତି, ମେଝିଆରେ ଦୁଇଟି ଗାଲିଚାକୁ ଚାପିଲେ ମଝିରୁ ଉପରକୁ ଉଠିବା ପରି ଭୂପୃଷ୍ଠ ଭାଙ୍ଗି ଭଙ୍ଗିଳ ପର୍ବତ (ହିମାଳୟ) ଗଠନ ହୁଏ।',
    },
    panels: [
      {
        id: 'p6-1',
        panelNumber: 13,
        title: {
          en: 'The Rug Crumple: Fold Mountains & The Rising Himalayas',
          hi: 'कालीनों का मुड़ना: वलित पर्वत और उठता हुआ हिमालय',
          or: 'ଗାଲିଚା କୁଞ୍ଚନ: ଭଙ୍ଗିଳ ପର୍ବତ ଓ ହିମାଳୟର ନିରନ୍ତର ବୃଦ୍ଧି',
        },
        subtitle: {
          en: 'Indian Plate Crashing into the Eurasian Plate at 5 cm/year',
          hi: 'भारतीय प्लेट 5 सेमी/वर्ष की गति से यूरेशियन प्लेट से टकरा रही है',
          or: 'ଭାରତୀୟ ପ୍ଲେଟ୍ ବାର୍ଷିକ ୫ ସେମି ବେଗରେ ୟୁରେସିଆନ୍ ପ୍ଲେଟ୍ ସହ ଧକ୍କା ଖାଉଛି',
        },
        visualType: 'mountains',
        dialogues: [
          {
            id: 'd25',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Think of pushing two thick rugs toward each other on a slick floor! They cannot slide past, so the fabric buckles into ridges. That is precisely how the Himalayas formed!',
              hi: 'फर्श पर दो मोटी कालीनों को आमने-सामने धक्का देकर देखिए! वे एक-दूसरे के पार नहीं जा पातीं, बल्कि बीच से मुड़कर पहाड़ बना लेती हैं। ठीक इसी तरह हिमालय बना है!',
              or: 'ଚଟାଣ ଉପରେ ଦୁଇଟି ମୋଟା ଗାଲିଚାକୁ ମୁହାଁମୁହିଁ ଠେଲିବା ପରି! ସେମାନେ ଘୁଞ୍ଚି ନପାରି ମଝିରୁ ଉପରକୁ କୁଞ୍ଚିତ ହୋଇ ଉଠନ୍ତି। ଠିକ୍ ଏହିପରି ଭାବରେ ହିମାଳୟ ପର୍ବତ ଗଠନ ହୋଇଛି!',
            },
            type: 'speech',
          },
          {
            id: 'd26',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'And that collision never stopped! The Indian Plate is still thrusting northward, pushing Mount Everest about 5 millimeters higher every single year!',
              hi: 'और यह टक्कर कभी थमी नहीं! भारतीय प्लेट आज भी उत्तर की ओर बढ़ रही है, जिससे माउंट एवरेस्ट हर साल लगभग 5 मिलीमीटर ऊंचा उठ रहा है!',
              or: 'ଏବଂ ଏହି ଧକ୍କା କେବେ ବନ୍ଦ ହୋଇନାହିଁ! ଭାରତୀୟ ପ୍ଲେଟ୍ ଆଜି ବି ଉତ୍ତରକୁ ଠେଲୁଛି, ଯାହା ଫଳରେ ମାଉଣ୍ଟ ଏଭରେଷ୍ଟ ପ୍ରତିବର୍ଷ ୫ ମିଲିମିଟର ଉପରକୁ ଉଠୁଛି!',
            },
            type: 'shout',
          },
        ],
        soundBursts: [
          { text: 'CRUUUUNNCH!', color: '#f59e0b', rotation: '-5deg', top: '15%', left: '10%' },
        ],
        scienceNote: {
          en: 'Fold mountains feature alternating upfolds (anticlines) and downfolds (synclines), formed when compressive horizontal tectonic stress causes ductile crustal deformation over millions of years.',
          hi: 'वलित पर्वतों में एंटिक्लाइन (ऊपर मुड़े शिखर) और सिंकलाइन (नीचे धंसी घाटियां) पाई जाती हैं, जो करोड़ों वर्षों के क्षैतिज दबाव से बनती हैं।',
          or: 'ଭଙ୍ଗିଳ ପର୍ବତରେ ଉପରକୁ ଉଠିଥିବା ଅଂଶକୁ ଆଣ୍ଟିକ୍କ୍ଲାଇନ୍ ଓ ତଳକୁ ଥିବା ଅଂଶକୁ ସିଙ୍କ୍ଲାଇନ୍ କୁହାଯାଏ, ଯାହା କୋଟି କୋଟି ବର୍ଷର ଚାପରୁ ସୃଷ୍ଟି।',
        },
        highlightFact: {
          en: 'Marine fossil shells from the ancient Tethys Sea are found at the summit of Mount Everest, 8,848 meters above sea level!',
          hi: 'माउंट एवरेस्ट के 8,848 मीटर ऊंचे शिखर पर प्राचीन टेथिस सागर के समुद्री जीवों के जीवाश्म पाए जाते हैं!',
          or: 'ମାଉଣ୍ଟ ଏଭରେଷ୍ଟର ୮,୮୪୮ ମିଟର ଉଚ୍ଚ ଶିଖରରେ ପ୍ରାଚୀନ ସମୁଦ୍ରର ଶାମୁକା ଓ ଜୀବାଶ୍ମ ଦେଖିବାକୁ ମିଳେ!',
        },
      },
      {
        id: 'p6-2',
        panelNumber: 14,
        title: {
          en: 'Fault-Block Mountains: Horsts & Rift Valleys',
          hi: 'भ्रंशोत्थ पर्वत: दरारें, हॉर्स्ट और रिफ्ट घाटियां',
          or: 'ଫଲ୍ଟ-ବ୍ଲକ୍ ପାହାଡ଼: ଭୂତ୍ୱକ୍ ଫାଟି ପାହାଡ଼ ଓ ଉପତ୍ୟକା ସୃଷ୍ଟି',
        },
        subtitle: {
          en: 'Brittle Crust Fractures into Giant Uplifted and Dropped Blocks',
          hi: 'कठोर क्रस्ट टूटकर बड़े-बड़े खंडों में ऊपर-नीचे खिसकती है',
          or: 'ଟାଣ ପଥର ଫାଟି କିଛି ଉପରକୁ ଉଠେ (Horst) ଓ କିଛି ତଳକୁ ଖସେ (Graben)',
        },
        visualType: 'mountains',
        dialogues: [
          {
            id: 'd27',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Brittle shear failure confirmed. Crustal yield strength exceeded along fault planes. Vertical displacement: Horst block uplift +1,200m; Graben valley subsidence -600m.',
              hi: 'कठोर क्रस्ट में दरार दर्ज। दबाव से कुछ चट्टानी खंड ऊपर उठकर पहाड़ (हॉर्स्ट) बन गए हैं और कुछ नीचे धंसकर घाटियां (ग्रैबेन) बन गए हैं।',
              or: 'ଭୂତ୍ୱକରେ ଫାଟ ସୃଷ୍ଟି। କିଛି ପଥର ବ୍ଲକ୍ ଉପରକୁ ଉଠି ପାହାଡ଼ (Horst) ଏବଂ କିଛି ତଳକୁ ଖସି ଉପତ୍ୟକା (Graben) ପାଲଟିଛି।',
            },
            type: 'thought',
          },
          {
            id: 'd28',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'When the rock is too brittle to fold, it snaps! Great examples include the Sierra Nevada in California and the Harz Mountains in Germany.',
              hi: 'जब चट्टानें इतनी कठोर हों कि मुड़ न सकें, तो वे चटक कर टूट जाती हैं! कैलिफोर्निया का सिएरा नेवादा और जर्मनी का हार्ज़ पर्वत इसके बेहतरीन उदाहरण हैं।',
              or: 'ଯେତେବେଳେ ପଥର ବଙ୍କା ହୋଇପାରେ ନାହିଁ, ତାହା ଫାଟିଯାଏ! କାଲିଫର୍ଣ୍ଣିଆର ସିଏରା ନେଭାଡା ଓ ଜର୍ମାନୀର ହାର୍ଜ ପାହାଡ଼ ଏହାର ବଡ଼ ଉଦାହରଣ।',
            },
            type: 'speech',
          },
        ],
        soundBursts: [
          { text: 'SNAP-CRACK!', color: '#38bdf8', rotation: '6deg', top: '18%', left: '70%' },
        ],
        scienceNote: {
          en: 'Tensional or compressional faulting produces steep escarpments. The uplifted blocks are termed horsts; the downdropped structural troughs are grabens or rift valleys.',
          hi: 'फॉल्टिंग से खड़ी चट्टानी ढलानें बनती हैं। ऊपर उठे खंडों को हॉर्स्ट और नीचे धंसे खंडों को ग्रैबेन (रिफ्ट घाटी) कहा जाता है।',
          or: 'ଫଲ୍ଟିଂ ଦ୍ୱାରା ଉପରକୁ ଉଠିଥିବା ପାହାଡ଼କୁ ହର୍ଷ୍ଟ ଏବଂ ତଳକୁ ଖସିଥିବା ଅଂଶକୁ ଗ୍ରାବେନ୍ କୁହାଯାଏ।',
        },
        highlightFact: {
          en: 'The East African Rift is an active continental rift where fault-block mountains flank a growing tectonic valley that will one day become a new ocean.',
          hi: 'पूर्वी अफ्रीकी रिफ्ट एक सक्रिय दरार है जहां भ्रंशोत्थ पर्वत एक घाटी को घेरे हैं जो भविष्य में एक नया महासागर बनेगी।',
          or: 'ପୂର୍ବ ଆଫ୍ରିକୀୟ ରିଫ୍ଟ ଏକ ସକ୍ରିୟ ଉଦାହରଣ, ଯାହା ଭବିଷ୍ୟତରେ ଏକ ନୂଆ ମହାସାଗରରେ ପରିଣତ ହେବ।',
        },
      },
    ],
  },
  {
    id: 'act-7-volcano-types-forecasting',
    actNumber: 7,
    romanNumeral: 'ACT VII',
    title: {
      en: 'The Four Volcano Titans & Early Warning Science',
      hi: 'चार प्रकार के ज्वालामुखी एवं विस्फोट पूर्वानुमान विज्ञान',
      or: '୪ ପ୍ରକାର ଜ୍ୱାଳାମୁଖୀ ଓ ବିସ୍ଫୋରଣ ପୂର୍ବାନୁମାନ ବିଜ୍ଞାନ',
    },
    subtitle: {
      en: 'Shields, Stratovolcanoes (Barren Island), Cinder Cones & Lava Domes',
      hi: 'शील्ड, स्ट्रैटोज्वालामुखी (बैरन द्वीप), सिंडर कोन और लावा गुंबद',
      or: 'ଶିଲ୍ଡ, ଷ୍ଟ୍ରାଟୋ (ବାରେନ୍ ଦ୍ୱୀପ), ସିଣ୍ଡର କୋନ୍ ଓ ଲାଭା ଡୋମ୍',
    },
    summary: {
      en: 'Volcanoes vary dramatically in morphology based on lava viscosity and gas explosions: broad Shields (Mauna Loa), steep symmetrical Stratovolcanoes (Mt. Fuji, Barren Island in India), bowl-cratered Cinder Cones (Parícutin), and pasty Lava Domes (St. Helens). Scientists track harmonic tremors, edifice inflation, and SO₂ gas to forecast eruptions before disaster strikes.',
      hi: 'लावे के गाढ़ेपन और गैसों के आधार पर ज्वालामुखी 4 रूपों में आते हैं: शील्ड (मौना लोआ), मिश्रित स्ट्रैटो (माउंट फूजी, भारत का बैरन द्वीप), सिंडर कोन (पारिकुटिन) और लावा डोम। वैज्ञानिक भूकंपीय कंपन, जमीन के फूलने और SO2 गैस से विस्फोट की सटीक भविष्यवाणी करते हैं।',
      or: 'ମାଗ୍ମାର ବହଳିଆପଣ ଓ ଗ୍ୟାସ୍ ଅନୁସାରେ ଜ୍ୱାଳାମୁଖୀ ୪ ପ୍ରକାରର: ଶିଲ୍ଡ, ଷ୍ଟ୍ରାଟୋ (ଭାରତର ବାରେନ୍ ଦ୍ୱୀପ), ସିଣ୍ଡର କୋନ୍ ଓ ଲାଭା ଡୋମ୍। ବୈଜ୍ଞାନିକମାନେ ଭୂକମ୍ପନ, ଭୂପୃଷ୍ଠ ଫୁଲିବା ଓ SO2 ଗ୍ୟାସ୍ରୁ ବିସ୍ଫୋରଣର ଆଗୁଆ ସୂଚନା ପାଆନ୍ତି।',
    },
    panels: [
      {
        id: 'p7-1',
        panelNumber: 15,
        title: {
          en: 'The Four Volcano Architectures: Shape Follows Chemistry',
          hi: 'चार प्रकार की संरचनाएं: जैसा मैग्मा, वैसा ज्वालामुखी',
          or: '୪ ପ୍ରକାର ଗଠନ: ମାଗ୍ମା ରସାୟନ ଅନୁସାରେ ଜ୍ୱାଳାମୁଖୀର ଆକାର',
        },
        subtitle: {
          en: 'From 100-km-wide Shields to Toothpaste-Like Lava Domes',
          hi: '100 किमी चौड़े शील्ड से लेकर टूथपेस्ट जैसे गाढ़े लावा गुंबद तक',
          or: '୧୦୦ କିମି ପ୍ରଶସ୍ତ ଶିଲ୍ଡ ଠାରୁ ଟୁଥପେଷ୍ଟ ପରି ବହଳିଆ ଲାଭା ଡୋମ୍',
        },
        visualType: 'volcano-types',
        dialogues: [
          {
            id: 'd29',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Look across our volcanic taxonomy! Low-viscosity basalt creates broad warrior shields like Mauna Loa. Moderate-viscosity gas-charged lava builds steep stratovolcanoes like Mount Fuji and India’s Barren Island!',
              hi: 'ज्वालामुखियों के प्रकार देखिए! पतला बेसाल्ट मौना लोआ जैसे चौड़े शील्ड बनाता है। गाढ़ा मैग्मा माउंट फूजी और भारत के बैरन द्वीप जैसे ऊंचे स्ट्रैटोज्वालामुखी बनाता है!',
              or: 'ଜ୍ୱାଳାମୁଖୀର ପ୍ରକାରଭେଦ ଦେଖନ୍ତୁ! ପତଳା ବାସାଲ୍ଟ ଶିଲ୍ଡ ଜ୍ୱାଳାମୁଖୀ ତିଆରି କରେ। ବହଳିଆ ମାଗ୍ମା ମାଉଣ୍ଟ ଫୁଜି ଓ ଭାରତର ବାରେନ୍ ଦ୍ୱୀପ ପରି ଷ୍ଟ୍ରାଟୋଜ୍ୱାଳାମୁଖୀ ଗଠନ କରେ!',
            },
            type: 'speech',
          },
          {
            id: 'd30',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'And when lava sprays into cinders, it piles into steep cones like Parícutin. When ultra-viscous rhyolite oozes like toothpaste, it plugs vents as a lava dome!',
              hi: 'और जब लावा हवा में उछलकर अंगारे बनता है, तो पारिकुटिन जैसा सिंडर कोन बनता है। जब टूथपेस्ट की तरह गाढ़ा लावा निकलता है, तो वह लावा गुंबद बना लेता है!',
              or: 'ଆକାଶକୁ ଅଙ୍ଗାର ଛିଞ୍ଚି ହେଲେ ସିଣ୍ଡର କୋନ୍ ହୁଏ, ଆଉ ଟୁଥପେଷ୍ଟ ପରି ବହଳିଆ ଲାଭା ମୁହଁ ଉପରେ ଜମି ଲାଭା ଡୋମ୍ ସୃଷ୍ଟି କରେ!',
            },
            type: 'speech',
          },
        ],
        scienceNote: {
          en: 'Volcano morphology is directly governed by lava viscosity ($10^2$ to $10^7$ Pa·s) and gas fraction, which dictate whether lava flows for miles or explodes into tephra fragments.',
          hi: 'ज्वालामुखी का आकार पूरी तरह लावे की श्यानता और उसमें घुली गैसों पर निर्भर करता है।',
          or: 'ଲାଭାର ବହଳିଆପଣ ଓ ଗ୍ୟାସ୍ ପରିମାଣ ଉପରେ ହିଁ ଜ୍ୱାଳାମୁଖୀର ଆକାର ସମ୍ପୂର୍ଣ୍ଣ ନିର୍ଭର କରେ।',
        },
        highlightFact: {
          en: 'Barren Island actively erupted from 30 July 2025 to 11 January 2026, triggered by a nearby M4.2 earthquake in Sept 2025, before settling into quiet fumarolic degassing in 2026!',
          hi: 'बैरन द्वीप 30 जुलाई 2025 से 11 जनवरी 2026 तक सक्रिय रूप से फटा (सितंबर 2025 में 4.2 तीव्रता के भूकंप से भड़का), और 2026 में शांत धुआं छोड़ रहा है!',
          or: 'ବାରେନ୍ ଦ୍ୱୀପ ୩୦ ଜୁଲାଇ ୨୦୨୫ ରୁ ୧୧ ଜାନୁଆରୀ ୨୦୨୬ ମଧ୍ୟରେ ଫାଟିଥିଲା (ସେପ୍ଟେମ୍ବର ୨୦୨୫ ରେ ୪.୨ ଭୂମିକମ୍ପ ପରେ), ଏବଂ ୨୦୨୬ ରେ ଶାନ୍ତ ଭାବେ ଧୂଆଁ ଛାଡୁଛି!',
        },
      },
      {
        id: 'p7-2',
        panelNumber: 16,
        title: {
          en: 'Forecasting the Fury: The Volcanologist’s Early Warning Radar',
          hi: 'प्रलय का पूर्वानुमान: ज्वालामुखी वेधशाला की चेतावनी रडार',
          or: 'ବିସ୍ଫୋରଣ ପୂର୍ବାନୁମାନ: ବୈଜ୍ଞାନିକଙ୍କ ଆଗୁଆ ଚେତାବନୀ ବ୍ୟବସ୍ଥା',
        },
        subtitle: {
          en: 'Harmonic Tremors, Edifice Swelling, SO2 Spikes & Infrared Satellites',
          hi: 'भूकंपीय कंपन, जमीन का फूलना (Tilt), SO2 गैस और उपग्रह इंफ्रारेड',
          or: 'ହାର୍ମୋନିକ୍ ଭୂକମ୍ପନ, ଭୂପୃଷ୍ଠ ଫୁଲିବା, SO2 ଗ୍ୟାସ୍ ନିର୍ଗମନ ଓ ଉପଗ୍ରହ ତଥ୍ୟ',
        },
        visualType: 'prediction',
        dialogues: [
          {
            id: 'd31',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'TELEMETRY SPIKE: Tiltmeter recording +48 microradians of flank inflation! Seismographs register continuous 1.5 Hz harmonic volcanic tremor!',
              hi: 'डेटा चेतावनी: टिल्टमीटर से पता चला है कि पहाड़ 48 माइक्रोरैडियन फूल गया है! सिस्मोग्राफ पर लगातार 1.5 हर्ट्ज का कंपन दर्ज हुआ है!',
              or: 'ବିପଦ ସଙ୍କେତ: ପାହାଡ଼ର କାନ୍ଥ ୪୮ ମାଇକ୍ରୋରାଡିଆନ୍ ଫୁଲି ଯାଇଛି! ଭୂକମ୍ପ ରେକର୍ଡର୍ରେ ନିରନ୍ତର କମ୍ପନ ଦେଖାଯାଉଛି!',
            },
            type: 'shout',
          },
          {
            id: 'd32',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Spectrometers confirm SO2 emissions jumped from 200 to 4,000 tonnes per day! Magma is breaking toward the surface. Upgrade Volcano Alert Level to RED WARNING!',
              hi: 'स्पेक्ट्रोमीटर ने पुष्टि की है कि SO2 गैस 200 से बढ़कर 4,000 टन/दिन हो गई है! मैग्मा सतह के बिल्कुल पास है। अलर्ट स्तर लाल (रेड चेतावनी) पर करें!',
              or: 'SO2 ଗ୍ୟାସ୍ ପ୍ରତିଦିନ ୨୦୦ ରୁ ବଢ଼ି ୪,୦୦୦ ଟନ୍ ହୋଇଯାଇଛି! ମାଗ୍ମା ଭୂପୃଷ୍ଠ ନିକଟକୁ ଆସିଗଲାଣି। ତୁରନ୍ତ ରେଡ୍ ଆଲର୍ଟ ଘୋଷଣା କରନ୍ତୁ!',
            },
            type: 'shout',
          },
        ],
        soundBursts: [
          { text: 'BEEEP! ALERT!', color: '#ef4444', rotation: '-8deg', top: '12%', left: '50%' },
        ],
        scienceNote: {
          en: 'Unlike tectonic earthquakes which strike without warning, volcanic eruptions are almost always preceded by weeks or days of seismic swarms, ground swelling, and volatile degassing anomalies.',
          hi: 'सामान्य भूकंपों के विपरीत, ज्वालामुखी विस्फोट से पहले हफ्तों या दिनों तक पहाड़ फूलता है, धुआं निकलता है और कंपन होता है, जिससे समय रहते लोगों को बचाया जा सकता है।',
          or: 'ଭୂକମ୍ପ ପରି ଜ୍ୱାଳାମୁଖୀ ବିସ୍ଫୋରଣ ହଠାତ୍ ହୁଏ ନାହିଁ; ଏହା ପୂର୍ବରୁ କିଛି ଦିନ ଧରି ଭୂମିକମ୍ପ, ପାହାଡ଼ ଫୁଲିବା ଓ ଗ୍ୟାସ୍ ନିର୍ଗମନ ଦେଖାଯାଏ।',
        },
        highlightFact: {
          en: 'Using multi-parametric early warning systems, volcanologists successfully evacuated over 75,000 people before Mount Pinatubo’s colossal 1991 eruption, saving thousands of lives!',
          hi: '1991 में माउंट पिनाटुबो के विस्फोट से पहले वैज्ञानिकों ने चेतावनी जारी कर 75,000 से अधिक लोगों की जान बचाई थी!',
          or: '୧୯୯୧ ରେ ମାଉଣ୍ଟ ପିନାଟୁବୋ ବିସ୍ଫୋରଣ ପୂର୍ବରୁ ବୈଜ୍ଞାନିକମାନେ ଆଗୁଆ ଚେତାବନୀ ଦେଇ ୭୫,୦୦୦ ରୁ ଅଧିକ ଲୋକଙ୍କ ଜୀବନ ବଞ୍ଚାଇ ପାରିଥିଲେ!',
        },
      },
    ],
  },
  {
    id: 'act-8-abyss-and-atolls',
    actNumber: 8,
    romanNumeral: 'ACT VIII',
    title: {
      en: 'The Living Abyss & Sinking Atolls: Geothermal Vents & Marine Landforms',
      hi: 'अतल गहराइयां एवं एटोल: हाइड्रोथर्मल वेंट, शेल्फ और कोरल रिंग',
      or: 'ଅତଳ ସମୁଦ୍ର ଓ ଏଟୋଲ୍: ଭୂତାତ୍ତ୍ୱିକ ଝରଣା, ସେଲ୍ଫ ଓ ପ୍ରବାଳ ଦ୍ୱୀପ',
    },
    subtitle: {
      en: 'Black Smokers, Chemosynthesis, Darwinian Subsidence & The Bengal Submarine Fan',
      hi: 'ब्लैक स्मोकर, बिना धूप का जीवन (कीमोसिंथेसिस), एटोल निर्माण और बंगाल का सबमरीन फैन',
      or: 'ବ୍ଲାକ୍ ସ୍ମୋକର୍, କେମୋସିନ୍ଥେସିସ୍, ଡାରୱିନ୍ଙ୍କ ଏଟୋଲ୍ ଓ ବେଙ୍ଗଲ୍ ସବମେରିନ୍ ଫ୍ୟାନ୍',
    },
    summary: {
      en: 'Journey into the ocean depths: 400°C hydrothermal vents nourishing sunlight-free chemosynthetic ecosystems, sinking volcanic islands transforming into coral atolls, continental shelves hosting fertile estuaries and deltas, and the gargantuan 3,000-km Bengal Submarine Fan.',
      hi: 'समुद्र की गहराइयों की यात्रा: 400°C गर्म हाइड्रोथर्मल वेंट जहां बिना सूर्य के प्रकाश के जीवन पनपता है, डूबते हुए ज्वालामुखियों से बनते कोरल एटोल, सुंदरवन डेल्टा और 3,000 किमी लंबा बंगाल सबमरीन फैन।',
      or: 'ଗଭୀର ସମୁଦ୍ରର ଅଦ୍ଭୁତ ଦୁନିଆ: ୪୦୦°C ଗରମ ଝରଣାରେ ବିନା ସୂର୍ଯ୍ୟାଲୋକରେ ଜୀବନ, ବୁଡ଼ିଯାଉଥିବା ଜ୍ୱାଳାମୁଖୀରୁ ଏଟୋଲ୍ ସୃଷ୍ଟି, ସୁନ୍ଦରବନ ତ୍ରିକୋଣଭୂମି ଓ ବିଶାଳ ବେଙ୍ଗଲ୍ ସବମେରିନ୍ ଫ୍ୟାନ୍।',
    },
    panels: [
      {
        id: 'p8-1',
        panelNumber: 17,
        title: {
          en: 'Undersea Geothermal Vents: The 400°C Black Smokers',
          hi: 'समुद्र के भीतर हाइड्रोथर्मल वेंट: 400°C गर्म ब्लैक स्मोकर',
          or: 'ସମୁଦ୍ର ଗର୍ଭର ହାଇଡ୍ରୋଥର୍ମାଲ୍ ଭେଣ୍ଟ୍: ୪୦୦°C ବ୍ଲାକ୍ ସ୍ମୋକର୍',
        },
        subtitle: {
          en: 'Superheated Sulfide Chimneys & Chemosynthetic Ecosystems',
          hi: 'अत्यधिक गर्म खनिज चिमनियां और रसायन-संश्लेषण पर आधारित जीवन',
          or: 'ଉତ୍ତପ୍ତ ଖଣିଜ ସ୍ତମ୍ଭ ଓ ବିନା ସୂର୍ଯ୍ୟ କିରଣରେ ଜୀବନ',
        },
        visualType: 'vents',
        dialogues: [
          {
            id: 'd33',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Depth: 2,500 meters. Ambient water temperature: 2°C. Proximity sensor reading 390°C hydrothermal effluent exiting polymetallic sulfide chimney! Hydrostatic pressure: 250 atmospheres.',
              hi: 'गहराई: 2,500 मीटर। पानी का तापमान: 2°C। चिमनी से 390°C गर्म खनिज युक्त पानी बाहर आ रहा है! दबाव: 250 वायुमंडल।',
              or: 'ଗଭୀରତା: ୨,୫୦୦ ମିଟର। ଚିମିନିରୁ ୩୯୦°C ଉତ୍ତପ୍ତ ଖଣିଜ ପାଣି ବାହାରୁଛି! ଚାପ: ୨୫୦ ବାୟୁମଣ୍ଡଳ।',
            },
            type: 'thought',
          },
          {
            id: 'd34',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Zero sunlight has ever reached this trench! Yet, looking around the chimney base, millions of giant Riftia tube worms and blind shrimp thrive on chemoautotrophic bacteria oxidizing toxic hydrogen sulfide!',
              hi: 'यहाँ कभी सूर्य की एक किरण नहीं पहुंची! फिर भी चिमनी के चारों ओर विशाल ट्यूब वर्म और झींगे जहरीली हाइड्रोजन सल्फाइड गैस से भोजन बनाने वाले बैक्टीरिया पर जीवित हैं!',
              or: 'ଏଠାରେ ସୂର୍ଯ୍ୟାଲୋକ କେବେ ପହଞ୍ଚି ନାହିଁ! ତଥାପି ବିଷାକ୍ତ ହାଇଡ୍ରୋଜେନ୍ ସଲଫାଇଡ୍ ବ୍ୟବହାର କରି ବ୍ୟାକ୍ଟେରିଆ ଖାଦ୍ୟ ତିଆରି କରନ୍ତି, ଯାହା ଉପରେ ବିଶାଳ ଟିଉବ୍ ୱାର୍ମ ବଞ୍ଚନ୍ତି!',
            },
            type: 'speech',
          },
        ],
        soundBursts: [
          { text: 'HISSSSS-BUBBLE!', color: '#38bdf8', rotation: '-6deg', top: '15%', left: '8%' },
        ],
        scienceNote: {
          en: 'Cold seawater seeps deep into basaltic fractures, is superheated to 370°C+ by underlying magma, leaches iron, copper, and sulfur, and precipitates as black smoke when contacting freezing 2°C deep-sea water.',
          hi: '2°C ठंडा समुद्री पानी दरारों में जाकर मैग्मा से 370°C+ तक गर्म होता है, सल्फर, तांबा और लोहा घोलकर बाहर निकलता है और ठंडे पानी से टकराते ही काला धुआं (खनिज) बन जाता है।',
          or: '୨°C ଥଣ୍ଡା ସମୁଦ୍ର ପାଣି ଫାଟ ଦେଇ ଯାଇ ମାଗ୍ମା ଦ୍ୱାରା ୩୭୦°C+ ଗରମ ହୁଏ ଏବଂ ବାହାରକୁ ଆସି କଳା ଖଣିଜ ଧୂଆଁ (ବ୍ଲାକ୍ ସ୍ମୋକର୍) ସୃଷ୍ଟି କରେ।',
        },
        highlightFact: {
          en: 'Under India’s Deep Ocean Mission, Indian scientists captured the first high-resolution imagery of an active hydrothermal vent 4,500 meters deep in the Indian Ocean!',
          hi: 'भारत के ‘डीप ओशन मिशन’ के तहत भारतीय वैज्ञानिकों ने हिंद महासागर में 4,500 मीटर नीचे एक सक्रिय हाइड्रोथर्मल वेंट की पहली उच्च-रिजॉल्यूशन तस्वीरें ली हैं!',
          or: 'ଭାରତର ‘ଡିପ୍ ଓସେନ୍ ମିଶନ୍’ ଅଧୀନରେ ଭାରତୀୟ ବୈଜ୍ଞାନିକମାନେ ଭାରତ ମହାସାଗରରେ ୪,୫୦୦ ମିଟର ଗଭୀରରେ ଏକ ସକ୍ରିୟ ହାଇଡ୍ରୋଥର୍ମାଲ୍ ଭେଣ୍ଟର ପ୍ରଥମ ହାଇ-ରିଜୋଲ୍ୟୁସନ୍ ଫଟୋ ଉତ୍ତୋଳନ କରିଛନ୍ତି!',
        },
      },
      {
        id: 'p8-2',
        panelNumber: 18,
        title: {
          en: 'Darwinian Subsidence: How Sinking Volcanoes Birth Coral Atolls',
          hi: 'डार्विन का धंसाव सिद्धांत: डूबते ज्वालामुखी से कोरल एटोल का जन्म',
          or: 'ଡାରୱିନ୍ଙ୍କ ଭୂ-ନିମଜ୍ଜନ ତତ୍ତ୍ୱ: ଜ୍ୱାଳାମୁଖୀ ବୁଡ଼ି ପ୍ରବାଳ ଦ୍ୱୀପ (Atoll) ସୃଷ୍ଟି',
        },
        subtitle: {
          en: 'Fringing Reef → Subsiding Barrier Reef & Lagoon → True Ring Atoll',
          hi: 'फ्रिंजिंग रीफ → बैरियर रीफ एवं लैगून → अंगूठी जैसा कोरल एटोल',
          or: 'ପ୍ରବାଳ ପରସ୍ତ → ବ୍ୟାରିୟର୍ ରୀଫ୍ ଓ ଲାଗୁନ୍ → ମୁଦି ଆକାରର ଏଟୋଲ୍',
        },
        visualType: 'atoll',
        dialogues: [
          {
            id: 'd35',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Charles Darwin solved this mystery in 1842! When a hotspot volcano becomes extinct, it cools, becomes denser, and slowly subsides into the oceanic crust.',
              hi: '1842 में चार्ल्स डार्विन ने इस रहस्य को सुलझाया था! जब ज्वालामुखी शांत होता है, तो वह ठंडा होकर धीरे-धीरे समुद्र में डूबने लगता है।',
              or: '୧୮୪୨ ରେ ଚାର୍ଲସ ଡାରୱିନ୍ ଏହି ରହସ୍ୟ ଖୋଲିଥିଲେ! ଜ୍ୱାଳାମୁଖୀ ଶାନ୍ତ ହେବା ପରେ ଥଣ୍ଡା ହୋଇ ସମୁଦ୍ର ଭିତରକୁ ବୁଡ଼ିଯାଏ।',
            },
            type: 'speech',
          },
          {
            id: 'd36',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Crucially, coral polyps need sunlight, so they grow upward at the exact same pace the island sinks! When the volcanic peak is completely drowned, a ring of coral enclosing a serene lagoon remains—an Atoll, like Lakshadweep and the Maldives!',
              hi: 'कोरल को धूप चाहिए, इसलिए वे पहाड़ डूबने की गति से ही ऊपर बढ़ते रहते हैं! जब पहाड़ पूरी तरह पानी में समा जाता है, तो सिर्फ अंगूठी जैसी कोरल रीफ और बीच में लैगून बचता है—यही एटोल है, जैसे लक्षद्वीप और मालदीव!',
              or: 'ପ୍ରବାଳ କୀଟମାନେ ସୂର୍ଯ୍ୟାଲୋକ ପାଇଁ ଉପରକୁ ବଢ଼ି ଚାଲନ୍ତି! ଜ୍ୱାଳାମୁଖୀ ସମ୍ପୂର୍ଣ୍ଣ ବୁଡ଼ିଗଲେ କେବଳ ମୁଦି ପରି ପ୍ରବାଳ ଦ୍ୱୀପ ଓ ମଝିରେ ଶାନ୍ତ ହ୍ରଦ (Lagoon) ରହିଯାଏ—ଯେପରି ଲକ୍ଷଦ୍ୱୀପ ଓ ମାଳଦ୍ୱୀପ!',
            },
            type: 'speech',
          },
        ],
        scienceNote: {
          en: 'Coral polyps secrete calcium carbonate ($CaCO_3$) reefs up to 1,500 meters thick atop drowned volcanic sea-mounts, balancing tectonic subsidence with biological upward accretion.',
          hi: 'कोरल जीव डूबे हुए ज्वालामुखी के ऊपर 1,500 मीटर तक मोटी चूनेदार चट्टानें बना देते हैं।',
          or: 'ବୁଡ଼ିଯାଇଥିବା ଜ୍ୱାଳାମୁଖୀ ଉପରେ ପ୍ରବାଳ କୀଟମାନେ ୧,୫୦୦ ମିଟର ପର୍ଯ୍ୟନ୍ତ ମୋଟା କ୍ୟାଲସିୟମ୍ କାର୍ବୋନେଟ୍ ପରସ୍ତ ଗଠନ କରନ୍ତି।',
        },
        highlightFact: {
          en: 'Bikini Atoll and the 36 islands of Lakshadweep were once towering active volcanoes as tall as Mount Fuji!',
          hi: 'लक्षद्वीप के 36 द्वीप और बिकिनी एटोल कभी माउंट फूजी जितने ऊंचे सक्रिय ज्वालामुखी थे!',
          or: 'ଲକ୍ଷଦ୍ୱୀପର ୩୬ଟି ଦ୍ୱୀପ ପ୍ରାଚୀନ କାଳରେ ମାଉଣ୍ଟ ଫୁଜି ପରି ବିଶାଳ ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ ଥିଲେ!',
        },
      },
      {
        id: 'p8-3',
        panelNumber: 19,
        title: {
          en: 'Continental Shelves, Deltas & The 3,000 km Bengal Submarine Fan',
          hi: 'महाद्वीपीय शेल्फ, सुंदरवन डेल्टा एवं 3,000 किमी लंबा बंगाल सबमरीन फैन',
          or: 'ମହାଦେଶୀୟ ସେଲ୍ଫ, ସୁନ୍ଦରବନ ତ୍ରିକୋଣଭୂମି ଓ ବେଙ୍ଗଲ୍ ସବମେରିନ୍ ଫ୍ୟାନ୍',
        },
        subtitle: {
          en: 'How Himalayan River Silt Forms the Largest Sediment Body on Earth',
          hi: 'हिमालय से बहकर आई मिट्टी कैसे पृथ्वी का सबसे विशाल तलछटी पंखा बनाती है',
          or: 'ହିମାଳୟର ପଟୁମାଟି କିପରି ପୃଥିବୀର ସବୁଠାରୁ ବଡ଼ ସାମୁଦ୍ରିକ ସଂରଚନା ଗଠନ କରେ',
        },
        visualType: 'coastal-marine',
        dialogues: [
          {
            id: 'd37',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Look at the massive sediment transport from the Himalayas! The Ganges and Brahmaputra pour over 1 billion tons of silt annually into the Bay of Bengal, building the mangrove-rich Sundarbans Delta.',
              hi: 'हिमालय से बहकर आने वाली गाद देखिए! गंगा और ब्रह्मपुत्र हर साल 1 अरब टन से अधिक मिट्टी बंगाल की खाड़ी में गिराती हैं, जिससे सुंदरवन डेल्टा बनता है।',
              or: 'ହିମାଳୟରୁ ବୋହି ଆସୁଥିବା ପଟୁମାଟି ଦେଖନ୍ତୁ! ଗଙ୍ଗା ଓ ବ୍ରହ୍ମପୁତ୍ର ବାର୍ଷିକ ୧୦୦ କୋଟି ଟନ୍ରୁ ଅଧିକ ମାଟି ବଙ୍ଗୋପସାଗରରେ ଜମା କରି ସୁନ୍ଦରବନ ଡେଲଟା ଗଠନ କରନ୍ତି।',
            },
            type: 'speech',
          },
          {
            id: 'd38',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Bathymetric sonar scan complete. Beyond the 200m shelf edge, submarine canyons funnel turbidity currents across the ocean basin, forging the Bengal Submarine Fan—3,000 km long, stretching past Sri Lanka!',
              hi: 'सोनार डेटा: 200 मीटर गहरे शेल्फ के पार पानी के भीतर खाइयां गाद को गहरे समुद्र में ले जाती हैं, जिससे 3,000 किमी लंबा बंगाल सबमरीन फैन बनता है जो श्रीलंका के भी पार जाता है!',
              or: 'ସୋନାର୍ ତଥ୍ୟ: ୨୦୦ ମିଟର ସେଲ୍ଫ ପରେ ପଟୁମାଟି ସମୁଦ୍ର ଗର୍ଭକୁ ଖସି ବେଙ୍ଗଲ୍ ସବମେରିନ୍ ଫ୍ୟାନ୍ ସୃଷ୍ଟି କରେ—ଯାହା ୩,୦୦୦ କିମି ଲମ୍ବା!',
            },
            type: 'thought',
          },
        ],
        scienceNote: {
          en: 'Submarine fans are formed by high-density underwater turbidity currents (underwater mud avalanches). The Bengal Fan is over 16 km thick in places, holding records of 50 million years of Himalayan collision.',
          hi: 'सबमरीन फैन पानी के भीतर चलने वाले मिट्टी के तूफानों से बनते हैं। बंगाल फैन 16 किमी तक मोटा है और इसमें 5 करोड़ साल का भूगर्भीय इतिहास दर्ज है।',
          or: 'ଏହା ସମୁଦ୍ର ତଳେ ପଟୁମାଟିର ଭୂସ୍ଖଳନ ଯୋଗୁଁ ସୃଷ୍ଟି। ବେଙ୍ଗଲ୍ ଫ୍ୟାନ୍ ୧୬ କିମି ପର୍ଯ୍ୟନ୍ତ ମୋଟା ଓ ଏଥିରେ ହିମାଳୟ ସୃଷ୍ଟିର ୫ କୋଟି ବର୍ଷର ଇତିହାସ ରହିଛି।',
        },
        highlightFact: {
          en: 'The sediment in the Bengal Submarine Fan weighs over 12 quadrillion tons—enough to bury the entire continent of Europe under 1,000 meters of rock!',
          hi: 'बंगाल सबमरीन फैन की मिट्टी का वजन 12 क्वाड्रिलियन टन से अधिक है—जो पूरे यूरोप को 1,000 मीटर मलबे में दबाने के लिए काफी है!',
          or: 'ବେଙ୍ଗଲ୍ ଫ୍ୟାନ୍ର ପଟୁମାଟି ସମଗ୍ର ୟୁରୋପ ମହାଦେଶକୁ ୧,୦୦୦ ମିଟର ଉଚ୍ଚ ମାଟି ତଳେ ପୋତିଦେବା ପାଇଁ ଯଥେଷ୍ଟ!',
        },
      },
      {
        id: 'p8-4',
        panelNumber: 20,
        title: {
          en: 'Tectonic Jigsaws: Major Plates, Microplates & Fracture Scars',
          hi: 'टेक्टोनिक पहेली: प्रमुख प्लेटें, माइक्रोप्लेटें एवं फ्रैक्चर स्कार',
          or: 'ଟେକ୍ଟୋନିକ୍ ବିଶ୍ୱ: ମୁଖ୍ୟ ପ୍ଲେଟ୍, ମାଇକ୍ରୋପ୍ଲେଟ୍ ଓ ଫ୍ରାକ୍ଚର ଜୋନ୍',
        },
        subtitle: {
          en: 'Burma Microplate, Juan de Fuca & The Transform San Andreas Scar',
          hi: 'बर्मा माइक्रोप्लेट, जुआन डि फूका और सैन एंड्रियास रूपांतर भ्रंश',
          or: 'ବର୍ମା ମାଇକ୍ରୋପ୍ଲେଟ୍, ଜୁଆନ୍ ଡି ଫୁକା ଓ ସାନ୍ ଆଣ୍ଡ୍ରିଆସ୍ ଫଲ୍ଟ',
        },
        visualType: 'plates-map',
        dialogues: [
          {
            id: 'd39',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Never forget the microplates! The Indo-Australian plate is actively splitting in the Indian Ocean, birthing the Capricorn Microplate—astonishingly echoing ancient Sangam texts describing the lost sunken continent of Kumari Kandam! Meanwhile, the Burma plate powers Barren Island, and Juan de Fuca fuels Mount St. Helens!',
              hi: 'माइक्रोप्लेटों को कभी मत भूलिए! विशाल इंडो-ऑस्ट्रेलियन प्लेट हिंद महासागर में टूटकर नई कैप्रिकॉर्न प्लेट बना रही है—जो प्राचीन तमिल संगम ग्रंथों में वर्णित खोए हुए जलमग्न महाद्वीप "कुमारी कंदम" की याद दिलाती है! वहीं बर्मा प्लेट बैरन द्वीप को जलाती है!',
              or: 'ମାଇକ୍ରୋପ୍ଲେଟ୍ଗୁଡ଼ିକ ଅତ୍ୟନ୍ତ ଚମତ୍କାର! ଇଣ୍ଡୋ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍ ଭାଙ୍ଗି କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ ସୃଷ୍ଟି କରୁଛି—ଯାହା ପ୍ରାଚୀନ ସଙ୍ଗମ ସାହିତ୍ୟର ଜଳମଗ୍ନ "କୁମାରୀ କନ୍ଦମ୍" ସହ ଯୋଡ଼ି ହୋଇଛି! ଏହା ସହ ବର୍ମା ପ୍ଲେଟ୍ ବାରେନ୍ ଦ୍ୱୀପକୁ ଶକ୍ତି ଦିଏ!',
            },
            type: 'speech',
          },
          {
            id: 'd40',
            character: 'narrator',
            characterName: { en: 'Geological Chronicle', hi: 'भूगर्भीय विवरण', or: 'ଭୂତାତ୍ତ୍ୱିକ ଇତିହାସ' },
            avatarIcon: 'book-open',
            text: {
              en: 'And where plates scrape past horizontally, deep transform fracture zones score the ocean abyss, mirrored on land by seismic giants like California’s San Andreas Fault. Earth is an interconnected, ceaseless machine of fire, rock, and water!',
              hi: 'और जहां प्लेटें एक-दूसरे से रगड़ खाती हैं, वहां समुद्र तल पर गहरे फ्रैक्चर और जमीन पर सैन एंड्रियास जैसे विशाल फॉल्ट बनते हैं। पृथ्वी आग, चट्टान और पानी की एक शाश्वत जीवंत मशीन है!',
              or: 'ଯେଉଁଠି ପ୍ଲେଟ୍ଗୁଡ଼ିକ ଘସି ହୁଅନ୍ତି, ସମୁଦ୍ରରେ ଗଭୀର ଫାଟ ଓ ଭୂଭାଗରେ ସାନ୍ ଆଣ୍ଡ୍ରିଆସ୍ ପରି ଫଲ୍ଟ ଦେଖାଯାଏ। ପୃଥିବୀ ଏକ ଅନନ୍ତ ଜୀବନ୍ତ ସଂରଚନା!',
            },
            type: 'caption',
          },
        ],
        scienceNote: {
          en: 'Internal plate deformation in the Central Indian Basin confirms the Indo-Australian plate is splitting into Indian, Australian, and Capricorn plates along a 1,000-km diffuse fault zone.',
          hi: 'मध्य हिंद महासागरीय बेसिन में प्लेट के आंतरिक खिंचाव से पुष्टि हुई है कि इंडो-ऑस्ट्रेलियन प्लेट भारतीय, ऑस्ट्रेलियाई और कैप्रिकॉर्न प्लेट में विभाजित हो रही है।',
          or: 'ଭାରତ ମହାସାଗରରେ ଆଭ୍ୟନ୍ତରୀଣ ଫାଟ ଯୋଗୁଁ ଇଣ୍ଡୋ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍ ଭାରତୀୟ, ଅଷ୍ଟ୍ରେଲିଆନ୍ ଓ କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ରେ ବିଭାଜିତ ହେଉଛି।',
        },
        highlightFact: {
          en: 'Ancient Tamil Sangam literature recorded Kumari Kandam (Kumari Nadu), a vast land bridging South India to Australia before ocean cataclysms—a poetic parallel to the newly splitting Capricorn Plate!',
          hi: 'प्राचीन तमिल संगम साहित्य में दक्षिण भारत से ऑस्ट्रेलिया तक फैली भूमि ‘कुमारी कंदम’ का वर्णन मिलता है, जो आज की विभाजित होती कैप्रिकॉर्न प्लेट से अद्भुत समानता रखती है!',
          or: 'ପ୍ରାଚୀନ ତାମିଲ ସଙ୍ଗମ ସାହିତ୍ୟରେ ଦକ୍ଷିଣ ଭାରତରୁ ଅଷ୍ଟ୍ରେଲିଆ ପର୍ଯ୍ୟନ୍ତ ବ୍ୟାପ୍ତ ‘କୁମାରୀ କନ୍ଦମ୍’ର ବର୍ଣ୍ଣନା ରହିଛି, ଯାହା ଆଜିର କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ ସହ ଆଶ୍ଚର୍ଯ୍ୟଜନକ ସାମଞ୍ଜସ୍ୟ ରଖେ!',
        },
      },
    ],
  },
  {
    id: 'act-9-samudrayaan-abyss',
    actNumber: 9,
    romanNumeral: 'ACT IX',
    title: {
      en: 'The 6,000-Meter Descent: Samudrayaan, Deep Vents & The Sunken Land',
      hi: '6,000 मीटर अतल गहराइयां: समुद्रयान, गहरे वेंट एवं जलमग्न भूभाग',
      or: '୬,୦୦୦ ମିଟର ଗଭୀରତା: ସମୁଦ୍ରଯାନ, ସାମୁଦ୍ରିକ ଝରଣା ଓ କୁମାରୀ କନ୍ଦମ୍',
    },
    subtitle: {
      en: 'Matsya 6000 Titanium Submersible, Polymetallic Nodules & The Kumari Kandam Mystery',
      hi: 'मत्स्य 6000 टाइटेनियम सबमर्सिबल, पॉलीमेटैलिक नोड्यूल और कुमारी कंदम का रहस्य',
      or: 'ମତ୍ସ୍ୟ ୬୦୦୦ ଟାଇଟାନିୟମ୍ ଯାନ, ଖଣିଜ ନୋଡ୍ୟୁଲ୍ ଓ କୁମାରୀ କନ୍ଦମ୍ ରହସ୍ୟ',
    },
    summary: {
      en: 'Aboard Bharat’s indigenous Matsya 6000 crewed submersible, our scientists brave crushing 600-atmosphere pressures down to 6,000 meters in the Central Indian Ocean. Here, potato-sized polymetallic nodules fuel clean energy futures, 400°C black smokers reveal life’s cosmic beginnings, and tectonic rifting whispers echoes of ancient Kumari Kandam.',
      hi: 'भारत के स्वदेशी मत्स्य 6000 मानवयुक्त सबमर्सिबल पर सवार होकर हमारे वैज्ञानिक 6,000 मीटर की गहराई पर 600 वायुमंडलीय दबाव का सामना करते हैं। यहाँ कोबाल्ट और निकल से भरे पॉलीमेटैलिक नोड्यूल, 400°C गर्म ब्लैक स्मोकर और विखंडित होती कैप्रिकॉर्न प्लेट प्राचीन कुमारी कंदम के इतिहास को उजागर करती है।',
      or: 'ଭାରତର ସ୍ୱଦେଶୀ ମତ୍ସ୍ୟ ୬୦୦୦ ଯାନରେ ବୈଜ୍ଞାନିକମାନେ ୬,୦୦୦ ମିଟର ଗଭୀରକୁ ଯାଇ ୬୦୦ ବାୟୁମଣ୍ଡଳୀୟ ଚାପରେ ପଲିମେଟାଲିକ୍ ନୋଡ୍ୟୁଲ୍, ୪୦୦°C ଗରମ ଝରଣା ଓ କୁମାରୀ କନ୍ଦମ୍ର ଭୂତାତ୍ତ୍ୱିକ ରହସ୍ୟ ଅନୁସନ୍ଧାନ କରନ୍ତି।',
    },
    panels: [
      {
        id: 'p9-1',
        panelNumber: 21,
        title: {
          en: 'Project Samudrayaan: Inside the Titanium Personnel Sphere',
          hi: 'प्रोजेक्ट समुद्रयान: टाइटेनियम स्फीयर के भीतर 6,000 मीटर की डुबकी',
          or: 'ପ୍ରୋଜେକ୍ଟ ସମୁଦ୍ରଯାନ: ଟାଇଟାନିୟମ୍ ଗୋଲକରେ ୬,୦୦୦ ମିଟର ଯାତ୍ରା',
        },
        subtitle: {
          en: '600 Atmospheres of Crushing Pressure · Harvesting EV Battery Critical Metals',
          hi: '600 वायुमंडलीय दबाव · स्वच्छ ऊर्जा और ईवी बैटरी के दुर्लभ खनिज',
          or: '୬୦୦ ବାୟୁମଣ୍ଡଳ ଚାପ · ଇଭି ବ୍ୟାଟେରୀ ପାଇଁ ଆବଶ୍ୟକୀୟ ଧାତୁ',
        },
        visualType: 'samudrayaan',
        dialogues: [
          {
            id: 'd41',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Depth meter passing 5,200 meters! The 80mm titanium alloy hull of Matsya 6000 is withstanding over 520 atmospheres of hydrostatic squeeze. Outside our viewport, the abyssal floor is glistening with potato-sized nodules!',
              hi: 'गहराई 5,200 मीटर पार! मत्स्य 6000 का 80 मिमी मोटा टाइटेनियम कवच 520 वायुमंडलीय दबाव झेल रहा है। व्यू-पोर्ट के बाहर समुद्र तल आलू जैसे पॉलीमेटैलिक नोड्यूल से ढका हुआ है!',
              or: 'ଗଭୀରତା ୫,୨୦୦ ମିଟର ପାର୍! ମତ୍ସ୍ୟ ୬୦୦୦ ର ୮୦ ମିମି ଟାଇଟାନିୟମ୍ ଖୋଳ ୫୨୦ ବାୟୁମଣ୍ଡଳ ଚାପ ସହୁଛି। ବାହାରେ ସମୁଦ୍ର ତଳେ ଆଳୁ ପରି ପଲିମେଟାଲିକ୍ ନୋଡ୍ୟୁଲ୍ ବିଛେଇ ହୋଇଛି!',
            },
            type: 'speech',
          },
          {
            id: 'd42',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Spectrometry scan of nodules: Manganese 28%, Nickel 1.4%, Copper 1.2%, Cobalt 0.25%. Crucial strategic independence for electric vehicle batteries and green energy grids confirmed!',
              hi: 'नोड्यूल का स्पेक्ट्रोमेट्री स्कैन: मैंगनीज 28%, निकल 1.4%, तांबा 1.2%, कोबाल्ट 0.25%। ईवी बैटरी और हरित ऊर्जा के लिए रणनीतिक आत्मनिर्भरता की पुष्टि!',
              or: 'ନୋଡ୍ୟୁଲ୍ର ତଥ୍ୟ: ମାଙ୍ଗାନିଜ୍ ୨୮%, ନିକେଲ୍ ୧.୪%, ତମ୍ବା ୧.୨%, କୋବାଲ୍ଟ ୦.୨୫%। ଇଭି ବ୍ୟାଟେରୀ ପାଇଁ ଭାରତର ଆତ୍ମନିର୍ଭରଶୀଳତା ସୁନିଶ୍ଚିତ!',
            },
            type: 'thought',
          },
        ],
        soundBursts: [
          { text: 'CREEEAK-CLANK!', color: '#38bdf8', rotation: '-4deg', top: '15%', left: '10%' },
        ],
        scienceNote: {
          en: 'Matsya 6000 uses a 2.1-meter-diameter titanium alloy personnel sphere (80mm thick Ti-6Al-4V ELI) fabricated via Electron Beam Welding (EBW) by ISRO VSSC. In a high vacuum (<10⁻⁴ mbar), high-velocity electrons penetrate deeply with virtually zero Heat-Affected Zone (HAZ), eliminating micro-porosity to withstand crushing 600-bar hydrostatic pressure.',
          hi: 'मत्स्य 6000 में इसरो (VSSC) द्वारा इलेक्ट्रॉन-बीम वेल्डिंग (EBW) से निर्मित 80 मिमी मोटा टाइटेनियम स्फीयर (Ti-6Al-4V) लगा है। निर्वात में की गई यह वेल्डिंग किसी भी सूक्ष्म-छिद्र को समाप्त कर देती है, जिससे यह 6,000 मीटर (600 बार) का असीम दबाव सुरक्षित झेलता है।',
          or: 'ମତ୍ସ୍ୟ ୬୦୦୦ ରେ ଇସ୍ରୋ ଦ୍ୱାରା ଇଲେକ୍ଟ୍ରନ୍-ବିମ୍ ୱେଲ୍ଡିଂ (EBW) ରେ ନିର୍ମିତ ୮୦ ମିମି ଟାଇଟାନିୟମ୍ ଗୋଲକ ରହିଛି, ଯାହା ବିନା କୌଣସି ଛିଦ୍ରରେ ୬୦୦ ବାର୍ ଚାପ ସହ୍ୟ କରିବାକୁ ସକ୍ଷମ।',
        },
        highlightFact: {
          en: 'With Project Samudrayaan, Bharat joins the elite 6-nation deep-submergence club (US, Russia, France, Japan, China, India), securing strategic seabed minerals (Cobalt, Nickel, Copper, Manganese) and advancing heavy aerospace-grade metallurgy!',
          hi: 'प्रोजेक्ट समुद्रयान के साथ भारत अमेरिका, रूस, फ्रांस, जापान और चीन के साथ विश्व के 6 एलीट देशों के क्लब में शामिल हो गया है, जो रणनीतिक समुद्री खनिजों (कोबाल्ट, निकल, तांबा) में आत्मनिर्भरता सुनिश्चित करता है!',
          or: 'ପ୍ରୋଜେକ୍ଟ ସମୁଦ୍ରଯାନ ସହ ଭାରତ ପୃଥିବୀର ୬ଷ୍ଠ ଦେଶ ଭାବେ ୬,୦୦୦ ମିଟର ଗଭୀର ମାନବଯୁକ୍ତ ସମୁଦ୍ର ଯାନ ବିକଶିତ କରି ଖଣିଜ ସମ୍ପଦରେ ଆତ୍ମନିର୍ଭରଶୀଳ ହୋଇଛି!',
        },
      },
      {
        id: 'p9-2',
        panelNumber: 22,
        title: {
          en: 'The Central Indian Ridge Vents & The Sunken Cradle',
          hi: 'सेंट्रल इंडियन रिज के वेंट एवं जलमग्न सभ्यता का रहस्य',
          or: 'ଭାରତ ମହାସାଗର ଝରଣା ଓ ପ୍ରାଚୀନ କୁମାରୀ କନ୍ଦମ୍',
        },
        subtitle: {
          en: 'Polymetallic Sulphides (Gold/Silver) & The Geological Reality of Kumari Kandam',
          hi: 'सोने-चांदी से भरे सल्फाइड एवं कुमारी कंदम की भूगर्भीय वास्तविकता',
          or: 'ସୁନା-ରୂପାର ସଲଫାଇଡ୍ ଖଣିଜ ଓ କୁମାରୀ କନ୍ଦମ୍ର ଭୌଗୋଳିକ ସତ୍ୟ',
        },
        visualType: 'samudrayaan',
        dialogues: [
          {
            id: 'd43',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Deploying robotic manipulator arm near the hydrothermal chimney! The polymetallic sulphides precipitating here carry high-grade gold, silver, copper, and zinc. Ancient Sanskrit texts called this undersea fire "Vadavamukha", and the Rasaratna Samucchaya noted: "तत्र गन्धकयोगेन नश्यति क्रूरता रसे..."—volcanic sulfur purifies raw minerals into stable treasures!',
              hi: 'हाइड्रोथर्मल चिमनी के पास रोबोटिक आर्म सक्रिय! यहाँ निकलने वाले सल्फाइड में सोना, चांदी, तांबा और जस्ता प्रचुर मात्रा में हैं। प्राचीन संस्कृत ग्रंथों में इसे "वडवामुख" कहा गया, और रसरत्नसमुच्चय में लिखा है: "तत्र गन्धकयोगेन नश्यति क्रूरता रसे..."—ज्वालामुखीय गंधक खनिजों को शुद्ध कर मूल्यवान धातु बनाता है!',
              or: 'ହାଇଡ୍ରୋଥର୍ମାଲ୍ ଚିମିନି ନିକଟରେ ରୋବୋଟିକ୍ ହାତ ସକ୍ରିୟ! ଏଠାରେ ସୁନା, ରୂପା, ତମ୍ବା ଓ ଜିଙ୍କ୍ ମିଳିବା ସହ ପ୍ରାଚୀନ ସଂସ୍କୃତ ରସାୟନ ଗ୍ରନ୍ଥର "ବଡ଼ବାଗ୍ନି" ଓ ଗନ୍ଧକ ଧାତୁ ଶୋଧନର ପ୍ରତ୍ୟକ୍ଷ ପ୍ରମାଣ ମିଳେ!',
            },
            type: 'speech',
          },
          {
            id: 'd44',
            character: 'narrator',
            characterName: { en: 'Geological Chronicle', hi: 'भूगर्भीय विवरण', or: 'ଭୂତାତ୍ତ୍ୱିକ ଇତିହାସ' },
            avatarIcon: 'book-open',
            text: {
              en: 'Beneath these waters, the Indo-Australian plate tears to birth the Capricorn microplate, echoing the ancient Tamil Sangam memory in Silappadhikaram: "பஃறுளி யாற்றுடன் பன்மலையடுக்கத்துக் குமரிக் கோடும் கொடுங்கடல் கொள்ள..." (The roaring ocean swallowed the Pahruli River and Kumari mountain ranges). Earth’s deep geology and ancient literature unite in the abyss!',
              hi: 'यहाँ समुद्र तल के नीचे इंडो-ऑस्ट्रेलियन प्लेट टूटकर कैप्रिकॉर्न प्लेट को जन्म दे रही है, जो शिलप्पादिकारम के प्राचीन संगम श्लोक "பஃறுளி யாற்றுடன்..." (उफनते समुद्र ने पहरुली नदी और कुमारी पर्वत श्रृंखलाओं को निगल लिया) की टेक्टोनिक स्मृति को जीवंत करती है!',
              or: 'ସମୁଦ୍ର ଗର୍ଭରେ ଇଣ୍ଡୋ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍ ଭାଙ୍ଗି କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ ସୃଷ୍ଟି ହେଉଛି, ଯାହା ଶିଲପ୍ପାଧିକାରମ୍ରେ ବର୍ଣ୍ଣିତ ସମୁଦ୍ର ମାଡ଼ି ଆସିବା ଓ କୁମାରୀ କନ୍ଦମ୍ ବୁଡ଼ିଯିବାର ଭୌଗୋଳିକ ପ୍ରମାଣ ଦିଏ!',
            },
            type: 'caption',
          },
        ],
        scienceNote: {
          en: 'During the Last Glacial Maximum (20,000 years ago), sea levels were 120m lower, completely exposing the southern Indian continental shelf off Kanyakumari before post-glacial sea level rise inundated it—providing a scientific foundation for Sangam deluge lore (*Kadal Kol*).',
          hi: '20,000 साल पहले अंतिम हिमयुग में समुद्र का स्तर 120 मीटर नीचे था, जिससे कन्याकुमारी के आगे का विशाल महाद्वीपीय शेल्फ सूखी जमीन था, जो बर्फ पिघलने पर जलमग्न हो गया।',
          or: '୨୦,୦୦୦ ବର୍ଷ ପୂର୍ବେ ହିମଯୁଗରେ ସମୁଦ୍ର ପତ୍ତନ ୧୨୦ ମିଟର ତଳେ ଥିଲା, ଯାହା ଫଳରେ କନ୍ୟାକୁମାରୀ ନିକଟବର୍ତ୍ତୀ ବିଶାଳ ଭୂଭାଗ ଶୁଖିଲା ଥିଲା ଏବଂ ବରଫ ତରଳିବା ପରେ ବୁଡ଼ିଯାଇଥିଲା।',
        },
        highlightFact: {
          en: 'Gondwana supercontinent reconstruction proves India, Madagascar, Australia, and Antarctica were joined 120 million years ago, verifying that Southern India and Australia were once truly connected!',
          hi: 'गोंडवानालैंड के पुनर्निर्माण से सिद्ध होता है कि 12 करोड़ साल पहले भारत, मेडागास्कर और ऑस्ट्रेलिया आपस में जुड़े हुए थे!',
          or: '୧୨ କୋଟି ବର୍ଷ ପୂର୍ବେ ଭାରତ, ମାଡାଗାସ୍କାର ଓ ଅଷ୍ଟ୍ରେଲିଆ ପ୍ରକୃତରେ ଏକାଠି ଯୋଡ଼ି ହୋଇ ରହିଥିଲେ!',
        },
      },
    ],
  },
  {
    id: 'act-10-volcanic-power-habitats',
    actNumber: 10,
    romanNumeral: 'ACT X',
    title: {
      en: 'Taming the Fire: Supercritical Volcanic Power & Deep Sea Habitats',
      hi: 'अग्नि पर विजय: सुपरक्रिटिकल ज्वालामुखी ऊर्जा एवं गहरे समुद्री आवास',
      or: 'ଅଗ୍ନି ନିୟନ୍ତ୍ରଣ: ସୁପରକ୍ରିଟିକାଲ୍ ଜ୍ୱାଳାମୁଖୀ ଶକ୍ତି ଓ ସମୁଦ୍ର-ତଳ ଗବେଷଣାଗାର',
    },
    subtitle: {
      en: '100 MW Magma Wells, Iceland IDDP, Kenya Olkaria & Bharat’s Ocean Triad',
      hi: '100 मेगावाट मैग्मा कुएं, आइसलैंड IDDP, केन्या ओल्कारिया और भारत का महासागरीय तंत्र',
      or: '୧୦୦ ମେଗାୱାଟ୍ ମାଗ୍ମା ଶକ୍ତି, ଆଇସଲ୍ୟାଣ୍ଡ IDDP, କେନିଆ ଓଲକାରିଆ ଓ ଭାରତୀୟ ସମୁଦ୍ର ପ୍ରଯୁକ୍ତି',
    },
    summary: {
      en: 'Humanity reaches the technological pinnacle of planetary thermodynamics: drilling into magma fringes to harvest supercritical water at 400°C for 10x clean electricity, while modular seabed habitats and ISRO-engineered titanium hulls explore the deepest abyss.',
      hi: 'मानवता ग्रहीय ऊष्मागतिकी के शिखर पर पहुंची: मैग्मा के किनारों पर ड्रिलिंग करके 400°C पर सुपरक्रिटिकल पानी से 10 गुना स्वच्छ बिजली प्राप्त करना, जबकि मॉड्यूलर समुद्री आवास और इसरो द्वारा निर्मित टाइटेनियम पनडुब्बियां अतल गहराइयों की खोज कर रही हैं।',
      or: 'ପୃଥିବୀର ଅତ୍ୟାଧୁନିକ ଥର୍ମୋଡାଇନାମିକ୍ସ: ମାଗ୍ମା ପାଖରେ ୪୦୦°C ରେ ସୁପରକ୍ରିଟିକାଲ୍ ବାଷ୍ପରୁ ୧୦ ଗୁଣ ଅଧିକ ବିଜୁଳି ଉତ୍ପାଦନ, ଏବଂ ଇସ୍ରୋ ନିର୍ମିତ ଟାଇଟାନିୟମ୍ ଯାନରେ ସମୁଦ୍ର ଅନୁସନ୍ଧାନ।',
    },
    panels: [
      {
        id: 'p10-1',
        panelNumber: 23,
        title: {
          en: 'Supercritical Volcanic Wells: Harvesting 100 MW Clean Electricity',
          hi: 'सुपरक्रिटिकल ज्वालामुखी कुएं: एक कुएं से 100 मेगावाट स्वच्छ बिजली',
          or: 'ସୁପରକ୍ରିଟିକାଲ୍ ଜ୍ୱାଳାମୁଖୀ କୂଅ: ଗୋଟିଏ କୂଅରୁ ୧୦୦ MW ସ୍ୱଚ୍ଛ ବିଜୁଳି',
        },
        subtitle: {
          en: 'Thermodynamics of Supercritical Water (>374°C, >222 bars) · Iceland IDDP & Kenya Olkaria',
          hi: 'सुपरक्रिटिकल पानी का भौतिक विज्ञान (>374°C, >222 बार) · आइसलैंड IDDP एवं केन्या ओल्कारिया',
          or: 'ସୁପରକ୍ରିଟିକାଲ୍ ବାଷ୍ପ ବିଜ୍ଞାନ (>୩୭୪°C, >୨୨୨ ବାର୍) · ଆଇସଲ୍ୟାଣ୍ଡ ଓ କେନିଆ ଅଭିଯାନ',
        },
        visualType: 'supercritical-power',
        dialogues: [
          {
            id: 'd45',
            character: 'maya',
            characterName: { en: 'Dr. Maya Thorne', hi: 'डॉ. माया थोर्न', or: 'ଡଃ ମାୟା ଥର୍ଣ୍ଣ' },
            avatarIcon: 'user-check',
            text: {
              en: 'Look at the turbine RPM! At 450°C and 250 bars, water crosses its critical threshold. It has the high density of a liquid but zero surface tension like a gas! A single volcanic well generates 50 to 100 Megawatts—nearly ten times a standard geothermal well!',
              hi: 'टरबाइन की गति देखिए! 450°C और 250 बार पर पानी सुपरक्रिटिकल अवस्था में पहुंच जाता है। इसका घनत्व तरल जैसा और चिपचिपापन शून्य होता है! एक अकेला ज्वालामुखी कुआं 100 मेगावाट तक बिजली बनाता है—पारंपरिक कुओं से 10 गुना अधिक!',
              or: 'ଟର୍ବାଇନ୍ ଘୂର୍ଣ୍ଣନ ଦେଖନ୍ତୁ! ୪୫୦°C ଓ ୨୫୦ ବାର୍ରେ ପାଣି ସୁପରକ୍ରିଟିକାଲ୍ ହୋଇଯାଏ। ଏକମାତ୍ର ଜ୍ୱାଳାମୁଖୀ କୂଅରୁ ୧୦୦ MW ବିଜୁଳି ଉତ୍ପନ୍ନ ହୁଏ—ଯାହା ସାଧାରଣ କୂଅ ଠାରୁ ୧୦ ଗୁଣ ଅଧିକ!',
            },
            type: 'speech',
          },
          {
            id: 'd46',
            character: 'ananya',
            characterName: { en: 'Prof. Ananya Sen', hi: 'प्रो. अनन्या सेन', or: 'ପ୍ରଫେସର ଅନନ୍ୟା ସେନ' },
            avatarIcon: 'sparkles',
            text: {
              en: 'Kenya’s Olkaria plant already generates over 860 MW directly inside an active volcanic rift, supplying almost half of the country’s entire national power! Volcanism isn’t just destructive—it is Earth’s ultimate clean power generator!',
              hi: 'केन्या का ओल्कारिया संयंत्र एक सक्रिय ज्वालामुखी के भीतर से 860+ मेगावाट बिजली बनाता है, जो उनके पूरे देश की आधी बिजली की जरूरत पूरी करता है! ज्वालामुखी केवल विनाश नहीं, पृथ्वी का सबसे बड़ा स्वच्छ ऊर्जा स्रोत हैं!',
              or: 'କେନିଆର ଓଲକାରିଆ ପ୍ଲାଣ୍ଟ ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ ମଧ୍ୟରୁ ୮୬୦ MW ରୁ ଅଧିକ ବିଜୁଳି ଉତ୍ପାଦନ କରେ, ଯାହା ସେମାନଙ୍କ ସମଗ୍ର ଦେଶର ଅଧା ବିଦ୍ୟୁତ ଯୋଗାଏ!',
            },
            type: 'shout',
          },
        ],
        soundBursts: [
          { text: 'WHOOOOSH-100MW!', color: '#f59e0b', rotation: '-5deg', top: '15%', left: '8%' },
        ],
        scienceNote: {
          en: 'Beyond water’s thermodynamic critical point (374.14°C, 22.064 MPa), liquid and vapour phases merge into a single supercritical fluid with extremely high specific enthalpy (>3,000 kJ/kg), dramatically increasing turbine electrical conversion efficiency.',
          hi: 'जल के क्रांतिक बिंदु (374°C, 22.1 MPa) के पार तरल और वाष्प एक हो जाते हैं, जिससे उत्पन्न सुपरक्रिटिकल भाप अत्यधिक ऊर्जा घनत्व के साथ टरबाइन चलाती है।',
          or: 'ଜଳର କ୍ରାନ୍ତିକ ବିନ୍ଦୁ (୩୭୪°C, ୨୨.୧ MPa) ପରେ ତରଳ ଓ ବାଷ୍ପ ମିଶି ଅତ୍ୟଧିକ ଶକ୍ତି ପ୍ରଦାନ କରନ୍ତି।',
        },
        highlightFact: {
          en: 'The Iceland Deep Drilling Project (IDDP-1) accidentally drilled into a molten magma chamber at 2.1 km depth, creating the hottest geothermal well in human history at 450°C and producing 36 MW of electrical capacity!',
          hi: 'आइसलैंड IDDP-1 ने गलती से 2.1 किमी गहराई पर सीधे पिघले हुए मैग्मा चैंबर में ड्रिल कर दिया, जिससे 450°C पर दुनिया का सबसे गर्म भू-तापीय कुआं बना!',
          or: 'ଆଇସଲ୍ୟାଣ୍ଡ IDDP ପ୍ରକଳ୍ପ ସିଧାସଳଖ ତରଳ ମାଗ୍ମା ଚାମ୍ବରକୁ ଖୋଳି ୪୫୦°C ରେ ପୃଥିବୀର ସର୍ବାଧିକ ଉତ୍ତପ୍ତ କୂଅ ସୃଷ୍ଟି କରିଥିଲା!',
        },
      },
      {
        id: 'p10-2',
        panelNumber: 24,
        title: {
          en: 'Bharat’s Deep Ocean Triad & The Modular Seabed Habitats',
          hi: 'भारत का महासागरीय त्रिशूल एवं मॉड्यूलर समुद्री आवास',
          or: 'ଭାରତୀୟ ସମୁଦ୍ର ବିଜ୍ଞାନ ଓ ସମୁଦ୍ର-ତଳ ଗବେଷଣାଗାର',
        },
        subtitle: {
          en: 'NIOT, NIO, INCOIS & Permanent Undersea Habitats (20–100m)',
          hi: 'एनआईओटी, एनआईओ, इनकोइस एवं स्थायी समुद्र-तल प्रयोगशालाएं',
          or: 'NIOT, NIO, INCOIS ଓ ସ୍ଥାୟୀ ସମୁଦ୍ର ଗବେଷଣାଗାର',
        },
        visualType: 'samudrayaan',
        dialogues: [
          {
            id: 'd47',
            character: 'jax',
            characterName: { en: 'JAX-9 Mantle Probe', hi: 'जैक्स-9 प्रोब', or: 'ଜ୍ୟାକ୍ସ-୯ ପ୍ରୋବ୍' },
            avatarIcon: 'bot',
            text: {
              en: 'Telemetry sync established with NIOT Chennai, NIO Goa, and INCOIS Hyderabad! The 80mm titanium sphere fabricated with ISRO VSSC electron-beam welding shows zero structural deflection at 600 bars. All life support optimal.',
              hi: 'एनआईओटी चेन्नई, एनआईओ गोवा और इनकोइस हैदराबाद से डेटा सिंक स्थापित! इसरो द्वारा इलेक्ट्रॉन-बीम वेल्डिंग से निर्मित 80 मिमी टाइटेनियम कवच 600 बार दबाव में भी पूर्ण सुरक्षित है!',
              or: 'NIOT ଚେନ୍ନାଇ, NIO ଗୋଆ ଓ INCOIS ହାଇଦ୍ରାବାଦ ସହ ସଂଯୋଗ ସ୍ଥାପିତ! ଇସ୍ରୋ ନିର୍ମିତ ୮୦ ମିମି ଟାଇଟାନିୟମ୍ ଖୋଳ ୬୦୦ ବାର୍ ଚାପରେ ସମ୍ପୂର୍ଣ୍ଣ ସୁରକ୍ଷିତ!',
            },
            type: 'thought',
          },
          {
            id: 'd48',
            character: 'narrator',
            characterName: { en: 'Geological Chronicle', hi: 'भूगर्भीय विवरण', or: 'ଭୂତାତ୍ତ୍ୱିକ ଇତିହାସ' },
            avatarIcon: 'book-open',
            text: {
              en: 'From the fiery mantle convection rising from the 6,000°C core to 400°C geothermal vents, active volcanic power plants, and 6,000m submersibles—human ingenuity now navigates Earth’s extremes with courage, science, and reverence!',
              hi: '6,000°C कोर से उठने वाली मेंटल संवहन धाराओं से लेकर 400°C गर्म भू-तापीय वेंट, ज्वालामुखी ऊर्जा संयंत्र और 6,000 मीटर गहरे समुद्रयान तक—मानवता ज्ञान और साहस के साथ पृथ्वी के रहस्यों को उजागर कर रही है!',
              or: '୬,୦୦୦°C କୋର୍ରୁ ଉଠୁଥିବା ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍ ଠାରୁ ୪୦୦°C ସମୁଦ୍ର ଝରଣା, ଜ୍ୱାଳାମୁଖୀ ବିଜୁଳି ଓ ୬,୦୦୦ ମିଟର ସମୁଦ୍ରଯାନ ପର୍ଯ୍ୟନ୍ତ—ମାନବ ବିଜ୍ଞାନ ଆଜି ପୃଥିବୀର ଅତଳ ରହସ୍ୟ ଉଦ୍ଘାଟନ କରୁଛି!',
            },
            type: 'caption',
          },
        ],
        scienceNote: {
          en: 'India’s MoES framework integrates NIOT (deep-sea hardware engineering), NIO (chemical and biological oceanography), and INCOIS (tsunami forecasting and satellite data), bridging ancient Sangam Neythal maritime mastery with 21st-century deep-sea robotics.',
          hi: 'भारत का पृथ्वी विज्ञान मंत्रालय एनआईओटी (हार्डवेयर), एनआईओ (जैविक विज्ञान) और इनकोइस (त्सुनामी चेतावनी) को एकजुट कर संगम काल के समुद्री ज्ञान को आधुनिक रोबोटिक्स से जोड़ता है।',
          or: 'ଭାରତ ସରକାରଙ୍କ ସମୁଦ୍ର ବିଜ୍ଞାନ ସଂସ୍ଥାଗୁଡ଼ିକ ପ୍ରାଚୀନ ସଙ୍ଗମ ସାହିତ୍ୟର ସାମୁଦ୍ରିକ ଜ୍ଞାନକୁ ଆଧୁନିକ ଗଭୀର ସମୁଦ୍ର ରୋବୋଟିକ୍ସ ସହ ଯୋଡ଼ିଛନ୍ତି।',
        },
        highlightFact: {
          en: 'Future seabed research stations anchored at 20–100m depth with saturation diving airlocks will enable aquanauts to live and work on the ocean floor for up to 30 continuous days without decompressing!',
          hi: '20 से 100 मीटर गहराई पर स्थित भविष्य की स्थायी समुद्र-तल प्रयोगशालाएं वैज्ञानिकों को 30 दिनों तक बिना सतह पर आए पानी के भीतर रहने में सक्षम बनाएंगी!',
          or: 'ଭବିଷ୍ୟତର ସମୁଦ୍ର-ତଳ ଷ୍ଟେସନ୍ରେ ବୈଜ୍ଞାନିକମାନେ ୩୦ ଦିନ ଧରି ନିରନ୍ତର ପାଣି ତଳେ ରହି ଗବେଷଣା କରିପାରିବେ!',
        },
      },
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'What is the primary thermodynamic engine driving mantle convection?',
      hi: 'मेंटल संवहन को चलाने वाला मुख्य ऊष्मा स्रोत क्या है?',
      or: 'ମେଣ୍ଟଲ୍ କନଭେକ୍ସନ୍ ଚାଲିବା ପଛରେ ଥିବା ମୁଖ୍ୟ ଉତ୍ତାପ କେଉଁଠାରୁ ଆସେ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Extreme heat from Earth’s core (~5,000°C) warming the lower mantle',
          hi: 'पृथ्वी के कोर की अत्यधिक गर्मी (~5,000°C) जो निचले मेंटल को गर्म करती है',
          or: 'ପୃଥିବୀର କୋର୍ର ପ୍ରଚଣ୍ଡ ଉତ୍ତାପ (~୫,୦୦୦°C) ଯାହା ମେଣ୍ଟଲ୍କୁ ଗରମ କରେ',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'Solar radiation penetrating deep through the crust',
          hi: 'सूर्य की किरणें जो क्रस्ट के आर-पार गहराई तक जाती हैं',
          or: 'ସୂର୍ଯ୍ୟ କିରଣ ଯାହା ଭୂପୃଷ୍ଠ ଭେଦ କରି ଗଭୀରକୁ ଯାଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'Atmospheric winds generating friction on tectonic plates',
          hi: 'वायुमंडलीय हवाएं जो टेक्टोनिक प्लेटों पर घर्षण पैदा करती हैं',
          or: 'ବାୟୁମଣ୍ଡଳର ପବନ ଯାହା ପ୍ଲେଟ୍ଗୁଡ଼ିକୁ ଘସି ହୁଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'Lunar gravitational tides melting the asthenosphere',
          hi: 'चंद्रमा का गुरुत्वाकर्षण जो चट्टानों को पिघलाता है',
          or: 'ଚନ୍ଦ୍ରର ମାଧ୍ୟାକର୍ଷଣ ଯାହା ପଥରକୁ ତରଳାଇଦିଏ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'Earth’s molten metallic outer core radiates intense primordial and radiogenic heat (exceeding 5,000°C) into the base of the mantle, causing buoyant hot rock to rise.',
      hi: 'पृथ्वी का कोर 5,000°C से अधिक गर्म है। यह गर्मी निचले मेंटल को गर्म करके उसे हल्का बनाती है जिससे संवहन धाराएं शुरू होती हैं।',
      or: 'ପୃଥିବୀର କୋର୍ ୫,୦୦୦°C ରୁ ଅଧିକ ଗରମ, ଯାହା ମେଣ୍ଟଲ୍ ପଥରକୁ ତରଳାଇ ଉପରକୁ ଉଠିବାକୁ ବାଧ୍ୟ କରେ।',
    },
    deepFact: {
      en: 'Residual heat from planetary accretion 4.5 billion years ago still contributes roughly 50% of core thermal energy!',
      hi: '4.5 अरब साल पहले पृथ्वी बनते समय उत्पन्न गर्मी आज भी कोर के 50% तापमान के लिए जिम्मेदार है!',
      or: 'ପୃଥିବୀ ଗଠନ ସମୟର ଆଦିମ ଉତ୍ତାପ ଆଜି ମଧ୍ୟ କୋର୍ର ପ୍ରାୟ ୫୦% ଶକ୍ତି ଯୋଗାଉଛି!',
    },
  },
  {
    id: 'q2',
    question: {
      en: 'Why does trapped seawater trigger explosive volcanism at subduction zones (Pacific Ring of Fire)?',
      hi: 'सबडक्शन जोन (रिंग ऑफ फायर) में फंसा हुआ समुद्री जल विस्फोटक ज्वालामुखी क्यों बनाता है?',
      or: 'ସବଡକ୍ସନ୍ ଜୋନ୍ରେ ଫସିଥିବା ସମୁଦ୍ର ପାଣି କିପରି ବିସ୍ଫୋରକ ଜ୍ୱାଳାମୁଖୀ ସୃଷ୍ଟି କରେ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'It acts as a flux, dramatically lowering the melting temperature of mantle rock',
          hi: 'यह एक फ्लक्स के रूप में कार्य करता है और मेंटल चट्टान के पिघलने का तापमान घटा देता है',
          or: 'ଏହା ଏକ ଫ୍ଲକ୍ସ ପରି କାମ କରେ ଏବଂ ପଥରର ତରଳିବା ତାପମାତ୍ରା କମାଇଦିଏ (Flux Melting)',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'It directly boils and extinguishes the underlying magma chamber',
          hi: 'यह उबलकर नीचे के मैग्मा को पूरी तरह ठंडा कर बुझा देता है',
          or: 'ଏହା ଉତୁରି ପଡ଼ି ମାଗ୍ମା ଚାମ୍ବରକୁ ସମ୍ପୂର୍ଣ୍ଣ ଲିଭାଇ ଦିଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'It turns the entire tectonic plate into quicksand',
          hi: 'यह पूरी टेक्टोनिक प्लेट को दलदल में बदल देता है',
          or: 'ଏହା ସମଗ୍ର ପ୍ଲେଟ୍କୁ କାଦୁଅ କରିଦିଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'It causes oceanic salt crystals to combust spontaneously',
          hi: 'यह समुद्री नमक के कणों में आग लगा देता है',
          or: 'ଏହା ଲୁଣ କଣିକାରେ ନିଆଁ ଲଗାଇଦିଏ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'Water lowers the solidus melting point of hot mantle peridotite (just like salt lowers ice’s melting point), triggering flux melting and generating gas-rich andesitic magma.',
      hi: 'पानी मेंटल की चट्टानों के गलनांक को गिरा देता है, जिससे अत्यधिक गैसों और सिलिका से भरपूर विस्फोटक मैग्मा तैयार होता है।',
      or: 'ପାଣି ପଥରର ମେଲ୍ଟିଂ ପଏଣ୍ଟ କମାଇଦିଏ, ଯାହାଦ୍ୱାରା ଅତ୍ୟଧିକ ଗ୍ୟାସ୍ ପୂର୍ଣ୍ଣ ବିସ୍ଫୋରକ ମାଗ୍ମା ସୃଷ୍ଟି ହୁଏ।',
    },
    deepFact: {
      en: 'Just 0.5% added water by weight can drop mantle rock melting point by up to 200°C!',
      hi: 'मात्र 0.5% पानी मिलने से चट्टानों का गलनांक 200°C तक घट जाता है!',
      or: 'ମାତ୍ର ୦.୫% ପାଣି ମିଶିବା ଦ୍ୱାରା ପଥରର ତରଳିବା ତାପମାତ୍ରା ୨୦୦°C ପର୍ଯ୍ୟନ୍ତ କମିଯାଏ!',
    },
  },
  {
    id: 'q3',
    question: {
      en: 'What causes dissolved gases (H2O, CO2, SO2) to violently expand into bubbles as magma nears the surface?',
      hi: 'जैसे-जैसे मैग्मा सतह के पास आता है, घुली हुई गैसें अचानक बुलबुलों में क्यों बदलती हैं?',
      or: 'ମାଗ୍ମା ଭୂପୃଷ୍ଠ ନିକଟକୁ ଆସିଲେ ତାହା ଭିତରେ ଥିବା ଗ୍ୟାସ୍ କାହିଁକି ବବଲ୍ସ ହୋଇ ଫୁଟିଉଠେ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Drastic drop in confining lithostatic pressure (decompression exsolution)',
          hi: 'ऊपरी चट्टानों के दबाव में भारी कमी होना (दबाव हटने से गैसों का निकलना)',
          or: 'ଉପର ପଥରର ଚାପ ହଠାତ୍ କମିଯିବା (ଡିକମ୍ପ୍ରେସନ୍ ଏକ୍ସୋଲ୍ୟୁସନ୍)',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'Magma rapidly freezes into crystalline ice at the crater rim',
          hi: 'मैग्मा अचानक बर्फ की तरह जम जाता है',
          or: 'ମାଗ୍ମା ବରଫ ପରି ହଠାତ୍ ଜମିଯାଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'Oxygen in the air reacts with diamond deposits in the conduit',
          hi: 'हवा की ऑक्सीजन अंदर के हीरों से टकराकर फटती है',
          or: 'ବାୟୁର ଅମ୍ଳଜାନ ହୀରା ସହିତ ପ୍ରତିକ୍ରିୟା କରେ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'Earth’s magnetic field repels the sulfur ions',
          hi: 'पृथ्वी का चुंबकीय क्षेत्र सल्फर को बाहर फेंकता है',
          or: 'ପୃଥିବୀର ଚୁମ୍ବକୀୟ କ୍ଷେତ୍ର ସଲଫର୍କୁ ବିକର୍ଷଣ କରେ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'According to Henry’s law, gas solubility is directly proportional to pressure. As magma climbs, overburden pressure vanishes, causing dissolved gas to exsolve into rapidly expanding bubbles (like opening a shaken soda).',
      hi: 'हेनरी के नियम के अनुसार, दबाव कम होते ही गैसों की घुलनशीलता खत्म हो जाती है और वे तेजी से फैलते हुए बुलबुले बनाती हैं।',
      or: 'ହେନ୍ରୀଙ୍କ ନିୟମ ଅନୁସାରେ ଚାପ କମିବା ମାତ୍ରେ ଗ୍ୟାସ୍ ମାଗ୍ମାରୁ ବାହାରି ବବଲ୍ସ ହୋଇ ଫୁଟିଉଠେ।',
    },
    deepFact: {
      en: 'Gas bubbles can expand the magma volume by over 700%, accelerating it to supersonic speeds through the vent.',
      hi: 'गैसों के बुलबुले मैग्मा के आयतन को 700% से अधिक बढ़ा सकते हैं, जिससे वह तोप के गोले की तरह बाहर निकलता है।',
      or: 'ଗ୍ୟାସ୍ ବବଲ୍ସ ମାଗ୍ମାର ଆୟତନ ୭୦୦% ବଢ଼ାଇ ଶବ୍ଦରୁ ଦ୍ରୁତ ବେଗରେ ଉପରକୁ ଫିଙ୍ଗିଦିଏ।',
    },
  },
  {
    id: 'q4',
    question: {
      en: 'Why does Earth maintain constant volume rather than squeezing or expanding endlessly?',
      hi: 'कटाव और ज्वालामुखी के बावजूद पृथ्वी सिकुड़ने या लगातार फैलने से कैसे बचती है?',
      or: 'ପୃଥିବୀ ସଂକୁଚିତ (Squeeze) ନ ହୋଇ କିମ୍ବା ଅତ୍ୟଧିକ ବଡ଼ ନ ହୋଇ ସନ୍ତୁଳିତ କାହିଁକି ରହେ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Dynamic equilibrium: Seafloor spreading creates new crust at the same rate subduction destroys old crust',
          hi: 'गतिशील संतुलन: जितनी नई जमीन समुद्र में बनती है, उतनी ही पुरानी जमीन सबडक्शन में पिघल जाती है',
          or: 'ସନ୍ତୁଳନ (Equilibrium): ଯେତିକି ନୂଆ ସ୍ଥଳଭାଗ ତିଆରି ହୁଏ, ସେତିକି ପୁରୁଣା ଭାଗ ସବଡକ୍ସନ୍ରେ ତରଳିଯାଏ',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'Earth’s crust is made of inflatable rubber rock that expands and contracts with the seasons',
          hi: 'पृथ्वी की परत रबड़ जैसी चट्टानों से बनी है जो ऋतुओं के साथ फैलती-सिकुड़ती है',
          or: 'ପୃଥିବୀ ରବର ପରି ଋତୁ ଅନୁସାରେ ସଂକୁଚିତ ହୁଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'Comets deliver fresh continental rock from outer space every weekend',
          hi: 'धूमकेतु हर हफ्ते अंतरिक्ष से नई चट्टानें धरती पर लाते हैं',
          or: 'ଧୂମକେତୁ ପ୍ରତି ସପ୍ତାହରେ ବାହାରୁ ନୂଆ ପଥର ଆଣି ପକାଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'The oceans evaporate completely to fill empty cavities in the crust',
          hi: 'समुद्र सूखकर धरती के खाली गड्ढों को भर देते हैं',
          or: 'ସମୁଦ୍ର ଶୁଖିଯାଇ ଭିତର ଗାତଗୁଡ଼ିକୁ ଭରିଦିଏ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'The Earth possesses a closed crustal recycling system: mid-ocean ridges generate fresh oceanic crust, while convergent trenches subduct and remelt an equal surface area back into the mantle.',
      hi: 'पृथ्वी की पुनर्चक्रण प्रणाली पूरी तरह संतुलित है: समुद्र के कटक नई जमीन बनाते हैं, और खाइयां पुरानी जमीन को मेंटल में पिघला देती हैं।',
      or: 'ପୃଥିବୀର ଏକ ପୁନଃଚକ୍ରଣ ବ୍ୟବସ୍ଥା (Recycling System) ରହିଛି, ଯେଉଁଥିରେ ନୂଆ ସ୍ଥଳଭାଗ ସୃଷ୍ଟି ଓ ପୁରୁଣା ଭାଗ ତରଳିବାର ହାର ସମାନ ରହେ।',
    },
    deepFact: {
      en: 'Plate motion speeds average 2 to 10 cm per year—roughly the exact same speed as human fingernails grow!',
      hi: 'टेक्टोनिक प्लेटें 2 से 10 सेमी प्रति वर्ष की गति से चलती हैं—लगभग उतनी ही गति से जितनी गति से आपके नाखून बढ़ते हैं!',
      or: 'ପ୍ଲେଟ୍ଗୁଡ଼ିକ ବାର୍ଷିକ ୨ ରୁ ୧୦ ସେମି ଗତି କରନ୍ତି, ଯାହା ମଣିଷର ନଖ ବଢ଼ିବା ସହିତ ସମାନ!',
    },
  },
  {
    id: 'q5',
    question: {
      en: 'What distinguishes an effusive eruption (Hawaiian style) from an explosive cataclysm (Plinian style)?',
      hi: 'शांत प्रवाह वाले विस्फोट (हवाईयन) और विनाशकारी प्रलय (प्लीनियन) में क्या मुख्य अंतर है?',
      or: 'ଶାନ୍ତ ଲାଭା ପ୍ରବାହ (ହୱାଇୟାନ୍) ଏବଂ ପ୍ରଳୟଙ୍କରୀ ବିସ୍ଫୋରଣ (ପ୍ଲିନିଆନ୍) ମଧ୍ୟରେ ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ କଣ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Magma viscosity: Low-silica basalt flows gently, whereas high-silica rhyolite traps gas until it detonates',
          hi: 'मैग्मा का गाढ़ापन: कम सिलिका वाला बेसाल्ट आराम से बहता है, जबकि ज्यादा सिलिका वाला गाढ़ा मैग्मा गैसों को फंसाकर विस्फोट करता है',
          or: 'ମାଗ୍ମାର ବହଳିଆପଣ (Viscosity): କମ ସିଲିକା ଥିଲେ ଲାଭା ଶାନ୍ତ ଭାବେ ବହେ, ଅଧିକ ସିଲିକା ଥିଲେ ଗ୍ୟାସ୍ ଫାଟି ଭୟଙ୍କର ବିସ୍ଫୋରଣ ହୁଏ',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'Whether the eruption takes place during day or night',
          hi: 'विस्फोट दिन में हो रहा है या रात में',
          or: 'ବିସ୍ଫୋରଣ ଦିନରେ ନା ରାତିରେ ହେଉଛି',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'The color of the surrounding vegetation on the volcanic slope',
          hi: 'ज्वालामुखी के ढलान पर मौजूद पेड़-पौधों का रंग',
          or: 'ପାହାଡ଼ ଉପରେ ଥିବା ଗଛଲତାର ରଙ୍ଗ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'The presence of underground gold deposits beneath the crater',
          hi: 'क्रेटर के नीचे सोने की खदान की मौजूदगी',
          or: 'ତଳେ ସୁନା ଖଣି ଥିବା କି ନଥିବା',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'Silica polymerizes into tetrahedral networks, making high-silica rhyolitic/dacitic magma thick and gooey. Gases cannot bubble out gently, causing immense overpressure that explodes into ash and pyroclastic surges.',
      hi: 'सिलिका मैग्मा को चिपचिपा और गाढ़ा बनाती है। गाढ़ा मैग्मा गैसों को बाहर नहीं निकलने देता, जिससे अंदर का दबाव बढ़कर भयंकर विस्फोट का रूप ले लेता है।',
      or: 'ସିଲିକା ମାଗ୍ମାକୁ ଅଠାଳିଆ ଓ ବହଳିଆ କରିଦିଏ, ତେଣୁ ଗ୍ୟାସ୍ ବାହାରି ନପାରି ଚାପ ବଢ଼ି ଭୟଙ୍କର ବିସ୍ଫୋରଣ ଘଟାଏ।',
    },
    deepFact: {
      en: 'Rhyolitic magma is over 100,000 times more viscous than basaltic lava at the same temperature!',
      hi: 'समान तापमान पर उच्च-सिलिका रायोलाइटिक मैग्मा बेसाल्टिक लावा की तुलना में 100,000 गुना अधिक गाढ़ा होता है!',
      or: 'ସମାନ ତାପମାତ୍ରାରେ ରାଇଓଲାଇଟ୍ ମାଗ୍ମା ବାସାଲ୍ଟ ଅପେକ୍ଷା ୧,୦୦,୦୦୦ ଗୁଣ ଅଧିକ ବହଳିଆ ହୋଇଥାଏ!',
    },
  },
  {
    id: 'q6',
    question: {
      en: 'What occurs during a deep "Magma Recharge" event inside a dormant volcano?',
      hi: 'शांत पड़े ज्वालामुखी के नीचे जब मेंटल से "नया मैग्मा" आता है, तो क्या होता है?',
      or: 'ଏକ ଶାନ୍ତ ଜ୍ୱାଳାମୁଖୀ ଭିତରକୁ ହଠାତ୍ ନୂଆ ଗରମ ମାଗ୍ମା ପ୍ରବେଶ କଲେ କଣ ଘଟେ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Hot primitive basalt injects into the chamber, thermally shocking and overpressurizing resident magma to trigger eruption',
          hi: 'बेहद गर्म मैग्मा अचानक चैंबर में घुसकर पुराने मैग्मा को खौला देता है और दबाव बढ़ाकर तुरंत विस्फोट कराता है',
          or: 'ଅତ୍ୟନ୍ତ ଗରମ ମାଗ୍ମା ପଶି ପୁରୁଣା ମାଗ୍ମାକୁ ଫୁଟାଇ ଅତ୍ୟଧିକ ଚାପ ସୃଷ୍ଟି କରେ ଓ ତୁରନ୍ତ ବିସ୍ଫୋରଣ ଘଟାଏ',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'The magma instantly petrifies into diamonds and freezes the volcano permanently',
          hi: 'मैग्मा तुरंत हीरे में बदलकर ज्वालामुखी को हमेशा के लिए शांत कर देता है',
          or: 'ମାଗ୍ମା ହୀରା ପାଲଟି ଜ୍ୱାଳାମୁଖୀକୁ ସବୁଦିନ ପାଇଁ ବନ୍ଦ କରିଦିଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'The volcano floats into the sky like an airborne island',
          hi: 'ज्वालामुखी हवा में उड़ने लगता है',
          or: 'ଜ୍ୱାଳାମୁଖୀ ପାହାଡ଼ ଆକାଶରେ ଉଡ଼ିବାକୁ ଲାଗେ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'It opens an artificial portal directly to the Earth’s core',
          hi: 'यह पृथ्वी के केंद्र तक एक सुरंग बना देता है',
          or: 'ଏହା ପୃଥିବୀର କୋର୍କୁ ଏକ ସୁଡ଼ଙ୍ଗ ଖୋଲିଦିଏ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'A fresh surge of 1,200°C basaltic magma from mantle convection rapidly melts the crystalline mush of an existing chamber, producing convective overturn, massive volatile release, and critical overpressure.',
      hi: 'मेंटल से आने वाला नया गर्म मैग्मा पुराने जमे हुए मैग्मा को फिर से पिघला देता है और चैंबर में इतना अधिक दबाव पैदा कर देता है कि चट्टानें टूट जाती हैं।',
      or: 'ତଳୁ ଆସୁଥିବା ୧,୨୦୦°C ଗରମ ମାଗ୍ମା ପୁରୁଣା ଚାମ୍ବରକୁ ଅତ୍ୟଧିକ ଚାପଗ୍ରସ୍ତ କରି ତୁରନ୍ତ ବିସ୍ଫୋରଣ କରାଏ।',
    },
    deepFact: {
      en: 'Recharge-triggered eruptions can occur in as little as a few hours to weeks following seismic tremor swarms.',
      hi: 'नया मैग्मा आने के बाद कुछ ही घंटों या हफ्तों के भीतर अचानक बड़ा विस्फोट हो सकता है।',
      or: 'ନୂଆ ମାଗ୍ମା ଆସିବା ପରେ କିଛି ଘଣ୍ଟା କିମ୍ବା ସପ୍ତାହ ମଧ୍ୟରେ ବିସ୍ଫୋରଣ ଘଟିପାରେ।',
    },
  },
  {
    id: 'q7',
    question: {
      en: 'How does tectonic plate collision create Fold Mountains like the Himalayas (the rug metaphor)?',
      hi: 'टेक्टोनिक प्लेटों की टक्कर से हिमालय जैसे वलित पर्वत कैसे बनते हैं (कालीनों का उदाहरण)?',
      or: 'ପ୍ଲେଟ୍ ଧକ୍କା ହୋଇ କିପରି ହିମାଳୟ ପରି ଭଙ୍ଗିଳ ପର୍ବତ ସୃଷ୍ଟି ହୁଏ (ଗାଲିଚା ଉଦାହରଣ)?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Intense friction and compressive pressure jam the plates, causing rock layers to buckle and fold upward',
          hi: 'तीव्र घर्षण और दबाव से प्लेटें जाम हो जाती हैं, जिससे चट्टानी परतें मुड़कर ऊपर उठ जाती हैं',
          or: 'ପ୍ରବଳ ଘର୍ଷଣ ଓ ଚାପ ଯୋଗୁଁ ପଥର ସ୍ତର ବଙ୍କା ହୋଇ ଉପରକୁ ଉଠିଯାଏ',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'The plates slide smoothly past each other without generating any friction or heat',
          hi: 'प्लेटें बिना किसी घर्षण के आसानी से एक-दूसरे के बगल से निकल जाती हैं',
          or: 'ପ୍ଲେଟ୍ଗୁଡ଼ିକ ବିନା କୌଣସି ଘର୍ଷଣରେ ଖସି ଚାଲିଯାଆନ୍ତି',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'Ocean currents lift the continental plates into the air like kites',
          hi: 'समुद्री लहरें महाद्वीपों को पतंग की तरह हवा में उड़ा देती हैं',
          or: 'ସମୁଦ୍ରର ଢେଉ ପ୍ଲେଟ୍କୁ ପତଙ୍ଗ ପରି ଉଡ଼ାଇ ଦିଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'Extreme cold in winter freezes the crust into high mountain peaks',
          hi: 'सर्दियों की अत्यधिक ठंड से क्रस्ट जमकर ऊंची चोटियां बन जाती है',
          or: 'ଶୀତ ଦିନର ଥଣ୍ଡା ପଥରକୁ ବରଫ ପରି ଜମାଇ ପାହାଡ଼ ତିଆରି କରେ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'Just like pushing two rugs together on a floor causes them to crumple upward in the middle, the collision of the jagged Indian and Eurasian plates forces crustal rock layers into towering folds.',
      hi: 'फर्श पर दो कालीनों को आपस में धक्का देने पर जैसे वे बीच से मुड़ जाती हैं, वैसे ही भारतीय और यूरेशियन प्लेटों की टक्कर से हिमालय की विशाल परतें ऊपर उठ गई हैं।',
      or: 'ମେଝିଆରେ ଦୁଇଟି ଗାଲିଚାକୁ ଠେଲିଲେ ମଝିରୁ କୁଞ୍ଚିତ ହେବା ପରି ଭାରତୀୟ ଓ ୟୁରେସିଆନ୍ ପ୍ଲେଟ୍ ଧକ୍କା ହୋଇ ହିମାଳୟ ସୃଷ୍ଟି ହୋଇଛି।',
    },
    deepFact: {
      en: 'The Himalayas are the youngest mountain range on Earth and are still actively rising by ~5 millimeters every year!',
      hi: 'हिमालय पृथ्वी की सबसे युवा पर्वत श्रृंखला है और आज भी प्रति वर्ष लगभग 5 मिमी की दर से ऊपर उठ रहा है!',
      or: 'ହିମାଳୟ ପୃଥିବୀର ସବୁଠାରୁ କନିଷ୍ଠ ପର୍ବତମାଳା ଏବଂ ଏବେ ମଧ୍ୟ ବାର୍ଷିକ ୫ ମିଲିମିଟର ବଢ଼ୁଛି!',
    },
  },
  {
    id: 'q8',
    question: {
      en: 'Which volcano type is characterized by tall, steep symmetrical cones formed by alternating layers of ash and lava (e.g. Mount Fuji & Barren Island)?',
      hi: 'ऊंचे और खड़े सममित शंकु वाला वह कौन सा ज्वालामुखी है जो राख और लावे की वैकल्पिक परतों से बनता है (जैसे माउंट फूजी और बैरन द्वीप)?',
      or: 'ପାଉଁଶ ଓ ଲାଭାର ଏକାଧିକ ପରସ୍ତରେ ଗଠିତ ଉଚ୍ଚ ଖଡ଼ି ଢଳାଣ ବିଶିଷ୍ଟ ଜ୍ୱାଳାମୁଖୀକୁ କଣ କୁହାଯାଏ (ଯେପରି ମାଉଣ୍ଟ ଫୁଜି ଓ ବାରେନ୍ ଦ୍ୱୀପ)?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Composite Volcano (Stratovolcano)',
          hi: 'मिश्रित ज्वालामुखी (स्ट्रैटोज्वालामुखी)',
          or: 'ଷ୍ଟ୍ରାଟୋଜ୍ୱାଳାମୁଖୀ (Stratovolcano)',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'Shield Volcano (like Mauna Loa)',
          hi: 'शील्ड ज्वालामुखी (जैसे मौना लोआ)',
          or: 'ଶିଲ୍ଡ ଜ୍ୱାଳାମୁଖୀ (ମୌନା ଲୋଆ ପରି)',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'Cinder Cone (like Parícutin)',
          hi: 'सिंडर कोन (जैसे पारिकुटिन)',
          or: 'ସିଣ୍ଡର କୋନ୍ (ପାରିକୁଟିନ୍ ପରି)',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'Lava Dome plug',
          hi: 'लावा गुंबद',
          or: 'ଲାଭା ଡୋମ୍',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'Composite volcanoes (stratovolcanoes) are built from alternating strata of hardened lava, volcanic ash, and tephra. They are capable of explosive eruptions and include Mount Fuji and Barren Island (India’s only active volcano in the Andaman Sea).',
      hi: 'स्ट्रैटोज्वालामुखी लावे, राख और पत्थरों की वैकल्पिक परतों से बनते हैं। माउंट फूजी और भारत का एकमात्र सक्रिय ज्वालामुखी बैरन द्वीप इसी श्रेणी में आते हैं।',
      or: 'ଷ୍ଟ୍ରାଟୋଜ୍ୱାଳାମୁଖୀ ଲାଭା ଓ ପାଉଁଶର ବିଭିନ୍ନ ପରସ୍ତରେ ଗଠିତ। ମାଉଣ୍ଟ ଫୁଜି ଏବଂ ଭାରତର ଏକମାତ୍ର ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ ବାରେନ୍ ଦ୍ୱୀପ ଏହି ପ୍ରକାରର।',
    },
    deepFact: {
      en: 'Barren Island rises 2,250 meters from the ocean floor, though only its top 354 meters protrude above sea level!',
      hi: 'बैरन द्वीप समुद्र तल से 2,250 मीटर ऊंचा उठता है, हालांकि समुद्र के ऊपर केवल 354 मीटर ही दिखाई देता है!',
      or: 'ବାରେନ୍ ଦ୍ୱୀପ ସମୁଦ୍ର ତଳୁ ୨,୨୫୦ ମିଟର ଉଚ୍ଚ, କିନ୍ତୁ ସମୁଦ୍ର ଉପରେ କେବଳ ୩୫୪ ମିଟର ଦେଖାଯାଏ!',
    },
  },
  {
    id: 'q9',
    question: {
      en: 'How do deep-sea hydrothermal vent ecosystems (Black Smokers) produce energy without sunlight?',
      hi: 'समुद्र के भीतर हाइड्रोथर्मल वेंट (ब्लैक स्मोकर) पर जीवन बिना सूर्य के प्रकाश के ऊर्जा कैसे प्राप्त करता है?',
      or: 'ସମୁଦ୍ର ଗର୍ଭର ବ୍ଲାକ୍ ସ୍ମୋକର୍ ଝରଣାରେ ବିନା ସୂର୍ଯ୍ୟାଲୋକରେ ଜୀବମାନେ କିପରି ଶକ୍ତି ପାଆନ୍ତି?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Chemosynthesis: Chemoautotrophic bacteria oxidize toxic hydrogen sulfide (H2S) dissolved in 400°C vent fluid',
          hi: 'रसायन-संश्लेषण (कीमोसिंथेसिस): बैक्टीरिया 400°C गर्म पानी में घुली जहरीली हाइड्रोजन सल्फाइड (H₂S) से भोजन बनाते हैं',
          or: 'କେମୋସିନ୍ଥେସିସ୍: ବ୍ୟାକ୍ଟେରିଆ ବିଷାକ୍ତ ହାଇଡ୍ରୋଜେନ୍ ସଲଫାଇଡ୍ (H₂S) କୁ ବ୍ୟବହାର କରି ଖାଦ୍ୟ ତିଆରି କରନ୍ତି',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'They use underwater mirrors to reflect starlight from the ocean surface',
          hi: 'वे पानी के भीतर दर्पण लगाकर तारों की रोशनी को परावर्तित करते हैं',
          or: 'ସେମାନେ ଆଇନା ଲଗାଇ ତାରାଙ୍କ ଆଲୋକ ବ୍ୟବହାର କରନ୍ତି',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'Giant squid carry firewood down from tropical islands',
          hi: 'विशाल स्क्विड द्वीपों से लकड़ी लाकर नीचे जलाते हैं',
          or: 'ଜଳଚର ଜୀବମାନେ ଉପରୁ ଜାଳେଣି କାଠ ବୋହି ନିଅନ୍ତି',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'They absorb solar UV radiation through underwater glass fibers',
          hi: 'वे कांच के तंतुओं के माध्यम से सूर्य की किरणों को सोखते हैं',
          or: 'ସେମାନେ କାଚ ତାର ଦ୍ୱାରା ସୂର୍ଯ୍ୟ କିରଣ ଟାଣି ଆଣନ୍ତି',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'At 2,500m depth in total darkness, life depends on chemosynthesis rather than photosynthesis. Bacteria oxidize dissolved hydrogen sulfide ($H_2S$) to fix carbon into organic nutrients, supporting giant Riftia tube worms, yeti crabs, and vent shrimp.',
      hi: '2,500 मीटर की गहराई में प्रकाश-संश्लेषण संभव नहीं है। यहाँ बैक्टीरिया हाइड्रोजन सल्फाइड का ऑक्सीकरण करके भोजन बनाते हैं, जिस पर पूरा पारिस्थितिकी तंत्र जीवित है।',
      or: 'ଅତଳ ସମୁଦ୍ରର ଅନ୍ଧକାରରେ ପ୍ରକାଶ-ସଂଶ୍ଳେଷଣ ଅସମ୍ଭବ। ବ୍ୟାକ୍ଟେରିଆ ରାସାୟନିକ ଶକ୍ତି ପ୍ରସ୍ତୁତ କରି ବିରାଟ ଟିଉବ୍ ୱାର୍ମଙ୍କୁ ଖାଦ୍ୟ ଯୋଗାନ୍ତି।',
    },
    deepFact: {
      en: 'Hydrothermal vents discharge fluids hotter than molten lead (~400°C) without boiling, due to 250 atmospheres of crushing hydrostatic pressure!',
      hi: '250 वायुमंडलीय दबाव के कारण 400°C गर्म होने पर भी हाइड्रोथर्मल वेंट का पानी उबलकर भाप नहीं बनता!',
      or: 'ପ୍ରବଳ ସାମୁଦ୍ରିକ ଚାପ ଯୋଗୁଁ ୪୦୦°C ତାପମାତ୍ରା ସତ୍ତ୍ୱେ ଏହି ପାଣି ବାଷ୍ପରେ ପରିଣତ ହୁଏନାହିଁ!',
    },
  },
  {
    id: 'q10',
    question: {
      en: 'According to Charles Darwin’s subsidence theory, how does an oceanic volcanic island evolve into a ring-shaped coral Atoll?',
      hi: 'चार्ल्स डार्विन के धंसाव सिद्धांत के अनुसार, एक ज्वालामुखी द्वीप अंगूठी जैसे कोरल एटोल में कैसे बदलता है?',
      or: 'ଡାରୱିନ୍ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, ଏକ ଜ୍ୱାଳାମୁଖୀ ଦ୍ୱୀପ କିପରି ମୁଦି ଆକାରର ପ୍ରବାଳ ଦ୍ୱୀପ (Atoll) ରେ ପରିଣତ ହୁଏ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'The extinct volcano gradually subsides underwater while coral polyps keep growing upward toward sunlight to maintain a ring reef with a central lagoon',
          hi: 'ज्वालामुखी धीरे-धीरे समुद्र में डूबता जाता है जबकि कोरल धूप पाने के लिए ऊपर बढ़ते रहते हैं, जिससे बीच में लैगून और किनारे पर रिंग बन जाती है',
          or: 'ଜ୍ୱାଳାମୁଖୀ ଧୀରେ ଧୀରେ ବୁଡ଼ିଯାଏ କିନ୍ତୁ ପ୍ରବାଳ କୀଟମାନେ ସୂର୍ଯ୍ୟାଲୋକ ପାଇଁ ଉପରକୁ ବଢ଼ି ମଝିରେ ହ୍ରଦ ଓ ଚାରିପାଖେ ମୁଦି ପରି ରୀଫ୍ ଗଠନ କରନ୍ତି',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'A meteor impact drills a circular hole in the center of a coral reef',
          hi: 'उल्कापिंड के टकराने से कोरल रीफ के बीच में एक गोल छेद बन जाता है',
          or: 'ଉଲ୍କାପାତ ଯୋଗୁଁ ମଝିରେ ଏକ ଗୋଲାକାର ଗାତ ସୃଷ୍ଟି ହୁଏ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'Coral polyps actively excavate and remove the basalt rock with miniature shovels',
          hi: 'कोरल जीव पहाड़ के पत्थरों को काटकर बाहर फेंक देते हैं',
          or: 'ପ୍ରବାଳ କୀଟମାନେ ପଥର ଖୋଳି ବାହାର କରିଦିଅନ୍ତି',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'Tsunami waves carve the island into a donut shape overnight',
          hi: 'सुनामी की लहरें रातों-रात द्वीप को डोनट जैसा गोल बना देती हैं',
          or: 'ସୁନାମି ଢେଉ ଦ୍ୱୀପକୁ ଗୋଲ କରି କାଟିଦିଏ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'Fringing reefs establish around an active volcano. As the cooling island subsides beneath sea level, the corals build their limestone skeletons upward to stay in sunlit waters (~15 mm/yr), creating a barrier reef and finally an atoll enclosing a shallow lagoon.',
      hi: 'ज्वालामुखी के किनारे फ्रिंजिंग रीफ बनती है। जब द्वीप समुद्र में डूबता है, तो कोरल ऊपर की ओर बढ़ते हैं, जिससे लैगून और फिर एटोल का निर्माण होता है।',
      or: 'ଜ୍ୱାଳାମୁଖୀ ବୁଡ଼ିବା ସତ୍ତ୍ୱେ ପ୍ରବାଳ କୀଟମାନେ ସୂର୍ଯ୍ୟାଲୋକ ପାଇଁ ଉପରକୁ ବଢ଼ି ମଝିରେ ଲାଗୁନ୍ ଥିବା ଏଟୋଲ୍ ଗଠନ କରନ୍ତି।',
    },
    deepFact: {
      en: 'Lakshadweep in India is composed entirely of 36 coral atolls and submerged reefs built over ancient drowned volcanic seamounts of the Reunion hotspot track!',
      hi: 'भारत का केंद्र शासित प्रदेश लक्षद्वीप पूरी तरह 36 कोरल एटोल से बना है जो डूबे हुए ज्वालामुखियों के ऊपर स्थित हैं!',
      or: 'ଭାରତର ଲକ୍ଷଦ୍ୱୀପ ୩୬ଟି ପ୍ରବାଳ ଏଟୋଲ୍ରେ ଗଠିତ, ଯାହା ପ୍ରାଚୀନ କାଳର ବୁଡ଼ିଯାଇଥିବା ଜ୍ୱାଳାମୁଖୀ ଉପରେ ଅବସ୍ଥିତ!',
    },
  },
  {
    id: 'q11',
    question: {
      en: 'What is the Bengal Submarine Fan in the Bay of Bengal?',
      hi: 'बंगाल की खाड़ी में स्थित "बंगाल सबमरीन फैन" क्या है?',
      or: 'ବଙ୍ଗୋପସାଗରରେ ଥିବା "ବେଙ୍ଗଲ୍ ସବମେରିନ୍ ଫ୍ୟାନ୍" କଣ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'The largest deep-sea submarine sedimentary fan on Earth, built by Himalayan silt carried 3,000 km into the abyssal ocean floor',
          hi: 'पृथ्वी का सबसे बड़ा अंतःसमुद्री तलछटी पंखा, जो हिमालय से बहकर आई गाद से बना है और समुद्र में 3,000 किमी तक फैला है',
          or: 'ପୃଥିବୀର ସବୁଠାରୁ ବଡ଼ ସମୁଦ୍ର ଗର୍ଭର ପଟୁମାଟି ସଂରଚନା, ଯାହା ହିମାଳୟରୁ ବୋହି ଆସି ସମୁଦ୍ର ଭିତରେ ୩,୦୦୦ କିମି ପର୍ଯ୍ୟନ୍ତ ବ୍ୟାପିଛି',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'An electric wind turbine farm installed underwater to generate tidal power',
          hi: 'बिजली बनाने के लिए पानी के नीचे लगाया गया एक विशाल पवन चक्की संयंत्र',
          or: 'ସମୁଦ୍ର ତଳେ ବିଜୁଳି ତିଆରି ପାଇଁ ବସାଯାଇଥିବା ପବନ କଳ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'A natural cooling fan made of seaweed that regulates ocean temperature',
          hi: 'समुद्री घास से बना एक पंखा जो समुद्र के पानी को ठंडा करता है',
          or: 'ସମୁଦ୍ର ଘାସର ଏକ ବିଶାଳ ବିଞ୍ଚଣା',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'A coral reef formation shaped like an airplane propeller',
          hi: 'हवाई जहाज के पंखे के आकार की एक कोरल रीफ',
          or: 'ଉଡ଼ାଜାହାଜ ପ୍ରୋପେଲର୍ ପରି ଦେଖାଯାଉଥିବା ପ୍ରବାଳ ଦ୍ୱୀପ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'The Ganges and Brahmaputra rivers drain the rapidly uplifting Himalayas, transporting over a billion tons of sediment annually. Beyond the shallow Sundarbans delta, submarine turbidity currents sweep silt through deep-sea canyons to build the Bengal Fan—over 3,000 km long and up to 16 km thick!',
      hi: 'गंगा और ब्रह्मपुत्र नदियां हिमालय से अरबों टन गाद लाती हैं। सुंदरवन डेल्टा के आगे, यह गाद पानी के भीतर खाइयों से बहकर 3,000 किमी लंबा और 16 किमी तक मोटा बंगाल सबमरीन फैन बनाती है।',
      or: 'ଗଙ୍ଗା ଓ ବ୍ରହ୍ମପୁତ୍ରର ପଟୁମାଟି ସୁନ୍ଦରବନ ଡେଲଟା ଅତିକ୍ରମ କରି ସମୁଦ୍ର କେନିୟନ୍ ଦେଇ ବେଙ୍ଗଲ୍ ଫ୍ୟାନ୍ ଗଠନ କରେ, ଯାହା ୩,୦୦୦ କିମି ଲମ୍ବା ଓ ୧୬ କିମି ମୋଟା।',
    },
    deepFact: {
      en: 'The Bengal Submarine Fan contains over 12.5 million cubic kilometers of sediment, providing a continuous rock record of the Indian plate collision since the Eocene epoch!',
      hi: 'बंगाल सबमरीन फैन में 1.25 करोड़ क्यूबिक किमी तलछट है, जिसमें 5 करोड़ साल का भारतीय प्लेट के टकराव का पूरा इतिहास सुरक्षित है!',
      or: 'ବେଙ୍ଗଲ୍ ସବମେରିନ୍ ଫ୍ୟାନ୍ରେ ୧.୨୫ କୋଟି ଘନ କିଲୋମିଟର ପଟୁମାଟି ରହିଛି, ଯାହା ଭାରତୀୟ ପ୍ଲେଟ୍ ଧକ୍କାର ୫ କୋଟି ବର୍ଷର ଇତିହାସ ବହନ କରେ!',
    },
  },
  {
    id: 'q12',
    question: {
      en: 'When was Barren Island’s most recent major active eruptive phase, and what triggered the September 2025 bursts?',
      hi: 'भारत के एकमात्र सक्रिय ज्वालामुखी बैरन द्वीप का हालिया विस्फोट कब हुआ था और सितंबर 2025 के विस्फोट का कारण क्या था?',
      or: 'ଭାରତର ବାରେନ୍ ଦ୍ୱୀପ ଜ୍ୱାଳାମୁଖୀର ସାମ୍ପ୍ରତିକ ବିସ୍ଫୋରଣ କେବେ ହୋଇଥିଲା ଏବଂ ସେପ୍ଟେମ୍ବର ୨୦୨୫ ବିସ୍ଫୋରଣର କାରଣ କଣ ଥିଲା?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'Between 30 July 2025 and 11 January 2026, triggered by a nearby M4.2 earthquake shaking the magma chamber',
          hi: '30 जुलाई 2025 से 11 जनवरी 2026 के बीच, पास आए 4.2 तीव्रता के भूकंप द्वारा मैग्मा चैंबर को हिलाने से भड़का था',
          or: '୩୦ ଜୁଲାଇ ୨୦୨୫ ରୁ ୧୧ ଜାନୁଆରୀ ୨୦୨୬ ମଧ୍ୟରେ, ପାଖରେ ହୋଇଥିବା ୪.୨ ତୀବ୍ରତା ଭୂମିକମ୍ପ ଯୋଗୁଁ ମାଗ୍ମା ଚାମ୍ବର ପ୍ରଭାବିତ ହୋଇ ଫାଟିଥିଲା',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'In the year 1803 during the Napoleonic Wars',
          hi: 'नेपोलियन युद्धों के दौरान वर्ष 1803 में',
          or: '୧୮୦୩ ମସିହାରେ ନେପୋଲିଅନ୍ ଯୁଦ୍ଧ ସମୟରେ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'It has never erupted in recorded human history',
          hi: 'मानव इतिहास में यह कभी नहीं फटा',
          or: 'ମାନବ ଇତିହାସରେ ଏହା କେବେ ଫାଟି ନାହିଁ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'Only during a full solar eclipse in 1950',
          hi: 'केवल 1950 के पूर्ण सूर्यग्रहण के दौरान',
          or: 'କେବଳ ୧୯୫୦ ସୂର୍ଯ୍ୟପରାଗ ସମୟରେ',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'The Smithsonian Institution’s Global Volcanism Program confirmed Barren Island’s sustained eruptive period from 30 July 2025 to 11 January 2026. A 4.2 magnitude earthquake in September 2025 disturbed the magma reservoir, causing twin explosive surges and lava effusion before returning to fumarolic degassing in 2026.',
      hi: 'स्मिथसोनियन ग्लोबल वोल्केनिज्म प्रोग्राम ने 30 जुलाई 2025 से 11 जनवरी 2026 तक बैरन द्वीप के विस्फोट की पुष्टि की। सितंबर 2025 में 4.2 तीव्रता के भूकंप ने मैग्मा चैंबर को हिलाकर विस्फोट तेज कर दिया था।',
      or: 'ସ୍ମିଥସୋନିଆନ୍ ରିପୋର୍ଟ ଅନୁସାରେ ଏହି ବିସ୍ଫୋରଣ ୩୦ ଜୁଲାଇ ୨୦୨୫ ରୁ ୧୧ ଜାନୁଆରୀ ୨୦୨୬ ପର୍ଯ୍ୟନ୍ତ ଚାଲିଥିଲା ଏବଂ ସେପ୍ଟେମ୍ବର ୨୦୨୫ ଭୂମିକମ୍ପ ଏହାକୁ ଉତ୍ତେଜିତ କରିଥିଲା।',
    },
    deepFact: {
      en: 'Barren Island is a stratovolcano standing 2,250 meters tall from the ocean floor, but only its top 354 meters protrude above the sea!',
      hi: 'बैरन द्वीप समुद्र तल से 2,250 मीटर ऊंचा एक स्ट्रैटोज्वालामुखी है, जिसका केवल शीर्ष 354 मीटर ही पानी से बाहर दिखाई देता है!',
      or: 'ବାରେନ୍ ଦ୍ୱୀପ ସମୁଦ୍ର ଗର୍ଭରୁ ୨,୨୫୦ ମିଟର ଉଚ୍ଚ, କିନ୍ତୁ ସମୁଦ୍ର ପତ୍ତନ ଉପରେ କେବଳ ୩୫୪ ମିଟର ଦେଖାଯାଏ!',
    },
  },
  {
    id: 'q13',
    question: {
      en: 'What is the Capricorn Plate, and how does it relate to ancient Sangam literature?',
      hi: 'कैप्रिकॉर्न प्लेट क्या है, और इसका प्राचीन संगम साहित्य से क्या संबंध है?',
      or: 'କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ କଣ, ଏବଂ ପ୍ରାଚୀନ ସଙ୍ଗମ ସାହିତ୍ୟ ସହ ଏହାର କି ସମ୍ପର୍କ?',
    },
    options: [
      {
        id: 'opt-a',
        text: {
          en: 'A newly forming microplate created by the internal tearing of the Indo-Australian plate, echoing the ancient sunken Tamil land of Kumari Kandam',
          hi: 'इंडो-ऑस्ट्रेलियन प्लेट के आंतरिक विखंडन से बन रही नई माइक्रोप्लेट, जो संगम साहित्य के जलमग्न भूभाग "कुमारी कंदम" से अद्भुत समानता रखती है',
          or: 'ଇଣ୍ଡୋ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍ ଭାଙ୍ଗି ସୃଷ୍ଟି ହେଉଥିବା ନୂଆ ମାଇକ୍ରୋପ୍ଲେଟ୍, ଯାହା ପ୍ରାଚୀନ ତାମିଲ ସଙ୍ଗମ ସାହିତ୍ୟର ଜଳମଗ୍ନ ‘କୁମାରୀ କନ୍ଦମ୍’ ସହ ସାଦୃଶ୍ୟ ରଖେ',
        },
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: {
          en: 'A constellation of stars that ancient sailors used to navigate the Pacific',
          hi: 'तारों का एक समूह जिसका उपयोग नाविक प्रशांत महासागर में करते थे',
          or: 'ତାରାମଣ୍ଡଳ ଯାହାକୁ ନାବିକମାନେ ଦିଗ ନିର୍ଣ୍ଣୟ ପାଇଁ ବ୍ୟବହାର କରୁଥିଲେ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-c',
        text: {
          en: 'An artificial floating island made of recycled plastics',
          hi: 'रीसाइकिल प्लास्टिक से बना एक कृत्रिम तैरता हुआ द्वीप',
          or: 'ପ୍ଲାଷ୍ଟିକ୍ରେ ତିଆରି ଏକ କୃତ୍ରିମ ଭାସମାନ ଦ୍ୱୀପ',
        },
        isCorrect: false,
      },
      {
        id: 'opt-d',
        text: {
          en: 'A mythical mountain made of solid gold mentioned in Greek legends',
          hi: 'ग्रीक कहानियों में वर्णित सोने का एक काल्पनिक पहाड़',
          or: 'ଗ୍ରୀକ୍ କାହାଣୀର ଏକ ସୁନା ପାହାଡ଼',
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: 'Internal deformation across the Central Indian Basin confirms the Indo-Australian Plate is splitting apart, forming the Capricorn sub-plate. In Tamil Sangam traditions, ancient folklore describes "Kumari Kandam" (Kumari Nadu), a vast southern landmass linking southern India towards Australia that subsequently sank due to marine cataclysms.',
      hi: 'मध्य हिंद महासागर में आंतरिक तनाव से पुष्टि हुई है कि इंडो-ऑस्ट्रेलियन प्लेट टूटकर कैप्रिकॉर्न प्लेट बना रही है। संगम ग्रंथों में वर्णित कुमारी कंदम इसी प्राचीन जुड़े हुए भूगोल से मेल खाता है।',
      or: 'ଭାରତ ମହାସାଗରରେ ଇଣ୍ଡୋ-ଅଷ୍ଟ୍ରେଲିଆନ୍ ପ୍ଲେଟ୍ ଭାଙ୍ଗି କ୍ୟାପ୍ରିକର୍ଣ୍ଣ ପ୍ଲେଟ୍ ଗଠନ ହେଉଛି, ଯାହା ସଙ୍ଗମ ସାହିତ୍ୟର ବୁଡ଼ିଯାଇଥିବା କୁମାରୀ କନ୍ଦମ୍ ଇତିହାସ ସହ ସାମଞ୍ଜସ୍ୟ ରଖେ।',
    },
    deepFact: {
      en: 'Plate tectonics reveals that 140 million years ago, India, Australia, and Antarctica were joined in the supercontinent of Gondwana, affirming that South India and Australia were indeed once continuous landmasses!',
      hi: 'भूविज्ञान के अनुसार 14 करोड़ साल पहले भारत, ऑस्ट्रेलिया और अंटार्कटिका गोंडवानालैंड के रूप में आपस में जुड़े हुए थे!',
      or: 'ଭୂତାତ୍ତ୍ୱିକ ପ୍ରମାଣ ଅନୁସାରେ ୧୪ କୋଟି ବର୍ଷ ପୂର୍ବେ ଭାରତ, ଅଷ୍ଟ୍ରେଲିଆ ଓ ଆଣ୍ଟାର୍କଟିକା ଗୋଣ୍ଡୱାନାଲ୍ୟାଣ୍ଡ ଭାବେ ଏକତ୍ର ଥିଲେ!',
    },
  },
];
