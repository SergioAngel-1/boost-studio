import { Component } from 'react'
import { motion } from 'framer-motion'
import { HiExclamationTriangle, HiArrowPath, HiHome } from 'react-icons/hi2'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020101] px-4">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#FFD700]/5 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#FFD700]/5 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl"
          >
            <div className="overflow-hidden rounded-2xl border border-[#FFD700]/20 bg-neutral-900/80 backdrop-blur-xl">
              <div className="border-b border-white/5 bg-gradient-to-r from-[#FFD700]/10 to-transparent p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <HiExclamationTriangle className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-xl font-semibold text-white md:text-2xl">
                      Unexpected Application Error
                    </h1>
                    <p className="mt-2 text-sm text-slate-400 md:text-base">
                      Algo salió mal. Nuestro equipo ha sido notificado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                    <p className="font-mono text-xs text-red-400 md:text-sm">
                      {this.state.error?.toString()}
                    </p>
                  </div>

                  {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                    <details className="group cursor-pointer rounded-lg border border-white/10 bg-black/20 p-4">
                      <summary className="text-xs font-semibold uppercase tracking-wider text-slate-400 md:text-sm">
                        Stack Trace (Development Only)
                      </summary>
                      <pre className="mt-4 overflow-x-auto text-[10px] text-slate-500 md:text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}

                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <motion.button
                      onClick={this.handleReset}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#ffcf20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/80"
                    >
                      <HiArrowPath className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      Reintentar
                    </motion.button>

                    <motion.button
                      onClick={this.handleGoHome}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex flex-1 items-center justify-center gap-2 rounded-full border border-[#FFD700]/30 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#FFD700] transition-all duration-300 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/80"
                    >
                      <HiHome className="h-4 w-4" />
                      Ir a Inicio
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 bg-black/20 px-6 py-4 md:px-8">
                <p className="text-center text-xs text-slate-500">
                  Si el problema persiste, contáctanos en{' '}
                  <a
                    href="mailto:info@growthbooststudio.com"
                    className="text-[#FFD700] underline-offset-2 hover:underline"
                  >
                    info@growthbooststudio.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}
