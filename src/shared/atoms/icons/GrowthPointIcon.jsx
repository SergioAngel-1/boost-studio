import PropTypes from 'prop-types'
import { HiBolt } from 'react-icons/hi2'

export const GrowthPointIcon = ({ className = '', ariaLabel = 'Icono de energía' }) => (
  <span 
    className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFD700] text-base-950 text-sm font-semibold shadow-glow md:h-10 md:w-10 ${className}`}
    aria-label={ariaLabel}
  >
    <HiBolt className="h-4 w-4 md:h-[18px] md:w-[18px]" aria-hidden="true" />
  </span>
)

GrowthPointIcon.propTypes = {
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
}
