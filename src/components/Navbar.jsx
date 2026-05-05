import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { asset } from '../constants'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Free Cyber Review', href: '/#review' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const handleNavClick = (href) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled
          ? 'rgba(11, 31, 58, 0.95)'
          : 'rgba(11, 31, 58, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(63, 193, 174, 0.12)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: '210px', height: '58px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={asset('logo-nobg.png')}
                alt="TseboNexus"
                style={{
                  position: 'absolute',
                  width: '420px',
                  height: 'auto',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {NAV_LINKS.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    color: 'rgba(230, 247, 245, 0.8)',
                    textDecoration: 'none',
                    fontSize: '0.93rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#3FC1AE'}
                  onMouseLeave={e => e.target.style.color = 'rgba(230, 247, 245, 0.8)'}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    color: location.pathname === link.href ? '#3FC1AE' : 'rgba(230, 247, 245, 0.8)',
                    textDecoration: 'none',
                    fontSize: '0.93rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#3FC1AE'}
                  onMouseLeave={e => e.target.style.color = location.pathname === link.href ? '#3FC1AE' : 'rgba(230, 247, 245, 0.8)'}
                >
                  {link.label}
                </Link>
              )
            ))}
            <a href="/#review" className="btn-primary" style={{ padding: '0.55rem 1.3rem', fontSize: '0.9rem' }}>
              Get Free Review
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: '#E6F7F5',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(11, 31, 58, 0.98)',
          borderTop: '1px solid rgba(63, 193, 174, 0.12)',
          padding: '1.25rem 1.5rem 1.5rem',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {NAV_LINKS.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    color: 'rgba(230, 247, 245, 0.85)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '0.35rem 0',
                    borderBottom: '1px solid rgba(63, 193, 174, 0.08)',
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    color: 'rgba(230, 247, 245, 0.85)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '0.35rem 0',
                    borderBottom: '1px solid rgba(63, 193, 174, 0.08)',
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
            <a href="/#review" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
              Get Free Review
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
