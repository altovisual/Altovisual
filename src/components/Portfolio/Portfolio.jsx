import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import StarBorder from '../Common/StarBorder'
import './Portfolio.css'

const categories = ['Todos', 'Diseño', 'Web', 'Software', 'VFX']

const projects = [
    {
        id: 1,
        title: 'Neo-Branding Int.',
        category: 'Diseño',
        description: 'Identidad visual completa para una startup de tecnología de punta.',
        tags: ['Branding', 'UI/UX', 'Figma'],
        image: 'https://picsum.photos/seed/design1/800/600'
    },
    {
        id: 2,
        title: 'E-commerce Luxury',
        category: 'Web',
        description: 'Plataforma de ventas con experiencia de usuario inmersiva y pagos seguros.',
        tags: ['React', 'Next.js', 'Stripe'],
        image: 'https://picsum.photos/seed/web1/800/600'
    },
    {
        id: 3,
        title: 'SaaS Dashboard',
        category: 'Software',
        description: 'Panel de control avanzado con visualización de datos en tiempo real.',
        tags: ['Node.js', 'APIs', 'D3.js'],
        image: 'https://picsum.photos/seed/software1/800/600'
    },
    {
        id: 4,
        title: 'Cinematic VFX',
        category: 'VFX',
        description: 'Efectos visuales y post-producción para cortometraje independiente.',
        tags: ['After Effects', 'Nuke', 'VFX'],
        image: 'https://picsum.photos/seed/vfx1/800/600'
    },
    {
        id: 5,
        title: 'App Mobile Fitness',
        category: 'Web',
        description: 'Aplicación progresiva enfocada en el rendimiento y seguimiento de salud.',
        tags: ['PWA', 'Firebase', 'React'],
        image: 'https://picsum.photos/seed/app1/800/600'
    },
    {
        id: 6,
        title: 'Motion Graphics 3D',
        category: 'VFX',
        description: 'Animación de producto en 3D para campaña publicitaria global.',
        tags: ['Cinema 4D', 'Redshift', 'Motion'],
        image: 'https://picsum.photos/seed/motion1/800/600'
    }
]

function PortfolioCard({ project, onClick }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            className="portfolio__card"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onClick={onClick}
        >
            <div className="portfolio__image-wrapper">
                {!isLoaded && <div className="portfolio__image-skeleton" />}
                <img
                    src={project.image}
                    alt={project.title}
                    className={`portfolio__image ${isLoaded ? 'loaded' : ''}`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
            <div className="portfolio__card-overlay">
                <span className="portfolio__card-category">{project.category}</span>
                <h3 className="portfolio__card-title">{project.title}</h3>
                <p className="portfolio__card-description">{project.description}</p>
                <div className="portfolio__card-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="portfolio__card-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Portfolio() {
    const [filter, setFilter] = useState('Todos')
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [selectedProject, setSelectedProject] = useState(null)

    // 3D Tilt Logic
    const modalRef = useRef(null)
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

    useEffect(() => {
        if (filter === 'Todos') {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(projects.filter(p => p.category === filter))
        }
    }, [filter])

    return (
        <section id="portafolio" className="portfolio section">
            <div className="container">
                <div className="portfolio__header">
                    <span className="portfolio__label">Portafolio</span>
                    <h2 className="portfolio__title">Trabajos Recientes</h2>
                    <p className="portfolio__subtitle">
                        Una selección de nuestros proyectos favoritos que han marcado la diferencia.
                    </p>
                </div>

                <div className="portfolio__filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`portfolio__filter ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="portfolio__grid"
                    layout
                >
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <PortfolioCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal de Detalle */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="portfolio__modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            ref={modalRef}
                            className="portfolio__modal glass"
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                                '--accent': '#00f2fe'
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="portfolio__modal-close" onClick={() => setSelectedProject(null)}>×</button>

                            <div className="portfolio__modal-header">
                                <div className="portfolio__modal-image-container">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="portfolio__modal-image" />
                                </div>
                                <div className="portfolio__modal-info">
                                    <span className="portfolio__modal-category">{selectedProject.category}</span>
                                    <h3 className="portfolio__modal-title">{selectedProject.title}</h3>
                                </div>
                            </div>

                            <div className="portfolio__modal-content">
                                <div className="portfolio__modal-description">
                                    <h3>Descripción del Proyecto</h3>
                                    <p>{selectedProject.description}</p>
                                </div>
                                <div className="portfolio__modal-tags-container">
                                    <h3>Tecnologías & Tags</h3>
                                    <div className="portfolio__modal-tags">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="portfolio__card-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio__modal-actions">
                                <StarBorder
                                    as="button"
                                    color="#00f2fe"
                                    speed="4s"
                                    onClick={() => setSelectedProject(null)}
                                    className="portfolio__modal-cta"
                                >
                                    Cerrar Detalle
                                </StarBorder>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
