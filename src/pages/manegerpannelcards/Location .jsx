
// A) Real Map Version (Leaflet Map)

// import React, { useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
// } from "react-leaflet";
// import { FaUser, FaMapMarkerAlt, FaSync } from "react-icons/fa";
// import "leaflet/dist/leaflet.css";

// const employees = [
//   {
//     name: "Rajesh Kumar",
//     dept: "Corporate Security",
//     location: "Tech Park Gate 1",
//     lat: 12.9716,
//     lng: 77.5946,
//     status: "within",
//   },
//   {
//     name: "Priya Sharma",
//     dept: "Residential Security",
//     location: "Sunset Apartments",
//     lat: 12.9352,
//     lng: 77.6245,
//     status: "out",
//   },
//   {
//     name: "Amit Patel",
//     dept: "Corporate Security",
//     location: "Tech Park Gate 2",
//     lat: 12.9480,
//     lng: 77.5760,
//     status: "within",
//   },
//   {
//     name: "Sunita Singh",
//     dept: "Residential Security",
//     location: "Green Valley Complex",
//     lat: 12.9407,
//     lng: 77.6200,
//     status: "out",
//   },
//   {
//     name: "Vikram Reddy",
//     dept: "Field Operations",
//     location: "Business Tower Lobby",
//     lat: 12.9300,
//     lng: 77.6100,
//     status: "within",
//   },
// ];

// const Location = () => {
//   const [selectedEmp, setSelectedEmp] = useState(employees[0]);

//   return (
//     <div className="p-4 space-y-6">
//       {/* PAGE HEADER */}
//       <div>
//         <h1 className="text-2xl font-semibold text-gray-800">Location Tracking</h1>
//         <p className="text-gray-500 -mt-1">Welcome back, Manager</p>
//       </div>

//       {/* LOCATION SYSTEM CARD */}
//       <div className="bg-white border rounded-xl p-4 shadow-sm">
//         <h2 className="flex items-center gap-3 text-lg font-semibold text-gray-700">
//           📍 Location Tracking System
//         </h2>
//         <p className="text-gray-600 mt-1 text-sm">
//           Track security personnel location in real-time. System alerts when staff are
//           within 100 meters of their assigned location.
//         </p>

//         <div className="mt-3 bg-yellow-50 text-yellow-700 p-3 border border-yellow-200 rounded-lg text-sm">
//           ⚠️ Location permission required. Click "Track Location" buttons to enable.
//         </div>
//       </div>

//       {/* SUMMARY ROW */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="bg-green-100 text-green-700 rounded-xl p-4 text-center shadow">
//           <h3 className="text-lg font-semibold">Within Range</h3>
//           <p className="text-3xl font-bold">0</p>
//         </div>

//         <div className="bg-red-100 text-red-700 rounded-xl p-4 text-center shadow">
//           <h3 className="text-lg font-semibold">Out of Range</h3>
//           <p className="text-3xl font-bold">0</p>
//         </div>

//         <div className="bg-blue-100 text-blue-700 rounded-xl p-4 text-center shadow">
//           <h3 className="text-lg font-semibold">Total Guards</h3>
//           <p className="text-3xl font-bold">5</p>
//         </div>
//       </div>

//       {/* MAIN GRID: LEFT MAP + RIGHT EMP CARDS */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* LEFT MAP BLOCK */}
//         <div className="bg-white p-4 rounded-xl border shadow">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-3">
//             <h3 className="text-lg font-semibold text-gray-700">Live Location</h3>
//             <button className="p-2 bg-gray-100 rounded-full shadow">
//               <FaSync className="text-gray-600" />
//             </button>
//           </div>

//           {/* Leaflet Map */}
//           <MapContainer
//             center={[selectedEmp.lat, selectedEmp.lng]}
//             zoom={14}
//             className="rounded-xl"
//             style={{ height: "300px", width: "100%" }}
//           >
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//             <Marker position={[selectedEmp.lat, selectedEmp.lng]}>
//               <Popup>{selectedEmp.name}</Popup>
//             </Marker>
//           </MapContainer>
//         </div>

//         {/* RIGHT EMPLOYEE CARDS */}
//         <div className="space-y-4">
//           {employees.map((emp, i) => (
//             <div
//               key={i}
//               className="bg-white border rounded-xl p-4 shadow cursor-pointer hover:shadow-md transition"
//               onClick={() => setSelectedEmp(emp)}
//             >
//               <div className="flex justify-between items-center">
//                 <div className="flex items-start gap-3">
//                   <FaUser className="text-2xl text-gray-600" />
//                   <div>
//                     <h4 className="font-semibold text-lg text-gray-800">
//                       {emp.name}
//                     </h4>
//                     <p className="text-gray-500">{emp.dept}</p>

//                     <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
//                       <FaMapMarkerAlt className="text-blue-500" />
//                       <span>Assigned Location: {emp.location}</span>
//                     </p>
//                   </div>
//                 </div>

