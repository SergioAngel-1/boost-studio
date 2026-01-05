import { useCallback, useEffect, useRef, useState } from 'react'

export const useBeamAnimation = (safeActiveIndex) => {
  const [beamKey, setBeamKey] = useState(0)
  const [beamData, setBeamData] = useState(null)
  const navRefs = useRef([])
  const hasPrimedBeam = useRef(false)

  const updateBeam = useCallback(() => {
    const firstEl = navRefs.current[0]
    const lastEl = navRefs.current[navRefs.current.length - 1]
    const activeEl = navRefs.current[safeActiveIndex]

    if (!firstEl || !lastEl || !activeEl) {
      setBeamData(null)
      return
    }

    const firstRect = firstEl.getBoundingClientRect()
    const lastRect = lastEl.getBoundingClientRect()
    const activeRect = activeEl.getBoundingClientRect()

    const startX = 0
    const endX = lastRect.right - firstRect.left
    const y = activeRect.bottom - firstRect.top + 18
    
    const activeStartX = 0
    const activeEndX = activeRect.right - firstRect.left

    const width = endX
    const height = y + 10

    setBeamData({
      width: width,
      height: height,
      fullLine: {
        x1: startX,
        x2: endX,
        y: y
      },
      activeLine: {
        x1: activeStartX,
        x2: activeEndX,
        y: y
      }
    })
  }, [safeActiveIndex])

  const triggerBeam = useCallback(() => {
    setBeamKey(Date.now())
    requestAnimationFrame(updateBeam)
  }, [updateBeam])

  useEffect(() => {
    const handleResize = () => updateBeam()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [updateBeam])

  useEffect(() => {
    if (!hasPrimedBeam.current && navRefs.current[safeActiveIndex]) {
      hasPrimedBeam.current = true
      requestAnimationFrame(() => setBeamKey(Date.now()))
    }
  }, [safeActiveIndex])

  return {
    beamKey,
    beamData,
    navRefs,
    triggerBeam,
    updateBeam,
  }
}
