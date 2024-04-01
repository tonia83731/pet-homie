import AdoptionCard from "@/components/adoption/AdoptionCard";
import MainTitle from "@/components/tools/title/MainTitle";

export default function AdoptionPage() {
  return (
    <main className="px-8 lg:px-0">
      <MainTitle title="動物認養" />
      <div className="">
        <AdoptionCard />
      </div>
    </main>
  );
}