//                 <button className="bg-black text-white py-2 px-4 rounded-lg shadow">
//                   Track Location
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* BOTTOM SECTION (TABLE + GUIDE) */}
//       <div className="bg-white border rounded-xl p-4 shadow-sm">
//         <h3 className="text-lg font-semibold mb-3 text-gray-800">
//           How to Use Location Tracking
//         </h3>

//         <ol className="list-decimal pl-5 space-y-1 text-gray-700 text-sm">
//           <li>Click "Track Location" button next to an employee name.</li>
//           <li>Allow location access when browser prompts.</li>
//           <li>System will show current location and calculate distance.</li>
//           <li>Green badge = Within 100m range.</li>
//           <li>Red badge = Out of range.</li>
//           <li>Click "View on Map" to see exact location.</li>
//           <li>Tracking updates in real-time.</li>
//         </ol>

//         <div className="mt-3 text-yellow-700 bg-yellow-50 p-3 rounded border text-sm">
//           ⚠️ Note: Ensure device GPS and browser permissions are enabled.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;



import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";

const employees = [
  {
    name: "Rajesh Kumar",
    dept: "Corporate Security",
    location: "Tech Park Gate 1",
    coords: [12.9716, 77.5946],
  },
  {
    name: "Priya Sharma",
    dept: "Residential Security",
    location: "Sunset Apartments",
    coords: [12.9350, 77.6240],
  },
  {
    name: "Amit Patel",
    dept: "Corporate Security",
    location: "Tech Park Gate 2",
    coords: [12.9500, 77.5800],
  },
  {
    name: "Sunita Singh",
    dept: "Residential Security",
    location: "Green Valley Complex",
    coords: [12.9400, 77.6200],
  },
  {
    name: "Vikram Reddy",
    dept: "Field Operations",
    location: "Business Tower Lobby",
    coords: [12.9300, 77.6100],
  },
];

const Location = () => {
  const [mapCenter, setMapCenter] = useState([12.9716, 77.5946]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="p-4 space-y-6">
      {/* Info Box */}
      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          📍 Location Tracking System
        </h2>

        <p className="text-gray-600 mt-1 text-sm">
          Track security personnel location in real-time. System alerts when staff are
          within 100 meters of their assigned location.
        </p>

        <div className="mt-3 bg-yellow-50 border border-yellow-300 p-3 rounded-lg text-yellow-700 text-sm">
          ⚠️ Location permission required. Click "Track Location" buttons to enable.
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-green-100 text-green-700 text-center shadow">
          <h3 className="font-semibold">Within Range</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="p-5 rounded-xl bg-red-100 text-red-700 text-center shadow">
          <h3 className="font-semibold">Out of Range</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="p-5 rounded-xl bg-blue-100 text-blue-700 text-center shadow">
          <h3 className="font-semibold">Total Guards</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
      </div>

      {/* Employee List */}
      {employees.map((emp, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl border shadow-sm flex justify-between items-center hover:shadow-md transition"
        >
          <div className="flex items-start gap-3">
            <div className="text-gray-600 bg-gray-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-2xl text-gray-700" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">{emp.name}</h3>
              <p className="text-gray-500">{emp.dept}</p>

              <p className="text-sm text-gray-600 mt-1 flex gap-1">
                <span className="font-semibold text-gray-700">📌 Assigned Location:</span>
                {emp.location}
              </p>

              <p className="text-gray-500 text-sm">{emp.coords[0]}°N, {emp.coords[1]}°E</p>
            </div>
          </div>

          <button
            className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800"
            onClick={() => {
              setMapCenter(emp.coords);
              setSelectedEmployee(emp);
            }}
          >
            View on Map
          </button>
        </div>
      ))}

      {/* ⬇️ Leaflet Real Map Added (A Version Inside B Version) */}
      <div className="bg-white p-4 rounded-xl border shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Live Map View</h2>

        <div className="h-80 w-full rounded-xl overflow-hidden">
          <MapContainer center={mapCenter} zoom={14} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {selectedEmployee && (
              <Marker position={selectedEmployee.coords}>
                <Popup>
                  <b>{selectedEmployee.name}</b>
                  <br />
                  📌 {selectedEmployee.location}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-white p-5 rounded-xl border shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          How to Use Location Tracking
        </h3>

        <ol className="list-decimal pl-5 space-y-1 text-gray-700 text-sm">
          <li>Click “View on Map” button next to an employee name.</li>
          <li>Map will move to the employee’s assigned coordinates.</li>
          <li>Popup shows the exact guard name and location.</li>
          <li>Green = Within 100m, Red = Out of Range.</li>
          <li>Live map updates instantly.</li>
        </ol>

        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-300 rounded-lg text-sm text-yellow-700">
          ⚠️ Note: Ensure device location services & browser permissions are enabled.
        </div>
      </div>
    </div>
  );
};

export default Location;
