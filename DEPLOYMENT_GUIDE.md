# 🚀 Guía de Despliegue - SiteGround

Guía rápida para desplegar Boost Studio en SiteGround con Vite + React.

---

## 📋 **PREREQUISITOS**

- ✅ Cuenta de SiteGround activa
- ✅ Dominio: `growthbooststudio.com`
- ✅ Acceso al Gestor de Archivos de SiteGround
- ✅ Variables de entorno configuradas en `.env`

---

## 🔧 **PARTE 1: PREPARAR EL BUILD LOCAL**

### **Paso 1.1: Verificar Variables de Entorno**

Asegúrate de que tu archivo `.env` tenga todas las variables:

```env
# EmailJS
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION=tu_template_confirmation
VITE_EMAILJS_TEMPLATE_ID_NOTIFICATION=tu_template_notification
VITE_EMAILJS_PUBLIC_KEY=tu_public_key

# Google Tag Manager
VITE_GTM_ID=GTM-NCVJBHTW
```

### **Paso 1.2: Crear Build de Producción**

En tu terminal local, ejecuta:

```bash
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados.

### **Paso 1.3: Verificar Archivos Generados**

La carpeta `dist/` debe contener:
- `index.html`
- `assets/` (CSS, JS, imágenes)
- `.htaccess` (del folder `public/`)
- `robots.txt`
- `sitemap.xml`
- `favicon/`
- `Images/`

---

## 📤 **PARTE 2: SUBIR ARCHIVOS A SITEGROUND**

### **Paso 2.1: Acceder al Gestor de Archivos**

1. Inicia sesión en SiteGround
2. Ve a **"Sitios"** → **"Gestor de archivos"**
3. Navega a la carpeta `public_html`

### **Paso 2.2: Limpiar public_html (Mantener la Carpeta)**

⚠️ **IMPORTANTE**: NO borres la carpeta `public_html`, solo su contenido.

1. Dentro de `public_html`, selecciona **todos los archivos y carpetas** existentes
2. Clic derecho → **"Eliminar"** o usa el botón de eliminar
3. Confirma la eliminación
4. La carpeta `public_html` debe quedar **vacía**

### **Paso 2.3: Subir Archivos del Build**

**Opción A: Subir vía Gestor de Archivos (Recomendado para pocos archivos)**

1. Dentro de `public_html`, clic en **"Subir"**
2. Arrastra **TODO el contenido** de tu carpeta `dist/` local
3. Espera a que termine la carga

**Opción B: Subir vía FTP (Recomendado para muchos archivos)**

1. Descarga un cliente FTP (FileZilla, Cyberduck, etc.)
2. Conecta con las credenciales de SiteGround:
   - **Host**: `ftp.growthbooststudio.com`
   - **Usuario**: Tu usuario de SiteGround
   - **Contraseña**: Tu contraseña de SiteGround
   - **Puerto**: `21`
3. Navega a `/public_html/`
4. Arrastra todo el contenido de `dist/` a `public_html/`

### **Paso 2.4: Verificar Estructura Final**

Tu `public_html` debe verse así:

```
public_html/
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── index-abc123.js
│   ├── index-def456.css
│   └── ...
├── favicon/
│   └── favicon.ico
└── Images/
    ├── Boost_Logo.jpg
    ├── Boost_Metod.jpg
    └── ...
```

---

## 🔐 **PARTE 3: CONFIGURAR .htaccess**

### **Paso 3.1: Verificar .htaccess**

El archivo `.htaccess` ya está incluido en tu build. Verifica que esté en `public_html/.htaccess`.

Si no está visible:
1. En el Gestor de Archivos, clic en **"Configuración"** (icono de engranaje)
2. Marca **"Mostrar archivos ocultos"**
3. Clic en **"Guardar"**

### **Paso 3.2: Contenido del .htaccess**

El archivo debe contener (ya está en tu proyecto):

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# SPA Fallback - All routes to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# GZIP Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

---

## 🌐 **PARTE 4: CONFIGURAR DOMINIO Y SSL**

### **Paso 4.1: Verificar Dominio**

1. En SiteGround, ve a **"Sitios"** → **"Administrador del sitio"**
2. Verifica que el dominio principal sea: `growthbooststudio.com`
3. Si no lo es, cámbialo en **"Dominio principal"**

### **Paso 4.2: Activar SSL (HTTPS)**

1. Ve a **"Seguridad"** → **"SSL Manager"**
2. Si no tienes SSL, clic en **"Instalar"** (Let's Encrypt es gratis)
3. Espera 5-10 minutos a que se active
4. Verifica que aparezca el candado verde en `https://growthbooststudio.com`

### **Paso 4.3: Forzar HTTPS**

El `.htaccess` ya fuerza HTTPS, pero verifica en SiteGround:

1. Ve a **"Seguridad"** → **"HTTPS Enforce"**
2. Activa **"Forzar HTTPS"**

---

## ✅ **PARTE 5: VERIFICACIÓN POST-DESPLIEGUE**

### **Checklist de Verificación**

Visita tu sitio y verifica:

- [ ] **Página principal carga**: `https://growthbooststudio.com`
- [ ] **Sin www**: `www.growthbooststudio.com` redirige a `growthbooststudio.com`
- [ ] **HTTPS forzado**: `http://` redirige a `https://`
- [ ] **Navegación funciona**: Todas las rutas (`/servicios`, `/casos-de-exito`, etc.)
- [ ] **Imágenes cargan**: Logo, imágenes de fondo, etc.
- [ ] **Estilos aplicados**: TailwindCSS funciona correctamente
- [ ] **Formulario funciona**: Envía emails correctamente
- [ ] **GTM funciona**: Abre DevTools → Console → No errores de GTM
- [ ] **Eventos trackean**: Verifica en GA4 Tiempo Real

