import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext(undefined)

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(null)
  const [title, setTitle] = useState(null)

  const openModal = useCallback((modalContent, modalTitle = null) => {
    setContent(modalContent)
    setTitle(modalTitle)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      setContent(null)
      setTitle(null)
    }, 300)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeModal()
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleKeyDown)
      }
    }

    return undefined
  }, [isOpen, closeModal])

  const value = {
    isOpen,
    content,
    title,
    openModal,
    closeModal,
  }

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
