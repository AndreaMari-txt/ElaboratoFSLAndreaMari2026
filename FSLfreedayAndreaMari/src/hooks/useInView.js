import { useEffect, useRef, useState } from 'react'

/**
 * Restituisce [ref, isInView].
 * Appena l'elemento entra nel viewport, isInView diventa true
 * e ci rimane (once: true di default).
 */
export default function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // once — non serve più osservare
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
