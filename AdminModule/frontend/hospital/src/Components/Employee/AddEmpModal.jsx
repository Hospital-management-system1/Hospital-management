import React, { useState, useEffect } from "react";

const AddEmpModal = () => {
  const [room_id, setRoom_id] = useState("");
  const [room_name, setRoom_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImage] = useState(null);

  const postRole = () => {
    let data = {
      room_id,
      room_name,
      email,
      password,
      img
    };
    fetch("http://localhost:5999/postEmp", {
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
          onClick={() => document.getElementById(`my_modal_room`).showModal()}
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
          Add Employee
        </button>
        <dialog id={`my_modal_room`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Employee</h3>
            <form onSubmit={() => postRole()}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Employee Id
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Employee Id"
                  onChange={(e) => {
                    setRoom_id(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Employee Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Empoloyee Name"
                  onChange={(e) => {
                    setRoom_name(e.target.value);
                  }}
                />
              </label>           
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>           
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Password
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>           
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Image
                <input
                  type="file"
                  className="grow"
                //   placeholder="Enter Empoloyee Name"
                onChange={(e) => setImage(e.target.files[0])}
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

export default AddEmpModal;
