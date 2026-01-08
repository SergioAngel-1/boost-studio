/**
 * Configuración de Schema Markup (JSON-LD) para SEO
 * Datos estructurados para Google Rich Snippets y Knowledge Graph
 */

export const SCHEMA_CONFIG = {
  siteUrl: 'https://growthbooststudio.com',
  
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Boost Studio',
    alternateName: 'Boost',
    url: 'https://growthbooststudio.com',
    logo: 'https://growthbooststudio.com/Images/Boost_Logo.png',
    description: 'Agencia de Growth Digital especializada en estrategias data-driven para escalar negocios. Growth Marketing, UX/UI, Performance Marketing y Content Strategy con enfoque en resultados medibles.',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+57-320-960-4146',
      contactType: 'customer service',
      availableLanguage: ['es', 'en'],
      areaServed: 'CO',
    },
    sameAs: [
      'https://wa.me/573209604146',
    ],
  },

  professionalService: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://growthbooststudio.com/#service',
    name: 'Boost Studio',
    image: 'https://growthbooststudio.com/Images/Boost_Logo.png',
    priceRange: '$$$',
    telephone: '+57-320-960-4146',
    url: 'https://growthbooststudio.com',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    description: 'Agencia de Growth Digital remota especializada en estrategias data-driven para escalar negocios en Colombia y Latinoamérica.',
  },

  services: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://growthbooststudio.com/#services',
    serviceType: 'Digital Marketing Agency',
    provider: {
      '@type': 'Organization',
      name: 'Boost Studio',
      url: 'https://growthbooststudio.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Growth Digital',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Growth Marketing & Data',
            description: 'Estrategias de marketing digital basadas en análisis de datos para identificar oportunidades de crecimiento y optimizar la adquisición de clientes.',
            provider: {
              '@type': 'Organization',
              name: 'Boost Studio',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Activos Digitales & UX/UI',
            description: 'Diseño y desarrollo de sitios web, aplicaciones y productos digitales optimizados para conversión con experiencias de usuario excepcionales.',
            provider: {
              '@type': 'Organization',
              name: 'Boost Studio',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Captación de Demanda',
            description: 'Campañas de publicidad digital, SEO y estrategias multicanal para generar leads calificados y reducir el costo de adquisición de clientes.',
            provider: {
              '@type': 'Organization',
              name: 'Boost Studio',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content & Branding',
            description: 'Estrategia de contenido y gestión de marca para posicionar tu empresa, construir audiencia y generar confianza que impulse las conversiones.',
            provider: {
              '@type': 'Organization',
              name: 'Boost Studio',
            },
          },
        },
      ],
    },
  },
}
