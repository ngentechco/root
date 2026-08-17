import { Reveal } from '@/components/Reveal'

interface PageHeroProps {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, highlight, description, children }: PageHeroProps) {
  return (
    <section className="relative z-10 pt-40 pb-20">
      <div className="container-x text-center">
        <Reveal>
          <p className="eyebrow justify-center mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-none">
            {title} {highlight && <span className="gradient-text">{highlight}</span>}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl mx-auto text-white/50 text-lg">{description}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  )
}