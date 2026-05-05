import { ShoppingCart, Headphones, Check, Tag } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { WA_SHOP_URL, WA_HELP_URL } from '../constants'

const HOME_PRODUCTS = [
  {
    name: 'Bitdefender Antivirus Plus',
    description: 'Essential antivirus and anti-malware protection with real-time threat detection. Perfect for home users wanting reliable, lightweight security.',
    price: 'From R99/month',
    features: ['Real-time malware protection', 'Anti-phishing & fraud prevention', 'Autopilot mode', 'Low system impact'],
    devices: '1–3 PCs',
  },
  {
    name: 'Bitdefender Internet Security',
    description: 'Comprehensive protection with added firewall, parental controls, and privacy tools for the whole family.',
    price: 'From R149/month',
    features: ['Everything in Antivirus Plus', 'Two-way firewall', 'Parental controls', 'Webcam & microphone protection'],
    devices: '1–3 PCs',
    popular: true,
  },
  {
    name: 'Bitdefender Total Security',
    description: 'Ultimate multi-device protection for Windows, Mac, Android, and iOS — one subscription covers your whole household.',
    price: 'From R199/month',
    features: ['Everything in Internet Security', 'Cross-platform (Win/Mac/iOS/Android)', 'Anti-theft tools', 'VPN included (200MB/day)', 'File shredder'],
    devices: 'Up to 5 devices',
  },
]

const BUSINESS_PRODUCTS = [
  {
    name: 'Bitdefender GravityZone Business Security',
    description: 'Cloud-managed endpoint protection built for small and medium businesses. Deploy, monitor and respond from a single dashboard — no IT team needed.',
    price: 'From R299/month',
    features: [
      'Centralised cloud management console',
      'Endpoint antivirus & anti-malware',
      'Patch management (optional add-on)',
      'Email security (optional add-on)',
      'Scalable from 5 to 100+ devices',
      'Local South African support',
    ],
    devices: '5+ devices',
    badge: 'Best for SMBs',
  },
]

function ProductCard({ product, isBusiness }) {
  return (
    <div className="glow-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {product.popular && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#3FC1AE',
          color: '#0F172A',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '0.28rem 0.9rem',
          borderRadius: '100px',
          whiteSpace: 'nowrap',
        }}>
          Most Popular
        </div>
      )}
      {product.badge && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(63,193,174,0.15)',
          border: '1px solid rgba(63,193,174,0.4)',
          color: '#3FC1AE',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '0.28rem 0.9rem',
          borderRadius: '100px',
          whiteSpace: 'nowrap',
        }}>
          {product.badge}
        </div>
      )}

      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#E6F7F5', margin: '0 0 0.5rem' }}>
        {product.name}
      </h3>

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        background: 'rgba(63,193,174,0.08)',
        border: '1px solid rgba(63,193,174,0.18)',
        borderRadius: '100px',
        padding: '0.2rem 0.7rem',
        marginBottom: '0.85rem',
        width: 'fit-content',
      }}>
        <Tag size={11} color="#3FC1AE" />
        <span style={{ fontSize: '0.75rem', color: '#3FC1AE', fontWeight: 600 }}>{product.devices}</span>
      </div>

      <p style={{ fontSize: '0.88rem', color: 'rgba(230,247,245,0.6)', lineHeight: 1.65, margin: '0 0 1.1rem', flex: isBusiness ? 0 : 1 }}>
        {product.description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', flex: isBusiness ? 1 : 0 }}>
        {product.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'rgba(230,247,245,0.72)' }}>
            <Check size={13} color="#3FC1AE" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#3FC1AE', marginBottom: '1.25rem' }}>
        {product.price}
        <span style={{ fontSize: '0.78rem', fontWeight: 400, color: 'rgba(230,247,245,0.4)' }}> / billed monthly</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <a href={WA_SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center' }}>
          <ShoppingCart size={15} />
          Buy Now
        </a>
        <a href={WA_HELP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-sm" style={{ justifyContent: 'center' }}>
          <Headphones size={13} />
          Get Setup Assistance
        </a>
      </div>
    </div>
  )
}

function CategoryHeading({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3FC1AE', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.5rem' }}>
        {label}
      </p>
      <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#E6F7F5', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      <p style={{ fontSize: '0.9rem', color: 'rgba(230,247,245,0.55)', margin: 0 }}>{subtitle}</p>
    </div>
  )
}

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'linear-gradient(180deg, #0B1F3A 0%, #102A4C 40%, #0B1F3A 100%)' }}>
        {/* Shop hero header */}
        <section style={{
          padding: '5rem 1.5rem 3rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #102A4C 0%, #0B1F3A 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Ambient blobs */}
          {[
            { size: 300, top: '-20%', left: '70%', delay: '0s' },
            { size: 200, top: '50%',  left: '-5%', delay: '2s' },
          ].map((d, i) => (
            <div key={i} className="animate-float-slow" style={{
              position: 'absolute',
              width: d.size, height: d.size,
              borderRadius: '50%',
              top: d.top, left: d.left,
              background: 'radial-gradient(circle, rgba(63,193,174,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
              animationDelay: d.delay,
            }} />
          ))}

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#3FC1AE', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
              Bitdefender Licensing
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#E6F7F5', margin: '0 0 1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Security <span className="text-teal-glow">Shop</span>
            </h1>
            <p style={{ color: 'rgba(230,247,245,0.65)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
              Genuine Bitdefender licenses with local support. Choose the plan that fits your household or business.
            </p>

            {/* Free setup banner */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
              background: 'rgba(63,193,174,0.1)',
              border: '1px solid rgba(63,193,174,0.25)',
              borderRadius: '100px',
              padding: '0.45rem 1.1rem',
            }}>
              <Check size={14} color="#3FC1AE" />
              <span style={{ color: '#3FC1AE', fontSize: '0.85rem', fontWeight: 600 }}>
                Free setup support included with every purchase
              </span>
            </div>
          </div>
        </section>

        {/* Shop body */}
        <section className="section" style={{ background: 'transparent' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Home users */}
            <CategoryHeading
              label="Home Users"
              title="Personal & Family Protection"
              subtitle="Keep your home devices and family safe from viruses, hackers, and online threats."
            />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: '1.25rem',
              marginBottom: '4rem',
              alignItems: 'stretch',
            }}>
              {HOME_PRODUCTS.map(p => <ProductCard key={p.name} product={p} isBusiness={false} />)}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(63,193,174,0.2), transparent)', marginBottom: '4rem' }} />

            {/* Small business */}
            <CategoryHeading
              label="Small Business"
              title="Business Endpoint Protection"
              subtitle="Cloud-managed security that scales with your team — no dedicated IT required."
            />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '1.25rem',
              maxWidth: '700px',
            }}>
              {BUSINESS_PRODUCTS.map(p => <ProductCard key={p.name} product={p} isBusiness={true} />)}
            </div>

            {/* Bottom CTA */}
            <div style={{
              marginTop: '4rem',
              padding: '2.5rem',
              borderRadius: '20px',
              background: 'rgba(63,193,174,0.05)',
              border: '1px solid rgba(63,193,174,0.15)',
              textAlign: 'center',
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#E6F7F5', margin: '0 0 0.75rem' }}>
                Not sure which plan is right for you?
              </h3>
              <p style={{ color: 'rgba(230,247,245,0.62)', margin: '0 0 1.5rem', fontSize: '0.95rem' }}>
                Chat with us on WhatsApp and we'll recommend the best fit for your situation — no pressure.
              </p>
              <a href={WA_HELP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Headphones size={16} />
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
