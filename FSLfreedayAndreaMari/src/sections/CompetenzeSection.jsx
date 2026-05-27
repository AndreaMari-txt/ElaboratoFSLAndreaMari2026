import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import SkillBar from '../components/SkillBar'
import { softSkills, hardSkills, techStack } from '../data/siteData'

export default function CompetenzeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="competenze" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-4"
          >
            07 — Competenze
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="section-title max-w-lg"
          >
            Cosa ho<br />
            <span className="text-gradient">sviluppato</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: '#484840' }}>
              Soft Skills
            </p>
            <div className="space-y-5">
              {softSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={0.1 + i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Hard skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: '#484840' }}>
              Hard Skills
            </p>
            <div className="space-y-5">
              {hardSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={0.15 + i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: '#484840' }}>
              Stack tecnologico
            </p>
            <div className="space-y-2.5">
              {techStack.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-start justify-between p-3 rounded-xl transition-colors"
                  style={{ background: '#191917', border: '1px solid #242420' }}
                >
                  <div>
                    <p className="font-display font-semibold text-sm" style={{ color: '#c8c8c0' }}>{t.name}</p>
                    <p className="font-body text-xs mt-0.5" style={{ color: '#585850' }}>{t.desc}</p>
                  </div>
                  <span className="tag text-[10px] py-0.5 ml-3 shrink-0">{t.category}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
