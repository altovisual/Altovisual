import Hero from '../components/Hero/Hero'
import BentoGrid from '../components/Services/BentoGrid'
import QuoteCalculator from '../components/Calculator/QuoteCalculator'
import Portfolio from '../components/Portfolio/Portfolio'
import DomeGallery from '../components/Gallery/DomeGallery'
import ChromaGrid from '../components/Common/ChromaGrid'
import GradientText from '../components/Common/GradientText'
import Contact from '../components/Contact/Contact'

const teamMembers = [
    {
        image: 'https://i.pravatar.cc/300?img=8',
        title: 'Alex Rivera',
        subtitle: 'Creative Director',
        handle: '@alexvisual',
        borderColor: '#00f2fe',
        gradient: 'linear-gradient(145deg, #00f2fe, #000)',
    },
    {
        image: 'https://i.pravatar.cc/300?img=11',
        title: 'Jordan Chen',
        subtitle: 'Lead Developer',
        handle: '@jordan_dev',
        borderColor: '#4facfe',
        gradient: 'linear-gradient(210deg, #4facfe, #000)',
    },
    {
        image: 'https://i.pravatar.cc/300?img=3',
        title: 'Morgan Blake',
        subtitle: 'VFX Specialist',
        handle: '@morgan_vfx',
        borderColor: '#a855f7',
        gradient: 'linear-gradient(165deg, #a855f7, #000)',
    }
];

export default function HomePage() {
    return (
        <main>
            <Hero />
            <BentoGrid />
            <DomeGallery />

            {/* Sección de Equipo */}
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
                        }}>Nuestro Equipo</span>
                        <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>
                            El Talento detrás de <GradientText
                                colors={["#00f2fe", "#4facfe", "#00f2fe", "#a855f7", "#00f2fe"]}
                                animationSpeed={3}
                                showBorder={false}
                            >
                                AltoVisual
                            </GradientText>
                        </h2>
                    </div>
                    <ChromaGrid items={teamMembers} columns={3} rows={1} radius={400} />
                </div>
            </section>

            <QuoteCalculator />
            <Portfolio />
            <Contact />
        </main>
    )
}
