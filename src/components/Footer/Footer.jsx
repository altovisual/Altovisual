import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: 'Instagram', url: '#', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
        { name: 'LinkedIn', url: '#', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
        { name: 'X', url: '#', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /> },
        { name: 'Behance', url: '#', icon: <path d="M22 7h-7v-2h7v2zm-11.5 5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm1.5-5h-3v3.167h3c.828 0 1.5-.672 1.5-1.5s-.672-1.667-1.5-1.667zm10 7h-6.5c0 2.481 2.019 4.5 4.5 4.5 1.5 0 2.91-.741 3.778-1.928l1.722 1c-1.222 1.83-3.278 2.928-5.5 2.928-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5c3.584 0 6.5 2.916 6.5 6.5zm-2.019-1.5c-.328-1.696-1.817-3-3.613-3-1.796 0-3.285 1.304-3.613 3h7.226zm-17.481-8.5h4.133c2.409 0 4.367 1.958 4.367 4.367 0 1.259-.536 2.392-1.393 3.193.857.8 1.393 1.934 1.393 3.193 0 2.409-1.958 4.367-4.367 4.367h-4.133v-15.12zm4.133 6.167c.754 0 1.367-.613 1.367-1.367s-.613-1.367-1.367-1.367h-1.133v2.734h1.133zm0 6.219c.754 0 1.367-.613 1.367-1.367s-.613-1.367-1.367-1.367h-1.133v2.734h1.133z" /> }
    ]

    const links = [
        { label: 'Inicio', path: '/#inicio' },
        { label: 'Servicios', path: '/#servicios' },
        { label: 'Cotizar', path: '/#cotizar' },
        { label: 'Portafolio', path: '/#portafolio' },
        { label: 'Contacto', path: '/#contacto' }
    ]

    const services = [
        { label: 'Diseño Gráfico', path: '/servicios/diseno' },
        { label: 'Desarrollo Web', path: '/servicios/web' },
        { label: 'Software', path: '/servicios/software' },
        { label: 'Video & VFX', path: '/servicios/vfx' }
    ]

    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__grid">
                    {/* Brand Section */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            ALTO<span>VISUAL</span>
                        </Link>
                        <p className="footer__tagline">
                            Estudio Creativo Integral. Transformamos ideas en experiencias digitales de alto impacto.
                        </p>
                        <div className="footer__socials">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    className="footer__social-link"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.name}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        {social.icon}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="footer__nav">
                        <h4 className="footer__title">Navegación</h4>
                        <ul className="footer__list">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="footer__services">
                        <h4 className="footer__title">Servicios</h4>
                        <ul className="footer__list">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <Link to={service.path} className="footer__link">
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer__contact">
                        <h4 className="footer__title">Contacto</h4>
                        <ul className="footer__list">
                            <li>
                                <a href="mailto:hola@altovisual.studio" className="footer__link">
                                    hola@altovisual.studio
                                </a>
                            </li>
                            <li>
                                <span className="footer__text">Valencia, Venezuela / Global</span>
                            </li>
                        </ul>
                        <div className="footer__status">
                            <span className="status-dot"></span>
                            Disponible para nuevos proyectos
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">
                        © {currentYear} ALTOVISUAL. Todos los derechos reservados.
                    </p>
                    <div className="footer__legal">
                        <a href="#" className="footer__link footer__link--small">Políticas de Privacidad</a>
                        <a href="#" className="footer__link footer__link--small">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
