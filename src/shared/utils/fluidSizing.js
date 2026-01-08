/**
 * Sistema de tamaños fluidos usando clamp() para responsive automático
 * Genera valores CSS que escalan proporcionalmente entre viewports
 */

/**
 * Genera un valor clamp() fluido entre min y max viewport
 * @param {number} minSize - Tamaño mínimo en px
 * @param {number} maxSize - Tamaño máximo en px
 * @param {number} minVw - Viewport mínimo en px (default: 375)
 * @param {number} maxVw - Viewport máximo en px (default: 1920)
 * @returns {string} - Valor CSS clamp()
 */
export const fluidSize = (minSize, maxSize, minVw = 375, maxVw = 1920) => {
  const slope = (maxSize - minSize) / (maxVw - minVw)
  const yAxisIntersection = -minVw * slope + minSize
  
  return `clamp(${minSize}px, ${yAxisIntersection.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${maxSize}px)`
}

/**
 * Presets de tamaños fluidos comunes
 */
export const fluidSizing = {
  // Tipografía
  text: {
    xs: fluidSize(6, 12),      // 0.625rem - 0.75rem
    sm: fluidSize(12, 14),      // 0.75rem - 0.875rem
    base: fluidSize(14, 16),    // 0.875rem - 1rem
    lg: fluidSize(16, 18),      // 1rem - 1.125rem
    xl: fluidSize(18, 20),      // 1.125rem - 1.25rem
    '2xl': fluidSize(20, 24),   // 1.25rem - 1.5rem
    '3xl': fluidSize(24, 30),   // 1.5rem - 1.875rem
    '4xl': fluidSize(32, 40),   // 2rem - 2.5rem
    '5xl': fluidSize(40, 52),   // 2.5rem - 3.25rem
    '6xl': fluidSize(52, 68),   // 3.25rem - 4.25rem
  },
  
  // Headings
  heading: {
    h1: fluidSize(32, 64),      // 2rem - 4rem (para laptops pequeños a monitores grandes)
    h2: fluidSize(24, 48),      // 1.5rem - 3rem
    h3: fluidSize(20, 36),      // 1.25rem - 2.25rem
    h4: fluidSize(18, 28),      // 1.125rem - 1.75rem
    h5: fluidSize(16, 24),      // 1rem - 1.5rem
    h6: fluidSize(14, 20),      // 0.875rem - 1.25rem
  },
  
  // Espaciado
  spacing: {
    xs: fluidSize(4, 8),        // 0.25rem - 0.5rem
    sm: fluidSize(8, 12),       // 0.5rem - 0.75rem
    md: fluidSize(12, 16),      // 0.75rem - 1rem
    lg: fluidSize(16, 24),      // 1rem - 1.5rem
    xl: fluidSize(24, 32),      // 1.5rem - 2rem
    '2xl': fluidSize(32, 48),   // 2rem - 3rem
    '3xl': fluidSize(48, 64),   // 3rem - 4rem
    '4xl': fluidSize(64, 96),   // 4rem - 6rem
    '5xl': fluidSize(96, 128),  // 6rem - 8rem
    '6xl': fluidSize(128, 192), // 8rem - 12rem
  },
  
  // Padding/Margin de secciones
  section: {
    py: fluidSize(48, 96),      // Padding vertical de sección
    px: fluidSize(24, 80),      // Padding horizontal de sección
    gap: fluidSize(32, 64),     // Gap entre elementos
  },
  
  // Contenedores
  container: {
    sm: fluidSize(640, 768),
    md: fluidSize(768, 1024),
    lg: fluidSize(1024, 1280),
    xl: fluidSize(1280, 1536),
    '5xl': fluidSize(1280, 1536),
  },
  
  // Border radius
  radius: {
    sm: fluidSize(4, 8),
    md: fluidSize(8, 12),
    lg: fluidSize(12, 16),
    xl: fluidSize(16, 24),
    '2xl': fluidSize(24, 32),
    '3xl': fluidSize(32, 48),
  },
  
  // Letter spacing (tracking)
  tracking: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    button: fluidSize(1.5, 2.8), // 0.25em - 0.48em (para botones)
  },
}

/**
 * Genera estilos inline con tamaños fluidos
 * @param {Object} styles - Objeto con propiedades CSS
 * @returns {Object} - Objeto de estilos con valores fluidos
 */
export const fluidStyles = (styles) => {
  const result = {}
  
  Object.entries(styles).forEach(([key, value]) => {
    if (typeof value === 'object' && value.min && value.max) {
      result[key] = fluidSize(value.min, value.max, value.minVw, value.maxVw)
    } else {
      result[key] = value
    }
  })
  
  return result
}

/**
 * Hook para generar clases con tamaños fluidos
 * Útil para usar con style prop en componentes
 */
export const useFluidSizing = () => ({
  text: fluidSizing.text,
  heading: fluidSizing.heading,
  spacing: fluidSizing.spacing,
  section: fluidSizing.section,
  container: fluidSizing.container,
  radius: fluidSizing.radius,
  custom: fluidSize,
})
