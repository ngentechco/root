'use client'

import { useState } from 'react'

interface NewsletterSignupProps {
  compact?: boolean
  label?: string
}

export function NewsletterSignup({ compact = false, label = 'Join the newsletter' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setState('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('failed')
      setState('success')
      setEmail('')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="border border-white/20 bg-white/5 px-6 py-4 text-sm text-white/80">
        You&apos;re on the list. Welcome to the signal.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'flex flex-col sm:flex-row gap-3 w-full max-w-md' : 'max-w-xl mx-auto'}>
      <p className="label mb-3 text-center">{label}</p>
      <div className={compact ? 'flex flex-col sm:flex-row gap-3 w-full' : 'flex flex-col sm:flex-row gap-3'}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="input"
        />
        <button type="submit" disabled={state === 'loading'} className="btn-primary shrink-0">
          {state === 'loading' ? 'Signing up…' : 'Sign up'}
        </button>
      </div>
      {state === 'error' && <p className="text-xs text-white/40 mt-2">Something went wrong. Try again.</p>}
    </form>
  )
}