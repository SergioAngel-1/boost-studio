import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LayoutGroup } from 'framer-motion'
import { NAV_ITEMS } from '../../../core/navigation'
import { EXTERNAL_LINKS } from '../../../core/routes'
import { fluidSizing } from '../../utils/fluidSizing'
import { Logo } from '../../atoms/navigation/Logo'
import { NavItem } from '../../atoms/navigation/NavItem'
import { AnimatedBeam } from '../../molecules/AnimatedBeam'
import { useBeamAnimation } from '../../hooks/useBeamAnimation'
import { HamburgerButton } from '../../atoms/navigation/HamburgerButton'
import { MobileMenu } from '../../atoms/navigation/MobileMenu'
import { AccentButton } from '../../atoms/buttons/AccentButton'

export const Header = () => {
  const { pathname } = useLocation()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <>
      <header
        className="sticky top-0 z-50 border-b border-white/5 bg-[#020101]/80 backdrop-blur-xl"
        style={{ padding: `${fluidSizing.spacing.md} ${fluidSizing.spacing.lg}` }}
      >
        {/* Skip link para accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#FFD700] focus:px-4 focus:py-2 focus:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
        >
          Saltar al contenido principal
        </a>
        <div className="relative mx-auto flex max-w-[1650px] items-center justify-between gap-4 overflow-visible md:gap-6">
        <div className="relative flex items-center">
          <Logo />
        </div>

        <div className="relative hidden flex-1 items-center justify-center overflow-visible md:flex" style={{ paddingBottom: '24px' }}>
          <nav role="navigation" aria-label="Navegación principal" className="relative z-20 flex items-center gap-7">
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

        <div className="flex items-center gap-3">
          <AccentButton
            href={EXTERNAL_LINKS.talkToBoost}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-[#FFD700]/40 px-7 py-3 shadow-glow md:inline-flex"
            aria-label="Hablar con Boost - Abre en nueva pestaña"
          >
            Hablar con Boost
          </AccentButton>

          <AccentButton
            href={EXTERNAL_LINKS.talkToBoost}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#FFD700]/40 px-5 py-2.5 text-sm shadow-glow md:hidden"
            aria-label="Contacto - Hablar con Boost"
          >
            Contacto
          </AccentButton>

          <HamburgerButton
            isOpen={isMobileMenuOpen}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </header>

    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
