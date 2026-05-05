import { Check, ArrowRight, Zap, Building2, Globe } from 'lucide-react'

const PLANS = [
  {
    icon: Zap,
    name: 'Starter Protection',
    tagline: 'Essential security for small teams.',
    price: 'From R299/mo',
    features: [
      'Endpoint antivirus & anti-malware',
      'Real-time threat monitoring',
      'Automatic security updates',
      'Email threat protection',
      'Monthly security reports',
    ],
    featured: false,
  },
  {
    icon: Building2,
    name: 'Business Secure',
    tagline: 'Complete coverage for growing businesses.',
    price: 'From R599/mo',
    features: [
      'Everything in Starter',
      'Patch management & OS updates',
      'Advanced email security',
      'Multi-device management',
      'Priority support response',
      'Quarterly security reviews',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    icon: Globe,
    name: 'Advanced Security',
    tagline: 'Enterprise-grade protection, without the complexity.',
    price: 'From R999/mo',
    features: [
      'Everything in Business Secure',
      'EDR (Endpoint Detection & Response)',
      'Data Loss Prevention (DLP)',
      'Automated cloud backup',
      'Compliance reporting',
      'Dedicated security advisor',
    ],
    featured: false,
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #0B1F3A 0%, #0D2540 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '50%',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(63,193,174,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            Protection Plans
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: '#E6F7F5',
            margin: '0 0 1rem',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Security packages built for{' '}
            <span className="text-teal-glow">South African businesses.</span>
          </h2>
          <p style={{
            color: 'rgba(230,247,245,0.62)',
            fontSize: '1.05rem',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Simple, transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Plans grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {PLANS.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={plan.featured ? 'glow-card-featured' : 'glow-card'}
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transform: plan.featured ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#3FC1AE',
                    color: '#0F172A',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 1rem',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                  }}>
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: plan.featured ? 'rgba(63,193,174,0.15)' : 'rgba(63,193,174,0.08)',
                  border: '1px solid rgba(63,193,174,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={22} color="#3FC1AE" />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#E6F7F5', margin: '0 0 0.4rem' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(230,247,245,0.55)', margin: '0 0 1.25rem', lineHeight: 1.5 }}>
                  {plan.tagline}
                </p>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3FC1AE', marginBottom: '1.5rem' }}>
                  {plan.price}
                  <span style={{ fontSize: '0.8rem', color: 'rgba(230,247,245,0.45)', fontWeight: 400 }}> per device</span>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      marginBottom: '0.65rem',
                      fontSize: '0.9rem',
                      color: 'rgba(230,247,245,0.78)',
                    }}>
                      <Check size={15} color="#3FC1AE" style={{ marginTop: '0.18rem', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#review" className={plan.featured ? 'btn-primary' : 'btn-secondary'} style={{ justifyContent: 'center' }}>
                  Get Started
                  <ArrowRight size={15} />
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '0.85rem',
          color: 'rgba(230,247,245,0.45)',
        }}>
          All plans include free onboarding support. Contact us for custom enterprise pricing.
        </p>
      </div>
    </section>
  )
}
