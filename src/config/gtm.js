export const GTM_ID = import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX'

export const initGTM = () => {
  if (typeof window === 'undefined') return
  
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })
}

export const pushToDataLayer = (event) => {
  if (typeof window === 'undefined') return
  if (!window.dataLayer) {
    window.dataLayer = []
  }
  window.dataLayer.push(event)
}
