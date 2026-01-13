import { useEffect } from 'react'
import ServiceHero from '../components/ServicePage/ServiceHero'
import ServiceFeatures from '../components/ServicePage/ServiceFeatures'
import ServiceProcess from '../components/ServicePage/ServiceProcess'
import ServicePricing from '../components/ServicePage/ServicePricing'
import ServiceFAQ from '../components/ServicePage/ServiceFAQ'
import ServiceCTA from '../components/ServicePage/ServiceCTA'
import softwareAsset from '../assets/abstract/software.png'

const SOFTWARE_ICON = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
    </svg>
)

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: 'SaaS',
        tag: 'Escalabilidad',
        description: 'Plataformas software como servicio escalables con modelo de suscripción y multi-tenancy.',
        longDescription: 'Desarrollamos ecosistemas de software robustos bajo el modelo SaaS. Nos encargamos de toda la complejidad técnica: desde la arquitectura multi-inquilino hasta sistemas de facturación recurrente automatizados.',
        includes: [
            'Arquitectura Multi-tenancy',
            'Sistemas de Suscripción (Stripe)',
            'Infraestructura Serverless',
            'Paneles de Usuario y Admin',
            'API de Integración Pública',
            'Backups Automáticos Diarios'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        title: 'APIs & Backend',
        tag: 'Conectividad',
        description: 'Desarrollo de APIs RESTful y GraphQL, microservicios y arquitecturas serverless.',
        longDescription: 'Construimos el motor que impulsa tu negocio. Backend de alto rendimiento diseñado para procesar grandes volúmenes de datos con latencia mínima, garantizando una base sólida para cualquier frontend.',
        includes: [
            'Desarrollo RESTful / GraphQL',
            'Gestión de Base de Datos SQL/NoSQL',
            'Webhooks de Tiempo Real',
            'Documentación con Swagger/Postman',
            'Rate Limiting & Throttling',
            'Seguridad JWT & OAuth2'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        title: 'Dashboards',
        tag: 'Visibilidad',
        description: 'Paneles administrativos con visualización de datos en tiempo real y reportes avanzados.',
        longDescription: 'Transformamos datos complejos en decisiones inteligentes. Diseñamos centros de comando visuales que te permiten monitorear cada KPI de tu negocio en tiempo real con gráficos dinámicos e intuitivos.',
        includes: [
            'Visualización de Datos (D3, ChartJS)',
            'Filtros de Datos Avanzados',
            'Exportación de Reportes (PDF/CSV)',
            'Sincronización en Tiempo Real',
            'Modo Oscuro/Claro Nativo',
            'Widgets Personalizables'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 20V10" />
                <path d="M12 20V4" />
                <path d="M6 20v-6" />
            </svg>
        ),
        title: 'Automatización',
        tag: 'Eficiencia',
        description: 'Flujos de trabajo automatizados, integraciones con terceros y bots personalizados.',
        longDescription: 'Eliminamos las tareas repetitivas de tu día a día. Creamos puentes inteligentes entre todas las herramientas que ya usas para que la información fluya sin intervención humana, ahorrando tiempo y dinero.',
        includes: [
            'Integraciones con Zapier/Make',
            'Bots de Notificación (Slack/WA)',
            'Scripts de Procesamiento Masivo',
            'ETL (Extract, Transform, Load)',
            'RPA (Robotic Process Automation)',
            'Auditoría de Flujos'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Seguridad',
        tag: 'Protección',
        description: 'Implementación de mejores prácticas de seguridad, autenticación y autorización.',
        longDescription: 'Tu software es tu activo más valioso, y lo protegemos como tal. Aplicamos múltiples capas de defensa para garantizar la integridad de tus datos y la privacidad de tus usuarios bajo estándares internacionales.',
        includes: [
            'Encriptación End-to-End',
            'Autenticación Multi-Factor (MFA)',
            'Pruebas de Penetración Básicas',
            'Cumplimiento GDPR / Privacidad',
            'Monitoreo de Amenazas 24/7',
            'Sanitización de Datos'
        ]
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
        ),
        title: 'CI/CD & DevOps',
        tag: 'Agilidad',
        description: 'Pipelines de integración continua, infraestructura como código y deployment automatizado.',
        longDescription: 'Aceleramos tu ciclo de innovación. Configuramos entornos de desarrollo que permiten desplegar nuevas funcionalidades de forma rápida, segura y sin interrumpir el servicio a tus usuarios finales.',
        includes: [
            'Pipelines con GitHub Actions',
            'Contenedores Docker/K8s',
            'Escalado Automático Cloud',
            'Infraestructura como Código',
            'Ambientes Stage/Prod',
            'Logging Centralizado (ELK)'
        ]
    }
]

