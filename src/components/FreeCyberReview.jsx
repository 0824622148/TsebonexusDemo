import { useState } from 'react'
import { ArrowRight, CheckCircle, ClipboardList } from 'lucide-react'
import { WA_REVIEW_URL } from '../constants'

const INITIAL = { fullName: '', companyName: '', devices: '', antivirus: '' }

export default function FreeCyberReview() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.fullName.trim())    e.fullName    = 'Full name is required'
    if (!form.companyName.trim()) e.companyName = 'Company name is required'
    if (!form.devices || form.devices < 1) e.devices = 'Please enter number of devices'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSubmitted(true)
    setTimeout(() => { window.open(WA_REVIEW_URL, '_blank') }, 1400)
  }

  const onChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
  }

  return (
    <section
      id="review"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #0D2540 0%, #0B1F3A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top divider */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(63,193,174,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Left: value prop */}
          <div>
            <p style={{
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#3FC1AE',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.85rem',
            }}>
              Free — No Obligation
            </p>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 700,
              color: '#E6F7F5',
              margin: '0 0 1rem',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>
              Get your free{' '}
              <span className="text-teal-glow">Cyber Security Review</span>
            </h2>
            <p style={{
              color: 'rgba(230,247,245,0.65)',
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              In 30 minutes, we'll assess your current security posture and show you
              exactly where you're exposed — at no cost, no pressure.
            </p>
            {[
              'Identify gaps in your current protection',
              'Understand your real risk level',
              'Get a clear, jargon-free action plan',
              'No commitment required',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                <CheckCircle size={17} color="#3FC1AE" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(230,247,245,0.78)', fontSize: '0.93rem' }}>{item}</span>
              </div>
            ))}

            <div style={{
              marginTop: '2rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '14px',
              background: 'rgba(63,193,174,0.06)',
              border: '1px solid rgba(63,193,174,0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                <ClipboardList size={18} color="#3FC1AE" />
                <span style={{ fontWeight: 600, color: '#E6F7F5', fontSize: '0.93rem' }}>What happens next?</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(230,247,245,0.58)', margin: 0, lineHeight: 1.6 }}>
                After submitting, you'll connect with us on WhatsApp to schedule your
                free 30-minute review at a time that suits you.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="glow-card" style={{ padding: '2rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(63,193,174,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    boxShadow: '0 0 24px rgba(63,193,174,0.3)',
                  }}>
                    <CheckCircle size={32} color="#3FC1AE" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#E6F7F5', margin: '0 0 0.6rem' }}>
                    Review Request Sent!
                  </h3>
                  <p style={{ color: 'rgba(230,247,245,0.65)', fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>
                    Opening WhatsApp now so we can connect with you directly.
                    We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#E6F7F5', margin: '0 0 1.5rem' }}>
                    Book Your Free Review
                  </h3>

                  <Field label="Full Name *" error={errors.fullName}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Jane Smith"
                      value={form.fullName}
                      onChange={e => onChange('fullName', e.target.value)}
                    />
                  </Field>

                  <Field label="Company Name *" error={errors.companyName}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Acme Pty Ltd"
                      value={form.companyName}
                      onChange={e => onChange('companyName', e.target.value)}
                    />
                  </Field>

                  <Field label="Number of Devices *" error={errors.devices}>
                    <input
                      type="number"
                      min="1"
                      className="form-input"
                      placeholder="e.g. 10"
                      value={form.devices}
                      onChange={e => onChange('devices', e.target.value)}
                    />
                  </Field>

                  <Field label="Current Antivirus (optional)" error={null}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Windows Defender, Kaspersky…"
                      value={form.antivirus}
                      onChange={e => onChange('antivirus', e.target.value)}
                    />
                  </Field>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                    Get My Free Security Review
                    <ArrowRight size={16} />
                  </button>

                  <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(230,247,245,0.4)', marginTop: '0.85rem', marginBottom: 0 }}>
                    No spam. No commitment. Just clarity.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <label style={{
        display: 'block',
        fontSize: '0.85rem',
        fontWeight: 500,
        color: 'rgba(230,247,245,0.75)',
        marginBottom: '0.4rem',
      }}>
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '0.3rem', marginBottom: 0 }}>
          {error}
        </p>
      )}
    </div>
  )
}
