import DefaultInput from "../tools/inputs/DefaultInput";
import SelectInput from "../tools/inputs/SelectInput";
import SubTitle from "../tools/title/SubTitle";
import InputLabel from "../tools/inputs/InputLabel";
import { genders } from "@/helpers/getContactFormData";
import {
  getCityOptions,
  getDistrictOptions,
} from "@/helpers/getCityFilterData";
import { useState } from "react";

export default function ContactStep1() {
  const [districts, setDistricts] = useState([]);
  return (
    <div className="">
      <div className="">
        <SubTitle title="領養人基本資料" className="text-live-green" />
      </div>
      <div className="">
        <DefaultInput
          id="name"
          name="name"
          label="姓名"
          placeholder="請輸入姓名"
        />
        <div className="grid grid-cols-2 gap-4">
          <SelectInput options={genders} label="性別" placeholder="性別" />
          <DefaultInput
            id="age"
            name="age"
            type="number"
            label="年齡"
            placeholder="請輸入年齡"
          />
        </div>
        <div className="">
          <InputLabel title="地址" />
          <div className="grid grid-cols-2 gap-4">
            <SelectInput
              placeholder="縣市"
              options={getCityOptions()}
              onSelectionchange={(option) => {
                const district = getDistrictOptions(option.value);
                setDistricts(district);
              }}
            />
            <SelectInput
              placeholder="區域"
              options={districts}
              onSelectionchange={(option) => {
                console.log(option);
              }}
            />
          </div>
          <DefaultInput id="address" name="address" placeholder="請輸入地址" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <DefaultInput
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="請輸入Email"
          />
          <DefaultInput
            id="phone"
            name="phone"
            type="tel"
            label="連絡電話"
            placeholder="請輸入連絡電話"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <DefaultInput
            id="career"
            name="career"
            label="職業"
            placeholder="請輸入職業"
          />
          {/* consider to use select */}
          <DefaultInput
            id="income"
            name="income"
            type="number"
            label="收入情況"
            placeholder="請輸入收入情況"
          />
        </div>
      </div>
      <div className="">
        <button className="">下一頁</button>
      </div>
    </div>
  );
}
