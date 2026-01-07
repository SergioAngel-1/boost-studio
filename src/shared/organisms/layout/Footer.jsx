import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { fluidSizing } from '../../utils/fluidSizing'
import { EXTERNAL_LINKS } from '../../../core/routes'
import boostLogo from '/Images/Boost_Logo.jpg'

const socialLinks = [
  {
    label: 'WhatsApp',
    href: EXTERNAL_LINKS.whatsapp,
    icon: FaWhatsapp,
  },
  {
    label: 'LinkedIn',
    href: EXTERNAL_LINKS.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: 'Twitter',
    href: EXTERNAL_LINKS.twitter,
    icon: FaXTwitter,
  },
  {
    label: 'Instagram',
    href: EXTERNAL_LINKS.instagram,
    icon: FaInstagram,
  },
]

export const Footer = () => (
  <footer
    className="relative flex justify-center bg-transparent text-black"
    style={{
      marginTop: fluidSizing.spacing['6xl'],
      paddingBottom: fluidSizing.spacing['3xl'],
      paddingLeft: fluidSizing.spacing.lg,
      paddingRight: fluidSizing.spacing.lg,
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="z-40 w-[clamp(320px,85vw,50rem)] rounded-[2.5rem] bg-[#FFD700] px-8 py-10 text-center shadow-[0_20px_60px_rgba(255,215,0,0.15)] md:px-12"
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
          {socialLinks.map((item, index) => {
            const Icon = item.icon
            return (
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
                <Icon className="h-6 w-6 text-black" />
              </motion.a>
            )
          })}
        </div>
      </div>

      <div className="mt-10 flex justify-center text-xs font-bold uppercase tracking-[0.36em] text-black/60">
        © 2026 Boost Studio.
      </div>
    </motion.div>
  </footer>
)
