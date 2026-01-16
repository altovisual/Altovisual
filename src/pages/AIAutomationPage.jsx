import { useEffect } from 'react'
import ServiceHero from '../components/ServicePage/ServiceHero'
import ServiceFeatures from '../components/ServicePage/ServiceFeatures'
import ServiceProcess from '../components/ServicePage/ServiceProcess'
import ServicePricing from '../components/ServicePage/ServicePricing'
import ServiceFAQ from '../components/ServicePage/ServiceFAQ'
import ServiceCTA from '../components/ServicePage/ServiceCTA'

const AI_ICON = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
        <path d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
)

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 9h8M8 13h6" />
            </svg>
        ),
        title: 'Chatbots con IA',
        tag: 'Inteligencia',
        description: 'Agentes conversacionales inteligentes que entienden el contexto y resuelven dudas 24/7.',
        longDescription: 'No son simples bots de opciones. Implementamos modelos de lenguaje avanzados que permiten a tu negocio atender clientes, calificar leads y cerrar ventas de forma natural y automática en cualquier plataforma.',
        includes: [
            'Integración con ChatGPT/Claude',
            'Entrenamiento con tu Data',
            'Despliegue en WhatsApp y Web',
            'Memoria de Contexto',
            'Multi-lenguaje Nativo',
            'Handover a Humano'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: 'Automatización de Workflows',
        tag: 'Eficiencia',
        description: 'Conecta todas tus herramientas y elimina las tareas manuales repetitivas.',
        longDescription: 'Hacemos que tus apps hablen entre sí. Diseñamos flujos de trabajo inteligentes que mueven datos automáticamente entre tu CRM, correo, redes sociales y bases de datos, ahorrando horas de trabajo manual.',
        includes: [
            'Automatización con n8n/Make',
            'Integraciones custom vía API',
            'Sincronización de CRMs',
            'Webhooks en tiempo real',
            'Procesamiento de Documentos',
            'Monitoreo de Errores'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
        title: 'Agentes de Voz',
        tag: 'Innovación',
        description: 'IA conversacional por voz para atención telefónica y reservas automatizadas.',
        longDescription: 'Lleva la automatización al siguiente nivel con agentes de voz fotorrealistas. Capaces de realizar llamadas salientes o recibir consultas entrantes con una voz natural y comprensión total del lenguaje.',
        includes: [
            'Voces Neuronales Naturales',
            'Latencia Ultra-Baja',
            'Gestión de Citas y Reservas',
            'Integración Telefónica (VoIP)',
            'Análisis de Sentimiento',
            'Transcripción en Vivo'
        ]
    }
]

const processSteps = [
    {
        title: 'Auditoría de Procesos',
        description: 'Analizamos tus flujos actuales para identificar cuellos de botella y oportunidades de IA.'
    },
    {
        title: 'Arquitectura IA',
        description: 'Diseñamos la estructura de los agentes y las conexiones entre tus herramientas favoritas.'
    },
    {
        title: 'Implementación',
        description: 'Configuramos los modelos, entrenamos a la IA y conectamos los nodos de automatización.'
    },
    {
        title: 'Optimización',
        description: 'Monitoreamos el desempeño y refinamos las respuestas para máxima precisión.'
    }
]

const pricingPlans = [
    {
        name: 'Starter IA',
        description: 'Automatiza lo esencial',
        price: '1,200',
        features: [
            '1 Chatbot Inteligente',
            'Hasta 3 Workflows base',
            'Integración con WhatsApp',
            'Entrenamiento con 10 docs',
            'Soporte mensual',
            'Dashboard de métricas'
        ],
        cta: 'Comenzar',
        whatsappMessage: '¡Hola AltoVisual! 👋 Me interesa el plan *Starter IA* ($1,200) para automatizar mi negocio.'
    },
    {
        name: 'Professional AI',
        description: 'El motor de tu crecimiento',
        price: '2,800',
        featured: true,
        features: [
            'Chatbots Multi-canal',
            'Workflows ilimitados',
            'Agentes de Voz (Beta)',
            'IA con acceso a APIs',
            'Entrenamiento continuo',
            'Soporte prioritario'
        ],
        cta: 'Más Popular',
        whatsappMessage: '¡Hola AltoVisual! 👋 Quiero el plan *Professional AI* ($2,800). Necesito IA y automatización avanzada.'
    },
    {
        name: 'Enterprise AI',
        description: 'Ecosistema inteligente total',
        price: 'Cotizar',
        features: [
            'Infraestructura Dedicada',
            'Modelos LLM Custom',
            'Seguridad Nivel Bancario',
            'Consultoría Estratégica',
            'SLA Garantizado',
            'Integraciones a medida'
        ],
        cta: 'Contactar',
        whatsappMessage: '¡Hola AltoVisual! 👋 Buscamos una solución *Enterprise AI* a medida para nuestra organización.'
    }
]

const faqs = [
    {
        question: '¿Qué herramientas utilizan para automatizar?',
        answer: 'Utilizamos las plataformas más robustas del mercado como n8n, Make (antiguo Integromat) y Zapier, además de desarrollo propio en Python/Node.js para integraciones personalizadas complejas.'
    },
    {
        question: '¿La IA puede cometer errores en las respuestas?',
        answer: 'Implementamos "guardrails" y sistemas de verificación para minimizar riesgos. Además, la IA se entrena específicamente con tus manuales y políticas para garantizar que la información sea siempre precisa.'
    },
    {
        question: '¿Se integra con mi CRM actual?',
        answer: 'Sí, podemos conectar la IA y las automatizaciones con casi cualquier CRM (Salesforce, HubSpot, Pipedrive, etc.) siempre que tengan una API disponible o soporte en nuestras plataformas de conexión.'
    },
    {
        question: '¿Cómo se entrena al chatbot?',
        answer: 'El entrenamiento se realiza subiendo tus documentos (PDF, Docx, FAQ) o conectando tu base de conocimientos. La IA procesa esta información y aprende a responder basándose únicamente en tus datos.'
    }
]

export default function AIAutomationPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServiceHero
                title="Inteligencia Artificial & Automatización"
                subtitle="AI & Automation"
                description="Delegue lo repetitivo a la IA. Optimice sus procesos y atienda a sus clientes a escala con tecnología de vanguardia."
                accentColor="#a855f7"
                secondaryColor="#ec4899"
                features={['AI Agents', 'n8n', 'WhatsApp Cloud API', 'Python', 'LLM Training', 'Custom Workflows']}
                icon={AI_ICON}
            />
            <ServiceFeatures
                title="Evoluciona tu flujo de trabajo"
                features={features}
                accentColor="#a855f7"
            />
            <ServicePricing
                title="Planes de IA & Automatización"
                subtitle="Inversión inteligente para un negocio escalable"
                plans={pricingPlans}
                accentColor="#a855f7"
            />
            <ServiceProcess
                steps={processSteps}
                accentColor="#a855f7"
            />
            <ServiceFAQ
                title="Preguntas frecuentes sobre IA"
                faqs={faqs}
            />
            <ServiceCTA
                title="¿Deseas una empresa más inteligente?"
                description="Hablemos sobre cómo la IA puede ahorrarte cientos de horas este año."
                accentColor="#a855f7"
            />
        </>
    )
}
