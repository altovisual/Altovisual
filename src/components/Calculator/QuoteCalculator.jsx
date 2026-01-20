import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useSpring, useTransform, animate } from 'framer-motion'
import QuoteModal from './QuoteModal'
import GradientText from '../Common/GradientText'
import './QuoteCalculator.css'

function AnimatedNumber({ value }) {
    const spring = useSpring(value, {
        mass: 1,
        stiffness: 75,
        damping: 15
    });
    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
}

const services = [
    {
        id: 'design',
        label: 'Diseño Gráfico',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
            </svg>
        ),
        subServices: [
            { id: 'brand', label: 'Identidad de Marca', base: 400, desc: 'Naming, Logo, Paleta y Tipografía core.' },
            { id: 'uiux', label: 'UI/UX Design', base: 600, desc: 'Prototipos y diseño de interfaces de alta fidelidad.' },
            { id: 'print', label: 'Material Impreso', base: 250, desc: 'Brochures, Tarjetas y Papelería corporativa.' },
            { id: 'digital', label: 'Diseño Digital', base: 200, desc: 'Banners, RRSS y Ads optimizados.' },
            { id: 'guidelines', label: 'Brand Guidelines', base: 450, desc: 'Manual de marca completo para todo nivel.' },
            { id: 'consulting', label: 'Consultoría Visual', base: 300, desc: 'Auditoría y estrategia de comunicación visual.' },
            { id: 'custom', label: 'Otro / Personalizado', base: 0, isCustom: true, desc: 'Cuéntanos tu idea y la hacemos realidad.' }
        ]
    },
    {
        id: 'web',
        label: 'Desarrollo Web',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        subServices: [
            { id: 'landing', label: 'Landing Page', base: 800, desc: 'Página única enfocada 100% en la conversión.' },
            { id: 'ecommerce', label: 'E-commerce', base: 1800, desc: 'Tienda online completa con pasarela de pagos.' },
            { id: 'web-app', label: 'Aplicación Web', base: 2500, desc: 'Software en la nube con funciones a medida.' },
            { id: 'cms', label: 'CMS Custom', base: 1200, desc: 'Gestor de contenido intuitivo para tu equipo.' },
            { id: 'custom', label: 'Otro / Personalizado', base: 0, isCustom: true, desc: 'Necesidades web específicas para tu negocio.' }
        ]
    },
    {
        id: 'software',
        label: 'Software',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16,18 22,12 16,6" />
                <polyline points="8,6 2,12 8,18" />
                <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2,2" />
            </svg>
        ),
        subServices: [
            { id: 'saas', label: 'SaaS / MicroSaaS', base: 5000, desc: 'Producto de software escalable basado en suscripción.' },
            { id: 'admin-panel', label: 'Panel Admin', base: 3500, desc: 'Sistema centralizado para control de operaciones.' },
            { id: 'api-inv', label: 'Integraciones API', base: 1500, desc: 'Conexión entre sistemas y flujo de datos.' },
            { id: 'crm-auto', label: 'Automatización CRM', base: 2000, desc: 'Optimización de relaciones y ventas digitales.' },
            { id: 'custom', label: 'Otro / Personalizado', base: 0, isCustom: true, desc: 'Arquitectura de software de alto nivel.' }
        ]
    },
    {
        id: 'vfx',
        label: 'Video & VFX',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21 5,3" />
                <circle cx="12" cy="12" r="10" strokeDasharray="4,2" />
            </svg>
        ),
        subServices: [
            { id: 'motion', label: 'Motion Graphics', base: 1000, desc: 'Animaciones vectoriales 2D para comerciales.' },
            { id: 'vfx-special', label: 'Especial VFX', base: 1500, desc: 'Efectos visuales cinematográficos e integración.' },
            { id: 'video-edit', label: 'Edición Pro', base: 600, desc: 'Corte, color y post-producción profesional.' },
            { id: 'anim-3d', label: 'Animación 3D', base: 2500, desc: 'Modelado y animación 3D de alta complejidad.' },
            { id: 'custom', label: 'Otro / Personalizado', base: 0, isCustom: true, desc: 'Producción audiovisual de impacto global.' }
        ]
    },
    {
        id: 'ia',
        label: 'IA & Automatización',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            </svg>
        ),
        subServices: [
            { id: 'chatbot', label: 'Chatbots IA', base: 1200, desc: 'Atención al cliente 24/7 con IA personalizada.' },
            { id: 'flows', label: 'Automatización Workflows', base: 1000, desc: 'Elimina tareas repetitivas en tu flujo diario.' },
            { id: 'voice-agents', label: 'Agentes de Voz', base: 2000, desc: 'IA que habla y entiende como un experto humano.' },
            { id: 'custom', label: 'Otro / Personalizado', base: 0, isCustom: true, desc: 'Soluciones de inteligencia artificial avanzada.' }
        ]
    }
]

