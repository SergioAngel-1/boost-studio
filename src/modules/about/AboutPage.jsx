import { motion } from 'framer-motion'
import { SEO } from '../../shared/components/SEO'
import { SEO_CONFIG } from '../../config/seo'
import { SectionIntro } from '../../shared/molecules/SectionIntro'
import { AnimatedBackground } from '../../shared/molecules/AnimatedBackground'
import { HeroSection } from '../../shared/molecules/HeroSection'
import { StatsGrid } from '../../shared/molecules/StatsGrid'
import { FeatureCard } from '../../shared/atoms/cards/FeatureCard'
import { TeamCarousel } from '../../shared/molecules/TeamCarousel'
import { AccentButton } from '../../shared/atoms/buttons/AccentButton'
import { ROUTES } from '../../core/routes'

const philosophyPillars = [
  {
    title: 'Enfoque en Resultados',
    description:
      'Cada estrategia de marketing digital que implementamos está diseñada para generar retorno de inversión medible. Priorizamos métricas que impactan directamente en el crecimiento de tu negocio.',
  },
  {
    title: 'Estrategias Adaptables',
    description:
      'Construimos sistemas de growth marketing flexibles que se adaptan a cambios del mercado. Nuestras estrategias evolucionan con tu negocio para mantener el crecimiento sostenido.',
  },
  {
    title: 'Implementación Ágil',
    description:
      'Metodología de trabajo ágil que nos permite lanzar campañas rápidamente, probar hipótesis con datos reales y escalar lo que funciona en semanas, no meses.',
  },
]

const trackRecord = [
  { value: '50+', label: 'Proyectos Completados' },
  { value: '15+', label: 'Clientes Activos' },
  { value: '3x', label: 'Crecimiento Promedio' },
  { value: '90%', label: 'Tasa de Satisfacción' },
]

const team = [
  { name: 'Diego Rodrigez', role: 'Head of Growth' },
  { name: 'Simón Galvis', role: 'Lead Designer' },
  { name: 'Sergio Jáuregui', role: 'Lead Developer' },
  { name: 'Alejandra Restrepo', role: 'UX/UI Designer' },
]

export const AboutPage = () => (
  <>
    <SEO {...SEO_CONFIG.pages.about} url="/nosotros" />
    <section aria-label="Página sobre nosotros" className="relative overflow-hidden bg-[#020102] text-white">
    <section aria-labelledby="hero-heading" className="relative flex min-h-[90vh] items-center justify-center px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <AnimatedBackground />
      <HeroSection
        eyebrow="Nuestra Filosofía"
        title="Agencia de growth marketing especializada en resultados medibles"
        description="Combinamos análisis de datos, estrategias de marketing digital y diseño de experiencias para ayudar a empresas ambiciosas a escalar su crecimiento de forma sostenible y rentable."
        headingId="hero-heading"
      />
    </section>

    <section aria-labelledby="philosophy-heading" className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <SectionIntro
        eyebrow="Nuestra Metodología"
        title="Cómo trabajamos con nuestros clientes"
        align="center"
        headingId="philosophy-heading"
      />
      <div className="grid gap-4 md:gap-6 lg:grid-cols-3" role="list" aria-label="Pilares de filosofía">
        {philosophyPillars.map(({ title, description }, index) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            delay={0.1 + index * 0.05}
            role="listitem"
          />
        ))}
      </div>
    </section>

    <StatsGrid stats={trackRecord} />

    <section aria-labelledby="team-heading" className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <SectionIntro
        eyebrow="Nuestro Equipo"
        title="Especialistas en growth marketing y diseño digital"
        align="center"
        headingId="team-heading"
      />
      <TeamCarousel team={team} />
    </section>

    <section aria-labelledby="cta-heading" className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 px-4 pb-12 text-center md:gap-8 md:px-8 md:pb-16 lg:px-12 lg:pb-20">
      <motion.h2
        id="cta-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
      >
        ¿Quieres hacer crecer tu negocio digital?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <AccentButton
          href={ROUTES.contact}
          className="bg-[#FFD700] px-6 py-3 text-base-950 shadow-none hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] md:px-8 md:py-4"
          aria-label="Solicitar Consultoría - Ir a formulario de contacto"
        >
          Solicitar Consultoría
        </AccentButton>
      </motion.div>
    </section>
  </section>
  </>
)
