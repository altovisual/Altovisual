import { useState, useEffect } from 'react'
import { motion, useSpring, useTransform, animate } from 'framer-motion'
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
        base: 500,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
            </svg>
        )
    },
    {
        id: 'web',
        label: 'Desarrollo Web',
        base: 1200,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        )
    },
    {
        id: 'software',
        label: 'Software',
        base: 2500,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16,18 22,12 16,6" />
                <polyline points="8,6 2,12 8,18" />
                <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2,2" />
            </svg>
        )
    },
    {
        id: 'vfx',
        label: 'Video & VFX',
        base: 1000,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21 5,3" />
                <circle cx="12" cy="12" r="10" strokeDasharray="4,2" />
            </svg>
        )
    }
]

const complexities = [
    { id: 'simple', label: 'Básico', multiplier: 1, desc: 'Funcionalidad estándar' },
    { id: 'medium', label: 'Intermedio', multiplier: 1.5, desc: 'Funciones personalizadas' },
    { id: 'advanced', label: 'Avanzado', multiplier: 2.2, desc: 'Estructura compleja' },
    { id: 'enterprise', label: 'Enterprise', multiplier: 3.5, desc: 'Solución a gran escala' }
]

const urgencies = [
    { id: 'standard', label: 'Estándar', multiplier: 1, desc: '2-4 semanas' },
    { id: 'fast', label: 'Rápido', multiplier: 1.3, desc: '1-2 semanas' },
    { id: 'urgent', label: 'Urgente', multiplier: 1.6, desc: 'Menos de 1 semana' }
]

export default function QuoteCalculator() {
    const [selectedService, setSelectedService] = useState(services[1])
    const [selectedComplexity, setSelectedComplexity] = useState(complexities[0])
    const [selectedUrgency, setSelectedUrgency] = useState(urgencies[0])
    const [total, setTotal] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const basePrice = selectedService.base
        const complexityPrice = basePrice * (selectedComplexity.multiplier - 1)
        const subtotal = basePrice + complexityPrice
        const finalPrice = Math.round(subtotal * selectedUrgency.multiplier)
        setTotal(finalPrice)
    }, [selectedService, selectedComplexity, selectedUrgency])

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
                    <div className="calculator__content">
                        {/* Service Selection */}
                        <div className="calculator__section">
                            <h3 className="calculator__section-title">
                                <span className="calculator__section-number">1</span>
                                Selecciona el Servicio
                            </h3>
                            <div className="calculator__options calculator__options--services">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`calculator__option calculator__option--service ${selectedService.id === service.id ? 'active' : ''
                                            }`}
                                        onClick={() => setSelectedService(service)}
                                    >
                                        <div className="calculator__option-icon">{service.icon}</div>
                                        <span className="calculator__option-label">{service.label}</span>
                                        <span className="calculator__option-base">desde ${service.base}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Complexity Selection */}
                        <div className="calculator__section">
                            <h3 className="calculator__section-title">
                                <span className="calculator__section-number">2</span>
                                Complejidad del Proyecto
                            </h3>
                            <div className="calculator__options calculator__options--complexity">
                                {complexities.map((comp) => (
                                    <div
                                        key={comp.id}
                                        className={`calculator__option ${selectedComplexity.id === comp.id ? 'active' : ''}`}
                                        onClick={() => setSelectedComplexity(comp)}
                                    >
                                        <span className="calculator__option-label">{comp.label}</span>
                                        <span className="calculator__option-desc">{comp.desc}</span>
                                        <span className="calculator__option-multiplier">x{comp.multiplier}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Urgency Selection */}
                        <div className="calculator__section">
                            <h3 className="calculator__section-title">
                                <span className="calculator__section-number">3</span>
                                Tiempo de Entrega
                            </h3>
                            <div className="calculator__options calculator__options--urgency">
                                {urgencies.map((urg) => (
                                    <div
                                        key={urg.id}
                                        className={`calculator__option ${selectedUrgency.id === urg.id ? 'active' : ''}`}
                                        onClick={() => setSelectedUrgency(urg)}
                                    >
                                        <span className="calculator__option-label">{urg.label}</span>
                                        <span className="calculator__option-desc">{urg.desc}</span>
                                        {urg.multiplier > 1 && (
                                            <span className="calculator__option-rush">+{Math.round((urg.multiplier - 1) * 100)}%</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Price Panel */}
                    <div className="calculator__price-panel">
                        <div className="calculator__price-content">
                            <span className="calculator__price-label">Inversión Estimada</span>
                            <div className="calculator__price">
                                <span className="calculator__price-currency">$</span>
                                <AnimatedNumber value={total} />
                                <span className="calculator__price-suffix">+</span>
                            </div>
                            <p className="calculator__price-note">
                                * Este es un estimado inicial. El costo final dependerá de los requerimientos específicos.
                            </p>
                            <button
                                className="btn btn-primary calculator__cta"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Solicitar Cotización Formal
                            </button>
                        </div>

                        <div className="calculator__summary">
                            <h4>Resumen Informativo</h4>
                            <ul>
                                <li>
                                    <span>Servicio</span>
                                    <span>{selectedService.label}</span>
                                </li>
                                <li>
                                    <span>Complejidad</span>
                                    <span>{selectedComplexity.label}</span>
                                </li>
                                <li>
                                    <span>Prioridad</span>
                                    <span>{selectedUrgency.label}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                summary={{
                    service: selectedService.label,
                    complexity: selectedComplexity.label,
                    urgency: selectedUrgency.label,
                    total: total
                }}
            />
        </section>
    )
}
