import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ id, className = '', style = {}, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
      style={style}
    >
      {children}
    </motion.section>
  )
}