const processSteps = [
    {
        title: 'Análisis',
        description: 'Levantamiento de requerimientos, definición de alcance y arquitectura técnica.'
    },
    {
        title: 'Prototipado',
        description: 'MVP funcional para validar el concepto antes de la implementación completa.'
    },
    {
        title: 'Desarrollo Ágil',
        description: 'Sprints de desarrollo con entregas incrementales y feedback continuo.'
    },
    {
        title: 'Deploy & Soporte',
        description: 'Despliegue en producción, monitoreo y mantenimiento continuo.'
    }
]

const pricingPlans = [
    {
        name: 'MVP Starter',
        description: 'Valida tu idea rápidamente',
        price: '5,000',
        features: [
            'Prototipo funcional',
            'Hasta 5 pantallas',
            'Base de datos básica',
            'Autenticación de usuarios',
            '1 integración externa',
            'Deploy en cloud'
        ],
        cta: 'Comenzar'
    },
    {
        name: 'SaaS Pro',
        description: 'Tu plataforma escalable',
        price: '15,000',
        featured: true,
        features: [
            'Aplicación completa',
            'Multi-tenancy',
            'Panel de administración',
            'APIs documentadas',
            'Testing automatizado',
            'Soporte 6 meses'
        ],
        cta: 'Más Popular'
    },
    {
        name: 'Enterprise',
        description: 'Soluciones a gran escala',
        price: 'Cotizar',
        features: [
            'Arquitectura distribuida',
            'Alta disponibilidad',
            'Seguridad avanzada',
            'Integraciones ilimitadas',
            'SLA garantizado',
            'Equipo dedicado'
        ],
        cta: 'Contactar'
    }
]

const faqs = [
    {
        question: '¿Cuánto tiempo toma desarrollar un MVP?',
        answer: 'Un MVP típico puede desarrollarse en 4-8 semanas dependiendo de la complejidad. Durante la fase de análisis definimos el alcance adecuado para validar tu idea en el menor tiempo posible.'
    },
    {
        question: '¿Qué pasa después de entregar el software?',
        answer: 'Ofrecemos planes de mantenimiento y evolución continua. Esto incluye corrección de bugs, actualizaciones de seguridad, nuevas funcionalidades y soporte técnico. Tu software seguirá creciendo contigo.'
    },
    {
        question: '¿Trabajan con metodologías ágiles?',
        answer: 'Sí, utilizamos Scrum o Kanban según el proyecto. Esto significa sprints cortos, demos frecuentes y la flexibilidad de ajustar prioridades según los aprendizajes del mercado.'
    },
    {
        question: '¿Puedo escalar el equipo si mi proyecto crece?',
        answer: 'Absolutamente. Podemos aumentar el equipo de desarrollo en cualquier momento. También documentamos todo para facilitar la incorporación de nuevos desarrolladores, ya sean nuestros o tuyos.'
    },
    {
        question: '¿El código es de mi propiedad?',
        answer: 'Sí, al completar el proyecto recibes la propiedad total del código fuente, incluyendo acceso al repositorio, documentación técnica y guías de despliegue.'
    },
    {
        question: '¿Qué tecnologías recomiendan?',
        answer: 'Elegimos la mejor tecnología para cada caso: Node.js, Python, Go para backend; React, Next.js para frontend; PostgreSQL, MongoDB para bases de datos; y AWS, GCP o Azure para infraestructura.'
    }
]

export default function SoftwarePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServiceHero
                title="Software a Medida que Escala"
                subtitle="Software Development"
                description="Soluciones de software personalizadas que resuelven problemas complejos y crecen con tu negocio."
                accentColor="#a855f7"
                secondaryColor="#6366f1"
                features={['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes']}
                icon={SOFTWARE_ICON}
            />
            <ServiceFeatures
                title="Nuestras especialidades"
                features={features}
                accentColor="#a855f7"
            />
            <ServicePricing
                title="Planes de Software"
                subtitle="Desde MVPs hasta sistemas empresariales"
                plans={pricingPlans}
                accentColor="#a855f7"
            />
            <ServiceProcess
                steps={processSteps}
                accentColor="#a855f7"
            />
            <ServiceFAQ
                title="Preguntas sobre Desarrollo de Software"
                faqs={faqs}
            />
            <ServiceCTA
                title="¿Tienes una idea que necesita software?"
                description="Transformemos tu visión en una aplicación robusta y escalable."
                accentColor="#a855f7"
            />
        </>
    )
}

