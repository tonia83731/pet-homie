export default function AdoptionDetailOption(props) {
  const { title, datas, option } = props;
  const grid_num = datas?.length;
  return (
    <div className="">
      <h5 className="font-bold mb-2">{title}</h5>
      <div
        className={`grid text-center border border-slate-100 grid-cols-${grid_num}`}
      >
        {datas.map((data, index) => {
          return (
            <span
              className={`${index !== 0 ? "border-l" : ""} ${
                data.value === option
                  ? "bg-grey-blue-green"
                  : "bg-white text-slate-300"
              }`}
              key={data.value}
            >
              {data.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
