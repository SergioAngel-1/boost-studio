import PropTypes from 'prop-types'

export const FormField = ({ 
  label, 
  fieldId, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  rows,
  options,
  icon: Icon,
  className = ''
}) => {
  const isTextarea = type === 'textarea'
  const isSelect = type === 'select'

  return (
    <label className={`group flex flex-col gap-3 ${className}`}>
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
        <span>{label}</span>
        <span className="text-slate-600">{fieldId}</span>
      </div>
      <div className="relative">
        {isTextarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows || 4}
            className="peer w-full resize-none border-b border-white/10 bg-transparent pb-3 text-base text-white placeholder:text-slate-500 focus:outline-none"
            required={required}
          />
        ) : isSelect ? (
          <>
            <select
              name={name}
              value={value}
              onChange={onChange}
              className="peer w-full appearance-none border-b border-white/10 bg-transparent pb-3 text-base text-white focus:outline-none"
              required={required}
            >
              {options?.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-zinc-950 text-white">
                  {opt.label}
                </option>
              ))}
            </select>
            {Icon ? (
              <Icon className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#FFD700]" size={18} strokeWidth={1.6} />
            ) : null}
          </>
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="peer w-full border-b border-white/10 bg-transparent pb-3 text-base text-white placeholder:text-slate-500 focus:outline-none"
            required={required}
          />
        )}
        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#FFD700] transition-transform duration-300 ease-out peer-focus:scale-x-100" />
      </div>
    </label>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'url', 'textarea', 'select']),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  icon: PropTypes.elementType,
  className: PropTypes.string,
}
