import React, { useState } from "react";

const AddRole = () => {
  const [role_id, setRole_id] = useState("");
  const [role_name, setRole_name] = useState("");

  const postRole = () => {
    let data = {
      role_id,
      role_name,
    };
    fetch("http://localhost:5999/postRole", {
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
          onClick={() => document.getElementById(`my_modal_role`).showModal()}
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
          Add Role
        </button>
        <dialog id={`my_modal_role`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Employee</h3>
            <form onSubmit={() => postRole()}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Role Id
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Role Id"
                  onChange={(e) => {
                    setRole_id(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Role Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Role Name"
                  onChange={(e) => {
                    setRole_name(e.target.value);
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

export default AddRole;
