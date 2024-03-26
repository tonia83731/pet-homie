"use client";

import SelectInput from "../tools/inputs/SelectInput";
import {
  getAreaCode,
  animal_kind_options,
  animal_sex_options,
  animal_bodytype_options,
  animal_age_options,
} from "@/helpers/getAdoptionFilterData";
// import { getAllAdoptData } from "@/libs/getAdoptData";
import AdoptionCardList from "./AdoptionCardList";

export default function AdoptionCard() {
  const areaOptions = getAreaCode();
  // const allAdoption = await getAllAdoptData(20, 0);
  return (
    <div className="">
      <div className="">
        <SelectInput label="地區" placeholder="地區" options={areaOptions} />
        <SelectInput
          label="動物類型"
          placeholder="類型"
          options={animal_kind_options}
        />
        <SelectInput
          label="動物性別"
          placeholder="性別"
          options={animal_sex_options}
        />
        <SelectInput
          label="動物體型"
          placeholder="體型"
          options={animal_bodytype_options}
        />
        <SelectInput
          label="動物年紀"
          placeholder="年紀"
          options={animal_age_options}
        />
      </div>
      <AdoptionCardList />
    </div>
  );
}
