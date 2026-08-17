import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/8">
      <div className="container-x py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 border border-white/30">
              <span className="font-display font-black text-xs text-white">N</span>
            </div>
            <span className="font-display text-xs tracking-[0.25em] uppercase text-white/60">
              Ngentech
            </span>
          </div>
          <p className="text-sm text-white/40 max-w-sm">
            {siteConfig.tagline}. A technology research organization building Clerk and ACAD.
          </p>
        </div>

        <div>
          <p className="label mb-4">Products</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><Link href="/clerk" className="hover:text-white transition-colors">Clerk</Link></li>
            <li><Link href="/acad" className="hover:text-white transition-colors">ACAD</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Company</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-x py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] tracking-[0.2em] text-white/20 uppercase">
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-white/30">
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}