const complexities = [
    {
        id: 'simple',
        label: 'Básico',
        multiplier: 1,
        desc: 'Funciones esenciales'
    },
    {
        id: 'medium',
        label: 'Intermedio',
        multiplier: 1.5,
        desc: 'Para negocios en crecimiento'
    },
    {
        id: 'advanced',
        label: 'Avanzado',
        multiplier: 2.2,
        desc: 'Sistemas complejos'
    },
    {
        id: 'enterprise',
        label: 'Enterprise',
        multiplier: 3.5,
        desc: 'Escala global'
    }
]

const serviceFeatures = {
    // Diseño Gráfico
    brand: {
        simple: ['Logotipo Core', 'Paleta de Colores', 'Tipografía Principal', '2 Revisiones'],
        medium: ['Manual de Marca Pro', 'Papelería Básica', 'Assets Redes Sociales', '5 Revisiones'],
        advanced: ['Sistema Visual Full', 'Estrategia de Marca', 'Ilustraciones Custom', 'Revisiones Ilimitadas'],
        enterprise: ['Brand Experience System', 'Motion Branding', 'Consultoría Senior', 'Soporte VIP']
    },
    uiux: {
        simple: ['Wireframes Low-Fi', 'Prototipo Estático', 'UI Kit Básico', '2 Rondas de Feedback'],
        medium: ['Prototipo Interactivo', 'Diseño Responsive Pro', 'Sistema de Diseño', 'Pruebas de Usuario'],
        advanced: ['Producto Web/Mobile Full', 'Micro-interacciones', 'Audit de Usabilidad', 'Soporte Dev Handover'],
        enterprise: ['Design System Escalable', 'UX Research Profundo', 'Estrategia de Producto', 'Mantenimiento Mensual']
    },
    print: {
        simple: ['Diseño de Tarjetas', 'Flyer Estándar', 'Formato para Impresión', '1 Revisión'],
        medium: ['Brochure Corporativo', 'Packaging Básico', 'Señalética', '3 Revisiones'],
        advanced: ['Catálogo Completo', 'Stand para Eventos', 'Troquelados Especiales', 'Gestión con Imprenta'],
        enterprise: ['Branding Editorial Full', 'Packaging Premium', 'Campañas OOH', 'Control de Calidad']
    },
    digital: {
        simple: ['Banners Estáticos', 'Post para Feed', 'Optimización Web', 'Kits de Tamaño'],
        medium: ['Animaciones para RRSS', 'Diseño de Newsletter', 'Ads para Campañas', 'Filtros Básicos'],
        advanced: ['Contenido Dinámico', 'Campaña Multimedia', 'Interactive Ads', 'Asset Management'],
        enterprise: ['Content Strategy IA', 'Video Marketing', 'Automatización Ads', 'Performance Design']
    },
    guidelines: {
        simple: ['Manual de Uso Logo', 'Grilla Constructiva', 'Reglas de Aplicación', 'PDF Digital'],
        medium: ['Guía de Estilo Full', 'Tono de Voz', 'Iconografía Custom', 'Assets Listos'],
        advanced: ['Brand Center Web', 'Patterns y Texturas', 'Guía de Componentes', 'Actualizaciones'],
        enterprise: ['Ecosistema de Marca', 'Estrategia de Activos', 'Training de Equipo', 'Cloud Guidelines']
    },
    consulting: {
        simple: ['Auditoría de Logo', 'Checklist Visual', 'Reporte de Errores', 'Recomendaciones'],
        medium: ['Análisis de Competencia', 'Estrategia de Imagen', 'Workshop de Marca', 'Roadmap de Mejora'],
        advanced: ['Rebranding Strategy', 'Posicionamiento Visual', 'Dirección de Arte', 'Consultoría 3 meses'],
        enterprise: ['CMO as a Service', 'Gestión de Identidad', 'Expansión de Marca', 'Partner Estratégico']
    },

    // Desarrollo Web
    landing: {
        simple: ['Landing One-Page', 'Copywriting Básico', 'Formulario Directo', 'Diseño Mobile-First'],
        medium: ['A/B Testing Básico', 'SEO Local Optimizado', 'Lead Magnets', 'Animaciones de Entrada'],
        advanced: ['Funnel de Ventas Full', 'Carga Ultra-Rápida', 'Integración CRM', 'Analytics Avanzado'],
        enterprise: ['Estrategia de Conversión', 'Páginas Dinámicas', 'Soporte 24/7', 'Escalabilidad']
    },
    ecommerce: {
        simple: ['Tienda hasta 20 items', 'Carrito Estándar', 'Checkout Seguro', 'Panel de Control'],
        medium: ['Gestión de Stock Pro', 'Múltiples Pasarelas', 'Reviews de Clientes', 'Cupones y Descuentos'],
        advanced: ['Suscripciones/Membresías', 'Dropshipping Tools', 'UX de Compra Pro', 'Marketing Automation'],
        enterprise: ['Marketplace Multi-vendor', 'ERP Integration', 'Omnicanalidad', 'Soporte Enterprise']
    },
    'web-app': {
        simple: ['Funciones CRUD', 'Autenticación Básica', 'Dashboard Simple', 'Stack Moderno'],
        medium: ['Roles de Usuario', 'Filtros Avanzados', 'Notificaciones Email', 'API Integrada'],
        advanced: ['Real-time Updates', 'Procesamiento Pesado', 'App Offline-ready', 'Arquitectura Cloud'],
        enterprise: ['SaaS Multi-tenant', 'Infraestructura Auto-scale', 'Security Audit', 'Partner Dev']
    },
    cms: {
        simple: ['Personalización Temas', 'Editor de Contenido', 'Gestión de Media', 'SEO Plugin'],
        medium: ['Campos Personalizados', 'Workflows de Review', 'Multi-idioma Básico', 'Optimización Auto'],
        advanced: ['Headless CMS Prep', 'Integración Externa', 'Backup Automático', 'Soporte Técnico'],
        enterprise: ['Ecosistema Web Pro', 'Migración de Datos', 'Seguridad Bancaria', 'Training Staff']
    },

    // Software
    saas: {
        simple: ['Arquitectura Multi-tenant', 'Suscripciones Stripe', 'Panel Cliente Core', 'Onboarding'],
        medium: ['Métricas de Negocio', 'Free/Premium Toggles', 'Gestión de Equipos', 'Support Ticketing'],
        advanced: ['White Label Options', 'API para Clientes', 'Integraciones Terceros', 'Data Analytics'],
        enterprise: ['Product-Led Growth', 'Custom SLAs', 'On-premise Options', 'Priority Dev Team']
    },
    'admin-panel': {
        simple: ['Gestión de Entidades', 'Gráficos de Resumen', 'Exportaciones CSV', 'Audit Logs'],
        medium: ['Reportes PDF Auto', 'Dashboards Visuales', 'Workflows de Aprobación', 'UI/UX Eficiente'],
        advanced: ['Automatización Procesos', 'Predicciones con Data', 'Firma Electrónica', 'Sincronización App'],
        enterprise: ['Central de Operaciones', 'Misión Crítica Setup', 'ISO Compliance Ready', 'Soporte Dedicado']
    },
    'api-inv': {
        simple: ['Endpoint Development', 'Docs con Swagger', 'Auth con JWT', 'Testing Suite'],
        medium: ['Webhooks System', 'Rate Limiting', 'Caching Avanzado', 'Logging Centralizado'],
        advanced: ['Microservicios Setup', 'Event-driven Arch', 'Serverless Functions', 'SDK Generation'],
        enterprise: ['Ecosistema API Full', 'High-Availability', 'Seguridad Militar', 'Maintenance Pro']
    },
    'crm-auto': {
        simple: ['Captura de Leads', 'Historias de Usuario', 'Campos a Medida', 'Alertas Email'],
        medium: ['Lead Scoring', 'Auto-responders Pro', 'Pipelines Visuales', 'Integración Social'],
        advanced: ['Predicción de Ventas', 'Omnichannel CRM', 'Bot Predictivo', 'Automatización Full'],
        enterprise: ['Sales Ops Engine', 'Migración Completa', 'Consultoría CRM', 'Escala Global']
    },

    // VFX
    motion: {
        simple: ['Animación 2D Logos', 'Lower Thirds', 'Transiciones Pro', 'Full HD Output'],
        medium: ['Explainer Video 60s', 'Character Animation', 'Sound Design Integrado', '4K Output'],
        advanced: ['Storytelling Visual', 'Simulaciones Físicas', 'Animación Kinética', 'Formatos Verticales'],
        enterprise: ['Campaña Motion Full', 'Estilo Artístico Único', 'Iteraciones Pro', 'Broadcast Ready']
    },
    'vfx-special': {
        simple: ['Green Screen Removal', 'Color Correction', 'Clean Plates', 'Roto Estándar'],
        medium: ['Composición 3D', 'Partículas y Efectos', 'Matchmoving', 'Cinematic Look'],
        advanced: ['Simulaciones Complejas', 'Integración CGI Pro', 'Digital Matte Painting', 'Efectos Dinámicos'],
        enterprise: ['Movie Quality VFX', 'Supervisión en Set', 'Render Farm Access', 'Finish Pro']
    },
    'video-edit': {
        simple: ['Corte y Ritmo', 'Corrección de Color', 'Títulos Básicos', 'Música Stock'],
        medium: ['Narrativa Visual', 'Audio Mixing Pro', 'Color Grading Pro', 'Multi-cam Edit'],
        advanced: ['Edición Documental', 'Efectos de Sonido', 'Dynamic Graphics', 'Masterización'],
        enterprise: ['Producción de Spot', 'Director Cut Style', 'Derechos Música', 'High-End Master']
    },
    'anim-3d': {
        simple: ['Modelado de Producto', 'Texturizado Básico', 'Iluminación Studio', 'Render Still'],
        medium: ['Animación Producto', 'Mecanismos 3D', 'Materiales Realistas', 'Video 360'],
        advanced: ['Entornos 3D Full', 'Dinámicas de Fluido', 'Rigging Complejo', 'Cotor Pro'],
        enterprise: ['Experiencia Inmersiva', 'CGI Cinematográfico', 'Optimización Real-time', 'Asset Library']
    },

    // IA
    chatbot: {
        simple: ['Base de Conocimientos', 'Respuestas Naturales', 'Canal Web/WhatsApp', 'Setup Básico'],
        medium: ['Entrenamiento Custom', 'Captura de Datos', 'Flujos de Venta', 'Analytics Dashboard'],
        advanced: ['Integración API Pro', 'Voice-to-Text', 'Memoria de Contexto', 'Soporte Multi-bot'],
        enterprise: ['Estrategia IA Corp', 'Sistemas RAG Full', 'Seguridad On-premise', 'Soporte 24/7']
    },
    flows: {
        simple: ['Conexión No-Code', 'Triggers de Email', 'Sync de Datos', 'Reportes Diarios'],
        medium: ['Workflows Condicionales', 'Webhooks Integration', 'Transformación Data', 'Control de Error'],
        advanced: ['Arquitectura Low-Code', 'Agentes Multi-paso', 'Notificaciones App', 'Custom Scripts'],
        enterprise: ['Automación de Negocio', 'Centro de Operaciones', 'Compliance & Security', 'Maintenance']
    },
    'voice-agents': {
        simple: ['Voz Natural Estándar', 'Scripts de Atención', 'Clonación de Voz', 'Latencia Baja'],
        medium: ['Voz con Emociones', 'Detección de Intención', 'Transferencia Humana', 'Grabación de Calls'],
        advanced: ['Sistemas de Telefonía', 'Multilenguaje Real', 'IA Conversacional Pro', 'API Voice Sync'],
        enterprise: ['Call Center IA Full', 'Training Personalizado', 'Analítica de Voz', 'Infraestructura VIP']
    },

    // Custom para todas las categorías
    custom: {
        simple: ['Análisis de Requerimientos', 'Presupuesto Base', 'Consultoría Inicial', 'Plan de Proyecto'],
        medium: ['Diseño a Medida', 'Desarrollo Ágil', 'Revisiones de Avance', 'Soporte Post-entrega'],
        advanced: ['Arquitectura Full Custom', 'Tecnología Exclusiva', 'Garantía de Calidad', 'Optimización'],
        enterprise: ['Partner Estratégico', 'Equipo Dedicado', 'Escalabilidad Total', 'Acuerdo de Nivel']
    }
}

