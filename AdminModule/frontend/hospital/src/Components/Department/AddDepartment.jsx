import React, { useState } from "react";

const AddDepartment = () => {
  const [dept_id, setdept_id] = useState("");
  const [dept_name, setdept_name] = useState("");
  const [room_id, setroom_id] = useState("");
  

  const postDepartment = () => {
    let data = {
      dept_id,
      dept_name,
      room_id
    };
    fetch("http://localhost:5999/postDepartment", {
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
            document.getElementById(`my_modal_department`).showModal()
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
        <dialog id={`my_modal_department`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Department</h3>
            <form onSubmit={() => postDepartment()}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                dept_id
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter dept_id"
                  onChange={(e) => {
                    setdept_id(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                dept_name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter dept_name"
                  onChange={(e) => {
                    setdept_name(e.target.value);
                  }}
                />
              </label>                      
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Room Id
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Room Id"
                  onChange={(e) => {
                    setroom_id(e.target.value);
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

export default AddDepartment;
