import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
// import AddRoleAssign from "./AddRoleAssign";
// import EditRoleAssign from "./EditRoleAssign";

const RoleAssign = () => {
    const [data, setData] = useState([]);
  
    const columns = useMemo(
      () => [
        {
          Header: "Serial Number",
          Cell: ({ row }) => row.index + 1,
        },
        {
          Header: "Role ID",
          accessor: "role_id",
        },
        {
          Header: "Employee ID",
          accessor: "emp_id",
        },

        {
          Header: "Actions",
          Cell: ({ row }) => (
            <div className="flex items-center justify-center">
              {/* <EditRoleAssign dept_id = {row.original.dept_id}/> */}
             
            </div>
          ),
        },
      ],
      []
    );
  
    useEffect(() => {
      fetch("http://localhost:5999/getAssign")
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    }, []);
  
    
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canPreviousPage,
      canNextPage,
      pageOptions,
      gotoPage,
      pageCount,
      state,
      prepareRow,
    } = useTable({ columns, data }, useSortBy, usePagination);
  
    const { pageIndex } = state;
  
    return (
      <div>
        <div className="table-container border border-gray-300 rounded-lg mx-8">
          <div className="flex justify-between items-center mx-20 mt-2 pb-2 shadow-sm">
            <h1 className="text-xl font-semibold items-center">
              Role Assign 
            </h1>
            {/* add RoleAssign */}
            {/* <AddRoleAssign/> */}
            
          </div>
          <div className="overflow-x-auto">
            <table {...getTableProps()} className="table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="text-center text-base"
                      >
                        <div className="flex items-center justify-center">
                          {column.render("Header")}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} className="text-center">
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex items-center justify-center gap-4">
              <div>
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="btn btn-square btn-outline btn-sm"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="btn btn-outline btn-primary btn-sm"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline btn-primary btn-sm"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next
                </button>
                <button
                  className="btn btn-square btn-outline btn-sm"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10l-3.72-3.72a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RoleAssign;
  