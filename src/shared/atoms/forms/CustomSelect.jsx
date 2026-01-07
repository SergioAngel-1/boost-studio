import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi2'

export const CustomSelect = ({ 
  value, 
  onChange, 
  options, 
  className = '',
  icon: Icon,
  required = false,
  name = '',
  placeholder = 'Seleccionar...'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const selectedOption = options.find(opt => opt.value === value)
  const displayText = selectedOption?.label || placeholder

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } })
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="peer flex w-full items-center justify-between border-b border-white/10 bg-transparent pb-3 text-left text-base text-white focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={value ? 'text-white' : 'text-slate-500'}>
          {displayText}
        </span>
        {Icon ? (
          <Icon className="text-[#FFD700]" size={18} strokeWidth={1.6} />
        ) : (
          <HiChevronDown 
            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#FFD700] transition-transform duration-300 ease-out peer-focus:scale-x-100" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full z-50 mt-2 max-h-60 overflow-y-auto rounded-lg border border-white/10 bg-zinc-950 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            role="listbox"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full px-4 py-3 text-left text-sm transition-colors duration-150 hover:bg-[#FFD700]/10 focus:bg-[#FFD700]/10 focus:outline-none ${
                  option.value === value 
                    ? 'bg-[#FFD700]/5 text-[#FFD700]' 
                    : 'text-white'
                }`}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {required && (
        <input
          type="hidden"
          name={name}
          value={value}
          required={required}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

CustomSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  icon: PropTypes.elementType,
  required: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
}
