"use client";
import PetlostCardItem from "./PetlostCardItem";
import Pagination from "../tools/pagination/Pagination";
import SearchCodeInput from "../tools/inputs/SearchCodeInput";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import zhTW from "date-fns/locale/zh-TW";
import { useState } from "react";

registerLocale("zh-TW", zhTW);

export default function PetlostCardList(props) {
  const { petlostData } = props;
  const options = [
    { value: "晶片號碼", label: "晶片號碼" },
    { value: "遺失時間", label: "遺失時間" },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState(options[0]);
  const [selectDate, setSelectDate] = useState(new Date());
  const handleSearchClick = async () => {};
  //   console.log(selectValue.value);
  return (
    <>
      <div className="flex gap-4 justify-end ">
        <Select
          options={options}
          defaultValue={selectValue}
          //   className="h-full"
          onChange={(e) => {
            setSelectValue(e);
          }}
        />
        {selectValue?.value === "晶片號碼" ? (
          <SearchCodeInput
            inputValue={searchValue}
            onSearchValue={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        ) : (
          <DatePicker
            //   showIcon
            //   showMonthYearPicker
            showYearDropdown
            showMonthDropdown
            selected={selectDate}
            maxDate={new Date()}
            dateFormat="yyyy/MM/dd"
            locale="zh-TW"
            placeholderText="選擇日期"
            onChange={(dates) => {
              setSelectDate(dates);
            }}
            className="w-full h-12 border border-slate-300 rounded py-1 px-4 placeholder:text-slate-300 focus:shadow-outline focus:outline-slate-500"
            //   wrapperClassName="w-5/12"
          />
        )}
        <button
          className="bg-dark-green text-white rounded-md px-4 py-2 hover:shadow-md"
          onClick={handleSearchClick}
        >
          搜尋
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {petlostData.map((prop) => {
          return <PetlostCardItem key={prop["晶片號碼"]} prop={prop} />;
        })}
      </div>
      <Pagination pages={[1, 2, 3, 4, 5]} currentPage={1} />
    </>
  );
}
