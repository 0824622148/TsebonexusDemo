import { Shield, Lock, Database } from 'lucide-react'

const PILLARS = [
  {
    icon: Shield,
    title: 'Endpoint Security',
    description: 'Every device in your business protected — laptops, desktops, and servers monitored around the clock.',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Keep sensitive business data private and compliant. Encryption, access control, and threat prevention built in.',
  },
  {
    icon: Database,
    title: 'Backup & Recovery',
    description: 'Automatic, verified backups so that ransomware and hardware failure can never hold your business hostage.',
  },
]

export default function TrustSection() {
  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(180deg, #102A4C 0%, #0B1F3A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top divider glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(63,193,174,0.35), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: '#3FC1AE',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.85rem',
          }}>
            Why Tsebonexus
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: '#E6F7F5',
            margin: '0 0 1rem',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            No noise. No confusion.{' '}
            <span className="text-teal-glow">Just reliable protection.</span>
          </h2>
          <p style={{
            color: 'rgba(230,247,245,0.62)',
            fontSize: '1.05rem',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            We take security off your plate so you can run your business without distraction.
          </p>
        </div>

        {/* Pillars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
        }}>
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="glow-card" style={{ padding: '2rem' }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: '14px',
                background: 'rgba(63, 193, 174, 0.1)',
                border: '1px solid rgba(63, 193, 174, 0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                boxShadow: '0 0 16px rgba(63,193,174,0.18)',
              }}>
                <Icon size={24} color="#3FC1AE" />
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#E6F7F5',
                margin: '0 0 0.65rem',
              }}>
                {title}
              </h3>
              <p style={{
                color: 'rgba(230,247,245,0.62)',
                fontSize: '0.93rem',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div style={{
          marginTop: '3.5rem',
          padding: '1.75rem 2rem',
          borderRadius: '16px',
          background: 'rgba(63, 193, 174, 0.05)',
          border: '1px solid rgba(63, 193, 174, 0.12)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {[
            { value: 'Bitdefender', label: 'Certified Partner' },
            { value: '24/7', label: 'Monitoring & Alerts' },
            { value: 'Zero', label: 'Complexity Promise' },
            { value: 'Local', label: 'South African Support' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#3FC1AE' }}>{item.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(230,247,245,0.5)', marginTop: '0.2rem' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
