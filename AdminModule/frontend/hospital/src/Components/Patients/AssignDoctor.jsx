import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AssignDoctor = (props) => {
  const [singleData, setSingleData] = useState([]);
  const [data, setData] = useState([]);
  const [emp_id, setEmp_id] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const patient_id = props.patient_id;

  async function getData() {
    try {
      const response = await fetch("http://localhost:5999/getdoctors");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const revokeRole = async (role_id, patient_id) => {
    try {
      await fetch(
        `http://localhost:5999/deleteAssignDoctor/${role_id}/${patient_id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      // Handle successful revocation (e.g., update UI)
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    getData();
    // getSingleAssignDoctor(patient_id);  // Uncomment if needed
  }, [patient_id]);

  const postAppointment = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const appointmentData = {
      patient_id,
      emp_id,
      time,
      date,
    };
    try {
      const response = await fetch("http://localhost:5999/postAppointment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Doctor Assigned",
          text: "The doctor has been successfully assigned!",
          confirmButtonText: "OK",
        });

        // Close the modal
        document.getElementById(`my_modal_${patient_id}`).close();
      } else {
        throw new Error("Failed to assign doctor");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to assign the doctor. Please try again.",
      });
    }
  };

  return (
    <div>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-sm btn-success btn-outline m-1"
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
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button
              className="btn btn-sm mb-1 btn-outline btn-accent"
              onClick={() =>
                document.getElementById(`my_modal_${patient_id}`).showModal()
              }
            >
              Assign Doctor
            </button>
          </li>

          {/* <li>
            <button
              className="btn btn btn-sm mb-1 btn-outline btn-accent"
              onClick={() =>
                document
                  .getElementById(`my_modal_edit_${patient_id}`)
                  .showModal()
              }
            >
              Update Doctor
            </button>
          </li> */}
        </ul>
      </div>
      {/* Role add modal */}
      <dialog id={`my_modal_${patient_id}`} className="modal modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Select Doctor</h3>
          <table className="table">
            <thead>
              <tr>
                <th className="text-center font-bold text-lg">Employee ID</th>
                <th className="text-center font-bold text-lg">Time</th>
                <th className="text-center font-bold text-lg">Date</th>
                <th className="text-center font-bold text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="justify-items-center text-center">
                  {patient_id}
                </td>
                {/* Time input field */}
                <td className="align-middle">
                  <input
                    type="time"
                    className="form-control text-center"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </td>

                {/* Date input field */}
                <td className="align-middle">
                  <input
                    type="date"
                    className="form-control text-center"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </td>
                <td className="justify-items-center text-center">
                  <form onSubmit={postAppointment}>
                    <select
                      className="select select-bordered w-sm max-w-xs"
                      value={emp_id}
                      onChange={(e) => setEmp_id(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Doctor
                      </option>
                      {data.map((currEle) => (
                        <option key={currEle.emp_id} value={currEle.emp_id}>
                          {currEle.emp_name}
                        </option>
                      ))}
                    </select>

                    <button
                      type="submit"
                      className="btn btn-outline ml-2 btn-success"
                    >
                      Submit
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Role Edit Modal */}
      <dialog id={`my_modal_edit_${patient_id}`} className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit role</h3>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">Role Name</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {singleData.map((role) => (
                  <tr key={role.role_id}>
                    <td className="text-center">
                      {data
                        .filter((ceel) => ceel.role_id === role.role_id)
                        .map((ceel) => ceel.role_name)}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() =>
                          revokeRole(role.role_id, role.patient_id)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Revoke
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AssignDoctor;


// import React, { useState, useEffect } from "react";

// const AssignDoctor = (props) => {
//   const [singleData, setSingleData] = useState([]);
//   // const [role_id, setRole_id] = useState("R1");
//   const [data, setData] = useState([]);
//   const patient_id = props.patient_id;
//   const [emp_id, setEmp_id]= useState("")
//   const [time, setTime]= useState("")
//   const [date, setDate]= useState("")

//   function getData() {
//     fetch("http://localhost:5999/getdoctors").then((result) => {
//       result.json().then((resp) => {
//         setData(resp);
//       });
//     });
//   }

//   // function getSingleAssignDoctor(patient_id) {
//   //   fetch(`http://localhost:5999/getSingleAssignDoctor/${patient_id}`).then(
//   //     (result) => {
//   //       result.json().then((resp) => {
//   //         setSingleData(resp);
//   //       });
//   //     }
//   //   );
//   // }

//   const revokeRole = (role_id, patient_id) => {
//     fetch(`http://localhost:5999/deleteAssignDoctor/${role_id}/${patient_id}`, {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       // .then(getSingleAssignDoctor(patient_id))
//       .catch((error) => {
//         console.error("Error deleting data:", error);
//       });
//   };

//   useEffect(() => {
//     getData();
//     // getSingleAssignDoctor(patient_id);
//   }, [patient_id]);

//   const postAppointment = () => {
//     let data = {
//       patient_id,
//       emp_id,
//       time,
//       date
//     };
//     fetch("http://localhost:5999/postAppointment", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error("Error saving data:", error);
//       });
//   };

//   return (
//     <div>
//       <div className="dropdown ">
//         <div
//           tabIndex={0}
//           role="button"
//           className="btn btn-sm btn-secondary btn-outline  m-1"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="size-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
//             />
//           </svg>
//         </div>
//         <ul
//           tabIndex={0}
//           className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//         >
//           <li>
//             <button
//               className="btn btn-sm mb-1 btn-outline btn-accent"
//               onClick={() =>
//                 document.getElementById(`my_modal_${patient_id}`).showModal()
//               }
//             >
//               Assign Doctor
//             </button>
//           </li>

//           <li>
//             <button
//               className="btn btn btn-sm mb-1 btn-outline btn-accent"
//               onClick={() =>
//                 document
//                   .getElementById(`my_modal_edit_${patient_id}`)
//                   .showModal()
//               }
//             >
//               Update Doctor
//             </button>
//           </li>
//         </ul>
//       </div>
//       {/* Role add modal */}
//       <dialog id={`my_modal_${patient_id}`} className="modal modal-middle">
//         <div className="modal-box w-11/12 max-w-5xl">
//           <h3 className="font-bold text-lg">Select Doctor</h3>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th className="text-center font-bold text-lg ">Employee ID</th>
//                 <th className="text-center font-bold text-lg">Time</th>
//                 <th className="text-center font-bold text-lg">Date</th>
//                 <th className="text-center font-bold text-lg">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//             <form onSubmit={postAppointment}>
//               <tr>
//                 <td className="justify-items-center text-center">
//                   {patient_id}
//                 </td>
//                 {/* Time input field */}
//                 <td className="align-middle">
//                   <input
//                     type="time"
//                     className="form-control text-center"
//                     value={time}
//                     onChange={(e) => setTime(e.target.value)}
//                   />
//                 </td>

//                 {/* Date input field */}
//                 <td className="align-middle">
//                   <input
//                     type="date"
//                     className="form-control text-center"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                   />
//                 </td>
//                 <td className="justify-items-center text-center">

//                     <select
//                       className="select select-bordered w-sm max-w-xs"
//                       value={emp_id}
//                       onChange={(e) => setEmp_id(e.target.value)}
//                     >
//                       {data.map((currEle, index) => {
//                         return (
//                           <option key={currEle.emp_id} value={currEle.emp_id}>
//                             {currEle.emp_name}
//                           </option>
//                         );
//                       })}
//                     </select>

//                     <button
//                       type="submit"
//                       className="btn btn-outline ml-2 btn-success"
//                     >
//                       submit
//                     </button>
//                 </td>
//               </tr>
//                   </form>
//             </tbody>
//           </table>
//         </div>
//         <form method="dialog" className="modal-backdrop">
//           <button>close</button>
//         </form>
//       </dialog>

//       {/* Role Edit Modal */}
//       <dialog id={`my_modal_edit_${patient_id}`} className="modal modal-middle">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Edit role</h3>
//           <div className="overflow-x-auto">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th className="text-center">Role Name</th>
//                   <th className="text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {singleData.map((role) => (
//                   <tr key={role.role_id}>
//                     <td className="text-center">
//                       {data.map((ceel) => {
//                         if (ceel.role_id === role.role_id)
//                           return <>{ceel.role_name}</>;
//                       })}
//                     </td>
//                     <td className="text-center">
//                       <button
//                         className="btn btn-sm btn-outline btn-error"
//                         onClick={() =>
//                           revokeRole(role.role_id, role.patient_id)
//                         }
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke-width="1.5"
//                           stroke="currentColor"
//                           class="size-5"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                           />
//                         </svg>
//                         Revoke
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <form method="dialog" className="modal-backdrop">
//           <button>close</button>
//         </form>
//       </dialog>
//     </div>
//   );
// };

// export default AssignDoctor;
