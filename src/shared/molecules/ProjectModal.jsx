import PropTypes from 'prop-types'
import { fluidSizing } from '../utils/fluidSizing'

export const ProjectModal = ({ project }) => {
  if (!project || !project.modalContent) return null

  const { title, sections, metrics } = project.modalContent

  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl">
        {title}
      </h2>

      {metrics && (
        <div className="grid grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-xl md:grid-cols-4 md:gap-4 md:rounded-2xl md:p-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-1 text-center">
              <p className="text-xl font-bold text-[#FFD700] md:text-2xl">{metric.value}</p>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 md:text-xs md:tracking-[0.25em]">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-4 md:space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-2 md:space-y-3">
            <h3 className="text-base font-semibold text-[#FFD700] md:text-lg">{section.subtitle}</h3>
            {section.content && <p className="text-sm leading-relaxed text-slate-300 md:text-base">{section.content}</p>}
            {section.list && (
              <ul className="space-y-2">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 md:gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFD700]" />
                    <span className="text-sm text-slate-300 md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    modalContent: PropTypes.shape({
      title: PropTypes.string.isRequired,
      sections: PropTypes.arrayOf(PropTypes.object).isRequired,
      metrics: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
}
