import { getAdoptDataByNumbers } from "@/libs/getAdoptData";
import AdoptionCardList from "./AdoptionCardList";
import AdoptionFilterMobile from "./AdoptionFilterMobile";
import AdoptionFilterDesktop from "./AdoptionFilterDesktop";

export default async function AdoptionCard() {
  const adoptionData = await getAdoptDataByNumbers(10, 0);

  return (
    <>
      <div className="lg:hidden">
        <AdoptionFilterMobile />
        <div className="mt-32 mb-8 lg:hidden">
          <AdoptionCardList adoptionData={adoptionData} />
        </div>
      </div>
      <div className="hidden relative lg:h-screen lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="mt-14 mb-8 col-span-2">
          <AdoptionCardList adoptionData={adoptionData} />
        </div>
        <div className="">
          <AdoptionFilterDesktop />
        </div>
      </div>
    </>
  );
}
