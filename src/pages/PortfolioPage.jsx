import { useEffect } from 'react'
import Portfolio from '../components/Portfolio/Portfolio'
import ServiceHero from '../components/ServicePage/ServiceHero'
import ServiceCTA from '../components/ServicePage/ServiceCTA'

const PORTFOLIO_ICON = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
    </svg>
)

export default function PortfolioPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <ServiceHero
                title="Nuestros Proyectos"
                subtitle="Portafolio"
                description="Explora nuestra colección de trabajos recientes. Desde identidades de marca hasta experiencias digitales inmersivas y producciones de video de alto impacto."
                accentColor="#00f2fe"
                secondaryColor="#4facfe"
                features={['Diseño Gráfico', 'Desarrollo Web', 'Software', 'VFX & Video']}
                icon={PORTFOLIO_ICON}
            />

            <div style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                <Portfolio />
            </div>

            <ServiceCTA
                title="¿Listo para crear algo increíble?"
                description="Estamos listos para llevar tu visión al siguiente nivel con soluciones creativas y tecnológicas de vanguardia."
                accentColor="#00f2fe"
            />
        </main>
    )
}
