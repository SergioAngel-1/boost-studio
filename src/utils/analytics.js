/**
 * Utilidades para gestión de Google Tag Manager y Google Analytics 4
 * Carga condicional basada en consentimiento de cookies
 */

// Configuración de GTM desde variables de entorno
const GTM_ID = import.meta.env.VITE_GTM_ID

let gtmLoadPromise = null
let webVitalsStarted = false

/**
 * Verifica si el usuario ha dado consentimiento para cookies
 */
export const hasConsent = () => {
  const consent = localStorage.getItem('boost-cookie-consent')
  return consent === 'accepted'
}

/**
 * Inicializa analytics si hay consentimiento previo
 * Se ejecuta al cargar la aplicación
 */
export const initializeAnalytics = () => {
  if (hasConsent()) {
    startTracking()
  }
}

const startTracking = async () => {
  if (typeof window === 'undefined') return

  try {
    // Limpiar flag de deshabilitación (si el usuario rechazó antes y ahora acepta)
    if (GTM_ID) {
      delete window[`ga-disable-${GTM_ID}`]
    }

    await loadGTM()
    await ensureWebVitals()

    // Enviar pageview inicial para la página actual (el useGTM ya disparó antes del consent)
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: window.location.pathname,
          title: document.title,
          url: window.location.href,
        },
      })
    }
  } catch (error) {
    console.error('[Analytics] ❌ Error iniciando el tracking', error)
  }
}

const ensureWebVitals = async () => {
  if (webVitalsStarted) return

  const { reportWebVitals } = await import('../shared/utils/reportWebVitals.js')
  reportWebVitals()
  webVitalsStarted = true
}

/**
 * Carga Google Tag Manager dinámicamente
 * Solo se ejecuta si el usuario acepta cookies
 */
export const loadGTM = () => {
  if (typeof window === 'undefined') return Promise.resolve()
  if (!GTM_ID) {
    console.warn('[Analytics] GTM_ID no configurado')
    return Promise.resolve()
  }

  if (window.gtmLoaded) {
    return Promise.resolve()
  }

  if (gtmLoadPromise) {
    return gtmLoadPromise
  }

  console.log('[Analytics] Cargando Google Tag Manager...')

  // Inicializar dataLayer antes de cargar el script
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })

  gtmLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    
    script.onload = () => {
      console.log('[Analytics] ✅ GTM cargado exitosamente')
      window.gtmLoaded = true
      resolve()
    }

    script.onerror = (error) => {
      console.error('[Analytics] ❌ Error al cargar GTM', error)
      gtmLoadPromise = null
      reject(error)
    }

    document.head.appendChild(script)
  })

  if (document.body && !document.body.querySelector('noscript[data-gtm="true"]')) {
    const noscript = document.createElement('noscript')
    noscript.dataset.gtm = 'true'
    const iframe = document.createElement('iframe')
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`
    iframe.height = '0'
    iframe.width = '0'
    iframe.style.display = 'none'
    iframe.style.visibility = 'hidden'
    noscript.appendChild(iframe)
    document.body.insertBefore(noscript, document.body.firstChild)
  }

  return gtmLoadPromise
}

/**
 * Elimina todas las cookies de Google Analytics y limpia GTM del DOM
 * Se ejecuta cuando el usuario rechaza cookies
 */
export const removeAnalytics = () => {
  if (typeof window === 'undefined') return

  console.log('[Analytics] Eliminando cookies y scripts de tracking...')

  // 1. Eliminar cookies de GA4 y GTM
  const cookiePatterns = [
    '_ga',
    '_gid',
    '_gat',
    '_gat_gtag',
    '_gcl_au',
    '_gac_',
  ]

  const cookies = document.cookie.split(';')

  cookies.forEach((cookie) => {
    const cookieName = cookie.split('=')[0].trim()
    const shouldDelete = cookiePatterns.some((pattern) => cookieName.startsWith(pattern))

    if (shouldDelete) {
      const domains = [window.location.hostname, `.${window.location.hostname}`]
      const paths = ['/', '']

      domains.forEach((domain) => {
        paths.forEach((path) => {
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=${domain}`
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`
        })
      })
    }
  })

  // 2. Deshabilitar GA4 a nivel de window (previene tracking residual)
  if (GTM_ID) {
    window[`ga-disable-${GTM_ID}`] = true
  }

  // 3. Eliminar script de GTM del <head>
  const gtmScripts = document.querySelectorAll(`script[src*="googletagmanager.com/gtm.js"]`)
  gtmScripts.forEach((script) => script.remove())

  // 4. Eliminar noscript iframe de GTM del <body>
  const gtmNoscripts = document.querySelectorAll('noscript[data-gtm="true"]')
  gtmNoscripts.forEach((noscript) => noscript.remove())

  // 5. Limpiar dataLayer sin reasignar la referencia (GTM mantiene ref interna)
  if (window.dataLayer) {
    window.dataLayer.length = 0
  }

  // 6. Resetear estado interno
  window.gtmLoaded = false
  gtmLoadPromise = null

  console.log('[Analytics] ✅ Scripts eliminados, cookies limpiadas, tracking deshabilitado')
}

/**
 * Guarda el consentimiento del usuario
 */
export const saveConsent = (accepted) => {
  const value = accepted ? 'accepted' : 'rejected'
  localStorage.setItem('boost-cookie-consent', value)
  console.log(`[Analytics] Consentimiento guardado: ${value}`)

  if (accepted) {
    startTracking()
  } else {
    removeAnalytics()
  }
}

/**
 * Verifica si ya se tomó una decisión sobre cookies
 */
export const hasDecision = () => {
  const consent = localStorage.getItem('boost-cookie-consent')
  return consent !== null
}

/**
 * Resetea el consentimiento (útil para testing)
 */
export const resetConsent = () => {
  localStorage.removeItem('boost-cookie-consent')
  removeAnalytics()
  console.log('[Analytics] Consentimiento reseteado')
}

/**
 * Push seguro al dataLayer — solo si hay consentimiento activo y GTM cargado
 * Todos los hooks/utils deben usar esta función en lugar de pushear directamente
 */
export const pushToDataLayer = (event) => {
  if (typeof window === 'undefined') return
  if (!hasConsent()) return
  if (!window.dataLayer) return

  window.dataLayer.push(event)
}
