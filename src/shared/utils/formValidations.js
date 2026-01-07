/**
 * Utilidades de validación para formularios
 * Validaciones reutilizables para campos de formulario
 */

/**
 * Valida formato de email
 * @param {string} email - Email a validar
 * @returns {Object} - { isValid: boolean, error: string }
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'El email es requerido' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Ingresa un email válido' }
  }

  // Validar que no sea email genérico (opcional, puedes comentar si no lo necesitas)
  const genericDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com']
  const domain = email.split('@')[1]?.toLowerCase()
  
  if (genericDomains.includes(domain)) {
    return { 
      isValid: true, 
      warning: 'Preferimos emails corporativos, pero este también funciona' 
    }
  }

  return { isValid: true, error: null }
}

/**
 * Valida nombre (solo letras y espacios)
 * @param {string} name - Nombre a validar
 * @param {number} minLength - Longitud mínima (default: 2)
 * @returns {Object} - { isValid: boolean, error: string }
 */
export const validateName = (name, minLength = 2) => {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'El nombre es requerido' }
  }

  if (name.trim().length < minLength) {
    return { isValid: false, error: `Mínimo ${minLength} caracteres` }
  }

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
  
  if (!nameRegex.test(name)) {
    return { isValid: false, error: 'Solo se permiten letras y espacios' }
  }

  return { isValid: true, error: null }
}

/**
 * Valida URL (sin protocolo, se valida solo el dominio)
 * @param {string} url - URL a validar (sin http/https)
 * @param {boolean} required - Si el campo es requerido
 * @returns {Object} - { isValid: boolean, error: string }
 */
export const validateUrl = (url, required = false) => {
  if (!url || url.trim() === '') {
    if (required) {
      return { isValid: false, error: 'La URL es requerida' }
    }
    return { isValid: true, error: null }
  }

  // Eliminar http:// o https:// si el usuario lo escribió
  const cleanUrl = url.replace(/^(https?:\/\/)/, '')

  // Validar que no esté vacío después de limpiar
  if (cleanUrl.trim() === '') {
    return { isValid: false, error: 'Ingresa un dominio válido' }
  }

  // Validar formato básico de dominio
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-_.]*\.[a-zA-Z]{2,}(\/.*)?$/
  
  if (!domainRegex.test(cleanUrl)) {
    return { isValid: false, error: 'Ingresa un dominio válido (ej: ejemplo.com)' }
  }

  return { isValid: true, error: null, cleanUrl }
}

/**
 * Valida mensaje/textarea
 * @param {string} message - Mensaje a validar
 * @param {number} minLength - Longitud mínima (default: 10)
 * @param {number} maxLength - Longitud máxima (default: 1000)
 * @returns {Object} - { isValid: boolean, error: string }
 */
export const validateMessage = (message, minLength = 10, maxLength = 1000) => {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'El mensaje es requerido' }
  }

  const trimmedLength = message.trim().length

  if (trimmedLength < minLength) {
    return { 
      isValid: false, 
      error: `Describe tu detonante con más detalle (mínimo ${minLength} caracteres)` 
    }
  }

  if (trimmedLength > maxLength) {
    return { 
      isValid: false, 
      error: `El mensaje es muy largo (máximo ${maxLength} caracteres)` 
    }
  }

  return { isValid: true, error: null }
}

/**
 * Valida campo select (no vacío)
 * @param {string} value - Valor seleccionado
 * @param {string} fieldName - Nombre del campo para el mensaje de error
 * @returns {Object} - { isValid: boolean, error: string }
 */
export const validateSelect = (value, fieldName = 'campo') => {
  if (!value || value.trim() === '') {
    return { isValid: false, error: `Selecciona un ${fieldName}` }
  }

  return { isValid: true, error: null }
}

/**
 * Valida formulario completo de contacto
 * @param {Object} formData - Datos del formulario
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export const validateContactForm = (formData) => {
  const errors = {}

  // Validar nombre
  const nameValidation = validateName(formData.name)
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error
  }

  // Validar apellido
  const lastNameValidation = validateName(formData.lastName)
  if (!lastNameValidation.isValid) {
    errors.lastName = lastNameValidation.error
  }

  // Validar email
  const emailValidation = validateEmail(formData.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error
  }

  // Validar website (opcional)
  if (formData.website) {
    const urlValidation = validateUrl(formData.website, false)
    if (!urlValidation.isValid) {
      errors.website = urlValidation.error
    }
  }

  // Validar presupuesto
  const budgetValidation = validateSelect(formData.budget, 'rango de presupuesto')
  if (!budgetValidation.isValid) {
    errors.budget = budgetValidation.error
  }

  // Validar mensaje
  const messageValidation = validateMessage(formData.message)
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Sanitiza string (elimina espacios extra, trim)
 * @param {string} str - String a sanitizar
 * @returns {string} - String sanitizado
 */
export const sanitizeString = (str) => {
  if (!str) return ''
  return str.trim().replace(/\s+/g, ' ')
}

/**
 * Sanitiza datos del formulario
 * @param {Object} formData - Datos del formulario
 * @returns {Object} - Datos sanitizados
 */
export const sanitizeFormData = (formData) => {
  return {
    name: sanitizeString(formData.name),
    lastName: sanitizeString(formData.lastName),
    email: sanitizeString(formData.email).toLowerCase(),
    website: sanitizeString(formData.website),
    budget: sanitizeString(formData.budget),
    message: sanitizeString(formData.message),
  }
}
