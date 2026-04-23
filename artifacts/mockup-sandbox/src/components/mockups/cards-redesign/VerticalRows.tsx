import { ArrowRight } from "lucide-react";

export function VerticalRows() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col overflow-hidden font-['Inter']">

      <header className="px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/__mockup/images/logo-black.png" alt="A17" className="w-12 h-12 object-contain" />
          <div>
            <div className="text-base font-black text-white tracking-tight leading-none">Austin Abuoga</div>
            <div className="text-[10px] text-white/30 tracking-[0.2em] uppercase mt-0.5">Social Media · Data Analysis</div>
          </div>
        </div>
      </header>

      <div className="px-8 pt-6 pb-4">
        <div className="text-[clamp(3rem,9vw,6rem)] font-black leading-[0.92] tracking-tight">
          <span className="text-white">Austin</span><br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">Abuoga.</span>
        </div>
        <p className="text-white/40 text-sm mt-4 max-w-md">Social Media Manager & Data Analyst — Kenya / Global.</p>
      </div>

      <div className="flex-1 flex flex-col px-8 pb-8 gap-3 mt-4 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/__mockup/images/matrix-choice.jpg" alt="" className="w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]/95" />
        </div>

        {/* Row 1 — Social Media */}
        <div className="group relative flex items-center gap-6 border border-white/8 rounded-xl p-6 cursor-pointer hover:border-rose-500/40 transition-all duration-400 bg-[#0a0405]/60 hover:bg-rose-950/20 z-10">
          <div className="text-[4.5rem] font-black text-rose-500/15 group-hover:text-rose-500/25 transition-colors leading-none select-none w-24 shrink-0 text-right">01</div>
          <div className="w-px h-14 bg-rose-500/20 group-hover:bg-rose-500/50 transition-colors shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-rose-400/50 tracking-[0.25em] uppercase mb-1">Portfolio 01</div>
            <h2 className="text-xl font-black text-white leading-tight">Social Media Management</h2>
            <p className="text-white/30 text-sm mt-1">Client cases, growth metrics, content campaigns & strategy.</p>
          </div>
          <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold shrink-0 group-hover:gap-4 transition-all duration-300">
            <span className="hidden sm:block">View</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Row 2 — Data Analysis */}
        <div className="group relative flex items-center gap-6 border border-white/8 rounded-xl p-6 cursor-pointer hover:border-amber-500/40 transition-all duration-400 bg-[#04050a]/60 hover:bg-amber-950/20 z-10">
          <div className="text-[4.5rem] font-black text-amber-500/15 group-hover:text-amber-500/25 transition-colors leading-none select-none w-24 shrink-0 text-right">02</div>
          <div className="w-px h-14 bg-amber-500/20 group-hover:bg-amber-500/50 transition-colors shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-amber-400/50 tracking-[0.25em] uppercase mb-1">Portfolio 02</div>
            <h2 className="text-xl font-black text-white leading-tight">Data Analysis</h2>
            <p className="text-white/30 text-sm mt-1">SQL, Python, Power BI dashboards & data pipeline projects.</p>
          </div>
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold shrink-0 group-hover:gap-4 transition-all duration-300">
            <span className="hidden sm:block">View</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <footer className="px-8 py-4 border-t border-white/5 flex items-center justify-between text-xs text-white/20">
        <span>Abuogaaustin@gmail.com</span>
        <span>+254 799 867 387 · Kenya / Global</span>
      </footer>
    </div>
  );
}
