import { useEffect, useState } from 'react'
import { animate, useMotionValue } from 'framer-motion'

const DEFAULT_EASING = [0.22, 1, 0.36, 1]

export const useCountingValue = ({ target, isActive, duration = 2.4, decimals = 0, easing = DEFAULT_EASING }) => {
  const motionValue = useMotionValue(0)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isActive) return undefined

    const controls = animate(motionValue, target, {
      duration,
      ease: easing,
      onUpdate: latest => setValue(Number(latest.toFixed(decimals))),
    })

    return () => controls.stop()
  }, [decimals, duration, easing, isActive, motionValue, target])

  return value
}
