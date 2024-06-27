import React, { useState } from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Drawer from "./Dashboard/Components/Drawer"
import Navbar from "./Components/Navbar";
import Employee from "./Components/Employee/Employee";
import Patients from "./Components/Patients/Patients";
import Role from "./Components/Role/Role";
import Room from "./Components/Room/Room";
import Dashboard from "./Components/Dashboard/Dashboard";
import EmpDetail from "./Components/EmpDetail/EmpDetail";
import Department from "./Components/Department/Department";
import RegistrationForm from "./Components/LoginRegistration/Registration";
import Login from "./Components/LoginRegistration/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleAssign from "./Components/RoleAssign/RoleAssign";




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {index: true, element: <Dashboard/>},
        {path: "/dashboard",element: <Dashboard/>},
        {path: "/employee",element: <Employee/>},
        {path: "/empDetail",element: <EmpDetail/>},
        {path: "/patient", element: <Patients/>},
        {path: "/role", element: <Role/>},
        {path: "/room", element: <Room/>},
        {path:"/department", element: <Department/>},
        {path:"/roleAssign", element: <RoleAssign/>},
      ],
    },
  ]);
  

  return (
    <div> 
      {/* <Drawer/>      */}
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
      

      {/* jwt implementation */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<RegistrationForm/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter> */}

    </div>
  );
};

export default App;
