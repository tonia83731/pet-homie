export default function DefaultTextarea(props) {
  const { id, name, label, placeholder, inputValue, onTextAreaChange } = props;
  return (
    <div className="">
      <label htmlFor={id} className="font-bold text-md">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        cols="30"
        rows="3"
        maxlength="200"
        placeholder={placeholder}
        className="mt-1 w-full border border-dark-green-25 px-4 py-2 rounded-sm focus:border-live-green"
        onChange={(e) => onTextAreaChange(e)}
        style={{ resize: "none" }}
      >
        {inputValue}
      </textarea>
    </div>
  );
}
