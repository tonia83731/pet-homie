import Image from "next/image";
import Link from "next/link";
import {
  animal_sex_options,
  animal_bodytype_options,
  animal_age_options,
} from "@/helpers/getAdoptionFilterData";
import NoImage from "@/public/assets/No-Image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars, faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function AdoptionCardItem(prop) {
  const {
    animal_id,
    animal_subid,
    // animal_place,
    album_file,
    animal_kind,
    animal_Variety,
    animal_sex,
    animal_bodytype,
    animal_colour,
    animal_age,
    // animal_sterilization,
    // animal_bacterin,
    // animal_foundplace,
    shelter_name,
    shelter_address,
    shelter_tel,
    animal_update,
    animal_opendate,
    animal_closeddate,
  } = prop.prop;

  // console.log(animal_Variety);
  // console.log(animal_subid);
  // console.log(animal_id);
  const bodyType = animal_bodytype_options.filter(
    (item) => item.value === animal_bodytype
  );

  return (
    <div className="drop-shadow-md rounded-md bg-white relative">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28">
        {album_file !== "" ? (
          <Image
            src={album_file}
            alt={`${animal_id} ${animal_Variety}`}
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          ></Image>
        ) : (
          <Image
            src={NoImage}
            alt="no image"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
          ></Image>
        )}
      </div>
      <div className="mt-16 px-4 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">
            {animal_Variety}, {animal_colour}
          </h1>
          <div className="">
            {animal_sex === "M" ? (
              <FontAwesomeIcon
                icon={faMars}
                className="text-sky-blue text-xl"
              />
            ) : animal_sex === "F" ? (
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
        <div className="mb-4 flex flex-col gap-2">
          {/* animal bodytype */}
          <div className="grid grid-cols-3 text-center border border-slate-100">
            {animal_bodytype_options.map((data, index) => {
              return (
                <span
                  className={`${index !== 0 ? "border-l" : ""} ${
                    data.value === animal_bodytype
                      ? "bg-grey-blue-green"
                      : "bg-white text-slate-300"
                  }`}
                  key={data.value}
                >
                  {data.label}
                </span>
              );
            })}
          </div>
          {/* animal age */}
          <div className="grid grid-cols-2 text-center mt-1 border border-slate-100">
            {animal_age_options.map((data, index) => {
              return (
                <span
                  className={`${index !== 0 ? "border-l" : ""} ${
                    data.value === animal_age
                      ? "bg-grey-blue-green"
                      : "bg-white text-slate-300"
                  }`}
                  key={data.value}
                >
                  {data.label}
                </span>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href={`/shelter_and_clinic/shelter/adoption/${animal_id}/contactform`}
            className="py-1 px-4 w-full rounded-full text-white text-center bg-dark-green block"
          >
            我要詢問
          </Link>
          <Link
            href={`/shelter_and_clinic/shelter/adoption/${animal_id}`}
            className="py-1 px-4 w-full rounded-full text-white text-center block bg-live-green"
          >
            了解更多
          </Link>
        </div>
      </div>
    </div>
  );
}

// <div className="drop-shadow-md rounded-md bg-white p-4">
//   <div className="grid grid-cols-3 gap-2">
//     <div className="">
//       <div className="h-28">
//         {album_file !== "" ? (
//           <Image
//             src={album_file}
//             alt={`${animal_id} ${animal_Variety}`}
//             width={300}
//             height={300}
//             className="w-full h-full object-cover"
//           ></Image>
//         ) : (
//           <Image
//             src={NoImage}
//             alt="no image"
//             width={300}
//             height={300}
//             className="w-full h-full object-cover"
//           ></Image>
//         )}
//       </div>
//       <div className="w-full mt-2">
//         <Link
//           href="/shelter_and_clinic/shelter/contact-form"
//           className="py-1 px-4 w-full rounded-full text-white text-center bg-dark-green block"
//         >
//           我要詢問
//         </Link>
//       </div>
//     </div>
//     <div className="col-span-2">
//       <div className="h-28">
//         <h1 className="text-xl font-bold">
//           {animal_Variety}, {animal_colour}, {bodyType[0].label}
//         </h1>
// <div className="mt-3">
//   <div className="grid grid-cols-2 text-center mt-1 border">
//     {animal_age_options.map((data, index) => {
//       return (
//         <span
//           className={`${index !== 0 ? "border-l" : ""} ${
//             data.value === animal_age
//               ? "bg-grey-blue-green"
//               : "bg-white text-blueberry-40"
//           }`}
//           key={data.value}
//         >
//           {data.label}
//         </span>
//       );
//     })}
//   </div>
// </div>
//       </div>
//       <div className="w-full mt-2">
//         <Link
//           href={`/shelter_and_clinic/shelter/adoption/${animal_id}`}
//           className="py-1 px-4 w-full rounded-full text-white text-center block bg-live-green"
//         >
//           了解更多
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
