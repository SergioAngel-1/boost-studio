import { motion } from 'framer-motion'
import { fluidSizing } from '../../utils/fluidSizing'
import { HeroBackground } from './hero/HeroBackground'
import { HeroContent, HeroLabel, HeroTitle, HeroDescription } from './hero/HeroContent'
import { HeroCTA } from './hero/HeroCTA'
import { HeroVisual } from './hero/HeroVisual'

export const HeroSection = () => (
  <section aria-labelledby="hero-heading" className="relative flex w-full flex-col text-white px-4 py-12 md:px-8 lg:px-12" style={{ gap: fluidSizing.spacing['4xl'] }}>
    <motion.div className="relative overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-6 md:p-10 lg:p-16" style={{ borderRadius: fluidSizing.radius['3xl'] }}>
      <HeroBackground />
      
      <div className="relative grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <HeroContent>
          <HeroLabel>CONSULTORÍA EN CRECIMIENTO & PRODUCTOS DIGITALES</HeroLabel>
          <HeroTitle>
            Estrategia que se convierte en <span className="text-[#FFD700]">crecimiento</span> real.
          </HeroTitle>
          <HeroDescription>
            Ayudamos a equipos digitales a tomar decisiones basadas en datos que impactan directamente en ingresos.
          </HeroDescription>
          <HeroCTA />
        </HeroContent>

        <HeroVisual 
          src="/Images/Boost_home.jpg"
          alt="Visualización del impacto de Boost Studio: Dashboard mostrando métricas de crecimiento y análisis de datos"
        />
      </div>
    </motion.div>
  </section>
)
