export interface TranslationSchema {
  nav: {
    services: string;
    howItWorks: string;
    coverage: string;
    contact: string;
    callNow: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaCall: string;
    ctaQuote: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  marquee: {
    items: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  stats: {
    items: Array<{ value: string; suffix: string; label: string }>;
  };
  whyJan: {
    eyebrow: string;
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  serviceArea: {
    eyebrow: string;
    heading: string;
    subheading: string;
    callout: string;
    calloutCta: string;
    states: Array<{ name: string; abbr: string; markets: string[] }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      fleetSize: string;
      fleetSizePlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    submitBtn: string;
    successTitle: string;
    successSub: string;
    phoneCard: {
      title: string;
      subtitle: string;
      btnText: string;
    };
  };
  footer: {
    tagline: string;
    links: Array<{ label: string; href: string }>;
    copyright: string;
  };
  mobilebar: {
    call: string;
    quote: string;
  };
  specs: {
    title: string;
    card1: {
      value: string;
      label: string;
      sub: string;
    };
    card2: {
      value: string;
      label: string;
      sub: string;
    };
    card3: {
      value: string;
      label: string;
      sub: string;
    };
    disclaimer: string;
  };
}

export const translations: Record<'en' | 'es', TranslationSchema> = {
  en: {
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      coverage: "Coverage",
      contact: "Contact",
      callNow: "Call Now",
    },
    hero: {
      eyebrow: "MOBILE · PROFESSIONAL · INSURED",
      headline: "We Come To You. Your Fleet ",
      headlineAccent: "Stays Clean.",
      subheadline: "Mobile truck washing and detailing for owner-operators and commercial fleets across Pennsylvania, New Jersey, and Delaware.",
      ctaCall: "Call (267) 444-8115",
      ctaQuote: "Get a Free Quote",
      badge1: "Fully Insured",
      badge2: "We Come To You",
      badge3: "Satisfaction Guaranteed",
    },
    marquee: {
      items: [
        "Spot-Free Chemical Rinses",
        "Biodegradable Detergents",
        "Prompt Reliable Service",
        "Aluminum & Chrome Brightening",
        "Fleets of All Sizes",
        "Full Undercarriage Washing",
        "On-Site Water Management"
      ]
    },
    services: {
      eyebrow: "WHAT WE DO",
      heading: "Everything Your Fleet Needs",
      subheading: "One call. We handle it all — wherever your trucks are parked.",
      items: [
        {
          title: "Exterior Truck Washing",
          description: "High-pressure wash with heavy-duty cleaning foam to dissolve road grime and road salt instantly."
        },
        {
          title: "Fleet Washing",
          description: "Meticulous washing of your entire fleet matching your terminal's specific schedules."
        },
        {
          title: "Engine Cleaning",
          description: "Deep engine bay degreasing and steam washing to ensure clean inspectability and cooling efficiency."
        },
        {
          title: "Tire Cleaning",
          description: "Thorough removal of road grease and application of high-gloss protective dressing to all tires."
        },
        {
          title: "Interior Detailing",
          description: "Full hand polish, glass cleaning, and interior sanitation customized to keep drivers comfortable."
        }
      ]
    },
    howItWorks: {
      eyebrow: "THE PROCESS",
      heading: "Simple. Fast. Professional.",
      steps: [
        {
          number: "01",
          title: "Schedule",
          description: "Call or text us. Tell us where your trucks are and what you need. We'll lock in a time that works for you."
        },
        {
          number: "02",
          title: "We Come To You",
          description: "Our team arrives fully equipped at your location — yard, terminal, or job site. No towing. No downtime."
        },
        {
          number: "03",
          title: "Fleet Stays Clean",
          description: "Professional results every time. We treat your trucks like they're our own. Your image on the road matters."
        }
      ]
    },
    stats: {
      items: [
        { value: "500", suffix: "+", label: "Trucks Washed" },
        { value: "3", suffix: "", label: "States Covered (PA, NJ, DE)" },
        { value: "100%", suffix: "", label: "Mobile Service" },
        { value: "5★", suffix: "", label: "Satisfaction" }
      ]
    },
    whyJan: {
      eyebrow: "WHY JAN TRUCK WASH",
      heading: "The Standard Other Services Don't Meet",
      items: [
        {
          title: "Fully Insured",
          description: "We carry full insurance on every job. Your trucks, your property, and your peace of mind are always protected."
        },
        {
          title: "We Come To You",
          description: "No drop-offs. No wasted driving time. We bring professional truck washing directly to your yard, lot, or job site."
        },
        {
          title: "Affordable Fleet Rates",
          description: "Competitive pricing for single trucks and full fleets. Clean trucks shouldn't break the business."
        },
        {
          title: "Satisfaction Guaranteed",
          description: "We don't leave until you're happy with the work. That's a commitment, not a slogan."
        }
      ]
    },
    serviceArea: {
      eyebrow: "WHERE WE OPERATE",
      heading: "Serving the Tri-State Area",
      subheading: "Wherever your fleet is based in Pennsylvania, New Jersey, or Delaware — we come to you.",
      callout: "Don't see your area? Call us — we're expanding coverage constantly.",
      calloutCta: "Call Now",
      states: [
        { name: "Pennsylvania", abbr: "PA", markets: ["Philadelphia", "Allentown", "Reading", "Chester", "Norristown", "Bucks County"] },
        { name: "New Jersey", abbr: "NJ", markets: ["Camden", "Trenton", "Cherry Hill", "Vineland", "Gloucester City", "Burlington"] },
        { name: "Delaware", abbr: "DE", markets: ["Wilmington", "Newark", "Dover", "New Castle"] }
      ]
    },
    contact: {
      eyebrow: "Get in Touch",
      heading: "Request a Free Quote Today",
      fields: {
        name: "Full Name",
        namePlaceholder: "John Doe",
        email: "Email Address",
        emailPlaceholder: "john@example.com",
        phone: "Phone Number",
        phonePlaceholder: "(123) 456-7890",
        company: "Company Name",
        companyPlaceholder: "Logistics LLC",
        fleetSize: "Fleet Size (Approximate)",
        fleetSizePlaceholder: "e.g., 5-10 Trucks",
        message: "Message & Special Requirements",
        messagePlaceholder: "How can we help? Let us know specific schedules or vehicle types..."
      },
      submitBtn: "Send My Quote Request",
      successTitle: "Quote Request Sent Successfully!",
      successSub: "Thank you for contacting Jan Truck Wash. Our route coordinator will review your fleet details and call you back shortly within 1 hour.",
      phoneCard: {
        title: "Prefer a Direct Phone Call?",
        subtitle: "Speak directly with our dispatcher for immediate booking, custom agreements, or emergency washing units.",
        btnText: "Call (267) 444-8115"
      }
    },
    footer: {
      tagline: "The absolute standard in heavy-duty mobile truck washing and detailing across Pennsylvania, New Jersey, and Delaware. Your fleet is our reputation.",
      links: [
        { label: "Services", href: "#services" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Coverage", href: "#coverage" },
        { label: "Contact Us", href: "#contact" }
      ],
      copyright: "© 2026 Jan Truck Wash. All rights reserved. Servicing PA, NJ & DE."
    },
    mobilebar: {
      call: "Call Us",
      quote: "Get Quote"
    },
    specs: {
      title: "PROFESSIONAL EQUIPMENT SPECS",
      card1: {
        value: "4,000 PSI",
        label: "High-Pressure Water System",
        sub: "Removes caked highway grime, salt, and road film from any surface."
      },
      card2: {
        value: "180°F+",
        label: "Hot Water Thermal Wash",
        sub: "Hot water dissolves diesel soot and engine grease cold water can't touch."
      },
      card3: {
        value: "EPA Safe",
        label: "Biodegradable Cleaning Agents",
        sub: "Fully compliant chemicals. No storm drain violations. No liability for your yard or terminal."
      },
      disclaimer: "* Specs shown are standard commercial equipment. Contact us to confirm your service configuration."
    }
  },
  es: {
    nav: {
      services: "Servicios",
      howItWorks: "Cómo Funciona",
      coverage: "Cobertura",
      contact: "Contacto",
      callNow: "Llamar Ahora",
    },
    hero: {
      eyebrow: "MÓVIL · PROFESIONAL · ASEGURADO",
      headline: "Llegamos Donde Estés. Tu Flota ",
      headlineAccent: "Siempre Limpia.",
      subheadline: "Lavado y detallado móvil de camiones para operadores independientes y flotas comerciales en Pennsylvania, Nueva Jersey y Delaware.",
      ctaCall: "Llamar al (267) 444-8115",
      ctaQuote: "Solicitar Cotización Gratis",
      badge1: "Totalmente Asegurado",
      badge2: "Llegamos A Ti",
      badge3: "Satisfacción Garantizada",
    },
    marquee: {
      items: [
        "Enjuagues Químicos sin Manchas",
        "Detergentes Biodegradables",
        "Servicio Rápido y Confiable",
        "Brillo de Aluminio y Cromo",
        "Flotas de Todos los Tamaños",
        "Lavado de Chasis Completo",
        "Manejo de Agua en el Sitio"
      ]
    },
    services: {
      eyebrow: "QUÉ HACEMOS",
      heading: "Todo lo que tu Flota Necesita",
      subheading: "Una llamada. Nos encargamos de todo — donde sea que estén tus camiones.",
      items: [
        {
          title: "Lavado Exterior de Camiones",
          description: "Lavado a alta presión con espuma de alta resistencia para disolver la suciedad y sal al instante."
        },
        {
          title: "Lavado de Flota",
          description: "Lavado meticuloso de toda su flota adaptado a los horarios específicos de su terminal."
        },
        {
          title: "Limpieza de Motor",
          description: "Desengrasado profundo y lavado a vapor del motor para garantizar una inspección limpia y eficiencia."
        },
        {
          title: "Limpieza de Llantas",
          description: "Eliminación exhaustiva de grasa y aplicación de brillo protector de alto brillo a todos los neumáticos."
        },
        {
          title: "Detallado Interior",
          description: "Pulido a mano, limpieza de vidrios y desinfección interior personalizada para la comodidad de los conductores."
        }
      ]
    },
    howItWorks: {
      eyebrow: "THE PROCESS",
      heading: "Simple. Rápido. Profesional.",
      steps: [
        {
          number: "01",
          title: "Programa tu Servicio",
          description: "Llámanos o escríbenos. Dinos dónde están tus camiones y qué necesitas. Coordinamos un horario que te funcione."
        },
        {
          number: "02",
          title: "Llegamos Donde Estás",
          description: "Nuestro equipo llega completamente equipado a tu ubicación — patio, terminal o sitio de trabajo. Sin remolque. Sin tiempo perdido."
        },
        {
          number: "03",
          title: "Tu Flota Siempre Lista",
          description: "Resultados profesionales en cada visita. Tratamos tus camiones como si fueran nuestros. Tu imagen en la carretera importa."
        }
      ]
    },
    stats: {
      items: [
        { value: "500", suffix: "+", label: "Camiones Lavados" },
        { value: "3", suffix: "", label: "Estados Cubiertos (PA, NJ, DE)" },
        { value: "100%", suffix: "", label: "Servicio Móvil" },
        { value: "5★", suffix: "", label: "Satisfacción" }
      ]
    },
    whyJan: {
      eyebrow: "POR QUÉ JAN TRUCK WASH",
      heading: "El Estándar que Otros No Alcanzan",
      items: [
         {
           title: "Completamente Asegurado",
           description: "Contamos con seguro completo en cada trabajo. Tus camiones, tu propiedad y tu tranquilidad siempre están protegidos."
         },
         {
           title: "Llegamos Donde Estés",
           description: "Sin dejar los camiones. Sin tiempo perdido manejando. Llevamos el lavado profesional directo a tu patio, estacionamiento o sitio de obra."
         },
         {
           title: "Tarifas Accesibles para Flotas",
           description: "Precios competitivos para camiones individuales y flotas completas. Los camiones limpios no tienen que costar una fortuna."
         },
         {
           title: "Satisfacción Garantizada",
           description: "No nos vamos hasta que estés satisfecho con el trabajo. Eso es un compromiso, no un eslogan."
         }
      ]
    },
    serviceArea: {
      eyebrow: "DÓNDE OPERAMOS",
      heading: "Cubrimos el Área de los Tres Estados",
      subheading: "Donde sea que esté tu flota en Pennsylvania, Nueva Jersey o Delaware — llegamos hasta ti.",
      callout: "¿No ves tu área? Llámanos — estamos expandiendo nuestra cobertura constantemente.",
      calloutCta: "Llamar Ahora",
      states: [
        { name: "Pennsylvania", abbr: "PA", markets: ["Philadelphia", "Allentown", "Reading", "Chester", "Norristown", "Bucks County"] },
        { name: "New Jersey", abbr: "NJ", markets: ["Camden", "Trenton", "Cherry Hill", "Vineland", "Gloucester City", "Burlington"] },
        { name: "Delaware", abbr: "DE", markets: ["Wilmington", "Newark", "Dover", "New Castle"] }
      ]
    },
    contact: {
      eyebrow: "Póngase en Contacto",
      heading: "Solicite una Cotización Gratis Hoy",
      fields: {
        name: "Nombre Completo",
        namePlaceholder: "Juan Pérez",
        email: "Correo Electrónico",
        emailPlaceholder: "juan@ejemplo.com",
        phone: "Número de Teléfono",
        phonePlaceholder: "(123) 456-7890",
        company: "Nombre de la Empresa",
        companyPlaceholder: "Logística del Este S.A.",
        fleetSize: "Tamaño de Flota (Aproximado)",
        fleetSizePlaceholder: "ej. 5-10 Camiones",
        message: "Mensaje y Requisitos Especiales",
        messagePlaceholder: "¿Cómo podemos ayudarle? Bríndenos detalles de horarios de lavado, tipos de camiones..."
      },
      submitBtn: "Enviar mi Solicitud",
      successTitle: "¡Solicitud Enviada Exitosamente!",
      successSub: "Gracias por contactar a Jan Truck Wash. Nuestro coordinador de rutas revisará los detalles de su flota y le llamará en un plazo máximo de 1 hora.",
      phoneCard: {
        title: "¿Prefiere Llamar Directamente?",
        subtitle: "Hable directamente con nuestro despachador para reservaciones de emergencia, cotizaciones urgentes o contratos de servicio inmediato.",
        btnText: "Llamar al (267) 444-8115"
      }
    },
    footer: {
      tagline: "El estándar absoluto en lavado móvil de camiones y detallado en Pensilvania, Nueva Jersey y Delaware. Su flota es nuestra reputación.",
      links: [
        { label: "Servicios", href: "#services" },
        { label: "Cómo Funciona", href: "#how-it-works" },
        { label: "Cobertura", href: "#coverage" },
        { label: "Contacto", href: "#contact" }
      ],
      copyright: "© 2026 Jan Truck Wash. Todos los derechos reservados. Atendiendo PA, NJ y DE."
    },
    mobilebar: {
      call: "Llamar",
      quote: "Cotizar"
    },
    specs: {
      title: "ESPECIFICACIONES DE EQUIPO PROFESIONAL",
      card1: {
        value: "4,000 PSI",
        label: "Sistema de Alta Presión",
        sub: "Elimina mugre de carretera, sal y suciedad de cualquier superficie."
      },
      card2: {
        value: "180°F+",
        label: "Lavado Térmico con Agua Caliente",
        sub: "El agua caliente disuelve el hollín diésel y la grasa que el agua fría no puede eliminar."
      },
      card3: {
        value: "EPA Safe",
        label: "Agentes de Limpieza Biodegradables",
        sub: "Productos completamente reglamentarios. Sin infracciones de desagüe. Sin riesgos para tu patio o terminal."
      },
      disclaimer: "* Las especificaciones mostradas son estándar de equipo comercial. Contáctenos para confirmar su configuración de servicio."
    }
  }
};
