import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'

const MODES = ['JOUER', 'AMIS', 'CLASSEMENT']

export default function MenuTele({ visible = false })
{
    const [selected, setSelected] = useState(0)

    // Écoute molette uniquement quand le menu est visible
    useEffect(() =>
    {
        if (!visible) return

        const handleWheel = (e) =>
        {
            e.preventDefault()
            if (e.deltaY > 0)
                setSelected((s) => Math.min(s + 1, MODES.length - 1))
            else if (e.deltaY < 0)
                setSelected((s) => Math.max(s - 1, 0))
        }

        window.addEventListener('wheel', handleWheel, { passive: false })
        return () => window.removeEventListener('wheel', handleWheel)
    }, [visible])

    return (
        <Html
            position={[0, 2.75, -5]}
            center
            transform
            distanceFactor={1}
            occlude={false}
        >
            <div style={{
                width: '420px',
                height: '200px',
                position: 'relative',
                fontFamily: 'monospace',
                color: '#EF9F27',
                userSelect: 'none',
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.6s ease'
            }}>
                {/* Zone flèche haut */}
                <div style={{
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '14px',
                    opacity: 0.6
                }}>▲</div>

                {/* Zone items (clippée) */}
                <div style={{
                    flex: 1,
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {MODES.map((mode, i) =>
                    {
                        const distance = i - selected
                        const absD = Math.abs(distance)

                        const scale = absD === 0 ? 1.6
                                    : absD === 1 ? 1.0
                                    : 0.65
                        const opacity = absD === 0 ? 1
                                      : absD === 1 ? 0.45
                                      : 0.15
                        const translateY = distance * 40

                        return (
                            <div
                                key={mode}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    fontSize: '28px',
                                    transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
                                    opacity: opacity,
                                    transition: 'transform 0.25s ease, opacity 0.25s ease',
                                    textShadow: '2px 2px 0 #412402',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {mode}
                            </div>
                        )
                    })}
                </div>

                {/* Zone flèche bas */}
                <div style={{
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '14px',
                    opacity: 0.6
                }}>▼</div>
            </div>
        </Html>
    )
}