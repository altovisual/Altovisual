import { useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import StarBorder from '../Common/StarBorder'
import './QuoteModal.css'

export default function QuoteModal({ isOpen, onClose, summary }) {
    const modalRef = useRef(null)

    // Lógica 3D Tilt
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

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

    const handleWhatsApp = () => {
        const isVariable = summary.total === 'A convenir'
        const priceDisplay = isVariable ? 'A convenir (Consultar)' : `$${summary.total}`

        const message = `¡Hola AltoVisual! 👋 Acabo de calcular un presupuesto en su sitio web:
        
🚀 *Servicio:* ${summary.service}
📊 *Complejidad:* ${summary.complexity}
⏰ *Entrega:* ${summary.urgency}
💰 *Inversión Estimada:* ${priceDisplay}

Me gustaría conversar sobre este proyecto.`

        const encoded = encodeURIComponent(message)
        window.open(`https://wa.me/5491155262024?text=${encoded}`, '_blank')
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="quote-modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        ref={modalRef}
                        className="quote-modal glass"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="quote-modal__close" onClick={onClose}>×</button>

                        <div className="quote-modal__header">
                            <div className="quote-modal__icon">
                                <img src="/logocel.svg" alt="AltoVisual Logo" />
                            </div>
                            <h2 className="quote-modal__title">¡Casi Listos!</h2>
                            <p className="quote-modal__subtitle">
                                Has diseñado una visión increíble. Ahora, hagámosla realidad.
                            </p>
                        </div>

                        <div className="quote-modal__summary-card">
                            <div className="quote-modal__summary-item">
                                <span className="label">Servicio</span>
                                <span className="value">{summary.service}</span>
                            </div>
                            <div className="quote-modal__summary-item">
                                <span className="label">Presupuesto Estimado</span>
                                <span className="value highlighting">
                                    {summary.total === 'A convenir' ? 'A convenir' : `$${summary.total}+`}
                                </span>
                            </div>
                        </div>

                        <div className="quote-modal__actions">
                            <StarBorder
                                as="button"
                                color="#00f2fe"
                                speed="5s"
                                onClick={handleWhatsApp}
                                className="quote-modal__whatsapp-star"
                            >
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Hablar por WhatsApp
                            </StarBorder>
                            <span className="quote-modal__divider">o si prefieres</span>
                            <button className="btn btn-secondary quote-modal__email-btn" onClick={onClose}>
                                Enviar por Correo
                            </button>
                        </div>

                        <p className="quote-modal__footer">
                            Respondemos en menos de 15 minutos durante horario laboral.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
