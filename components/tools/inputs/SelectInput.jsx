import Select from "react-select";
import InputLabel from "./InputLabel";

export default function SelectInput(props) {
  const { label, options, placeholder } = props;
  return (
    <div className="">
      <InputLabel title={label} />
      <Select
        isClearable
        options={options}
        placeholder={`請選擇${placeholder}`}
      />
    </div>
  );
}
