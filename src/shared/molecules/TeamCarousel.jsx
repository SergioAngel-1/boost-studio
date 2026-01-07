import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
}

const TeamMemberItem = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col items-center gap-4 text-center"
  >
    <div className="relative">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#FFD700]/60 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 backdrop-blur-xl">
        <span className="text-2xl font-bold text-[#FFD700]" style={{ letterSpacing: '0.05em' }}>
          {getInitials(member.name)}
        </span>
      </div>
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 rounded-full bg-[#FFD700]/20 blur-xl"
      />
    </div>

    <div className="space-y-1">
      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
      <p className="text-xs uppercase tracking-[0.25em] text-[#FFD700]">{member.role}</p>
    </div>
  </motion.div>
)

export const TeamCarousel = ({ team }) => {
  const [startIndex, setStartIndex] = useState(0)
  const itemsToShow = 4

  const canGoPrev = startIndex > 0
  const canGoNext = startIndex < team.length - itemsToShow

  const nextSlide = () => {
    if (canGoNext) {
      setStartIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (canGoPrev) {
      setStartIndex((prev) => prev - 1)
    }
  }

  const visibleMembers = team.slice(startIndex, startIndex + itemsToShow)

  return (
    <div className="relative mx-auto w-full">
      <div className="relative overflow-hidden">
        <motion.div
          key={startIndex}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {visibleMembers.map((member) => (
            <TeamMemberItem key={member.name} member={member} />
          ))}
        </motion.div>
      </div>

      {team.length > itemsToShow && (
        <div className="mt-10 flex items-center justify-center gap-6">
          <motion.button
            onClick={prevSlide}
            disabled={!canGoPrev}
            whileHover={canGoPrev ? { scale: 1.05 } : {}}
            whileTap={canGoPrev ? { scale: 0.95 } : {}}
            className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              canGoPrev
                ? 'border-white/20 bg-white/[0.05] hover:border-[#FFD700]/60 hover:bg-white/[0.08]'
                : 'cursor-not-allowed border-white/10 bg-white/[0.02] opacity-40'
            }`}
            aria-label="Anterior miembro"
          >
            <ChevronLeft className="text-white" size={20} strokeWidth={2} />
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: team.length - itemsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === startIndex
                    ? 'w-8 bg-[#FFD700]'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir a posición ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            disabled={!canGoNext}
            whileHover={canGoNext ? { scale: 1.05 } : {}}
            whileTap={canGoNext ? { scale: 0.95 } : {}}
            className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              canGoNext
                ? 'border-white/20 bg-white/[0.05] hover:border-[#FFD700]/60 hover:bg-white/[0.08]'
                : 'cursor-not-allowed border-white/10 bg-white/[0.02] opacity-40'
            }`}
            aria-label="Siguiente miembro"
          >
            <ChevronRight className="text-white" size={20} strokeWidth={2} />
          </motion.button>
        </div>
      )}
    </div>
  )
}
