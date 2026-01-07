/**
 * EmailJS Configuration
 * 
 * Este archivo centraliza la configuración de EmailJS para envío de emails
 * desde el frontend sin necesidad de backend.
 * 
 * IMPORTANTE: Las credenciales deben estar en variables de entorno (.env)
 * y NUNCA deben ser commiteadas al repositorio.
 */

export const emailConfig = {
  // Service ID de EmailJS (conectado a Google Workspace)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  
  // Template ID para email de confirmación al usuario
  templateIdConfirmation: import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION,
  
  // Template ID para notificación interna (lead info)
  templateIdNotification: import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFICATION,
  
  // Public Key de EmailJS
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

/**
 * Valida que todas las credenciales de EmailJS estén configuradas
 * @returns {boolean} - true si todas las credenciales están presentes
 */
export const validateEmailConfig = () => {
  const { serviceId, templateIdConfirmation, templateIdNotification, publicKey } = emailConfig
  
  if (!serviceId || !templateIdConfirmation || !templateIdNotification || !publicKey) {
    console.error('❌ EmailJS: Faltan variables de entorno. Revisa el archivo .env')
    return false
  }
  
  return true
}

/**
 * Obtiene mensaje de error amigable para el usuario
 * @param {Error} error - Error de EmailJS
 * @returns {string} - Mensaje de error amigable
 */
export const getEmailErrorMessage = (error) => {
  if (error?.text?.includes('Invalid')) {
    return 'Configuración de email inválida. Contacta al administrador.'
  }
  
  if (error?.text?.includes('quota')) {
    return 'Límite de emails alcanzado. Intenta más tarde o contáctanos por WhatsApp.'
  }
  
  if (error?.status === 400) {
    return 'Error en los datos del formulario. Verifica la información.'
  }
  
  if (error?.status === 412) {
    return 'Servicio de email no disponible. Intenta más tarde.'
  }
  
  return 'Error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.'
}
