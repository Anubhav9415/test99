export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 via-purple-900 to-black">
      <div className="flex flex-col items-center gap-6 px-6">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-violet-500/20 blur-2xl animate-pulse" />
          <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
            AI
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-white">Neon AI Pulse</h1>
        <p className="text-sm text-white/80 max-w-xl text-center">
          Simulated neural activity — thoughts rendered as gentle pulses.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="inline-block w-3 h-3 bg-white rounded-full animate-pulse" />
          <span className="inline-block w-3 h-3 bg-white rounded-full animate-pulse delay-75" />
          <span className="inline-block w-3 h-3 bg-white rounded-full animate-pulse delay-150" />
          <span className="ml-3 text-white/70">Thinking...</span>
        </div>
      </div>
    </main>
  );
}
