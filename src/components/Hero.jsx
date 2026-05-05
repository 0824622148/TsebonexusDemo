import { ArrowRight, Shield } from 'lucide-react'
import { asset } from '../constants'

const DOTS = [
  { size: 220, top: '8%',  left: '75%', color: '#3FC1AE', delay: '0s',   cls: 'animate-float-slow' },
  { size: 120, top: '55%', left: '82%', color: '#6FE3D3', delay: '1.5s', cls: 'animate-float' },
  { size: 80,  top: '20%', left: '88%', color: '#3FC1AE', delay: '3s',   cls: 'animate-float-fast' },
  { size: 160, top: '70%', left: '68%', color: '#6FE3D3', delay: '0.8s', cls: 'animate-float-slow' },
  { size: 50,  top: '35%', left: '95%', color: '#3FC1AE', delay: '2.2s', cls: 'animate-float-fast' },
  { size: 90,  top: '5%',  left: '60%', color: '#6FE3D3', delay: '4s',   cls: 'animate-float' },
  { size: 40,  top: '80%', left: '90%', color: '#3FC1AE', delay: '1s',   cls: 'animate-float-fast' },
  { size: 70,  top: '45%', left: '92%', color: '#6FE3D3', delay: '2.8s', cls: 'animate-float' },
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0B1F3A 0%, #102A4C 60%, #0D2540 100%)',
        padding: '6rem 1.5rem 4rem',
      }}
    >
      {/* Floating dot elements */}
      {DOTS.map((dot, i) => (
        <div
          key={i}
          className={dot.cls}
          style={{
            position: 'absolute',
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            top: dot.top,
            left: dot.left,
            background: `radial-gradient(circle, ${dot.color}22 0%, ${dot.color}08 60%, transparent 100%)`,
            border: `1px solid ${dot.color}18`,
            animationDelay: dot.delay,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Extra ambient glow blobs */}
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: '50%',
        top: '-10%',
        right: '-5%',
        background: 'radial-gradient(circle, rgba(63,193,174,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '50%',
        bottom: '5%',
        left: '-5%',
        background: 'radial-gradient(circle, rgba(111,227,211,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Left: text */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(63, 193, 174, 0.1)',
              border: '1px solid rgba(63, 193, 174, 0.25)',
              borderRadius: '100px',
              padding: '0.4rem 1rem',
              marginBottom: '1.75rem',
            }}>
              <Shield size={14} color="#3FC1AE" />
              <span style={{ color: '#3FC1AE', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                ALWAYS ON. ALWAYS PROTECTED.
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#E6F7F5',
              margin: '0 0 1.25rem',
              letterSpacing: '-0.02em',
            }}>
              Cybersecurity that works{' '}
              <span className="text-teal-glow">quietly</span>{' '}
              in the background.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(230, 247, 245, 0.72)',
              lineHeight: 1.7,
              margin: '0 0 2.5rem',
              maxWidth: '520px',
            }}>
              Tsebonexus protects your business with clarity, control, and zero noise.
              Security without complexity — so you can focus on what matters.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#review" className="btn-primary">
                Get Free Cyber Review
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-secondary">
                View Protection Plans
              </a>
            </div>

            {/* Social proof row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'Businesses Protected', value: '200+' },
                { label: 'Uptime SLA', value: '99.9%' },
                { label: 'Response Time', value: '< 4hrs' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3FC1AE', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(230,247,245,0.55)', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div
            className="animate-fadeInUp"
            style={{ animationDelay: '0.3s', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(63, 193, 174, 0.18)',
              boxShadow: '0 0 60px rgba(63, 193, 174, 0.15), 0 24px 64px rgba(0,0,0,0.4)',
              maxWidth: '480px',
              width: '100%',
            }}>
              <img
                src={asset('security-dashboard.jpg')}
                alt="Security Dashboard"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Overlay tint */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(63,193,174,0.08) 0%, transparent 60%)',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
