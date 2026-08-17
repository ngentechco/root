import Link from 'next/link'

export interface Crumb {
  name: string
  href: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/30">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={item.href} className="flex items-center gap-2">
            {isLast ? (
              <span className="text-white/50">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            )}
            {!isLast && <span className="text-white/20">/</span>}
          </span>
        )
      })}
    </nav>
  )
}