import Select from "react-select";
import InputLabel from "./InputLabel";
import { colourStyles } from "@/app/shelter_and_clinic/clinic/page";

export default function SelectInput(props) {
  const { label, options, placeholder, onSelectionchange } = props;
  return (
    <div className="">
      <InputLabel title={label} />
      <Select
        isClearable
        options={options}
        styles={colourStyles}
        placeholder={`請選擇${placeholder}`}
        onChange={(option) => onSelectionchange(option)}
      />
    </div>
  );
}
