import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ServiceFAQ({ title = "Preguntas Frecuentes", faqs = [] }) {
    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <section className="service-faq section">
            <div className="container">
                <h2 className="service-faq__title">{title}</h2>
                <div className="service-faq__list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'faq-item--open' : ''}`}>
                            <button
                                className="faq-item__question"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                {faq.question}
                                <span className="faq-item__icon">+</span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-item__answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
