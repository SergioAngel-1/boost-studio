import PropTypes from 'prop-types'
import { HiArrowRight } from 'react-icons/hi'
import { FormField } from '../../atoms/forms/FormField'

export const ContactFormFields = ({ 
  formData, 
  urlProtocol, 
  onInputChange, 
  onProtocolChange 
}) => {
  return (
    <div className="space-y-6 md:space-y-7">
      <div className="grid gap-5 md:gap-8 lg:grid-cols-2">
        <FormField
          label="Nombre"
          fieldId="F-01"
          type="text"
          name="name"
          value={formData.name}
          onChange={onInputChange}
          placeholder="Ej. Laura"
          required
        />
        <FormField
          label="Apellido"
          fieldId="F-02"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onInputChange}
          placeholder="Ej. Ochoa"
          required
        />
      </div>

      <FormField
        label="Email"
        fieldId="F-03"
        type="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        placeholder="tu@email.com"
        required
      />

      <FormField
        label="Sitio Web (Opcional)"
        fieldId="F-04"
        type="url"
        name="website"
        value={formData.website}
        onChange={onInputChange}
        placeholder="tuempresa.com"
        prefix={urlProtocol}
        onPrefixChange={onProtocolChange}
      />

      <FormField
        label="Rango de Presupuesto"
        fieldId="F-05"
        type="select"
        name="budget"
        value={formData.budget}
        onChange={onInputChange}
        icon={HiArrowRight}
        required
        options={[
          { value: '', label: 'Asignar rango' },
          { value: '< $5k', label: '< $5k' },
          { value: '$5k - $15k', label: '$5k - $15k' },
          { value: '$15k - $50k', label: '$15k - $50k' },
          { value: 'Enterprise (> $50k)', label: 'Enterprise (> $50k)' },
        ]}
      />

      <FormField
        label="Cuéntanos sobre tu proyecto"
        fieldId="F-06"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={onInputChange}
        placeholder="¿Qué objetivos de crecimiento tienes para tu negocio?"
        rows={4}
        required
      />
    </div>
  )
}

ContactFormFields.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  urlProtocol: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onProtocolChange: PropTypes.func.isRequired,
}
