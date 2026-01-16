import { useEffect } from 'react'
import ServiceHero from '../components/ServicePage/ServiceHero'
import ServiceFeatures from '../components/ServicePage/ServiceFeatures'
import ServiceProcess from '../components/ServicePage/ServiceProcess'
import ServicePricing from '../components/ServicePage/ServicePricing'
import ServiceFAQ from '../components/ServicePage/ServiceFAQ'
import ServiceCTA from '../components/ServicePage/ServiceCTA'
import vfxAsset from '../assets/abstract/vfx.png'

const VFX_ICON = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5,3 19,12 5,21 5,3" />
    </svg>
)

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
            </svg>
        ),
        title: 'Motion Graphics',
        tag: 'Dinamismo',
        description: 'Animaciones 2D dinámicas para intros, outros, transiciones y elementos gráficos animados.',
        longDescription: 'Damos vida a tus ideas a través del movimiento. Creamos piezas gráficas que comunican mensajes complejos de forma sencilla, fluida y visualmente impactante, elevando el valor de producción de tus videos.',
        includes: [
            'Storyboarding Creativo',
            'Animación de Logotipos',
            'Tipografía Cinética',
            'Lower Thirds y Overlays',
            'Transiciones Personalizadas',
            'Diseño de Sonido Básico'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        title: 'VFX & Compositing',
        tag: 'Realismo',
        description: 'Efectos visuales avanzados, keying, tracking y composición de múltiples capas.',
        longDescription: 'Hacemos posible lo imposible. Combinamos elementos reales con digitales de forma invisible, utilizando las técnicas más avanzadas de composición para crear escenas espectaculares que desafían la realidad.',
        includes: [
            'Limpieza de Escena (Object Removal)',
            'Rotoscopia y Chroma Keying',
            'Trackeos de Cámara 3D',
            'Integración de Partículas',
            'Efectos de Atmósfera y Luz',
            'Composición Final en 32-bit'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        ),
        title: 'Animación 3D',
        tag: 'Profundidad',
        description: 'Modelado, texturizado, iluminación y animación de elementos tridimensionales.',
        longDescription: 'Construimos mundos y productos desde cero. Nuestra capacidad de modelado y renderizado 3D de alta gama nos permite crear visualizaciones fotorrealistas de productos o entornos que aún no existen.',
        includes: [
            'Modelado Hard-Surface / Orgánico',
            'Texturizado PBR Fotorrealista',
            'Iluminación Global y HDRI',
            'Animación de Producto 3D',
            'Simulaciones Físicas (RBD/Vellum)',
            'Renderizado HDR de Alta Calidad'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
            </svg>
        ),
        title: 'Color Grading',
        tag: 'Narrativa',
        description: 'Corrección de color profesional y looks cinematográficos que definen el mood visual.',
        longDescription: 'El color es el idioma secreto de las emociones. Ajustamos cada tono y contraste para asegurar que tu pieza tenga el ambiente perfecto y una coherencia visual impecable en cada plano.',
        includes: [
            'Igualación de Planos (Match Color)',
            'Corrección de Exposición y Balance',
            'Creación de "Looks" Cinematográficos',
            'Enfoque Selectivo del Color',
            'Masterización HDR',
            'Preparación para Cine/Web'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
            </svg>
        ),
        title: 'Edición de Video',
        tag: 'Montaje',
        description: 'Montaje narrativo, ritmo visual, sound design y exportación en múltiples formatos.',
        longDescription: 'Donde ocurre la magia del cine. Seleccionamos las mejores tomas para construir una historia sólida con un ritmo imparable, integrando sonido y visuales para un resultado profesional.',
        includes: [
            'Montaje Narrativo y Multi-cámara',
            'Diseño y Mezcla de Sonido',
            'Selección de Música de Stock',
            'Corrección de Audio Básica',
            'Exportación en 4K/Log/Socials',
            'Gestión de Subtítulos y Assets'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
        title: 'Producción Integral',
        tag: 'Solución',
        description: 'Desde el concepto hasta la entrega final: guion, producción, post-producción y delivery.',
        longDescription: 'Nos encargamos de todo el proceso creativo y técnico. Convertimos tu idea abstracta en un producto final listo para su emisión, gestionando cada etapa con precisión y visión artística.',
        includes: [
            'Escritura de Guion y Estructura',
            'Gestión de Casting y Locaciones',
            'Dirección de Fotografía',
            'Coordinación de Post-producción',
            'Masterización para Plataformas',
            'Asesoría de Distribución'
        ]
    }
]

const processSteps = [
    {
        title: 'Pre-producción',
        description: 'Concepto creativo, storyboards, desglose técnico y planificación de rodaje/animación.'
    },
    {
        title: 'Producción',
        description: 'Rodaje con equipo profesional o creación de assets y animaciones base.'
    },
    {
        title: 'Post-producción',
        description: 'Edición, VFX, color grading, sound design y composición final.'
    },
    {
        title: 'Delivery',
        description: 'Renderizado en múltiples formatos optimizados para cada plataforma de destino.'
    }
]

