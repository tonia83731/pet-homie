import Image from "next/image";
// import Link from "next/link";
import {
  animal_sex_options,
  animal_age_options,
} from "@/helpers/getAdoptionFilterData";

export default function AdoptionCardItem() {
  return (
    <div className="drop-shadow-md rounded-md bg-white p-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="">
          <div className="h-28">
            <Image
              src={"https://www.pet.gov.tw/upload/pic/1711444228524.png"}
              alt="混種貓"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <button className="mt-2 py-1 w-full rounded-full text-white bg-light-secondary">
            我要詢問
          </button>
        </div>
        <div className="col-span-2">
          <div className="h-28">
            <h1 className="text-xl font-bold">混種犬, 黑黃色, 中型</h1>
            <div className="mt-3">
              <div className="grid grid-cols-3 text-center border">
                {animal_sex_options.map((data, index) => {
                  return (
                    <span
                      className={`${index !== 0 ? "border-l" : ""}`}
                      key={data.value}
                    >
                      {data.label}
                    </span>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 text-center mt-1 border">
                {animal_age_options.map((data, index) => {
                  return (
                    <span
                      className={`${index !== 0 ? "border-l" : ""}`}
                      key={data.value}
                    >
                      {data.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <button className="mt-2 py-1 w-full rounded-full text-white bg-dark-secondary">
            了解更多
          </button>
        </div>
      </div>
    </div>
  );
}
