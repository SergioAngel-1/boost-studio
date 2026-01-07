import PropTypes from 'prop-types'
import { CustomSelect } from './CustomSelect'

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
  className = '',
  prefix,
  onPrefixChange,
  error,
  errorId
}) => {
  const isTextarea = type === 'textarea'
  const isSelect = type === 'select'
  const hasPrefix = type === 'url' && prefix !== undefined
  const inputId = `${name}-input`

  return (
    <label htmlFor={inputId} className={`group flex flex-col gap-3 ${className}`}>
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
        <span>{label}</span>
        <span className="text-slate-600" aria-hidden="true">{fieldId}</span>
      </div>
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows || 4}
            className="peer w-full resize-none border-b border-white/10 bg-transparent pb-3 text-base text-white placeholder:text-slate-500 focus:outline-none"
            required={required}
            aria-required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? errorId : undefined}
          />
        ) : isSelect ? (
          <CustomSelect
            id={inputId}
            value={value}
            onChange={onChange}
            options={options}
            icon={Icon}
            className="w-full"
            required={required}
            aria-required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? errorId : undefined}
            name={name}
          />
        ) : hasPrefix ? (
          <div className="flex items-center gap-2">
            <CustomSelect
              value={prefix}
              onChange={onPrefixChange}
              options={[
                { value: 'https://', label: 'https://' },
                { value: 'http://', label: 'http://' },
              ]}
              className="w-24"
              aria-label="Protocolo del sitio web"
            />
            <input
              id={inputId}
              type="text"
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="peer flex-1 border-b border-white/10 bg-transparent pb-3 text-base text-white placeholder:text-slate-500 focus:outline-none"
              required={required}
              aria-required={required}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? errorId : undefined}
            />
          </div>
        ) : (
          <input
            id={inputId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="peer w-full border-b border-white/10 bg-transparent pb-3 text-base text-white placeholder:text-slate-500 focus:outline-none"
            required={required}
            aria-required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? errorId : undefined}
          />
        )}
        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#FFD700] transition-transform duration-300 ease-out peer-focus:scale-x-100" aria-hidden="true" />
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
  prefix: PropTypes.string,
  onPrefixChange: PropTypes.func,
  error: PropTypes.bool,
  errorId: PropTypes.string,
}
