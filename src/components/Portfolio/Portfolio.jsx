import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import StarBorder from '../Common/StarBorder'
import salomonVideo from '../../assets/Salomon_sin_audio.mp4'
import musicIntroVideo from '../../assets/0527 (1).mp4'
import gpmarketingImg from '../../assets/gpmarketing.png'
import barberImg from '../../assets/barber.png'
import './Portfolio.css'

const categories = ['Todos', 'Web', 'Software', 'VFX']

const projects = [
    {
        id: 15,
        title: 'Barbería Premium',
        category: 'Software',
        description: 'Plataforma SaaS de gestión de citas y administración inteligente para barberías y salones de estética. Permite a los clientes agendar turnos interactivos seleccionando profesional y servicio. Incluye control de horarios, administración de personal, historial de clientes y un completo panel de analíticas de ingresos y reservas.',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'SaaS', 'Firebase'],
        image: barberImg,
        url: 'https://sistema-barberia.vercel.app/'
    },
    {
        id: 14,
        title: 'Sierra Yara Café',
        category: 'Software',
        description: 'Plataforma SaaS de menú digital inteligente y gestión de pedidos en mesa para restaurantes y cafeterías. Permite a los comensales escanear un código QR, registrarse y explorar la carta digital de forma interactiva. Incluye visualización de precios en tiempo real en USD y bolívares (Bs.), carrito de compras dinámico y un panel administrativo completo para la gestión de inventario y pedidos en curso.',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'SaaS', 'Ant Design'],
        image: '/sierra_portfolio.png',
        url: 'https://sierra-yara.vercel.app/'
    },
    {
        id: 13,
        title: 'Calipso Beach Club',
        category: 'Web',
        description: 'Landing page premium y sistema de reservas para Calipso, un Club de Playa y Hospedaje de lujo. Muestra de forma interactiva las habitaciones de lujo, el servicio de glamping exclusivo, el restaurante gourmet y su agenda de eventos especiales. Optimizado con diseño responsivo, animaciones sutiles y soporte de reserva en línea.',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'UI/UX', 'Luxury Brand'],
        image: '/calipso_portfolio.png',
        url: 'https://calipso-tawny.vercel.app/'
    },
    {
        id: 12,
        title: 'GP Marketing SaaS',
        category: 'Software',
        description: 'Plataforma SaaS de administración y control integral diseñada para agencias de lanzamiento de infoproductos. Permite planificar lanzamientos, coordinar equipos multidisciplinarios y analizar métricas de conversión en tiempo real en un panel interactivo.',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'SaaS', 'Marketing Tools'],
        image: gpmarketingImg,
        url: 'https://app.agenciagpmarketing.com/dashboard'
    },
    {
        id: 10,
        title: 'Comercial Salomón IA',
        category: 'VFX',
        description: 'Spot comercial publicitario conceptual e innovador de alta costura para Salomón, creado al 100% con Inteligencia Artificial. Utiliza algoritmos y tecnologías de generación de video de vanguardia junto a composición digital avanzada.',
        tags: ['Runway Gen-3', 'Luma Dream Machine', 'Midjourney', 'VFX', 'AI Production'],
        video: salomonVideo,
        url: '#'
    },
    {
        id: 11,
        title: 'Intro Video Musical Urbano Trap',
        category: 'VFX',
        description: 'Introducción dinámica de video musical de género urbano trap, creada mediante tecnologías de generación de video con Inteligencia Artificial. Cuenta con efectos de distorsión visual, transiciones de alta velocidad y un montaje digital diseñado para acoplarse con la base rítmica.',
        tags: ['Urbano', 'Trap', 'VFX', 'AI Video', 'Post-producción'],
        video: musicIntroVideo,
        url: '#'
    },
    {
        id: 9,
        title: 'MVPX - Music Legal SaaS',
        category: 'Software',
        description: 'Plataforma SaaS de infraestructura legal de nivel empresarial para la industria musical. Permite la creación inteligente de contratos (con soporte para múltiples participantes en relaciones de muchos a muchos), generación de split sheets, gestión de firmas electrónicas seguras y registro de propiedad intelectual de canciones en el catálogo. Integra un dashboard de analíticas interactivas y un asistente virtual legal potenciado con IA.',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'SaaS', 'AI Integration'],
        image: '/mvpx_portfolio.png',
        url: '#'
    },
    {
        id: 8,
        title: 'DeliDeli App',
        category: 'Web',
        description: 'Plataforma web responsiva y marketplace de entrega a domicilio (delivery). Cuenta con geolocalización, buscador inteligente de restaurantes y productos, carruseles de promociones de alta conversión, catálogo de categorías interactivas y un sistema express para solicitudes de mensajería (DeliExpress). Desarrollada sobre Nuxt UI con excelente rendimiento en móviles.',
        tags: ['Nuxt.js', 'Vue', 'Tailwind CSS', 'Nuxt UI', 'API Integration'],
        image: '/delideli_portfolio.png',
        url: 'https://www.delideli.app/'
    },
    {
        id: 7,
        title: 'Master INK Academy',
        category: 'Web',
        description: 'Landing page premium y embudo de ventas optimizado para el curso de especialización en tatuaje "Black & Grey" dictado por el artista internacional Gery. Diseñado con una interfaz oscura e inmersiva, temario interactivo de 6 módulos, catálogo detallado de materiales, bonos exclusivos, reseñas reales y sección de preguntas frecuentes animadas, integrado con el sistema de afiliación y pagos de Hotmart.',
        tags: ['React', 'Tailwind CSS', 'Vite', 'Hotmart', 'UI/UX'],
        image: '/masterink_portfolio.png',
        url: 'https://blackandgray.masterinkacademy.com/'
    }
];

