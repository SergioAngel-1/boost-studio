import { SEO } from '../../shared/components/SEO'
import { SchemaMarkup } from '../../shared/components/SchemaMarkup'
import { SEO_CONFIG } from '../../config/seo'
import { SCHEMA_CONFIG } from '../../config/schemaData'
import { HeroSection } from '../../shared/organisms/home/HeroSection'
import { GrowthPathSection } from '../../shared/organisms/home/GrowthPathSection'
import { MethodSection } from '../../shared/organisms/home/MethodSection'
import { ContactFormSection } from '../../shared/organisms/home/ContactFormSection'
import { fluidSizing } from '../../shared/utils/fluidSizing'

export const HomePage = () => (
  <>
    <SEO {...SEO_CONFIG.pages.home} url="/" />
    <SchemaMarkup schema={[SCHEMA_CONFIG.organization, SCHEMA_CONFIG.professionalService]} />
    <section aria-label="Página de inicio" className="space-y-[var(--section-gap)]" style={{ '--section-gap': fluidSizing.section.gap }}>
      <HeroSection />
      <GrowthPathSection />
      <MethodSection />
      <ContactFormSection />
    </section>
  </>
)
