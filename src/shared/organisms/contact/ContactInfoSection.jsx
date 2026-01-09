import { ContactDetails } from '../../molecules/contact/ContactDetails'

export const ContactInfoSection = () => {
  return (
    <div className="relative overflow-hidden bg-[#FFD700] p-5 text-black md:p-8 lg:p-16">
      {/* Header decoration */}
      <div 
        className="pointer-events-none absolute right-4 top-4 text-[0.6rem] font-mono uppercase tracking-[0.3em] text-slate-400 md:right-10 md:top-10 md:text-[11px] md:tracking-[0.35em]" 
        aria-hidden="true"
      >
        Channel ID // CL-204
      </div>

      <ContactDetails />
    </div>
  )
}
