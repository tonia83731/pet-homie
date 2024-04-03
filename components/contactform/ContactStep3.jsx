import ContactFormLayout from "./ContactFormLayout";
import ControlBtnLayout from "./ControlBtnLayout";
import DefaultInput from "../tools/inputs/DefaultInput";
import DefaultRadioInput from "../tools/inputs/DefaultRadioInput";
import DefaultTextarea from "../tools/inputs/DefaultTextarea";
import SelectInput from "../tools/inputs/SelectInput";
import InputLabel from "../tools/inputs/InputLabel";
import { useContactFormContext } from "@/context/ContactFormContext";
import { yes_and_no } from "@/helpers/getContactFormData";

export default function ContactStep3(props) {
  const { onPrevPageClick, onPageSubmit } = props;
  const { formData, setFormData } = useContactFormContext();
  const { pet } = formData;
  const { experience, skill, guide, alongtime, reason, question } = pet;
  return (
    <ContactFormLayout title="寵物經驗">
      <div className="flex flex-col gap-4 lg:h-[540px] lg:max-h-xl">
        <DefaultRadioInput
          title="是否養過寵物?"
          options={yes_and_no}
          name="experience"
          isChecked={experience}
          onRadioInputChange={(value) => {
            setFormData((prevState) => ({
              ...prevState,
              pet: {
                ...prevState.pet,
                experience: value,
              },
            }));
          }}
        />
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
          <DefaultRadioInput
            title="是否教過任何技能或指令?"
            options={yes_and_no}
            name="skill"
            isChecked={skill}
            onRadioInputChange={(value) => {
              setFormData((prevState) => ({
                ...prevState,
                pet: {
                  ...prevState.pet,
                  skill: value,
                },
              }));
            }}
          />
          <DefaultRadioInput
            title="是否願意接受指導?"
            options={yes_and_no}
            name="guide"
            isChecked={guide}
            onRadioInputChange={(value) => {
              setFormData((prevState) => ({
                ...prevState,
                pet: {
                  ...prevState.pet,
                  guide: value,
                },
              }));
            }}
          />
        </div>
        <DefaultInput
          id="alongtime"
          name="alongtime"
          type="number"
          label="寵物每天需要獨處幾個小時?"
          placeholder="請輸入小時"
          inputValue={alongtime}
          onInputChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              living: {
                ...prevState.living,
                alongtime: e.target.value,
              },
            }));
          }}
        />
        <DefaultTextarea
          id="reason"
          name="reason"
          label="領養原因"
          placeholder="請輸入領養原因"
          inputValue={reason}
          onTextAreaChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              pet: {
                ...prevState.pet,
                reason: e.target.value,
              },
            }));
          }}
        />
        <DefaultTextarea
          id="question"
          name="question"
          label="其他問題"
          placeholder="請輸入其他問題"
          inputValue={question}
          onTextAreaChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              pet: {
                ...prevState.pet,
                question: e.target.value,
              },
            }));
          }}
        />
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
          type="submit"
          className="col-start-4 rounded bg-brightly-orange text-white h-10 px-4 py-2"
          onClick={onPageSubmit}
        >
          提交
        </button>
      </ControlBtnLayout>
    </ContactFormLayout>
  );
}