### **Verificar GTM en Producción**

1. Abre DevTools (F12)
2. Ve a la pestaña **"Console"**
3. Escribe: `dataLayer`
4. Deberías ver un array con eventos
5. Haz clic en un botón CTA y verifica que se agregue un evento `cta_click`

### **Verificar GA4 en Tiempo Real**

1. Ve a Google Analytics: https://analytics.google.com/
2. Selecciona tu propiedad **"Boost Studio Website"**
3. Ve a **"Informes"** → **"Tiempo real"**
4. Navega por tu sitio en otra pestaña
5. Deberías ver tu sesión activa y eventos en tiempo real

---

## 🔧 **TROUBLESHOOTING**

### **Problema 1: Página en blanco**

**Causa**: Rutas de assets incorrectas.

**Solución**:
1. Verifica que `vite.config.js` tenga `base: '/'`
2. Reconstruye: `npm run build`
3. Vuelve a subir archivos

### **Problema 2: 404 en rutas (ej: /servicios)**

**Causa**: `.htaccess` no está funcionando.

**Solución**:
1. Verifica que `.htaccess` esté en `public_html/`
2. Verifica que Apache tenga `mod_rewrite` habilitado (SiteGround lo tiene por defecto)
3. Contacta soporte de SiteGround si persiste

### **Problema 3: Imágenes no cargan**

**Causa**: Rutas incorrectas o archivos no subidos.

**Solución**:
1. Verifica que la carpeta `Images/` esté en `public_html/Images/`
2. Verifica permisos de archivos (755 para carpetas, 644 para archivos)
3. Verifica rutas en el código: `/Images/nombre.jpg`

### **Problema 4: Formulario no envía emails**

**Causa**: Variables de entorno no configuradas.

**Solución**:
1. Verifica que `.env` tenga todas las variables de EmailJS
2. Reconstruye: `npm run build`
3. Vuelve a subir archivos
4. Verifica en EmailJS Dashboard que el servicio esté activo

### **Problema 5: GTM no trackea eventos**

**Causa**: GTM no inicializado o ID incorrecto.

**Solución**:
1. Verifica que `.env` tenga `VITE_GTM_ID=GTM-NCVJBHTW`
2. Abre DevTools → Console → Busca errores de GTM
3. Verifica que el código GTM esté en el HTML (View Source)
4. Usa GTM Preview Mode para debuggear

---

## 🔄 **ACTUALIZACIONES FUTURAS**

Cuando hagas cambios al código:

1. **Hacer cambios localmente**
2. **Probar en localhost**: `npm run dev`
3. **Crear nuevo build**: `npm run build`
4. **Subir solo archivos modificados** a `public_html/`
   - Si cambiaste código: Sube `assets/` e `index.html`
   - Si cambiaste imágenes: Sube solo `Images/`
   - Si cambiaste `.htaccess`: Sube `.htaccess`

**Tip**: Usa FTP para actualizaciones rápidas en lugar del Gestor de Archivos.

---

## 📊 **MONITOREO POST-DESPLIEGUE**

### **Primeras 24 horas**

- [ ] Revisar GA4 cada 2-3 horas
- [ ] Verificar que los eventos se trackeen correctamente
- [ ] Probar formulario de contacto
- [ ] Verificar Web Vitals en PageSpeed Insights
- [ ] Revisar Search Console (si está configurado)

### **Primera semana**

- [ ] Revisar errores en GA4
- [ ] Verificar tasas de conversión del formulario
- [ ] Analizar scroll depth por página
- [ ] Revisar CTA clicks más populares
- [ ] Optimizar según datos recopilados

---

## 📚 **RECURSOS ADICIONALES**

- [Documentación de SiteGround](https://www.siteground.com/kb/)
- [Soporte de SiteGround](https://www.siteground.com/support/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/en/main/start/concepts#server-rendering)

---

## 🎯 **CHECKLIST FINAL DE DESPLIEGUE**

Antes de considerar el despliegue completo:

### **Archivos**
- [ ] Build generado (`npm run build`)
- [ ] Todos los archivos de `dist/` subidos a `public_html/`
- [ ] `.htaccess` presente y configurado
- [ ] `robots.txt` y `sitemap.xml` presentes

### **Configuración**
- [ ] Variables de entorno configuradas
- [ ] Dominio apuntando correctamente
- [ ] SSL activo (HTTPS)
- [ ] Redirección www → non-www funcionando

### **Funcionalidad**
- [ ] Todas las páginas cargan
- [ ] Navegación entre rutas funciona
- [ ] Formulario envía emails
- [ ] Imágenes y assets cargan
- [ ] Animaciones funcionan

### **Analytics**
- [ ] GTM instalado y funcionando
- [ ] GA4 recibiendo datos
- [ ] Eventos personalizados trackeando
- [ ] Web Vitals reportando

---

**¡Despliegue completo!** 🚀

Tu sitio ahora está en producción en `https://growthbooststudio.com` con tracking completo de analytics.

---

**Última actualización**: Enero 2026  
**Versión**: 1.0  
**Autor**: Boost Studio Dev Team
