import { ArrowUpRight } from "lucide-react";

export function MinimalLines() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-['Inter'] relative overflow-hidden">

      {/* Faint matrix background top-right */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none opacity-[0.06]">
        <img src="/__mockup/images/matrix-choice.jpg" alt="" className="w-full h-full object-cover object-left" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080808]" />
      </div>

      <header className="px-8 py-6 flex items-center justify-between relative z-10 border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src="/__mockup/images/logo-black.png" alt="A17" className="w-10 h-10 object-contain" />
          <div>
            <div className="text-sm font-black text-white tracking-tight leading-none">Austin Abuoga</div>
            <div className="text-[9px] text-white/25 tracking-[0.25em] uppercase mt-0.5">Social Media · Data Analysis</div>
          </div>
        </div>
        <span className="text-[10px] text-white/20 tracking-widest uppercase">Kenya / Global</span>
      </header>

      <main className="flex-1 flex flex-col justify-center px-8 py-12 relative z-10 max-w-3xl">

        <p className="text-[10px] text-white/25 tracking-[0.3em] uppercase mb-8">Select a portfolio</p>

        {/* Item 1 */}
        <div className="group flex items-end justify-between py-8 border-b border-white/10 hover:border-rose-500/30 cursor-pointer transition-all duration-400">
          <div className="flex items-start gap-8">
            <span className="text-[11px] text-rose-400/40 group-hover:text-rose-400/70 font-mono mt-2 transition-colors">01</span>
            <div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white/80 group-hover:text-white leading-none transition-colors">
                Social Media<br /><em className="not-italic text-rose-400/70 group-hover:text-rose-400">Management</em>
              </h2>
              <p className="text-white/25 text-sm mt-3 max-w-sm group-hover:text-white/40 transition-colors">
                Client cases, growth metrics, content campaigns & strategy.
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-rose-500/50 flex items-center justify-center shrink-0 mb-1 group-hover:bg-rose-500/10 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-rose-400 transition-colors" />
          </div>
        </div>

        {/* Item 2 */}
        <div className="group flex items-end justify-between py-8 border-b border-white/10 hover:border-amber-500/30 cursor-pointer transition-all duration-400">
          <div className="flex items-start gap-8">
            <span className="text-[11px] text-amber-400/40 group-hover:text-amber-400/70 font-mono mt-2 transition-colors">02</span>
            <div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white/80 group-hover:text-white leading-none transition-colors">
                Data<br /><em className="not-italic text-amber-400/70 group-hover:text-amber-400">Analysis</em>
              </h2>
              <p className="text-white/25 text-sm mt-3 max-w-sm group-hover:text-white/40 transition-colors">
                SQL, Python, Power BI dashboards & data pipeline projects.
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-amber-500/50 flex items-center justify-center shrink-0 mb-1 group-hover:bg-amber-500/10 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-400 transition-colors" />
          </div>
        </div>

      </main>

      <footer className="px-8 py-4 border-t border-white/5 flex items-center justify-between text-xs text-white/15 relative z-10">
        <span>Abuogaaustin@gmail.com</span>
        <span>+254 799 867 387</span>
      </footer>
    </div>
  );
}
