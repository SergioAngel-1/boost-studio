# Boost Studio

Sitio web corporativo de Boost Studio - Una agencia de crecimiento que combina ingeniería de datos con creatividad agresiva para escalar negocios.

## 🚀 Stack Tecnológico

- **React 18** - Framework UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación SPA
- **Framer Motion** - Animaciones y transiciones
- **Tailwind CSS** - Estilos utility-first
- **Lucide React** - Sistema de iconos

## 📁 Estructura del Proyecto

```
src/
├── core/              # Configuración central
│   ├── navigation.js  # Definición de rutas
│   ├── router.jsx     # Configuración de React Router
│   └── routes.js      # Mapeo de rutas
├── modules/           # Páginas principales
│   ├── about/         # Página "Nosotros"
│   ├── cases/         # Casos de éxito
│   ├── contact/       # Página de contacto
│   ├── home/          # Página principal
│   └── services/      # Servicios
├── shared/            # Componentes compartidos
│   ├── atoms/         # Componentes básicos (botones, inputs, etc.)
│   ├── molecules/     # Componentes compuestos
│   ├── organisms/     # Secciones complejas
│   ├── context/       # React Context (Modal)
│   ├── data/          # Datos estáticos
│   ├── hooks/         # Custom hooks
│   └── utils/         # Utilidades (fluidSizing)
└── App.jsx            # Componente raíz
```

## 🎨 Sistema de Diseño

### Atomic Design
El proyecto sigue la metodología Atomic Design:
- **Atoms**: Componentes básicos reutilizables (Logo, NavItem, AccentButton, FormField)
- **Molecules**: Combinaciones simples (AnimatedBeam, SectionIntro, FeatureCard)
- **Organisms**: Secciones complejas (Header, HeroSection, GrowthPathSection, MethodSection)

### FluidSizing
Sistema de tipografía y espaciado responsive basado en `clamp()`:
- Escala fluida entre viewports mínimo (375px) y máximo (1920px)
- Headings: h1, h2, h3, h4
- Text: xs, sm, base, lg, xl
- Spacing: xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
- Container: sm, md, lg, xl, 5xl
- Radius: sm, md, lg, xl, 2xl, 3xl

### Colores
- **Base**: Negro (#020101) con variantes
- **Accent**: Amarillo dorado (#FFD700)
- **Text**: Blanco y grises (slate)
- **Shadows**: Sistema de glow effects con variantes (glow, glow-md, glow-lg)

## 🧩 Componentes Clave

### Header
- Navegación sticky con animación de línea de progreso
- Logo animado con layoutId
- Items de navegación con estados hover/activo
- Línea animada debajo del menú que se completa progresivamente
- Responsive con menú colapsable en móvil

### HeroSection
- Sección hero con imagen y texto balanceados
- Animaciones con Framer Motion
- Tipografía fluida
- CTA button con AccentButton

### GrowthPathSection
- Visualización de métricas de crecimiento
- SVG animado con path curvo (Bézier)
- Cards posicionadas a lo largo del path
- Versión desktop (full bleed) y móvil

### MethodSection
- Sistema de pasos interactivo
- Navegación entre steps con botones
- Cards animadas con contenido dinámico
- Líneas conectoras con gradientes

### ContactFormSection
- Formulario de contacto con WhatsApp integration
- Campos validados (nombre, empresa, mensaje)
- Animaciones de entrada
- Diseño glassmorphism

## 🎭 Animaciones

Todas las animaciones usan Framer Motion con:
- `initial`, `animate`, `exit` states
- `whileInView` para animaciones al scroll
- `viewport={{ once: true }}` para ejecutar una sola vez
- Easings personalizados: `[0.22, 1, 0.36, 1]`
- Spring animations para transiciones suaves

## 📱 Responsive

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- FluidSizing para escalado automático
- Layouts adaptativos (grid, flex)
- Versiones desktop/móvil específicas donde es necesario

## 🔧 Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linting con ESLint
```

## 🌐 Rutas

- `/` - Home
- `/nosotros` - About
- `/servicios` - Services
- `/casos` - Cases
- `/contacto` - Contact

## 📝 Convenciones

- **Componentes**: PascalCase (e.g., `HeroSection.jsx`)
- **Utilidades**: camelCase (e.g., `fluidSizing.js`)
- **Datos**: UPPER_SNAKE_CASE para constantes (e.g., `NAV_ITEMS`)
- **Estilos**: Tailwind classes + inline styles para valores dinámicos
- **Animaciones**: Variants separadas cuando son reutilizables

## 🎯 Características

- ✅ SPA con React Router
- ✅ Animaciones fluidas con Framer Motion
- ✅ Sistema de diseño consistente
- ✅ Tipografía y espaciado responsive
- ✅ Modal system con Context API
- ✅ Formularios con validación
- ✅ Integración con WhatsApp
- ✅ Optimizado para performance
- ✅ SEO-friendly structure
