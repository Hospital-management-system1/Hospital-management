import React, { useState } from "react";

const AddEmpDatail = () => {
    
    const [emp_id,setEmp_id] = useState("");
    const [address, setAdress] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState();

  const postEmpDetail = () => {
    let data = {      
      emp_id,
      address,
      contact,
      gender,
      dob
    };
    fetch("http://localhost:5999/postEmpDetail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };
  return (
    <div>
      <div>
        <button
          className="btn bg-primary-content btn-sm text-black"
          onClick={() => document.getElementById(`my_modal1`).showModal()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          Add Employee
        </button>
        <dialog id={`my_modal1`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Employee</h3>
            <form onSubmit={() => postEmpDetail()}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Employee ID
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Employee ID"
                  onChange={(e) => {
                    setEmp_id(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Address
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setAdress(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Contact
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter contact number"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Gender
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                DOB
                <input
                  type="Date"
                  className="grow"
                  placeholder="Enter DoB"
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </label>
              
              <button type="submit" className="btn mt-2">
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

export default AddEmpDatail;
