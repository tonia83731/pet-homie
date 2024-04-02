import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const HOSPITALDATA = [
  ["name", "動物醫院名稱"],
  ["address", "動物醫院地址"],
  ["phone", "連絡電話"],
];
const styles = {
  button: "py-2 hover:text-live-green disabled:text-slate-300",
};

export default function ClinicTable(props) {
  const { tableData } = props;
  // const [sourceSorting, setSourceSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 50,
  });
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
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    debugTable: true,
  });

  return (
    <>
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
      <div className="mt-4 mb-16 flex justify-center items-center lg:justify-end lg:gap-4">
        <div className="max-w-36 flex gap-0.5 lg:justify-end">
          <button
            className={`${styles.button}`}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <input
            type="number"
            className="w-1/5 mx-2 text-center border border-dark-green-25 rounded-sm focus:border-live-green disabled:text-dark-green-25"
            disabled={!table.getCanPreviousPage() || !table.getCanNextPage()}
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
          <button
            className={`${styles.button}`}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button
            className={`${styles.button}`}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </div>
        <div className="">共 {table.getPageCount().toLocaleString()} 頁</div>
      </div>
    </>
  );
}
