import { getAllGuides } from "@/lib/guides";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const guides = getAllGuides();

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Sidebar guides={guides} />

      <main className="ml-64 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl border border-[#1e2328] bg-gradient-to-br from-[#0a0f1a] via-[#091428] to-[#0a1628] p-12 mb-8">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8aa6e]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0ac8b9]/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-[#f0e6d2] tracking-tight">
                  Naafiri Matchup Database
                </h1>
                <p className="text-[#5b5a56] mt-2">
                  Your guide to dominating every lane opponent
                </p>
              </div>

              <div className="bg-[#1e2328]/50 rounded-lg p-4 border border-[#1e2328] mt-8">
                <div className="text-3xl font-bold text-[#c8aa6e]">
                  {guides.length}
                </div>
                <div className="text-xs text-[#5b5a56] uppercase tracking-wider mt-1">
                  Matchup Guides
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="rounded-xl border border-[#1e2328] bg-[#010a13] p-8">
            <h2 className="text-xl font-semibold text-[#f0e6d2] mb-4 flex items-center gap-3">
              <span className="w-1 h-6 bg-[#0ac8b9] rounded-full" />
              Getting Started
            </h2>

            <div className="space-y-4 text-[#a09b8c]">
              <p>
                Welcome to your personal matchup database. Select a champion from the
                sidebar to view detailed tips, strategies, and itemization advice.
              </p>

              <div className="bg-[#1e2328]/50 rounded-lg p-4 border border-[#1e2328]">
                <h3 className="text-[#c8aa6e] font-medium mb-2">
                  Adding New Matchups
                </h3>
                <p className="text-sm">
                  Create a new <code className="bg-[#1e2328] text-[#0ac8b9] px-1.5 py-0.5 rounded text-xs">.md</code> file
                  in the <code className="bg-[#1e2328] text-[#0ac8b9] px-1.5 py-0.5 rounded text-xs">/guides</code> folder.
                  Name it after the champion (e.g., <code className="bg-[#1e2328] text-[#0ac8b9] px-1.5 py-0.5 rounded text-xs">ahri.md</code>).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
