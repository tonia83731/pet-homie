export default function DefaultInput(props) {
  const {
    id,
    type = "text",
    name,
    label,
    placeholder,
    inputValue,
    onInputChange,
  } = props;
  return (
    <div className="">
      <label htmlFor={id} className="font-bold text-md">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="mt-1 w-full h-10 border border-dark-green-25 px-4 py-2 rounded-sm focus:border-live-green"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  );
}
