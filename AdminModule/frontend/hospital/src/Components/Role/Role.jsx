import React, { useEffect, useState } from "react";
import AddRole from "./AddRole";
import EditRole from "./EditRole";


const Role = () => {
  const [data, setData] = useState([]);

  function getData() {
    fetch("http://localhost:5999/getRole").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function deleteRole(role_id) {
    fetch(`http://localhost:5999/deleteRole/${role_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getData();
      });
    });
  }
  

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center text-base">Role Id</th>
              <th className="text-center text-base">Role Name</th>              
              <th className="text-center text-base">Actions</th>              
            </tr>
          </thead>
          <tbody>
            {data.map((currEle, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{currEle.role_id}</td>
                  <td className="text-center">{currEle.role_name}</td>
                  <td className="text-center">
                    <div>
                      <button className="mr-2 ">
                      <EditRole role_id={currEle.role_id} />
                      </button>
                      <button
                       className=" btn btn-outline btn-error btn-sm text-white"
                       onClick={() => deleteRole(currEle.role_id)}
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
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-center mt-6">
          <button className="mr-6 ">
            <AddRole/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Role;
