"use client";

import { useState } from "react";
import SelectInput from "../tools/inputs/SelectInput";
import FilterCheckboxInput from "../tools/inputs/FilterCheckboxInput";
import {
  getAreaCode,
  animal_kind_options,
  animal_sex_options,
  animal_bodytype_options,
  animal_age_options,
} from "@/helpers/getAdoptionFilterData";

export default function AdoptionFilter() {
  const areaOptions = getAreaCode();
  const [kind, setKind] = useState(
    new Array(animal_kind_options.length).fill(false)
  );
  const [sex, setSex] = useState(
    new Array(animal_sex_options.length).fill(false)
  );
  const [bodyType, setBodyType] = useState(
    new Array(animal_bodytype_options.length).fill(false)
  );
  const [age, setAge] = useState(
    new Array(animal_age_options.length).fill(false)
  );
  const updateCheckCondition = (array, position) => {
    const updateArr = array.map((item, index) => {
      return index === position ? !item : item;
    });
    return updateArr;
  };
  const clearCheckCondition = () => {
    setKind(new Array(animal_kind_options.length).fill(false));
    setSex(new Array(animal_sex_options.length).fill(false));
    setBodyType(new Array(animal_bodytype_options.length).fill(false));
    setAge(new Array(animal_age_options.length).fill(false));
  };
  const handleFilterChange = (type, position) => {
    switch (type) {
      case "kind":
        const updateKind = updateCheckCondition(kind, position);
        setKind([...updateKind]);
        return;
      case "sex":
        const updateSex = updateCheckCondition(sex, position);
        setSex([...updateSex]);
        return;
      case "bodyType":
        const updateBodyType = updateCheckCondition(bodyType, position);
        setBodyType([...updateBodyType]);
        return;
      case "age":
        const updateAge = updateCheckCondition(age, position);
        setAge([...updateAge]);
        return;
      default:
        console.log("No data selected!");
        return;
    }
  };
  return (
    <div className="drop-shadow-md rounded-md bg-white p-4 my-4">
      <SelectInput label="地區" placeholder="地區" options={areaOptions} />
      <div className="">
        <FilterCheckboxInput
          title="動物類型"
          options={animal_kind_options}
          type="kind"
          onFilterChange={handleFilterChange}
          isChecked={kind}
        />
        <FilterCheckboxInput
          title="動物性別"
          options={animal_sex_options}
          type="sex"
          onFilterChange={handleFilterChange}
          isChecked={sex}
        />
        <FilterCheckboxInput
          title="動物體型"
          options={animal_bodytype_options}
          type="bodyType"
          onFilterChange={handleFilterChange}
          isChecked={bodyType}
        />
        <FilterCheckboxInput
          title="動物年紀"
          options={animal_age_options}
          type="age"
          onFilterChange={handleFilterChange}
          isChecked={age}
        />
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-indigo text-white rounded-md py-1">搜尋</button>
          <button
            className="bg-blueberry-40 text-white rounded-md py-1"
            onClick={clearCheckCondition}
          >
            清除
          </button>
        </div>
      </div>
    </div>
  );
}
