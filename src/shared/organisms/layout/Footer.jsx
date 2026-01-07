import { motion } from 'framer-motion'
import { fluidSizing } from '../../utils/fluidSizing'
import boostLogo from '/Images/Boost_Logo.jpg'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M5.16 3.5a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0ZM1.7 8.49h3.92v11.8H1.7zm6.05 0H11.6v1.62h.06c.54-1.03 1.84-2.11 3.78-2.11 4.04 0 4.78 2.66 4.78 6.12v6.18h-3.92v-5.48c0-1.31-.03-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9v5.58H7.76Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 7.35A4.65 4.65 0 1 0 16.65 12 4.65 4.65 0 0 0 12 7.35Zm0 7.66A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.85-7.88a1.09 1.09 0 1 1-1.09-1.09 1.09 1.09 0 0 1 1.09 1.09ZM21.9 12a9.9 9.9 0 0 0-.56-3.26 5.84 5.84 0 0 0-3.35-3.35A9.9 9.9 0 0 0 12 4.83a9.9 9.9 0 0 0-3.26.56 5.84 5.84 0 0 0-3.35 3.35A9.9 9.9 0 0 0 4.83 12a9.9 9.9 0 0 0 .56 3.26 5.84 5.84 0 0 0 3.35 3.35 9.9 9.9 0 0 0 3.26.56 9.9 9.9 0 0 0 3.26-.56 5.84 5.84 0 0 0 3.35-3.35 9.9 9.9 0 0 0 .56-3.26Zm-1.62 0a8.29 8.29 0 0 1-.47 2.74 4.23 4.23 0 0 1-2.42 2.42 8.29 8.29 0 0 1-2.74.47 8.29 8.29 0 0 1-2.74-.47 4.23 4.23 0 0 1-2.42-2.42 8.29 8.29 0 0 1-.47-2.74 8.29 8.29 0 0 1 .47-2.74 4.23 4.23 0 0 1 2.42-2.42 8.29 8.29 0 0 1 2.74-.47 8.29 8.29 0 0 1 2.74.47 4.23 4.23 0 0 1 2.42 2.42 8.29 8.29 0 0 1 .47 2.74Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://www.twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M20.71 7.03c.01.19.01.38.01.57 0 5.82-4.43 12.53-12.53 12.53A12.47 12.47 0 0 1 2 18.63a9 9 0 0 0 6.64-1.86 4.43 4.43 0 0 1-4.13-3.07 4.43 4.43 0 0 0 2-.07 4.43 4.43 0 0 1-3.55-4.34v-.06a4.4 4.4 0 0 0 2 .55 4.43 4.43 0 0 1-1.37-5.91 12.58 12.58 0 0 0 9.14 4.63 4.43 4.43 0 0 1 7.53-4.04 8.8 8.8 0 0 0 2.81-1.07 4.43 4.43 0 0 1-1.95 2.45 8.84 8.84 0 0 0 2.55-.7 9.2 9.2 0 0 1-2.23 2.32Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export const Footer = () => (
  <footer
    className="relative flex justify-center text-black"
    style={{
      marginTop: fluidSizing.spacing['6xl'],
      marginBottom: fluidSizing.spacing['3xl'],
      paddingLeft: fluidSizing.spacing.lg,
      paddingRight: fluidSizing.spacing.lg,
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="z-40 w-[clamp(320px,92vw,60rem)] rounded-[3rem] bg-[#FFD700] px-8 py-10 text-center shadow-glow-md md:px-14"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <img src={boostLogo} alt="Boost Studio" className="h-12 w-auto object-contain" />
          <span className="text-sm font-extrabold uppercase tracking-[0.32em]">Encendemos el crecimiento</span>
        </div>

        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-black/70">
          <span>Consultoría</span>
          <span className="h-2 w-2 rounded-full bg-black/60" />
          <span>Producto</span>
          <span className="h-2 w-2 rounded-full bg-black/60" />
          <span>Crecimiento</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, rotate: index % 2 === 0 ? 2.5 : -2.5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/80 bg-[#FFD700] shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
              aria-label={item.label}
            >
              <span className="text-black transition-colors duration-300 group-hover:text-[#F97316]">{item.icon}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center text-xs font-bold uppercase tracking-[0.36em] text-black/60">
        © 2026 Boost Studio.
      </div>
    </motion.div>
  </footer>
)
