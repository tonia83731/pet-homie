"use client";

import AdoptionFilterOptions from "./AdoptionFilterOptions";
import Select from "react-select";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function AdoptionFilterDesktop() {
  const options = [
    { value: 4, label: 4 },
    { value: 8, label: 8 },
    { value: 12, label: 12 },
    { value: 40, label: 40 },
  ];
  const [selectNum, setSelectNum] = useState(options[1]);
  const [isFilterToggle, setIsFilterToggle] = useState(false);
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 lg:col-span-3 grid grid-cols-5 items-center">
          <span className="">顯示</span>
          <div className="w-full col-span-3">
            <Select
              options={options}
              defaultValue={selectNum}
              onChange={setSelectNum}
            />
          </div>
          <span className="justify-self-end">個項目</span>
        </div>
      </div>
      <AdoptionFilterOptions />
    </div>
  );
}
