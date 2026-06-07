const BUSINESSES = [
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
  }
];
