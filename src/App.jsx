import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './core/router'
import { ModalProvider } from './shared/context/ModalContext'
import { PageLoader } from './shared/atoms/loaders/PageLoader'
import { ErrorBoundary } from './shared/components/ErrorBoundary'

const App = () => (
  <ErrorBoundary>
    <ModalProvider>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ModalProvider>
  </ErrorBoundary>
)


export default App
