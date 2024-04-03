import ContactFormLayout from "./ContactFormLayout";
import ControlBtnLayout from "./ControlBtnLayout";
import DefaultInput from "../tools/inputs/DefaultInput";
import DefaultRadioInput from "../tools/inputs/DefaultRadioInput";
import SelectInput from "../tools/inputs/SelectInput";
import InputLabel from "../tools/inputs/InputLabel";
import { useContactFormContext } from "@/context/ContactFormContext";
import { yes_and_no } from "@/helpers/getContactFormData";

export default function ContactStep2(props) {
  const { onPrevPageClick, onNextPageClick } = props;
  return (
    <ContactFormLayout title="領養人居住情形">
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
