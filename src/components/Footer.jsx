import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { asset } from '../constants'

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const SERVICES_LINKS = [
  { label: 'Endpoint Security', href: '/#services' },
  { label: 'Data Protection',   href: '/#services' },
  { label: 'Backup & Recovery', href: '/#services' },
  { label: 'Security Review',   href: '/#review' },
]

const NAV_LINKS = [
  { label: 'Home',             href: '/' },
  { label: 'Services',         href: '/#services' },
  { label: 'Free Cyber Review', href: '/#review' },
  { label: 'Shop',             href: '/shop' },
  { label: 'Contact',          href: '/#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      style={{
        background: '#070F1F',
        borderTop: '1px solid rgba(63,193,174,0.1)',
        paddingTop: '3.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(63,193,174,0.08)',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ width: '200px', height: '56px', overflow: 'hidden', position: 'relative', marginBottom: '1rem' }}>
              <img
                src={asset('logo-nobg.png')}
                alt="TseboNexus"
                style={{
                  position: 'absolute',
                  width: '400px',
                  height: 'auto',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
            <p style={{
              color: 'rgba(230,247,245,0.55)',
              fontSize: '0.88rem',
              lineHeight: 1.7,
              margin: '0 0 1.25rem',
              maxWidth: '260px',
            }}>
              Quietly protecting South African businesses with clarity, control, and zero noise.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { Icon: LinkedinIcon, href: '#' },
                { Icon: XIcon,        href: '#' },
                { Icon: FacebookIcon, href: '#' },
              ].map(({ Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'rgba(63,193,174,0.08)',
                    border: '1px solid rgba(63,193,174,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    color: '#3FC1AE',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(63,193,174,0.18)'
                    e.currentTarget.style.borderColor = '#3FC1AE'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(63,193,174,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(63,193,174,0.18)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: '#3FC1AE', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 1.1rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {NAV_LINKS.map(link => (
                <li key={link.label} style={{ marginBottom: '0.55rem' }}>
                  {link.href.startsWith('/#') ? (
                    <a href={link.href} style={footerLinkStyle}>{link.label}</a>
                  ) : (
                    <Link to={link.href} style={footerLinkStyle}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: '#3FC1AE', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 1.1rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {SERVICES_LINKS.map(link => (
                <li key={link.label} style={{ marginBottom: '0.55rem' }}>
                  <a href={link.href} style={footerLinkStyle}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: '#3FC1AE', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 1.1rem' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { Icon: Mail,    text: 'hello@tsebonexus.co.za', href: 'mailto:hello@tsebonexus.co.za' },
                { Icon: Phone,   text: '+27 XX XXX XXXX',        href: 'tel:+27XXXXXXXXXX' },
                { Icon: MapPin,  text: 'South Africa',           href: '#' },
              ].map(({ Icon, text, href }) => (
                <li key={text} style={{ marginBottom: '0.75rem' }}>
                  <a href={href} style={{ ...footerLinkStyle, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Icon size={14} color="#3FC1AE" style={{ flexShrink: 0 }} />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.25rem 0',
          fontSize: '0.8rem',
          color: 'rgba(230,247,245,0.35)',
        }}>
          <p style={{ margin: 0 }}>© {year} Tsebonexus. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#" style={{ color: 'rgba(230,247,245,0.35)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(230,247,245,0.35)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const footerLinkStyle = {
  color: 'rgba(230,247,245,0.58)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'color 0.2s',
  cursor: 'pointer',
}
