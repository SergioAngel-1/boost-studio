import { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { loadRecaptchaScript, renderRecaptcha, resetRecaptcha, getRecaptchaResponse, executeRecaptcha } from '../../../config/recaptcha'

export const RecaptchaWidget = forwardRef(({ onSuccess, onExpired, onError }, ref) => {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const isInitializingRef = useRef(false)
  const tokenResolveRef = useRef(null)
  const [token, setToken] = useState(null)

  useImperativeHandle(ref, () => ({
    execute: async () => {
      try {
        // Crear Promise que se resolverá cuando el token esté listo
        const tokenPromise = new Promise((resolve, reject) => {
          tokenResolveRef.current = resolve
          
          // Timeout de seguridad
          setTimeout(() => {
            if (tokenResolveRef.current) {
              reject(new Error('Timeout esperando token de reCAPTCHA'))
            }
          }, 10000)
        })
        
        // Ejecutar reCAPTCHA
        await executeRecaptcha(widgetIdRef.current)
        
        // Esperar a que el callback setToken llame a resolve
        const receivedToken = await tokenPromise
        return receivedToken
      } catch (error) {
        if (onError) onError(error)
        throw error
      }
    },
    getToken: () => token || getRecaptchaResponse(widgetIdRef.current),
    reset: () => {
      resetRecaptcha(widgetIdRef.current)
      setToken(null)
      tokenResolveRef.current = null
    },
  }))

  useEffect(() => {
    const initRecaptcha = async () => {
      try {
        // Prevenir múltiples inicializaciones
        if (isInitializingRef.current || widgetIdRef.current) {
          return
        }
        
        if (!containerRef.current) {
          return
        }
        
        isInitializingRef.current = true
        
        // Cargar script de reCAPTCHA dinámicamente
        await loadRecaptchaScript()
        
        widgetIdRef.current = await renderRecaptcha(
          'recaptcha-container',
          (responseToken) => {
            // Callback cuando se completa el captcha (invisible mode)
            setToken(responseToken)
            
            // Resolver Promise de execute() si está esperando
            if (tokenResolveRef.current) {
              tokenResolveRef.current(responseToken)
              tokenResolveRef.current = null
            }
            
            if (onSuccess) onSuccess(responseToken)
          },
          () => {
            // Callback cuando expira el captcha
            setToken(null)
            tokenResolveRef.current = null
            if (onExpired) onExpired()
          }
        )
        
        // Ocultar badge inmediatamente cuando aparezca en el DOM
        const hideBadge = () => {
          const badge = document.querySelector('.grecaptcha-badge')
          if (badge) {
            badge.style.visibility = 'hidden'
            badge.style.opacity = '0'
            badge.style.display = 'none'
            
            const badgeParent = badge.parentElement
            if (badgeParent) {
              badgeParent.style.visibility = 'hidden'
              badgeParent.style.opacity = '0'
              badgeParent.style.display = 'none'
              badgeParent.style.height = '0'
              badgeParent.style.width = '0'
              badgeParent.style.overflow = 'hidden'
            }
          }
        }
        
        // Intentar ocultar inmediatamente
        hideBadge()
        
        // Observer para ocultar si aparece después
        const observer = new MutationObserver(() => {
          hideBadge()
        })
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        })
        
        // Cleanup observer después de 3 segundos
        setTimeout(() => observer.disconnect(), 3000)
      } catch (err) {
        console.error('Error al inicializar reCAPTCHA:', err)
        isInitializingRef.current = false
        if (onError) onError(err)
      }
    }

    const timer = setTimeout(initRecaptcha, 500)
    
    return () => {
      clearTimeout(timer)
      // Cleanup: marcar que ya no está inicializando
      isInitializingRef.current = false
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      id="recaptcha-container" 
      className="flex justify-start"
      aria-label="Verificación reCAPTCHA"
    />
  )
})

RecaptchaWidget.displayName = 'RecaptchaWidget'

RecaptchaWidget.propTypes = {
  onSuccess: PropTypes.func,
  onExpired: PropTypes.func,
  onError: PropTypes.func,
}
