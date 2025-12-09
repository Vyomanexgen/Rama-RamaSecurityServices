// import React from "react";
// export default function Managers() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-2">Managers</h2>
//       <p className="text-gray-500 mb-4">Manage department managers and assignments.</p>
//       <div className="bg-white rounded-lg p-6 border shadow-sm">Managers UI placeholder.</div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaUserCog, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function Managers() {
  const [managers] = useState([
    {
      id: 1,
      name: "Suresh Menon",
      email: "suresh@ramarama.com",
      dept: "Corporate Security",
      employees: 12,
    },
    {
      id: 2,
      name: "Lakshmi Iyer",
      email: "lakshmi@ramarama.com",
      dept: "Residential Security",
      employees: 8,
    },
    {
      id: 3,
      name: "Arun Kumar",
      email: "arun@ramarama.com",
      dept: "Operations",
      employees: 6,
    },
  ]);

  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen w-full">
      {/* Search + Add Manager */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search managers by name, email, or department..."
          className="w-full sm:w-2/3 px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition">
          <FaPlus /> Add Manager
        </button>
      </div>

      {/* Manager Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {managers.map((manager) => (
          <div
            key={manager.id}
            className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition"
          >
            {/* Icon and Buttons */}
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                <FaUserCog size={28} className="text-purple-600" />
              </div>

              <div className="flex gap-2">
                <button className="bg-white border px-4 py-1.5 rounded-lg hover:bg-gray-100 flex items-center gap-1 text-sm">
                  <FaEdit size={14} className="text-blue-600" />
                  Edit
                </button>
                <button className="bg-red-600 text-white px-4 py-1.5 rounded-lg hover:bg-red-700 flex items-center gap-1 text-sm">
                  <FaTrash size={14} />
                  Delete
                </button>
              </div>
            </div>

            {/* Manager Info */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {manager.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{manager.email}</p>
              <p className="text-gray-700 mt-3">{manager.dept}</p>
            </div>

            {/* Employees Counting Link */}
            <div className="mt-6 border-t pt-3">
              <p className="text-sm text-gray-600">
                Managing{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {manager.employees} employees
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
