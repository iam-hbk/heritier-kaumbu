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
  // Font
  const interSemiBold = fetch(
    new URL('./Urbanist-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '48px',
        }}
      >
        <img
          src={new URL('../public/Techbk-logo.svg', import.meta.url).toString()}
          alt="TechBK Logo"
          width={200}
          height={200}
          style={{
            marginBottom: '24px',
          }}
        />
        <div
          style={{
            fontSize: 60,
            fontFamily: 'Urbanist',
            background: 'linear-gradient(to bottom right, #ffffff, #cccccc)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          TechBK
        </div>
        <div
          style={{
            fontSize: 30,
            fontFamily: 'Urbanist',
            color: '#888888',
            textAlign: 'center',
          }}
        >
          Innovative Software Solutions
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Urbanist',
          data: await interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
} 