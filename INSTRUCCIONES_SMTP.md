# Instrucciones para Configurar el Formulario de Contacto

## Problema Resuelto
El error original se debía a que PHP intentaba usar la función `mail()` con un servidor SMTP local que no estaba configurado. Se han implementado múltiples soluciones para diferentes casos de uso.

## Soluciones Disponibles

### Solución 1: Configuración SMTP Simple (contact.php)
Usa la función `mail()` nativa de PHP con configuración SMTP.

### Solución 2: Servicio Externo (contact_alternative.php)
Usa servicios como EmailJS para enviar emails sin configuración SMTP local.

## Pasos para Configurar

### Opción A: Configuración SMTP Simple

1. Edita el archivo `config.php` y cambia los siguientes valores:

```php
define('SMTP_USERNAME', 'tu-email@gmail.com'); // Tu email de Gmail
define('SMTP_PASSWORD', 'tu-contraseña-de-aplicacion'); // Tu contraseña de aplicación
```

2. Configura tu servidor web para usar SMTP externo en php.ini:
```ini
SMTP = smtp.gmail.com
smtp_port = 587
sendmail_from = tu-email@gmail.com
```

### Opción B: Usar Servicio Externo (Recomendado)

1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea un template de email
4. Edita `contact_alternative.php` con tus credenciales:
```php
'service_id' => 'tu_service_id',
'template_id' => 'tu_template_id', 
'user_id' => 'tu_user_id',
```

### 2. Configurar Gmail para Aplicaciones Menos Seguras

Para usar Gmail como servidor SMTP:

1. Ve a tu cuenta de Google
2. Activa la verificación en 2 pasos
3. Genera una "Contraseña de aplicación" específica para esta aplicación
4. Usa esa contraseña en lugar de tu contraseña normal

### 3. Alternativas de Proveedores SMTP

Si prefieres usar otro proveedor, modifica `config.php`:

#### Para Outlook/Hotmail:
```php
define('SMTP_HOST', 'smtp-mail.outlook.com');
define('SMTP_PORT', 587);
```

#### Para Yahoo:
```php
define('SMTP_HOST', 'smtp.mail.yahoo.com');
define('SMTP_PORT', 587);
```

### 4. Verificar la Configuración

Una vez configurado:
1. Verifica que las credenciales en `config.php` sean correctas
2. Prueba el formulario de contacto

## Archivos Modificados

- `contact.php` - Actualizado para usar función SMTP personalizada
- `config.php` - Archivo de configuración SMTP
- `INSTRUCCIONES_SMTP.md` - Este archivo de instrucciones

## Ventajas de esta Solución

- ✅ No requiere librerías externas
- ✅ Usa solo funciones nativas de PHP
- ✅ Configuración simple
- ✅ Soporte para TLS/SSL
- ✅ Compatible con Gmail, Outlook, Yahoo, etc.

## Notas de Seguridad

- Nunca subas `config.php` a un repositorio público
- Usa contraseñas de aplicación en lugar de contraseñas normales
- Considera usar variables de entorno para las credenciales en producción

## Solución de Problemas

Si sigues teniendo problemas:

1. Confirma que las credenciales SMTP sean correctas
2. Revisa que el puerto 587 esté abierto en tu servidor
3. Verifica que tu proveedor de email permita conexiones SMTP
4. Consulta los logs de error de PHP para más detalles
