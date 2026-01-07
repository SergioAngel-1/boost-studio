import { AnimatePresence, motion } from 'framer-motion'
import { useModal } from '../context/ModalContext'

export const Modal = () => {
  const { isOpen, content, title, closeModal } = useModal()

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 backdrop-blur-xl md:px-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#FFD700]/40 bg-[#060507]/95 backdrop-blur-2xl md:max-h-[85vh] md:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            {title && (
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 md:px-8 md:py-5">
                <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Cerrar modal"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#060507]/80 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors duration-200 hover:border-[#FFD700]/60 hover:bg-[#FFD700]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 md:h-9 md:w-9"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Body */}
            <div 
              className="min-h-0 flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#FFD700]/20 hover:scrollbar-thumb-[#FFD700]/40 md:p-8"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255, 215, 0, 0.2) transparent'
              }}
            >
              {content}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
