/**
 * Utilidades para gestión de Google Tag Manager y Google Analytics 4
 * Carga condicional basada en consentimiento de cookies
 */

// Configuración de GTM desde variables de entorno
const GTM_ID = import.meta.env.VITE_GTM_ID

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
    loadGTM()
  }
}

/**
 * Carga Google Tag Manager dinámicamente
 * Solo se ejecuta si el usuario acepta cookies
 */
export const loadGTM = () => {
  // Evitar cargar dos veces
  if (window.gtmLoaded) {
    console.log('[Analytics] GTM ya está cargado')
    return
  }

  console.log('[Analytics] Cargando Google Tag Manager...')

  // Inicializar dataLayer antes de cargar el script
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })

  // Crear y cargar script de GTM
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  
  script.onload = () => {
    console.log('[Analytics] ✅ GTM cargado exitosamente')
    window.gtmLoaded = true
  }

  script.onerror = () => {
    console.error('[Analytics] ❌ Error al cargar GTM')
  }

  document.head.appendChild(script)

  // Agregar noscript iframe para GTM
  const noscript = document.createElement('noscript')
  const iframe = document.createElement('iframe')
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.display = 'none'
  iframe.style.visibility = 'hidden'
  noscript.appendChild(iframe)
  document.body.insertBefore(noscript, document.body.firstChild)
}

/**
 * Elimina todas las cookies de Google Analytics
 * Se ejecuta cuando el usuario rechaza cookies
 */
export const removeAnalytics = () => {
  console.log('[Analytics] Eliminando cookies de Google Analytics...')

  // Lista de cookies de GA4 y GTM a eliminar
  const cookiePatterns = [
    '_ga',
    '_gid',
    '_gat',
    '_gat_gtag',
    '_gcl_au',
    '_gac_',
  ]

  // Obtener todas las cookies
  const cookies = document.cookie.split(';')

  cookies.forEach((cookie) => {
    const cookieName = cookie.split('=')[0].trim()

    // Verificar si coincide con algún patrón de GA
    const shouldDelete = cookiePatterns.some((pattern) => cookieName.startsWith(pattern))

    if (shouldDelete) {
      // Eliminar cookie en todos los dominios y paths posibles
      const domains = [window.location.hostname, `.${window.location.hostname}`]
      const paths = ['/', '']

      domains.forEach((domain) => {
        paths.forEach((path) => {
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; domain=${domain}`
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`
        })
      })

      console.log(`[Analytics] Cookie eliminada: ${cookieName}`)
    }
  })

  // GTM maneja la deshabilitación de GA4 automáticamente

  // Limpiar dataLayer
  if (window.dataLayer) {
    window.dataLayer = []
    console.log('[Analytics] dataLayer limpiado')
  }

  // Marcar que GTM no está cargado
  window.gtmLoaded = false

  console.log('[Analytics] ✅ Cookies eliminadas y tracking deshabilitado')
}

/**
 * Guarda el consentimiento del usuario
 */
export const saveConsent = (accepted) => {
  const value = accepted ? 'accepted' : 'rejected'
  localStorage.setItem('boost-cookie-consent', value)
  console.log(`[Analytics] Consentimiento guardado: ${value}`)

  if (accepted) {
    loadGTM()
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
