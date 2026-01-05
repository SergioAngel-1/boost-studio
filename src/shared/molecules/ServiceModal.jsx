import PropTypes from 'prop-types'

export const ServiceModal = ({ service }) => {
  if (!service) return null

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#FFD700]/50 bg-[#FFD700]/20 text-sm font-bold uppercase tracking-[0.26em] text-[#FFD700]">
          {service.id}
        </span>
        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-slate-300/90">{service.description}</p>

      {service.details && service.details.length > 0 ? (
        <ul className="grid gap-3 text-sm leading-relaxed text-slate-200/90">
          {service.details.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[6px] inline-flex h-2 w-2 rounded-full bg-[#FFD700] shadow-glow" />
              <span>{item}</span>
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
