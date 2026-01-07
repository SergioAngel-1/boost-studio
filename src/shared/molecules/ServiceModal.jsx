import PropTypes from 'prop-types'

export const ServiceModal = ({ service }) => {
  if (!service) return null

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <p className="text-sm leading-relaxed !text-slate-300 md:text-base">{service.description}</p>

      {service.details && service.details.length > 0 ? (
        <ul className="grid gap-2.5 text-sm leading-relaxed md:gap-3 md:text-base">
          {service.details.map((item) => (
            <li key={item} className="flex items-start gap-2.5 md:gap-3">
              <span className="mt-[6px] inline-flex h-2 w-2 shrink-0 rounded-full bg-[#FFD700] shadow-glow" />
              <span className="!text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

ServiceModal.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}
