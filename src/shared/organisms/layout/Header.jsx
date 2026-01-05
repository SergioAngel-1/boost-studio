import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LayoutGroup } from 'framer-motion'
import { NAV_ITEMS } from '../../../core/navigation'
import { fluidSizing } from '../../utils/fluidSizing'
import { Logo } from '../../atoms/navigation/Logo'
import { NavItem } from '../../atoms/navigation/NavItem'
import { AnimatedBeam } from '../../molecules/AnimatedBeam'
import { useBeamAnimation } from '../../hooks/useBeamAnimation'

export const Header = () => {
  const { pathname } = useLocation()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const activeIndex = useMemo(
    () => NAV_ITEMS.findIndex((item) => (item.to === '/' ? pathname === '/' : pathname.startsWith(item.to))),
    [pathname],
  )

  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0
  const markerIndex = hoveredIndex ?? safeActiveIndex

  const { beamKey, beamData, navRefs, triggerBeam, updateBeam } = useBeamAnimation(safeActiveIndex)

  useEffect(() => {
    updateBeam()
  }, [updateBeam, pathname])

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/5 bg-[#020101]/80 backdrop-blur-xl"
      style={{ padding: `${fluidSizing.spacing.md} ${fluidSizing.spacing.lg}` }}
    >
      <div className="relative mx-auto flex max-w-[1650px] items-center justify-between gap-6 overflow-visible">
        <div className="relative flex items-center">
          <Logo />
        </div>

        <div className="relative hidden flex-1 items-center justify-center overflow-visible md:flex" style={{ paddingBottom: '24px' }}>
          <nav className="relative z-20 flex items-center gap-7">
            <LayoutGroup id="nav-highlight">
              {NAV_ITEMS.map((item, index) => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  isActive={index === safeActiveIndex}
                  isMarker={index === markerIndex}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={triggerBeam}
                  forwardRef={(element) => {
                    navRefs.current[index] = element ?? null
                  }}
                />
              ))}
            </LayoutGroup>
          </nav>
          
          <AnimatedBeam beamData={beamData} />
        </div>

        <a
          href="https://cal.com"
          className="inline-flex items-center gap-3 rounded-full border border-[#FFD700]/40 bg-[#FFD700] px-7 py-3 font-semibold uppercase tracking-[0.38em] text-base-950 shadow-glow transition-transform duration-500 hover:scale-[1.05]"
          style={{ fontSize: fluidSizing.text.xs }}
        >
          Hablar con Boost
        </a>
      </div>
    </header>
  )
}
