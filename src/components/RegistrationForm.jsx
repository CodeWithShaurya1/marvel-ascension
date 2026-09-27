import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'
import SectionHeader from './SectionHeader'

const empty = { name: '', email: '', phone: '', collegeId: '' }

export default function RegistrationForm() {
  const [values, setValues] = useState(empty)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const [saving, setSaving] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!values.name || !values.email || !values.phone || !values.collegeId) {
      setError('All fields required to assemble.')
      return
    }
    setError('')
    setSaving(true)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = await response.json()
      if (!response.ok || !result.ok) throw new Error(result.error || 'Registration failed')
      setSent(true)
    } catch (err) {
      setError('Registration could not be saved. Start the Vite server and try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <section id="register" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <div>
          <SectionHeader kicker="SECTION 07" title="JOIN" accent="THE AVENGERS." />
          <p className="text-lg tracking-[0.18em] text-fog">YOUR STORY STARTS HERE.</p>
        </div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-energy/40 bg-energy/10 px-8 py-16"
              role="status"
            >
              <p className="meta mb-4 text-energy">SIGNAL LOCKED</p>
              <p className="display text-5xl text-ivory md:text-7xl">TRANSMISSION RECEIVED.</p>
              <p className="mt-6 text-xl text-fog">WELCOME TO THE MULTIVERSE.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              noValidate
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-6"
            >
              <Field label="Name" name="name" value={values.name} onChange={onChange} autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                autoComplete="email"
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={onChange}
                autoComplete="tel"
              />
              <Field
                label="College ID"
                name="collegeId"
                value={values.collegeId}
                onChange={onChange}
              />
              {error ? (
                <p className="text-sm text-energy" role="alert">
                  {error}
                </p>
              ) : null}
              <MagneticButton
                type="submit"
                disabled={saving}
                className="mt-2 justify-self-start border border-energy bg-energy px-8 py-4 text-xs tracking-[0.28em] text-void disabled:cursor-wait disabled:opacity-60"
              >
                {saving ? 'SAVING…' : 'ASSEMBLE →'}
              </MagneticButton>
              <p className="meta text-[0.52rem] text-fog/55">LOCAL DEMO MODE • SAVES TO data/registrations.csv</p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, autoComplete }) {
  const id = `field-${name}`
  return (
    <label htmlFor={id} className="block">
      <span className="meta mb-2 block">{label}</span>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full border-b border-ivory/20 bg-transparent py-3 text-ivory outline-none transition-colors focus:border-energy"
      />
    </label>
  )
}
