import Link from "next/link";

export default function NetworkPage() {
  const nodes = [
    { id: "001", role: "Genesis (You)", status: "Online", signal: "98%", tags: ["FullStack", "Architect"] },
    { id: "002", role: "Searching...", status: "Scanning", signal: "---", tags: [] },
    { id: "003", role: "Searching...", status: "Scanning", signal: "---", tags: [] },
    { id: "004", role: "Searching...", status: "Scanning", signal: "---", tags: [] },
    { id: "005", role: "Searching...", status: "Scanning", signal: "---", tags: [] },
  ];

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-5xl mx-auto flex flex-col">
      <header className="mb-12 border-b border-white/10 pb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Genesis Network<span className="text-purple-500 animate-pulse">.</span>
          </h1>
          <p className="mt-2 text-sm opacity-60 font-mono">
            STATUS: <span className="text-green-400">BOOTSTRAPPING</span> | NODES: 1/17
          </p>
        </div>
        <Link href="/" className="text-sm opacity-50 hover:opacity-100 transition font-mono">
          [ ESC ]
        </Link>
      </header>

      <main className="flex-grow">
        <div className="grid grid-cols-1 gap-4">
          {nodes.map((node) => (
            <div 
              key={node.id} 
              className={`p-6 rounded-lg border flex items-center justify-between transition-all ${
                node.status === "Online" 
                  ? "bg-purple-500/10 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]" 
                  : "bg-white/5 border-white/10 opacity-60"
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="font-mono text-xl opacity-50">#{node.id}</div>
                <div>
                  <div className={`font-bold ${node.status === "Online" ? "text-white" : "text-white/50"}`}>
                    {node.role}
                  </div>
                  {node.tags.length > 0 && (
                    <div className="flex gap-2 mt-1">
                      {node.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-right font-mono text-sm">
                <div className={node.status === "Online" ? "text-green-400" : "animate-pulse text-purple-400"}>
                  {node.status}
                </div>
                <div className="opacity-40 text-xs mt-1">SIG: {node.signal}</div>
              </div>
            </div>
          ))}
          
          <div className="p-6 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-sm opacity-30 font-mono mt-4">
            + 12 MORE SLOTS LOCKED
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-white/10 pt-8 flex justify-between text-xs opacity-40 font-mono">
        <div>PROTOCOL_V: 0.1.0</div>
        <div className="animate-pulse">WAITING FOR SIGNAL...</div>
      </footer>
    </div>
  );
}

