import Image from "next/image";
import NoImage from "@/public/assets/No-Image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars, faQuestion } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

export default function PetlostCardItem(prop) {
  const data = prop.prop;

  return (
    <div className="drop-shadow-md rounded-md bg-white relative">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <h1 className="text-xl font-bold">{data["寵物名"]}</h1>
            <p className="text-sm">{data["晶片號碼"]}</p>
          </div>
          <div className="">
            {data["性別"] === "公" ? (
              <FontAwesomeIcon
                icon={faMars}
                className="text-sky-blue text-xl"
              />
            ) : data["性別"] === "母" ? (
              <FontAwesomeIcon
                icon={faVenus}
                className="text-brightly-orange text-xl"
              />
            ) : (
              <FontAwesomeIcon
                icon={faQuestion}
                className="text-live-green text-xl"
              />
            )}
          </div>
        </div>
        <div className="h-40 mb-4 grid grid-cols-3 gap-2 items-center bg-live-green-25 rounded-md px-4 py-2">
          <div
            className="w-28 h-28 rounded-md bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${NoImage.src}` }}
          >
            {data.PICTURE !== "" ? (
              <Image
                src={data.PICTURE}
                alt={`${data["寵物名"]}`}
                width={200}
                height={200}
                className="w-28 h-28 object-cover rounded-md"
              ></Image>
            ) : (
              <Image
                src={NoImage}
                alt="no image"
                width={200}
                height={200}
                className="w-28 h-28 object-cover rounded-md"
              ></Image>
            )}
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="">
              <h5 className="font-bold mb-2">寵物外觀</h5>
              <div className="">
                {data["品種"] !== "" ? data["品種"] : ""},{" "}
                {data["毛色"] !== "" ? data["毛色"] : ""},{" "}
                {data["外觀"] !== "" ? data["外觀"] : ""}
              </div>
            </div>
            <div className="">
              <h5 className="font-bold mb-2">寵物特徵</h5>
              <div className="">{data["特徵"] !== "" ? data["特徵"] : "-"}</div>
            </div>
          </div>
        </div>
        {/* <div className="h-34 mb-4 flex flex-col gap-2 bg-live-green-25 rounded-md px-4 py-2">
          <div className="">
            <h5 className="font-bold mb-2">遺失時間</h5>
            <div className="">
              {dayjs(data["遺失時間"]).format("YYYY-MM-DD")}
            </div>
          </div>
          <div className="">
            <h5 className="font-bold mb-2">遺失地點</h5>
            <div className="">
              {data["遺失地點"] !== "" ? data["遺失地點"] : ""}
            </div>
          </div>
        </div> */}
        <div className="h-34 mb-4 flex flex-col gap-2 bg-grandpa-orange-25 rounded-md px-4 py-2">
          <div className="">
            <h5 className="font-bold mb-2">飼主姓名</h5>
            <div className="">{data["飼主姓名"]}</div>
          </div>
          <div className="">
            <h5 className="font-bold mb-2">飼主電話</h5>
            <a href={`tel:${data["連絡電話"]}`}>{data["連絡電話"]}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
