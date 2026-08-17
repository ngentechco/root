export default function Loading() {
  return (
    <div className="relative z-10 min-h-[50vh] flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
        <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-50" />
      </div>
      <p className="text-xs tracking-[0.4em] uppercase text-white/40">Loading</p>
    </div>
  )
}