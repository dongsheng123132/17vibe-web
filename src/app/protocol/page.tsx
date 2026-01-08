import Link from "next/link";

export default function ProtocolPage() {
  return (
    <div className="min-h-screen p-8 md:p-20 max-w-5xl mx-auto">
      <header className="mb-12 border-b border-white/10 pb-8">
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            17Kernel Protocol<span className="text-purple-500">.</span>
          </h1>
          <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition">
            &larr; 返回 17Vibe
          </Link>
        </div>
        <p className="mt-4 text-base md:text-lg opacity-70">
          AI 时代的个人 MCP 内核：向量化、隐私优先、意图路由。
        </p>
      </header>

      <main className="space-y-14">
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            0 / 协议愿景
          </h2>
          <ul className="list-disc list-inside space-y-2 opacity-80">
            <li>
              <strong>向量化：</strong>将个人能力与偏好转成可计算的向量表示。
            </li>
            <li>
              <strong>隐私优先：</strong>原始数据本地加密，网络只路由特征向量。
            </li>
            <li>
              <strong>意图路由：</strong>优先连接互补，而不是关键词相似。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            1 / 核心数据结构（MCP Node）
          </h2>
          <div className="border border-white/10 rounded-lg bg-white/5 p-4 overflow-x-auto">
            <pre className="text-sm opacity-90">{`{
  "id": "uuid",
  "identity": {
    "name": "string",
    "background": "Full Stack Developer / Solopreneur",
    "tags": ["Vibe Coding", "System Architect"]
  },
  "vectors": {
    "logic": [0.12, 0.88, 0.45, "..."],
    "aesthetic": [0.95, 0.22, 0.11, "..."],
    "intent": "Looking for: AI Hardware Engineer"
  },
  "mcp_data": {
    "super_power": "Builds MVP in 2 hours",
    "anti_power": "Hates writing CSS details"
  }
}`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            2 / 匹配逻辑（Vibe Matcher）
          </h2>
          <p className="opacity-80 mb-4">
            匹配不追求“像”，追求“互补 + 共生”。一个写后端但讨厌 UI 的节点，应更容易连接到擅长 UI 且需要逻辑支撑的节点。
          </p>
          <div className="border border-white/10 rounded-lg bg-white/5 p-4 overflow-x-auto">
            <pre className="text-sm opacity-90">{`function calculateMatch(nodeA, nodeB) {
  const skillComplement = crossProduct(nodeA.skills, nodeB.needs);
  const vibeFit = cosineSimilarity(nodeA.vibe, nodeB.vibe);
  return (skillComplement * 0.7) + (vibeFit * 0.3);
}`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            3 / 组件架构
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg bg-white/5 p-5">
              <h3 className="font-bold mb-2">Feature Extractor</h3>
              <p className="text-sm opacity-70">
                用 LLM 将 GitHub/Twitter/自述等非结构化信息转成 17Kernel 标准向量。
              </p>
            </div>
            <div className="border border-white/10 rounded-lg bg-white/5 p-5">
              <h3 className="font-bold mb-2">Intent Router</h3>
              <p className="text-sm opacity-70">
                基于“当前意图”信号路由连接，弱化履历与头衔。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t border-white/10 text-xs opacity-40">
        17Kernel Protocol Specification v0.1.0-alpha
      </footer>
    </div>
  );
}

