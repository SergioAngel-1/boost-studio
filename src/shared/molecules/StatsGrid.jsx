import PropTypes from 'prop-types'
import { StatCard } from '../atoms/cards/StatCard'

export const StatsGrid = ({ stats, className = '' }) => (
  <section className={`relative overflow-hidden bg-[#050505] py-16 ${className}`}>
    <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-10 px-6 sm:px-10">
      {stats.map(({ value, label }, index) => (
        <StatCard key={label} value={value} label={label} delay={0.05 * index} />
      ))}
    </div>
  </section>
)

StatsGrid.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
}
