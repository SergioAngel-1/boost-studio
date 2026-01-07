import { motion } from 'framer-motion'

export const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#020101]">
    <div className="flex flex-col items-center gap-6">
      {/* Logo animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 rounded-full bg-[#FFD700]/20 blur-2xl"
        />
        <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[#FFD700]/60 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 backdrop-blur-xl">
          <img 
            src="/Images/cropped-favicon-1.jpg" 
            alt="Boost Studio Logo" 
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Texto de carga */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-2"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#FFD700]">
          Cargando Boost Studio
        </p>
        
        {/* Barra de progreso animada */}
        <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
          />
        </div>
      </motion.div>
    </div>
  </div>
)
