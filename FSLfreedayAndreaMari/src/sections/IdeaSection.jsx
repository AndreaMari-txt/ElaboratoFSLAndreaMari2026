import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'

const phases = [
  {
    icon: Lightbulb,
    step: '01',
    title: 'Ideazione',
    desc: 'Brainstorming del concept: un diario nutrizionale semplice ma completo. Analisi del problema e definizione del target utente.',
    tools: ['Carta e penna', 'User stories', 'Brief aziendale'],
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design & Mockup',
    desc: 'Wireframe a bassa fedeltà su carta, tradotti in mockup digitali con Canva. Definizione della palette cromatica, tipografia e struttura delle schermate principali.',
    tools: ['Canva', 'Wireframe', 'Design system'],
  },
  {
    icon: Code2,
    step: '03',
    title: 'Setup tecnico',
    desc: 'Configurazione Supabase con schema relazionale, inizializzazione progetto React con Vite, integrazione API USDA FoodData Central per i dati nutrizionali degli alimenti.',
    tools: ['Windsurf IDE', 'Supabase', 'USDA API'],
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Sviluppo core',
    desc: 'Implementazione delle funzionalità principali: autenticazione, diario pasti, calcolo calorico, tracking macronutrienti e dashboard di riepilogo giornaliero.',
    tools: ['React + Vite', 'Recharts', 'Tailwind CSS'],
  },
]

export default function IdeaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="idea" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-4"
          >
            03 — Processo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="section-title max-w-xl"
          >
            Dall'idea<br />
            <span className="text-gradient-accent">alla realizzazione</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.1 }}
              className="card-surface glow-card p-6 group relative overflow-hidden"
            >
              {/* Step watermark */}
              <span className="absolute top-3 right-4 font-display font-black text-5xl select-none"
                    style={{ color: '#2e2e2c' }}>
                {phase.step}
              </span>

              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-5 transition-colors"
                   style={{ background: '#232320' }}>
                <phase.icon size={17} style={{ color: '#b8b8b0' }} />
              </div>

              <h3 className="font-display font-semibold mb-2" style={{ color: '#d0d0c8' }}>{phase.title}</h3>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#606058' }}>{phase.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {phase.tools.map((t) => (
                  <span key={t} className="tag text-[11px] py-0.5">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
