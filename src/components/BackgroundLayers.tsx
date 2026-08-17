export function BackgroundLayers({ variant = 'grid' }: { variant?: 'grid' | 'orb' }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {variant === 'grid' && <div className="absolute inset-0 grid-bg opacity-60" />}
      {variant === 'orb' && (
        <>
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-[100px] animate-float bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)] -top-[250px] -right-[150px]" />
          <div className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-[100px] animate-float [animation-delay:-5s] bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,transparent_70%)] -bottom-[200px] -left-[150px]" />
        </>
      )}
      <div className="absolute inset-0 radial-glow" />
    </div>
  )
}