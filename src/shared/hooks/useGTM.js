import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pushToDataLayer } from '../../utils/analytics'

export const useGTM = () => {
  const location = useLocation()
  
  useEffect(() => {
    pushToDataLayer({
      event: 'pageview',
      page: {
        path: location.pathname,
        title: document.title,
        url: window.location.href
      }
    })
  }, [location])
  
  const trackEvent = (eventName, eventData = {}) => {
    pushToDataLayer({
      event: eventName,
      ...eventData
    })
  }
  
  return { trackEvent }
}
