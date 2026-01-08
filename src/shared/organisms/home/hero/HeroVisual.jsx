import { motion } from 'framer-motion'
import { fluidSizing } from '../../../utils/fluidSizing'

const ProgressBar = ({ value, id }) => (
  <div 
    className="h-1.5 overflow-hidden rounded-full bg-white/10" 
    role="progressbar" 
    aria-labelledby={id}
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax="100"
  >
    <div 
      className="h-full rounded-full bg-[#FFD700]" 
      style={{ width: `${value}%`, opacity: value === 80 ? 1 : 0.8 }}
    />
  </div>
)

export const HeroVisual = ({ src, alt }) => (
  <motion.div
    initial={{ opacity: 0, y: 72, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.45 }}
    transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
    className="relative flex w-full items-center justify-center"
  >
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 md:rounded-3xl">
      {/* Glow effect */}
      <div className="pointer-events-none absolute -top-32 right-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,215,0,0.35),_transparent_70%)] blur-[100px]" aria-hidden="true" />
      
      {/* Image */}
      <img 
        src={src} 
        alt={alt} 
        className="h-full w-full object-contain opacity-60" 
        loading="eager"
        fetchpriority="high"
        width="1200"
        height="800"
        decoding="async"
      />
      
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
      
      {/* Methodology overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-left md:gap-3 md:p-8" role="complementary" aria-label="Metodología de crecimiento">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#FFD700] md:text-xs md:tracking-[0.45em]">
          Metodología Boost
        </span>
        <p className="font-semibold text-white" style={{ fontSize: fluidSizing.heading.h3 }}>
          Resultados medibles
        </p>
        <p className="text-xs leading-relaxed text-slate-200/80 md:text-sm">
          Análisis continuo, optimización constante y decisiones respaldadas por datos reales.
        </p>
        
        {/* Progress bars */}
        <div className="mt-2 space-y-2 text-[0.6rem] uppercase tracking-[0.25em] text-slate-200/70 md:space-y-3 md:text-[0.7rem] md:tracking-[0.35em]">
          <div className="flex items-center justify-between">
            <span id="acquisition-label">Adquisición</span>
            <span id="retention-label">Retención</span>
          </div>
          <ProgressBar value={80} id="acquisition-label" />
          <ProgressBar value={75} id="retention-label" />
        </div>
      </div>
    </div>
  </motion.div>
)
