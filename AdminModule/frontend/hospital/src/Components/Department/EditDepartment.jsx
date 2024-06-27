import React, { useState } from "react";

const EditDepartment = (props) => {
  const [dept_name, setdept_name] = useState("");
  const [room_id, setroom_id] = useState("");

  const updateDepartment = (dept_id) => {
    let data = {
      dept_name,
      room_id
    };
    fetch(`http://localhost:5999/updateDepartment/${dept_id}`, {
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
              .getElementById(`my_modal_edit_dept_${props.dept_id}`)
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
        <dialog id={`my_modal_edit_dept_${props.dept_id}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Department </h3>
            <form onSubmit={() => updateDepartment(props.dept_id)}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Department Id
                <input
                  type="text"
                  className="grow"
                  placeholder={`${props.dept_id}`}
                  disabled
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Department Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Department Name"
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
                  placeholder="Enter Department Name"
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

export default EditDepartment;
