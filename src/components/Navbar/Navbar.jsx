import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
    { href: '/', hash: '#inicio', label: 'Inicio' },
    { href: '/', hash: '#servicios', label: 'Servicios' },
    { href: '/', hash: '#cotizar', label: 'Cotizar' },
    { href: '/portafolio', hash: '', label: 'Portafolio' },
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
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        } else if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [location])

    const handleNavClick = (e, link) => {
        const { href, hash } = link
        setIsMobileMenuOpen(false)

        if (isHomePage && hash) {
            e.preventDefault()
            const element = document.querySelector(hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                // Actualizar la URL sin recargar para mantener consistencia
                window.history.pushState(null, '', hash)
            }
        }
    }

    return (
        <nav
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        >
            <div className="navbar__container">
                {/* Logo */}
                <Link to="/" className="navbar__logo" onClick={() => {
                    setIsMobileMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="navbar__mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="navbar__mobile-links">
                            {navLinks.map((link) => (
                                <li key={link.label}>
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
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

