import { getAllShelterCondition } from "@/libs/getShelterCondition";
import MainTitle from "@/components/tools/title/MainTitle";
import Statistic from "@/components/statistics/Statistics";

export default async function StatisticPage() {
  // initialized shelter data
  // const allShelterCondition = await getAllShelterCondition();
  return (
    <main className="">
      <MainTitle title="動物收容所收容處理統計表" />
      <Statistic />
    </main>
  );
}
