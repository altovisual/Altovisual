import { motion } from 'framer-motion'
import PixelCard from '../Common/PixelCard'

export default function ServicePricing({ title, subtitle, plans = [], accentColor }) {
    // Generar colores para el efecto PixelCard
    const pixelColors = `${accentColor},${accentColor}dd,${accentColor}aa`

    return (
        <section className="service-pricing section">
            <div className="container">
                <h2 className="service-pricing__title">{title}</h2>
                <p className="service-pricing__subtitle">{subtitle}</p>

                <div className="service-pricing__grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PixelCard
                                className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
                                colors={pixelColors}
                                style={{ '--accent': accentColor }}
                            >
                                <div className="pricing-card-inner">
                                    <h3 className="pricing-card__name">{plan.name}</h3>
                                    <p className="pricing-card__desc">{plan.description}</p>
                                    <div className="pricing-card__price">
                                        <span className="pricing-card__currency">$</span>
                                        <span className="pricing-card__amount">{plan.price}</span>
                                    </div>
                                    <ul className="pricing-card__features">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="pricing-card__feature">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="btn btn-primary pricing-card__cta"
                                        onClick={() => {
                                            if (plan.whatsappMessage) {
                                                const encoded = encodeURIComponent(plan.whatsappMessage)
                                                window.open(`https://wa.me/5491155262024?text=${encoded}`, '_blank')
                                            } else {
                                                const element = document.querySelector('#cotizar')
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' })
                                                }
                                            }
                                        }}
                                    >
                                        {plan.cta || 'Seleccionar'}
                                    </button>
                                </div>
                            </PixelCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
