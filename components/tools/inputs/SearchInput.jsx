export default function SearchInput(props) {
  const { inputValue, onSearchChange } = props;
  return (
    <div className="col-span-4 w-full h-10 flex items-center">
      <input
        type="text"
        className="w-full h-full border border-dark-green-25 px-4 py-2 rounded-md focus:border-live-green"
        placeholder="請輸入關鍵字搜尋"
        value={inputValue}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}
