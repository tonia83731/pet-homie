import { getAllAdoptData } from "@/libs/getAdoptData";
import { getAllShelterCondition } from "@/libs/getShelterCondition";
import { getStrayAnnounce } from "@/libs/getStrayAnnounce";
import {
  getTaipeiClinic,
  getNewTaipeiClinic,
  getHsinchuClinic,
  getChayiClinic,
  getTainanClinic,
  getMiaoliClinic,
} from "@/libs/getClinicData";

export default async function Home() {
  // initialized adoption data
  // const allAdoption = await getAllAdoptData(20, 0);
  // console.log(allAdoption);
  // initialized shelter data
  // const allShelterCondition = await getAllShelterCondition();
  // initialized stray announced
  // const strayAnnounce = await getStrayAnnounce();
  // console.log(strayAnnounce);
  // const taipeiClinic = getTaipeiClinic();
  // console.log(taipeiClinic);
  // const newTaipeiClinic = getNewTaipeiClinic();
  // console.log(newTaipeiClinic);
  // const hsinchuClinic = await getHsinchuClinic();
  // console.log(hsinchuClinic);
  // const chayiClinic = getChayiClinic();
  // console.log(chayiClinic);
  // const tainanClinic = await getTainanClinic();
  // console.log(tainanClinic);
  // const miaoliClinic = getMiaoliClinic();
  // console.log(miaoliClinic);

  return <main>This is home page</main>;
}
