import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './core/router'
import { ModalProvider } from './shared/context/ModalContext'

const App = () => (
  <ModalProvider>
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#050405] text-xs uppercase tracking-[0.5em] text-[#FFD700]">
          Loading Boost Studio...
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </ModalProvider>
)


export default App
