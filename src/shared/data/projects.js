export const PROJECTS_DATA = [
  {
    id: 'wegest-surrogacy',
    title: 'Wegest Surrogacy',
    industry: 'Salud',
    category: 'Servicios',
    challenge: 'Empresa nueva de subrogación ética sin presencia digital. Necesitaban construir audiencia desde cero en mercados internacionales (inglés y español).',
    solution: 'Creación de redes sociales (Instagram y Facebook) desde cero, estrategia de contenido orgánico para generar confianza, y campañas de publicidad digital en Meta Ads y Google Ads segmentadas por país.',
    metric: {
      target: 5000,
      decimals: 0,
      duration: 2,
      format: (value) => `${Math.round(value).toLocaleString()}+`,
    },
    secondary: 'Seguidores generados',
    image: '/Images/projects/WeGestProject.webp',
    modalContent: {
      title: 'Wegest: Construyendo presencia digital para subrogación ética',
      sections: [
        {
          subtitle: 'El Desafío',
          content: 'Wegest llegó como una empresa completamente nueva en el sector de subrogación ética, sin presencia en redes sociales ni audiencia establecida. Necesitaban generar confianza en un mercado sensible y alcanzar familias en múltiples países de habla inglesa y española.'
        },
        {
          subtitle: 'La Estrategia',
          content: 'Desarrollamos una estrategia integral de marketing digital: creamos perfiles de Instagram y Facebook desde cero, diseñamos un calendario de contenido educativo y testimonial para generar confianza orgánica, y lanzamos campañas de publicidad segmentada en Meta Ads y Google Ads (incluyendo blog) dirigidas a audiencias específicas en Estados Unidos, Canadá, España y Latinoamérica.'
        },
        {
          subtitle: 'Los Resultados',
          content: 'Construimos una comunidad de más de 5,000 seguidores orgánicos en los primeros 6 meses. Las campañas de publicidad digital generaron un flujo constante de consultas calificadas, con un costo por lead 40% menor al promedio de la industria. El sitio web recibió tráfico cualificado de más de 12 países.'
        },
        {
          subtitle: 'Tácticas Implementadas',
          list: [
            'Creación y gestión de redes sociales (Instagram y Facebook)',
            'Estrategia de contenido orgánico bilingüe (inglés y español)',
            'Campañas de Meta Ads segmentadas por país y demografía',
            'Campañas de Google Ads con enfoque en blog y contenido educativo',
            'Optimización SEO del sitio web para búsquedas internacionales'
          ]
        }
      ],
      metrics: [
        { label: 'Seguidores orgánicos', value: '5,000+' },
        { label: 'Países alcanzados', value: '12+' },
        { label: 'Reducción CPL', value: '-40%' },
        { label: 'Idiomas', value: 'EN + ES' }
      ]
    }
  },
  {
    id: 'amanay-foundation',
    title: 'Fundación Amanay',
    industry: 'Social',
    category: 'Fundación',
    challenge: 'Fundación de acompañamiento en procesos de subrogación sin presencia digital ni comunidad establecida. Necesitaban posicionarse como referente en el sector.',
    solution: 'Construcción de marca en redes sociales desde cero con estrategia de contenido educativo y de valor. Campañas de awareness y generación de comunidad orgánica.',
    metric: {
      target: 3500,
      decimals: 0,
      duration: 2,
      format: (value) => `${Math.round(value).toLocaleString()}+`,
    },
    secondary: 'Comunidad construida',
    image: '/Images/projects/amanayProject.webp',
    modalContent: {
      title: 'Fundación Amanay: Posicionamiento digital de fundación social',
      sections: [
        {
          subtitle: 'El Contexto',
          content: 'Fundación Amanay es una organización dedicada al acompañamiento emocional y legal de familias en procesos de subrogación. Al iniciar su operación, no contaban con presencia digital ni una comunidad que conociera sus servicios de apoyo.'
        },
        {
          subtitle: 'Nuestra Estrategia',
          content: 'Creamos una estrategia de marketing de contenidos enfocada en educar y generar confianza. Desarrollamos perfiles en redes sociales (Instagram y Facebook) con contenido de valor sobre acompañamiento en subrogación, testimonios de familias, y recursos educativos. La estrategia se centró en crecimiento orgánico para construir una comunidad genuina y comprometida.'
        },
        {
          subtitle: 'El Impacto',
          content: 'Construimos una comunidad orgánica de más de 3,500 seguidores en 8 meses, con altos niveles de engagement y participación. La fundación se posicionó como un referente en acompañamiento de subrogación, recibiendo consultas semanales de familias que necesitan apoyo. El contenido educativo generó alcance orgánico en múltiples países de habla hispana.'
        },
        {
          subtitle: 'Servicios Implementados',
          list: [
            'Creación de identidad digital y redes sociales',
            'Estrategia de contenido educativo y testimonial',
            'Gestión de comunidad y engagement orgánico',
            'Calendario editorial con temas de valor social',
            'Posicionamiento como referente en el sector'
          ]
        }
      ],
      metrics: [
        { label: 'Comunidad orgánica', value: '3,500+' },
        { label: 'Engagement rate', value: '8.5%' },
        { label: 'Alcance mensual', value: '50K+' },
        { label: 'Consultas mensuales', value: '15+' }
      ]
    }
  }
]
