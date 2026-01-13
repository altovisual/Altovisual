import { useEffect } from 'react'
import ServiceHero from '../components/ServicePage/ServiceHero'
import ServiceFeatures from '../components/ServicePage/ServiceFeatures'
import ServiceProcess from '../components/ServicePage/ServiceProcess'
import ServicePricing from '../components/ServicePage/ServicePricing'
import ServiceFAQ from '../components/ServicePage/ServiceFAQ'
import ServiceCTA from '../components/ServicePage/ServiceCTA'
import designAsset from '../assets/abstract/design.png'

const DESIGN_ICON = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
    </svg>
)

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
            </svg>
        ),
        title: 'Identidad de Marca',
        tag: 'Escencia',
        description: 'Logotipos únicos, paletas de color y sistemas visuales que definen la esencia de tu marca.',
        longDescription: 'Creamos marcas que no solo se ven bien, sino que cuentan una historia. Desarrollamos todo un ecosistema visual que garantiza que tu marca sea reconocida y recordada en cualquier plataforma.',
        includes: [
            'Logotipo Principal y Versiones',
            'Paleta de Colores Estratégica',
            'Sistemas Tipográficos',
            'Iconografía Personalizada',
            'Manual Básico de Identidad',
            'Assets para Perfiles Sociales'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
        title: 'UI/UX Design',
        tag: 'Experiencia',
        description: 'Interfaces intuitivas y experiencias de usuario memorables que aumentan la conversión.',
        longDescription: 'Diseñamos interfaces que tus usuarios amarán usar. Priorizamos la usabilidad y la estética para crear flujos de navegación lógicos que guían al usuario hacia sus objetivos de forma natural.',
        includes: [
            'Arquitectura de Información',
            'Wireframing de Baja Fidelidad',
            'Prototipos Interactivos',
            'Diseño de Interfaz Premium',
            'Sistemas de Diseño (Design Ops)',
            'User Testing y Feedback'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <line x1="8" y1="2" x2="8" y2="22" />
                <line x1="16" y1="2" x2="16" y2="22" />
            </svg>
        ),
        title: 'Material Impreso',
        tag: 'Tangible',
        description: 'Tarjetas, folletos, packaging y todo tipo de material gráfico de alta calidad.',
        longDescription: 'Llevamos tu marca al mundo físico con acabados excepcionales. Supervisamos cada detalle técnico para asegurar que el resultado en papel sea tan impactante como en pantalla.',
        includes: [
            'Diseño de Tarjetas de Presentación',
            'Brochures y Flyings Directivos',
            'Packaging y Etiquetas',
            'Papelería Corporativa Completa',
            'Artes Finales para Imprenta',
            'Asesoría en Materiales y Tintas'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        title: 'Diseño Digital',
        tag: 'Presencia',
        description: 'Banners, posts para redes sociales, newsletters y assets digitales optimizados.',
        longDescription: 'Optimizamos tu presencia en canales digitales. Creamos piezas gráficas dinámicas que capturan la atención del scroll infinito y refuerzan tu mensaje en cada Newsletter o Post.',
        includes: [
            'Templates para Redes Sociales',
            'Diseño de Newsletters',
            'Banners Publicitarios (Ads)',
            'Infografías de Alto Impacto',
            'Assets para Streaming',
            'Optimización de Formatos Digitales'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        ),
        title: 'Brand Guidelines',
        tag: 'Consistencia',
        description: 'Manuales de marca completos que aseguran consistencia en todas las aplicaciones.',
        longDescription: 'Creamos la "Biblia" de tu marca. Un documento exhaustivo que dicta cómo debe usarse tu identidad visual en cualquier contexto, evitando errores de aplicación y protegiendo tu valor de marca.',
        includes: [
            'Manual de Uso de Logotipo',
            'Guía de Estilo Tipográfico',
            'Especificación de Paleta cromática',
            'Ejemplos de Aplicación Correcta',
            'Guía de Tono y Voz Visual',
            'Entrega de Biblioteca de Assets'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
        title: 'Consultoría Visual',
        tag: 'Estrategia',
        description: 'Asesoramiento estratégico para mejorar la percepción visual de tu marca.',
        longDescription: 'Te ayudamos a tomar decisiones visuales inteligentes. Analizamos tu comunicación actual y te proporcionamos una hoja de ruta clara para elevar tu estética y conectar mejor con tu audiencia ideal.',
        includes: [
            'Auditoría Visual de Marca',
            'Análisis de Competencia Estética',
            'Sesiones de Brainstorming Creativo',
            'Recomendaciones de Mejora UI/UX',
            'Hoja de Ruta de Evolución Visual',
            'Soporte Estratégico Continuo'
        ]
    }
]

const processSteps = [
    {
        title: 'Descubrimiento',
        description: 'Analizamos tu marca, competencia y objetivos para entender qué necesitas realmente.'
    },
    {
        title: 'Concepto',
        description: 'Desarrollamos múltiples conceptos creativos basados en nuestra investigación.'
    },
    {
        title: 'Diseño',
        description: 'Refinamos el concepto elegido hasta alcanzar la perfección en cada detalle.'
    },
    {
        title: 'Entrega',
        description: 'Entregamos todos los archivos en los formatos necesarios junto con las guías de uso.'
    }
]

const pricingPlans = [
    {
        name: 'Logo Básico',
        description: 'Tu identidad visual esencial',
        price: '300',
        features: [
            'Diseño de logotipo',
            '3 propuestas iniciales',
            '2 revisiones',
            'Archivos PNG y SVG',
            'Paleta de colores',
            'Entrega en 5 días'
        ],
        cta: 'Comenzar'
    },
    {
        name: 'Branding Pro',
        description: 'Identidad de marca completa',
        price: '1,200',
        featured: true,
        features: [
            'Logotipo + variaciones',
            'Paleta de colores',
            'Tipografías definidas',
            'Brand Guidelines',
            'Papelería básica',
            'Revisiones ilimitadas'
        ],
        cta: 'Más Popular'
    },
    {
        name: 'Brand Integral',
        description: 'Todo para tu marca',
        price: '2,800',
        features: [
            'Branding completo',
            'UI Kit para web/app',
            'Social media templates',
            'Packaging design',
            'Material impreso',
            'Consultoría incluida'
        ],
        cta: 'Cotizar'
    }
]

const faqs = [
    {
        question: '¿Cuántas propuestas de logo recibo?',
        answer: 'En el plan básico recibes 3 propuestas distintas. En planes superiores trabajamos con más opciones y exploraciones creativas hasta encontrar la identidad perfecta para tu marca.'
    },
    {
        question: '¿Qué formatos de archivo entregan?',
        answer: 'Entregamos todos los formatos necesarios: vectores (AI, EPS, SVG, PDF), imágenes (PNG, JPG en alta resolución) y versiones optimizadas para web y redes sociales.'
    },
    {
        question: '¿Qué incluye el manual de marca (Brand Guidelines)?',
        answer: 'El manual incluye: uso correcto del logo, variaciones permitidas, paleta de colores con códigos exactos, tipografías, espaciados, aplicaciones correctas e incorrectas, y ejemplos de uso.'
    },
    {
        question: '¿Puedo solicitar cambios después de la entrega?',
        answer: 'Sí, durante el proceso incluimos revisiones según cada plan. Después de la entrega final, podemos hacer ajustes adicionales con un costo acordado previamente.'
    },
    {
        question: '¿Diseñan para redes sociales?',
        answer: 'Absolutamente. Creamos templates personalizados para todas tus redes sociales: Instagram, Facebook, LinkedIn, Twitter, etc. Con tu identidad visual aplicada consistentemente.'
    },
    {
        question: '¿Hacen packaging y material impreso?',
        answer: 'Sí, diseñamos packaging de productos, etiquetas, tarjetas de presentación, folletos, catálogos, señalética y todo tipo de material gráfico impreso o digital.'
    }
]

export default function DesignPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServiceHero
                title="Diseño Gráfico que Conecta"
                subtitle="Diseño Visual"
                description="Creamos identidades visuales poderosas que capturan la esencia de tu marca y generan una conexión emocional con tu audiencia."
                accentColor="#00f2fe"
                secondaryColor="#4facfe"
                features={['Branding', 'UI/UX', 'Print', 'Social Media', 'Packaging', 'Ilustración']}
                icon={DESIGN_ICON}
            />
            <ServiceFeatures
                title="Lo que incluye nuestro servicio"
                features={features}
                accentColor="#00f2fe"
            />
            <ServicePricing
                title="Planes de Diseño"
                subtitle="Desde logos hasta identidades de marca completas"
                plans={pricingPlans}
                accentColor="#00f2fe"
            />
            <ServiceProcess
                steps={processSteps}
                accentColor="#00f2fe"
            />
            <ServiceFAQ
                title="Preguntas sobre Diseño Gráfico"
                faqs={faqs}
            />
            <ServiceCTA
                title="¿Listo para transformar tu marca?"
                description="Creemos juntos una identidad visual que conecte con tu audiencia."
                accentColor="#00f2fe"
            />
        </>
    )
}

