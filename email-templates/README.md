# 📧 Email Templates para EmailJS

Esta carpeta contiene las plantillas HTML de referencia para los emails que se envían desde el formulario de contacto.

## 📁 Archivos

- **`confirmation-template.html`**: Email de confirmación que recibe el usuario
- **`notification-template.html`**: Email de notificación interna con datos del lead

## 🔧 Uso

Estas plantillas son **solo de referencia**. Los templates reales se configuran en EmailJS Dashboard:

1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/) → Email Templates
2. Crea un nuevo template
3. Copia el contenido HTML de estos archivos
4. Personaliza según necesites
5. Guarda el Template ID en tu archivo `.env`

## 🎨 Variables Disponibles

Las siguientes variables se pueden usar en los templates (EmailJS las reemplaza automáticamente):

- `{{user_name}}` - Nombre del usuario
- `{{user_lastname}}` - Apellido del usuario
- `{{user_email}}` - Email del usuario
- `{{user_website}}` - Sitio web (opcional)
- `{{user_budget}}` - Rango de presupuesto seleccionado
- `{{user_message}}` - Mensaje/detonante principal
- `{{to_email}}` - Email destino (usado internamente)

## 📝 Personalización

Puedes modificar estos templates para:

- Cambiar colores y estilos
- Agregar tu logo
- Modificar textos y mensajes
- Agregar enlaces a redes sociales
- Incluir tracking pixels (si usas analytics)

## ⚠️ Importante

- Mantén el HTML inline CSS para compatibilidad con clientes de email
- Prueba los templates en diferentes clientes de email (Gmail, Outlook, etc.)
- Los templates deben ser responsive (mobile-friendly)
- Evita JavaScript (no funciona en emails)
- Usa imágenes hosteadas externamente (no base64)

## 🔗 Recursos

- [EmailJS Template Syntax](https://www.emailjs.com/docs/user-guide/creating-email-template/)
- [Email HTML Best Practices](https://www.campaignmonitor.com/css/)
- [Can I Email](https://www.caniemail.com/) - Compatibilidad CSS en emails
