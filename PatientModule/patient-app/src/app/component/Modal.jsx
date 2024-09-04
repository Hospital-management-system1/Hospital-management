"use client"; // Enable client-side rendering
import React, { useState } from "react";
import Swal from "sweetalert2";

const Modal = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("+91");
  const [emgc_contact, setEmgc_contact] = useState("+91");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [email, setEmail] = useState("");

  const handleContactChange = (setter) => (e) => {
    const value = e.target.value;
    // Ensure that the value starts with +91, or reset it to +91
    if (value.startsWith("+91")) {
      setter(value);
    } else if (!value) {
      setter("+91");
    } else {
      setter("+91" + value.replace("+91", ""));
    }
  };

  const postAppointment = async (event) => {
    event.preventDefault(); // Prevent form submission reload

    let data = {
      name,
      age,
      contact,
      emgc_contact,
      address,
      dob,
      gender,
      symptoms,
      email,
    };

    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        Swal.fire({
          icon: "success",
          title: "Appointment Request Sent",
          text: `Dear ${name}, your appointment request has been received.`,
        });
        document.getElementById(`my_modal_role`).close();
      } else {
        throw new Error("Failed to submit the appointment request");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error sending your appointment request.",
      });
    }
  };

  return (
    <div>
      <div>
        <button
          className="btn bg-glass text-xl
             text-white btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300"
          onClick={() => document.getElementById(`my_modal_role`).showModal()}
        >
          Get Appointment
        </button>
        <dialog id={`my_modal_role`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-black text-lg mb-2">Appointment</h3>
            <form onSubmit={postAppointment}>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Name :
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Age :
                <input
                  type="number"
                  className="grow"
                  placeholder="Enter Age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Contact :
                <input
                  type="tel"
                  className="grow"
                  placeholder="Enter Contact"
                  required
                  value={contact}
                  onChange={handleContactChange(setContact)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Emergency Contact :
                <input
                  type="tel"
                  className="grow"
                  placeholder="Enter Emergency Contact"
                  required
                  value={emgc_contact}
                  onChange={handleContactChange(setEmgc_contact)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Address :
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                DOB :
                <input
                  type="date"
                  className="grow"
                  placeholder="Enter DOB"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Gender :
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Gender F/M/O"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Symptoms :
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Symptoms"
                  required
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 mb-2">
                Email :
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button type="submit" className="btn btn-success mt-2">
                Submit
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Modal;

// "use client"
// import React, { useState } from "react";
// import Swal from "sweetalert2";
// const Modal = () => {
//   const[name, setName] = useState("")
//   const[age, setAge] = useState("")
//   const[contact, setcontact] = useState("")
//   const[emgc_contact, setEmgc_contact] = useState("")
//   const[address, setAddress] = useState("")
//   const[dob, setDob] = useState("")
//   const[gender, setGender] = useState("")
//   const[symtoms, setSymtoms] = useState("")
//   const[email, setEmail] = useState("")

//   const postAppointment = () => {
//     let data = {
//       name,
//       age,
//       contact,
//       emgc_contact,
//       address,
//       dob,
//       gender,
//       symtoms,
//       email
//     };
//     fetch("http://localhost:3000/api/patient", {
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
//       <div>
//         <button
//           className="btn bg-glass text-xl
//              text-white btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300"
//           onClick={() => document.getElementById(`my_modal_role`).showModal()}
//         >
//           Get Appointment
//         </button>
//         <dialog id={`my_modal_role`} className="modal">
//           <div className="modal-box">
//             <h3 className="font-bold text-black text-lg">Appointment</h3>
//             <form onSubmit={() => postAppointment()}>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                 Name :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Name"
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                Age :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Age"
//                   onChange={(e) => {
//                     setAge(e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                Contact :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Contact"
//                   onChange={(e) => {
//                     setcontact("+91"+e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                Emergency Contact :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Emergency Contact"
//                   onChange={(e) => {
//                     setEmgc_contact(e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                Address :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Address"
//                   onChange={(e) => {
//                     setAddress(e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                DOB :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter DOB"
//                   onChange={(e) => {
//                     setDob(e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                Gender :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Gender"
//                   onChange={(e) => {
//                     setGender(e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                Symptoms :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Symptoms"
//                   onChange={(e) => {
//                     setSymtoms(e.target.value);
//                   }}
//                 />
//               </label>
//               <label className="input text-black input-bordered flex items-center gap-2 mb-2">
//                Email :
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Enter Email"
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                 />
//               </label>
//               <button type="submit" className="btn btn-success mt-2">
//                 Submit
//               </button>
//             </form>
//           </div>
//           <form method="dialog" className="modal-backdrop">
//             <button>close</button>
//           </form>
//         </dialog>
//       </div>
//     </div>
//   );
// };

// export default Modal;
