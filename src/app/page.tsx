import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="text-2xl font-bold tracking-tighter">
          17Vibe<span className="text-purple-500">.</span>
        </div>
        <div className="space-x-8 text-sm opacity-60">
          <Link href="/protocol" className="hover:opacity-100 transition">
            Protocol
          </Link>
          <Link href="/network" className="hover:opacity-100 transition">
            Network
          </Link>
          <a
            href="https://github.com/dongsheng123132/17vibe-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition"
          >
            GitHub
          </a>
        </div>
      </nav>

      <main className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 flex-grow">
        
        <div className="absolute vibe-radar w-[500px] h-[500px] rounded-full z-0 pointer-events-none"></div>

        <div className="z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            KILL THE RESUME.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
              FIND THE VIBE.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
            17Vibe 是基于 17Kernel 协议的人类意图路由器。<br/>
            不再扫描简历，我们扫描你的数字灵魂。
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer flex flex-col items-center">
              <span>JOIN THE GENESIS 17</span>
              <span className="text-[10px] opacity-60 font-normal">Only 17 Slots Available</span>
            </button>
            <Link href="/protocol" className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer inline-flex items-center justify-center">
              Read the Manifesto
            </Link>
          </div>

          <div className="mt-12 p-4 border border-purple-500/20 rounded-lg bg-purple-500/5 backdrop-blur-sm max-w-lg mx-auto">
            <p className="text-sm text-purple-300 mb-2 font-bold">BOOTSTRAPPING PHASE 0</p>
            <p className="text-xs opacity-60">
              We are not building a tool. We are assembling the first 17 nodes to define the <span className="text-white font-bold">Life-MCP Protocol</span>.
              <br/>
              Join us to hack the future of human coordination.
            </p>
          </div>
        </div>
      </main>

      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-12 w-full">
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-purple-400 mb-2">01 / Passive Fingerprinting</h3>
          <p className="opacity-60 text-sm">Automated capability extraction from GitHub/Twitter via LLM analysis.</p>
        </div>
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-purple-400 mb-2">02 / Vector Resonance</h3>
          <p className="opacity-60 text-sm">Matching complementary skill sets through high-dimensional vector routing.</p>
        </div>
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-purple-400 mb-2">03 / Zero-Knowledge</h3>
          <p className="opacity-60 text-sm">Your raw data stays local. Only intent vectors are broadcasted to the network.</p>
        </div>
      </section>

      <footer className="py-10 text-center text-xs opacity-30">
        &copy; 2026 17Vibe. Protocol by 17Kernel.
      </footer>
    </div>
  );
}
