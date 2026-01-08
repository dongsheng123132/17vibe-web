import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="text-2xl font-bold tracking-tighter">17Kernel<span className="text-purple-500">.</span></div>
        <div className="space-x-8 text-sm opacity-60">
          <Link href="#" className="hover:opacity-100 transition">Protocol</Link>
          <Link href="#" className="hover:opacity-100 transition">Network</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">GitHub</a>
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
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer">
              挂载你的 MCP 内核
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer">
              查找现场共振
            </button>
          </div>
        </div>
      </main>

      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-12 w-full">
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-purple-400 mb-2">01 / 无感挂载</h3>
          <p className="opacity-60 text-sm">通过 GitHub/Twitter 自动提取你的能力指纹，无需手动输入。</p>
        </div>
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-purple-400 mb-2">02 / 意图共振</h3>
          <p className="opacity-60 text-sm">基于向量互补算法，只连接那个能补齐你技能短板的“最佳拍档”。</p>
        </div>
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-purple-400 mb-2">03 / 隐私协议</h3>
          <p className="opacity-60 text-sm">17Kernel 确保所有个人数据在本地加密，仅特征向量参与网络路由。</p>
        </div>
      </section>

      <footer className="py-10 text-center text-xs opacity-30">
        &copy; 2026 17Kernel Protocol. Powered by Vibe Coding.
      </footer>
    </div>
  );
}
