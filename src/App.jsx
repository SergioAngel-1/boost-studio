import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './core/router'
import { ModalProvider } from './shared/context/ModalContext'
import { initializeAnalytics } from './utils/analytics'
import { PageLoader } from './shared/atoms/loaders/PageLoader'
import { ErrorBoundary } from './shared/components/ErrorBoundary'

function App() {
  useEffect(() => {
    // Inicializar analytics si hay consentimiento previo
    initializeAnalytics()
  }, [])

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ModalProvider>
          <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
          </Suspense>
        </ModalProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
