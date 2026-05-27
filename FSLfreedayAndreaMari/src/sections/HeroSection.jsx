import { motion } from 'framer-motion'
import { ArrowDown, Calendar, MapPin } from 'lucide-react'
import { meta, stats } from '../data/siteData'
import StatCard from '../components/StatCard'

export default function HeroSection() {
  const scrollNext = () => {
    const el = document.querySelector('#azienda')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-dots">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px]
                        rounded-full blur-[180px]"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[140px]"
             style={{ background: 'rgba(255,255,255,0.015)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="section-label">Elaborato FSL · Esame di Stato 2026</span>
          <div className="h-px flex-1 max-w-[80px]" style={{ background: '#2a2a28' }} />
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight"
          >
            <span className="text-gradient">Elaborato</span>
            <br />
            <span style={{ color: '#efefeb' }}>FSL</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
          style={{ color: '#808070' }}
        >
          Tredici giorni di stage presso{' '}
          <span style={{ color: '#c8c8c0', fontWeight: 500 }}>FreeDay15</span>, sviluppo di
          un'applicazione completa, e la scoperta concreta di come il software viene
          costruito nel mondo del lavoro.
        </motion.p>

        {/* Meta tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center gap-3 mt-8"
        >
          <div className="tag">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#c0c0b8' }} />
            {meta.student}
          </div>
          <div className="tag">
            <MapPin size={11} style={{ color: '#888878' }} />
            {meta.school} · {meta.class}
          </div>
          <div className="tag">
            <Calendar size={11} style={{ color: '#888878' }} />
            {meta.stagePeriod}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center gap-3 mt-10"
        >
          <button onClick={scrollNext} className="btn-accent">
            Esplora il progetto
          </button>
          <a href={meta.companyUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            FreeDay15
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-16"
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.08} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#484840' }}
        onMouseEnter={e => e.currentTarget.style.color = '#888878'}
        onMouseLeave={e => e.currentTarget.style.color = '#484840'}
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
