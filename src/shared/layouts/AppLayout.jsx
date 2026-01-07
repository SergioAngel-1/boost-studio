import { Outlet } from 'react-router-dom'
import { Header } from '../organisms/layout/Header'
import { ImmersiveBackdrop } from '../organisms/layout/ImmersiveBackdrop'
import { Footer } from '../organisms/layout/Footer'
import { Modal } from '../molecules/Modal'
import { WhatsAppButton } from '../organisms/home/WhatsAppButton'
import { ScrollToTop } from '../utils/ScrollToTop'

export const AppLayout = () => (
  <div className="relative min-h-screen text-white">
    <ScrollToTop />
    <div className="relative min-h-screen">
      <ImmersiveBackdrop />
      <Header />
      <main className="relative mx-auto w-full max-w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
    <Modal />
    <WhatsAppButton />
  </div>
)
