import React from 'react';
import CardSwap, { Card } from '../CardSwap/CardSwap';
import GradientText from '../Common/GradientText';

const techCards = [
  {
    title: 'React & Next.js',
    subtitle: 'INTERFACES WEB ULTRA-RÁPIDAS',
    headerTitle: 'Frontend Development',
    description: 'Estructuras interactivas y Single Page Applications optimizadas para SEO, velocidad de carga y máxima conversión.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
    color: '#00d2ff',
    bgGradient: 'linear-gradient(135deg, #131720 0%, #080a0e 100%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: 'GSAP & Motion',
    subtitle: 'EXPERIENCIAS VISUALES ÚNICAS',
    headerTitle: 'Animations & 3D',
    description: 'Micro-interacciones premium, físicas fluidas y animaciones 3D inmersivas que capturan la atención desde el primer instante.',
    technologies: ['GSAP', 'Framer Motion', 'Three.js', 'WebGL'],
    color: '#00f260',
    bgGradient: 'linear-gradient(135deg, #0f1812 0%, #060b08 100%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f260" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
      </svg>
    )
  },
  {
    title: 'Node & Supabase',
    subtitle: 'INFRAESTRUCTURA ESCALABLE',
    headerTitle: 'Backend & SaaS Systems',
    description: 'Bases de datos en tiempo real, pasarelas de pago, autenticación segura y lógica serverless de alto rendimiento.',
    technologies: ['Node.js', 'Express', 'Supabase', 'Firebase', 'PostgreSQL'],
    color: '#a855f7',
    bgGradient: 'linear-gradient(135deg, #151120 0%, #090710 100%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    )
  },
  {
    title: 'Agentes IA & n8n',
    subtitle: 'AUTOMATIZACIÓN INTELIGENTE',
    headerTitle: 'AI & Automations',
    description: 'Flujos automatizados que conectan herramientas e integran modelos LLM avanzados para optimizar tu tiempo.',
    technologies: ['n8n', 'OpenAI API', 'Claude', 'LangChain'],
    color: '#ec4899',
    bgGradient: 'linear-gradient(135deg, #1b1118 0%, #0b070a 100%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    title: 'VFX & AI Video',
    subtitle: 'CONTENIDO AUDIOVISUAL DE IMPACTO',
    headerTitle: 'VFX & Creative Media',
    description: 'Videos publicitarios de alta gama y spots conceptuales creados mediante herramientas de IA y post-producción avanzada.',
    technologies: ['Runway Gen-3', 'Midjourney', 'After Effects', 'AI Video'],
    color: '#f97316',
    bgGradient: 'linear-gradient(135deg, #1c130e 0%, #0b0705 100%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    )
  },
  {
    title: 'Shopify & E-commerce',
    subtitle: 'TIENDAS VIRTUALES DE ALTA CONVERSIÓN',
    headerTitle: 'E-commerce Platforms',
    description: 'Desarrollo headless y optimizaciones a medida sobre Shopify para ofrecer la mejor velocidad y experiencia transaccional.',
    technologies: ['Shopify', 'Liquid', 'Stripe', 'Headless CMS'],
    color: '#00f2fe',
    bgGradient: 'linear-gradient(135deg, #0e161c 0%, #05090c 100%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
      </svg>
    )
  }
];

export default function GallerySection() {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveConfig = () => {
    if (windowWidth < 480) {
      return { width: 310, height: 280, cardDistance: 25, verticalDistance: 30, skewAmount: 2 };
    }
    if (windowWidth < 576) {
      return { width: 340, height: 280, cardDistance: 30, verticalDistance: 35, skewAmount: 3 };
    }
    if (windowWidth < 768) {
      return { width: 380, height: 300, cardDistance: 45, verticalDistance: 50, skewAmount: 4 };
    }
    if (windowWidth < 991) {
      return { width: 440, height: 320, cardDistance: 60, verticalDistance: 70, skewAmount: 5 };
    }
    return { width: 480, height: 340, cardDistance: 85, verticalDistance: 95, skewAmount: 6 };
  };

  const config = getResponsiveConfig();
  const isMobile = windowWidth < 576;

  return (
    <section className="gallery-section section" id="tecnologias" style={{ background: '#08080a', padding: 'var(--space-3xl) 0', overflow: 'hidden' }}>
      <div className="container">
        <div className="gallery-grid">
          
          {/* Columna Izquierda: Texto Descriptivo */}
          <div className="gallery-text" style={{ zIndex: 2 }}>
            <span className="section-label" style={{
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: 'var(--text-xs)',
                color: 'var(--accent-start)',
                display: 'block',
                marginBottom: 'var(--space-md)'
            }}>Tecnologías & Frameworks</span>
            
            <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-lg)', lineHeight: '1.2' }}>
                Stack de <br />
                <GradientText
                    colors={["#00f260", "#059669", "#00f260", "#059669", "#00f260"]}
                    animationSpeed={3}
                    showBorder={false}
                 >
                     Herramientas
                 </GradientText>
            </h2>

            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'var(--text-lg)', 
              lineHeight: '1.7',
              maxWidth: '460px',
              margin: 0
            }}>
              Desarrollamos soluciones digitales robustas y de alto impacto utilizando tecnologías modernas para garantizar un rendimiento sobresaliente, escalabilidad y experiencias visuales únicas.
            </p>
          </div>

          {/* Columna Derecha: Contenedor de la pila de cartas */}
          <div className="swap-container-wrapper" style={{ 
            height: windowWidth < 576 ? '380px' : windowWidth < 991 ? '460px' : '520px', 
            width: '100%', 
            position: 'relative', 
            display: 'flex', 
            alignItems: 'flex-end', 
            justifyContent: 'flex-end'
          }}>
            <CardSwap
              cardDistance={config.cardDistance}
              verticalDistance={config.verticalDistance}
              delay={5000}
              pauseOnHover={true}
              width={config.width}
              height={config.height}
              skewAmount={config.skewAmount}
            >
              {techCards.map((tech, i) => (
                <Card key={i} style={{ 
                  borderRadius: '16px', 
                  border: `1px solid rgba(255, 255, 255, 0.08)`, 
                  background: tech.bgGradient,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: `0 30px 60px rgba(0, 0, 0, 0.9), 0 0 40px ${tech.color}05`,
                  textAlign: 'left',
                  overflow: 'hidden'
                }}>
                  {/* Barra de cabecera estilo ventana de código */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: isMobile ? '10px 16px' : '14px 22px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    gap: '10px'
                  }}>
                    {tech.icon}
                    <span style={{ 
                      fontSize: '12px', 
                      color: '#94a3b8', 
                      fontWeight: '600',
                      letterSpacing: '0.05em' 
                    }}>
                      {tech.headerTitle}
                    </span>
                  </div>

                  {/* Cuerpo de la tarjeta */}
                  <div style={{
                    padding: isMobile ? '20px 24px' : '30px 32px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1
                  }}>
                    <div>
                      <h3 style={{ fontSize: isMobile ? '19px' : '23px', color: '#fff', fontWeight: 'bold', marginBottom: '12px' }}>{tech.title}</h3>
                      <p style={{ fontSize: isMobile ? '12.5px' : '13.5px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6', marginBottom: isMobile ? '15px' : '25px' }}>{tech.description}</p>
                    </div>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {tech.technologies.map((t, idx) => (
                        <span key={idx} style={{ 
                          fontSize: '11px', 
                          color: tech.color, 
                          background: `${tech.color}10`, 
                          padding: '4px 10px', 
                          borderRadius: '20px', 
                          border: `1px solid ${tech.color}20`,
                          fontWeight: '500'
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  );
}
