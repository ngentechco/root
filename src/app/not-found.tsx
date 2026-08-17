import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="label mb-6">Error 404</p>
      <h1 className="font-display font-black text-7xl md:text-8xl tracking-tight">
        <span className="animate-glow">LOST</span>
      </h1>
      <p className="mt-6 text-white/50 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist — or the research hasn&apos;t been
        published yet.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn-primary">Back Home</Link>
      </div>
    </section>
  )
}