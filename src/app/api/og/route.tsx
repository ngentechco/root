import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const WIDTH = 1200
const HEIGHT = 630

async function loadFont(url: string) {
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || 'NGENTECH'
  const eyebrow = searchParams.get('eyebrow') || 'The future of technology with deep research'
  const badge = searchParams.get('badge') || ''
  const metric = searchParams.get('metric') || ''
  const sub = searchParams.get('sub') || ''

  const [displayFont, bodyFont, monoFont] = await Promise.all([
    loadFont(
      'https://fonts.gstatic.com/s/sairasemicondensed/v19/U9MM6c-2nDPJYAlHRbHb2VbLiRWM0CdL7w.woff',
    ),
    loadFont(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff',
    ),
    loadFont(
      'https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff',
    ),
  ])

  const fonts = [
    ...(displayFont ? [{ name: 'Saira', data: displayFont, style: 'normal' as const, weight: 900 as const }] : []),
    ...(bodyFont ? [{ name: 'Inter', data: bodyFont, style: 'normal' as const, weight: 400 as const }] : []),
    ...(monoFont ? [{ name: 'Mono', data: monoFont, style: 'normal' as const, weight: 500 as const }] : []),
  ]

  const truncated = title.length > 42 ? `${title.slice(0, 42)}…` : title

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#000000',
          color: '#ffffff',
          fontFamily: 'Saira, Inter, sans-serif',
          padding: 72,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Hairline grid accents */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: '#ffffff33',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 1,
            background: '#ffffff22',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 200,
            height: 1,
            background: '#ffffff33',
          }}
        />
        {/* Radial glow disc */}
        <div
          style={{
            position: 'absolute',
            width: 760,
            height: 760,
            right: -260,
            top: -260,
            borderRadius: 9999,
            background: '#ffffff14',
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              border: '1px solid rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 900,
            }}
          >
            N
          </div>
          <span
            style={{
              fontSize: 15,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Ngentech
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginLeft: 'auto',
              fontSize: 12,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: '#ffffff',
              }}
            />
            {badge || 'Deep Research'}
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <span
            style={{
              fontSize: 24,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'Mono, monospace',
              marginBottom: 24,
            }}
          >
            {eyebrow}
          </span>
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              display: 'flex',
              textShadow: '0 0 40px rgba(255,255,255,0.35)',
              color: '#ffffff',
            }}
          >
            {truncated}
          </div>
          {sub && (
            <div
              style={{
                marginTop: 20,
                fontSize: 26,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {sub}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontSize: 13,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'Mono, monospace',
            }}
          >
            ngentech.co
          </span>
          {metric && (
            <span
              style={{
                fontSize: 18,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'Mono, monospace',
              }}
            >
              {metric}
            </span>
          )}
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: fonts.length > 0 ? fonts : undefined,
    },
  )
}