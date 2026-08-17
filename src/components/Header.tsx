'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/data/site'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-8 h-8 border border-white/30 bg-white/[0.03] transition-colors group-hover:bg-white/10">
            <span className="font-display font-black text-xs text-white">N</span>
          </div>
          <span className="font-display text-xs tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors">
            Ngentech
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className="text-[11px] uppercase tracking-[0.2em] text-black bg-white px-4 py-2 hover:bg-white/80 transition-colors"
          >
            Newsletter
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50"
          aria-label="Toggle menu"
        >
          <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-black/95">
          <div className="container-x flex flex-col py-4 gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-black bg-white px-4 py-2 w-fit"
            >
              Newsletter
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}