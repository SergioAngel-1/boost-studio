import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useGTM } from './useGTM'

export const useScrollDepth = () => {
  const location = useLocation()
  const { trackEvent } = useGTM()
  const checkpointsRef = useRef({
    25: false,
    50: false,
    75: false,
    100: false,
  })

  useEffect(() => {
    // Reset checkpoints on route change
    checkpointsRef.current = {
      25: false,
      50: false,
      75: false,
      100: false,
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      
      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight
      const scrollPercentage = scrollableHeight > 0 
        ? Math.round((scrollTop / scrollableHeight) * 100)
        : 100

      // Check and track each checkpoint
      Object.keys(checkpointsRef.current).forEach((checkpoint) => {
        const checkpointValue = parseInt(checkpoint, 10)
        
        if (
          scrollPercentage >= checkpointValue &&
          !checkpointsRef.current[checkpointValue]
        ) {
          checkpointsRef.current[checkpointValue] = true
          
          trackEvent('scroll_depth', {
            scroll_percentage: checkpointValue,
            page_path: location.pathname,
            page_title: document.title,
          })
        }
      })
    }

    // Add scroll listener with throttle
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    
    // Check initial scroll position (in case user refreshes mid-page)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [location.pathname, trackEvent])
}
