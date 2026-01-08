import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { ROUTES, EXTERNAL_LINKS } from '../../../core/routes'
import boostLogo from '/Images/Boost_Logo_Negro.webp'

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
  <footer className="relative mt-16 flex justify-center bg-transparent px-4 pb-12 text-black md:mt-24 md:px-8 md:pb-16 lg:mt-32">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="z-40 w-full max-w-3xl rounded-2xl bg-[#FFD700] p-6 text-center shadow-[0_20px_60px_rgba(255,215,0,0.15)] md:rounded-[2.5rem] md:p-10"
    >
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <img 
            src={boostLogo} 
            alt="Boost Studio - Agencia de Growth Marketing Digital en Colombia" 
            className="h-10 w-auto object-contain md:h-12"
            width="120"
            height="48"
            loading="lazy"
            decoding="async"
          />
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] md:text-sm md:tracking-[0.32em]">Encendemos el crecimiento</span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-black/70 md:gap-3 md:text-sm md:tracking-[0.3em]" role="list" aria-label="Áreas de servicio">
          <li>Growth Marketing</li>
          <li aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-black/60 md:h-2 md:w-2" />
          <li>Diseño Digital</li>
          <li aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-black/60 md:h-2 md:w-2" />
          <li>Estrategia de Crecimiento</li>
        </ul>

        <nav aria-label="Redes sociales">
          <div className="flex items-center gap-3 md:gap-4">
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
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/80 bg-[#FFD700] shadow-[0_12px_24px_rgba(0,0,0,0.12)] md:h-12 md:w-12"
                  aria-label={`${item.label} - Abre en nueva pestaña`}
                >
                  <Icon className="h-5 w-5 text-black md:h-6 md:w-6" aria-hidden="true" />
                </motion.a>
              )
            })}
          </div>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-3 text-[0.6rem] uppercase tracking-[0.25em] text-black/50 md:gap-4 md:text-xs md:tracking-[0.3em]">
          <Link 
            to={ROUTES.faq}
            className="transition-colors hover:text-black/80"
          >
            Preguntas Frecuentes
          </Link>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-black/40" />
          <Link 
            to={ROUTES.privacy}
            className="transition-colors hover:text-black/80"
          >
            Privacidad
          </Link>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-black/40" />
          <Link 
            to={ROUTES.terms}
            className="transition-colors hover:text-black/80"
          >
            Términos
          </Link>
        </div>
      </div>

      <div className="mt-6 flex justify-center text-[0.6rem] font-bold uppercase tracking-[0.3em] text-black/60 md:mt-10 md:text-xs md:tracking-[0.36em]">
        © 2026 Boost Studio.
      </div>
    </motion.div>
  </footer>
)
