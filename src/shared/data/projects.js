export const PROJECTS_DATA = [
  {
    id: 'fintech-saas',
    title: 'FinTech SaaS',
    industry: 'Finanzas',
    category: 'B2B SaaS',
    challenge: 'Plataforma con tráfico pero conversión estancada en 1.2%. CAC insostenible.',
    solution: 'Rediseño del funnel con prueba social dinámica, onboarding progresivo y pricing psychology. A/B testing agresivo en 14 variantes.',
    metric: {
      target: 340,
      decimals: 0,
      duration: 2,
      format: (value) => `+${Math.round(value)}%`,
    },
    secondary: 'Incremento en conversión',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80',
    modalContent: {
      title: 'FinTech SaaS: De 1.2% a 5.3% de conversión',
      sections: [
        {
          subtitle: 'El Contexto',
          content: 'Una plataforma FinTech B2B con 50K visitantes mensuales pero solo 600 sign-ups. El CAC era de $180 y el LTV no justificaba la inversión en ads.'
        },
        {
          subtitle: 'La Estrategia',
          content: 'Implementamos un sistema de prueba social en tiempo real mostrando actividad de usuarios, rediseñamos el onboarding en 3 pasos progresivos, y aplicamos pricing psychology con anclas de valor.'
        },
        {
          subtitle: 'Los Resultados',
          content: 'En 90 días: Conversión subió de 1.2% a 5.3% (+340%), CAC bajó a $68, y el trial-to-paid mejoró 28%. ROI de la inversión: 12x en el primer trimestre.'
        },
        {
          subtitle: 'Tácticas Clave',
          list: [
            'A/B testing de 14 variantes de landing page',
            'Onboarding progresivo con micro-compromisos',
            'Social proof dinámico con actividad real',
            'Pricing con anclas psicológicas',
            'Exit-intent con oferta de demo personalizada'
          ]
        }
      ],
      metrics: [
        { label: 'Conversión inicial', value: '1.2%' },
        { label: 'Conversión final', value: '5.3%' },
        { label: 'CAC reducido', value: '$68' },
        { label: 'ROI primer trimestre', value: '12x' }
      ]
    }
  },
  {
    id: 'ecommerce-fashion',
    title: 'E-commerce Fashion',
    industry: 'Retail',
    category: 'DTC',
    challenge: 'Alto tráfico pero carrito abandonado del 78%. Retención de clientes casi nula.',
    solution: 'Implementación de email automation post-abandono, programa de lealtad gamificado, y optimización de checkout en 1 página.',
    metric: {
      target: 2.4,
      decimals: 1,
      duration: 2.2,
      format: (value) => `$${value.toFixed(1)}M`,
    },
    secondary: 'Revenue recuperado',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
    modalContent: {
      title: 'E-commerce Fashion: $2.4M recuperados de carritos abandonados',
      sections: [
        {
          subtitle: 'El Problema',
          content: 'Una marca DTC de moda con 200K visitas mensuales pero 78% de abandono de carrito. Solo 8% de clientes compraban por segunda vez.'
        },
        {
          subtitle: 'La Solución',
          content: 'Desplegamos un sistema de recuperación automatizado con 5 emails secuenciales, un programa de puntos gamificado, y redujimos el checkout de 4 pasos a 1 página con guest checkout.'
        },
        {
          subtitle: 'El Impacto',
          content: 'Recuperamos $2.4M en 6 meses de carritos abandonados. La tasa de retención subió a 34% y el AOV aumentó 22% gracias al programa de lealtad.'
        },
        {
          subtitle: 'Stack Implementado',
          list: [
            'Klaviyo para email automation',
            'Smile.io para programa de lealtad',
            'Checkout optimizado con Shopify Plus',
            'Segmentación por comportamiento',
            'Retargeting coordinado con emails'
          ]
        }
      ],
      metrics: [
        { label: 'Revenue recuperado', value: '$2.4M' },
        { label: 'Abandono reducido', value: '78% → 52%' },
        { label: 'Retención mejorada', value: '8% → 34%' },
        { label: 'AOV incrementado', value: '+22%' }
      ]
    }
  },
  {
    id: 'edtech-platform',
    title: 'EdTech Platform',
    industry: 'Educación',
    category: 'Marketplace',
    challenge: 'Plataforma de cursos con bajo engagement. 85% de usuarios no completaban el primer módulo.',
    solution: 'Rediseño de UX con gamificación, notificaciones inteligentes basadas en comportamiento, y sistema de badges con prueba social.',
    metric: {
      target: 156,
      decimals: 0,
      duration: 2,
      format: (value) => `+${Math.round(value)}%`,
    },
    secondary: 'Aumento en completación',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1600&q=80',
    modalContent: {
      title: 'EdTech Platform: De 15% a 38% de completación de cursos',
      sections: [
        {
          subtitle: 'El Desafío',
          content: 'Una plataforma de educación online con 30K usuarios activos pero solo 15% completaba el primer módulo. El churn era del 65% en el primer mes.'
        },
        {
          subtitle: 'El Approach',
          content: 'Implementamos un sistema de gamificación con badges, puntos y leaderboards. Agregamos notificaciones push inteligentes basadas en patrones de uso y creamos un sistema de accountability con grupos de estudio.'
        },
        {
          subtitle: 'Los Números',
          content: 'La completación de cursos subió de 15% a 38% (+156%). El churn bajó a 28% y el NPS aumentó de 32 a 67. Los usuarios activos diarios crecieron 89%.'
        },
        {
          subtitle: 'Features Implementadas',
          list: [
            'Sistema de badges y achievements',
            'Notificaciones push basadas en ML',
            'Grupos de estudio con accountability',
            'Progress tracking visual',
            'Certificados compartibles en LinkedIn'
          ]
        }
      ],
      metrics: [
        { label: 'Completación inicial', value: '15%' },
        { label: 'Completación final', value: '38%' },
        { label: 'Churn reducido', value: '65% → 28%' },
        { label: 'NPS mejorado', value: '32 → 67' }
      ]
    }
  }
]
