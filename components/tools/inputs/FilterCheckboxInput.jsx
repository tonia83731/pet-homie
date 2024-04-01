import InputLabel from "./InputLabel";

export default function FilterCheckboxInput(props) {
  const { title, options, type, isChecked, onFilterChange } = props;
  const length = options?.length;
  const dataLength = length.toString();
  return (
    <div className="">
      <InputLabel title={title} />
      <div
        className={`grid grid-cols-${dataLength} justify-center items-center text-center`}
      >
        {options.map((data, index) => {
          const { label, value } = data;
          return (
            <div
              className={`py-2 text-slate-300 ${
                index !== 0 ? "border-l border-blueberry-40" : ""
              } ${
                isChecked[index]
                  ? "bg-grandpa-orange text-dark-green font-medium"
                  : ""
              }`}
              key={value}
            >
              <input
                type="checkbox"
                className="hidden"
                id={value}
                checked={isChecked[index]}
                onChange={() => onFilterChange(type, index)}
              />
              <label
                htmlFor={value}
                className={`cursor-pointer ${
                  isChecked[index] ? "text-dark-green font-medium" : ""
                }`}
              >
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
