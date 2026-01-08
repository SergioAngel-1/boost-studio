import PropTypes from 'prop-types'

/**
 * Componente de imagen optimizada con soporte para srcset responsive
 * Mejora Core Web Vitals (LCP, CLS) con dimensiones explícitas y lazy loading
 */
export const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  sizes,
  srcSet,
  priority = false,
}) => {
  // Si es priority (above the fold), usar eager loading
  const loadingStrategy = priority ? 'eager' : loading
  const decodingStrategy = priority ? 'sync' : decoding

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingStrategy}
      decoding={decodingStrategy}
      className={className}
      sizes={sizes}
      srcSet={srcSet}
    />
  )
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
  priority: PropTypes.bool,
}
