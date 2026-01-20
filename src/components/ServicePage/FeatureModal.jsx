import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import StarBorder from '../Common/StarBorder'
import './FeatureModal.css'

export default function FeatureModal({ isOpen, onClose, feature, accentColor = '#00f2fe' }) {
    const modalRef = useRef(null)

    // Lógica 3D Tilt
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

    const handleMouseMove = (e) => {
        if (!modalRef.current) return
        const rect = modalRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    if (!feature) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="feature-modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        ref={modalRef}
                        className="feature-modal glass"
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            '--accent': accentColor
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="feature-modal__close" onClick={onClose}>×</button>

                        <div className="feature-modal__header">
                            <div className="feature-modal__icon" style={{ background: `${accentColor}15` }}>
                                {feature.icon}
                            </div>
                            <h2 className="feature-modal__title">{feature.title}</h2>
                            <p className="feature-modal__tagline">{feature.tag || "Detalles del Servicio"}</p>
                        </div>

                        <div className="feature-modal__content">
                            <div className="feature-modal__description">
                                <h3>Descripción</h3>
                                <p>{feature.longDescription || feature.description}</p>
                            </div>

                            {feature.includes && feature.includes.length > 0 && (
                                <div className="feature-modal__includes">
                                    <h3>¿Qué incluye?</h3>
                                    <ul className="feature-modal__list">
                                        {feature.includes.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * index }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="3">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="feature-modal__actions">
                            <StarBorder
                                as="button"
                                color={accentColor}
                                speed="4s"
                                className="feature-modal__cta feature-modal__cta--primary"
                                onClick={() => {
                                    const message = `¡Hola AltoVisual! 👋 Me interesa la solución de *${feature.title}* que vi en la web.`
                                    const encoded = encodeURIComponent(message)
                                    window.open(`https://wa.me/5491155262024?text=${encoded}`, '_blank')
                                    onClose()
                                }}
                            >
                                Quiero esta Solución
                            </StarBorder>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
