import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [data1, setData] = useState([]);
  const [doctorCount, setDoctorCount] = useState([]);
  const [patientCount, setPatientCount] = useState([]);

  const [logdata, setLogData] = useState({});
  const navigate = useNavigate();

  function getData() {
    fetch("http://localhost:5999/getEmp").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  function getDoctorData() {
    fetch("http://localhost:5999/getEmp").then((result) => {
      result.json().then((resp) => {
        setDoctorCount(resp);
      });
    });
  }

  function getPatientData() {
    fetch(`http://localhost:5999/getPatient`).then((result) => {
      result.json().then((resp) => {
        setPatientCount(resp);
      });
    });
  }

  useEffect(() => {
    getData();
    getDoctorData();
    getPatientData();
  }, []);

  const data = {
    labels: ["Total Employee", "Doctor", "Patient"],
    datasets: [
      {
        label: "Count",
        data: [doctorCount.length, doctorCount.length, patientCount.length],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className="p-0 mr-6 ml-6">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
        <div className=" p-10 bg-info rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-3xl font-semibold mr-2">Doctors</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="0.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path d="M8 3V5H6V9C6 11.2091 7.79086 13 10 13C12.2091 13 14 11.2091 14 9V5H12V3H15C15.5523 3 16 3.44772 16 4V9C16 11.9727 13.8381 14.4405 11.0008 14.9169L11 16.5C11 18.433 12.567 20 14.5 20C15.9973 20 17.275 19.0598 17.7749 17.7375C16.7283 17.27 16 16.2201 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15C22 16.3711 21.0802 17.5274 19.824 17.8854C19.2102 20.252 17.0592 22 14.5 22C11.4624 22 9 19.5376 9 16.5L9.00019 14.9171C6.16238 14.4411 4 11.9731 4 9V4C4 3.44772 4.44772 3 5 3H8Z"></path>
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800">
            {doctorCount.length}
          </p>
        </div>

        <div className="p-10 bg-error rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-3xl font-semibold mr-2">Operations</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="0.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z"></path>
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800">
            3430+
          </p>
        </div>
        <div className=" bg-success p-10 rounded-lg shadow-lg">
          <div className="flex  items-center justify-center mb-2">
            <h3 className="text-3xl font-semibold mr-2">Patients Records</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="0.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C10.0224 20.3135 4.91625 17.5626 2.8685 13L7.56619 13L8.5 11.4437L11.5 16.4437L13.5662 13H17V11H12.4338L11.5 12.5563L8.5 7.55635L6.43381 11L2.21024 10.9999C2.07418 10.3626 2 9.69615 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path>
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800">
            {patientCount.length}
          </p>
        </div>
        <div className=" bg-warning p-10 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-3xl font-semibold mr-2">Appointments</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800"></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="bg-white border-4 border-double  border-accent p-2 rounded shadow mb-2 lg:mb-0">
          <h3 className="text-lg font-bold mb-2">Bar Graph</h3>
          <Bar data={data} />
        </div>
        <div className="bg-white border-4 border-double  border-accent p-2  rounded shadow overflow-x-auto">
          <h3 className="text-lg font-bold mb-2">Employees</h3>
          <table className="min-w-full  bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-center">Employee ID</th>
                <th className="py-2 px-4 border-b text-center">
                  Employee Name
                </th>
                <th className="py-2 px-4 border-b text-center">Email</th>
                <th className="py-2 px-4 border-b text-center">Image</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((currEle, index) => {
                return (
                  <tr>
                    <td className="text-center py-2 px-4 border-b">
                      {currEle.emp_id}
                    </td>
                    <td className="text-center py-2 px-4 border-b">
                      {currEle.emp_name}
                    </td>
                    <td className="text-center py-2 px-4 border-b">
                      {currEle.email}
                    </td>
                    <td className="text-center item-center  py-2 px-4 border-b">
                      <img
                        className=" rounded-full rounded shadow h-8 w-8"
                        src={currEle.img}
                        alt=""
                      />
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
