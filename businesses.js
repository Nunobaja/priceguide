window.BUSINESSES = [
  {
    citySlug: "los-cabos",
    categorySlug: "plomeros",
    businessSlug: "plomeria-mario",
    name: "Plomería Mario",
    city: "Los Cabos",
    category: "Plomería profesional",
    phone: "6241234567",
    whatsapp: "526241234567",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    zones: [
      { label: "Centro / San José", factor: 1.0 },
      { label: "Cabo San Lucas", factor: 1.0 },
      { label: "Corredor turístico", factor: 1.15 },
      { label: "Afueras", factor: 1.2 }
    ],
    services: [
      {
        id: "fuga",
        name: "Reparación de fuga",
        base: [450, 900],
        questions: [
          { id: "lugar", label: "¿Dónde es la fuga?", options: [
            { label: "Llave o regadera", factor: 1.0 },
            { label: "Tubería visible", factor: 1.2 },
            { label: "Dentro de muro o piso", factor: 1.8 }
          ] },
          { id: "urgencia", label: "¿Qué tan urgente es?", options: [
            { label: "Puede esperar unos días", factor: 1.0 },
            { label: "Esta semana", factor: 1.1 },
            { label: "Hoy / emergencia", factor: 1.4 }
          ] },
          { id: "tipo", label: "¿Es casa o negocio?", options: [
            { label: "Casa", factor: 1.0 },
            { label: "Negocio / edificio", factor: 1.25 }
          ] }
        ]
      },
      {
        id: "calentador",
        name: "Calentador / boiler",
        base: [600, 1400],
        questions: [
          { id: "trabajo", label: "¿Qué necesitas?", options: [
            { label: "Mantenimiento", factor: 1.0 },
            { label: "Reparación", factor: 1.4 },
            { label: "Instalación nueva", factor: 1.9 }
          ] },
          { id: "tipo-equipo", label: "¿Qué tipo de calentador?", options: [
            { label: "De paso", factor: 1.0 },
            { label: "De depósito", factor: 1.15 },
            { label: "Solar", factor: 1.5 }
          ] },
          { id: "urgencia", label: "¿Qué tan urgente?", options: [
            { label: "Esta semana", factor: 1.0 },
            { label: "Hoy / emergencia", factor: 1.35 }
          ] }
        ]
      },
      {
        id: "destape",
        name: "Destape de drenaje",
        base: [400, 850],
        questions: [
          { id: "punto", label: "¿Qué está tapado?", options: [
            { label: "Lavabo / fregadero", factor: 1.0 },
            { label: "Inodoro / WC", factor: 1.2 },
            { label: "Drenaje principal", factor: 1.7 }
          ] },
          { id: "acceso", label: "¿Hay registro accesible?", options: [
            { label: "Sí, fácil acceso", factor: 1.0 },
            { label: "No estoy seguro", factor: 1.15 },
            { label: "No hay registro", factor: 1.4 }
          ] },
          { id: "urgencia", label: "¿Qué tan urgente?", options: [
            { label: "Esta semana", factor: 1.0 },
            { label: "Hoy / emergencia", factor: 1.35 }
          ] }
        ]
      },
      {
        id: "instalacion",
        name: "Instalación (WC, llaves, tarja)",
        base: [500, 1100],
        questions: [
          { id: "pieza", label: "¿Qué vas a instalar?", options: [
            { label: "Llave / mezcladora", factor: 1.0 },
            { label: "WC / inodoro", factor: 1.4 },
            { label: "Tarja / lavabo", factor: 1.3 },
            { label: "Varias piezas", factor: 1.8 }
          ] },
          { id: "material", label: "¿Quién pone el material?", options: [
            { label: "Yo ya lo tengo", factor: 1.0 },
            { label: "Quiero que lo consigan", factor: 1.3 }
          ] }
        ]
      }
    ]
  },
  {
    citySlug: "mazatlan",
    categorySlug: "aire-acondicionado",
    businessSlug: "frio-express",
    name: "Frío Express",
    city: "Mazatlán",
    category: "Aire acondicionado",
    phone: "6691234567",
    whatsapp: "526691234567",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    zones: [
      { label: "Centro / Malecón", factor: 1.0 },
      { label: "Zona Dorada", factor: 1.05 },
      { label: "Marina / Cerritos", factor: 1.1 },
      { label: "Afueras de Mazatlán", factor: 1.2 }
    ],
    services: [
      {
        id: "mantenimiento",
        name: "Mantenimiento de minisplit",
        base: [500, 850],
        questions: [
          { id: "equipos", label: "¿Cuántos equipos son?", options: [
            { label: "1 equipo", factor: 1.0 },
            { label: "2 equipos", factor: 1.75 },
            { label: "3 o más", factor: 2.4 }
          ] },
          { id: "capacidad", label: "¿De qué capacidad?", options: [
            { label: "1 tonelada", factor: 1.0 },
            { label: "1.5 toneladas", factor: 1.1 },
            { label: "2 toneladas o más", factor: 1.25 }
          ] },
          { id: "estado", label: "¿Cuándo fue el último servicio?", options: [
            { label: "Hace menos de un año", factor: 1.0 },
            { label: "Hace más de un año", factor: 1.15 },
            { label: "No lo sé", factor: 1.2 }
          ] }
        ]
      },
      {
        id: "reparacion",
        name: "Reparación de aire acondicionado",
        base: [700, 1600],
        questions: [
          { id: "falla", label: "¿Qué problema presenta?", options: [
            { label: "No enfría bien", factor: 1.0 },
            { label: "Tira agua", factor: 1.1 },
            { label: "No enciende", factor: 1.35 },
            { label: "Hace ruido u olor", factor: 1.2 }
          ] },
          { id: "tipo", label: "¿Qué tipo de equipo es?", options: [
            { label: "Minisplit", factor: 1.0 },
            { label: "Ventana", factor: 0.9 },
            { label: "Central", factor: 1.8 }
          ] },
          { id: "urgencia", label: "¿Qué tan urgente?", options: [
            { label: "En los próximos días", factor: 1.0 },
            { label: "Hoy", factor: 1.3 }
          ] }
        ]
      },
      {
        id: "instalacion",
        name: "Instalación de minisplit",
        base: [1800, 3200],
        questions: [
          { id: "capacidad", label: "¿De qué capacidad es el equipo?", options: [
            { label: "1 tonelada", factor: 1.0 },
            { label: "1.5 toneladas", factor: 1.15 },
            { label: "2 toneladas", factor: 1.3 }
          ] },
          { id: "preparacion", label: "¿El lugar ya tiene preparación?", options: [
            { label: "Sí, instalación directa", factor: 1.0 },
            { label: "No estoy seguro", factor: 1.2 },
            { label: "No, hay que prepararlo", factor: 1.5 }
          ] },
          { id: "altura", label: "¿A qué altura se instalará?", options: [
            { label: "Planta baja", factor: 1.0 },
            { label: "Segundo piso", factor: 1.2 },
            { label: "Tercer piso o azotea", factor: 1.4 }
          ] }
        ]
      }
    ]
  },
  {
    citySlug: "guadalajara",
    categorySlug: "fumigacion",
    businessSlug: "control-total",
    name: "Control Total",
    city: "Guadalajara",
    category: "Fumigación y control de plagas",
    phone: "3312345678",
    whatsapp: "523312345678",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    zones: [
      { label: "Guadalajara", factor: 1.0 },
      { label: "Zapopan", factor: 1.05 },
      { label: "Tlaquepaque / Tonalá", factor: 1.1 },
      { label: "Tlajomulco / afueras", factor: 1.2 }
    ],
    services: [
      {
        id: "cucarachas-hormigas",
        name: "Cucarachas y hormigas",
        base: [550, 950],
        questions: [
          { id: "inmueble", label: "¿Qué tipo de inmueble es?", options: [
            { label: "Departamento", factor: 1.0 },
            { label: "Casa", factor: 1.2 },
            { label: "Negocio", factor: 1.45 }
          ] },
          { id: "nivel", label: "¿Qué tan fuerte es el problema?", options: [
            { label: "Pocos insectos", factor: 1.0 },
            { label: "Aparecen todos los días", factor: 1.25 },
            { label: "Infestación visible", factor: 1.6 }
          ] },
          { id: "areas", label: "¿Cuántas áreas necesitan tratamiento?", options: [
            { label: "1 a 2 áreas", factor: 1.0 },
            { label: "3 a 5 áreas", factor: 1.25 },
            { label: "Todo el inmueble", factor: 1.5 }
          ] }
        ]
      },
      {
        id: "roedores",
        name: "Control de roedores",
        base: [850, 1800],
        questions: [
          { id: "inmueble", label: "¿Dónde está el problema?", options: [
            { label: "Casa / departamento", factor: 1.0 },
            { label: "Restaurante / local", factor: 1.35 },
            { label: "Bodega / nave", factor: 1.7 }
          ] },
          { id: "evidencia", label: "¿Qué evidencia has visto?", options: [
            { label: "Ruidos o rastros", factor: 1.0 },
            { label: "Uno o dos roedores", factor: 1.25 },
            { label: "Actividad frecuente", factor: 1.55 }
          ] },
          { id: "tamano", label: "¿Qué tamaño tiene el lugar?", options: [
            { label: "Hasta 100 m²", factor: 1.0 },
            { label: "101 a 250 m²", factor: 1.35 },
            { label: "Más de 250 m²", factor: 1.7 }
          ] }
        ]
      },
      {
        id: "chinches",
        name: "Tratamiento contra chinches",
        base: [1200, 2400],
        questions: [
          { id: "habitaciones", label: "¿Cuántas habitaciones están afectadas?", options: [
            { label: "1 habitación", factor: 1.0 },
            { label: "2 habitaciones", factor: 1.5 },
            { label: "3 o más", factor: 2.0 }
          ] },
          { id: "nivel", label: "¿Qué tan extendido está el problema?", options: [
            { label: "Recién detectado", factor: 1.0 },
            { label: "Varias semanas", factor: 1.25 },
            { label: "Infestación fuerte", factor: 1.6 }
          ] },
          { id: "seguimiento", label: "¿Necesitas visita de seguimiento?", options: [
            { label: "Solo tratamiento inicial", factor: 1.0 },
            { label: "Tratamiento y seguimiento", factor: 1.35 }
          ] }
        ]
      }
    ]
  },
  {
    citySlug: "cabo-san-lucas",
    categorySlug: "aire-acondicionado",
    businessSlug: "carmona-hnos-climas-refrigeracion",
    name: "Carmona Hnos Climas y Refrigeración",
    city: "Cabo San Lucas, B.C.S.",
    category: "Aire acondicionado y refrigeración",
    phone: "6241152835",
    whatsapp: "526241152835",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    zones: [
      { label: "Cabo San Lucas", factor: 1.0 },
      { label: "Corredor turístico de Los Cabos", factor: 1.15 },
      { label: "Propiedades residenciales", factor: 1.0 },
      { label: "Propiedades de lujo", factor: 1.25 }
    ],
    services: [
      {
        id: "instalacion-climas",
        name: "Instalación de climas",
        // Rango demo editable en MXN; reemplazar con precios confirmados por el negocio.
        base: [2200, 4200],
        questions: [
          { id: "capacidad", label: "¿Qué capacidad tiene el equipo?", options: [
            { label: "1 tonelada", factor: 1.0 },
            { label: "1.5 toneladas", factor: 1.15 },
            { label: "2 toneladas o más", factor: 1.35 }
          ] },
          { id: "preparacion", label: "¿El espacio ya tiene preparación para instalarlo?", options: [
            { label: "Sí, instalación directa", factor: 1.0 },
            { label: "No estoy seguro", factor: 1.2 },
            { label: "No, requiere preparación", factor: 1.5 }
          ] },
          { id: "acceso", label: "¿Dónde se instalará la unidad exterior?", options: [
            { label: "Planta baja y fácil acceso", factor: 1.0 },
            { label: "Segundo piso", factor: 1.2 },
            { label: "Azotea o acceso especial", factor: 1.4 }
          ] }
        ]
      },
      {
        id: "mantenimiento-aire-acondicionado",
        name: "Mantenimiento de aire acondicionado",
        // Rango demo editable en MXN; reemplazar con precios confirmados por el negocio.
        base: [650, 1100],
        questions: [
          { id: "equipos", label: "¿Cuántos equipos necesitan mantenimiento?", options: [
            { label: "1 equipo", factor: 1.0 },
            { label: "2 equipos", factor: 1.75 },
            { label: "3 o más equipos", factor: 2.4 }
          ] },
          { id: "tipo-equipo", label: "¿Qué tipo de aire acondicionado es?", options: [
            { label: "Minisplit", factor: 1.0 },
            { label: "Paquete o cassette", factor: 1.35 },
            { label: "Sistema central", factor: 1.7 }
          ] },
          { id: "estado", label: "¿Cuándo recibió su último mantenimiento?", options: [
            { label: "Hace menos de un año", factor: 1.0 },
            { label: "Hace más de un año", factor: 1.15 },
            { label: "No lo sé o requiere limpieza profunda", factor: 1.3 }
          ] }
        ]
      },
      {
        id: "reparacion-refrigeracion",
        name: "Reparación de refrigeración",
        // Rango demo editable en MXN; reemplazar con precios confirmados por el negocio.
        base: [850, 1900],
        questions: [
          { id: "equipo", label: "¿Qué equipo necesita reparación?", options: [
            { label: "Refrigerador doméstico", factor: 1.0 },
            { label: "Congelador o vitrina", factor: 1.25 },
            { label: "Equipo de refrigeración comercial", factor: 1.6 }
          ] },
          { id: "falla", label: "¿Qué falla presenta?", options: [
            { label: "Enfría poco o de forma irregular", factor: 1.0 },
            { label: "Hace ruido, fuga agua o genera hielo", factor: 1.15 },
            { label: "No enciende o no enfría", factor: 1.4 }
          ] },
          { id: "urgencia", label: "¿Cuándo necesitas el servicio?", options: [
            { label: "En los próximos días", factor: 1.0 },
            { label: "Lo antes posible", factor: 1.15 },
            { label: "Hoy / emergencia", factor: 1.35 }
          ] }
        ]
      }
    ]
  },
  {
    citySlug: "cabo-san-lucas",
    categorySlug: "plomeria",
    businessSlug: "de-la-hoz-plomeria",
    name: "De la Hoz Plomería",
    city: "Cabo San Lucas, B.C.S.",
    category: "Plomería residencial",
    phone: "6241431760",
    // WhatsApp demo sin confirmar; mantener este valor editable hasta validarlo con el negocio.
    whatsapp: "526241431760",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    zones: [
      { label: "Cabo San Lucas", factor: 1.0 },
      { label: "Ampliación Juárez", factor: 1.0 },
      { label: "Colonias aledañas", factor: 1.1 }
    ],
    services: [
      {
        id: "reparacion-fugas",
        name: "Reparación de fugas",
        // Rango demo editable en MXN; reemplazar con precios confirmados por el negocio.
        base: [500, 1100],
        questions: [
          { id: "ubicacion-fuga", label: "¿Dónde se encuentra la fuga?", options: [
            { label: "Llave, lavabo o sanitario", factor: 1.0 },
            { label: "Tubería visible", factor: 1.2 },
            { label: "Dentro de muro o piso", factor: 1.7 }
          ] },
          { id: "intensidad-fuga", label: "¿Qué tan fuerte es la fuga?", options: [
            { label: "Goteo leve", factor: 1.0 },
            { label: "Flujo constante", factor: 1.2 },
            { label: "Fuga abundante o emergencia", factor: 1.45 }
          ] },
          { id: "acceso-fuga", label: "¿La zona de la fuga es de fácil acceso?", options: [
            { label: "Sí, está despejada", factor: 1.0 },
            { label: "No estoy seguro", factor: 1.1 },
            { label: "Requiere retirar acabado o mueble", factor: 1.35 }
          ] }
        ]
      },
      {
        id: "instalacion-reparacion-tuberias",
        name: "Instalación y reparación de tuberías",
        // Rango demo editable en MXN; reemplazar con precios confirmados por el negocio.
        base: [900, 2200],
        questions: [
          { id: "trabajo-tuberia", label: "¿Qué trabajo necesitas en la tubería?", options: [
            { label: "Reparar una sección", factor: 1.0 },
            { label: "Reemplazar una sección", factor: 1.3 },
            { label: "Instalar una línea nueva", factor: 1.6 }
          ] },
          { id: "longitud-tuberia", label: "¿Qué longitud aproximada requiere trabajo?", options: [
            { label: "Hasta 2 metros", factor: 1.0 },
            { label: "De 3 a 5 metros", factor: 1.35 },
            { label: "Más de 5 metros", factor: 1.8 }
          ] },
          { id: "acceso-tuberia", label: "¿Dónde está ubicada la tubería?", options: [
            { label: "Visible y de fácil acceso", factor: 1.0 },
            { label: "Dentro de un mueble o espacio reducido", factor: 1.2 },
            { label: "Dentro de muro, piso o techo", factor: 1.55 }
          ] }
        ]
      },
      {
        id: "plomeria-general",
        name: "Mantenimiento e instalación de plomería en general",
        // Rango demo editable en MXN; reemplazar con precios confirmados por el negocio.
        base: [600, 1500],
        questions: [
          { id: "tipo-servicio-general", label: "¿Qué tipo de servicio necesitas?", options: [
            { label: "Mantenimiento preventivo", factor: 1.0 },
            { label: "Reparación general", factor: 1.25 },
            { label: "Instalación de accesorios o muebles", factor: 1.45 }
          ] },
          { id: "cantidad-puntos", label: "¿Cuántos puntos de plomería requieren atención?", options: [
            { label: "1 punto", factor: 1.0 },
            { label: "2 o 3 puntos", factor: 1.5 },
            { label: "4 o más puntos", factor: 2.0 }
          ] },
          { id: "materiales", label: "¿Ya cuentas con los materiales o accesorios?", options: [
            { label: "Sí, ya los tengo", factor: 1.0 },
            { label: "Tengo algunos", factor: 1.1 },
            { label: "Necesito que los consigan", factor: 1.25 }
          ] }
        ]
      }
    ]
  },
  {
    citySlug: "puerto-vallarta",
    categorySlug: "electricista",
    businessSlug: "instal-pv",
    name: "Instal PV",
    city: "Puerto Vallarta, Jal.",
    category: "Electricista",
    categoryLabel: "Servicio eléctrico y plomería",
    phone: "3221752229",
    // Mismo número que el teléfono por ahora. WhatsApp sin confirmar y editable aquí.
    whatsapp: "523221752229",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    // Rangos base, factores y add-ons son valores demo configurables en este archivo.
    // Confirmar precios, cobertura y ajustes con el negocio antes de publicarlos como definitivos.
    zones: [
      { label: "Puerto Vallarta", factor: 1.0 },
      { label: "Díaz Ordaz", factor: 1.05 },
      { label: "Zona urbana de Puerto Vallarta", factor: 1.1 }
    ],
    services: [
      {
        id: "diagnostico-reparacion-fallas",
        name: "Diagnóstico y reparación de fallas eléctricas",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [450, 950],
        questions: [
          { id: "tipo-falla", label: "¿Qué falla eléctrica presenta?", options: [
            { label: "Contacto, apagador o lámpara", factor: 1.0 },
            { label: "Circuito sin energía o apagones", factor: 1.3 },
            { label: "Corto, olor a quemado o calentamiento", factor: 1.55 }
          ] },
          { id: "alcance-diagnostico", label: "¿Cuántos puntos requieren revisión?", options: [
            { label: "1 punto", factor: 1.0 },
            { label: "2 o 3 puntos", factor: 1.35 },
            { label: "4 o más puntos", factor: 1.75 }
          ] },
          { id: "urgencia-diagnostico", label: "¿Cuándo necesitas la visita?", options: [
            { label: "En los próximos días", factor: 1.0 },
            { label: "Lo antes posible", factor: 1.15 },
            { label: "Hoy / emergencia", factor: 1.35, add: 150 }
          ] }
        ]
      },
      {
        id: "instalaciones-electricas",
        name: "Instalaciones eléctricas",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [550, 1200],
        questions: [
          { id: "elemento-instalar", label: "¿Qué necesitas instalar?", options: [
            { label: "Contacto, apagador o lámpara", factor: 1.0 },
            { label: "Ventilador, bomba o equipo dedicado", factor: 1.35 },
            { label: "Centro de carga o circuito nuevo", factor: 1.7 }
          ] },
          { id: "cantidad-instalacion", label: "¿Cuántos puntos o equipos son?", options: [
            { label: "1", factor: 1.0 },
            { label: "2 o 3", factor: 1.5 },
            { label: "4 o más", factor: 2.1 }
          ] },
          { id: "preparacion-instalacion", label: "¿Ya existe cableado y preparación?", options: [
            { label: "Sí, solo es conexión o reemplazo", factor: 1.0 },
            { label: "Existe parcialmente", factor: 1.25 },
            { label: "Se requiere cableado nuevo", factor: 1.55, add: 200 }
          ] }
        ]
      },
      {
        id: "proyectos-residenciales",
        name: "Proyectos eléctricos residenciales",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [1800, 4200],
        questions: [
          { id: "tipo-proyecto", label: "¿Qué tipo de proyecto residencial es?", options: [
            { label: "Ampliación o remodelación pequeña", factor: 1.0 },
            { label: "Remodelación de varias áreas", factor: 1.5 },
            { label: "Instalación eléctrica integral", factor: 2.2 }
          ] },
          { id: "tamano-proyecto", label: "¿Qué tamaño aproximado tiene el área?", options: [
            { label: "Hasta 50 m²", factor: 1.0 },
            { label: "De 51 a 120 m²", factor: 1.45 },
            { label: "Más de 120 m²", factor: 1.9 }
          ] },
          { id: "estado-proyecto", label: "¿En qué etapa está el proyecto?", options: [
            { label: "Planeación y levantamiento", factor: 1.0 },
            { label: "Obra en proceso", factor: 1.15 },
            { label: "Se requiere corregir una instalación existente", factor: 1.35, add: 350 }
          ] }
        ]
      }
    ]
  },
  {
    citySlug: "puerto-vallarta",
    categorySlug: "electricista",
    businessSlug: "servicios-profesionales-electricidad-plomeria-martinez",
    name: "Servicios Profesionales de Electricidad y Plomería Martínez",
    city: "Puerto Vallarta, Jal.",
    category: "Electricista",
    categoryLabel: "Electricidad y plomería",
    phone: "3221830299",
    // Mismo número que el teléfono por ahora. WhatsApp sin confirmar y editable aquí.
    whatsapp: "523221830299",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    // Rangos base, factores y add-ons son valores demo configurables en este archivo.
    // Confirmar precios, cobertura y ajustes con el negocio antes de publicarlos como definitivos.
    zones: [
      { label: "Puerto Vallarta", factor: 1.0 },
      { label: "Campestre Las Palmas", factor: 1.1 },
      { label: "Zona sur de Puerto Vallarta", factor: 1.15 },
      { label: "Zona urbana de Puerto Vallarta", factor: 1.05 }
    ],
    services: [
      {
        id: "instalacion-electrica",
        name: "Instalación eléctrica",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [550, 1250],
        questions: [
          { id: "trabajo-electrico", label: "¿Qué trabajo eléctrico necesitas?", options: [
            { label: "Instalar o reemplazar un punto", factor: 1.0 },
            { label: "Agregar un circuito", factor: 1.45 },
            { label: "Actualizar centro de carga o instalación", factor: 1.85 }
          ] },
          { id: "puntos-electricos", label: "¿Cuántos puntos eléctricos son?", options: [
            { label: "1 punto", factor: 1.0 },
            { label: "2 o 3 puntos", factor: 1.5 },
            { label: "4 o más puntos", factor: 2.1 }
          ] },
          { id: "acceso-electrico", label: "¿Cómo es el acceso al cableado?", options: [
            { label: "Visible o con preparación existente", factor: 1.0 },
            { label: "Por plafón o canalización existente", factor: 1.2 },
            { label: "Requiere nueva canalización", factor: 1.5, add: 200 }
          ] }
        ]
      },
      {
        id: "calentadores-bombas",
        name: "Instalación de calentadores y bombas de agua",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [850, 1900],
        questions: [
          { id: "equipo-agua", label: "¿Qué equipo necesitas instalar?", options: [
            { label: "Calentador", factor: 1.0 },
            { label: "Bomba de agua", factor: 1.2 },
            { label: "Calentador y bomba", factor: 1.75 }
          ] },
          { id: "tipo-instalacion-agua", label: "¿Es reemplazo o instalación nueva?", options: [
            { label: "Reemplazo con conexiones listas", factor: 1.0 },
            { label: "Reemplazo con ajustes de conexiones", factor: 1.25 },
            { label: "Instalación nueva", factor: 1.55, add: 250 }
          ] },
          { id: "ubicacion-equipo", label: "¿Dónde se instalará el equipo?", options: [
            { label: "Planta baja y fácil acceso", factor: 1.0 },
            { label: "Azotea o espacio reducido", factor: 1.2 },
            { label: "Acceso complicado o altura", factor: 1.4 }
          ] }
        ]
      },
      {
        id: "plomeria-reparacion-instalacion",
        name: "Reparación e instalación de plomería",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [500, 1100],
        questions: [
          { id: "trabajo-plomeria", label: "¿Qué servicio de plomería necesitas?", options: [
            { label: "Reparar fuga o conexión", factor: 1.0 },
            { label: "Instalar llave, lavabo o sanitario", factor: 1.35 },
            { label: "Instalar o reemplazar tubería", factor: 1.65 }
          ] },
          { id: "cantidad-plomeria", label: "¿Cuántos puntos requieren trabajo?", options: [
            { label: "1 punto", factor: 1.0 },
            { label: "2 o 3 puntos", factor: 1.5 },
            { label: "4 o más puntos", factor: 2.0 }
          ] },
          { id: "acceso-plomeria", label: "¿La tubería es accesible?", options: [
            { label: "Sí, está visible", factor: 1.0 },
            { label: "Está dentro de mueble o espacio reducido", factor: 1.2 },
            { label: "Está dentro de muro o piso", factor: 1.55, add: 200 }
          ] }
        ]
      }
    ]
  },
  {
    citySlug: "puerto-vallarta",
    categorySlug: "electricista",
    businessSlug: "solara-proyectos-electricos-paneles-solares",
    name: "Solara Proyectos Eléctricos y Paneles Solares",
    city: "Puerto Vallarta, Jal.",
    category: "Electricista",
    categoryLabel: "Instalaciones eléctricas y paneles solares",
    phone: "3221818350",
    // Mismo número que el teléfono por ahora. WhatsApp sin confirmar y editable aquí.
    whatsapp: "523221818350",
    currency: "MXN",
    currencyLabel: "pesos mexicanos",
    // Rangos base, factores y add-ons son valores demo configurables en este archivo.
    // Confirmar precios, cobertura y ajustes con el negocio antes de publicarlos como definitivos.
    zones: [
      { label: "Puerto Vallarta", factor: 1.0 },
      { label: "Brisas del Pacífico", factor: 1.05 },
      { label: "Zona urbana de Puerto Vallarta", factor: 1.1 }
    ],
    services: [
      {
        id: "proyectos-instalaciones-electricas",
        name: "Proyectos e instalaciones eléctricas",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [1200, 3000],
        questions: [
          { id: "alcance-proyecto-electrico", label: "¿Qué alcance tiene el trabajo eléctrico?", options: [
            { label: "Agregar o renovar algunos puntos", factor: 1.0 },
            { label: "Instalación de una zona completa", factor: 1.55 },
            { label: "Proyecto eléctrico integral", factor: 2.25 }
          ] },
          { id: "tipo-inmueble", label: "¿En qué tipo de inmueble se realizará?", options: [
            { label: "Casa o departamento pequeño", factor: 1.0 },
            { label: "Casa grande o condominio", factor: 1.35 },
            { label: "Local o edificio", factor: 1.65 }
          ] },
          { id: "estado-instalacion", label: "¿Cuál es el estado de la instalación actual?", options: [
            { label: "Nueva o con preparación lista", factor: 1.0 },
            { label: "Requiere adecuaciones", factor: 1.25 },
            { label: "Requiere diagnóstico y correcciones", factor: 1.5, add: 300 }
          ] }
        ]
      },
      {
        id: "paneles-solares",
        name: "Instalación de paneles solares",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [3500, 7500],
        questions: [
          { id: "etapa-solar", label: "¿Qué necesitas para tu proyecto solar?", options: [
            { label: "Visita técnica y propuesta", factor: 1.0 },
            { label: "Ampliar un sistema existente", factor: 1.45 },
            { label: "Instalación de sistema nuevo", factor: 2.2 }
          ] },
          { id: "consumo-solar", label: "¿Cómo describirías tu consumo eléctrico?", options: [
            { label: "Bajo: casa pequeña", factor: 1.0 },
            { label: "Medio: casa con varios equipos", factor: 1.4 },
            { label: "Alto: casa grande o negocio", factor: 1.9 }
          ] },
          { id: "tipo-techo", label: "¿Cómo es el área de instalación?", options: [
            { label: "Techo plano con acceso sencillo", factor: 1.0 },
            { label: "Techo inclinado o espacio limitado", factor: 1.2 },
            { label: "Requiere estructura o acceso especial", factor: 1.45, add: 500 }
          ] }
        ]
      },
      {
        id: "mantenimiento-reparacion-electrica",
        name: "Mantenimiento y reparación eléctrica",
        // Rango demo editable en MXN; no es un precio final aprobado por el negocio.
        base: [500, 1100],
        questions: [
          { id: "servicio-mantenimiento", label: "¿Qué tipo de atención necesitas?", options: [
            { label: "Mantenimiento preventivo", factor: 1.0 },
            { label: "Diagnóstico y reparación", factor: 1.3 },
            { label: "Falla intermitente o corto", factor: 1.55 }
          ] },
          { id: "puntos-mantenimiento", label: "¿Cuántos circuitos o puntos requieren revisión?", options: [
            { label: "1 punto o circuito", factor: 1.0 },
            { label: "2 o 3", factor: 1.4 },
            { label: "4 o más", factor: 1.85 }
          ] },
          { id: "urgencia-mantenimiento", label: "¿Cuándo necesitas el servicio?", options: [
            { label: "En los próximos días", factor: 1.0 },
            { label: "Lo antes posible", factor: 1.15 },
            { label: "Hoy / emergencia", factor: 1.35, add: 150 }
          ] }
        ]
      }
    ]
  }
];
