import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [data1, setData] = useState([]);

  function getData() {
    fetch("http://localhost:5999/getEmp").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="p-2 mr-6 ml-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-lg font-bold mr-2">Doctors</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="0.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M8 3V5H6V9C6 11.2091 7.79086 13 10 13C12.2091 13 14 11.2091 14 9V5H12V3H15C15.5523 3 16 3.44772 16 4V9C16 11.9727 13.8381 14.4405 11.0008 14.9169L11 16.5C11 18.433 12.567 20 14.5 20C15.9973 20 17.275 19.0598 17.7749 17.7375C16.7283 17.27 16 16.2201 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15C22 16.3711 21.0802 17.5274 19.824 17.8854C19.2102 20.252 17.0592 22 14.5 22C11.4624 22 9 19.5376 9 16.5L9.00019 14.9171C6.16238 14.4411 4 11.9731 4 9V4C4 3.44772 4.44772 3 5 3H8Z"></path>
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800">
            2430
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-lg font-bold mr-2">Operations</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="0.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z"></path>
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800">
            3430+
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-lg font-bold mr-2">Patients Records</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="0.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C10.0224 20.3135 4.91625 17.5626 2.8685 13L7.56619 13L8.5 11.4437L11.5 16.4437L13.5662 13H17V11H12.4338L11.5 12.5563L8.5 7.55635L6.43381 11L2.21024 10.9999C2.07418 10.3626 2 9.69615 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path>
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800">
            7540
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-lg font-bold mr-2">Revenue</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="0.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M22.0049 6.99979H23.0049V16.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V6.99979ZM20.0049 16.9998H14.0049C11.2435 16.9998 9.00488 14.7612 9.00488 11.9998C9.00488 9.23836 11.2435 6.99979 14.0049 6.99979H20.0049V4.99979H4.00488V18.9998H20.0049V16.9998ZM21.0049 14.9998V8.99979H14.0049C12.348 8.99979 11.0049 10.3429 11.0049 11.9998C11.0049 13.6566 12.348 14.9998 14.0049 14.9998H21.0049ZM14.0049 10.9998H17.0049V12.9998H14.0049V10.9998Z"></path>
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800">
            1,05,454
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded shadow mb-2 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Bar Graph</h3>
          <Bar data={data} />
        </div>
        <div className="bg-white p-2 rounded shadow overflow-x-auto">
          <h3 className="text-lg font-bold mb-2">Table</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-center">Employee ID</th>
                <th className="py-2 px-4 border-b text-center">Employee Name</th>
                <th className="py-2 px-4 border-b text-center">Email</th>
                <th className="py-2 px-4 border-b text-center">Image</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((currEle, index) => {
                return (
                  <tr>
                    <td className="text-center py-2 px-4 border-b">{currEle.emp_id}</td>
                    <td className="text-center py-2 px-4 border-b">{currEle.emp_name}</td>
                    <td className="text-center py-2 px-4 border-b">{currEle.email}</td>
                    <td className="text-center item-center  py-2 px-4 border-b">
                    <img className=" rounded-full rounded shadow h-8 w-8" src={currEle.img} alt="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
