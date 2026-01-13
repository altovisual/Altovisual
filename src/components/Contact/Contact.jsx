import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Contact.css'

export default function Contact() {
    const [status, setStatus] = useState('idle') // idle, submitting, success
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')
        // Simular envío
        await new Promise(resolve => setTimeout(resolve, 2000))
        setStatus('success')
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    if (status === 'success') {
        return (
            <section id="contacto" className="contact section">
                <div className="container">
                    <div className="contact__success glass">
                        <div className="contact__success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h3>¡Mensaje Enviado!</h3>
                        <p>Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
                        <button
                            className="btn btn-secondary"
                            onClick={() => setStatus('idle')}
                            style={{ marginTop: '20px' }}
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contacto" className="contact section">
            <div className="container">
                <div className="contact__wrapper">
                    {/* Info Side */}
                    <div className="contact__info">
                        <span className="contact__label">Contacto</span>
                        <h2 className="contact__title">Hablemos de tu próximo proyecto</h2>
                        <p className="contact__description">
                            ¿Tienes una idea en mente? Estamos listos para ayudarte a hacerla realidad.
                            Escríbenos y comencmos a trabajar juntos.
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:hola@altovisual.studio">hola@altovisual.studio</a>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Ubicación</h4>
                                    <span>Valencia, Venezuela (Global)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        className="contact__form glass"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className={`contact__field ${form.name ? 'active' : ''}`}>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="name">Nombre Completo</label>
                            </div>

                            <div className={`contact__field ${form.email ? 'active' : ''}`}>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email">Correo Electrónico</label>
                            </div>

                            <div className={`contact__field ${form.subject ? 'active' : ''}`}>
                                <select
                                    name="subject"
                                    id="subject"
                                    required
                                    value={form.subject}
                                    onChange={handleChange}
                                >
                                    <option value=""></option>
                                    <option value="design">Diseño Gráfico</option>
                                    <option value="web">Desarrollo Web</option>
                                    <option value="software">Software a Medida</option>
                                    <option value="vfx">Video & VFX</option>
                                    <option value="other">Otro</option>
                                </select>
                                <label htmlFor="subject">Interés</label>
                            </div>

                            <div className={`contact__field ${form.message ? 'active' : ''}`}>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                />
                                <label htmlFor="message">Cuéntanos sobre tu proyecto</label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary contact__submit"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? (
                                    <div className="contact__spinner"></div>
                                ) : (
                                    'Enviar Mensaje'
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
