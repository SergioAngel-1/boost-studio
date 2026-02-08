/**
 * Service Worker — Boost Studio PWA
 * Estrategia: Network-first para navegación, Cache-first para assets estáticos
 */

const CACHE_NAME = 'boost-studio-v1'
const STATIC_ASSETS = [
  '/',
  '/favicon/favicon.ico',
  '/favicon/android-chrome-192x192.png',
  '/favicon/android-chrome-512x512.png',
  '/favicon/apple-touch-icon.png',
]

// Install — precachear assets críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Precaching static assets')
      return cache.addAll(STATIC_ASSETS)
    })
  )
  self.skipWaiting()
})

// Activate — limpiar caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Eliminando cache antiguo:', name)
            return caches.delete(name)
          })
      )
    )
  )
  self.clients.claim()
})

// Fetch — estrategia según tipo de recurso
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Ignorar requests que no son GET
  if (request.method !== 'GET') return

  // Ignorar requests externos (analytics, fonts CDN, etc.)
  if (url.origin !== location.origin) return

  // Ignorar requests a la API de GTM
  if (url.pathname.includes('googletagmanager')) return

  // Navegación (HTML) — Network-first con fallback a cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return response
        })
        .catch(() => caches.match('/') || caches.match(request))
    )
    return
  }

  // Assets estáticos (JS, CSS, imágenes) — Cache-first con fallback a network
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached

        return fetch(request).then((response) => {
          // Solo cachear respuestas válidas
          if (response.ok) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          }
          return response
        })
      })
    )
    return
  }
})
