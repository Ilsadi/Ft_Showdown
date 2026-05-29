import { Html } from '@react-three/drei'

export default function MenuTele()
{
    return (
        <Html
            position={[0, 2.75, -5]}        // pile sur l'écran de la télé
            center                           // centre le HTML sur la position 3D
            transform                        // suit la perspective 3D
            distanceFactor={1}               // taille apparente (à ajuster)
            occlude={false}
            style={{
                width: '420px',              // largeur visuelle (à ajuster)
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'monospace',     // remplace par ta police pixel art
                color: '#EF9F27',
                userSelect: 'none',
                pointerEvents: 'none'        // au début, on bloque les clics pour tester
            }}
        >
            <div style={{ fontSize: '32px', margin: '8px 0' }}>JOUER</div>
            <div style={{ fontSize: '32px', margin: '8px 0' }}>AMIS</div>
            <div style={{ fontSize: '32px', margin: '8px 0' }}>CLASSEMENT</div>
        </Html>
    )
}