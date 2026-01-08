import { motion } from 'framer-motion'
import { SEO } from '../../shared/components/SEO'

export const PrivacyPolicyPage = () => (
  <>
    <SEO
      title="Política de Privacidad | Boost Studio"
      description="Política de privacidad y protección de datos personales de Boost Studio. Conoce cómo recopilamos, usamos y protegemos tu información de acuerdo con la legislación colombiana y el GDPR."
      keywords="política de privacidad, protección de datos, GDPR, habeas data colombia, privacidad boost studio"
      url="/politica-de-privacidad"
    />
    
    <section aria-labelledby="privacy-heading" className="relative min-h-screen bg-[#020102] text-white">
      <div className="mx-auto w-full max-w-[900px] px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <header className="mb-8 space-y-4 md:mb-12 md:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FFD700]/80 md:text-xs md:tracking-[0.45em]"
          >
            Legal
          </motion.p>
          <motion.h1
            id="privacy-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Política de Privacidad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-sm text-slate-300/85 md:text-base"
          >
            Última actualización: 8 de enero de 2026
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="space-y-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl md:space-y-10 md:rounded-3xl md:p-10"
        >
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">1. Introducción</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              En Boost Studio, nos comprometemos a proteger tu privacidad y tus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal de acuerdo con la Ley 1581 de 2012 de Colombia (Habeas Data), el Reglamento General de Protección de Datos (GDPR) de la Unión Europea, y otras leyes aplicables de protección de datos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">2. Información que Recopilamos</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Recopilamos la siguiente información personal cuando utilizas nuestros servicios o te comunicas con nosotros:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Datos de identificación:</strong> Nombre, apellido, correo electrónico, número de teléfono.</li>
              <li><strong className="!text-white">Datos profesionales:</strong> Sitio web de tu empresa, presupuesto estimado, información sobre tu proyecto o negocio.</li>
              <li><strong className="!text-white">Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de permanencia en el sitio.</li>
              <li><strong className="!text-white">Cookies y tecnologías similares:</strong> Utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico del sitio (ver sección de Cookies).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">3. Cómo Usamos tu Información</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Utilizamos tu información personal para los siguientes propósitos:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Responder a tus consultas:</strong> Procesar y responder tus solicitudes de información, consultoría o servicios.</li>
              <li><strong className="!text-white">Prestación de servicios:</strong> Ejecutar proyectos de growth marketing, diseño UX/UI, performance marketing y content strategy.</li>
              <li><strong className="!text-white">Comunicación:</strong> Enviarte propuestas comerciales, actualizaciones de proyectos, newsletters (solo si has dado tu consentimiento).</li>
              <li><strong className="!text-white">Análisis y mejora:</strong> Analizar el uso del sitio web mediante Google Analytics para mejorar nuestros servicios y experiencia de usuario.</li>
              <li><strong className="!text-white">Cumplimiento legal:</strong> Cumplir con obligaciones legales, fiscales y regulatorias.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">4. Base Legal para el Tratamiento de Datos</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Procesamos tus datos personales bajo las siguientes bases legales:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Consentimiento:</strong> Al enviar el formulario de contacto, aceptas que procesemos tus datos para los fines descritos.</li>
              <li><strong className="!text-white">Ejecución de contrato:</strong> Para prestarte los servicios solicitados.</li>
              <li><strong className="!text-white">Interés legítimo:</strong> Para mejorar nuestros servicios y comunicarnos contigo sobre temas relevantes.</li>
              <li><strong className="!text-white">Obligación legal:</strong> Para cumplir con requisitos legales y fiscales en Colombia.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">5. Compartir Información con Terceros</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              No vendemos ni alquilamos tu información personal. Compartimos tus datos únicamente con:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Proveedores de servicios:</strong> EmailJS (envío de emails), Google Analytics (analítica web), proveedores de hosting.</li>
              <li><strong className="!text-white">Autoridades legales:</strong> Si es requerido por ley o para proteger nuestros derechos legales.</li>
            </ul>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Todos los terceros están obligados contractualmente a proteger tus datos y solo pueden usarlos para los fines específicos que les hemos autorizado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">6. Cookies y Tecnologías de Seguimiento</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio.</li>
              <li><strong className="!text-white">Cookies analíticas:</strong> Google Analytics para entender cómo los usuarios interactúan con nuestro sitio.</li>
              <li><strong className="!text-white">Cookies de marketing:</strong> Google Tag Manager para medir la efectividad de campañas publicitarias.</li>
            </ul>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">7. Tus Derechos (ARCO)</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              De acuerdo con la legislación colombiana y el GDPR, tienes los siguientes derechos:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre ti.</li>
              <li><strong className="!text-white">Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
              <li><strong className="!text-white">Cancelación:</strong> Solicitar la eliminación de tus datos personales.</li>
              <li><strong className="!text-white">Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos fines.</li>
              <li><strong className="!text-white">Portabilidad:</strong> Recibir tus datos en un formato estructurado y de uso común.</li>
              <li><strong className="!text-white">Revocación de consentimiento:</strong> Retirar tu consentimiento en cualquier momento.</li>
            </ul>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Para ejercer estos derechos, contáctanos en: <a href="mailto:info@growthbooststudio.com" className="!text-[#FFD700] underline hover:!text-[#FFD700]/80">info@growthbooststudio.com</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">8. Seguridad de los Datos</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, pérdida, destrucción o alteración. Esto incluye encriptación SSL/TLS, acceso restringido a datos personales, y auditorías de seguridad periódicas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">9. Retención de Datos</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los fines descritos en esta política, o según lo requiera la ley. Los datos de clientes activos se conservan durante la duración del proyecto y hasta 5 años después para fines fiscales y legales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">10. Transferencias Internacionales</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Colombia o la Unión Europea. En estos casos, nos aseguramos de que existan garantías adecuadas para proteger tus datos, como cláusulas contractuales estándar aprobadas por la Comisión Europea.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">11. Cambios a esta Política</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Te recomendamos revisar esta política regularmente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">12. Contacto</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, contáctanos:
            </p>
            <ul className="space-y-2 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Email:</strong> <a href="mailto:info@growthbooststudio.com" className="!text-[#FFD700] underline hover:!text-[#FFD700]/80">info@growthbooststudio.com</a></li>
              <li><strong className="!text-white">WhatsApp:</strong> <a href="https://wa.me/573209604146" target="_blank" rel="noopener noreferrer" className="!text-[#FFD700] underline hover:!text-[#FFD700]/80">+57 320 960 4146</a></li>
              <li><strong className="!text-white">Ubicación:</strong> Colombia</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </section>
  </>
)
