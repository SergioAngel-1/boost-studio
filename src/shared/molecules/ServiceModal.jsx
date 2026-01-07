import PropTypes from 'prop-types'

export const ServiceModal = ({ service }) => {
  if (!service) return null

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <div className="flex items-center gap-3 md:gap-4">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFD700]/50 bg-[#FFD700]/20 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700] md:h-12 md:w-12 md:text-sm md:tracking-[0.26em]">
          {service.id}
        </span>
        <h3 className="text-xl font-semibold text-white md:text-2xl">{service.title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-slate-300/90 md:text-base">{service.description}</p>

      {service.details && service.details.length > 0 ? (
        <ul className="grid gap-2.5 text-sm leading-relaxed text-slate-200/90 md:gap-3 md:text-base">
          {service.details.map((item) => (
            <li key={item} className="flex items-start gap-2.5 md:gap-3">
              <span className="mt-[6px] inline-flex h-2 w-2 shrink-0 rounded-full bg-[#FFD700] shadow-glow" />
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
