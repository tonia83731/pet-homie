import InputLabel from "./InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function DefaultRadioInput(props) {
  const { title, options, name, isChecked, onRadioInputChange } = props;
  return (
    <div className="">
      <InputLabel title={title} />
      <div
        className={`border border-dark-green-25 rounded-sm grid grid-cols-${options?.length}`}
      >
        {options.map((option, index) => {
          const { label, value } = option;
          return (
            <div
              className={`text-center py-2 cursor-pointer ${
                index > 0 ? "border-l border-dark-green-25" : ""
              } ${
                isChecked === value
                  ? "bg-grandpa-orange-25 text-dark-green"
                  : "text-dark-green-25"
              }`}
              key={value}
            >
              {isChecked === value && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={`pr-2 text-live-green`}
                />
              )}
              <input
                type="radio"
                className="hidden"
                name={name}
                id={value}
                value={value}
                checked={isChecked === value}
                onChange={() => onRadioInputChange(value)}
              />
              <label htmlFor={value} className="">
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
