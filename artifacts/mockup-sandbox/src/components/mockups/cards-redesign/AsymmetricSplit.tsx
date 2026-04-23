import { ArrowRight } from "lucide-react";

export function AsymmetricSplit() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col overflow-hidden font-['Inter']">

      <header className="px-8 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <img src="/__mockup/images/logo-black.png" alt="A17" className="w-12 h-12 object-contain" />
          <div>
            <div className="text-base font-black text-white tracking-tight leading-none">Austin Abuoga</div>
            <div className="text-[10px] text-white/30 tracking-[0.2em] uppercase mt-0.5">Social Media · Data Analysis</div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-8 pb-8 gap-6">

        <div className="pt-4 pb-2">
          <div className="text-[clamp(3rem,9vw,6rem)] font-black leading-[0.92] tracking-tight">
            <span className="text-white">Austin</span><br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">Abuoga.</span>
          </div>
          <p className="text-white/40 text-sm mt-4">Social Media Manager & Data Analyst — Kenya / Global. Choose your path below.</p>
        </div>

        {/* Asymmetric grid: 60/40 */}
        <div className="flex-1 grid grid-cols-5 gap-3 min-h-[340px] relative">

          {/* Matrix bg */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <img src="/__mockup/images/matrix-choice.jpg" alt="" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#080808]/70 to-[#080808]/95" />
          </div>

          {/* Social Media — wide (3/5) */}
          <div className="group col-span-3 relative rounded-2xl border border-white/10 hover:border-rose-500/35 bg-[#0d0508]/70 hover:bg-rose-950/20 transition-all duration-500 p-8 flex flex-col justify-between cursor-pointer overflow-hidden z-10">
            <div className="absolute top-4 right-4 text-[7rem] font-black text-rose-500/8 group-hover:text-rose-500/14 leading-none select-none transition-colors">01</div>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center mb-5">
                <img src="/__mockup/images/logo-black.png" alt="A17" className="w-8 h-8 object-contain" />
              </div>
              <div className="text-[10px] text-rose-400/55 tracking-[0.25em] uppercase mb-2">Portfolio 01</div>
              <h2 className="text-3xl font-black text-white mb-3 leading-tight">Social Media<br />Management</h2>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">Client cases, growth metrics, content campaigns & creative strategy across platforms.</p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-rose-400 text-sm font-semibold mt-6 group-hover:gap-4 transition-all duration-300">
              <span>View portfolio</span><ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Data Analysis — narrow (2/5) */}
          <div className="group col-span-2 relative rounded-2xl border border-white/10 hover:border-amber-500/35 bg-[#04050a]/70 hover:bg-amber-950/20 transition-all duration-500 p-6 flex flex-col justify-between cursor-pointer overflow-hidden z-10">
            <div className="absolute bottom-4 right-4 text-[5rem] font-black text-amber-500/8 group-hover:text-amber-500/14 leading-none select-none transition-colors">02</div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center mb-5">
                <img src="/__mockup/images/logo-black.png" alt="A17" className="w-8 h-8 object-contain" />
              </div>
              <div className="text-[10px] text-amber-400/55 tracking-[0.25em] uppercase mb-2">Portfolio 02</div>
              <h2 className="text-2xl font-black text-white mb-3 leading-tight">Data<br />Analysis</h2>
              <p className="text-white/35 text-sm leading-relaxed">SQL, Python, Power BI & data pipelines.</p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-amber-400 text-sm font-semibold mt-4 group-hover:gap-4 transition-all duration-300">
              <span>View</span><ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>
      </main>

      <footer className="px-8 py-4 border-t border-white/5 flex items-center justify-between text-xs text-white/20">
        <span>Abuogaaustin@gmail.com</span>
        <span>+254 799 867 387 · Kenya / Global</span>
      </footer>
    </div>
  );
}
