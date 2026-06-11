import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GradientText from '../Common/GradientText'
import LogoLoop from '../Common/LogoLoop'
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiThreedotjs,
    SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiDavinciresolve, SiUnrealengine, SiBlender
} from 'react-icons/si'
import './Hero.css'

export default function Hero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
        { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
        { node: <SiAdobephotoshop />, title: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
        { node: <SiAdobeillustrator />, title: "Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
        { node: <SiAdobeaftereffects />, title: "After Effects", href: "https://www.adobe.com/products/aftereffects.html" },
        { node: <SiDavinciresolve />, title: "DaVinci Resolve", href: "https://www.blackmagicdesign.com/products/davinciresolve" },
        { node: <SiUnrealengine />, title: "Unreal Engine", href: "https://www.unrealengine.com" },
        { node: <SiBlender />, title: "Blender", href: "https://www.blender.org" },
    ];

    return (
        <section id="inicio" ref={containerRef} className="hero">
            {/* Background */}
            <div className="hero__background">
                <img
                    src="/hf_20260610_125839_fd4bb2b0-c8c9-4f8e-8ba1-71ee9b2670af.png"
                    alt="Fondo de Hero"
                    className="hero__bg-image"
                />
                <div className="hero__gradient-overlay" />
            </div>

            {/* Content */}
            <motion.div
                className="hero__content"
                style={{ opacity, y, scale }}
            >

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transformamos ideas en{' '}
                    <GradientText
                        colors={["#00f2fe", "#4facfe", "#a855f7", "#f97316", "#00f2fe"]}
                        animationSpeed={4}
                        showBorder={false}
                    >
                        experiencias
                    </GradientText>{' '}
                    digitales inolvidables
                </motion.h1>

                <motion.p
                    className="hero__description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Diseño, desarrollo y producción VFX. Creamos soluciones de alto impacto para marcas que buscan destacar.
                </motion.p>

                <motion.div
                    className="hero__cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <motion.a
                        href="#cotizar"
                        className="btn btn-primary hero__cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        Obtén un diagnóstico gratuito
                    </motion.a>

                    <motion.a
                        href="#portafolio"
                        className="btn btn-secondary hero__cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver casos de éxito
                    </motion.a>
                </motion.div>

            </motion.div>


            {/* Logo Loop Section */}
            <motion.div
                className="hero__logos"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: 0,
                    right: 0,
                    zIndex: 2
                }}
            >
                <LogoLoop
                    logos={techLogos}
                    speed={40}
                    gap={80}
                    logoHeight={40}
                    direction="right"
                    fadeOut={true}
                    fadeOutColor="var(--bg-primary)"
                    pauseOnHover={true}
                />
            </motion.div>
        </section>
    )
}
