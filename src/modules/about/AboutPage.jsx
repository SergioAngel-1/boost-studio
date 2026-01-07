import { motion } from 'framer-motion'
import { SectionIntro } from '../../shared/molecules/SectionIntro'
import { AnimatedBackground } from '../../shared/molecules/AnimatedBackground'
import { HeroSection } from '../../shared/molecules/HeroSection'
import { StatsGrid } from '../../shared/molecules/StatsGrid'
import { FeatureCard } from '../../shared/atoms/cards/FeatureCard'
import { TeamCarousel } from '../../shared/molecules/TeamCarousel'
import { AccentButton } from '../../shared/atoms/buttons/AccentButton'
import { fluidSizing } from '../../shared/utils/fluidSizing'
import { ROUTES } from '../../core/routes'

const philosophyPillars = [
  {
    title: 'Obsesión por el ROI',
    description:
      "No creemos en los 'likes'. Creemos en el dinero en el banco. Cada pixel que movemos tiene la misión de convertir.",
  },
  {
    title: 'Anti-Fragilidad',
    description:
      'Los mercados cambian. Los algoritmos mutan. Construimos sistemas de adquisición robustos que sobreviven a las crisis y prosperan en el caos.',
  },
  {
    title: 'Velocidad de Ejecución',
    description:
      'El dinero ama la velocidad. Lo que a otros les toma un trimestre, nosotros lo prototipamos en una semana y lo escalamos en dos.',
  },
]

const trackRecord = [
  { value: '+50M', label: 'Ingresos Generados' },
  { value: '300+', label: 'Experimentos Ejecutados' },
  { value: '12', label: 'Países Alcanzados' },
  { value: '98%', label: 'Tasa de Retención' },
]

const team = [
  { name: 'Diego Rodrigez', role: 'Head of Growth' },
  { name: 'Simón Galvis', role: 'Lead Designer' },
  { name: 'Sergio Jáuregui', role: 'Lead Developer' },
  { name: 'Alejandra Restrepo', role: 'UX/UI Designer' },
]

export const AboutPage = () => (
  <div className="relative overflow-hidden bg-[#020102] text-white">
    <section className="relative flex min-h-[90vh] items-center justify-center px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <AnimatedBackground />
      <HeroSection
        eyebrow="El Manifiesto"
        title="No somos una agencia. Somos tu motor de crecimiento injusto."
        description="En un mundo lleno de ruido, nosotros traemos la señal. Combinamos ingeniería de datos con creatividad agresiva para escalar negocios que ya no caben en su molde actual."
      />
    </section>

    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <SectionIntro
        eyebrow="The Boost DNA"
        title="Nuestra filosofía de crecimiento imparable"
        align="center"
      />
      <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
        {philosophyPillars.map(({ title, description }, index) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            delay={0.1 + index * 0.05}
          />
        ))}
      </div>
    </section>

    <StatsGrid stats={trackRecord} />

    <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-12 md:gap-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <SectionIntro
        eyebrow="The Architects"
        title="Mentes detrás del sistema."
        align="center"
      />
      <TeamCarousel team={team} />
    </section>

    <section className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 px-4 pb-12 text-center md:gap-8 md:px-8 md:pb-16 lg:px-12 lg:pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
      >
        Activa tu motor de crecimiento
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
        >
          Hablar con Boost
        </AccentButton>
      </motion.div>
    </section>
  </div>
)
