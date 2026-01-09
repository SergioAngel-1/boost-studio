/**
 * reCAPTCHA v2 Configuration for EmailJS
 * 
 * EmailJS solo acepta reCAPTCHA v2 (checkbox o invisible)
 * Este archivo maneja la configuración y carga del widget
 */

export const recaptchaConfig = {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
}

/**
 * Valida que la site key esté configurada
 * @returns {boolean}
 */
export const validateRecaptchaConfig = () => {
  if (!recaptchaConfig.siteKey) {
    console.error('❌ reCAPTCHA: VITE_RECAPTCHA_SITE_KEY no configurada en .env')
    return false
  }
  return true
}

/**
 * Carga el script de reCAPTCHA dinámicamente
 * @returns {Promise<void>}
 */
export const loadRecaptchaScript = () => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window no disponible'))
      return
    }

    // Si ya está cargado, resolver inmediatamente
    if (isRecaptchaLoaded()) {
      resolve()
      return
    }

    // Si ya existe el script en el DOM, esperar a que cargue
    const existingScript = document.querySelector('script[src*="recaptcha"]')
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve())
      existingScript.addEventListener('error', reject)
      return
    }

    // Crear y cargar el script
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true

    script.onload = () => {
      resolve()
    }

    script.onerror = () => {
      reject(new Error('Error al cargar el script de reCAPTCHA'))
    }

    document.head.appendChild(script)
  })
}

/**
 * Verifica si el script de reCAPTCHA está cargado
 * @returns {boolean}
 */
export const isRecaptchaLoaded = () => {
  return typeof window !== 'undefined' && typeof window.grecaptcha !== 'undefined'
}

/**
 * Espera a que reCAPTCHA esté listo
 * @returns {Promise<void>}
 */
export const waitForRecaptcha = () => {
  return new Promise((resolve, reject) => {
    if (isRecaptchaLoaded()) {
      window.grecaptcha.ready(() => resolve())
      return
    }

    const timeout = setTimeout(() => {
      reject(new Error('reCAPTCHA no se cargó en el tiempo esperado'))
    }, 10000)

    const checkInterval = setInterval(() => {
      if (isRecaptchaLoaded()) {
        clearInterval(checkInterval)
        clearTimeout(timeout)
        window.grecaptcha.ready(() => resolve())
      }
    }, 100)
  })
}

/**
 * Renderiza el widget de reCAPTCHA v2
 * @param {string} containerId - ID del contenedor donde renderizar
 * @param {Function} callback - Callback cuando se completa el captcha
 * @param {Function} expiredCallback - Callback cuando expira el captcha
 * @returns {Promise<number>} - Widget ID
 */
export const renderRecaptcha = async (containerId, callback, expiredCallback) => {
  if (!validateRecaptchaConfig()) {
    throw new Error('reCAPTCHA no configurado correctamente')
  }

  await waitForRecaptcha()

  const widgetId = window.grecaptcha.render(containerId, {
    sitekey: recaptchaConfig.siteKey,
    callback,
    'expired-callback': expiredCallback,
    size: 'invisible',
  })

  return widgetId
}

/**
 * Resetea el widget de reCAPTCHA
 * @param {number} widgetId - ID del widget
 */
export const resetRecaptcha = (widgetId) => {
  if (isRecaptchaLoaded() && widgetId !== null && widgetId !== undefined) {
    window.grecaptcha.reset(widgetId)
  }
}

/**
 * Ejecuta el reCAPTCHA invisible (solo para size: 'invisible')
 * @param {number} widgetId - ID del widget
 * @returns {Promise<string>} - Token de respuesta
 */
export const executeRecaptcha = (widgetId) => {
  return new Promise((resolve, reject) => {
    if (!isRecaptchaLoaded()) {
      reject(new Error('reCAPTCHA no está cargado'))
      return
    }
    
    if (widgetId === null || widgetId === undefined) {
      reject(new Error('Widget ID inválido'))
      return
    }

    try {
      window.grecaptcha.execute(widgetId)
      // El token se obtiene en el callback configurado en render()
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Obtiene el token de respuesta del reCAPTCHA
 * @param {number} widgetId - ID del widget
 * @returns {string|null} - Token de respuesta
 */
export const getRecaptchaResponse = (widgetId) => {
  if (isRecaptchaLoaded() && widgetId !== null && widgetId !== undefined) {
    return window.grecaptcha.getResponse(widgetId)
  }
  return null
}
