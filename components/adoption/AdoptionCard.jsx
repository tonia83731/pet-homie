import { getAllAdoptData } from "@/libs/getAdoptData";
import AdoptionCardList from "./AdoptionCardList";
import AdoptionFilter from "./AdoptionFilter";

export default async function AdoptionCard() {
  const adoptionData = await getAllAdoptData(5, 0);
  // console.log(adoptionData);
  return (
    <div className="">
      <AdoptionFilter />
      <AdoptionCardList adoptionData={adoptionData} />
    </div>
  );
}
