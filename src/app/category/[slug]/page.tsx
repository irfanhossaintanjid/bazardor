
import { Suspense } from "react";
import CategoryPageContent from "@/components/categorypage";

type Props = {
  params: Promise<{ slug: string }>;
};

const categoryNames: Record<string, string> = {
  chal: "চাল",
  dal: "ডাল",
  tel: "তেল",
  sobji: "সবজি",
  mach: "মাছ",
  mangsho: "মাংস",
  "dim-dui": "ডিম-দুধ",
  mosla: "মসলা",
};
const categoryIcons: Record<string, string> = {
  chal: "🍚",
  dal: "🫘",
  tel: "🛢️",
  sobji: "🥬",
  mach: "🐟",
  mangsho: "🍗",
  "dim-dui": "🥛",
  mosla: "🌶️",
};

async function CategoryContent({ params }: Props) {
  const { slug } = await params;

  return (
    <CategoryPageContent
      category={slug}
      categoryName={categoryNames[slug] }
      categoryIcon={categoryIcons[slug]}
    />
  );
}

export default function CategoryPage({ params }: Props) {
  return (
    <Suspense
     fallback={
  <div className=" skeleton mx-auto flex h-52 max-w-6xl items-center justify-center">
    <span className="loading loading-spinner w-16 text-[#05893e]" />
  </div>}
    >
      <CategoryContent params={params} />
    </Suspense>
  );
}
