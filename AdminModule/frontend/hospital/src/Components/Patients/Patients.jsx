import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, usePagination, useGlobalFilter } from "react-table";
import AddPatients from "./AddPatients";
import EditPatients from "./EditPatients";
import AssignDoctor from "./AssignDoctor";

const Patients = () => {
  const [data, setData] = useState([]);

  // Function to fetch and set patient data
  const getData = () => {
    fetch("http://localhost:5999/getPatient")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Patient ID",
        accessor: "patient_id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Emergency Contact",
        accessor: "emgc_contact",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "DoB",
        accessor: "dob",
        Cell: ({ value }) => value.slice(0, 10),
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Symptoms",
        accessor: "symptoms",
      },
      {
        Header: "Assign Doctor",
        Cell: ({ row }) => <AssignDoctor patient_id={row.original.patient_id} />,
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <button className="mr-2">
              <EditPatients patient_id={row.original.patient_id} />
            </button>
            <button
              className="btn btn-error btn-outline btn-sm text-white"
              onClick={() => deletePatients(row.original.patient_id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        ),
      },
    ],
    []
  );

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
    setPageSize,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { pageIndex, pageSize, globalFilter } = state;

  function deletePatients(patient_id) {
    fetch(`http://localhost:5999/deletePatient/${patient_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getData(); // Refresh the data after deletion
      });
    });
  }

  return (
    <div>
      <div className="table-container border border-gray-300 rounded-lg mx-8">
        <div className="flex justify-between items-center mx-20 mt-2 pb-2 shadow-sm">
          <h1 className="text-xl font-semibold items-center">Patients</h1>
          <AddPatients getData={getData} />
        </div>
        <div className="flex items-center justify-end pb-2 mx-20 mt-2 shadow-sm">
          <div className="flex items-center gap-1 mr-4">
            <span>Show</span>
            <select
              className="select select-bordered select-sm"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[5, 10, 15, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span>Entries</span>
          </div>
          <div>
            <label className="flex items-center gap-2 input input-sm input-bordered">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={globalFilter || ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="">
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
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 14l-5-5h10l-5 5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 6l5 5H5l5-5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )
                          ) : null}
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
        </div>
        <div className="pagination flex items-center justify-end py-2 mx-20 gap-4">
          <button
            className="btn btn-outline btn-sm"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            First
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            Last
          </button>
          <span className="text-sm">
            Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Patients;


// import React, { useEffect, useState } from "react";
// import AddPatients from "./AddPatients";
// import EditPatients from "./EditPatients";
// import AssignDoctor from "./AssignDoctor";


// const Patients = () => {
//   const [data, setData] = useState([]);

//   function getData() {
//     fetch("http://localhost:5999/getPatient").then((result) => {
//       result.json().then((resp) => {
//         setData(resp);
//       });
//     });
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   function deletePatients(patient_id) {
//     fetch(`http://localhost:5999/deletePatient/${patient_id}`, {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log(resp);
//         getData();
//       });
//     });
//   }
  

//   return (
//     <div>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th className="text-center text-base">Patients Id</th>
//               <th className="text-center text-base">Name</th>             
//               <th className="text-center text-base">Age</th>             
//               <th className="text-center text-base">Contact</th>             
//               <th className="text-center text-base">Emergency Contact</th>             
//               <th className="text-center text-base">Address</th>             
//               <th className="text-center text-base">DoB</th>             
//               <th className="text-center text-base">Gender</th>             
//               <th className="text-center text-base">Symptoms</th>             
//               <th className="text-center text-base">Actions</th>              
//               <th className="text-center text-base">Assign Doctor</th>             
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((currEle, index) => {
//               return (
//                 <tr key={index}>
//                   <td className="text-center">{currEle.patient_id}</td>
//                   <td className="text-center">{currEle.name}</td>
//                   <td className="text-center">{currEle.age}</td>
//                   <td className="text-center">{currEle.contact}</td>
//                   <td className="text-center">{currEle.emgc_contact}</td>
//                   <td className="text-center">{currEle.address}</td>
//                   <td className="text-center">{currEle.dob.toString().slice(0,10)}</td>
//                   <td className="text-center">{currEle.gender}</td>
//                   <td className="text-center">{currEle.symptoms}</td>
//                   <td className="text-center">
//                     <div>
//                       <button className="mr-2 ">
//                       <EditPatients patient_id={currEle.patient_id} />
//                       </button>
//                       <button
//                        className=" btn m-2 btn-outline btn-error btn-sm text-white"
//                        onClick={() => deletePatients(currEle.patient_id)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke-width="1.5"
//                           stroke="currentColor"
//                           class="size-6"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </td>
//                   <td className="text-center">
//                     <AssignDoctor patient_id={currEle.patient_id} />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         <div className="text-center mt-6">
//           <button className="mr-6 ">
//             <AddPatients/>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Patients;
