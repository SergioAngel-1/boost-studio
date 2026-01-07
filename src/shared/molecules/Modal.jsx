import { AnimatePresence, motion } from 'framer-motion'
import { useModal } from '../context/ModalContext'

export const Modal = () => {
  const { isOpen, content, closeModal } = useModal()

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-xl px-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-[1.8rem] border border-[#FFD700]/40 bg-[#060507]/95 backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute top-6 right-6 z-10">
              <button
                type="button"
                onClick={closeModal}
                aria-label="Cerrar modal"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#060507]/80 backdrop-blur-sm text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-[#FFD700]/60 hover:bg-[#FFD700]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70"
              >
                ✕
              </button>
            </div>

            <div 
              className="max-h-[85vh] overflow-y-auto p-10 pr-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#FFD700]/20 hover:scrollbar-thumb-[#FFD700]/40"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255, 215, 0, 0.2) transparent'
              }}
            >
              <div className="pr-12">{content}</div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
