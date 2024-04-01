export default function SearchCodeInput(props) {
  const { inputValue, onSearchCodeChange } = props;
  return (
    <div className="mb-4">
      <input
        type="text"
        className="border border-slate-300 px-4 py-2 rounded-md focus:border-live-green"
        placeholder="請輸入晶片號碼"
        value={inputValue}
        onChange={(e) => onSearchCodeChange(e)}
        onKeyDown={(e) => {
          const inputChar = e.key;
          if (
            e.ctrlKey ||
            inputChar === "Backspace" ||
            inputChar === "Delete" ||
            inputChar === "ArrowLeft" ||
            inputChar === "ArrowRight" ||
            inputChar === "ArrowUp" ||
            inputChar === "ArrowDown" ||
            inputChar === "Home" ||
            inputChar === "End" ||
            (e.key === "a" && e.ctrlKey) || // Allow Ctrl+A
            (e.key === "c" && e.ctrlKey) || // Allow Ctrl+C
            (e.key === "v" && e.ctrlKey) || // Allow Ctrl+V
            (e.key === "x" && e.ctrlKey) // Allow Ctrl+X
          ) {
            return;
          }
          if (!/[0-9]/.test(inputChar)) {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
}
