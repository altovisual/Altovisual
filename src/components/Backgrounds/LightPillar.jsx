import { useRef, useEffect } from 'react'

/**
 * Light Pillar Background Component
 * Inspired by React Bits - Creates animated light pillars effect
 */
export default function LightPillar({
    color = '#00f2fe',
    secondaryColor = '#4facfe',
    count = 8,
    speed = 1
}) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId
        let pillars = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initPillars()
        }

        const initPillars = () => {
            pillars = []
            for (let i = 0; i < count; i++) {
                pillars.push({
                    x: Math.random() * canvas.width,
                    width: 30 + Math.random() * 60,
                    height: canvas.height * (0.4 + Math.random() * 0.6),
                    speed: (0.2 + Math.random() * 0.5) * speed,
                    opacity: 0.1 + Math.random() * 0.3,
                    delay: Math.random() * Math.PI * 2,
                    isSecondary: Math.random() > 0.5
                })
            }
        }

        const animate = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            pillars.forEach((pillar) => {
                const pulse = Math.sin(time * 0.001 * pillar.speed + pillar.delay) * 0.5 + 0.5
                const currentOpacity = pillar.opacity * (0.5 + pulse * 0.5)

                const gradient = ctx.createLinearGradient(
                    pillar.x,
                    canvas.height,
                    pillar.x,
                    canvas.height - pillar.height * pulse
                )

                const baseColor = pillar.isSecondary ? secondaryColor : color

                gradient.addColorStop(0, `${baseColor}00`)
                gradient.addColorStop(0.3, `${baseColor}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`)
                gradient.addColorStop(0.7, `${baseColor}${Math.floor(currentOpacity * 0.5 * 255).toString(16).padStart(2, '0')}`)
                gradient.addColorStop(1, `${baseColor}00`)

                ctx.beginPath()
                ctx.fillStyle = gradient
                ctx.fillRect(
                    pillar.x - pillar.width / 2,
                    canvas.height - pillar.height * pulse,
                    pillar.width,
                    pillar.height * pulse
                )
            })

            animationId = requestAnimationFrame(animate)
        }

        resize()
        window.addEventListener('resize', resize)
        animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [color, secondaryColor, count, speed])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            }}
        />
    )
}