function PortfolioCard({ project, onClick }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            className="portfolio__card"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="portfolio__image-wrapper">
                {!isLoaded && <div className="portfolio__image-skeleton" />}
                {project.video ? (
                    <video
                        ref={videoRef}
                        src={project.video}
                        poster={project.image}
                        className={`portfolio__image ${isLoaded ? 'loaded' : ''}`}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onLoadedData={() => setIsLoaded(true)}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`portfolio__image ${isLoaded ? 'loaded' : ''}`}
                        onLoad={() => setIsLoaded(true)}
                    />
                )}
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

    // Bloquear scroll del fondo cuando el modal está abierto
    useEffect(() => {
        const isOpen = selectedProject !== null;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            window.locomotiveScroll?.stop();
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.locomotiveScroll?.start();
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.locomotiveScroll?.start();
        };
    }, [selectedProject]);

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
                        data-lenis-prevent
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
                                '--accent': '#00f260'
                            }}
                            onClick={e => e.stopPropagation()}
                            data-lenis-prevent
                        >
                            <button className="portfolio__modal-close" onClick={() => setSelectedProject(null)}>×</button>

                            <div className="portfolio__modal-header">
                                <div className="portfolio__modal-image-container">
                                    {selectedProject.video ? (
                                        <video
                                            src={selectedProject.video}
                                            poster={selectedProject.image}
                                            controls
                                            autoPlay
                                            loop
                                            playsInline
                                            className="portfolio__modal-image"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <img src={selectedProject.image} alt={selectedProject.title} className="portfolio__modal-image" />
                                    )}
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

                            <div className="portfolio__modal-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                                {selectedProject.url && selectedProject.url !== '#' && (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => window.open(selectedProject.url, '_blank')}
                                        style={{ padding: '0.65rem 2rem' }}
                                    >
                                        Visitar Sitio
                                    </button>
                                )}
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setSelectedProject(null)}
                                    style={{ padding: '0.65rem 2rem' }}
                                >
                                    Cerrar Detalle
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
