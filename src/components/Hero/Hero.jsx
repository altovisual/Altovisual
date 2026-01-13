import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiquidEther from '../Backgrounds/LiquidEther'
import GradientText from '../Common/GradientText'
import './Hero.css'

export default function Hero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

    return (
        <section id="inicio" ref={containerRef} className="hero">
            {/* Background */}
            <div className="hero__background">
                <LiquidEther
                    resolution={0.25}
                    colors={['#00f2fe', '#4facfe', '#a855f7', '#f97316']}
                />
                <div className="hero__gradient-overlay" />
            </div>

            {/* Content */}
            <motion.div
                className="hero__content"
                style={{ opacity, y, scale }}
            >
                <motion.p
                    className="hero__tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Estudio Creativo Integral
                </motion.p>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transformamos ideas en{' '}
                    <GradientText
                        colors={["#00f2fe", "#4facfe", "#a855f7", "#f97316", "#00f2fe"]}
                        animationSpeed={4}
                        showBorder={false}
                    >
                        experiencias
                    </GradientText>{' '}
                    digitales inolvidables
                </motion.h1>

                <motion.p
                    className="hero__description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Diseño gráfico, desarrollo web & software, y producción audiovisual con VFX.
                    Creamos soluciones de alto impacto para marcas que quieren destacar.
                </motion.p>

                <motion.div
                    className="hero__cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <motion.a
                        href="#cotizar"
                        className="btn btn-primary hero__cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        Cotizar Proyecto
                    </motion.a>

                    <motion.a
                        href="#portafolio"
                        className="btn btn-secondary hero__cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver Portafolio
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="hero__scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span>Scroll</span>
                    <motion.div
                        className="hero__scroll-line"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <div className="hero__floating-elements">
                <motion.div
                    className="hero__float-element hero__float-element--1"
                    animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="hero__float-element hero__float-element--2"
                    animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>
        </section>
    )
}
