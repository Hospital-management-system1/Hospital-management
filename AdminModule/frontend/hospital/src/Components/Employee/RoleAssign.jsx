import React, { useState, useEffect } from "react";

const RoleAssign = (props) => {
  const [singleData, setSingleData] = useState([])
  const [role_id, setRole_id] = useState("R1");
  const [data, setData] = useState([]);
  const emp_id = props.emp_id

  function getData() {
    fetch("http://localhost:5999/getRole").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  function getSingleRoleAssign(emp_id) {
    fetch(`http://localhost:5999/getSingleRoleAssign/${emp_id}`).then((result) => {
      result.json().then((resp) => {
        setSingleData(resp);
      });
    });
  }

  const revokeRole = (role_id, emp_id) => {
    fetch(`http://localhost:5999/deleteRoleAssign/${role_id}/${emp_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(getSingleRoleAssign(emp_id))
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  useEffect(() => {
    getData();
    getSingleRoleAssign(emp_id);
  }, [emp_id]);

  const postAssign = () => {
    let data = {
      role_id,
      emp_id,
    };
    fetch("http://localhost:5999/postAssign", {
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
      <div className="dropdown ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-sm btn-secondary btn-outline  m-1"
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
              onClick={() => document.getElementById(`my_modal_${emp_id}`).showModal()}
            >
              Add Role
            </button>
          </li>

          <li>
            <button
              className="btn btn btn-sm mb-1 btn-outline btn-accent"
              onClick={() =>
                document.getElementById(`my_modal_edit_${emp_id}`).showModal()
              }
            >
              Edit Role
            </button>
          </li>
        </ul>
      </div>
      {/* Role add modal */}
      <dialog id={`my_modal_${emp_id}`} className="  modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Select Role</h3>
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Employee ID</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="justify-items-center text-center">{emp_id}</td>
                <td className="justify-items-center text-center">
                  <form onSubmit={postAssign}>
                    <select
                      className="select select-bordered w-sm max-w-xs"
                      value={role_id}
                      onChange={(e) => setRole_id(e.target.value)}
                    >
                      {data.map((currEle, index) => {
                        return (
                          <option key={currEle.role_id} value={currEle.role_id}>
                            {currEle.role_name}
                          </option>
                        );
                      })}
                    </select>
                    <button type="submit" className="btn btn-outline ml-2 btn-success">
                      submit
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
      <dialog id={`my_modal_edit_${emp_id}`} className="modal modal-middle">
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
                      {data.map((ceel) => {
                        if (ceel.role_id === role.role_id)
                          return <>{ceel.role_name}</>;
                      })}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() => revokeRole(role.role_id, role.emp_id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
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

export default RoleAssign;
