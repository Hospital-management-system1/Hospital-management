import React, { useState } from "react";

const EditPatients = (props) => {
  const [emgc_contact, setEmgc_contact] = useState("");
  const [address, setAddress] = useState("");

  const updatePatient = (patient_id) => {
    let data = {
      emgc_contact,
      address,
    };
    fetch(`http://localhost:5999/updatePatient/${patient_id}`, {
      method: "PATCH",
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
          className="btn btn-outline btn-primary btn-sm text-white"
          onClick={() =>
            document.getElementById(`my_modal_patient_${props.patient_id}`).showModal()
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <dialog id={`my_modal_patient_${props.patient_id}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Patient Detail</h3>
            <form onSubmit={() => updatePatient(props.patient_id)}>
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
                address
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter address"
                  onChange={(e) => {
                    setAddress(e.target.value);
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

export default EditPatients;
