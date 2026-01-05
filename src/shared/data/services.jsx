export const IconGrowth = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8 text-[#FFD700]">
    <path d="M6 25.5h20" />
    <path d="M9.5 21.5v-6.5L14.5 20l5-6.5 5 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 11l1.8-1.8" />
    <path d="M11 8h7" />
    <path d="M24 11l2-2" />
  </svg>
)

export const IconDigitalAssets = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8 text-[#FFD700]">
    <rect x="5" y="7" width="22" height="18" rx="3" />
    <path d="M5 12h22" />
    <path d="M10.5 10h.05" strokeLinecap="round" />
    <path d="M14 21h8" strokeLinecap="round" />
    <path d="M10 21h1.5" strokeLinecap="round" />
  </svg>
)

export const IconDemand = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8 text-[#FFD700]">
    <path d="M13 6h6l3 7-6 10-6-10 3-7Z" strokeLinejoin="round" />
    <path d="M16 12v4" strokeLinecap="round" />
    <path d="M22 26l4 4" strokeLinecap="round" />
    <circle cx="24" cy="24" r="3" />
  </svg>
)

export const IconContent = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8 text-[#FFD700]">
    <path d="M8.5 7h15a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5H18l-4.5 4.5V19H8.5A2.5 2.5 0 0 1 6 16.5v-7A2.5 2.5 0 0 1 8.5 7Z" strokeLinejoin="round" />
    <path d="M12 12h8" strokeLinecap="round" />
    <path d="M12 15.5h5" strokeLinecap="round" />
    <path d="M21 12.5 22.5 11" strokeLinecap="round" />
  </svg>
)

export const HOME_SERVICES = [
  {
    id: '01',
    title: 'Estrategia de Growth y Data',
    description:
      'Diseñar, estructurar, ejecutar y optimizar estrategias de crecimiento que conectan data, revenue y producto en iteraciones medibles.',
    alignment: 'left',
    Icon: IconGrowth,
  },
  {
    id: '02',
    title: 'Desarrollo y Optimización de Activos Digitales',
    description:
      'Prestar servicios de diseño, rediseño, optimización y desarrollo de activos digitales que conviertan tráfico en crecimiento tangible.',
    alignment: 'right',
    Icon: IconDigitalAssets,
  },
  {
    id: '03',
    title: 'Captación de Demanda y Performance',
    description:
      'Ejecutar estrategias de captación de demanda mediante SEO, paid media, partnerships y funnels de revenue orientados a performance.',
    alignment: 'left',
    Icon: IconDemand,
  },
  {
    id: '04',
    title: 'Estrategia de Contenido y Marca',
    description:
      'Crear, gestionar y optimizar estrategias de contenido que posicionen la marca, construyan comunidad y potencien la conversión.',
    alignment: 'right',
    Icon: IconContent,
  },
]

export const SERVICES_ROADMAP = [
  {
    id: '01',
    title: 'Growth Marketing & Data',
    description:
      'Construimos loops de adquisición y activación con un stack de analítica vivo que revela palancas de crecimiento semanalmente.',
    alignment: 'left',
    details: [
      'Implementamos dashboards operativos que combinan data first-party y signals de marketing en un mismo canvas de decisiones.',
      'Priorizamos experimentos de alto impacto apoyados en modelos de atribución híbrida y cohortes de comportamiento.',
      'Trabajamos con equipos internos para institucionalizar rituales de revisión y aprendizaje continuo.',
    ],
    Icon: IconGrowth,
  },
  {
    id: '02',
    title: 'Activos Digitales & UX/UI',
    description:
      'Diseñamos y optimizamos productos, websites y flujos para convertir intención en revenue con experiencias cero fricción.',
    alignment: 'right',
    details: [
      'Auditamos journeys críticos para detectar puntos de fuga y redefinir arquitecturas de información.',
      'Construimos sistemas de diseño modulares que mejoran la velocidad de despliegue y la consistencia visual.',
      'Integramos mediciones UX cuantitativas (NPS, CES) y cualitativas para priorizar roadmaps de producto.',
    ],
    Icon: IconDigitalAssets,
  },
  {
    id: '03',
    title: 'Captación de Demanda',
    description:
      'Orquestamos paid media, partnerships, SEO y funnels híbridos para amplificar demanda cualificada y reducir CAC.',
    alignment: 'left',
    details: [
      'Diseñamos playbooks de adquisición multicanal con optimización de presupuestos en tiempo real.',
      'Gestionamos acuerdos con aliados estratégicos y plataformas para ampliar el alcance con eficiencias de costo.',
      'Implementamos automatizaciones de nurturing que aceleran la velocidad de cierre comercial.',
    ],
    Icon: IconDemand,
  },
  {
    id: '04',
    title: 'Content & Branding',
    description:
      'Activamos estrategias de contenido y storytelling eléctrico que posicionan la marca, construyen comunidad y aceleran conversión.',
    alignment: 'right',
    details: [
      'Definimos narrativas que conectan propósito, producto y propuesta de valor con mensajes consistentes.',
      'Orquestamos calendarios editoriales multiformato con activaciones en medios propios, pagados y ganados.',
      'Medimos brand lift, engagement y contribución a revenue para evolucionar continuamente los relatos.',
    ],
    Icon: IconContent,
  },
]
