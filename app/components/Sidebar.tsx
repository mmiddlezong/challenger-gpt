"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { GuideListItem } from "@/lib/guides";

interface SidebarProps {
  guides: GuideListItem[];
}

export default function Sidebar({ guides }: SidebarProps) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const filteredGuides = guides.filter((guide) =>
    guide.champion.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[#1e2328] bg-[#010a13] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-[#1e2328] bg-[#010a13] p-5">
        <Link href="/" className="block">
          <h1 className="font-bold text-xl text-[#c8aa6e] tracking-wide">
            NAAFIRI
          </h1>
          <p className="text-xs text-[#5b5a56] uppercase tracking-widest mt-1">
            Matchup Guides
          </p>
        </Link>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search champions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1e2328] border border-[#1e2328] rounded-md px-3 py-2 text-sm text-[#f0e6d2] placeholder-[#5b5a56] focus:outline-none focus:border-[#c8aa6e]/50 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#5b5a56] hover:text-[#c8aa6e] transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Champion List */}
      <nav className="p-3">
        <div className="text-[10px] uppercase tracking-widest text-[#5b5a56] px-3 py-2 font-semibold">
          Champions ({filteredGuides.length})
        </div>
        <ul className="space-y-1">
          {filteredGuides.map((guide) => {
            const isActive = pathname === `/guides/${guide.slug}`;
            return (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className={`block rounded-md px-3 py-2.5 transition-all duration-150 ${
                    isActive
                      ? "bg-[#1e2328] border border-[#c8aa6e]/40 text-[#c8aa6e]"
                      : "hover:bg-[#1e2328]/50 border border-transparent text-zinc-300 hover:text-[#f0e6d2]"
                  }`}
                >
                  {guide.champion}
                </Link>
              </li>
            );
          })}
        </ul>

        {filteredGuides.length === 0 && (
          <div className="px-3 py-8 text-center">
            {search ? (
              <p className="text-zinc-500 text-sm">No champions match "{search}"</p>
            ) : (
              <>
                <p className="text-zinc-500 text-sm">No guides yet.</p>
                <p className="text-zinc-600 text-xs mt-1">
                  Add .md files to /guides
                </p>
              </>
            )}
          </div>
        )}
      </nav>
    </aside>
  );
}
