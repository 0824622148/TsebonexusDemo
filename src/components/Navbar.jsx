import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { asset } from '../constants'

const NAV_LINKS = [
  { label: 'Home',             href: '/'          },
  { label: 'Services',         href: '/#services' },
  { label: 'Free Cyber Review',href: '/#review'   },
  { label: 'Shop',             href: '/shop'      },
  { label: 'Contact',          href: '/#contact'  },
]

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const [isMobile,  setIsMobile]  = useState(window.innerWidth < 768)
  const location = useLocation()

  useEffect(() => {
    const onScroll  = () => setScrolled(window.scrollY > 20)
    const onResize  = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleAnchorClick = (href) => {
    setMenuOpen(false)
    if (href.startsWith('/#') && location.pathname === '/') {
      document.getElementById(href.slice(2))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderLink = (link, mobile = false) => {
    const baseStyle = mobile ? mobileLinkStyle : desktopLinkStyle
    const isActive  = !link.href.includes('#') && location.pathname === link.href

    if (link.href.startsWith('/#')) {
      return (
        <a
          key={link.label}
          href={link.href}
          onClick={() => handleAnchorClick(link.href)}
          style={{ ...baseStyle, color: isActive ? '#3FC1AE' : baseStyle.color }}
        >
          {link.label}
        </a>
      )
    }
    return (
      <Link
        key={link.label}
        to={link.href}
        onClick={() => setMenuOpen(false)}
        style={{ ...baseStyle, color: isActive ? '#3FC1AE' : baseStyle.color }}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <>
      <nav style={{
        position:      'sticky',
        top:           0,
        zIndex:        100,
        background:    scrolled ? 'rgba(11,31,58,0.97)' : 'rgba(11,31,58,0.82)',
        backdropFilter:'blur(18px)',
        borderBottom:  scrolled ? '1px solid rgba(63,193,174,0.14)' : '1px solid transparent',
        transition:    'all 0.3s ease',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <div style={{ width: isMobile ? '160px' : '210px', height: '56px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={asset('logo-nobg.png')}
                  alt="TseboNexus"
                  style={{
                    position:  'absolute',
                    width:     isMobile ? '320px' : '420px',
                    height:    'auto',
                    top:       '50%',
                    left:      '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
            </Link>

            {/* Desktop nav */}
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
                {NAV_LINKS.map(link => renderLink(link, false))}
                <a href="/#review" style={ctaBtnStyle}>Get Free Review</a>
              </div>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                style={{
                  background:  'none',
                  border:      '1px solid rgba(63,193,174,0.3)',
                  borderRadius:'8px',
                  color:       '#E6F7F5',
                  cursor:      'pointer',
                  padding:     '0.45rem 0.55rem',
                  display:     'flex',
                  flexDirection:'column',
                  gap:         '5px',
                  alignItems:  'center',
                  justifyContent:'center',
                  transition:  'border-color 0.2s',
                }}
              >
                {/* 3-line hamburger / X toggle */}
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3FC1AE" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="18" y1="6"  x2="6"  y2="18" />
                    <line x1="6"  y1="6"  x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="#3FC1AE" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="0" y1="1"  x2="22" y2="1"  />
                    <line x1="0" y1="9"  x2="22" y2="9"  />
                    <line x1="0" y1="17" x2="22" y2="17" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile drawer — rendered outside nav so it doesn't push content */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position:   'fixed',
              inset:      0,
              zIndex:     98,
              background: 'rgba(7,15,31,0.6)',
              backdropFilter: 'blur(4px)',
              opacity:    menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? 'auto' : 'none',
              transition: 'opacity 0.25s ease',
            }}
          />

          {/* Slide-down drawer */}
          <div style={{
            position:   'fixed',
            top:        '68px',
            left:       0,
            right:      0,
            zIndex:     99,
            background: 'rgba(11,31,58,0.99)',
            borderBottom: '1px solid rgba(63,193,174,0.18)',
            transform:  menuOpen ? 'translateY(0)' : 'translateY(-110%)',
            opacity:    menuOpen ? 1 : 0,
            transition: 'transform 0.3s ease, opacity 0.25s ease',
            padding:    '0.5rem 0 1.5rem',
            boxShadow:  '0 12px 40px rgba(0,0,0,0.45)',
          }}>
            {NAV_LINKS.map((link, i) => (
              <div key={link.label} style={{
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(63,193,174,0.07)' : 'none',
              }}>
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    style={drawerLinkStyle}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} onClick={() => setMenuOpen(false)} style={drawerLinkStyle}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div style={{ padding: '1rem 1.25rem 0' }}>
              <a
                href="/#review"
                onClick={() => handleAnchorClick('/#review')}
                style={{
                  ...ctaBtnStyle,
                  display:        'flex',
                  justifyContent: 'center',
                  width:          '100%',
                  boxSizing:      'border-box',
                  fontSize:       '1rem',
                  padding:        '0.9rem 1.5rem',
                }}
              >
                Get Free Cyber Review
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}

const desktopLinkStyle = {
  color:          'rgba(230,247,245,0.82)',
  textDecoration: 'none',
  fontSize:       '0.92rem',
  fontWeight:     500,
  transition:     'color 0.2s',
  whiteSpace:     'nowrap',
}

const mobileLinkStyle = {
  ...desktopLinkStyle,
  fontSize: '1rem',
}

const drawerLinkStyle = {
  display:        'block',
  color:          'rgba(230,247,245,0.85)',
  textDecoration: 'none',
  fontSize:       '1.05rem',
  fontWeight:     500,
  padding:        '1rem 1.25rem',
  transition:     'color 0.2s, background 0.2s',
}

const ctaBtnStyle = {
  background:     '#3FC1AE',
  color:          '#0F172A',
  fontWeight:     700,
  padding:        '0.6rem 1.3rem',
  borderRadius:   '10px',
  textDecoration: 'none',
  fontSize:       '0.9rem',
  whiteSpace:     'nowrap',
  transition:     'background 0.2s, box-shadow 0.2s',
}
