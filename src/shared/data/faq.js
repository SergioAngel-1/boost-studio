/**
 * Preguntas frecuentes para FAQPage
 * Incluye Schema Markup para aparecer en Google "People Also Ask"
 */

export const FAQ_DATA = [
  {
    id: 1,
    question: '¿Qué es Growth Marketing y cómo puede ayudar a mi negocio?',
    answer: 'Growth Marketing es una metodología basada en datos que combina marketing digital, análisis de métricas y experimentación continua para escalar tu negocio de forma sostenible. A diferencia del marketing tradicional, nos enfocamos en todo el embudo de conversión: desde la adquisición de clientes hasta la retención y monetización. Implementamos estrategias de SEO, paid media, email marketing, optimización de conversiones y análisis de datos para maximizar tu ROI y reducir el costo de adquisición de clientes.',
  },
  {
    id: 2,
    question: '¿Cuánto cuesta una consultoría de growth marketing con Boost Studio?',
    answer: 'Nuestras consultorías de growth marketing inician desde $5,000 USD. El precio final depende del alcance del proyecto, los servicios requeridos (Growth Marketing, UX/UI, Performance Marketing, Content Strategy) y la duración del engagement. Ofrecemos paquetes personalizados que se adaptan a empresas desde startups hasta corporativos. Incluimos una sesión estratégica gratuita inicial para evaluar tus necesidades y diseñar una propuesta a medida.',
  },
  {
    id: 3,
    question: '¿En cuánto tiempo puedo ver resultados con sus estrategias de growth?',
    answer: 'Los primeros resultados medibles se observan entre 4-8 semanas, dependiendo de la estrategia implementada y el estado actual de tu negocio. Para campañas de paid media (Google Ads, Facebook Ads), los resultados iniciales aparecen en 2-3 semanas. Para SEO y content marketing, el impacto significativo se ve entre 3-6 meses. Implementamos un sistema de tracking y reportes semanales para que veas el progreso en tiempo real: métricas de tráfico, conversiones, CAC (costo de adquisición) y ROI.',
  },
  {
    id: 4,
    question: '¿Trabajan con empresas de cualquier tamaño o industria?',
    answer: 'Sí, trabajamos con empresas de todos los tamaños: desde startups en etapa temprana hasta corporativos establecidos. Tenemos experiencia en múltiples industrias: FinTech, E-commerce, EdTech, SaaS, Salud, Servicios Profesionales y más. Nuestro enfoque data-driven nos permite adaptar estrategias a cualquier sector. Para startups, ofrecemos paquetes de growth hacking y MVP validation. Para empresas establecidas, implementamos estrategias de escalamiento y optimización de embudos existentes.',
  },
  {
    id: 5,
    question: '¿Qué incluye el servicio de UX/UI Design?',
    answer: 'Nuestro servicio de UX/UI incluye: auditoría de experiencia de usuario, diseño de wireframes y prototipos interactivos, diseño visual de interfaces (web y mobile), sistemas de diseño escalables, pruebas de usabilidad con usuarios reales, optimización de conversiones (CRO), y desarrollo frontend con React/Next.js. Nos enfocamos en crear experiencias que no solo se vean bien, sino que conviertan visitantes en clientes. Incluimos métricas de usabilidad (NPS, CES) y mapas de calor para validar decisiones de diseño.',
  },
  {
    id: 6,
    question: '¿Ofrecen servicios de SEO y posicionamiento orgánico?',
    answer: 'Sí, ofrecemos servicios completos de SEO técnico y estratégico. Incluye: auditoría SEO completa, investigación de keywords con alto potencial de conversión, optimización on-page (meta tags, headings, schema markup), SEO técnico (Core Web Vitals, velocidad de carga, mobile-first), estrategia de contenido SEO-optimizado, link building ético, y reportes mensuales de posicionamiento. Nos enfocamos en keywords con intención comercial que generen tráfico cualificado, no solo volumen. Resultados visibles en 3-6 meses.',
  },
  {
    id: 7,
    question: '¿Cómo miden el éxito de las campañas de marketing digital?',
    answer: 'Medimos el éxito con métricas de negocio, no solo vanity metrics. Nuestros KPIs principales incluyen: ROI (retorno de inversión), CAC (costo de adquisición de cliente), LTV (lifetime value del cliente), tasa de conversión por canal, MQL y SQL generados, revenue atribuido a marketing, y velocidad de crecimiento (growth rate). Implementamos dashboards personalizados con Google Analytics 4, Google Tag Manager y herramientas de BI para tracking en tiempo real. Reportes semanales con insights accionables y recomendaciones de optimización.',
  },
  {
    id: 8,
    question: '¿Qué diferencia a Boost Studio de otras agencias de marketing digital?',
    answer: 'Nuestra diferencia está en 3 pilares: (1) Enfoque data-driven: Todas nuestras decisiones están respaldadas por datos reales, no intuiciones. Implementamos sistemas de analítica avanzada y experimentación continua. (2) Obsesión por el ROI: No nos enfocamos en likes o impresiones, sino en métricas que impactan tu bottom line. Cada estrategia está diseñada para generar ingresos medibles. (3) Velocidad de ejecución: Metodología ágil que nos permite lanzar, probar y escalar en semanas, no meses. Somos tu motor de crecimiento, no solo una agencia.',
  },
  {
    id: 9,
    question: '¿Necesito tener un presupuesto grande para trabajar con ustedes?',
    answer: 'No necesariamente. Ofrecemos paquetes escalables desde $5,000 USD para startups y pequeñas empresas. Para presupuestos limitados, priorizamos estrategias de alto impacto y bajo costo: SEO, content marketing orgánico, optimización de conversiones, y growth hacking. Para empresas con presupuestos mayores ($15k-$50k+), implementamos estrategias full-funnel con paid media, automatización y sistemas de analítica avanzada. Lo importante es tener claridad sobre tus objetivos de crecimiento y estar dispuesto a invertir en estrategias basadas en datos.',
  },
  {
    id: 10,
    question: '¿Cómo es el proceso de trabajo y comunicación?',
    answer: 'Nuestro proceso tiene 4 fases: (1) Discovery & Auditoría (1-2 semanas): Analizamos tu negocio, competencia, métricas actuales y oportunidades de crecimiento. (2) Estrategia & Roadmap (1 semana): Diseñamos el plan de growth con tácticas priorizadas, timelines y KPIs. (3) Ejecución & Optimización (ongoing): Implementamos las estrategias con sprints de 2 semanas, pruebas A/B continuas y optimización basada en datos. (4) Reporting & Insights (semanal/mensual): Reportes con métricas clave, insights y recomendaciones. Comunicación vía Slack, reuniones semanales de sync, y dashboard en tiempo real.',
  },
]

/**
 * Genera Schema Markup para FAQPage
 */
export const generateFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
