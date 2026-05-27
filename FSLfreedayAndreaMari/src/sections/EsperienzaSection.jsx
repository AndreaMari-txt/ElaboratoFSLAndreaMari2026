import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'

const timeline = [
  {
    day: 'Giorno 1–2',
    title: 'Onboarding & Brief',
    desc: 'Presentazione del team e dell\'ambiente di lavoro. Analisi dei requisiti del progetto, definizione delle user stories e impostazione degli strumenti di sviluppo.',
  },
  {
    day: 'Giorno 3–4–5',
    title: 'Autoformazione tecnica',
    desc: 'Studio autonomo e guidato di concetti fondamentali non ancora affrontati nel percorso scolastico: struttura e progettazione di database relazionali, architettura client-server, funzionamento delle API REST e principi base dello sviluppo applicativo. Un prerequisito necessario per affrontare il progetto con consapevolezza tecnica.',
  },
  {
    day: 'Giorno 6–7–8',
    title: 'Design & Mockup',
    desc: 'Definizione dell\'architettura informativa dell\'applicazione, wireframe a bassa fedeltà su carta e successiva traduzione in mockup digitali. Scelta del design system, palette cromatica e struttura delle schermate principali.',
  },
  {
    day: 'Giorno 9–10',
    title: 'Setup tecnico',
    desc: 'Configurazione dell\'ambiente di sviluppo: inizializzazione del progetto React con Vite, setup del database su Supabase con schema relazionale, integrazione dell\'API esterna USDA FoodData Central per il recupero dei dati nutrizionali degli alimenti.',
  },
  {
    day: 'Giorno 11–12–13',
    title: 'Sviluppo core',
    desc: 'Implementazione delle funzionalità principali: sistema di autenticazione, diario pasti, calcolo calorico, tracciamento dei macronutrienti e dashboard di riepilogo. Il progetto è rimasto in fase di sviluppo interno — trattandosi di un percorso formativo, l\'obiettivo era comprendere il processo, non raggiungere un deploy in produzione.',
  },
]

export default function EsperienzaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="esperienza" className="py-28" style={{ background: '#161614' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label mb-4"
            >
              02 — Esperienza FSL
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="section-title mb-6"
            >
              Due settimane<br />
              <span className="text-gradient-accent">nel mondo del lavoro</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-body leading-relaxed mb-4"
              style={{ color: '#808070' }}
            >
              Dal 15 al 27 settembre 2025, immerso in un contesto di sviluppo software
              professionale. Non un'osservazione passiva, ma un contributo diretto a un
              progetto reale, con piena responsabilità sulle scelte progettuali e tecniche.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28 }}
              className="font-body leading-relaxed mb-4"
              style={{ color: '#606058' }}
            >
              L'aspetto più significativo è stato la gestione dell'autonomia: partire
              da un brief aperto e costruire un percorso tecnico coerente, prendendo
              decisioni architetturali concrete in un tempo limitato.
            </motion.p>

            {/* Highlight box — versione tecnica */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 highlight-box"
            >
              <p className="font-mono text-xs mb-2" style={{ color: '#484840' }}>Osservazione</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#888878' }}>
                Applicare in un contesto reale ciò che si conosce solo in teoria produce
                un salto qualitativo difficile da replicare in ambiente scolastico.
                La complessità non sta nel singolo concetto, ma nella loro integrazione
                simultanea sotto vincoli di tempo e qualità.
              </p>
            </motion.div>
          </div>

          {/* Right: timeline */}
          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ originY: 0 }}
              className="absolute left-4 top-0 bottom-0 w-px"
              style2={{ background: '#2a2a28' }}
            >
              <div className="w-full h-full" style={{ background: '#2a2a28' }} />
            </motion.div>

            <div className="space-y-8 pl-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full ring-4"
                       style={{ background: '#c0c0b8', ringColor: '#161614', outline: '4px solid #161614' }} />

                  <p className="font-mono text-xs mb-1" style={{ color: '#888878' }}>{item.day}</p>
                  <h3 className="font-display font-semibold mb-1" style={{ color: '#d8d8d0' }}>{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#606058' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
