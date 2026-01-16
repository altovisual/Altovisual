import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
    { href: '/', hash: '#inicio', label: 'Inicio' },
    { href: '/', hash: '#servicios', label: 'Servicios' },
    { href: '/', hash: '#portafolio', label: 'Portafolio' },
    { href: '/', hash: '#cotizar', label: 'Cotizar' },
    { href: '/', hash: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Manejar el scroll automático si hay un hash en la URL al cargar o cambiar de ruta
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                // Pequeño delay para asegurar que el DOM esté listo
                const timeoutId = setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
                return () => clearTimeout(timeoutId)
            }
        } else if (isHomePage && location.pathname === '/') {
            // Solo si estamos literalmente en la raíz sin hash
            // window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [location, isHomePage])

    const handleNavClick = (e, link) => {
        const { hash } = link
        setIsMobileMenuOpen(false)

        if (isHomePage && hash) {
            e.preventDefault()
            if (hash === '#inicio') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                window.history.pushState(null, '', '/')
            } else {
                const element = document.querySelector(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                    window.history.pushState(null, '', hash)
                }
            }
        }
    }

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.4,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        closed: { opacity: 0, x: -10 },
        open: { opacity: 1, x: 0 }
    }

    return (
        <nav
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        >
            <div className="navbar__container">
                {/* Logo */}
                <Link to="/" className="navbar__logo" onClick={(e) => {
                    setIsMobileMenuOpen(false)
                    if (isHomePage) {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        window.history.pushState(null, '', '/')
                    }
                }}>
                    <img
                        src="/logo.svg"
                        alt="AltoVisual"
                        className="navbar__logo-desktop"
                    />
                    <img
                        src="/logocel.svg"
                        alt="AltoVisual"
                        className="navbar__logo-mobile"
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="navbar__links">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {isHomePage && link.hash ? (
                                <a
                                    href={link.hash}
                                    className="navbar__link"
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    to={link.hash ? `${link.href}${link.hash}` : link.href}
                                    className="navbar__link"
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </motion.li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link to="/#cotizar" onClick={(e) => handleNavClick(e, { href: '/', hash: '#cotizar' })}>
                    <motion.div
                        className="navbar__cta btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Empezar Proyecto
                    </motion.div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        className="navbar__mobile-menu"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className="navbar__mobile-links">
                            {navLinks.map((link) => (
                                <motion.li key={link.label} variants={itemVariants}>
                                    {isHomePage && link.hash ? (
                                        <a
                                            href={link.hash}
                                            className="navbar__mobile-link"
                                            onClick={(e) => handleNavClick(e, link)}
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.hash ? `${link.href}${link.hash}` : link.href}
                                            className="navbar__mobile-link"
                                            onClick={(e) => handleNavClick(e, link)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

