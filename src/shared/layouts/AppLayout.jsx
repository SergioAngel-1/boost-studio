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
    <ImmersiveBackdrop />
    <Header />
    <main className="relative mx-auto w-full max-w-full overflow-x-hidden">
      <Outlet />
    </main>
    <Footer />
    <Modal />
    <WhatsAppButton />
  </div>
)
