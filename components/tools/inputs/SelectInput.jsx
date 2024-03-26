import Select from "react-select";

export default function SelectInput(props) {
  const { label, options, placeholder } = props;
  return (
    <div className="">
      <label htmlFor="" className="">
        {label}
      </label>
      <Select
        isClearable
        options={options}
        placeholder={`請選擇${placeholder}`}
      />
    </div>
  );
}
