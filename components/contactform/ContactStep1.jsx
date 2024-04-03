import DefaultInput from "../tools/inputs/DefaultInput";
import SelectInput from "../tools/inputs/SelectInput";
import DefaultRadioInput from "../tools/inputs/DefaultRadioInput";
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
          inputValue={name}
          onInputChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              personal: {
                ...prevState.personal,
                name: e.target.value,
              },
            }));
          }}
        />
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
          <SelectInput
            options={genders}
            label="性別"
            placeholder="性別"
            onSelectionchange={(option) => {
              setFormData((prevState) => ({
                ...prevState,
                personal: {
                  ...prevState.personal,
                  gender: option,
                },
              }));
            }}
          />
          <DefaultInput
            id="age"
            name="age"
            type="number"
            label="年齡"
            placeholder="請輸入年齡"
            inputValue={age}
            onInputChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                personal: {
                  ...prevState.personal,
                  age: e.target.value,
                },
              }));
            }}
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
                setFormData((prevState) => ({
                  ...prevState,
                  personal: {
                    ...prevState.personal,
                    address: {
                      ...prevState.personal.address,
                      city: option,
                    },
                  },
                }));
              }}
            />
            <SelectInput
              placeholder="區域"
              options={districts}
              onSelectionchange={(option) => {
                setFormData((prevState) => ({
                  ...prevState,
                  personal: {
                    ...prevState.personal,
                    address: {
                      ...prevState.personal.address,
                      district: option,
                    },
                  },
                }));
              }}
            />
          </div>
          <DefaultInput
            id="address"
            name="address"
            placeholder="請輸入地址"
            inputValue={address.street}
            onInputChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                personal: {
                  ...prevState.personal,
                  address: {
                    ...prevState.personal.address,
                    street: e.target.value,
                  },
                },
              }));
            }}
          />
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
          <DefaultInput
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="請輸入Email"
            inputValue={email}
            onInputChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                personal: {
                  ...prevState.personal,
                  email: e.target.value,
                },
              }));
            }}
          />
          <DefaultInput
            id="phone"
            name="phone"
            type="tel"
            label="連絡電話"
            placeholder="請輸入連絡電話"
            inputValue={phone}
            onInputChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                personal: {
                  ...prevState.personal,
                  phone: e.target.value,
                },
              }));
            }}
          />
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
          <DefaultInput
            id="occupation"
            name="occupation"
            label="職業"
            placeholder="請輸入職業"
            inputValue={occupation}
            onInputChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                personal: {
                  ...prevState.personal,
                  occupation: e.target.value,
                },
              }));
            }}
          />
          {/* consider to use select */}
          <SelectInput
            label="年收入情況"
            placeholder="收入情況"
            options={incomes}
            onSelectionchange={(option) => {
              setFormData((prevState) => ({
                ...prevState,
                personal: {
                  ...prevState.personal,
                  income: option,
                },
              }));
            }}
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
