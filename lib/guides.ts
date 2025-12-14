import fs from "fs";
import path from "path";

const guidesDirectory = path.join(process.cwd(), "guides");

export interface Guide {
  slug: string;
  champion: string;
  content: string;
}

export interface GuideListItem {
  slug: string;
  champion: string;
}

function slugToChampionName(slug: string): string {
  // Convert slug to champion name (e.g., "ahri" -> "Ahri", "leesin" -> "Leesin")
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function getAllGuides(): GuideListItem[] {
  const fileNames = fs.readdirSync(guidesDirectory);

  const guides = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return {
        slug,
        champion: slugToChampionName(slug),
      };
    })
    .sort((a, b) => a.champion.localeCompare(b.champion));

  return guides;
}

export function getGuideBySlug(slug: string): Guide | null {
  try {
    const fullPath = path.join(guidesDirectory, `${slug}.md`);
    const content = fs.readFileSync(fullPath, "utf8");

    return {
      slug,
      champion: slugToChampionName(slug),
      content,
    };
  } catch {
    return null;
  }
}

export function getAllGuideSlugs(): string[] {
  const fileNames = fs.readdirSync(guidesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}
