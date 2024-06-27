"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function DoctorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 base-200 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    w-64  text-white transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex base-200   justify-between items-center">
          <h2 className="text-xl text-neutral font-semibold">Menu</h2>
          <button
            className="text-white focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-5 ">
          <a href="#" className="block text-neutral px-4 py-2 text-gray-300 hover:bg-base-300">Dashboard</a>
          <a href="#" className="block px-4 text-neutral py-2 text-gray-300 hover:bg-base-300">Appointments</a>
          <a href="#" className="block text-neutral px-4 py-2 text-gray-300 hover:bg-base-300">Patients</a>
          <a href="#" className="block text-neutral px-4 py-2 text-gray-300 hover:bg-base-300">Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex-1  flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Navbar */}
        <header className="flex base-200 rounded-b-lg  items-center justify-between text-neutral font-semibold p-6 text-white">
          {!sidebarOpen && (
            <button
              className="focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}
          <h1 className="text-xl ">Doctor Dashboard</h1>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome, Dr. Smith</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>
              <p className="text-gray-600">You have 5 appointments today.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">New Patients</h3>
              <p className="text-gray-600">You have 3 new patients this week.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Messages</h3>
              <p className="text-gray-600">You have 10 unread messages.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Patient Follow-ups</h3>
              <p className="text-gray-600">You have 2 follow-ups scheduled for today.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>
              <p className="text-gray-600">You have 5 appointments today.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">New Patients</h3>
              <p className="text-gray-600">You have 3 new patients this week.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}



