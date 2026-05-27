import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm" style={{ color: '#888878' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color: '#484840' }}>{level}%</span>
      </div>
      <div className="h-px rounded-full overflow-hidden" style={{ background: '#2a2a28' }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
          style={{ originX: 0, width: `${level}%`, background: '#c0c0b8' }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  )
}
