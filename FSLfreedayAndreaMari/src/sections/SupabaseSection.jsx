import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Shield, Zap, Globe, Server } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { supabaseFeatures } from '../data/siteData'
import supabaseLogo from '../assets/supabase-logo.png'

const icons = [Database, Shield, Globe, Shield, Zap, Server]

// Rimuoviamo Edge Functions dai dati (indice 5)
const features = [
  {
    icon: Database,
    title: 'Database PostgreSQL',
    desc: 'Schema relazionale per utenti, pasti, alimenti e log giornalieri. Relazioni ben definite con foreign key e indici ottimizzati per le query di riepilogo.',
  },
  {
    icon: Shield,
    title: 'Authentication',
    desc: 'Sistema di autenticazione completo con JWT, sessioni sicure, refresh token automatici e protezione delle route lato client.',
  },
  {
    icon: Globe,
    title: 'Auto-generated API',
    desc: 'REST API generate automaticamente dallo schema del database. Nessun backend custom da scrivere o mantenere.',
  },
  {
    icon: Shield,
    title: 'Row Level Security',
    desc: 'Policy RLS per garantire che ogni utente acceda esclusivamente ai propri dati nutrizionali, anche con API esposte.',
  },
  {
    icon: Zap,
    title: 'Realtime',
    desc: 'Sottoscrizioni realtime per aggiornamenti live della dashboard senza polling manuale o WebSocket personalizzati.',
  },
]

export default function SupabaseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="supabase" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-4"
          >
            05 — Backend
          </motion.p>

          {/* Logo Supabase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-6"
          >
            <img
              src={supabaseLogo}
              alt="Supabase"
              style={{ height: '100px', width: 'auto', objectFit: 'contain'}}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="section-title max-w-lg"
          >
            Il backend<br />
            <span className="text-gradient">del progetto</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="font-body mt-4 max-w-2xl leading-relaxed"
            style={{ color: '#808070' }}
          >
            Supabase ha permesso di costruire un backend completo in poche ore:
            database PostgreSQL, autenticazione, API REST e sicurezza a livello di riga.
            Nessun server da gestire, nessun deployment manuale dell'infrastruttura.
          </motion.p>
        </div>

        {/* Features grid — 5 card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.08 }}
              className="card-surface glow-card p-5 group transition-colors"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors"
                   style={{ background: '#232320' }}>
                <f.icon size={15} style={{ color: '#c0c0b8' }} />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1.5" style={{ color: '#d0d0c8' }}>{f.title}</h3>
              <p className="font-body text-xs leading-relaxed" style={{ color: '#606058' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
