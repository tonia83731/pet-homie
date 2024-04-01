export default function SearchInput(props) {
  const { inputValue, onSearchChange } = props;
  return (
    <div className="h-full flex items-center">
      <input
        type="text"
        className="border border-slate-300 px-4 py-2 rounded-md focus:border-live-green"
        placeholder="請輸入關鍵字搜尋"
        value={inputValue}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}
