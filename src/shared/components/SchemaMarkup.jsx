import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

/**
 * Componente para inyectar Schema Markup (JSON-LD) en el <head>
 * Mejora SEO con datos estructurados para Google Rich Snippets
 */
export const SchemaMarkup = ({ schema }) => {
  if (!schema) return null

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

SchemaMarkup.propTypes = {
  schema: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
}
