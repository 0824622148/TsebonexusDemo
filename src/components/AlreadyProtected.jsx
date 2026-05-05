import { ArrowRight, Search } from 'lucide-react'

export default function AlreadyProtected() {
  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(135deg, #102A4C 0%, #0B1F3A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background dots */}
      {[
        { size: 180, top: '-10%', left: '80%', delay: '0s' },
        { size: 100, top: '60%',  left: '5%',  delay: '2s' },
      ].map((d, i) => (
        <div
          key={i}
          className="animate-float-slow"
          style={{
            position: 'absolute',
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            top: d.top,
            left: d.left,
            background: 'radial-gradient(circle, rgba(63,193,174,0.07) 0%, transparent 70%)',
            border: '1px solid rgba(63,193,174,0.08)',
            animationDelay: d.delay,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'rgba(63,193,174,0.1)',
          border: '1px solid rgba(63,193,174,0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          boxShadow: '0 0 20px rgba(63,193,174,0.18)',
        }}>
          <Search size={24} color="#3FC1AE" />
        </div>

        <h2 style={{
          fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
          fontWeight: 700,
          color: '#E6F7F5',
          margin: '0 0 1rem',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          Already protected?{' '}
          <span className="text-teal-glow">Let's make sure it's enough.</span>
        </h2>

        <p style={{
          color: 'rgba(230,247,245,0.65)',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          margin: '0 0 2rem',
          maxWidth: '560px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Having antivirus software isn't the same as being secure. We'll audit what
          you have and tell you honestly whether it's enough — or where the gaps are.
        </p>

        <a href="#review" className="btn-primary">
          Get Free Security Audit
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
