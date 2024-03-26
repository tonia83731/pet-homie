import AdoptionCardItem from "./AdoptionCardItem";

export default function AdoptionCardList() {
  // initialized adoption data
  // const allAdoption = await getAllAdoptData(20, 0);
  // console.log(allAdoption);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
      <AdoptionCardItem />
      <AdoptionCardItem />
      <AdoptionCardItem />
    </div>
  );
}
