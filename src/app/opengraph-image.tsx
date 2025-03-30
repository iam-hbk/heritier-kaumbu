import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'TechBK - Innovative Software Solutions'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #171717)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '48px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            color: '#ffffff',
            marginBottom: '24px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Heritier Kaumbu
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#9ca3af',
            textAlign: 'center',
          }}
        >
          Software Engineer & Web Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 