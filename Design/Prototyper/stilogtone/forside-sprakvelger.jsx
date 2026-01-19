import React, { useState } from 'react';

const ForsideSprakvelger = () => {
  const [valg, setValg] = useState({
    objekt: 'innspillingene dine',
    godtgjorelse: 'får betalt',
    bruk: 'brukes offentlig',
    tonoDisclaimer: 'Skrev du låta? Da er det TONO du skal til.'
  });

  const alternativer = {
    objekt: [
      {
        tekst: 'innspillingene dine',
        juridisk: 4,
        forstaelse: 4,
        tonoRisiko: 1,
        anbefalt: true,
        kommentar: 'Presist nok, markerer forskjell til TONO'
      },
      {
        tekst: 'musikken din',
        juridisk: 2,
        forstaelse: 5,
        tonoRisiko: 3,
        anbefalt: false,
        kommentar: 'Kan forveksles med musikkverk (TONO)'
      },
      {
        tekst: 'lydopptakene dine',
        juridisk: 5,
        forstaelse: 2,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Juridisk presist, men fremmedgjørende'
      },
      {
        tekst: 'musikk du har spilt inn',
        juridisk: 4,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Lengre, men svært tydelig'
      }
    ],
    godtgjorelse: [
      {
        tekst: 'får betalt',
        juridisk: 3,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: true,
        kommentar: 'Umiddelbart forståelig, lav risiko'
      },
      {
        tekst: 'får vederlag',
        juridisk: 5,
        forstaelse: 2,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Juridisk korrekt, men byråkratisk'
      },
      {
        tekst: 'får penger',
        juridisk: 2,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Veldig uformelt, kan virke useriøst'
      },
      {
        tekst: 'mottar utbetaling',
        juridisk: 4,
        forstaelse: 3,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Nøytralt, men passivt'
      }
    ],
    bruk: [
      {
        tekst: 'brukes offentlig',
        juridisk: 4,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: true,
        kommentar: 'Dekker både fremføring og kringkasting'
      },
      {
        tekst: 'spilles offentlig',
        juridisk: 3,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Konkret, men dekker ikke all bruk'
      },
      {
        tekst: 'fremføres offentlig',
        juridisk: 5,
        forstaelse: 3,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Juridisk term, men teknisk'
      },
      {
        tekst: 'spilles på radio eller i butikker',
        juridisk: 3,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Konkret, men ufullstendig'
      }
    ],
    tonoDisclaimer: [
      {
        tekst: 'Skrev du låta? Da er det TONO du skal til.',
        juridisk: 4,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: true,
        kommentar: 'Direkte, tydelig avgrensning'
      },
      {
        tekst: 'Komponist eller tekstforfatter? Sjekk TONO.',
        juridisk: 5,
        forstaelse: 4,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Presise termer, litt stivere'
      },
      {
        tekst: 'TONO er for låtskrivere – Gramo er for de som spiller inn.',
        juridisk: 4,
        forstaelse: 5,
        tonoRisiko: 1,
        anbefalt: false,
        kommentar: 'Forklarende, men lengre'
      },
      {
        tekst: '',
        juridisk: 5,
        forstaelse: 3,
        tonoRisiko: 5,
        anbefalt: false,
        kommentar: 'Ingen disclaimer – høy forvekslingsrisiko'
      }
    ]
  };

  const beregnScore = () => {
    let juridisk = 0, forstaelse = 0, tonoRisiko = 0, count = 0;

    Object.keys(valg).forEach(key => {
      const alt = alternativer[key]?.find(a => a.tekst === valg[key]);
      if (alt) {
        juridisk += alt.juridisk;
        forstaelse += alt.forstaelse;
        tonoRisiko += alt.tonoRisiko;
        count++;
      }
    });

    return {
      juridisk: Math.round(juridisk / count * 10) / 10,
      forstaelse: Math.round(forstaelse / count * 10) / 10,
      tonoRisiko: Math.round(tonoRisiko / count * 10) / 10
    };
  };

  const score = beregnScore();

  const ScoreBar = ({ value, max = 5, label, color, invert = false }) => {
    const displayValue = invert ? (max + 1 - value) : value;
    const barColor = invert
      ? (value <= 2 ? 'bg-green-500' : value <= 3 ? 'bg-yellow-500' : 'bg-red-500')
      : (value >= 4 ? 'bg-green-500' : value >= 3 ? 'bg-yellow-500' : 'bg-red-500');

    return (
      <div className="flex items-center gap-2">
        <span className="text-xs w-24 text-gray-600">{label}</span>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${barColor}`}
            style={{ width: `${(value / max) * 100}%` }}
          />
        </div>
        <span className="text-xs w-8 text-gray-500">{value.toFixed(1)}</span>
      </div>
    );
  };

  const Dropdown = ({ id, value, options, onChange }) => {
    const [open, setOpen] = useState(false);
    const selected = options.find(o => o.tekst === value);

    return (
      <div className="relative inline-block">
        <button
          onClick={() => setOpen(!open)}
          className={`px-2 py-1 rounded border-b-2 border-dashed transition-all ${
            selected?.anbefalt
              ? 'border-green-500 bg-green-50 hover:bg-green-100'
              : 'border-orange-400 bg-orange-50 hover:bg-orange-100'
          }`}
        >
          {value || '(ingen)'} ▼
        </button>

        {open && (
          <div className="absolute z-10 mt-1 w-80 bg-white border rounded-lg shadow-xl">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => { onChange(opt.tekst); setOpen(false); }}
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 border-b last:border-b-0 ${
                  opt.tekst === value ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={opt.anbefalt ? 'font-medium text-green-700' : ''}>
                    {opt.tekst || '(ingen disclaimer)'}
                    {opt.anbefalt && <span className="ml-2 text-xs text-green-600">✓ Anbefalt</span>}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{opt.kommentar}</div>
                <div className="flex gap-4 mt-1 text-xs">
                  <span>Juridisk: {'●'.repeat(opt.juridisk)}{'○'.repeat(5-opt.juridisk)}</span>
                  <span>Forståelse: {'●'.repeat(opt.forstaelse)}{'○'.repeat(5-opt.forstaelse)}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const getKommentar = (key) => {
    const alt = alternativer[key]?.find(a => a.tekst === valg[key]);
    return alt?.kommentar || '';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Språkvelger: Forside</h1>
        <p className="text-gray-600">Klikk på ordene for å utforske alternativer</p>
      </div>

      {/* Preview */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-xl mb-6">
        <p className="text-sm text-slate-400 mb-2 tracking-wide">En kilde til et rikt musikkliv</p>

        <h2 className="text-2xl leading-relaxed mb-4">
          Gramo sørger for at du{' '}
          <Dropdown
            id="godtgjorelse"
            value={valg.godtgjorelse}
            options={alternativer.godtgjorelse}
            onChange={(v) => setValg({...valg, godtgjorelse: v})}
          />
          {' '}når{' '}
          <Dropdown
            id="objekt"
            value={valg.objekt}
            options={alternativer.objekt}
            onChange={(v) => setValg({...valg, objekt: v})}
          />
          {' '}
          <Dropdown
            id="bruk"
            value={valg.bruk}
            options={alternativer.bruk}
            onChange={(v) => setValg({...valg, bruk: v})}
          />.
        </h2>

        <p className="text-slate-400 text-sm mb-6">
          <Dropdown
            id="tonoDisclaimer"
            value={valg.tonoDisclaimer}
            options={alternativer.tonoDisclaimer}
            onChange={(v) => setValg({...valg, tonoDisclaimer: v})}
          />
        </p>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white text-slate-800 rounded-lg font-medium">
            Slik fungerer det
          </button>
          <button className="px-4 py-2 border border-slate-500 text-slate-300 rounded-lg">
            Logg inn
          </button>
        </div>
      </div>

      {/* Score */}
      <div className="bg-white border rounded-xl p-6 mb-6">
        <h3 className="font-semibold mb-4 text-gray-800">Samlet vurdering</h3>
        <div className="space-y-3">
          <ScoreBar value={score.juridisk} label="Juridisk presisjon" />
          <ScoreBar value={score.forstaelse} label="Forståelighet" />
          <ScoreBar value={score.tonoRisiko} label="TONO-forveksling" invert={true} />
        </div>
      </div>

      {/* Valgte formuleringer */}
      <div className="bg-gray-50 border rounded-xl p-6">
        <h3 className="font-semibold mb-4 text-gray-800">Valgte formuleringer</h3>
        <div className="space-y-3">
          {Object.keys(valg).map(key => {
            const alt = alternativer[key]?.find(a => a.tekst === valg[key]);
            return (
              <div key={key} className="flex items-start gap-3">
                <span className={`px-2 py-1 rounded text-sm ${
                  alt?.anbefalt ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {alt?.anbefalt ? '✓' : '?'}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{valg[key] || '(ingen)'}</p>
                  <p className="text-sm text-gray-500">{getKommentar(key)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kopier tekst */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">Ferdig tekst</h4>
        <p className="text-blue-900">
          Gramo sørger for at du {valg.godtgjorelse} når {valg.objekt} {valg.bruk}.
          {valg.tonoDisclaimer && ` ${valg.tonoDisclaimer}`}
        </p>
      </div>
    </div>
  );
};

export default ForsideSprakvelger;
