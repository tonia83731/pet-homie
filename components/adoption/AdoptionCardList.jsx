import AdoptionCardItem from "./AdoptionCardItem";
import Pagination from "../tools/pagination/Pagination";

export default function AdoptionCardList(props) {
  const { adoptionData } = props;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-20">
        {adoptionData.map((prop) => {
          return <AdoptionCardItem key={prop.animal_id} prop={prop} />;
        })}
      </div>
      <Pagination pages={[1, 2, 3, 4, 5]} currentPage={1} />
    </>
  );
}
