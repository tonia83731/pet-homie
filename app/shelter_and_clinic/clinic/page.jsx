"use client";
import {
  getTaipeiClinic,
  getNewTaipeiClinic,
  getHsinchuClinic,
  getChayiClinic,
  getTainanClinic,
  getMiaoliClinic,
} from "@/libs/getClinicData";
import Select from "react-select";
import { useState } from "react";
import { getCityOptions } from "@/helpers/getCityFilterData";
import MainTitle from "@/components/tools/title/MainTitle";
import ClinicTable from "@/components/clinic/ClinicTable";
import SearchInput from "@/components/tools/inputs/SearchInput";

export const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    height: "2.5rem",
    paddingLeft: "1rem",
    borderRadius: "0.125rem",
    // paddingRight: "1rem",
    borderColor: isFocused ? "#68d388" : "rgb(3, 45, 54, .25)",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#68d388",
    },
  }),
  indicatorSeparator: (styles) => ({ display: "none" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,

      height: "2.5rem",
      paddingLeft: "1rem",
      backgroundColor: isSelected ? "#68d388" : "white",
      "&:hover": {
        backgroundColor: "rgb(104, 211, 136, .25)",
      },
    };
  },
};

export default function PetClinicPage() {
  const [clinicData, setClinicData] = useState(getTaipeiClinic());
  const [searchValue, setSearchValue] = useState("");
  const options = getCityOptions();

  const handleCityChange = async (option) => {
    const value = option.value;
    switch (value) {
      case "臺北市":
        const taipeiClinic = getTaipeiClinic();
        setClinicData(taipeiClinic);
        break;
      case "新北市":
        const newTaipeiClinic = getNewTaipeiClinic();
        setClinicData(newTaipeiClinic);
        break;
      // case "新竹市":
      //   try {
      //     const hsinchuClinic = await getHsinchuClinic();
      //     setClinicData(hsinchuClinic);
      //   } catch (error) {
      //     console.log(error);
      //   }
      //   break;
      case "嘉義市":
        const chayiClinic = getChayiClinic();
        setClinicData(chayiClinic);
        break;
      case "苗栗縣":
        const miaoliClinic = getMiaoliClinic();
        setClinicData(miaoliClinic);
        break;
      case "臺南市":
        try {
          const tainanClinic = await getTainanClinic();
          setClinicData(tainanClinic);
        } catch (error) {
          console.log(error);
        }
        break;
      default:
        setClinicData([]);
        break;
    }
  };
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <main className="">
      <MainTitle title="各縣市動物醫院" />
      <div className="lg:flex lg:justify-between lg:items-center">
        <Select
          options={options}
          styles={colourStyles}
          defaultValue={options[1]}
          onChange={(option) => handleCityChange(option)}
        />
        {clinicData.length > 0 ? (
          <div className="grid grid-cols-5 gap-2 items-center mt-2">
            <SearchInput
              inputValue={searchValue}
              onSearchChange={handleSearchChange}
            />
            <button className="rounded bg-dark-green text-white h-10 px-4 py-2">
              搜尋
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="my-2">
        <ClinicTable tableData={clinicData} />
      </div>
    </main>
  );
}
