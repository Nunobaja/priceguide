# Checklist interna antes de publicar un negocio real

Completar para cada guía. No publicar mientras quede un punto pendiente.

## 1. Intake completo

- [ ] Intake del cliente completado.
- [ ] El dueño confirmó nombre del negocio, teléfono, WhatsApp, zonas y servicios.
- [ ] Los datos desconocidos están marcados como `[POR CONFIRMAR]`.
- [ ] No se inventaron precios.

## 2. Configuración del negocio

- [ ] Entrada agregada en `businesses.js`.
- [ ] Slugs creados y estables.
- [ ] Cada servicio tiene `id`, rango base, preguntas, opciones y factores.
- [ ] Campos opcionales en inglés agregados solo si fueron confirmados.
- [ ] Metadata agregada o fallbacks seguros aceptados.

## 3. Validación técnica

- [ ] Ejecutar:

  ```sh
  node scripts/publish-preflight.js
  ```

- [ ] El generador y el validador pasan.
- [ ] Los route shells fueron generados.
- [ ] No hay cambios de archivos inesperados.

## 4. Prueba visual rápida

- [ ] Abrir la URL principal del negocio.
- [ ] Probar en ancho móvil si es posible.
- [ ] Confirmar nombre de marca, teléfono, WhatsApp, servicios y zonas.
- [ ] Confirmar que aparece un resultado después de responder.
- [ ] Confirmar que reiniciar funciona.
- [ ] Confirmar que copiar enlace funciona.
- [ ] Confirmar que copiar resumen funciona.

## 5. Prueba de WhatsApp

- [ ] WhatsApp abre con el número correcto del negocio.
- [ ] Servicio, zona, respuestas, rango estimado y fuente aparecen cuando aplica.
- [ ] El mensaje de WhatsApp en inglés funciona si la guía es bilingüe.

## 6. Links de uso

- [ ] Crear links con fuente para:
  - `google-business-profile`
  - `facebook`
  - `instagram`
  - `whatsapp-business`
  - `qr`
- [ ] La fuente permanece en el enlace copiado.
- [ ] La fuente aparece en el mensaje de WhatsApp después de estimar.

## 7. Revisión del dueño

- [ ] El dueño confirma que los precios son rangos estimados.
- [ ] El dueño confirma que el precio final se cotiza por WhatsApp.
- [ ] El dueño confirma las zonas de servicio.
- [ ] El dueño confirma el número de WhatsApp.
- [ ] El dueño aprueba el enlace público.

## 8. Publicación

- [ ] Hacer merge del PR solo después de completar este checklist.
- [ ] Guardar la URL final del negocio.
- [ ] Guardar los links con fuente.
- [ ] Enviar el mensaje final de entrega al dueño.
