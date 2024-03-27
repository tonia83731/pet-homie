import { getAdoptDataByNumbers } from "@/libs/getAdoptData";
import AdoptionCardList from "./AdoptionCardList";
import AdoptionFilter from "./AdoptionFilter";

export default async function AdoptionCard() {
  const adoptionData = await getAdoptDataByNumbers(10, 0);

  return (
    <div className="">
      <AdoptionFilter />
      <AdoptionCardList adoptionData={adoptionData} />
    </div>
  );
}
