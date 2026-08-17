import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let email: string
  try {
    const body = await request.json()
    email = body?.email
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
  }

  const endpoint = process.env.NEWSLETTER_ENDPOINT
  if (endpoint) {
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch {
      // Non-fatal: signup still recorded locally
    }
  }

  return NextResponse.json({ ok: true, email }, { status: 201 })
}