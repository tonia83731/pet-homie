import { getStrayAnnounce } from "@/libs/getStrayAnnounce";
import MainTitle from "@/components/tools/title/MainTitle";
import PetlostCardList from "@/components/petlost/PetlostCardList";

export default async function PetLostPage() {
  // initialized stray announced
  const strayAnnounce = await getStrayAnnounce(8, 0);
  // console.log(strayAnnounce);
  return (
    <main className="">
      <MainTitle title="寵物遺失啟事" />
      <div className="">
        <PetlostCardList petlostData={strayAnnounce} />
      </div>
    </main>
  );
}
