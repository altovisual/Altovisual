import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import FallingText from '../Common/FallingText'
import Ballpit from '../Common/Ballpit'

export default function ServiceCTA({ title, description, accentColor }) {
    const fallingTextRef = useRef(null)

    const handleButtonClick = () => {
        if (fallingTextRef.current) {
            fallingTextRef.current.startEffect()
        }
    }

    return (
        <section className="service-cta section">
            <div className="service-cta__background">
                <Ballpit
                    count={200}
                    gravity={0.4}
                    friction={0.99}
                    wallBounce={0.9}
                    followCursor={true}
                    colors={[accentColor, '#4facfe', '#ffffff']}
                    minSize={0.2}
                    maxSize={0.6}
                />
            </div>
            <div className="container">
                <motion.div
                    className="service-cta__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <FallingText
                        ref={fallingTextRef}
                        text={title}
                        trigger="click"
                        fontSize="clamp(2rem, 5vw, 3.5rem)"
                        highlightWords={['lanzar', 'diseñemos', 'crear', 'web', 'proyecto']}
                        highlightClass="highlighted"
                        gravity={0.8}
                    />
                    <p className="service-cta__description">{description}</p>
                    <div className="service-cta__buttons">
                        <Link
                            to="/#cotizar"
                            className="btn btn-primary"
                            onClick={handleButtonClick}
                            style={{
                                background: `linear-gradient(135deg, ${accentColor}, var(--accent-secondary, #4facfe))`,
                                boxShadow: `0 0 30px ${accentColor}30`
                            }}
                        >
                            Empezar Proyecto
                        </Link>
                        <Link
                            to="/#contacto"
                            className="btn btn-secondary"
                            onClick={handleButtonClick}
                        >
                            Contáctanos
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
