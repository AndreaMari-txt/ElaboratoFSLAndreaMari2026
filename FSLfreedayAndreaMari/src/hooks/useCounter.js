import { useEffect, useState } from 'react'

/**
 * Anima un numero da 0 a `target` in `duration` ms.
 * Parte solo quando `trigger` è true.
 */
export default function useCounter(target, duration = 1800, trigger = true) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4)
      setValue(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, target, duration])

  return value
}
