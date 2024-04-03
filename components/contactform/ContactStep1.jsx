import DefaultInput from "../tools/inputs/DefaultInput";
import SelectInput from "../tools/inputs/SelectInput";
import SubTitle from "../tools/title/SubTitle";
import InputLabel from "../tools/inputs/InputLabel";
import { genders, incomes } from "@/helpers/getContactFormData";
import {
  getCityOptions,
  getDistrictOptions,
} from "@/helpers/getCityFilterData";
import ControlBtnLayout from "./ControlBtnLayout";
import { useState } from "react";
import { useContactFormContext } from "@/context/ContactFormContext";
import ContactFormLayout from "./ContactFormLayout";
import DefaultRadioInput from "../tools/inputs/DefaultRadioInput";
import { yes_and_no } from "@/helpers/getContactFormData";
export default function ContactStep1(props) {
  const { formData, setFormData } = useContactFormContext();
  const { personal } = formData;
  const {
    name,
    gender,
    age,
    address,
    email,
    phone,
    occupation,
    income,
    change,
  } = personal;
  const { onNextPageClick } = props;
  const [districts, setDistricts] = useState([]);
  return (
    <ContactFormLayout title="領養人基本資料">
      <div className="flex flex-col gap-4">
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
          <SelectInput
            label="年收入情況"
            placeholder="收入情況"
            options={incomes}
            // onSelectionchange={(option) => {
            //   const district = getDistrictOptions(option.value);
            //   setDistricts(district);
            // }}
          />
        </div>
        <DefaultRadioInput
          title="未來6 個月內會有任何較大的變化嗎(例如: 搬家、換工作、生孩子、長期旅行...)"
          options={yes_and_no}
          name="change"
          isChecked={change}
          onRadioInputChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              personal: {
                ...prevState.personal,
                change: value,
              },
            }))
          }
        />
      </div>
      <ControlBtnLayout>
        <button
          type="button"
          className="col-start-4 rounded bg-brightly-orange text-white h-10 px-4 py-2"
          onClick={onNextPageClick}
        >
          下一頁
        </button>
      </ControlBtnLayout>
    </ContactFormLayout>
  );
}
