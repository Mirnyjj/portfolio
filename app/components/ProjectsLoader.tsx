export function ProjectsLoader() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping" />
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-150" />
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping delay-300" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-4">
              Мои проекты
            </h2>
            <p className="text-xl text-slate-400 animate-pulse">
              Загружаю портфолио...
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="group bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 h-64 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-4 animate-pulse">
                <div className="h-8 bg-slate-800 rounded-xl w-4/5 mb-4" />

                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-6 bg-slate-800/70 rounded-full w-20 px-3"
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="h-4 bg-slate-800 rounded w-full" />
                  <div className="h-4 bg-slate-800 rounded w-5/6" />
                </div>

                <div className="flex gap-3 mt-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl" />
                  <div className="w-10 h-10 bg-slate-800 rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
