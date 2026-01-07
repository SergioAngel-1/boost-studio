import PropTypes from 'prop-types'

export const Select = ({ 
  value, 
  onChange, 
  options, 
  className = '',
  icon: Icon,
  ...props 
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`appearance-none border-b border-white/10 bg-transparent pb-3 text-base text-white focus:outline-none ${className}`}
        {...props}
      >
        {options?.map((opt) => (
          <option 
            key={opt.value} 
            value={opt.value} 
            className="bg-zinc-950 text-white"
          >
            {opt.label}
          </option>
        ))}
      </select>
      {Icon && (
        <Icon 
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#FFD700]" 
          size={18} 
          strokeWidth={1.6} 
        />
      )}
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  icon: PropTypes.elementType,
}
