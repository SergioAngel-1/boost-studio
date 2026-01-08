import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext(undefined)

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(null)
  const [title, setTitle] = useState(null)
  const [disableOutsideClick, setDisableOutsideClick] = useState(false)

  const openModal = useCallback((modalContent, modalTitle = null, options = {}) => {
    setContent(modalContent)
    setTitle(modalTitle)
    setDisableOutsideClick(options.disableOutsideClick || false)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      setContent(null)
      setTitle(null)
      setDisableOutsideClick(false)
    }, 300)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    if (isOpen) {
      // Guardar estilos originales
      const originalOverflow = document.body.style.overflow
      const originalPosition = document.body.style.position
      const originalTop = document.body.style.top
      const originalWidth = document.body.style.width
      const scrollY = window.scrollY

      // Bloquear scroll con soporte para iOS
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      
      // Prevenir scroll bounce en iOS
      document.body.style.touchAction = 'none'
      document.body.style.webkitOverflowScrolling = 'auto'

      const handleKeyDown = (event) => {
        if (event.key === 'Escape' && !disableOutsideClick) {
          closeModal()
        }
      }

      // Prevenir scroll en iOS cuando se intenta hacer scroll fuera del modal
      const preventScroll = (e) => {
        if (e.target === document.body) {
          e.preventDefault()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      document.addEventListener('touchmove', preventScroll, { passive: false })

      return () => {
        // Restaurar estilos originales
        document.body.style.overflow = originalOverflow
        document.body.style.position = originalPosition
        document.body.style.top = originalTop
        document.body.style.width = originalWidth
        document.body.style.touchAction = ''
        document.body.style.webkitOverflowScrolling = ''
        
        // Restaurar posición de scroll
        window.scrollTo(0, scrollY)
        
        window.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('touchmove', preventScroll)
      }
    }

    return undefined
  }, [isOpen, disableOutsideClick, closeModal])

  const value = useMemo(
    () => ({
      isOpen,
      content,
      title,
      disableOutsideClick,
      openModal,
      closeModal,
    }),
    [isOpen, content, title, disableOutsideClick, openModal, closeModal]
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
