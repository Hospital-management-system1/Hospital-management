import React, { useEffect, useState } from "react";

const Patient = () => {
  const [open,setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [emgc_contact, setemgc_contact] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [symtoms, setSymtoms] = useState("");
  const [data, setData] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  function getData() {
    fetch("http://localhost:5999/getPatient").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const updatePatient = (patient_id) => {
    const data = { emgc_contact, address };
    fetch(`http://localhost:5999/updatePatient/${patient_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error("Error Editing data:", error);
      });
  };

  function savePatient(){
    let data = {name, age, contact, emgc_contact, address, dob, gender, symtoms}
    fetch("http://localhost:5999/postPatient",{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    }).then((result) =>{
      // console.warn("result", result)
      result.json().then((resp)=>{
        console.warn("resp",resp)
        getData();
      })
    })
  }
// DELETE PATIENT
  function deletePatient(patient_id){
    fetch(`http://localhost:5999/deletePatient/${patient_id}`,{
      method:"DELETE",
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
        getData();
      })
    })
  }

  return (
    <div className="text-center overflow-x-auto">
      <>
        <button          
          className="text-center btn btn-sm mt-6 mb-8 ml-7 py-2 px-4"
          onClick={handleOpen}
        >
          ADD
        </button>

        {open && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-60"></div>
            <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-lg max-h-full overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Add New Patient</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="age"
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emgc_contact">Emergency Contact</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="emgc_contact"
                  type="text"
                  value={emgc_contact}
                  onChange={(e) => setemgc_contact(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dob"
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symtoms">Symptoms</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="symtoms"
                  type="text"
                  value={symtoms}
                  onChange={(e) => setSymtoms(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={()=>{
                    savePatient()
                    handleClose()
                  }}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </form>
            </div>
          </div>

        )}

      </>
      <div className="overflow-x-auto">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Patient Id</th>
              <th className="text-center">Name</th>
              <th className="text-center">Age</th>
              <th className="text-center">Contact</th>
              <th className="text-center">Emergency Contact</th>
              <th className="text-center">Address</th>
              <th className="text-center">DoB</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Sypmtoms</th>
              <th className="text-center" >Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((patient, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{patient.patient_id}</td>
                  <td className="text-center">{patient.name}</td>
                  <td className="text-center">{patient.age}</td>
                  <td className="text-center">{patient.contact}</td>
                  <td className="text-center">{patient.emgc_contact}</td>
                  <td className="text-center">{patient.address}</td>
                  <td className="text-center">{patient.dob.toString().slice(0,10)}</td>
                  <td className="text-center">{patient.gender}</td>
                  <td className="text-center">{patient.symtoms}</td>
                  <td className="text-center">
                    <div>
                    <button
                        className="btn btn-sm mr-2"
                        onClick={() => deletePatient(patient.patient_id) }
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${patient.patient_id}`)
                            .showModal()
                        }
                      >
                        Edit
                      </button>
                      <dialog
                        id={`my_modal_${patient.patient_id}`}
                        className="modal"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Edit Patient Detail
                          </h3>
                          <form
                            onSubmit={() => updatePatient(patient.patient_id)}
                          >
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Patient
                              <input
                                type="text"
                                className="grow"
                                placeholder={`${patient.patient_id}`}
                                disabled
                              />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Emegency Contact
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Emergency Contact"
                                onChange={(e) => {
                                  setemgc_contact(e.target.value);
                                }}
                              />
                            </label>

                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Address
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Address"
                                onChange={(e) => {
                                  setAddress(e.target.value);
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patient;
