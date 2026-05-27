import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedNumber({ target, suffix = '', trigger }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = null
    const duration = 1800
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 4)
      setValue(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, target])

  return <>{value}{suffix}</>
}

export default function StatCard({ value, suffix, label, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="card-surface glow-card p-6 flex flex-col gap-1"
    >
      <span className="font-display text-4xl font-bold" style={{ color: '#d8d8d0' }}>
        <AnimatedNumber target={value} suffix={suffix} trigger={inView} />
      </span>
      <span className="font-body text-sm" style={{ color: '#585850' }}>{label}</span>
    </motion.div>
  )
}
