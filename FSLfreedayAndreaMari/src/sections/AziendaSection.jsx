import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Cpu, Layers, Zap, Brain } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { meta } from '../data/siteData'
import logoFreeday from '../assets/logofreeday15.png'

const pillars = [
  {
    icon: Cpu,
    title: 'Sviluppo Software',
    desc: 'Creazione di applicazioni web e mobile con tecnologie moderne, orientate a performance e scalabilità.',
  },
  {
    icon: Brain,
    title: 'AI & Automazione',
    desc: 'Integrazione di intelligenza artificiale nei flussi di lavoro per aumentare produttività e qualità del codice.',
  },
  {
    icon: Layers,
    title: 'Piattaforme Digitali',
    desc: 'Progettazione di ecosistemi digitali completi: backend, frontend, API e infrastruttura cloud.',
  },
  {
    icon: Zap,
    title: 'Innovazione continua',
    desc: 'Metodologie agili, sperimentazione rapida e cultura del miglioramento continuo come motori di crescita.',
  },
]

export default function AziendaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="azienda" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label mb-4"
            >
              01 — L'azienda
            </motion.p>

            {/* Logo FreeDay15 al posto del testo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mb-4"
            >
              <img
                src={logoFreeday}
                alt="FreeDay15 logo"
                style={{ height: '250px', width: 'auto', objectFit: 'contain'}}
              />
            </motion.div>

            <motion.a
              href={meta.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-1.5 font-mono text-xs mt-1"
              style={{ color: '#666658' }}
            >
              freeday15.it <ExternalLink size={11} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-2"
          >
            <p className="font-body leading-relaxed text-lg mb-4" style={{ color: '#808070' }}>
              FreeDay15 è una realtà innovativa nel panorama tecnologico italiano,
              con una filosofia da startup orientata allo sviluppo software, all'automazione
              e all'integrazione dell'intelligenza artificiale nei processi produttivi.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#606058' }}>
              Un ambiente dinamico dove le idee vengono messe alla prova rapidamente,
              il codice è il linguaggio comune e ogni membro del team contribuisce
              attivamente alla direzione del prodotto.
            </p>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.08 }}
              className="card-surface glow-card p-6 hover:border-opacity-60 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-colors"
                   style={{ background: '#232320' }}>
                <p.icon size={17} style={{ color: '#c0c0b8' }} />
              </div>
              <h3 className="font-display font-semibold mb-2" style={{ color: '#d8d8d0' }}>{p.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#606058' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contesto scolastico */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-5 rounded-xl"
          style={{ background: '#161614', border: '1px solid #222220' }}
        >
          <p className="font-mono text-xs mb-1" style={{ color: '#484840' }}>Contesto scolastico</p>
          <p className="font-body text-sm" style={{ color: '#606058' }}>
            Stage del quinto anno · <span style={{ color: '#888878' }}>{meta.school}</span> ·
            Classe {meta.class} · Anno scolastico {meta.year}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
