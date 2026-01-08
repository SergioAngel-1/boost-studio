import { HiTrendingUp } from 'react-icons/hi'
import { HiCube, HiChatBubbleLeftRight } from 'react-icons/hi2'
import { TbTarget } from 'react-icons/tb'

export const IconGrowth = () => <HiTrendingUp className="h-8 w-8 text-[#FFD700]" />

export const IconDigitalAssets = () => <HiCube className="h-8 w-8 text-[#FFD700]" />

export const IconDemand = () => <TbTarget className="h-8 w-8 text-[#FFD700]" />

export const IconContent = () => <HiChatBubbleLeftRight className="h-8 w-8 text-[#FFD700]" />

export const HOME_SERVICES = [
  {
    id: '01',
    title: 'Estrategia de Growth Marketing',
    description:
      'Análisis de datos y estrategias de crecimiento digital para optimizar la adquisición de clientes y maximizar el retorno de inversión en marketing.',
    alignment: 'left',
    Icon: IconGrowth,
  },
  {
    id: '02',
    title: 'Diseño Web y Desarrollo Digital',
    description:
      'Creación y optimización de sitios web, aplicaciones y productos digitales con enfoque en experiencia de usuario y conversión.',
    alignment: 'right',
    Icon: IconDigitalAssets,
  },
  {
    id: '03',
    title: 'Publicidad Digital y SEO',
    description:
      'Campañas de Google Ads, Facebook Ads y posicionamiento SEO para generar tráfico cualificado y leads de alta calidad.',
    alignment: 'left',
    Icon: IconDemand,
  },
  {
    id: '04',
    title: 'Marketing de Contenidos',
    description:
      'Estrategia y creación de contenido optimizado para SEO, redes sociales y email marketing que posiciona tu marca y genera conversiones.',
    alignment: 'right',
    Icon: IconContent,
  },
]

export const SERVICES_ROADMAP = [
  {
    id: '01',
    title: 'Growth Marketing & Data',
    description:
      'Estrategias de marketing digital basadas en análisis de datos para identificar oportunidades de crecimiento y optimizar la adquisición de clientes.',
    alignment: 'left',
    details: [
      'Implementamos sistemas de analítica web y dashboards personalizados que integran datos de múltiples canales de marketing para tomar decisiones informadas.',
      'Diseñamos y ejecutamos experimentos de growth marketing con pruebas A/B, optimización de embudos de conversión y análisis de cohortes de usuarios.',
      'Capacitamos a tu equipo en metodologías de growth hacking y establecemos procesos de mejora continua basados en métricas clave de negocio.',
    ],
    Icon: IconGrowth,
  },
  {
    id: '02',
    title: 'Activos Digitales & UX/UI',
    description:
      'Diseño y desarrollo de sitios web, aplicaciones y productos digitales optimizados para conversión con experiencias de usuario excepcionales.',
    alignment: 'right',
    details: [
      'Realizamos auditorías de experiencia de usuario (UX) para identificar fricciones en el recorrido del cliente y optimizar la arquitectura de información de tu sitio web.',
      'Creamos sistemas de diseño escalables y componentes reutilizables que aceleran el desarrollo de productos digitales y garantizan consistencia visual.',
      'Implementamos métricas de usabilidad (NPS, CES, mapas de calor) y pruebas con usuarios reales para validar decisiones de diseño y priorizar mejoras.',
    ],
    Icon: IconDigitalAssets,
  },
  {
    id: '03',
    title: 'Captación de Demanda',
    description:
      'Campañas de publicidad digital, SEO y estrategias multicanal para generar leads calificados y reducir el costo de adquisición de clientes.',
    alignment: 'left',
    details: [
      'Gestionamos campañas de Google Ads, Facebook Ads, LinkedIn Ads y otros canales de paid media con optimización continua del presupuesto y segmentación de audiencias.',
      'Implementamos estrategias de SEO técnico y creación de contenido optimizado para posicionar tu negocio en los primeros resultados de búsqueda orgánica.',
      'Desarrollamos embudos de conversión automatizados con email marketing, retargeting y nurturing de leads para maximizar las ventas.',
    ],
    Icon: IconDemand,
  },
  {
    id: '04',
    title: 'Content & Branding',
    description:
      'Estrategia de contenido y gestión de marca para posicionar tu empresa, construir audiencia y generar confianza que impulse las conversiones.',
    alignment: 'right',
    details: [
      'Desarrollamos estrategias de marketing de contenidos alineadas con tu propuesta de valor, creando narrativas que conectan emocionalmente con tu audiencia objetivo.',
      'Planificamos y ejecutamos calendarios editoriales con contenido optimizado para SEO, redes sociales, blog corporativo y campañas de email marketing.',
      'Medimos el impacto del contenido en awareness de marca, engagement en redes sociales y contribución directa a la generación de leads y ventas.',
    ],
    Icon: IconContent,
  },
]
