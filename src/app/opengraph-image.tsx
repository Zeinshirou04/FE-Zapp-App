// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zapp Freelance — Elegant software for your growing business'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#1C1B20',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle violet glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-80px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(98,70,234,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            display: 'flex', // ← required even for single-child/decorative divs
          }}
        />

        {/* Top — logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
            Zapp
          </span>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#6246EA' }}>.</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginLeft: '12px' }}>
            Freelance
          </span>
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#9B85FF', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Software Development · Indonesia
          </span>
          {/* ← div with multiple children needs display:flex */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '68px', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
              Elegant software
            </span>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '18px' }}>
              <span style={{ fontSize: '68px', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
                for your
              </span>
              <span style={{ fontSize: '68px', fontWeight: 800, color: '#9B85FF', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
                growing
              </span>
            </div>
            <span style={{ fontSize: '68px', fontWeight: 800, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
              business.
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ width: '48px', height: '2px', background: '#6246EA', display: 'flex' }} />
          <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, maxWidth: '640px' }}>
            Affordable SaaS apps, REST APIs, and admin dashboards for micro businesses across Indonesia.
          </span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>
            Laravel · Next.js · Tailwind CSS · MySQL
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}