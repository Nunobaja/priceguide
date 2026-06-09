# Registro de validación móvil de legibilidad del resultado — 2026-06-09

> **QA interno únicamente.** Este registro documenta el gate previo a Task #71. No inicia ni autoriza cambios de interfaz. Task #71 solo puede abrirse si una corrida en navegador registra fricción concreta y reproducible en la presentación móvil del resultado.

## Objetivo y alcance

Validar la legibilidad del resultado del estimador en los anchos obligatorios `360px`, `390px` y `430px` antes de decidir si existe evidencia suficiente para iniciar Task #71.

El alcance previsto era completar un estimado en páginas individuales representativas y observar en cada ancho:

- jerarquía y lectura completa del rango aproximado;
- wrapping del rango, moneda, nota y resumen;
- ausencia de overflow horizontal, superposición y crowding;
- separación y comprensión de las acciones posteriores al resultado;
- conservación explícita del carácter aproximado y no definitivo del precio.

No se autorizaron cambios de código, estilos, fórmulas, precios, datos, rutas ni contacto durante esta validación.

## Metadata

- **Fecha:** 2026-06-09
- **Tester:** Codex
- **Branch / commit base:** `work` / `5368eb0`
- **URL base prevista:** servidor local de `/workspace/priceguide`
- **Sistema operativo:** contenedor Linux, zona horaria UTC
- **Viewports previstos:** `360 × 800`, `390 × 844`, `430 × 932`
- **Runbook:** [Corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md), especialmente secciones 2, 4.D, 8 y 9

## Ejecución y bloqueo del entorno

Se verificó primero la disponibilidad de un navegador y de automatización local. El contenedor no incluía Chromium, Chrome, Firefox, Playwright, Puppeteer, Selenium ni otro navegador utilizable.

Se intentaron dos vías para habilitar una corrida real o emulada:

1. Instalar Playwright en un directorio temporal y descargar Chrome for Testing.
2. Actualizar los índices de paquetes e instalar `webkit2gtk-driver` como alternativa de navegador WebKit.

Ambas vías fueron bloqueadas por la política de red del entorno con respuestas HTTP `403 Forbidden`. No se abrió ninguna página en navegador y no se ejecutó interacción visual/táctil. Conforme al runbook, una revisión de código o un script sin navegador no puede marcar estos viewports como ejecutados ni como `PASS`.

## Registro por fixture y viewport

`PARTIAL` significa aquí exclusivamente que la comprobación quedó bloqueada por el entorno. No representa una fricción de producto observada.

| Fixture / página | Viewport | Área | Estado | Evidencia observada | ¿PR de polish #71? |
|---|---:|---|---|---|---|
| Carmona Hnos Climas y Refrigeración | `360 × 800` | `result/readability` | PARTIAL | Navegador no disponible; resultado no observado. | No |
| Carmona Hnos Climas y Refrigeración | `390 × 844` | `result/readability` | PARTIAL | Navegador no disponible; resultado no observado. | No |
| Carmona Hnos Climas y Refrigeración | `430 × 932` | `result/readability` | PARTIAL | Navegador no disponible; resultado no observado. | No |
| Fixture interno de control preventivo | `360 × 800` | `result/readability` | PARTIAL | Navegador no disponible; resultado y wrapping no observados. | No |
| Fixture interno de control preventivo | `390 × 844` | `result/readability` | PARTIAL | Navegador no disponible; resultado y wrapping no observados. | No |
| Fixture interno de control preventivo | `430 × 932` | `result/readability` | PARTIAL | Navegador no disponible; resultado y wrapping no observados. | No |
| Fixture interno QA sin contacto | `360 × 800` | `result/readability` | PARTIAL | Navegador no disponible; resultado y acciones seguras no observados. | No |
| Fixture interno QA sin contacto | `390 × 844` | `result/readability` | PARTIAL | Navegador no disponible; resultado y acciones seguras no observados. | No |
| Fixture interno QA sin contacto | `430 × 932` | `result/readability` | PARTIAL | Navegador no disponible; resultado y acciones seguras no observados. | No |
| Plomería Mario | `360 × 800` | `result/readability` | PARTIAL | Navegador no disponible; resultado multi-servicio no observado. | No |
| Plomería Mario | `390 × 844` | `result/readability` | PARTIAL | Navegador no disponible; resultado multi-servicio no observado. | No |
| Plomería Mario | `430 × 932` | `result/readability` | PARTIAL | Navegador no disponible; resultado multi-servicio no observado. | No |

## Resultado del gate para Task #71

**Decisión: no iniciar Task #71.**

Esta corrida no produjo evidencia de fricción concreta en resultados móviles porque el entorno impidió observar el producto en navegador. Tampoco produjo evidencia suficiente para declarar que la legibilidad móvil pasa. El estado correcto del gate es **pendiente de repetición**, no `PASS` ni `FAIL`.

Task #71 solo podrá abrirse después de repetir esta validación en un navegador real o emulado y registrar, como mínimo:

1. fixture y URL exactos;
2. viewport exacto;
3. selecciones necesarias para reproducir el resultado;
4. comportamiento esperado y observado;
5. evidencia concreta de overflow, wrapping defectuoso, crowding, superposición o jerarquía insuficiente;
6. severidad y alcance mínimo del posible ajuste.

Si la repetición no muestra fricción reproducible, Task #71 debe cerrarse como **no necesaria** sin cambios de producto.

## Comprobaciones auxiliares

Las comprobaciones automatizadas del repositorio se ejecutan para confirmar que el commit base sigue íntegro, pero no sustituyen la validación visual móvil y no cambian el estado `PARTIAL` de las filas anteriores.
