import React, { useState } from "react";

const EditRole = (props) => {
  const [role_name, setRole_name] = useState("");

  const updateRole = (role_id) => {
    let data = {
      role_name,
    };
    fetch(`http://localhost:5999/updateRole/${role_id}`, {
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
            document
              .getElementById(`my_modal_edit_role_${props.role_id}`)
              .showModal()
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
        <dialog id={`my_modal_edit_role_${props.role_id}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Role Name</h3>
            <form onSubmit={() => updateRole(props.role_id)}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Role Id
                <input
                  type="text"
                  className="grow"
                  placeholder={`${props.role_id}`}
                  disabled
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

export default EditRole;
