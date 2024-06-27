import React, { useState } from "react";
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
      <div className="rounded-br-lg bg-red-50 navbar bg-base-100 drop-shadow-lg">
        <div className=" navbar-start">
          <div className="drawer">
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle"
              checked={isDrawerOpen}
              onChange={handleDrawerToggle}
            />
            <div className=" drawer-content">
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
              <ul className="menu w-72 bg-white min-h-full bg-base-200 text-base-content text-xl">
                {/* Sidebar content here */}
                <div className="flex gap-6 justify-center items-center">
                  <img
                    className="mb-4 mt-2"
                    src="data:image/png;base64,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"
                    alt=""
                    height={120}
                    width={120}
                  />
                </div>
                <li>
                  <a className="btn btn-lg btn-outline mb-8 font-bold shadow-md">
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
                  <a className="btn btn-lg btn-outline mb-8 font-bold shadow-md">
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
                  <a className="btn btn-outline btn-lg mb-8 font-bold shadow-md">
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
                  <a className="btn btn-outline btn-lg mb-8 font-bold shadow-md">
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
                  <a className="btn btn-outline btn-lg mb-8 font-bold shadow-md">
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
                            {/* Radiology Scan Doctor Streamline Icon:
                            https://streamlinehq.com */}
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
                  <a className="btn btn-outline btn-lg mb-8 font-bold shadow-md">
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
                            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                          />
                        </svg>

                        <text className="text-lg">Room</text>
                      </label>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="btn btn-outline btn-lg mb-8 font-bold shadow-md">
                    <Link to="/department">
                      <label className="flex flex-col items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8H9V10H11V12H13V10H15V8H13V6H11V8ZM14 20H16V14H8V20H10V16H14V20Z"></path>
                        </svg>

                        <text className="text-lg">Department</text>
                      </label>
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="btn btn-outline btn-lg mb-8 font-bold shadow-md">
                    <Link to="/roleAssign">
                      <label className="flex flex-col items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path d="M12.6727 1.61162 20.7999 9H17.8267L12 3.70302 6 9.15757V19.0001H11V21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001 11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162ZM14 11H23V18H14V11ZM16 13V16H21V13H16ZM24 21H13V19H24V21Z"></path>
                        </svg>

                        <text className="text-lg">Role Assign</text>
                      </label>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost  text-2xl font-bold">SIGMA HEALTHCARE</a>
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
        <table className="table mt-12 mr-6">
          <Outlet />
          {/* <Department/> */}
          {/* <RegistrationForm/> */}
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
