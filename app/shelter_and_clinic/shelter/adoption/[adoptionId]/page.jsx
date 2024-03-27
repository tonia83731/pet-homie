import { getAdoptDataByAnimalId } from "@/libs/getAdoptData";
import Link from "next/link";
import Image from "next/image";

export default async function AdoptionDetailPage({ params }) {
  const { adoptionId } = params;
  const numId = +adoptionId;
  const data = await getAdoptDataByAnimalId(numId);
  const {
    animal_id,
    animal_subid,
    album_file,
    animal_kind,
    animal_Variety,
    animal_sex,
    animal_bodytype,
    animal_colour,
    animal_age,
    animal_sterilization,
    animal_bacterin,
    animal_foundplace,
    shelter_name,
    shelter_address,
    shelter_tel,
    animal_update,
    animal_opendate,
    animal_closeddate,
  } = data;

  return <div className=""></div>;
}
