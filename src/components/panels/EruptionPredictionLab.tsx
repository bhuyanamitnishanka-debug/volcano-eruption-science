/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Activity,
  Radio,
  Thermometer,
  Wind,
  AlertOctagon,
  CheckCircle,
  MapPin,
  ShieldAlert,
  Flame,
  Gauge,
} from 'lucide-react';
import { Language } from '../../types/novel';
import { soundEngine } from '../../utils/audio';

interface EruptionPredictionLabProps {
  language: Language;
}

export const EruptionPredictionLab: React.FC<EruptionPredictionLabProps> = ({ language }) => {
  // 4 Predictive Sensors State
  const [seismicTremor, setSeismicTremor] = useState<number>(25); // 0 to 100 (Harmonic tremors)
  const [groundTilt, setGroundTilt] = useState<number>(15); // microradians (0 to 60)
  const [so2Emission, setSo2Emission] = useState<number>(300); // tonnes/day (50 to 5000)
  const [thermalAnomaly, setThermalAnomaly] = useState<number>(45); // °C crater anomaly (10 to 350°C)

  // Compute Alert Level
  const riskScore =
    (seismicTremor / 100) * 0.35 +
    (groundTilt / 60) * 0.25 +
    (so2Emission / 5000) * 0.25 +
    (thermalAnomaly / 350) * 0.15;

  let alertLevel: 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED' = 'GREEN';
  let alertColor = 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30';
  let alertTitle = 'NORMAL (Green)';

  if (riskScore > 0.72) {
    alertLevel = 'RED';
    alertColor = 'text-red-400 border-red-500/60 bg-red-950/40 animate-pulse';
    alertTitle = 'WARNING: IMMINENT ERUPTION (Red)';
  } else if (riskScore > 0.45) {
    alertLevel = 'ORANGE';
    alertColor = 'text-orange-400 border-orange-500/50 bg-orange-950/30';
    alertTitle = 'WATCH: HEIGHTENED UNREST (Orange)';
  } else if (riskScore > 0.22) {
    alertLevel = 'YELLOW';
    alertColor = 'text-amber-400 border-amber-500/40 bg-amber-950/30';
    alertTitle = 'ADVISORY: ELEVATED SEISMICITY (Yellow)';
  }

  const triggerPreset = (preset: 'calm' | 'unrest' | 'critical') => {
    if (preset === 'calm') {
      setSeismicTremor(15);
      setGroundTilt(8);
      setSo2Emission(180);
      setThermalAnomaly(30);
      soundEngine.playChime();
    } else if (preset === 'unrest') {
      setSeismicTremor(55);
      setGroundTilt(32);
      setSo2Emission(1800);
      setThermalAnomaly(140);
      soundEngine.playCrack();
    } else {
      setSeismicTremor(95);
      setGroundTilt(54);
      setSo2Emission(4200);
      setThermalAnomaly(290);
      soundEngine.playEruptionBoom();
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Radio className="w-5 h-5 text-amber-500" />
            <span>
              {language === 'hi'
                ? 'ज्वालामुखी पूर्व-चेतावनी प्रणाली एवं बैरन द्वीप'
                : language === 'or'
                ? 'ଜ୍ୱାଳାମୁଖୀ ପୂର୍ବାନୁମାନ ବ୍ୟବସ୍ଥା ଓ ବାରେନ୍ ଦ୍ୱୀପ'
                : 'Volcano Early Warning & Forecasting Radar'}
            </span>
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {language === 'hi'
              ? 'वैज्ञानिक विस्फोट का पूर्वानुमान कैसे लगाते हैं: भूकंपीय कंपन, जमीन का फूलना, SO2 गैस और उपग्रह थर्मल डेटा'
              : language === 'or'
              ? 'ଭୂକମ୍ପନ, ଭୂପୃଷ୍ଠ ଫୁଲିବା (Ground Tilt), ଗ୍ୟାସ୍ ପ୍ରବାହ ଓ ତାପମାତ୍ରାରୁ ବିସ୍ଫୋରଣ ଆଗୁଆ ଜାଣିବା'
              : 'Multi-parametric forecasting: Harmonic tremor, edifice inflation, SO₂ fluxes & thermal anomalies'}
          </p>
        </div>

        {/* Quick Simulation Presets */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => triggerPreset('calm')}
            className="px-2.5 py-1 text-xs font-semibold rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
          >
            Calm Baseline
          </button>
          <button
            onClick={() => triggerPreset('unrest')}
            className="px-2.5 py-1 text-xs font-semibold rounded bg-neutral-800 hover:bg-neutral-700 text-amber-400 transition-colors"
          >
            Magma Influx Unrest
          </button>
          <button
            onClick={() => triggerPreset('critical')}
            className="px-2.5 py-1 text-xs font-bold rounded bg-red-600 hover:bg-red-500 text-white transition-all shadow-sm"
          >
            Critical Overpressure
          </button>
        </div>
      </div>

      {/* Main Grid: Telemetry Console (Left) + Barren Island Spotlight (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: 4 Monitoring Instruments Console */}
        <div className="lg:col-span-7 p-6 bg-neutral-950 space-y-6">
          {/* Active Alert Banner */}
          <div className={`p-4 rounded-xl border flex items-center justify-between ${alertColor}`}>
            <div className="flex items-center gap-3">
              <AlertOctagon className="w-6 h-6 shrink-0" />
              <div>
                <div className="text-xs uppercase font-mono font-bold tracking-wider">
                  Volcano Observatory Threat Status
                </div>
                <div className="text-base font-extrabold">{alertTitle}</div>
              </div>
            </div>
            <div className="font-mono text-xs font-bold px-3 py-1 rounded bg-black/40">
              Risk: {Math.round(riskScore * 100)}%
            </div>
          </div>

          {/* 4 Sensor Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Seismometer / Harmonic Tremor */}
            <div className="p-3.5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Harmonic Tremor (Seismic)</span>
                </span>
                <span className="font-mono text-cyan-400 font-bold">{seismicTremor}% Amplitude</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={seismicTremor}
                onChange={(e) => {
                  setSeismicTremor(Number(e.target.value));
                  if (Number(e.target.value) > 70) soundEngine.playRumble(400);
                }}
                className="w-full accent-cyan-500 bg-neutral-800 h-1.5 rounded cursor-pointer"
              />
              <div className="text-[10px] text-neutral-500">
                Continuous magma vibration in feeder pipe
              </div>
            </div>

            {/* 2. Tiltmeter (Ground Inflation) */}
            <div className="p-3.5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-300 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  <span>Edifice Tiltmeter (Inflation)</span>
                </span>
                <span className="font-mono text-amber-400 font-bold">+{groundTilt} µrad</span>
              </div>
              <input
                type="range"
                min={0}
                max={60}
                value={groundTilt}
                onChange={(e) => setGroundTilt(Number(e.target.value))}
                className="w-full accent-amber-500 bg-neutral-800 h-1.5 rounded cursor-pointer"
              />
              <div className="text-[10px] text-neutral-500">
                Swelling of volcano flanks as chamber fills
              </div>
            </div>

            {/* 3. Gas Spectrometer (SO2 Emission) */}
            <div className="p-3.5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-300 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-orange-400" />
                  <span>SO₂ Flux (Gas Emission)</span>
                </span>
                <span className="font-mono text-orange-400 font-bold">{so2Emission.toLocaleString()} t/d</span>
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={so2Emission}
                onChange={(e) => setSo2Emission(Number(e.target.value))}
                className="w-full accent-orange-500 bg-neutral-800 h-1.5 rounded cursor-pointer"
              />
              <div className="text-[10px] text-neutral-500">
                Surge indicates shallow magma degassing
              </div>
            </div>

            {/* 4. Thermal Satellite IR Anomaly */}
            <div className="p-3.5 bg-neutral-900 rounded-xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-300 flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-red-400" />
                  <span>Crater Thermal Anomaly</span>
                </span>
                <span className="font-mono text-red-400 font-bold">+{thermalAnomaly}°C</span>
              </div>
              <input
                type="range"
                min={10}
                max={350}
                step={5}
                value={thermalAnomaly}
                onChange={(e) => setThermalAnomaly(Number(e.target.value))}
                className="w-full accent-red-500 bg-neutral-800 h-1.5 rounded cursor-pointer"
              />
              <div className="text-[10px] text-neutral-500">
                Infrared satellite detection of ascending molten core
              </div>
            </div>
          </div>
        </div>

        {/* Right: Barren Island Spotlight & Scientific Context */}
        <div className="lg:col-span-5 p-6 bg-neutral-900/90 border-t lg:border-t-0 lg:border-l border-neutral-800 space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'hi'
                ? 'बैरन द्वीप: भारत का एकमात्र सक्रिय ज्वालामुखी'
                : language === 'or'
                ? 'ବାରେନ୍ ଦ୍ୱୀପ: ଭାରତର ଏକମାତ୍ର ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ'
                : 'Spotlight: Barren Island (India)'}
            </h3>
          </div>

          <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-xs space-y-2">
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-neutral-500">Geographic Location:</span>
                <div className="text-white font-medium">Andaman Sea (138 km NE of Port Blair)</div>
              </div>
              <div>
                <span className="text-neutral-500">Volcano Classification:</span>
                <div className="text-amber-400 font-medium">Composite / Stratovolcano</div>
              </div>
              <div>
                <span className="text-neutral-500">Tectonic Boundary:</span>
                <div className="text-cyan-400 font-medium">Indian & Burma Microplate Subduction</div>
              </div>
              <div>
                <span className="text-neutral-500">Summit Elevation:</span>
                <div className="text-emerald-400 font-mono font-medium">354 m (2,250 m from ocean floor)</div>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs text-neutral-300 leading-relaxed">
            <p>
              {language === 'hi'
                ? 'बैरन द्वीप अंडमान सागर में स्थित भारत का एकमात्र सक्रिय ज्वालामुखी है। यह भारतीय प्लेट के बर्मा माइक्रोप्लेट के नीचे सबडक्शन होने के कारण बना है।'
                : language === 'or'
                ? 'ବାରେନ୍ ଦ୍ୱୀପ ଆଣ୍ଡାମାନ ସାଗରରେ ଥିବା ଭାରତ ଓ ଦକ୍ଷିଣ ଏସିଆର ଏକମାତ୍ର ସକ୍ରିୟ ଜ୍ୱାଳାମୁଖୀ। ଭାରତୀୟ ପ୍ଲେଟ୍ ସବଡକ୍ସନ୍ ଯୋଗୁଁ ଏଠାରେ ନିରନ୍ତର ବିସ୍ଫୋରଣ ଘଟେ।'
                : 'Barren Island is a 3-km-wide volcanic island in the Andaman Sea. It sits atop the volcanic arc created where the oceanic Indian Plate subducts beneath the Burma microplate.'}
            </p>
            <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-[11px] space-y-1">
              <div className="font-semibold text-red-300 flex items-center justify-between">
                <span>
                  {language === 'hi'
                    ? 'हालिया विस्फोट रिकॉर्ड (30 जुलाई 2025 – 11 जनवरी 2026)'
                    : language === 'or'
                    ? 'ସାମ୍ପ୍ରତିକ ବିସ୍ଫୋରଣ (୩୦ ଜୁଲାଇ ୨୦୨୫ – ୧୧ ଜାନୁଆରୀ ୨୦୨୬)'
                    : 'Recent Eruption: 30 July 2025 – 11 January 2026'}
                </span>
                <span className="text-[10px] text-amber-400 font-mono">Smithsonian GVP</span>
              </div>
              <p className="text-neutral-300">
                {language === 'hi'
                  ? 'स्मिथसोनियन ग्लोबल वोल्केनिज्म प्रोग्राम के अनुसार, इस अवधि में भारी राख के गुबार और लावा देखा गया। सितंबर 2025 में 4.2 तीव्रता के भूकंप ने इसके मैग्मा चैंबर को हिलाकर विस्फोट तेज कर दिया था। वर्तमान (2026) में यह केवल धुआं छोड़ रहा है।'
                  : language === 'or'
                  ? 'ସ୍ମିଥସୋନିଆନ୍ ଜିଭିପି ରିପୋର୍ଟ ଅନୁସାରେ ଏହି ସମୟରେ ଲାଭା ଓ ପାଉଁଶ ବାହାରିଥିଲା। ସେପ୍ଟେମ୍ବର ୨୦୨୫ ରେ ୪.୨ ତୀବ୍ରତା ଭୂମିକମ୍ପ ଯୋଗୁଁ ମାଗ୍ମା ଚାମ୍ବର ପ୍ରଭାବିତ ହୋଇଥିଲା।'
                  : 'Smithsonian Global Volcanism Program confirmed extensive ash plumes and lava flows during this phase. In Sept 2025, a nearby M4.2 earthquake shook the chamber, triggering twin eruptive pulses. As of 2026, it is under continuous satellite telemetry in a fumarolic state.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
