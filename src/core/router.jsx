import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTES } from './routes'
import { AppLayout } from '../shared/layouts/AppLayout'

const HomePage = lazy(() => import('../modules/home/HomePage').then(module => ({ default: module.HomePage })))
const ServicesPage = lazy(() => import('../modules/services/ServicesPage').then(module => ({ default: module.ServicesPage })))
const AboutPage = lazy(() => import('../modules/about/AboutPage').then(module => ({ default: module.AboutPage })))
const CasesPage = lazy(() => import('../modules/cases/CasesPage').then(module => ({ default: module.CasesPage })))
const ContactPage = lazy(() => import('../modules/contact/ContactPage').then(module => ({ default: module.ContactPage })))

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.cases, element: <CasesPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
    ],
  },
])
