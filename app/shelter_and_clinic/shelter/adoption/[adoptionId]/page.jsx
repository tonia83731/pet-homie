import { getAdoptDataByAnimalId } from "@/libs/getAdoptData";
import Link from "next/link";
import Image from "next/image";
import MainTitle from "@/components/tools/title/MainTitle";
import SubTitle from "@/components/tools/title/SubTitle";
import {
  animal_sex_options,
  animal_bodytype_options,
  animal_age_options,
  animal_health_status_options,
} from "@/helpers/getAdoptionFilterData";
import AdoptionDetailOption from "@/components/adoptionDetail/adoptionDetailOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default async function AdoptionDetailPage({ params }) {
  const { adoptionId } = params;
  const numId = +adoptionId;
  const data = await getAdoptDataByAnimalId(numId);
  console.log(data);
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
  } = data[0];

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="">
          <h1 className={`text-2xl font-semibold mb-2`}>動物詳細資料</h1>
          <MainTitle title={`${animal_Variety}, ${animal_colour}`} />
        </div>
        <Link
          href="/shelter_and_clinic/shelter/adoption"
          className="text-slate-300 hover:text-slate-500 hover:italic"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
          回到動物認養列表
        </Link>
      </div>
      <div className="mt-32 mb-8 grid gap-4">
        <div className="relative drop-shadow-md rounded-md bg-white p-4">
          <div className="absolute z-50 right-7 top-0 -translate-y-2/3">
            <Image
              src={album_file}
              alt={`${animal_subid}照片`}
              width={300}
              height={300}
              className="w-44 h-44 rounded-full shadow-md object-cover hover:object-contain"
            />
          </div>
          <SubTitle title="基本資料" className="text-live-green" />
          <div className="flex flex-col gap-2">
            <AdoptionDetailOption
              title="性別"
              datas={animal_sex_options}
              option={animal_sex}
            />
            <AdoptionDetailOption
              title="體型"
              datas={animal_bodytype_options}
              option={animal_bodytype}
            />
            <AdoptionDetailOption
              title="年齡"
              datas={animal_age_options}
              option={animal_age}
            />
            <AdoptionDetailOption
              title="是否結紮?"
              datas={animal_health_status_options}
              option={animal_sterilization}
            />
            <AdoptionDetailOption
              title="是否施打狂犬病疫苗?"
              datas={animal_health_status_options}
              option={animal_bacterin}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="drop-shadow-md rounded-md bg-white p-4">
            <SubTitle title="領養地點" className="text-live-green" />
            <div className="flex flex-col gap-2">
              <div className="">
                <h5 className="font-bold mb-2">動物所屬收容所名稱</h5>
                <div className="">{shelter_name}</div>
              </div>
              <div className="">
                <h5 className="font-bold mb-2">收容所地址</h5>
                <div className="">{shelter_address}</div>
              </div>
              <div className="">
                <h5 className="font-bold mb-2">收容所連絡電話</h5>
                <a href={`tel:${shelter_tel}`}>{shelter_tel}</a>
              </div>
              <Link
                href={`/shelter_and_clinic/shelter/adoption/${animal_id}/contactform`}
                className="py-1 px-4 w-full rounded-full text-white text-center bg-mustard block"
              >
                我要詢問
              </Link>
            </div>
          </div>
          <div className="drop-shadow-md rounded-md bg-white p-4">
            <SubTitle title="其他資訊" className="text-live-green" />
            <div className="flex flex-col gap-2">
              <div className="">
                <h5 className="font-bold mb-2">動物尋獲地</h5>
                <div className="">
                  {animal_foundplace !== "" ? animal_foundplace : "-"}
                </div>
              </div>
              <div className="">
                <h5 className="font-bold mb-2">開放認養時間</h5>
                <div className="">
                  {animal_opendate} ~ {animal_closeddate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
