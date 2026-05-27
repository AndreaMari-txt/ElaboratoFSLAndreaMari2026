import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { meta } from '../data/siteData'

const reflections = [
  {
    number: '01',
    title: 'Crescita tecnica',
    body: 'La distanza tra conoscere un concetto teoricamente e saperlo applicare in un contesto produttivo è sostanziale. Durante lo stage ho dovuto integrare simultaneamente database relazionali, autenticazione, API esterne e logica applicativa — competenze che a scuola vengono affrontate in modo sequenziale e isolato. La vera crescita tecnica non è avvenuta nell\'apprendimento di una singola tecnologia, ma nella capacità di farle funzionare insieme sotto vincoli reali di tempo.',
  },
  {
    number: '02',
    title: 'Collegamento tra formazione e lavoro',
    body: 'Il percorso scolastico costruisce un modello mentale: fornisce i concetti, il metodo, il rigore. L\'esperienza lavorativa lo testa. Ho verificato direttamente come argomenti come la progettazione di database, la struttura delle API o la separazione tra frontend e backend — che a scuola rischiano di sembrare astratti — diventino immediatamente concreti nel momento in cui è necessario produrre qualcosa che funzioni. Questo collegamento non è scontato e richiede di essere cercato attivamente.',
  },
  {
    number: '03',
    title: 'Autonomia decisionale',
    body: 'Lavorare con libertà progettuale significa assumersi la responsabilità delle proprie scelte. Ogni decisione — dall\'architettura del database alla scelta dell\'API nutrizionale — aveva conseguenze sul resto del progetto. Ho imparato che non esiste sempre una risposta corretta, ma esistono scelte più o meno giustificabili. La capacità di argomentare una decisione tecnica è una competenza tanto importante quanto quella di implementarla.',
  },
  {
    number: '04',
    title: 'L\'AI come strumento di sviluppo',
    body: 'L\'utilizzo di Windsurf con AI integrata ha cambiato il mio modo di vedere l\'intelligenza artificiale nel lavoro tecnico. Non è uno strumento che sostituisce il programmatore, ma uno che amplifica la sua produttività — a condizione che chi lo usa abbia una comprensione sufficiente del dominio per valutare l\'output generato. Ho imparato che saper fare le domande giuste a un modello AI è una competenza tecnica a tutti gli effetti.',
  },
  {
    number: '05',
    title: 'Lavoro in team e comunicazione tecnica',
    body: 'Confrontarsi con altri sviluppatori ha richiesto una comunicazione precisa: descrivere un problema in modo chiaro, proporre una soluzione e accettare feedback costruttivo. Ho scoperto che la comunicazione tecnica è una competenza separata dalla competenza tecnica stessa, e che nei contesti lavorativi reali ha un peso determinante sulla qualità del lavoro prodotto.',
  },
  {
    number: '06',
    title: 'Visione sul futuro professionale',
    body: 'Questa esperienza ha chiarito il tipo di ambiente in cui voglio lavorare: contesti orientati al prodotto, dove le decisioni tecniche hanno impatto diretto sull\'utente finale. L\'interesse non è solo nello scrivere codice, ma nel costruire sistemi che risolvano problemi reali. Lo stage ha reso concreta questa direzione, trasformandola da aspirazione generica a obiettivo definito.',
  },
]

export default function ConclusioniSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="conclusioni" className="py-28" style={{ background: '#161614' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label mb-4"
            >
              08 — Riflessione finale
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="section-title"
            >
              Quello che<br />
              <span className="text-gradient-accent">rimane</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="pt-2"
          >
            <p className="font-body leading-relaxed mb-4" style={{ color: '#808070' }}>
              Tredici giorni non sono sufficienti a formare uno sviluppatore completo.
              Sono però sufficienti a capire cosa significa <strong style={{ color: '#c8c8c0' }}>
              costruire software in modo professionale</strong> — con le sue complessità,
              le sue interdipendenze e le sue responsabilità.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#606058' }}>
              Il risultato tangibile è un'applicazione parzialmente sviluppata.
              Il risultato reale è un metodo: la capacità di affrontare un problema
              tecnico sconosciuto con approccio sistematico, valutando le opzioni
              disponibili e prendendo decisioni giustificabili.
            </p>
          </motion.div>
        </div>

        {/* Reflection cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {reflections.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.08 }}
              className="card-surface glow-card p-6 relative overflow-hidden"
            >
              <span className="absolute top-3 right-4 font-display font-black text-5xl select-none"
                    style={{ color: '#2e2e2c' }}>
                {r.number}
              </span>
              <h3 className="font-display font-semibold mb-3" style={{ color: '#d0d0c8' }}>{r.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#606058' }}>{r.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Final block — pulito, senza ripetizioni */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="card-surface glow-card p-10 text-center"
          style={{ borderColor: '#2e2e2c' }}
        >
          <p className="font-mono text-xs mb-3" style={{ color: '#484840' }}>
            {meta.student} · {meta.class} · ITT Allievi San Gallo, Terni
          </p>
          <h3 className="font-display font-black text-3xl md:text-4xl mb-2" style={{ color: '#d8d8d0' }}>
            Formazione Scuola Lavoro
          </h3>
          <p className="font-display font-semibold mb-4" style={{ color: '#555548' }}>
            Stage presso FreeDay15 · {meta.stagePeriod}
          </p>
          <p className="font-mono text-xs mb-8" style={{ color: '#3a3a38' }}>
            Anno scolastico {meta.year}
          </p>
          <a
            href={meta.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Visita FreeDay15 <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
