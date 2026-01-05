import { Outlet } from 'react-router-dom'
import { Header } from '../organisms/layout/Header'
import { ImmersiveBackdrop } from '../organisms/layout/ImmersiveBackdrop'
import { Footer } from '../organisms/layout/Footer'

export const AppLayout = () => (
  <div className="relative min-h-screen overflow-x-hidden bg-[#050405] text-white">
    <ImmersiveBackdrop />
    <Header />
    <main className="relative mx-auto w-full max-w-full">
      <Outlet />
    </main>
    <Footer />
  </div>
)