const pricingPlans = [
    {
        name: 'Video Básico',
        description: 'Edición y post-producción esencial',
        price: '500',
        features: [
            'Hasta 2 min de video final',
            'Edición profesional',
            'Corrección de color básica',
            'Música royalty-free',
            '2 revisiones',
            'Entrega en 5 días'
        ],
        cta: 'Comenzar',
        whatsappMessage: '¡Hola AltoVisual! 👋 Me interesa el plan *Video Básico* ($500) para editar mis videos.'
    },
    {
        name: 'Motion Pro',
        description: 'Animaciones y gráficos en movimiento',
        price: '1,500',
        featured: true,
        features: [
            'Hasta 1 min de motion graphics',
            'Animación 2D personalizada',
            'Color grading avanzado',
            'Sound design incluido',
            '3 revisiones',
            'Archivos fuente incluidos'
        ],
        cta: 'Más Popular',
        whatsappMessage: '¡Hola AltoVisual! 👋 Quiero información sobre el plan *Motion Pro* ($1,500) para animaciones de impacto.'
    },
    {
        name: 'VFX Premium',
        description: 'Efectos visuales de alto nivel',
        price: '3,500',
        features: [
            'Compositing avanzado',
            'Animación 3D',
            'VFX cinematográficos',
            'Producción completa',
            'Revisiones ilimitadas',
            'Soporte post-entrega'
        ],
        cta: 'Cotizar',
        whatsappMessage: '¡Hola AltoVisual! 👋 Necesito una cotización para el plan *VFX Premium* ($3,500) para un proyecto de alta gama.'
    }
]

const faqs = [
    {
        question: '¿Qué formatos de archivo entregan?',
        answer: 'Entregamos en todos los formatos que necesites: ProRes, H.264, H.265 para video; PNG, EXR para secuencias; y archivos de proyecto (.aep, .prproj) si se requiere. Optimizamos para la plataforma de destino (YouTube, Instagram, TV, cine, etc.).'
    },
    {
        question: '¿Trabajan con material grabado por el cliente?',
        answer: 'Sí, podemos trabajar con tu material existente para edición, color grading y post-producción. También ofrecemos servicios de producción completa si necesitas grabación profesional.'
    },
    {
        question: '¿Cuánto tiempo toma un proyecto de motion graphics?',
        answer: 'Depende de la complejidad. Animaciones sencillas (10-15 segundos) pueden estar listas en 3-5 días. Proyectos más complejos con animación 3D pueden tomar 2-4 semanas. Te damos un cronograma preciso durante la pre-producción.'
    },
    {
        question: '¿Pueden crear animaciones 3D realistas?',
        answer: 'Absolutamente. Trabajamos con Cinema 4D, Blender y Houdini para crear visualizaciones de producto, arquitectónicas y efectos 3D cinematográficos de alta calidad.'
    },
    {
        question: '¿Ofrecen servicios de producción de video completa?',
        answer: 'Sí, ofrecemos producción integral: concepto creativo, guion, storyboard, producción (rodaje con equipo profesional), y post-producción completa. Manejamos desde comerciales hasta documentales corporativos.'
    },
    {
        question: '¿Los videos incluyen música y efectos de sonido?',
        answer: 'Sí, todos nuestros proyectos incluyen música licenciada (royalty-free o con licencia comercial) y sound design profesional. También podemos trabajar con música original si el proyecto lo requiere.'
    }
]

export default function VfxPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServiceHero
                title="Video & VFX de Impacto"
                subtitle="Producción Audiovisual"
                description="Producción audiovisual de alto nivel con motion graphics y efectos visuales que capturan la atención y cuentan historias memorables."
                accentColor="#f97316"
                secondaryColor="#eab308"
                features={['After Effects', 'DaVinci Resolve', 'Cinema 4D', 'Nuke', 'Premiere Pro', 'Blender']}
                icon={VFX_ICON}
            />
            <ServiceFeatures
                title="Servicios de video que ofrecemos"
                features={features}
                accentColor="#f97316"
            />
            <ServicePricing
                title="Planes de Video & VFX"
                subtitle="Producciones audiovisuales que impactan"
                plans={pricingPlans}
                accentColor="#f97316"
            />
            <ServiceProcess
                steps={processSteps}
                accentColor="#f97316"
            />
            <ServiceFAQ
                title="Preguntas sobre Video & VFX"
                faqs={faqs}
            />
            <ServiceCTA
                title="¿Tienes un proyecto audiovisual en mente?"
                description="Cuéntanos tu visión y hagámosla realidad con video de alto impacto."
                accentColor="#f97316"
            />
        </>
    )
}

