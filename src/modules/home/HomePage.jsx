import { SEO } from '../../shared/components/SEO'
import { SEO_CONFIG } from '../../config/seo'
import { HeroSection } from '../../shared/organisms/home/HeroSection'
import { GrowthPathSection } from '../../shared/organisms/home/GrowthPathSection'
import { MethodSection } from '../../shared/organisms/home/MethodSection'
import { ContactFormSection } from '../../shared/organisms/home/ContactFormSection'
import { fluidSizing } from '../../shared/utils/fluidSizing'

export const HomePage = () => (
  <>
    <SEO {...SEO_CONFIG.pages.home} url="/" />
    <section aria-label="Página de inicio" className="space-y-[var(--section-gap)]" style={{ '--section-gap': fluidSizing.section.gap }}>
      <HeroSection />
      <GrowthPathSection />
      <MethodSection />
      <ContactFormSection />
    </section>
  </>
)
