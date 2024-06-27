import React, { useState } from "react";
import Patients from "./Patients/Patients";
import Employee from "./Employee/Employee";
import EmpDetail from "./EmpDetail/EmpDetail";
import Role from "./Role/Role";
import Room from "./Room/Room";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log("Drawer toggled. IsDrawerOpen:", isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(true);
    console.log("Drawer closed.");
  };

  return (
    <div className="relative">
      <div className="navbar bg-base-100 drop-shadow-lg">
        <div className="navbar-start">
          <div className="drawer">
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle"
              checked={isDrawerOpen}
              onChange={handleDrawerToggle}
            />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost btn-circle drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
                onClick={handleDrawerClose}
              ></label>
              <ul className="menu w-72 pt-24 min-h-full bg-base-200 text-base-content text-xl">
                {/* Sidebar content here */}
                <a href="https://images.app.goo.gl/PN6cm6SqM6MgYWqF6"></a>
                <li>
                  <a className="btn btn-lg mb-8 font-bold shadow-md">
                    <Link to="/dashboard">
                      <label className="flex flex-col items-center">
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
                            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                          />
                        </svg>

                        <text className="text-lg">Dashboard</text>
                      </label>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="btn btn-lg mb-8 font-bold shadow-md">
                    <Link to="/role">
                      <label className="flex flex-col items-center">
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

                        <text className="text-lg">Role</text>
                      </label>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="btn  btn-lg mb-8 font-bold shadow-md">
                    <Link to="/employee">
                      <label className="flex flex-col items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
                          ></path>
                        </svg>

                        <text className="text-lg">Employee</text>
                      </label>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="btn  btn-lg mb-8 font-bold shadow-md">
                    <Link to="/empDetail">
                      <label className="flex flex-col items-center ">
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
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                          />
                        </svg>

                        <text className="text-lg">Employee Details</text>
                      </label>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="btn  btn-lg mb-8 font-bold shadow-md">
                    <Link to="/patient">
                      <label className="flex flex-col items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          id="Radiology-Scan-Doctor--Streamline-Ultimate"
                          height="24"
                          width="24"
                        >
                          <desc>
                            Radiology Scan Doctor Streamline Icon:
                            https://streamlinehq.com
                          </desc>
                          <path
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 5.25003c-0.4836 -0.50076 -1.0679 -0.89336 -1.7142 -1.15191 -0.6464 -0.25855 -1.3402 -0.37718 -2.0358 -0.34809 -0.6956 -0.02909 -1.3894 0.08954 -2.0358 0.34809 -0.6463 0.25855 -1.2306 0.65115 -1.7142 1.15191"
                            stroke-width="1.5"
                          ></path>
                          <path
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 9.00003c-0.4836 -0.50076 -1.0679 -0.89336 -1.7142 -1.15191 -0.6464 -0.25855 -1.3402 -0.37718 -2.0358 -0.34809 -0.6956 -0.02909 -1.3894 0.08954 -2.0358 0.34809 -0.6463 0.25855 -1.2306 0.65115 -1.7142 1.15191"
                            stroke-width="1.5"
                          ></path>
                          <path
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 3.75v7.5"
                            stroke-width="1.5"
                          ></path>
                          <path
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3.75c0 0.79565 0.31607 1.55871 0.87868 2.12132C3.69129 6.43393 4.45435 6.75 5.25 6.75s1.55871 -0.31607 2.12132 -0.87868C7.93393 5.30871 8.25 4.54565 8.25 3.75s-0.31607 -1.55871 -0.87868 -2.12132C6.80871 1.06607 6.04565 0.75 5.25 0.75s-1.55871 0.31607 -2.12132 0.87868C2.56607 2.19129 2.25 2.95435 2.25 3.75Z"
                            stroke-width="1.5"
                          ></path>
                          <path
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 8.25v6"
                            stroke-width="1.5"
                          ></path>
                          <path
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m7.5 23.25 0.75 -7.5h1.5v-3c0 -1.1935 -0.47411 -2.3381 -1.31802 -3.18198C7.58807 8.72411 6.44347 8.25 5.25 8.25c-1.19347 0 -2.33807 0.47411 -3.18198 1.31802C1.22411 10.4119 0.75 11.5565 0.75 12.75v3h1.5l0.75 7.5h4.5Z"
                            stroke-width="1.5"
                          ></path>
                          <path
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 0.75h10.5c0.3978 0 0.7794 0.158035 1.0607 0.43934 0.2813 0.2813 0.4393 0.66284 0.4393 1.06066v10.5c0 0.3978 -0.158 0.7794 -0.4393 1.0607s-0.6629 0.4393 -1.0607 0.4393H13.5"
                            stroke-width="1.5"
                          ></path>
                        </svg>

                        <text className="text-lg">Patient</text>
                      </label>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="btn  btn-lg mb-8 font-bold shadow-md">
                    <Link to="/room">
                      <label className="flex flex-col items-center ">
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
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>

                        <text className="text-lg">Room</text>
                      </label>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl font-bold">SIGMA</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Example table */}
      <div className={`table-container ${isDrawerOpen ? "drawer-open" : ""}`}>
        <table className="table mt-20">
          <Outlet />
        </table>
      </div>

      <style jsx>{`
        .table-container {
          transition: margin-left 0.4s;
        }
        .drawer-open {
          margin-left: 20rem;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
