import { useState } from 'react'
import { motion } from 'framer-motion'
import PixelCard from '../Common/PixelCard'
import FeatureModal from './FeatureModal'
import './ServicePage.css'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
}

export default function ServiceFeatures({
    title = "Lo que incluye",
    features = [],
    accentColor = '#00f2fe',
    backgroundImage
}) {
    const [selectedFeature, setSelectedFeature] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleFeatureClick = (feature) => {
        setSelectedFeature(feature)
        setIsModalOpen(true)
    }

    const pixelColors = `${accentColor},${accentColor}dd,${accentColor}aa`

    return (
        <section className="service-features section">
            <div className="container">
                <motion.h2
                    className="service-features__title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className="service-features__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <PixelCard
                                className="service-feature service-feature--premium"
                                colors={pixelColors}
                                gap={10}
                                speed={30}
                            >
                                <div
                                    className="service-feature__premium-content"
                                    onClick={() => handleFeatureClick(feature)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {/* Badge Superior */}
                                    <div className="service-feature__badge" style={{ borderColor: `${accentColor}40` }}>
                                        {feature.tag || "Feature"}
                                    </div>


                                    {/* Contenido Inferior */}
                                    <div className="service-feature__info">
                                        <div
                                            className="service-feature__icon"
                                            style={{ background: `${accentColor}15` }}
                                        >
                                            {feature.icon}
                                        </div>
                                        <h3 className="service-feature__title">{feature.title}</h3>
                                        <p className="service-feature__description">{feature.description}</p>

                                        <div className="service-feature__more">
                                            <span>Ver detalles</span>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </PixelCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <FeatureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                feature={selectedFeature}
                accentColor={accentColor}
            />
        </section>
    )
}
