'use client'

import { useEffect } from 'react'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, { anonymize_ip: true })
  }, [])

  return null
}

export function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <VercelAnalytics />
    </>
  )
}