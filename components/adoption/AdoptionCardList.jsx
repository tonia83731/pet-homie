import AdoptionCardItem from "./AdoptionCardItem";

export default function AdoptionCardList(props) {
  const { adoptionData } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
      {adoptionData.map((prop) => {
        return <AdoptionCardItem key={prop.animal_id} prop={prop} />;
      })}
    </div>
  );
}
