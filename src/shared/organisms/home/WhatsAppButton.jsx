import { motion } from 'framer-motion'
import { EXTERNAL_LINKS } from '../../../core/routes'

export const WhatsAppButton = () => (
  <motion.a
    href={EXTERNAL_LINKS.whatsapp}
    target="_blank"
    rel="noreferrer"
    className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black/20 bg-[#FFD700] text-base-950 shadow-glow-md md:bottom-8 md:right-8 md:h-16 md:w-16 md:border-0"
    animate={{ scale: [1, 1.08, 1] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    aria-label="Contactar por WhatsApp"
  >
    <svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8">
      <path
        fill="#050405"
        d="M16 3.5c-6.88 0-12.5 5.34-12.5 11.93 0 2.71.94 5.22 2.63 7.28l-1.72 5.62 5.78-1.52a13.43 13.43 0 0 0 5.81 1.3c6.88 0 12.5-5.34 12.5-11.93S22.88 3.5 16 3.5Zm0 21.62c-1.76 0-3.48-.46-4.98-1.34l-.36-.21-3.43.91.92-3.01-.24-.31a9.86 9.86 0 0 1-2.11-6.12c0-5.28 4.45-9.57 9.92-9.57s9.92 4.29 9.92 9.57S21.45 25.12 16 25.12Zm5.82-7.21c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.83 1.04-1.02 1.26-.18.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.61-.96-.83-1.6-1.85-1.79-2.17-.18-.32-.02-.49.14-.64.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.75-.98-2.4-.26-.64-.52-.55-.72-.56-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.31.16.22 2.26 3.52 5.48 4.92 3.22 1.39 3.22.93 3.8.87.59-.05 1.89-.76 2.16-1.49.27-.72.27-1.34.19-1.49-.08-.14-.29-.22-.61-.37Z"
      />
    </svg>
    <span className="pointer-events-none absolute -top-9 right-1 hidden whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white opacity-0 shadow-glow transition-opacity duration-300 group-hover:opacity-100 md:block">
      ¿Hablamos de tu proyecto?
    </span>
  </motion.a>
)
