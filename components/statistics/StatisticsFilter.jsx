import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import zhTW from "date-fns/locale/zh-TW";
registerLocale("zh-TW", zhTW);

import { useState } from "react";
import { getAreaCode } from "@/helpers/getAdoptionFilterData";
import SelectInput from "../tools/inputs/SelectInput";

export default function StatisticFilter() {
  const [startDate, setStartDate] = useState(1659312000000);
  const [cityOption, setCityOption] = useState();
  const cityOptions = getAreaCode();
  return (
    <div className="">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/MM"
        showMonthYearPicker
        className="w-full h-full border border-dark-green-25 px-4 py-2 rounded-sm focus:border-live-green placeholder:text-dark-green-25"
        wrapperClassName="w-full h-full"
      />
      <SelectInput
        options={cityOptions}
        placeholder="縣市"
        onSelectionchange={(option) => setCityOption(option)}
      />
    </div>
  );
}
