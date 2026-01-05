import { HeroSection } from '../../shared/organisms/home/HeroSection'
import { GrowthPathSection } from '../../shared/organisms/home/GrowthPathSection'
import { MethodSection } from '../../shared/organisms/home/MethodSection'
import { ContactFormSection, WHATSAPP_NUMBER } from '../../shared/organisms/home/ContactFormSection'
import { WhatsAppButton } from '../../shared/organisms/home/WhatsAppButton'
import { fluidSizing } from '../../shared/utils/fluidSizing'

export const HomePage = () => (
  <section className="relative flex flex-col text-white" style={{ gap: fluidSizing.spacing['3xl'] }}>
    <HeroSection />
    <GrowthPathSection />
    <MethodSection />
    <ContactFormSection />
    <WhatsAppButton phoneNumber={WHATSAPP_NUMBER} />
  </section>
)
