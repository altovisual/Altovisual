import { motion } from 'framer-motion'

export default function ServiceProcess({ steps = [], accentColor }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const stepVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: 'blur(10px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Custom ease out
            }
        }
    };

    return (
        <section className="service-process section">
            <div className="container">
                <motion.h2
                    className="service-process__title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Nuestro Proceso
                </motion.h2>

                <div className="service-process__timeline">
                    {/* Línea de tiempo animada */}
                    <motion.div
                        className="service-process__timeline-line"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ originY: 0 }}
                    />

                    <motion.div
                        className="service-process__steps"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="service-process__step"
                                variants={stepVariants}
                            >
                                <div className="service-process__number" style={{ background: accentColor }}>
                                    {index + 1}
                                </div>
                                <div className="service-process__content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
