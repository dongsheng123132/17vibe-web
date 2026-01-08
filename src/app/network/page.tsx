import Link from "next/link";

export default function NetworkPage() {
  return (
    <div className="min-h-screen p-8 md:p-20 max-w-5xl mx-auto">
      <header className="mb-12 border-b border-white/10 pb-8">
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Network<span className="text-purple-500">.</span>
          </h1>
          <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition">
            &larr; 返回 17Vibe
          </Link>
        </div>
        <p className="mt-4 text-base md:text-lg opacity-70">
          这里将展示现场接入的 Kernel 节点与实时共振广播（后续接 Supabase/向量库）。
        </p>
      </header>

      <main className="space-y-4">
        <div className="border border-white/10 rounded-lg bg-white/5 p-5">
          <div className="text-sm opacity-70">当前状态</div>
          <div className="mt-2 text-xl font-bold">MVP：占位页</div>
        </div>
      </main>
    </div>
  );
}

