
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
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          পণ্যের তথ্য লোড হচ্ছে...
        </div>
      }
    >
      <CategoryContent params={params} />
    </Suspense>
  );
}
