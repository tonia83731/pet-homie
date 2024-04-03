import ContactFormLayout from "./ContactFormLayout";
import ControlBtnLayout from "./ControlBtnLayout";
import DefaultInput from "../tools/inputs/DefaultInput";
import DefaultRadioInput from "../tools/inputs/DefaultRadioInput";
import SelectInput from "../tools/inputs/SelectInput";
import CustomCheckbox from "../tools/inputs/CustomCheckbox";
import InputLabel from "../tools/inputs/InputLabel";
import { useContactFormContext } from "@/context/ContactFormContext";
import {
  yes_and_no,
  only_yesno,
  houseownsData,
  housetypeData,
  livingareaData,
  activityareaData,
} from "@/helpers/getContactFormData";

export default function ContactStep2(props) {
  const { formData, setFormData } = useContactFormContext();
  const { living } = formData;
  const {
    housetype,
    houseowns,
    livingarea,
    activityarea,
    otherpet,
    familynum,
    familyagree,
    allergic,
  } = living;
  const { onPrevPageClick, onNextPageClick } = props;
  return (
    <ContactFormLayout title="領養人居住情形">
      <div className="flex flex-col gap-4 lg:h-[540px] lg:max-h-xl">
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
          <SelectInput
            options={houseownsData}
            label="房屋所有權"
            placeholder="租屋/自有房屋"
            onSelectionchange={(option) => {
              setFormData((prevState) => ({
                ...prevState,
                living: {
                  ...prevState.living,
                  houseowns: option,
                },
              }));
            }}
          />
          <SelectInput
            options={housetypeData}
            label="住宅類型"
            placeholder="住宅類型"
            onSelectionchange={(option) => {
              setFormData((prevState) => ({
                ...prevState,
                living: {
                  ...prevState.living,
                  housetype: option,
                },
              }));
            }}
          />
        </div>
        <DefaultRadioInput
          title="居住地區"
          options={livingareaData}
          name="livingarea"
          isChecked={livingarea}
          onRadioInputChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              living: {
                ...prevState.living,
                livingarea: value,
              },
            }))
          }
        />
        {/* add 可以帶狗去的戶外區域? */}
        <div className="">
          <InputLabel title="寵物戶外區域" />
          <div className="grid grid-cols-2 gap-2">
            {activityareaData.map((data) => {
              return (
                <CustomCheckbox
                  key={data.value}
                  id={data.value}
                  name={data.value}
                  label={data.label}
                />
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <DefaultInput
            id="familynum"
            name="familynum"
            type="number"
            label="住家人數"
            placeholder="請輸入住家人數"
            inputValue={familynum}
            onInputChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                living: {
                  ...prevState.living,
                  familynum: e.target.value,
                },
              }));
            }}
          />
          <DefaultInput
            id="otherpet"
            name="otherpet"
            type="number"
            label="住家寵物數"
            placeholder="請輸入住家寵物數"
            inputValue={otherpet}
            onInputChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                living: {
                  ...prevState.living,
                  otherpet: e.target.value,
                },
              }));
            }}
          />
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
          <DefaultRadioInput
            title="所有成員是否都同意養狗?"
            options={yes_and_no}
            name="familyagree"
            isChecked={familyagree}
            onRadioInputChange={(value) => {
              setFormData((prevState) => ({
                ...prevState,
                living: {
                  ...prevState.living,
                  familyagree: value,
                },
              }));
            }}
          />
          <DefaultRadioInput
            title="有沒有任何家人對狗狗過敏?"
            options={yes_and_no}
            name="allergic"
            isChecked={allergic}
            onRadioInputChange={(value) => {
              console.log(value);
              setFormData((prevState) => ({
                ...prevState,
                living: {
                  ...prevState.living,
                  allergic: value,
                },
              }));
            }}
          />
        </div>
      </div>
      <ControlBtnLayout>
        <button
          type="button"
          className="rounded bg-mustard text-white h-10 px-4 py-2"
          onClick={onPrevPageClick}
        >
          上一頁
        </button>
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
