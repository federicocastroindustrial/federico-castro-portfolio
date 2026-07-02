export type Locale = "es" | "en";

export type CaseStudySection = {
  label: { es: string; en: string };
  text: { es: string; en: string };
};

export type Project = {
  slug: string;
  tier: "flagship" | "exploration";
  category: "producto" | "mobiliario" | "branding";
  year: string;
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  cover: string;
  gallery: { src: string; caption?: { es: string; en: string } }[];
  tags: { es: string[]; en: string[] };
  sections: CaseStudySection[];
  tools: string[];
  video?: { src: string; poster: string };
  behanceUrl: string;
};

export const projects: Project[] = [
  {
    slug: "monopatin-retro",
    tier: "flagship",
    category: "producto",
    year: "2025",
    title: { es: "Monopatín plegable de línea retro", en: "Retro-line foldable scooter" },
    subtitle: {
      es: "Reinterpretar una estética de los 80 con lógica constructiva actual",
      en: "Reinterpreting an 80s aesthetic with present-day construction logic",
    },
    cover: "/images/projects/monopatin-retro/hero.jpg",
    gallery: [
      { src: "/images/projects/monopatin-retro/hero.jpg" },
      {
        src: "/images/projects/monopatin-retro/proceso-explosion.jpg",
        caption: { es: "Despiece de componentes", en: "Component breakdown" },
      },
      {
        src: "/images/projects/monopatin-retro/proceso-bocetos.jpg",
        caption: { es: "Estudio de mecanismos de plegado", en: "Folding mechanism study" },
      },
    ],
    tags: {
      es: ["Diseño industrial", "Fabricación metálica", "Movilidad urbana"],
      en: ["Industrial design", "Metal fabrication", "Urban mobility"],
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        text: {
          es: "Traducir una estética retro-futurista a un objeto que tuviera que resolver, de verdad, rigidez estructural y plegado en dos pasos — no quedarse en el render.",
          en: "Translate a retro-futurist aesthetic into an object that actually had to solve structural rigidity and two-step folding — not stop at the render.",
        },
      },
      {
        label: { es: "Proceso", en: "Process" },
        text: {
          es: "Bocetos de mecanismo de bisagra y rueda plegable, iterados hasta encontrar un sistema de cierre por émbolo que no comprometiera la resistencia del chasis.",
          en: "Hinge and folding-wheel mechanism sketches, iterated until finding a plunger-latch system that didn't compromise chassis strength.",
        },
      },
      {
        label: { es: "Decisiones", en: "Key decisions" },
        text: {
          es: "Chasis en chapa de acero SAE 1010 optimizado para corte láser y soldadura MIG, con estructura de costillas internas para reducir peso sin perder rigidez.",
          en: "SAE 1010 sheet steel chassis optimized for laser cutting and MIG welding, with internal rib structure to cut weight without losing rigidity.",
        },
      },
      {
        label: { es: "Resultado", en: "Result" },
        text: {
          es: "Prototipo funcional a escala real que valida ergonomía, resistencia mecánica y coherencia entre estética e ingeniería.",
          en: "Full-scale functional prototype validating ergonomics, mechanical resistance and coherence between aesthetics and engineering.",
        },
      },
    ],
    tools: ["Rhinoceros", "KeyShot", "Blender", "Illustrator", "Corte láser", "Soldadura MIG"],
    video: { src: "/videos/monopatin-retro/render.mp4", poster: "/videos/monopatin-retro/render-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/243960603/Prototipo-Monopatin-Plegable",
  },
  {
    slug: "mini-cargo-bike",
    tier: "flagship",
    category: "producto",
    year: "2025",
    title: { es: "Bicicleta mini cargo para Buenos Aires", en: "Mini cargo bike for Buenos Aires" },
    subtitle: {
      es: "Movilidad de carga urbana con identidad de marca propia",
      en: "Urban cargo mobility with its own brand identity",
    },
    cover: "/images/projects/mini-cargo-bike/hero.jpg",
    gallery: [{ src: "/images/projects/mini-cargo-bike/hero.jpg" }],
    tags: {
      es: ["Diseño industrial", "Movilidad urbana", "Identidad de marca"],
      en: ["Industrial design", "Urban mobility", "Brand identity"],
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        text: {
          es: "Las cargo bikes existentes en el mercado local no tenían un lenguaje formal propio: eran variaciones directas de modelos europeos sin adaptación al contexto.",
          en: "Existing cargo bikes in the local market had no formal language of their own: they were direct variations of European models with no local adaptation.",
        },
      },
      {
        label: { es: "Proceso", en: "Process" },
        text: {
          es: "Definición de una marca (Bairex) y un sistema de carga configurable —delantero y trasero— pensado para el tránsito denso de una ciudad como Buenos Aires.",
          en: "Definition of a brand (Bairex) and a configurable loading system —front and rear— designed for dense traffic in a city like Buenos Aires.",
        },
      },
      {
        label: { es: "Decisiones", en: "Key decisions" },
        text: {
          es: "Estructura compacta que prioriza maniobrabilidad sobre capacidad máxima de carga, con un lenguaje formal consistente entre chasis, batería y sistema de carga.",
          en: "Compact structure that prioritizes maneuverability over maximum load capacity, with a formal language consistent across frame, battery and cargo system.",
        },
      },
      {
        label: { es: "Resultado", en: "Result" },
        text: {
          es: "Un producto con identidad diferenciada frente a las alternativas existentes, pensado para el contexto local en lugar de importarlo.",
          en: "A product with a differentiated identity from existing alternatives, designed for the local context instead of importing it.",
        },
      },
    ],
    tools: ["Rhinoceros 7", "KeyShot", "Illustrator", "Photoshop", "After Effects"],
    video: { src: "/videos/mini-cargo-bike/catedra.mp4", poster: "/videos/mini-cargo-bike/catedra-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/239626957/Bicileta-mini-cargo-Para-la-ciudad-de-Buenos-Aires",
  },
  {
    slug: "dirona",
    tier: "flagship",
    category: "producto",
    year: "2026",
    title: { es: "Dirona — humidificador aromatizador", en: "Dirona — humidifier diffuser" },
    subtitle: {
      es: "Explorar forma con IA antes de comprometer horas de modelado",
      en: "Exploring form with AI before committing hours to modeling",
    },
    cover: "/images/projects/dirona/producto-blanco.jpg",
    gallery: [{ src: "/images/projects/dirona/producto-blanco.jpg" }],
    tags: {
      es: ["Diseño industrial", "IA aplicada al diseño", "Impresión 3D"],
      en: ["Industrial design", "AI-assisted design", "3D printing"],
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        text: {
          es: "Explorar variantes morfológicas de un humidificador sin invertir horas de modelado 3D en cada dirección que probablemente se iba a descartar.",
          en: "Explore morphological variants of a humidifier without spending hours of 3D modeling on each direction that would likely be discarded.",
        },
      },
      {
        label: { es: "Proceso", en: "Process" },
        text: {
          es: "Bocetos iniciales → exploración morfológica asistida por IA (ChatGPT, Leonardo.ai, Vizcom) para multiplicar direcciones formales → selección de la propuesta con mejor coherencia estética y técnica.",
          en: "Initial sketches → AI-assisted morphological exploration (ChatGPT, Leonardo.ai, Vizcom) to multiply formal directions → selection of the proposal with the best aesthetic and technical coherence.",
        },
      },
      {
        label: { es: "Decisiones", en: "Key decisions" },
        text: {
          es: "La IA acelera la etapa de divergencia formal; el criterio de selección y el refinamiento dimensional siguen siendo trabajo manual en Rhino, no delegado.",
          en: "AI accelerates the formal-divergence stage; selection criteria and dimensional refinement remain manual work in Rhino, not delegated.",
        },
      },
      {
        label: { es: "Resultado", en: "Result" },
        text: {
          es: "Prototipo impreso en 3D que valida proporción, ergonomía y coherencia formal de la propuesta final.",
          en: "3D-printed prototype validating proportion, ergonomics and formal coherence of the final proposal.",
        },
      },
    ],
    tools: ["ChatGPT", "Leonardo.ai", "Vizcom", "Rhinoceros", "PrusaSlicer", "Photoshop"],
    video: { src: "/videos/dirona/proceso.mp4", poster: "/videos/dirona/proceso-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/244452109/Dirona-humidificador-aromatizador",
  },
  {
    slug: "sistema-luminico",
    tier: "flagship",
    category: "producto",
    year: "2025",
    title: { es: "Sistema lumínico — familia de producto", en: "Lighting system — product family" },
    subtitle: {
      es: "Traducir una identidad de marca ya existente a un sistema formal",
      en: "Translating an existing brand identity into a formal system",
    },
    cover: "/images/projects/sistema-luminico/hero-montelumbre.jpg",
    gallery: [
      {
        src: "/images/projects/sistema-luminico/hero-montelumbre.jpg",
        caption: { es: "Montelumbre — lámpara de velador", en: "Montelumbre — bedside lamp" },
      },
      {
        src: "/images/projects/sistema-luminico/plano-pie.jpg",
        caption: { es: "Lámpara de pie — Estancia", en: "Floor lamp — Estancia" },
      },
      {
        src: "/images/projects/sistema-luminico/plano-velador.jpg",
        caption: { es: "Velador", en: "Bedside lamp" },
      },
      {
        src: "/images/projects/sistema-luminico/plano-spot.jpg",
        caption: { es: "Spot", en: "Spot light" },
      },
    ],
    tags: {
      es: ["Diseño industrial", "Sistema de producto", "Iluminación", "Estrategia de marca"],
      en: ["Industrial design", "Product family", "Lighting", "Brand strategy"],
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        text: {
          es: "Diseñar una familia de luminarias que expresara una identidad de marca ya existente (análisis de la identidad del diseñador argentino Eugenio Aguirre), no un objeto aislado.",
          en: "Design a lighting family expressing an already-existing brand identity (analysis of Argentine designer Eugenio Aguirre's identity), not an isolated object.",
        },
      },
      {
        label: { es: "Proceso", en: "Process" },
        text: {
          es: "Investigación de identidad formal y material de marca, traducida a un lenguaje geométrico compartido entre tres tipologías: pie, velador y spot.",
          en: "Research into the brand's formal and material identity, translated into a shared geometric language across three typologies: floor, bedside and spot.",
        },
      },
      {
        label: { es: "Decisiones", en: "Key decisions" },
        text: {
          es: "Posicionamiento en segmento de lujo: se prioriza fuerza morfológica y calidad de materiales por sobre la simplificación productiva.",
          en: "Positioned in the luxury segment: morphological strength and material quality are prioritized over manufacturing simplification.",
        },
      },
      {
        label: { es: "Resultado", en: "Result" },
        text: {
          es: "Colección con lenguaje coherente entre piezas, documentada en planos técnicos listos para producción.",
          en: "Collection with a coherent language across pieces, documented in production-ready technical drawings.",
        },
      },
    ],
    tools: ["Rhinoceros", "Twinmotion", "KeyShot", "Illustrator", "Photoshop"],
    video: { src: "/videos/sistema-luminico/presentacion.mp4", poster: "/videos/sistema-luminico/presentacion-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/243985981/Sistema-Luminico-Desarrollo-de-Familia-de-Producto",
  },
  {
    slug: "tetera-ceramica",
    tier: "flagship",
    category: "producto",
    year: "2026",
    title: { es: "Tetera de cerámica", en: "Ceramic teapot" },
    subtitle: {
      es: "Síntesis formal minimalista en un proceso artesanal",
      en: "Minimalist formal synthesis within a craft process",
    },
    cover: "/images/projects/tetera-ceramica/hero.jpg",
    gallery: [
      { src: "/images/projects/tetera-ceramica/hero.jpg" },
      {
        src: "/images/projects/tetera-ceramica/proceso-boceto.jpg",
        caption: { es: "Estudio de forma sobre el objeto terminado", en: "Form study over the finished object" },
      },
    ],
    tags: {
      es: ["Diseño industrial", "Cerámica", "Colada de barbotina", "Minimalismo"],
      en: ["Industrial design", "Ceramics", "Slip casting", "Minimalism"],
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        text: {
          es: "Diseñar una pieza de cerámica funcional cuya síntesis formal dialogara con referencias compositivas de Kandinsky, reinterpretadas en tres dimensiones.",
          en: "Design a functional ceramic piece whose formal synthesis would dialogue with Kandinsky's compositional references, reinterpreted in three dimensions.",
        },
      },
      {
        label: { es: "Proceso", en: "Process" },
        text: {
          es: "Exploración material del comportamiento de la barbotina líquida: espesores de pared, tiempos de secado y contracción, hasta resolver las uniones funcionales de pico, asa y tapa.",
          en: "Material exploration of liquid slip behavior: wall thickness, drying time and shrinkage, until resolving the functional joints of spout, handle and lid.",
        },
      },
      {
        label: { es: "Decisiones", en: "Key decisions" },
        text: {
          es: "Cocción a 1100°C y esmalte cocido a 480°C para asegurar resistencia a la humedad y al uso diario, sin perder la pureza volumétrica buscada.",
          en: "Fired at 1100°C with a glaze fired at 480°C to ensure resistance to humidity and daily use, without losing the intended volumetric purity.",
        },
      },
      {
        label: { es: "Resultado", en: "Result" },
        text: {
          es: "Pieza funcional de 1.5L, resistente a más de 100°C, con identidad estética propia y validada en producción real.",
          en: "Functional 1.5L piece, resistant to over 100°C, with its own aesthetic identity and validated in real production.",
        },
      },
    ],
    tools: ["Colada de barbotina", "Modelado 3D", "Horno cerámico", "Esmaltado a mano"],
    video: { src: "/videos/tetera-ceramica/escena.mp4", poster: "/videos/tetera-ceramica/escena-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/244458817/Prototipo-de-Tetera-en-Ceramica",
  },
  {
    slug: "recibidor",
    tier: "flagship",
    category: "mobiliario",
    year: "2025",
    title: { es: "Recibidor para pasillos estrechos", en: "Entryway console for narrow hallways" },
    subtitle: {
      es: "Síntesis funcional en un espacio de circulación reducido",
      en: "Functional synthesis in a reduced circulation space",
    },
    cover: "/images/projects/recibidor/real-01.jpg",
    gallery: [
      { src: "/images/projects/recibidor/real-01.jpg" },
      { src: "/images/projects/recibidor/real-02.jpg" },
      { src: "/images/projects/recibidor/real-03.jpg" },
    ],
    tags: {
      es: ["Mobiliario", "Diseño industrial", "Carpintería", "Optimización espacial"],
      en: ["Furniture", "Industrial design", "Woodworking", "Spatial optimization"],
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        text: {
          es: "Resolver una pieza de recibidor funcional en viviendas contemporáneas donde el pasillo de entrada no tiene margen para mobiliario convencional.",
          en: "Solve a functional entryway piece for contemporary homes where the entrance hallway has no room for conventional furniture.",
        },
      },
      {
        label: { es: "Proceso", en: "Process" },
        text: {
          es: "Prototipo a escala real en melamina, varillas de pino y espejo, para evaluar dimensiones, ergonomía y métodos constructivos directamente sobre el objeto.",
          en: "Full-scale prototype in melamine, pine rods and mirror, to evaluate dimensions, ergonomics and construction methods directly on the object.",
        },
      },
      {
        label: { es: "Decisiones", en: "Key decisions" },
        text: {
          es: "Las varillas verticales cumplen doble función —percherx y soporte estructural—; el espejo amplifica la percepción de espacio en un pasillo angosto.",
          en: "The vertical rods serve a dual function —coat rack and structural support—; the mirror amplifies spatial perception in a narrow hallway.",
        },
      },
      {
        label: { es: "Resultado", en: "Result" },
        text: {
          es: "Pieza funcional y adaptable, en uso real, que integra mesada, cajón y percherx en un cuerpo de bajo espesor.",
          en: "Functional, adaptable piece in real use, integrating counter, drawer and coat rack in a slim-profile body.",
        },
      },
    ],
    tools: ["Rhinoceros", "Melamina", "Carpintería", "Herrajes"],
    video: { src: "/videos/recibidor/publicitario.mp4", poster: "/videos/recibidor/publicitario-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/244457279/Recibidor-para-Pasillos-Estrechos",
  },
  {
    slug: "produccion-fotografica",
    tier: "flagship",
    category: "branding",
    year: "2026",
    title: { es: "Producción fotográfica en estudio", en: "Studio photography production" },
    subtitle: {
      es: "Dirección de arte para una identidad de marca deportiva",
      en: "Art direction for a sportswear brand identity",
    },
    cover: "/images/projects/produccion-fotografica/resultado-01.jpg",
    gallery: [
      { src: "/images/projects/produccion-fotografica/resultado-01.jpg" },
      { src: "/images/projects/produccion-fotografica/modelo.jpg" },
      { src: "/images/projects/produccion-fotografica/resultado-02.jpg" },
    ],
    tags: {
      es: ["Dirección de arte", "Fotografía", "Identidad visual", "Branding"],
      en: ["Art direction", "Photography", "Visual identity", "Branding"],
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        text: {
          es: "Construir una narrativa visual coherente para una marca de indumentaria deportiva y yoga, más allá de la fotografía de producto aislada.",
          en: "Build a coherent visual narrative for a sportswear and yoga apparel brand, beyond isolated product photography.",
        },
      },
      {
        label: { es: "Proceso", en: "Process" },
        text: {
          es: "Dirección integral: selección de modelo y maquillaje, diseño de iluminación de estudio, y coordinación de vestuario, accesorios y paleta de color de la marca.",
          en: "Full direction: model and makeup selection, studio lighting design, and coordination of wardrobe, accessories and brand color palette.",
        },
      },
      {
        label: { es: "Decisiones", en: "Key decisions" },
        text: {
          es: "Fondos blancos y rosados alternados para generar contraste y variación atmosférica sin perder consistencia de marca entre tomas.",
          en: "Alternating white and pink backdrops to generate contrast and atmospheric variation without losing brand consistency across shots.",
        },
      },
      {
        label: { es: "Resultado", en: "Result" },
        text: {
          es: "Serie fotográfica con narrativa de marca consistente, coordinada de punta a punta por la misma dirección creativa.",
          en: "Photo series with a consistent brand narrative, coordinated end to end by the same creative direction.",
        },
      },
    ],
    tools: ["Iluminación de estudio", "Lightroom", "Photoshop", "Illustrator"],
    video: { src: "/videos/produccion-fotografica/detras-de-camara.mp4", poster: "/videos/produccion-fotografica/detras-de-camara-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/244459645/Produccion-Fotografica-en-estudio",
  },
  {
    slug: "paletas-ping-pong",
    tier: "exploration",
    category: "producto",
    year: "2026",
    title: { es: "Paletas de ping pong impresas en 3D", en: "3D-printed ping pong paddles" },
    subtitle: {
      es: "Relleno giroide expuesto como recurso estructural y estético",
      en: "Exposed gyroid infill as a structural and aesthetic device",
    },
    cover: "/images/projects/paletas-ping-pong/hero.jpg",
    gallery: [
      { src: "/images/projects/paletas-ping-pong/hero.jpg" },
      {
        src: "/images/projects/paletas-ping-pong/mano.jpg",
        caption: { es: "Ergonomía del mango en uso", en: "Handle ergonomics in use" },
      },
      {
        src: "/images/projects/paletas-ping-pong/proceso-modulos.jpg",
        caption: { es: "Red modular — montaje y desmontaje rápido", en: "Modular net — quick assembly and disassembly" },
      },
    ],
    tags: { es: ["Impresión 3D", "Diseño paramétrico"], en: ["3D printing", "Parametric design"] },
    sections: [
      {
        label: { es: "Nota", en: "Note" },
        text: {
          es: "Set de ping pong sin paredes perimetrales, en PLA, donde el mismo patrón giroide de la estructura se repite en la red —compuesta por seis módulos y dos prensas laterales, de montaje y desmontaje rápido— para máxima eficiencia de material con mínimo peso.",
          en: "Ping pong set with no perimeter walls, in PLA, where the same gyroid pattern from the structure repeats in the net —made of six modules and two side clamps, for quick assembly and disassembly— for maximum material efficiency with minimum weight.",
        },
      },
    ],
    tools: ["Shapr3D", "Rhinoceros", "PrusaSlicer"],
    behanceUrl: "https://www.behance.net/gallery/244459957/Prototipo-Paletas-de-Ping-Pong-en-3D",
  },
  {
    slug: "molinillo-cafe",
    tier: "exploration",
    category: "producto",
    year: "2024",
    title: { es: "Rediseño de base — molinillo de café", en: "Base redesign — coffee grinder" },
    subtitle: {
      es: "2° Premio, Proyecto Pedagógico Industrial Palermo",
      en: "2nd Prize, Proyecto Pedagógico Industrial Palermo",
    },
    cover: "/images/projects/molinillo-cafe/explotada.jpg",
    gallery: [{ src: "/images/projects/molinillo-cafe/explotada.jpg" }],
    tags: { es: ["Rediseño", "Ingeniería de producto"], en: ["Redesign", "Product engineering"] },
    sections: [
      {
        label: { es: "Nota", en: "Note" },
        text: {
          es: "Optimización funcional de la base de un molinillo eléctrico, resuelta a nivel de despiece y ensamble de 16 componentes.",
          en: "Functional optimization of an electric grinder's base, resolved at the level of a 16-part exploded assembly.",
        },
      },
    ],
    tools: ["Rhinoceros", "KeyShot", "Blender"],
    video: { src: "/videos/molinillo-cafe/proceso.mp4", poster: "/videos/molinillo-cafe/proceso-poster.jpg" },
    behanceUrl: "https://www.behance.net/gallery/243977807/Rediseno-base-Molinillo-de-caf",
  },
  {
    slug: "lampara-oruga",
    tier: "exploration",
    category: "producto",
    year: "2024",
    title: { es: "Lámpara Oruga", en: "Caterpillar lamp" },
    subtitle: {
      es: "3° Premio, Proyecto Pedagógico Industrial Palermo",
      en: "3rd Prize, Proyecto Pedagógico Industrial Palermo",
    },
    cover: "/images/projects/lampara-oruga/real-mesa.jpg",
    gallery: [
      { src: "/images/projects/lampara-oruga/real-mesa.jpg" },
      { src: "/images/projects/lampara-oruga/real-triple.jpg" },
    ],
    tags: { es: ["Impresión 3D", "Iluminación decorativa", "IoT"], en: ["3D printing", "Decorative lighting", "IoT"] },
    sections: [
      {
        label: { es: "Nota", en: "Note" },
        text: {
          es: "Lámpara smart impresa en 3D con bombilla LED GU11 controlable por app (color y temperatura), con geometría segmentada diseñada para imprimirse sin soportes — la textura propia de la manufactura aditiva se usa como recurso estético deliberado.",
          en: "3D-printed smart lamp with an app-controllable GU11 LED bulb (color and temperature), with segmented geometry designed to print without supports — additive manufacturing's own texture is used as a deliberate aesthetic device.",
        },
      },
    ],
    tools: ["Shapr3D", "Rhinoceros", "KeyShot"],
    behanceUrl: "https://www.behance.net/gallery/243979813/Prototipo-3D-Inspirado-en-el-Pais-de-las-Maravillas",
  },
  {
    slug: "especiero",
    tier: "exploration",
    category: "producto",
    year: "2025",
    title: { es: "Especiero — Elevador de sabores", en: "Spice organizer — \"Flavor riser\"" },
    subtitle: {
      es: "Producto de encargo para la Casa de Té El Gato Negro",
      en: "Commissioned product for tea house El Gato Negro",
    },
    cover: "/images/projects/especiero/producto-cocina.jpg",
    gallery: [
      { src: "/images/projects/especiero/producto-cocina.jpg" },
      {
        src: "/images/projects/especiero/explotada.jpg",
        caption: { es: "Despiece técnico — 12 componentes", en: "Technical breakdown — 12 parts" },
      },
    ],
    tags: {
      es: ["Encargo de cliente", "Carpintería", "Planificación de producción"],
      en: ["Client commission", "Woodworking", "Production planning"],
    },
    sections: [
      {
        label: { es: "Nota", en: "Note" },
        text: {
          es: "Especiero de madera de cedro para la Casa de Té El Gato Negro, con capacidad para 16 frascos en dos niveles extensibles. Diseñado y documentado —despiece, materialidad, dimensiones— pensando en una producción en serie, no en una pieza única.",
          en: "Cedar wood spice organizer for tea house El Gato Negro, holding 16 jars across two extendable tiers. Designed and documented —exploded assembly, materials, dimensions— with serial production in mind, not as a one-off piece.",
        },
      },
    ],
    tools: ["Rhinoceros", "Corte láser", "Carpintería"],
    behanceUrl: "https://www.behance.net/gallery/243972177/Planificacion-de-la-produccion",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const flagshipProjects = () => projects.filter((p) => p.tier === "flagship");
export const explorationProjects = () => projects.filter((p) => p.tier === "exploration");
