import { notFound } from "next/navigation";
import PublicPreview from "@/components/preview/PublicPreview";
import { getBaseUrl } from "@/lib/getBase";

interface Props {
  params: {
    username: string;
  };
}

async function getCreator(username: string) {
  const response = await fetch(`${getBaseUrl()}/api/kit/${username}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch creator");
  }

  return response.json();
}

export default async function PublicKitPage({
  params,
}: Props) {
  const response = await getCreator(params.username);

  if (!response?.success || !response.data) {
    notFound();
  }

  const creator = {
    profile: {
      username: response.data.username,
      fullName: response.data.fullName,
      bio: response.data.bio,
      profileImageUrl: response.data.profileImageUrl,
      themeColor: response.data.themeColor,
    },
    metrics: response.data.metrics,
    rateCards: response.data.rateCards,
  };


  return (
    <main className="min-h-screen bg-[#0d0d12] py-16 relative overflow-hidden">
      {/* Dynamic background glow matching creator branding */}
      <div
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[450px] w-[450px] opacity-20 blur-[140px] rounded-full"
        style={{ backgroundColor: creator.profile.themeColor || "#6366F1" }}
      />
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <PublicPreview creator={creator} />
      </div>
    </main>
  );
}