import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BrainCircuit, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

const principles = [
  {
    good: false,
    label: 'Approccio passivo',
    desc: 'Copiare il codice generato senza comprenderlo. Delegare le decisioni architetturali al modello. Accettare l\'output senza verificarne la correttezza nel contesto specifico.',
  },
  {
    good: true,
    label: 'Approccio critico',
    desc: 'Usare l\'AI per accelerare la produzione di codice, poi rivedere, comprendere e adattare ogni blocco. Formulare richieste precise e valutare l\'output con competenza tecnica propria.',
  },
]

const windsurfUses = [
  'Generazione di strutture e componenti ripetitivi',
  'Debugging contestuale con spiegazione degli errori',
  'Refactoring e ottimizzazione del codice esistente',
  'Documentazione automatica dei componenti React',
  'Suggerimenti su pattern architetturali e best practice',
  'Risoluzione di errori Supabase e TypeScript',
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="ai" className="py-28" style={{ background: '#161614' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-4"
          >
            06 — AI & Sviluppo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="section-title max-w-2xl"
          >
            Gestire l'AI,<br />
            <span className="text-gradient-accent">non subirla</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body mt-4 max-w-2xl leading-relaxed"
            style={{ color: '#808070' }}
          >
            L'IDE Windsurf integra un assistente AI direttamente nel workflow di sviluppo.
            La lezione più rilevante non è stata come usare lo strumento, ma{' '}
            <strong style={{ color: '#c0c0b8' }}>quando fidarsi e quando no</strong> del suo output.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Central concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-1 card-surface glow-card p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                 style={{ background: '#232320' }}>
              <BrainCircuit size={24} style={{ color: '#b8b8b0' }} />
            </div>
            <blockquote className="font-display font-bold text-xl leading-snug mb-4"
                        style={{ color: '#d0d0c8' }}>
              "L'AI amplifica le competenze di chi la usa — non le sostituisce."
            </blockquote>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#606058' }}>
              Un modello AI produce output proporzionale alla qualità dell'input
              e alla capacità di chi lo usa di valutarlo. Senza comprensione tecnica
              del dominio, l'output generato è codice non verificabile.
            </p>
          </motion.div>

          {/* Approaches */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.1 }}
                className="card-surface glow-card p-5"
                style={{ borderColor: p.good ? '#3a3a38' : '#252522' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {p.good
                    ? <CheckCircle2 size={15} style={{ color: '#c0c0b8' }} />
                    : <AlertTriangle size={15} style={{ color: '#484840' }} />
                  }
                  <span className="font-display font-semibold text-sm"
                        style={{ color: p.good ? '#c8c8c0' : '#484840' }}>
                    {p.label}
                  </span>
                </div>
                <p className="font-body text-xs leading-relaxed" style={{ color: '#606058' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Windsurf uses */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="lg:col-span-1 card-surface glow-card p-6"
          >
            <p className="font-mono text-xs mb-1" style={{ color: '#484840' }}>Windsurf IDE</p>
            <h3 className="font-display font-semibold mb-5" style={{ color: '#d0d0c8' }}>
              Come è stato utilizzato
            </h3>
            <ul className="space-y-3">
              {windsurfUses.map((u, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ArrowRight size={12} style={{ color: '#888878', marginTop: 2, flexShrink: 0 }} />
                  <span className="font-body text-sm" style={{ color: '#808070' }}>{u}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
