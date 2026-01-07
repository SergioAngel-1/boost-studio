import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './core/router'
import { ModalProvider } from './shared/context/ModalContext'
import { PageLoader } from './shared/atoms/loaders/PageLoader'

const App = () => (
  <ModalProvider>
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </ModalProvider>
)


export default App
