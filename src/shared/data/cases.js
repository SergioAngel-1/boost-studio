export const SHOWCASE_CASES = [
  {
    id: 'velox',
    title: 'VELOX',
    industry: 'Fintech / B2B',
    category: 'Series B Funding Scale-up',
    challenge: 'Costo de adquisición insostenible en canales pagados.',
    solution: 'Implementación de ecosistema de SEO Programático y reingeniería del Funnel de Activación.',
    metric: {
      target: 400,
      decimals: 0,
      format: (value) => `+${Math.round(value)}% ARR`,
    },
    secondary: '-60% CAC en 90 días.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'lumina',
    title: 'LUMINA',
    industry: 'E-commerce High-Ticket',
    category: 'Luxury Tech Wearables',
    challenge: 'Estancamiento en ROAS y baja retención de LTV.',
    solution:
      'Estrategia de Paid Media omnicanal basada en creativos dinámicos y arquitectura de Email Marketing de retención.',
    metric: {
      target: 12.5,
      decimals: 1,
      format: (value) => `${value.toFixed(1)}x ROAS`,
      duration: 2.2,
    },
    secondary: '$2.4M Generados en Q4.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'nexus-ai',
    title: 'NEXUS AI',
    industry: 'SaaS Enterprise',
    category: 'Artificial Intelligence Infrastructure',
    challenge: 'Generación de leads no calificados (Low intent).',
    solution: 'Diseño de Account Based Marketing (ABM) y Lead Scoring predictivo.',
    metric: {
      target: 500,
      decimals: 0,
      format: (value) => `${Math.round(value)}+ SQLs/mes`,
      duration: 2,
    },
    secondary: '30% Tasa de Cierre.',
    image:
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1600&q=80',
  },
]
