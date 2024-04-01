import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const HOSPITALDATA = [
  ["name", "動物醫院名稱"],
  ["address", "動物醫院地址"],
  ["phone", "連絡電話"],
];

export default function ClinicTable(props) {
  const { tableData } = props;
  const [sourceSorting, setSourceSorting] = useState([]);
  const columnHelper = createColumnHelper();
  const columns = HOSPITALDATA.map((title) =>
    columnHelper.accessor(title[0], {
      header: () => <span className="">{title[1]}</span>,
      cell: (info) => <span className="">{info.getValue()}</span>,
    })
  );

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  return (
    <table className="w-full border-spacing-0 rounded-md bg-white drop-shadow-md block">
      <thead className="bg-dark-green text-white text-lg w-full inline-block rounded-t-md">
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <tr
              className="w-full grid grid-cols-4 rounded-t-md"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header, index) => {
                // console.log(header.column);
                return (
                  <th
                    className={`py-4 ${
                      index === 1 ? "col-span-2" : "col-span-1"
                    }`}
                    key={header.id}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody className="w-full inline-block rounded-b-md max-h-[500px] overflow-x-hidden overflow-y-scroll scroll md:max-h-[550px]">
        <>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row, index) => {
              return (
                <tr
                  key={row.id}
                  className={`${
                    index % 2 === 0 ? "bg-live-green-25" : ""
                  } grid grid-cols-4 rounded-b-md`}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <td
                        key={cell.id}
                        className={`px-4 py-2 ${
                          index === 1 ? "col-span-2" : "col-span-1"
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr className="grid grid-cols-4 rounded-b-md">
              <td className="col-span-4 text-slate-300 text-center ">
                查無資料
              </td>
            </tr>
          )}
        </>
      </tbody>
    </table>
  );
}
