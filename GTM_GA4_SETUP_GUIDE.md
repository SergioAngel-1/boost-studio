# 📊 Guía Completa: Configuración de Google Tag Manager y Google Analytics 4

Esta guía te llevará paso a paso desde cero para configurar GTM y GA4 en Boost Studio, incluso si nunca has usado estas herramientas.

---

## 📋 **TABLA DE CONTENIDOS**

1. [Prerequisitos](#prerequisitos)
2. [Parte 1: Crear Cuenta de Google Analytics 4](#parte-1-crear-cuenta-de-google-analytics-4)
3. [Parte 2: Configurar Google Tag Manager](#parte-2-configurar-google-tag-manager)
4. [Parte 3: Crear Variables en GTM](#parte-3-crear-variables-en-gtm)
5. [Parte 4: Crear Tags (Etiquetas)](#parte-4-crear-tags-etiquetas)
6. [Parte 5: Crear Activadores (Triggers)](#parte-5-crear-activadores-triggers)
7. [Parte 6: Publicar y Verificar](#parte-6-publicar-y-verificar)
8. [Parte 7: Verificar Eventos en GA4](#parte-7-verificar-eventos-en-ga4)
9. [Troubleshooting](#troubleshooting)

---

## ✅ **PREREQUISITOS**

Antes de empezar, asegúrate de tener:

- ✅ Cuenta de Google (Gmail)
- ✅ Acceso al código del proyecto Boost Studio
- ✅ GTM ID ya configurado en `.env`: `VITE_GTM_ID=GTM-NCVJBHTW`
- ✅ Sitio web desplegado (o corriendo en localhost para pruebas)

---

## 🎯 **PARTE 1: CREAR CUENTA DE GOOGLE ANALYTICS 4**

### **Paso 1.1: Acceder a Google Analytics**

1. Ve a: https://analytics.google.com/
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Empezar a medir"** o **"Crear cuenta"**

### **Paso 1.2: Configurar la Cuenta**

1. **Nombre de la cuenta**: `Boost Studio`
2. **Configuración de uso compartido de datos**: Deja las opciones por defecto
3. Clic en **"Siguiente"**

### **Paso 1.3: Crear Propiedad**

1. **Nombre de la propiedad**: `Boost Studio Website`
2. **Zona horaria**: `(GMT-06:00) Ciudad de México`
3. **Moneda**: `Peso mexicano (MXN)` o `Dólar estadounidense (USD)`
4. Clic en **"Siguiente"**

### **Paso 1.4: Detalles del Negocio**

1. **Sector**: `Marketing y publicidad` o `Tecnología`
2. **Tamaño de la empresa**: Selecciona el apropiado
3. **Uso previsto**: Marca las opciones relevantes
4. Clic en **"Crear"**

### **Paso 1.5: Aceptar Términos**

1. Lee y acepta los **Términos de Servicio**
2. Acepta el **Acuerdo de procesamiento de datos**
3. Clic en **"Acepto"**

### **Paso 1.6: Configurar Flujo de Datos**

1. Selecciona **"Web"**
2. **URL del sitio web**: `https://booststudio.com`
3. **Nombre del flujo**: `Boost Studio Web`
4. Clic en **"Crear flujo"**

### **Paso 1.7: Copiar Measurement ID**

🎯 **IMPORTANTE**: Verás un ID con formato `G-XXXXXXXXXX`

```
Ejemplo: G-ABC123XYZ
```

**Guarda este ID**, lo necesitarás en el Paso 4.1

---

## 🏷️ **PARTE 2: CONFIGURAR GOOGLE TAG MANAGER**

### **Paso 2.1: Verificar GTM Container**

Tu GTM ya está configurado con ID: `GTM-NCVJBHTW`

1. Ve a: https://tagmanager.google.com/
2. Busca tu contenedor **"Boost Studio"**
3. Haz clic para abrirlo

### **Paso 2.2: Familiarizarse con la Interfaz**

En el menú lateral izquierdo verás:

- **Etiquetas** (Tags): Donde crearemos los eventos
- **Activadores** (Triggers): Cuándo se disparan los eventos
- **Variables**: Datos que capturamos de la página
- **Vista previa**: Para probar antes de publicar
- **Enviar**: Para publicar cambios

---

## 📊 **PARTE 3: CREAR VARIABLES EN GTM**

Las variables capturan datos de la página. Vamos a crear 7 variables.

### **Paso 3.1: Ir a Variables**

1. En el menú lateral, clic en **"Variables"**
2. Scroll hasta **"Variables definidas por el usuario"**
3. Clic en **"Nueva"**

---

### **Variable 1: DLV - cta_text**

1. Clic en **"Nueva"** variable
2. Clic en el icono de configuración (lápiz)
3. **Tipo de variable**: Selecciona **"Variable de capa de datos"**
4. **Nombre de la variable de capa de datos**: `cta_text`
5. **Versión de la capa de datos**: `Versión 2`
6. En la parte superior, nombra la variable: `DLV - cta_text`
7. Clic en **"Guardar"**

---

### **Variable 2: DLV - cta_url**

Repite el proceso:

1. Clic en **"Nueva"**
2. Tipo: **"Variable de capa de datos"**
3. Nombre de la variable: `cta_url`
4. Nombre superior: `DLV - cta_url`
5. **Guardar**

---

### **Variable 3: DLV - form_name**

1. Clic en **"Nueva"**
2. Tipo: **"Variable de capa de datos"**
3. Nombre de la variable: `form_name`
4. Nombre superior: `DLV - form_name`
5. **Guardar**

---

### **Variable 4: DLV - user_budget**

1. Clic en **"Nueva"**
2. Tipo: **"Variable de capa de datos"**
3. Nombre de la variable: `user_budget`
4. Nombre superior: `DLV - user_budget`
5. **Guardar**

---

### **Variable 5: DLV - metric_name**

1. Clic en **"Nueva"**
2. Tipo: **"Variable de capa de datos"**
3. Nombre de la variable: `metric_name`
4. Nombre superior: `DLV - metric_name`
5. **Guardar**

---

### **Variable 6: DLV - metric_value**

1. Clic en **"Nueva"**
2. Tipo: **"Variable de capa de datos"**
3. Nombre de la variable: `metric_value`
4. Nombre superior: `DLV - metric_value`
5. **Guardar**

---

### **Variable 7: DLV - scroll_percentage**

1. Clic en **"Nueva"**
2. Tipo: **"Variable de capa de datos"**
3. Nombre de la variable: `scroll_percentage`
4. Nombre superior: `DLV - scroll_percentage`
5. **Guardar**

---

✅ **Checkpoint**: Deberías tener 7 variables creadas.

---

## 🏷️ **PARTE 4: CREAR TAGS (ETIQUETAS)**

Ahora crearemos 6 tags para enviar eventos a GA4.

⚠️ **IMPORTANTE**: GTM tiene 3 tipos de etiquetas de Google Analytics. Asegúrate de seleccionar la correcta en cada paso:

1. **"Etiqueta de Google"** → Para configuración base (Paso 4.1)
2. **"Google Analytics: evento de GA4"** → Para eventos personalizados (Pasos 4.2-4.6)
3. ~~"Etiqueta de Google y la etiqueta Google Analytics: evento de GA4"~~ → NO uses esta

---

### **Paso 4.1: Tag de Configuración GA4 (Base)**

Este es el tag principal que conecta GTM con GA4. **Debe crearse PRIMERO**.

1. En el menú lateral, clic en **"Etiquetas"**
2. Clic en **"Nueva"**
3. Clic en **"Configuración de la etiqueta"**
4. Busca y selecciona **"Etiqueta de Google"** (primera opción con icono de Google Analytics)
   - ⚠️ NO selecciones "Google Analytics: evento de GA4" todavía

**Configuración:**
- **ID de etiqueta**: Pega tu `G-XXXXXXXXXX` (del Paso 1.7)
  - Ejemplo: `G-96YC2S3TQC`
- **Configuración adicional**: Deja todo por defecto (no toques nada más)

5. Clic en **"Activación"** (sección inferior)
6. Selecciona **"All Pages"** (Todas las páginas)
7. En la parte superior derecha, en el campo de nombre, escribe: `GA4 - Configuration`
8. Clic en **"Guardar"** (botón azul superior derecha)

✅ **Verificación**: Deberías ver tu nueva etiqueta `GA4 - Configuration` en la lista de etiquetas.

---

### **Paso 4.2: Tag de Page View**

Este tag envía vistas de página a GA4. **Solo funciona si ya creaste el tag del Paso 4.1**.

1. Clic en **"Nueva"** etiqueta
2. Clic en **"Configuración de la etiqueta"**
3. Busca y selecciona **"Google Analytics: evento de GA4"** (tercera opción con icono naranja)
   - ⚠️ Ahora SÍ usa "evento de GA4", NO "Etiqueta de Google"

**Configuración:**
- **ID de etiqueta**: `G-XXXXXXXXXX` (el mismo del Paso 4.1)
- **Nombre del evento**: `pageview` (escríbelo exactamente así, en minúsculas)
- **Parámetros del evento**: Déjalo vacío por ahora

4. Clic en **"Activación"** (sección inferior)
5. Clic en el **"+"** (signo más) para crear nuevo activador
6. Clic en **"Configuración del activador"**
7. Busca y selecciona **"Evento personalizado"**
8. **Nombre del evento**: `pageview` (exactamente igual que arriba)
9. **Usa coincidencias de expresiones regulares**: Déjalo desmarcado
10. En la parte superior, nombra el activador: `Custom Event - pageview`
11. Clic en **"Guardar"** para guardar el activador
12. De vuelta en la etiqueta, en la parte superior, nómbrala: `GA4 - Page View`
13. Clic en **"Guardar"** para guardar la etiqueta

✅ **Verificación**: Deberías tener 2 etiquetas creadas y 1 activador personalizado.

---

### **Paso 4.3: Tag de CTA Click**

1. Clic en **"Nueva"** etiqueta
2. Clic en **"Configuración de la etiqueta"**
3. Selecciona **"Google Analytics: evento de GA4"**

**Configuración:**
- **ID de etiqueta**: `G-XXXXXXXXXX` (el mismo de siempre)
- **Nombre del evento**: `cta_click`

**Parámetros del evento**:
4. Scroll hacia abajo hasta **"Parámetros del evento"**
5. Clic en **"Agregar fila"**
   - **Nombre del parámetro**: `cta_text`
   - **Valor**: Haz clic en el icono de bloques (🧩) → Busca y selecciona `DLV - cta_text`
6. Clic en **"Agregar fila"** otra vez
   - **Nombre del parámetro**: `cta_url`
   - **Valor**: Haz clic en el icono de bloques (🧩) → Busca y selecciona `DLV - cta_url`

**Activación**:
7. Clic en **"Activación"**
8. Clic en el **"+"** para crear nuevo activador
9. Tipo: **"Evento personalizado"**
10. **Nombre del evento**: `cta_click`
11. Nombrar activador: `Custom Event - cta_click`
12. **Guardar** el activador

13. Nombrar etiqueta: `GA4 - CTA Click`
14. **Guardar** la etiqueta

✅ **Verificación**: Tu etiqueta debe tener 2 parámetros configurados (cta_text y cta_url).

---

### **Paso 4.4: Tag de Form Submission**

1. Clic en **"Nueva"** etiqueta
2. Tipo: **"Google Analytics: evento de GA4"**

**Configuración:**
- **ID de etiqueta**: `G-XXXXXXXXXX`
- **Nombre del evento**: `form_submission`

**Parámetros del evento**:
3. Clic en **"Agregar fila"**
   - **Nombre del parámetro**: `form_name`
   - **Valor**: 🧩 → `DLV - form_name`
4. Clic en **"Agregar fila"**
   - **Nombre del parámetro**: `user_budget`
   - **Valor**: 🧩 → `DLV - user_budget`

**Activación**:
5. Clic en **"Activación"** → **"+"**
6. Tipo: **"Evento personalizado"**
7. **Nombre del evento**: `form_submission`
8. Nombrar activador: `Custom Event - form_submission`
9. **Guardar** el activador

10. Nombrar etiqueta: `GA4 - Form Submission`
11. **Guardar** la etiqueta

---

### **Paso 4.5: Tag de Web Vitals**

1. Clic en **"Nueva"** etiqueta
2. Tipo: **"Google Analytics: evento de GA4"**

**Configuración:**
- **ID de etiqueta**: `G-XXXXXXXXXX`
- **Nombre del evento**: `web_vitals`

**Parámetros del evento**:
3. Clic en **"Agregar fila"**
   - **Nombre del parámetro**: `metric_name`
   - **Valor**: 🧩 → `DLV - metric_name`
4. Clic en **"Agregar fila"**
   - **Nombre del parámetro**: `metric_value`
   - **Valor**: 🧩 → `DLV - metric_value`

**Activación**:
5. Clic en **"Activación"** → **"+"**
6. Tipo: **"Evento personalizado"**
7. **Nombre del evento**: `web_vitals`
8. Nombrar activador: `Custom Event - web_vitals`
9. **Guardar** el activador

10. Nombrar etiqueta: `GA4 - Web Vitals`
11. **Guardar** la etiqueta

---

### **Paso 4.6: Tag de Scroll Depth**

1. Clic en **"Nueva"** etiqueta
2. Tipo: **"Google Analytics: evento de GA4"**

**Configuración:**
- **ID de etiqueta**: `G-XXXXXXXXXX`
- **Nombre del evento**: `scroll_depth`

**Parámetros del evento**:
3. Clic en **"Agregar fila"**
   - **Nombre del parámetro**: `scroll_percentage`
   - **Valor**: 🧩 → `DLV - scroll_percentage`

**Activación**:
4. Clic en **"Activación"** → **"+"**
5. Tipo: **"Evento personalizado"**
6. **Nombre del evento**: `scroll_depth`
7. Nombrar activador: `Custom Event - scroll_depth`
8. **Guardar** el activador

9. Nombrar etiqueta: `GA4 - Scroll Depth`
10. **Guardar** la etiqueta

---

✅ **Checkpoint**: Deberías tener 6 tags creados.

---

## 🎯 **PARTE 5: CREAR ACTIVADORES (TRIGGERS)**

Ya creamos los activadores mientras configurábamos los tags. Verifica que tengas estos 5:

1. ✅ `All Pages` (viene por defecto)
2. ✅ `Custom Event - pageview`
3. ✅ `Custom Event - cta_click`
4. ✅ `Custom Event - form_submission`
5. ✅ `Custom Event - web_vitals`
6. ✅ `Custom Event - scroll_depth`

Para verificar:
1. Menú lateral → **"Activadores"**
2. Revisa que todos estén listados

---

## 🚀 **PARTE 6: PUBLICAR Y VERIFICAR**

### **Paso 6.1: Vista Previa (Modo Debug)**

Antes de publicar, prueba en modo debug:

1. En la esquina superior derecha, clic en **"Vista previa"**
2. Se abrirá una ventana: **"Tag Assistant"**
3. Ingresa la URL de tu sitio: `https://booststudio.com` (o `http://localhost:5173` para pruebas locales)
4. Clic en **"Connect"**

**Qué verificar:**
- ✅ Tag `GA4 - Configuration` se dispara en todas las páginas
- ✅ Tag `GA4 - Page View` se dispara al cargar
- ✅ Haz clic en un botón CTA → Verifica que `GA4 - CTA Click` se dispare
- ✅ Haz scroll al 50% → Verifica que `GA4 - Scroll Depth` se dispare

### **Paso 6.2: Publicar Cambios**

Si todo funciona correctamente:

1. Clic en **"Enviar"** (esquina superior derecha)
2. **Nombre de la versión**: `Initial Setup - GA4 + Custom Events`
3. **Descripción de la versión**: 
   ```
   - Configuración inicial de GA4
   - Eventos: pageview, cta_click, form_submission, web_vitals, scroll_depth
   - Variables de dataLayer configuradas
   ```
4. Clic en **"Publicar"**

---

## 📊 **PARTE 7: VERIFICAR EVENTOS EN GA4**

### **Paso 7.1: Acceder a Informes en Tiempo Real**

1. Ve a Google Analytics: https://analytics.google.com/
2. Selecciona tu propiedad **"Boost Studio Website"**
3. En el menú lateral, clic en **"Informes"** → **"Tiempo real"**

### **Paso 7.2: Generar Eventos de Prueba**

Abre tu sitio web y realiza estas acciones:

1. ✅ **Navega entre páginas** → Verás eventos `pageview`
2. ✅ **Haz clic en "Hablar con Boost"** → Verás evento `cta_click`
3. ✅ **Haz scroll al 50%** → Verás evento `scroll_depth`
4. ✅ **Envía el formulario de contacto** → Verás evento `form_submission`

### **Paso 7.3: Ver Eventos Personalizados**

En GA4 Tiempo Real:

1. Scroll hasta **"Evento por nombre"**
2. Deberías ver:
   - `pageview`
   - `cta_click`
   - `scroll_depth`
   - `form_submission`
   - `web_vitals`

### **Paso 7.4: Ver Parámetros de Eventos**

1. Haz clic en un evento (ej: `cta_click`)
2. Verás los parámetros:
   - `cta_text`: "Hablar con Boost"
   - `cta_url`: "/contacto"

---

## 🔧 **TROUBLESHOOTING**

### **Problema 1: No veo eventos en GA4**

**Soluciones:**
1. ✅ Verifica que GTM esté publicado (no solo en vista previa)
2. ✅ Espera 5-10 minutos (puede haber delay)
3. ✅ Verifica que el `Measurement ID` en GTM sea correcto
4. ✅ Usa el modo debug de GTM para ver si los tags se disparan

### **Problema 2: Los tags no se disparan en GTM**

**Soluciones:**
1. ✅ Verifica que el código GTM esté en el sitio (inspecciona con DevTools)
2. ✅ Revisa la consola del navegador por errores
3. ✅ Verifica que los activadores estén configurados correctamente
4. ✅ Usa GTM Preview Mode para debuggear

### **Problema 3: Variables vacías en GA4**

**Soluciones:**
1. ✅ Verifica que las variables de dataLayer estén bien escritas (case-sensitive)
2. ✅ Usa GTM Preview para ver el contenido de `dataLayer`
3. ✅ Verifica que el código del sitio esté enviando los datos correctamente

### **Problema 4: Eventos duplicados**

**Soluciones:**
1. ✅ Verifica que no tengas múltiples tags con el mismo activador
2. ✅ Revisa que no haya código GTM duplicado en el HTML

---

## 📋 **CHECKLIST FINAL**

Antes de dar por terminada la configuración:

### **En Google Analytics 4:**
- [ ] Cuenta creada
- [ ] Propiedad configurada
- [ ] Flujo de datos web creado
- [ ] Measurement ID copiado

### **En Google Tag Manager:**
- [ ] 7 variables creadas (DLV - cta_text, cta_url, etc.)
- [ ] 6 tags creados (GA4 Configuration, Page View, CTA Click, etc.)
- [ ] 6 activadores creados (All Pages + 5 Custom Events)
- [ ] Configuración publicada

### **En el Sitio Web:**
- [ ] GTM ID configurado en `.env`
- [ ] Código desplegado en producción
- [ ] Eventos probados en modo debug
- [ ] Eventos visibles en GA4 Tiempo Real

---

## 🎯 **PRÓXIMOS PASOS RECOMENDADOS**

Una vez que todo funcione:

1. **Crear Audiencias en GA4** basadas en eventos (ej: usuarios que llegan al 100% scroll)
2. **Configurar Conversiones** (marcar `form_submission` como conversión)
3. **Crear Informes Personalizados** en GA4
4. **Configurar Alertas** para eventos importantes
5. **Integrar con Google Ads** para remarketing

---

## 📚 **RECURSOS ADICIONALES**

- [Documentación oficial de GTM](https://support.google.com/tagmanager)
- [Documentación oficial de GA4](https://support.google.com/analytics/answer/10089681)
- [Google Tag Manager Academy](https://analytics.google.com/analytics/academy/)
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)

---

## 💡 **TIPS FINALES**

1. **Siempre usa Vista Previa** antes de publicar cambios en GTM
2. **Documenta tus cambios** en las descripciones de versión
3. **Crea versiones de respaldo** antes de hacer cambios grandes
4. **Usa nombres descriptivos** para tags, variables y activadores
5. **Revisa GA4 regularmente** para asegurar que los datos fluyan correctamente

---

**¿Necesitas ayuda?** Revisa la sección de [Troubleshooting](#troubleshooting) o contacta al equipo de desarrollo.

---

**Última actualización**: Enero 2026  
**Versión**: 1.0  
**Autor**: Boost Studio Dev Team
