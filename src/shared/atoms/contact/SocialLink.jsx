import PropTypes from 'prop-types'

export const SocialLink = ({ icon: Icon, href, label, className = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-transparent transition-transform duration-200 hover:-translate-y-1 ${className}`}
  >
    <Icon size={18} strokeWidth={1.8} />
  </a>
)

SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}