const urgencies = [
    { id: 'standard', label: 'Estándar', multiplier: 1, desc: 'Tiempos normales de estudio' },
    { id: 'fast', label: 'Rápido', multiplier: 1.3, desc: 'Prioridad alta en el roadmap' },
    { id: 'urgent', label: 'Urgente', multiplier: 1.6, desc: 'Entrega Flash / Deadline crítico' }
]

export default function QuoteCalculator() {
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedService, setSelectedService] = useState(services[0])
    const [selectedSubService, setSelectedSubService] = useState(services[0].subServices[0])
    const [selectedComplexity, setSelectedComplexity] = useState(complexities[0])
    const [selectedUrgency, setSelectedUrgency] = useState(urgencies[0])
    const [total, setTotal] = useState(0)
    const [isIdling, setIsIdling] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const steps = [
        { id: 1, label: 'Categoría' },
        { id: 2, label: 'Servicio' },
        { id: 3, label: 'Detalles' }
    ]

    // Al cambiar la categoría, reseteamos el sub-servicio
    useEffect(() => {
        setSelectedSubService(selectedService.subServices[0])
    }, [selectedService])

    useEffect(() => {
        if (selectedSubService.base === 0) {
            setTotal(0)
            setIsIdling(true)
            return
        }
        setIsIdling(false)
        const basePrice = selectedSubService.base
        const complexityPrice = basePrice * (selectedComplexity.multiplier - 1)
        const subtotal = basePrice + complexityPrice
        const finalPrice = Math.round(subtotal * selectedUrgency.multiplier)
        setTotal(finalPrice)
    }, [selectedSubService, selectedComplexity, selectedUrgency])

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

    return (
        <section id="cotizar" className="calculator section">
            <div className="container">
                <div className="calculator__header">
                    <span className="calculator__label">The Magic Quote</span>
                    <h2 className="calculator__title">
                        <GradientText
                            colors={["#ffffff", "#cbd5e1", "#94a3b8", "#cbd5e1", "#ffffff"]}
                            animationSpeed={6}
                            showBorder={false}
                        >
                            Calcula tu Inversión
                        </GradientText>
                    </h2>
                    <p className="calculator__subtitle">
                        Obtén un estimado instantáneo para tu próximo proyecto.
                    </p>
                </div>

                <div className="calculator__wrapper glass">
                    <div className="calculator__sidebar">
                        {/* Stepper Indicator */}
                        <div className="calculator__stepper">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={`calculator__step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                                >
                                    <span className="calculator__step-number">
                                        {currentStep > step.id ? '✓' : step.id}
                                    </span>
                                    <span className="calculator__step-label">{step.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Summary mini-view (only if we've selected something) */}
                        <div className="calculator__sidebar-summary">
                            <span className="calculator__sidebar-label">Resumen actual</span>
                            <div className="calculator__sidebar-data">
                                <div>
                                    <span className="label">Categoría:</span>
                                    <span className="value">{selectedService.label}</span>
                                </div>
                                {currentStep > 1 && (
                                    <div>
                                        <span className="label">Servicio:</span>
                                        <span className="value">{selectedSubService.label}</span>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <>
                                        <div>
                                            <span className="label">Complejidad:</span>
                                            <span className="value">{selectedComplexity.label}</span>
                                        </div>
                                        <div>
                                            <span className="label">Entrega:</span>
                                            <span className="value">{selectedUrgency.label}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="calculator__sidebar-price">
                            <span className="calculator__price-label">Inversión Estimada</span>
                            <div className="calculator__price">
                                {isIdling ? (
                                    <span className="calculator__price-variable">A convenir</span>
                                ) : (
                                    <>
                                        <span className="calculator__price-currency">$</span>
                                        <AnimatedNumber value={total} />
                                        <span className="calculator__price-suffix">+</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="calculator__main">
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="calculator__step"
                                >
                                    <h3 className="calculator__step-title">¿En qué área quieres impactar?</h3>
                                    <div className="calculator__options calculator__options--services">
                                        {services.map((service) => (
                                            <div
                                                key={service.id}
                                                className={`calculator__option calculator__option--service ${selectedService.id === service.id ? 'active' : ''}`}
                                                onClick={() => setSelectedService(service)}
                                            >
                                                <div className="calculator__option-icon">{service.icon}</div>
                                                <span className="calculator__option-label">{service.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="calculator__actions--nav">
                                        <button className="btn btn-primary" onClick={nextStep}>Continuar</button>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="calculator__step"
                                >
                                    <h3 className="calculator__step-title">
                                        Define el servicio de <span className="highlight">{selectedService.label}</span>
                                    </h3>
                                    <div className="calculator__options calculator__options--subservices">
                                        {selectedService.subServices.map((sub) => (
                                            <div
                                                key={sub.id}
                                                className={`calculator__option calculator__option--subservice ${selectedSubService.id === sub.id ? 'active' : ''}`}
                                                onClick={() => setSelectedSubService(sub)}
                                            >
                                                <div className="calculator__option-header">
                                                    <span className="calculator__option-label">{sub.label}</span>
                                                    <div className="calculator__category-mini-icon">
                                                        {selectedService.icon}
                                                    </div>
                                                </div>
                                                <p className="calculator__option-desc">{sub.desc}</p>
                                                {!sub.isCustom && <span className="calculator__option-base">Base: ${sub.base}</span>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="calculator__actions--nav">
                                        <button className="btn btn-secondary" onClick={prevStep}>Atrás</button>
                                        <button className="btn btn-primary" onClick={nextStep}>Continuar</button>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="calculator__step"
                                >
                                    <h3 className="calculator__step-title">Ajusta los detalles finales</h3>

                                    <div className="calculator__details-grid">
                                        <div className="calculator__detail-section">
                                            <h4 className="detail-title">Complejidad</h4>
                                            <div className="complexity-cards">
                                                {complexities.map((comp) => (
                                                    <div
                                                        key={comp.id}
                                                        className={`complexity-card ${selectedComplexity.id === comp.id ? 'active' : ''}`}
                                                        onClick={() => setSelectedComplexity(comp)}
                                                    >
                                                        <div className="complexity-card__header">
                                                            <span className="label">{comp.label}</span>
                                                            <span className="multiplier">x{comp.multiplier}</span>
                                                        </div>
                                                        <p className="complexity-card__desc">{comp.desc}</p>
                                                        <ul className="complexity-card__features">
                                                            {(serviceFeatures[selectedSubService.id] || serviceFeatures.custom)[comp.id].map((f, i) => (
                                                                <li key={i}>
                                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                    {f}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="calculator__detail-section">
                                            <h4 className="detail-title">Prioridad de Entrega</h4>
                                            <div className="urgency-selector">
                                                {urgencies.map((urg) => (
                                                    <div
                                                        key={urg.id}
                                                        className={`urgency-option ${selectedUrgency.id === urg.id ? 'active' : ''}`}
                                                        onClick={() => setSelectedUrgency(urg)}
                                                    >
                                                        <div className="urgency-option__info">
                                                            <span className="label">{urg.label}</span>
                                                            <span className="desc">{urg.desc}</span>
                                                        </div>
                                                        {urg.multiplier > 1 && (
                                                            <span className="rush">+{Math.round((urg.multiplier - 1) * 100)}%</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="calculator__actions--nav final">
                                        <button className="btn btn-secondary" onClick={prevStep}>Atrás</button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            {isIdling ? 'Consultar Ahora' : 'Solicitar Cotización Formal'}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                summary={{
                    service: `${selectedService.label} - ${selectedSubService.label}`,
                    complexity: selectedComplexity.label,
                    urgency: selectedUrgency.label,
                    total: isIdling ? 'A convenir' : total
                }}
            />
        </section>
    )
}
