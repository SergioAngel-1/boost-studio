import { Outlet } from 'react-router-dom'
import { Header } from '../organisms/layout/Header'
import { ImmersiveBackdrop } from '../organisms/layout/ImmersiveBackdrop'
import { Footer } from '../organisms/layout/Footer'

export const AppLayout = () => (
  <div className="relative min-h-screen bg-[#050405] text-white">
    <ImmersiveBackdrop />
    <div className="relative">
      <Header />
      <main className="relative mx-auto w-full max-w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
)
