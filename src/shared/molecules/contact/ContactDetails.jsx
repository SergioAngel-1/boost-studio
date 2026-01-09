import { HiLocationMarker, HiMail, HiChatAlt2 } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { ContactInfoItem } from '../../atoms/contact/ContactInfoItem'
import { SocialLink } from '../../atoms/contact/SocialLink'
import { EXTERNAL_LINKS } from '../../../core/routes'

export const ContactDetails = () => {
  return (
    <div className="relative flex h-full flex-col justify-between space-y-8 md:space-y-12">
      <div className="space-y-6 md:space-y-10">
        <div className="space-y-3 md:space-y-4">
          <p className="text-[0.65rem] font-mono uppercase tracking-[0.35em] text-slate-500 md:text-xs md:tracking-[0.45em]">
            Contacto Directo
          </p>
          <h2 id="direct-line-heading" className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
            Información de Contacto
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            Contáctanos directamente por cualquiera de nuestros canales. Estamos listos para ayudarte a hacer crecer tu negocio.
          </p>
        </div>

        <div 
          className="space-y-4 rounded-xl border border-black/20 bg-black/10 p-4 backdrop-blur-md md:space-y-6 md:rounded-2xl md:p-6" 
          role="list" 
          aria-label="Información de contacto"
        >
          <ContactInfoItem
            icon={HiLocationMarker}
            iconHidden={true}
            title="Colombia"
            description="Atención a clientes en toda Latinoamérica"
            role="listitem"
          />
          <div className="h-px bg-black/20" aria-hidden="true" />
          <ContactInfoItem
            icon={HiMail}
            iconHidden={true}
            title="info@growthbooststudio.com"
            description="Respuesta en menos de 48 horas"
            role="listitem"
          />
          <div className="h-px bg-black/20" aria-hidden="true" />
          <ContactInfoItem
            icon={HiChatAlt2}
            iconHidden={true}
            title="WhatsApp"
            description="Envíanos un mensaje para atención inmediata"
            role="listitem"
          />
        </div>

        <div className="space-y-3 rounded-xl border border-black/20 bg-black/10 p-4 backdrop-blur-md md:space-y-4 md:rounded-2xl md:p-6">
          <p className="text-[0.6rem] font-mono uppercase tracking-[0.35em] text-black/60 md:text-xs md:tracking-[0.4em]">
            Tiempo de Respuesta
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-black md:text-4xl">{'<48h'}</span>
            <span className="text-xs text-black/70 md:text-sm">promedio</span>
          </div>
          <p className="text-xs text-black/80 md:text-sm">
            Nuestro equipo de especialistas revisa cada solicitud personalmente y responde con una propuesta de estrategia digital.
          </p>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <p className="text-[0.65rem] font-mono uppercase tracking-[0.35em] text-slate-500 md:text-xs md:tracking-[0.45em]">
          Connect
        </p>
        <div className="flex gap-3 md:gap-4">
          <SocialLink icon={FaWhatsapp} href={EXTERNAL_LINKS.whatsapp} label="WhatsApp" />
          <SocialLink icon={FaLinkedinIn} href={EXTERNAL_LINKS.linkedin} label="LinkedIn" />
          <SocialLink icon={FaXTwitter} href={EXTERNAL_LINKS.x} label="X" />
          <SocialLink icon={FaInstagram} href={EXTERNAL_LINKS.instagram} label="Instagram" />
        </div>
      </div>
    </div>
  )
}
