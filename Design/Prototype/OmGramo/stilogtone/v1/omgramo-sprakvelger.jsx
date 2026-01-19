import React, { useState } from 'react';

const OmGramoSprakvelger = () => {
  const [valg, setValg] = useState({
    intro_objekt: 'innspilt musikk',
    intro_bruk: 'spilles på radio, i butikker eller på treningssentre',
    intro_mottaker: 'artist, musiker eller plateselskap',
    intro_godtgjorelse: 'rett til betaling',
    kortfortalt_verb: 'samler inn og fordeler',
    hvem_utover: 'Utøvere',
    hvem_produsent: 'Produsenter',
    produsent_forklaring: true,
    gramo_tono_tabell: true
  });

  const alternativer = {
    intro_objekt: [
      {
        tekst: 'innspilt musikk',
        juridisk: 4,
        forstaelse: 5,
        kommentar: 'Kombinerer forståelighet med presisjon',
        anbefalt: true
      },
      {
        tekst: 'lydopptak',
        juridisk: 5,
        forstaelse: 2,
        kommentar: 'Juridisk korrekt, men fremmed for målgruppen',
        anbefalt: false
      },
      {
        tekst: 'musikk',
        juridisk: 2,
        forstaelse: 5,
        kommentar: 'Kan forveksles med komposisjon (TONO)',
        anbefalt: false
      },
      {
        tekst: 'innspillinger',
        juridisk: 4,
        forstaelse: 4,
        kommentar: 'Presist og forståelig',
        anbefalt: false
      }
    ],
    intro_bruk: [
      {
        tekst: 'spilles på radio, i butikker eller på treningssentre',
        juridisk: 3,
        forstaelse: 5,
        kommentar: 'Konkrete eksempler folk kjenner',
        anbefalt: true
      },
      {
        tekst: 'fremføres offentlig eller overføres til allmennheten',
        juridisk: 5,
        forstaelse: 2,
        kommentar: 'Juridisk presist, men tungt',
        anbefalt: false
      },
      {
        tekst: 'brukes offentlig',
        juridisk: 4,
        forstaelse: 4,
        kommentar: 'Kort og dekkende',
        anbefalt: false
      }
    ],
    intro_mottaker: [
      {
        tekst: 'artist, musiker eller plateselskap',
        juridisk: 3,
        forstaelse: 5,
        kommentar: 'Gjenkjennelige roller',
        anbefalt: true
      },
      {
        tekst: 'utøvende kunstner eller produsent av lydopptak',
        juridisk: 5,
        forstaelse: 2,
        kommentar: 'Juridisk presist, men fremmedgjørende',
        anbefalt: false
      },
      {
        tekst: 'rettighetshaver',
        juridisk: 5,
        forstaelse: 3,
        kommentar: 'Samlebegrep, men abstrakt',
        anbefalt: false
      }
    ],
    intro_godtgjorelse: [
      {
        tekst: 'rett til betaling',
        juridisk: 3,
        forstaelse: 5,
        kommentar: 'Konkret og motiverende',
        anbefalt: true
      },
      {
        tekst: 'krav på vederlag',
        juridisk: 5,
        forstaelse: 3,
        kommentar: 'Juridisk korrekt',
        anbefalt: false
      },
      {
        tekst: 'penger til gode',
        juridisk: 2,
        forstaelse: 5,
        kommentar: 'Veldig uformelt',
        anbefalt: false
      }
    ],
    kortfortalt_verb: [
      {
        tekst: 'samler inn og fordeler',
        juridisk: 4,
        forstaelse: 5,
        kommentar: 'Tydelig prosessbeskrivelse',
        anbefalt: true
      },
      {
        tekst: 'krever inn og utbetaler',
        juridisk: 4,
        forstaelse: 4,
        kommentar: 'Mer formelt',
        anbefalt: false
      },
      {
        tekst: 'forvalter vederlag for',
        juridisk: 5,
        forstaelse: 2,
        kommentar: 'Juridisk, men abstrakt',
        anbefalt: false
      }
    ],
    hvem_utover: [
      {
        tekst: 'Utøvere',
        juridisk: 4,
        forstaelse: 4,
        kommentar: 'Kort og gjenkjennelig',
        anbefalt: true
      },
      {
        tekst: 'Utøvende kunstnere',
        juridisk: 5,
        forstaelse: 3,
        kommentar: 'Juridisk term',
        anbefalt: false
      },
      {
        tekst: 'Artister og musikere',
        juridisk: 3,
        forstaelse: 5,
        kommentar: 'Hverdagsspråk',
        anbefalt: false
      }
    ],
    hvem_produsent: [
      {
        tekst: 'Produsenter',
        juridisk: 4,
        forstaelse: 3,
        kommentar: 'Trenger forklaring',
        anbefalt: true
      },
      {
        tekst: 'Produsenter av lydopptak',
        juridisk: 5,
        forstaelse: 2,
        kommentar: 'Juridisk presist',
        anbefalt: false
      },
      {
        tekst: 'Plateselskap',
        juridisk: 3,
        forstaelse: 5,
        kommentar: 'Konkret, men ufullstendig',
        anbefalt: false
      }
    ]
  };

  const beregnScore = () => {
    let juridisk = 0, forstaelse = 0, count = 0;

    Object.keys(alternativer).forEach(key => {
      const alt = alternativer[key]?.find(a => a.tekst === valg[key]);
      if (alt) {
        juridisk += alt.juridisk;
        forstaelse += alt.forstaelse;
        count++;
      }
    });

    return {
      juridisk: count > 0 ? Math.round(juridisk / count * 10) / 10 : 0,
      forstaelse: count > 0 ? Math.round(forstaelse / count * 10) / 10 : 0
    };
  };

  const score = beregnScore();

  const ScoreBar = ({ value, max = 5, label }) => {
    const barColor = value >= 4 ? 'bg-green-500' : value >= 3 ? 'bg-yellow-500' : 'bg-red-500';

    return (
      <div className="flex items-center gap-2">
        <span className="text-xs w-28 text-gray-600">{label}</span>
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

  const InlineSelect = ({ id, value, options, onChange }) => {
    const [open, setOpen] = useState(false);
    const selected = options?.find(o => o.tekst === value);

    if (!options) return <span>{value}</span>;

    return (
      <span className="relative inline">
        <button
          onClick={() => setOpen(!open)}
          className={`px-1 border-b-2 border-dashed transition-all ${
            selected?.anbefalt
              ? 'border-green-500 bg-green-50 hover:bg-green-100'
              : 'border-orange-400 bg-orange-50 hover:bg-orange-100'
          }`}
        >
          {value} ▼
        </button>

        {open && (
          <div className="absolute z-20 mt-1 w-80 bg-white border rounded-lg shadow-xl text-left text-base font-normal">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => { onChange(opt.tekst); setOpen(false); }}
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 border-b last:border-b-0 ${
                  opt.tekst === value ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={opt.anbefalt ? 'font-medium text-green-700' : 'text-gray-800'}>
                    {opt.tekst}
                    {opt.anbefalt && <span className="ml-2 text-xs text-green-600">✓ Anbefalt</span>}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{opt.kommentar}</div>
                <div className="flex gap-4 mt-1 text-xs text-gray-400">
                  <span>Juridisk: {'●'.repeat(opt.juridisk)}{'○'.repeat(5-opt.juridisk)}</span>
                  <span>Forståelse: {'●'.repeat(opt.forstaelse)}{'○'.repeat(5-opt.forstaelse)}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Språkvelger: Om Gramo (Nivå 2)</h1>
        <p className="text-gray-600">Klikk på de markerte ordene for å utforske alternativer</p>
      </div>

      {/* Score */}
      <div className="bg-white border rounded-xl p-4 mb-6">
        <div className="flex gap-8">
          <div className="flex-1">
            <ScoreBar value={score.juridisk} label="Juridisk presisjon" />
          </div>
          <div className="flex-1">
            <ScoreBar value={score.forstaelse} label="Forståelighet" />
          </div>
        </div>
      </div>

      {/* Content preview */}
      <div className="bg-white border rounded-xl p-8 prose prose-slate max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Slik fungerer Gramo</h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Når{' '}
          <InlineSelect
            id="intro_objekt"
            value={valg.intro_objekt}
            options={alternativer.intro_objekt}
            onChange={(v) => setValg({...valg, intro_objekt: v})}
          />
          {' '}
          <InlineSelect
            id="intro_bruk"
            value={valg.intro_bruk}
            options={alternativer.intro_bruk}
            onChange={(v) => setValg({...valg, intro_bruk: v})}
          />
          , har du som{' '}
          <InlineSelect
            id="intro_mottaker"
            value={valg.intro_mottaker}
            options={alternativer.intro_mottaker}
            onChange={(v) => setValg({...valg, intro_mottaker: v})}
          />
          {' '}
          <InlineSelect
            id="intro_godtgjorelse"
            value={valg.intro_godtgjorelse}
            options={alternativer.intro_godtgjorelse}
            onChange={(v) => setValg({...valg, intro_godtgjorelse: v})}
          />
          . Gramo sørger for at pengene kommer frem til deg.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Kort fortalt</h2>

        <p className="text-gray-700">
          Gramo{' '}
          <InlineSelect
            id="kortfortalt_verb"
            value={valg.kortfortalt_verb}
            options={alternativer.kortfortalt_verb}
            onChange={(v) => setValg({...valg, kortfortalt_verb: v})}
          />
          {' '}penger til de som har spilt inn musikken:
        </p>

        <ol className="list-decimal list-inside space-y-2 my-4 text-gray-700">
          <li><strong>Vi krever inn</strong> – Radiokanaler, butikker og andre som spiller musikk offentlig, betaler vederlag til Gramo.</li>
          <li><strong>Vi fordeler</strong> – Pengene fordeles til de som har rettighetene til innspillingene.</li>
          <li><strong>Du får utbetalt</strong> – Fire ganger i året sender vi pengene til kontoen din.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-4">Hvem får betalt?</h2>

        <p className="text-gray-700">Pengene fordeles mellom to grupper:</p>

        <div className="grid md:grid-cols-2 gap-6 my-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">
              <InlineSelect
                id="hvem_utover"
                value={valg.hvem_utover}
                options={alternativer.hvem_utover}
                onChange={(v) => setValg({...valg, hvem_utover: v})}
              />
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Alle som medvirker på innspillingen: artister, musikere, dirigenter, kormedlemmer.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">
              <InlineSelect
                id="hvem_produsent"
                value={valg.hvem_produsent}
                options={alternativer.hvem_produsent}
                onChange={(v) => setValg({...valg, hvem_produsent: v})}
              />
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              De som har finansiert og tilrettelagt innspillingen – ofte plateselskapet.
            </p>

            {valg.produsent_forklaring && (
              <div className="mt-3 p-2 bg-amber-50 border-l-2 border-amber-400 text-xs text-amber-800">
                <strong>Merk:</strong> "Produsent" i Gramo-sammenheng er den som har bekostet innspillingen – ikke nødvendigvis studioprodusenten.
              </div>
            )}
          </div>
        </div>

        {valg.gramo_tono_tabell && (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4">Hva er forskjellen på Gramo og TONO?</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-3 text-left border"></th>
                    <th className="p-3 text-left border font-semibold">Gramo</th>
                    <th className="p-3 text-left border font-semibold">TONO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-medium">Forvalter</td>
                    <td className="p-3 border">Innspillingen (lydopptaket)</td>
                    <td className="p-3 border">Komposisjonen (verket)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border font-medium">For deg som</td>
                    <td className="p-3 border">Spiller på innspillingen</td>
                    <td className="p-3 border">Skrev låta</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium">Eksempel</td>
                    <td className="p-3 border">Artist, musiker, plateselskap</td>
                    <td className="p-3 border">Komponist, tekstforfatter</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-3 italic">
              Enkelt sagt: TONO er for de som <em>skrev</em> låta. Gramo er for de som <em>spilte den inn</em>.
            </p>
          </>
        )}
      </div>

      {/* Toggles */}
      <div className="mt-6 bg-gray-50 border rounded-xl p-4">
        <h3 className="font-semibold mb-3 text-gray-800">Tilleggselementer</h3>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={valg.produsent_forklaring}
              onChange={(e) => setValg({...valg, produsent_forklaring: e.target.checked})}
              className="rounded"
            />
            <span className="text-sm">Produsent-forklaring (infoboks)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={valg.gramo_tono_tabell}
              onChange={(e) => setValg({...valg, gramo_tono_tabell: e.target.checked})}
              className="rounded"
            />
            <span className="text-sm">Gramo vs TONO-tabell</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default OmGramoSprakvelger;
