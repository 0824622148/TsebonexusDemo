import { MessageCircle } from 'lucide-react'
import { WA_HELP_URL } from '../constants'

export default function WhatsAppButton() {
  return (
    <a
      href={WA_HELP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
        textDecoration: 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.65)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)'
      }}
    >
      {/* Pulse ring */}
      <span
        className="animate-pulse-ring"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.7)',
          pointerEvents: 'none',
        }}
      />
      <MessageCircle size={26} color="#fff" fill="#fff" />
    </a>
  )
}
