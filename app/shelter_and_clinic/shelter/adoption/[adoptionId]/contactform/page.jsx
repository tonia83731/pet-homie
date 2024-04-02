import Contact from "@/components/contactform/Contact";
import MainTitle from "@/components/tools/title/MainTitle";
import { getAdoptDataByAnimalId } from "@/libs/getAdoptData";

export default async function ContactForm({ params }) {
  const { adoptionId } = params;
  const numId = +adoptionId;
  const data = await getAdoptDataByAnimalId(numId);
  const { animal_subid, animal_kind, animal_sex, animal_bodytype, animal_age } =
    data[0];
  return (
    <div className="">
      <MainTitle title={`NO.${animal_subid}領養表單`} />
      <Contact />
    </div>
  );
}
