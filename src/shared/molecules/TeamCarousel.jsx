import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

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
    className="flex flex-col items-center gap-3 text-center md:gap-4"
  >
    <div className="relative">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#FFD700]/60 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 backdrop-blur-xl md:h-24 md:w-24">
        <span className="text-xl font-bold text-[#FFD700] md:text-2xl" style={{ letterSpacing: '0.05em' }}>
          {getInitials(member.name)}
        </span>
      </div>
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 rounded-full bg-[#FFD700]/20 blur-xl"
      />
    </div>

    <div className="space-y-0.5 md:space-y-1">
      <h3 className="text-base font-semibold text-white md:text-lg">{member.name}</h3>
      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#FFD700] md:text-xs md:tracking-[0.25em]">{member.role}</p>
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
          className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4"
        >
          {visibleMembers.map((member) => (
            <TeamMemberItem key={member.name} member={member} />
          ))}
        </motion.div>
      </div>

      {team.length > itemsToShow && (
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-10 md:gap-6">
          <motion.button
            onClick={prevSlide}
            disabled={!canGoPrev}
            whileHover={canGoPrev ? { scale: 1.05 } : {}}
            whileTap={canGoPrev ? { scale: 0.95 } : {}}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:h-12 md:w-12 ${
              canGoPrev
                ? 'border-white/20 bg-white/[0.05] hover:border-[#FFD700]/60 hover:bg-white/[0.08]'
                : 'cursor-not-allowed border-white/10 bg-white/[0.02] opacity-40'
            }`}
            aria-label="Anterior miembro"
          >
            <HiChevronLeft className="h-4 w-4 text-white md:h-5 md:w-5" />
          </motion.button>

          <div className="flex gap-1.5 md:gap-2">
            {Array.from({ length: team.length - itemsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 md:h-2 ${
                  index === startIndex
                    ? 'w-6 bg-[#FFD700] md:w-8'
                    : 'w-1.5 bg-white/30 hover:bg-white/50 md:w-2'
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
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:h-12 md:w-12 ${
              canGoNext
                ? 'border-white/20 bg-white/[0.05] hover:border-[#FFD700]/60 hover:bg-white/[0.08]'
                : 'cursor-not-allowed border-white/10 bg-white/[0.02] opacity-40'
            }`}
            aria-label="Siguiente miembro"
          >
            <HiChevronRight className="h-4 w-4 text-white md:h-5 md:w-5" />
          </motion.button>
        </div>
      )}
    </div>
  )
}
