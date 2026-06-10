import Hero from '../components/Hero/Hero'
import BentoGrid from '../components/Services/BentoGrid'
import QuoteCalculator from '../components/Calculator/QuoteCalculator'
import Portfolio from '../components/Portfolio/Portfolio'
import DomeGallery from '../components/Gallery/DomeGallery'
import ChromaGrid from '../components/Common/ChromaGrid'
import GradientText from '../components/Common/GradientText'
import Contact from '../components/Contact/Contact'
import integranteImg from '../assets/integrantes/hf_20260307_151456_417a9032-f714-4db1-9fca-aea30fa0d6e4 1 (1).png'

const teamMembers = [
    {
        image: integranteImg,
        title: 'Manuel Mendoza',
        subtitle: 'Full Stack y Fundador',
        handle: '@manuelmendoza',
        borderColor: '#00f260',
        gradient: 'linear-gradient(145deg, #00f260, #000)',
        bio: 'Como fundador y desarrollador principal de AltoVisual, lidero el diseño y desarrollo de cada solución. Me especializo en crear productos digitales interactivos, software a medida de alto rendimiento y experiencias visuales únicas que impulsan el crecimiento de tu marca.'
    }
];

export default function HomePage() {
    return (
        <main>
            <Hero />
            <BentoGrid />
            <DomeGallery />

            {/* Sección Sobre Mí / Fundador */}
            <section className="studio section" id="studio">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                        <span className="section-label" style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontSize: 'var(--text-xs)',
                            color: 'var(--accent-start)',
                            display: 'block',
                            marginBottom: 'var(--space-md)'
                        }}>Fundador</span>
                        <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>
                            El Creador detrás de <GradientText
                                colors={["#00f260", "#059669", "#00f260", "#059669", "#00f260"]}
                                animationSpeed={3}
                                showBorder={false}
                             >
                                 AltoVisual
                             </GradientText>
                        </h2>
                        <p style={{
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: 'var(--space-md) auto 0',
                            fontSize: 'var(--text-lg)',
                            lineHeight: '1.6'
                        }}>
                            Desarrollador y diseñador Full Stack apasionado por fusionar creatividad y tecnología de vanguardia para escalar tu visión al siguiente nivel.
                        </p>
                    </div>
                    <ChromaGrid items={teamMembers} columns={1} rows={1} radius={400} className="single-member" />
                </div>
            </section>

            <QuoteCalculator />
            <Portfolio />
            <Contact />
        </main>
    )
}
