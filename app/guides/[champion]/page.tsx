import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuides, getGuideBySlug, getAllGuideSlugs } from "@/lib/guides";
import Sidebar from "@/app/components/Sidebar";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";

interface PageProps {
  params: Promise<{ champion: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({ champion: slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { champion } = await params;
  const guide = getGuideBySlug(champion);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `Naafiri vs ${guide.champion} - Matchup Guide`,
    description: `How to play Naafiri against ${guide.champion}`,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { champion } = await params;
  const guides = getAllGuides();
  const guide = getGuideBySlug(champion);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Sidebar guides={guides} />

      <main className="ml-64 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          {/* Guide Content */}
          <div className="rounded-xl border border-[#1e2328] bg-[#010a13] p-8">
            <MarkdownRenderer content={guide.content} />
          </div>

          {/* Navigation Footer */}
          <div className="mt-8 flex justify-between">
            <Link
              href="/"
              className="text-sm text-[#5b5a56] hover:text-[#c8aa6e] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
