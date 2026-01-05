import PropTypes from 'prop-types'

export const ContactInfoItem = ({ icon: Icon, title, description, className = '' }) => (
  <div className={`flex items-start gap-4 ${className}`}>
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/20 bg-black/10">
      <Icon size={18} strokeWidth={1.6} />
    </div>
    <div>
      <p className="font-semibold text-black">{title}</p>
      <p className="text-sm text-black/80">{description}</p>
    </div>
  </div>
)

ContactInfoItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
}
