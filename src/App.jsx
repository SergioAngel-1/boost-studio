import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './core/router'
import { ModalProvider } from './shared/context/ModalContext'
import { PageLoader } from './shared/atoms/loaders/PageLoader'
import { ErrorBoundary } from './shared/components/ErrorBoundary'

const App = () => (
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


export default App
