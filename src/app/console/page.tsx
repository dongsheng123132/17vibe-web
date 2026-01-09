"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConsolePage() {
  const [intent, setIntent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [generatedMCP, setGeneratedMCP] = useState<null | object>(null);

  const handleAnalyze = () => {
    if (!intent) return;
    setIsAnalyzing(true);
    
    // Simulate AI Analysis
    setTimeout(() => {
      setGeneratedMCP({
        id: "node-genesis-001",
        intent_raw: intent,
        vectors: {
          role: "Builder",
          tech_stack: ["Next.js", "AI", "Tailwind"],
          urgency: 0.9,
          vibe: "Chaotic Good"
        },
        matches: [
          { id: "007", role: "Designer", match_score: "98%", reason: "Complementary Vibe" },
          { id: "012", role: "Backend", match_score: "92%", reason: "Tech Stack Fit" }
        ]
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Left Panel: Input */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">17Console<span className="text-purple-500">.</span></h1>
          <div className="text-xs font-mono opacity-50 bg-white/5 px-2 py-1 rounded">NODE: ONLINE</div>
        </header>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex-grow flex flex-col">
          <label className="text-sm font-bold text-purple-400 mb-4">INPUT YOUR INTENT</label>
          <textarea
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            placeholder="e.g. I want to build a decentralized dating app for AI agents in 24 hours. Need a Rust engineer."
            className="w-full h-40 bg-black/50 border border-white/20 rounded-lg p-4 text-white placeholder:opacity-30 focus:outline-none focus:border-purple-500 transition-colors resize-none mb-4"
          />
          <div className="flex gap-2">
            <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing || !intent}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                isAnalyzing ? "bg-purple-500/50 cursor-wait" : "bg-purple-600 hover:bg-purple-500"
              }`}
            >
              {isAnalyzing ? "ANALYZING VECTOR..." : "GENERATE MCP"}
            </button>
          </div>
          <p className="text-xs opacity-30 mt-4 text-center">
            AI will extract your capabilities and needs into a JSON Protocol.
          </p>
        </div>
      </div>

      {/* Right Panel: Output */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <header className="flex items-center justify-between md:justify-end">
          <Link href="/" className="text-xs opacity-50 hover:opacity-100">[ LOGOUT ]</Link>
        </header>

        <div className="bg-black border border-white/10 rounded-xl p-6 flex-grow font-mono text-sm overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-50"></div>
          
          {!generatedMCP ? (
            <div className="h-full flex items-center justify-center opacity-30 flex-col gap-4">
              <div className="w-12 h-12 border-2 border-white/20 border-t-purple-500 rounded-full animate-spin"></div>
              <div>WAITING FOR INPUT...</div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-green-400 mb-2">Success: Intent Vectorized.</div>
              <pre className="text-purple-300 overflow-x-auto">
                {JSON.stringify(generatedMCP, null, 2)}
              </pre>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  MATCHES FOUND (2)
                </div>
                <div className="space-y-3">
                  {/* @ts-ignore */}
                  {generatedMCP.matches.map((match: any) => (
                    <div key={match.id} className="bg-white/5 p-4 rounded border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-white group-hover:text-purple-400">Node-{match.id}</span>
                        <span className="text-green-400">{match.match_score}</span>
                      </div>
                      <div className="text-xs opacity-60">{match.role} • {match.reason}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}