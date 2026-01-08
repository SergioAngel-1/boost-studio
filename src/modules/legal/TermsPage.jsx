import { motion } from 'framer-motion'
import { SEO } from '../../shared/components/SEO'

export const TermsPage = () => (
  <>
    <SEO
      title="Términos y Condiciones | Boost Studio"
      description="Términos y condiciones de uso de los servicios de Boost Studio. Conoce las políticas, derechos y obligaciones al contratar nuestros servicios de growth marketing y consultoría digital."
      keywords="términos y condiciones, términos de servicio, condiciones de uso, boost studio legal, contrato servicios marketing"
      url="/terminos-y-condiciones"
    />
    
    <section aria-labelledby="terms-heading" className="relative min-h-screen bg-[#020102] text-white">
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
            id="terms-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Términos y Condiciones
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
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">1. Aceptación de los Términos</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Al acceder y utilizar el sitio web de Boost Studio (en adelante, "el Sitio") y nuestros servicios, aceptas estar legalmente vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">2. Descripción de los Servicios</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Boost Studio ofrece servicios profesionales de consultoría y ejecución en:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Growth Marketing & Data:</strong> Estrategias de marketing digital basadas en análisis de datos, optimización de embudos de conversión, y experimentación continua.</li>
              <li><strong className="!text-white">Activos Digitales & UX/UI:</strong> Diseño y desarrollo de sitios web, aplicaciones, y productos digitales con enfoque en experiencia de usuario y conversión.</li>
              <li><strong className="!text-white">Captación de Demanda:</strong> Campañas de publicidad digital (Google Ads, Facebook Ads, LinkedIn Ads), SEO, y estrategias multicanal para generación de leads.</li>
              <li><strong className="!text-white">Content & Branding:</strong> Estrategia de contenido, marketing de contenidos, gestión de redes sociales, y posicionamiento de marca.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">3. Uso del Sitio Web</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Al utilizar nuestro sitio web, te comprometes a:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li>Proporcionar información veraz, precisa y actualizada en todos los formularios.</li>
              <li>No utilizar el sitio para fines ilegales, fraudulentos o no autorizados.</li>
              <li>No intentar acceder a áreas restringidas del sitio o sistemas de Boost Studio.</li>
              <li>No transmitir virus, malware o cualquier código malicioso.</li>
              <li>Respetar los derechos de propiedad intelectual de Boost Studio y terceros.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">4. Propiedad Intelectual</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Todo el contenido del sitio web, incluyendo pero no limitado a textos, gráficos, logos, iconos, imágenes, videos, código fuente, y software, es propiedad de Boost Studio o sus licenciantes y está protegido por las leyes de propiedad intelectual de Colombia y tratados internacionales.
            </p>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              No está permitido copiar, reproducir, distribuir, modificar, o crear obras derivadas del contenido sin autorización expresa por escrito de Boost Studio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">5. Contratación de Servicios</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              La contratación de servicios de Boost Studio se formaliza mediante:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Propuesta comercial:</strong> Enviada por email tras la consultoría inicial, detallando alcance, entregables, timeline y presupuesto.</li>
              <li><strong className="!text-white">Contrato de servicios:</strong> Documento legal firmado por ambas partes que establece términos específicos del proyecto.</li>
              <li><strong className="!text-white">Orden de compra:</strong> Para clientes corporativos que requieran este proceso.</li>
            </ul>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              El envío del formulario de contacto en nuestro sitio web no constituye un contrato vinculante, sino una solicitud de información.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">6. Precios y Pagos</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li><strong className="!text-white">Precios:</strong> Los precios de nuestros servicios se especifican en la propuesta comercial y están sujetos a cambios sin previo aviso. Los precios publicados en el sitio web son referenciales.</li>
              <li><strong className="!text-white">Moneda:</strong> Los precios se expresan en dólares estadounidenses (USD) o pesos colombianos (COP), según se acuerde.</li>
              <li><strong className="!text-white">Forma de pago:</strong> Transferencia bancaria, PayPal, Stripe, o según se acuerde en el contrato.</li>
              <li><strong className="!text-white">Facturación:</strong> Emitimos factura electrónica conforme a la legislación colombiana.</li>
              <li><strong className="!text-white">Retrasos en pagos:</strong> Los retrasos en pagos pueden resultar en la suspensión temporal de servicios hasta que se regularice la situación.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">7. Entregables y Plazos</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Los entregables, plazos y metodología de trabajo se especifican en la propuesta comercial y contrato de servicios. Boost Studio se compromete a cumplir con los plazos acordados, sujeto a:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li>Recepción oportuna de información, accesos y materiales necesarios por parte del cliente.</li>
              <li>Aprobaciones y feedback del cliente dentro de los plazos establecidos.</li>
              <li>Ausencia de cambios significativos en el alcance del proyecto.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">8. Garantías y Limitación de Responsabilidad</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <strong className="!text-white">Garantías:</strong> Boost Studio garantiza que los servicios se prestarán con profesionalismo, diligencia y de acuerdo con los estándares de la industria. Sin embargo, no garantizamos resultados específicos de marketing (ej. número exacto de leads, ventas, o ROI) debido a factores externos fuera de nuestro control.
            </p>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <strong className="!text-white">Limitación de responsabilidad:</strong> En ningún caso Boost Studio será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, ingresos, datos o uso, derivados de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por el cliente en los últimos 6 meses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">9. Confidencialidad</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Ambas partes se comprometen a mantener la confidencialidad de toda información sensible compartida durante la relación comercial. Boost Studio no divulgará información confidencial del cliente a terceros sin autorización previa, excepto cuando sea requerido por ley.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">10. Terminación del Servicio</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Cualquiera de las partes puede terminar el contrato de servicios con un preaviso de 30 días por escrito. En caso de terminación:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed !text-slate-300/90 md:text-base">
              <li>El cliente debe pagar por todos los servicios prestados hasta la fecha de terminación.</li>
              <li>Boost Studio entregará todos los trabajos completados hasta ese momento.</li>
              <li>Los trabajos en progreso se facturarán proporcionalmente según el avance.</li>
            </ul>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Boost Studio se reserva el derecho de terminar el servicio inmediatamente en caso de incumplimiento grave del cliente, incluyendo falta de pago o uso indebido de nuestros servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">11. Modificaciones a los Términos</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Boost Studio se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio después de dichas modificaciones constituye tu aceptación de los nuevos términos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">12. Ley Aplicable y Jurisdicción</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier disputa derivada de estos términos o de los servicios prestados será sometida a la jurisdicción exclusiva de los tribunales competentes de Colombia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#FFD700] md:text-2xl">13. Contacto</h2>
            <p className="text-sm leading-relaxed !text-slate-300/90 md:text-base">
              Si tienes preguntas sobre estos Términos y Condiciones, contáctanos:
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
