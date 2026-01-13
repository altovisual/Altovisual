import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LiquidEther from '../Backgrounds/LiquidEther'
import GradientText from '../Common/GradientText'
import './ServicePage.css'

export default function ServiceHero({
    title,
    subtitle,
    description,
    accentColor = '#00f2fe',
    secondaryColor = '#4facfe',
    features = [],
    icon
}) {
    return (
        <section className="service-hero">
            {/* Background */}
            <div className="service-hero__background">
                <LiquidEther
                    resolution={0.25}
                    colors={[accentColor, secondaryColor]}
                />
                <div
                    className="service-hero__gradient-overlay"
                    style={{
                        background: `
              radial-gradient(ellipse at 50% 100%, ${accentColor}15 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, ${secondaryColor}10 0%, transparent 40%),
              linear-gradient(to bottom, transparent 0%, var(--bg-primary) 100%)
            `
                    }}
                />
            </div>

            {/* Back Link */}
            <motion.div
                className="service-hero__back"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/" className="service-hero__back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Volver al Inicio
                </Link>
            </motion.div>

            {/* Content */}
            <div className="service-hero__content container">
                <motion.div
                    className="service-hero__icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ '--accent': accentColor }}
                >
                    {icon}
                </motion.div>

                <motion.span
                    className="service-hero__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ color: accentColor }}
                >
                    {subtitle}
                </motion.span>

                <motion.h1
                    className="service-hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <GradientText
                        colors={[accentColor, secondaryColor, accentColor, '#ffffff', accentColor]}
                        animationSpeed={3}
                        showBorder={false}
                    >
                        {title}
                    </GradientText>
                </motion.h1>

                <motion.p
                    className="service-hero__description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {description}
                </motion.p>

                <motion.div
                    className="service-hero__features"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {features.map((feature, index) => (
                        <span
                            key={feature}
                            className="service-hero__feature"
                            style={{
                                background: `${accentColor}15`,
                                borderColor: `${accentColor}30`
                            }}
                        >
                            {feature}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    className="service-hero__cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        to="/#cotizar"
                        className="btn btn-primary"
                        style={{
                            background: `linear-gradient(135deg, ${accentColor}, ${secondaryColor})`,
                            boxShadow: `0 0 40px ${accentColor}40`
                        }}
                    >
                        Cotizar Ahora
                    </Link>
                    <Link to="/#contacto" className="btn btn-secondary">
                        Contactar
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
