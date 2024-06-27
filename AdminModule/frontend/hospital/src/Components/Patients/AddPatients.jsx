import React, { useState } from "react";

const AddPatients = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [emgc_contact, setEmgc_contact] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [symtoms, setSymtoms] = useState("");

  const postPatient = () => {
    let data = {
      name,
      age,
      contact,
      emgc_contact,
      address,
      dob,
      gender,
      symtoms,
    };
    fetch("http://localhost:5999/postPatient", {
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
          className="btn bg-primary-content btn-sm"
          onClick={() =>
            document.getElementById(`my_modal_patient`).showModal()
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add Patient
        </button>
        <dialog id={`my_modal_patient`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Patient</h3>
            <form onSubmit={() => postPatient()}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Age
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Contact
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Contact"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Emergency Contact
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Emergency Contact"
                  onChange={(e) => {
                    setEmgc_contact(e.target.value);
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
                    setAddress(e.target.value);
                  }}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                Date of Birth
                <input
                  type="date"
                  className="grow"
                  placeholder="Enter Date of Birth"
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                Gender (M/F)
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
                Symtoms
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Symtoms"
                  onChange={(e) => {
                    setSymtoms(e.target.value);
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

export default AddPatients;
