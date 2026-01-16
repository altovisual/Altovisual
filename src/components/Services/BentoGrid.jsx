import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TiltedCard from '../Common/TiltedCard'
import './BentoGrid.css'

const services = [
    {
        id: 'design',
        title: 'Diseño Gráfico',
        description: 'Identidad visual, branding y materiales de marketing que capturan la esencia de tu marca.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
            </svg>
        ),
        features: ['Branding', 'UI/UX', 'Print', 'Social Media'],
        accent: '#00f2fe',
        size: 'large',
        path: '/servicios/diseno'
    },
    {
        id: 'web',
        title: 'Desarrollo Web',
        description: 'Sitios web modernos, rápidos y optimizados para conversión.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        features: ['Landing Pages', 'E-commerce', 'Apps Web', 'CMS'],
        accent: '#4facfe',
        size: 'medium',
        path: '/servicios/web'
    },
    {
        id: 'software',
        title: 'Software',
        description: 'Soluciones a medida: SaaS, paneles administrativos y aplicaciones robustas.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16,18 22,12 16,6" />
                <polyline points="8,6 2,12 8,18" />
                <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2,2" />
            </svg>
        ),
        features: ['SaaS', 'APIs', 'Dashboards', 'Integraciones'],
        accent: '#a855f7',
        size: 'medium',
        path: '/servicios/software'
    },
    {
        id: 'ai',
        title: 'IA & Automatización',
        description: 'Chatbots inteligentes y flujos de trabajo automatizados para escalar tu negocio.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
            </svg>
        ),
        features: ['Agentes IA', 'n8n Workflows', 'Chatbots', 'Automatización'],
        accent: '#ec4899',
        size: 'large',
        path: '/servicios/ia-automatizacion'
    },
    {
        id: 'vfx',
        title: 'Video & VFX',
        description: 'Producción audiovisual, motion graphics y efectos visuales de impacto.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5,3 19,12 5,21 5,3" />
                <circle cx="12" cy="12" r="10" strokeDasharray="4,2" />
            </svg>
        ),
        features: ['Motion Graphics', 'VFX', 'Edición', 'Animación 3D'],
        accent: '#f97316',
        size: 'large',
        path: '/servicios/vfx'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export default function BentoGrid() {
    return (
        <section id="servicios" className="bento section">
            <div className="container">
                <motion.div
                    className="bento__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="bento__label">Nuestros Servicios</span>
                    <h2 className="bento__title">
                        Todo lo que necesitas,{' '}
                        <span className="gradient-text">en un solo lugar</span>
                    </h2>
                    <p className="bento__subtitle">
                        Desde el concepto inicial hasta la ejecución final, cubrimos cada aspecto de tu presencia digital.
                    </p>
                </motion.div>

                <motion.div
                    className="bento__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.article
                            key={service.id}
                            className={`bento__card bento__card--${service.size}`}
                            variants={itemVariants}
                            style={{ '--accent': service.accent }}
                        >
                            <TiltedCard
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={true}
                                captionText={service.title}
                                displayOverlayContent={false}
                            >
                                <Link to={service.path} className="bento__card-link">
                                    <div className="bento__card-glow" />

                                    <div className="bento__card-icon">
                                        {service.icon}
                                    </div>

                                    <h3 className="bento__card-title">{service.title}</h3>
                                    <p className="bento__card-description">{service.description}</p>

                                    <ul className="bento__card-features">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="bento__card-feature">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)">
                                                    <circle cx="12" cy="12" r="4" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bento__card-cta">
                                        <div className="bento__card-cta-inner">
                                            <span>Explorar</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </TiltedCard>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
