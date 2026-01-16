import { useEffect } from 'react'
import ServiceHero from '../components/ServicePage/ServiceHero'
import ServiceFeatures from '../components/ServicePage/ServiceFeatures'
import ServiceProcess from '../components/ServicePage/ServiceProcess'
import ServicePricing from '../components/ServicePage/ServicePricing'
import ServiceFAQ from '../components/ServicePage/ServiceFAQ'
import ServiceCTA from '../components/ServicePage/ServiceCTA'
import webAsset from '../assets/abstract/web.png'

const WEB_ICON = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
)

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
            </svg>
        ),
        title: 'Landing Pages',
        tag: 'Conversión',
        description: 'Páginas de aterrizaje optimizadas para conversión con diseño impactante y copy persuasivo.',
        longDescription: 'Diseñamos landing pages de alto impacto enfocadas en un solo objetivo: convertir visitantes en clientes. Combinamos psicología de ventas, diseño UI premium y copy persuasivo para maximizar tu retorno de inversión.',
        includes: [
            'Diseño UI/UX Personalizado',
            'Copywriting Persuasivo',
            'Optimización de Velocidad',
            'Integración con Analytics',
            'Formularios Inteligentes',
            'A/B Testing Básico'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        ),
        title: 'E-commerce',
        tag: 'Ventas',
        description: 'Tiendas online completas con carrito, pasarelas de pago y gestión de inventario.',
        longDescription: 'Construimos infraestructuras robustas para vender online. Desde la gestión de productos hasta pasarelas de pago cifradas, creamos una experiencia de compra fluida y segura que fomenta la fidelización.',
        includes: [
            'Carrito de Compras Avanzado',
            'Pasarelas de Pago (Stripe, PayPal)',
            'Gestión de Inventario Real',
            'Panel de Administración',
            'Cuentas de Cliente',
            'Notificaciones por Correo'
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
        title: 'Aplicaciones Web',
        tag: 'Infraestructura',
        description: 'PWAs y aplicaciones web progresivas con funcionalidades avanzadas y offline support.',
        longDescription: 'Desarrollamos aplicaciones web de gran escala con la potencia de una app nativa. Utilizamos tecnologías modernas para garantizar escalabilidad, seguridad y una experiencia de usuario sin fisuras.',
        includes: [
            'Arquitectura Escalable (MERN/T3)',
            'Funcionalidades Progresivas (PWA)',
            'Autenticación Segura',
            'Base de Datos en Tiempo Real',
            'Integraciones API Terceros',
            'Soporte Offline'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
            </svg>
        ),
        title: 'CMS Personalizado',
        tag: 'Control',
        description: 'Sistemas de gestión de contenido a medida para que actualices tu sitio fácilmente.',
        longDescription: 'Toma el control absoluto de tu contenido. Creamos paneles de administración intuitivos diseñados específicamente para tu flujo de trabajo, sin las complicaciones de sistemas genéricos.',
        includes: [
            'Panel de Control Intuitivo',
            'Gestión de Medios',
            'Roles y Permisos',
            'Editor Visual Potente',
            'Búsqueda Global',
            'Historial de Cambios'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Optimización',
        tag: 'Rendimiento',
        description: 'Performance, SEO técnico y Core Web Vitals para máxima velocidad y posicionamiento.',
        longDescription: 'Llevamos tu sitio web al límite de la velocidad. Optimizamos cada recurso y configuramos el SEO técnico para que Google ame tu sitio tanto como tus usuarios.',
        includes: [
            'Optimización Core Web Vitals',
            'Compresión de Assets',
            'SEO Técnico Avanzado',
            'Carga Diferida (Lazy Loading)',
            'Caching de Servidor',
            'Reportes de Rendimiento'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        title: 'Responsive Design',
        tag: 'Adaptabilidad',
        description: 'Diseños que se adaptan perfectamente a cualquier dispositivo y resolución.',
        longDescription: 'Tu marca se verá perfecta en cualquier pantalla. No solo adaptamos el tamaño, rediseñamos la experiencia táctil y visual para que cada dispositivo sea el mejor canal para tu negocio.',
        includes: [
            'Diseño Mobile-First',
            'Breakpoints Personalizados',
            'Interacciones Táctiles',
            'Tipografía Fluida',
            'Imágenes Adaptativas',
            'Testing Multidispositivo'
        ]
    }
]

const processSteps = [
    {
        title: 'Planificación',
        description: 'Definimos arquitectura de información, wireframes y estrategia de contenido.'
    },
    {
        title: 'Diseño UI/UX',
        description: 'Creamos mockups de alta fidelidad con todas las interacciones planificadas.'
    },
    {
        title: 'Desarrollo',
        description: 'Codificamos con las mejores tecnologías: React, Next.js, o lo que tu proyecto necesite.'
    },
    {
        title: 'Testing & Deploy',
        description: 'QA exhaustivo, optimización de performance y lanzamiento en producción.'
    }
]

const pricingPlans = [
    {
        name: 'Landing Page',
        description: 'Perfecta para campañas y lanzamientos',
        price: '800',
        features: [
            'Diseño personalizado',
            'Hasta 5 secciones',
            'Formulario de contacto',
            'SEO básico',
            'Responsive design',
            '1 revisión incluida'
        ],
        cta: 'Comenzar',
        whatsappMessage: '¡Hola AltoVisual! 👋 Me interesa el plan *Landing Page* ($800) para mi próximo proyecto web.'
    },
    {
        name: 'Sitio Web Pro',
        description: 'Tu presencia digital completa',
        price: '2,500',
        featured: true,
        features: [
            'Hasta 10 páginas',
            'CMS personalizado',
            'Blog integrado',
            'SEO avanzado',
            'Analytics configurado',
            'Soporte 3 meses'
        ],
        cta: 'Más Popular',
        whatsappMessage: '¡Hola AltoVisual! 👋 Quiero el plan *Sitio Web Pro* ($2,500) para una presencia digital completa.'
    },
    {
        name: 'E-commerce',
        description: 'Vende online sin límites',
        price: '4,500',
        features: [
            'Tienda completa',
            'Pasarela de pagos',
            'Gestión de inventario',
            'Panel de administración',
            'Integraciones API',
            'Soporte 6 meses'
        ],
        cta: 'Cotizar',
        whatsappMessage: '¡Hola AltoVisual! 👋 Necesito información sobre el plan *E-commerce* ($4,500) para mi tienda online.'
    }
]

const faqs = [
    {
        question: '¿Cuánto tiempo toma desarrollar un sitio web?',
        answer: 'El tiempo de desarrollo varía según la complejidad. Una landing page puede estar lista en 1-2 semanas, un sitio web corporativo en 3-4 semanas, y un e-commerce completo en 6-8 semanas. Durante la planificación te daremos un cronograma detallado.'
    },
    {
        question: '¿Qué tecnologías utilizan?',
        answer: 'Trabajamos con las tecnologías más modernas y eficientes: React, Next.js, Vue.js para el frontend, Node.js y Python para backend, y plataformas como WordPress, Shopify o Webflow según las necesidades del proyecto.'
    },
    {
        question: '¿El sitio será responsive (adaptable a móviles)?',
        answer: 'Absolutamente. Todos nuestros sitios web son 100% responsive y están optimizados para funcionar perfectamente en cualquier dispositivo: móviles, tablets y escritorio.'
    },
    {
        question: '¿Incluyen hosting y dominio?',
        answer: 'Podemos gestionar el hosting y dominio por ti, o trabajar con tu proveedor actual. Recomendamos plataformas como Vercel, Netlify o AWS según el tipo de proyecto.'
    },
    {
        question: '¿Ofrecen mantenimiento después del lanzamiento?',
        answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, monitoreo de uptime y soporte técnico. Los primeros meses de soporte están incluidos en cada plan.'
    },
    {
        question: '¿Puedo actualizar el contenido yo mismo?',
        answer: 'Por supuesto. Implementamos sistemas de gestión de contenido (CMS) intuitivos que te permiten actualizar textos, imágenes y productos sin conocimientos técnicos. Además, incluimos capacitación inicial.'
    }
]

export default function WebPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServiceHero
                title="Desarrollo Web de Alto Rendimiento"
                subtitle="Web Development"
                description="Sitios web modernos, rápidos y optimizados para conversión. Desde landing pages hasta aplicaciones web complejas."
                accentColor="#4facfe"
                secondaryColor="#00f2fe"
                features={['React', 'Next.js', 'WordPress', 'Shopify', 'Headless CMS', 'APIs']}
                icon={WEB_ICON}
            />
            <ServiceFeatures
                title="Soluciones web que ofrecemos"
                features={features}
                accentColor="#4facfe"
            />
            <ServicePricing
                title="Planes de Desarrollo Web"
                subtitle="Invierte en tu presencia digital con precios transparentes"
                plans={pricingPlans}
                accentColor="#4facfe"
            />
            <ServiceProcess
                steps={processSteps}
                accentColor="#4facfe"
            />
            <ServiceFAQ
                title="Preguntas sobre Desarrollo Web"
                faqs={faqs}
            />
            <ServiceCTA
                title="¿Listo para lanzar tu sitio web?"
                description="Agenda una llamada gratuita y diseñemos juntos tu próximo proyecto digital."
                accentColor="#4facfe"
            />
        </>
    )
}

