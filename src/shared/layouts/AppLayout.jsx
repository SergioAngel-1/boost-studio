import { memo, Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../organisms/layout/Header'
import { Footer } from '../organisms/layout/Footer'
import { Modal } from '../molecules/Modal'
import { ScrollToTop } from '../utils/ScrollToTop'
import { useScrollDepth } from '../hooks/useScrollDepth'

const LazyImmersiveBackdrop = lazy(() => import('../organisms/layout/ImmersiveBackdrop').then(module => ({ default: module.ImmersiveBackdrop })))
const LazyWhatsAppButton = lazy(() => import('../organisms/home/WhatsAppButton').then(module => ({ default: module.WhatsAppButton })))
const LazyCookieConsent = lazy(() => import('../components/CookieConsent').then(module => ({ default: module.CookieConsent })))

const overlayFallback = null

const AppLayoutComponent = () => {
  useScrollDepth()

  return (
    <div className="relative min-h-screen text-white">
      <ScrollToTop />
      <Suspense fallback={overlayFallback}>
        <LazyImmersiveBackdrop />
      </Suspense>
      <Header />
      <main id="main-content" role="main" aria-label="Contenido principal" className="relative mx-auto w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <Modal />
      <Suspense fallback={null}>
        <LazyWhatsAppButton />
      </Suspense>
      <Suspense fallback={null}>
        <LazyCookieConsent />
      </Suspense>
    </div>
  )
}

export const AppLayout = memo(AppLayoutComponent)
