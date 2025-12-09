

// import React, { useState } from "react";

// export default function Settings() {
//   const [activeTab, setActiveTab] = useState("company"); // default tab

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 md:p-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
//           Settings
//         </h1>
//         <p>Manage company-wide settings and configurations</p>

//         <div className="bg-white shadow-md rounded-2xl overflow-hidden">
//           {/* Header Tabs */}
//           <div className="border-b px-6 md:px-8 py-4 flex items-center justify-between">
//             <nav className="flex space-x-4 text-sm md:text-base">
//               {[
//                 { key: "company", label: "Company Info" },
//                 { key: "branding", label: "Branding" },
//                 { key: "notifications", label: "Notifications" },
//                 { key: "security", label: "Security" },
//                 { key: "integrations", label: "Integrations" },
//               ].map((tab) => (
//                 <button
//                   key={tab.key}
//                   className={`py-2 px-3 rounded-md font-medium ${activeTab === tab.key
//                       ? "border-b-2 border-indigo-600 text-indigo-600"
//                       : "text-slate-500 hover:text-slate-700"
//                     }`}
//                   onClick={() => setActiveTab(tab.key)}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </nav>

//             <div className="text-xs text-gray-400 hidden md:block">
//               Manage company-wide settings and configurations
//             </div>
//           </div>

//           {/* CONTENT AREA */}
//           <div className="p-6 md:p-8">
//             {activeTab === "company" && <CompanyInfo />}
//             {activeTab === "branding" && <Branding />}
//             {activeTab === "notifications" && <Notifications />}
//             {activeTab === "security" && <Security />}
//             {activeTab === "integrations" && <Integrations />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* -------------------------------------------
//    COMPANY INFO TAB
// -------------------------------------------- */
// function CompanyInfo() {
//   return (
//     <>
//       <div className="flex items-start space-x-6">
//         <div className="flex-none w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
//           <svg xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//               d="M3 7v4a1 1 0 001 1h3m10-6h3a1 1 0 011 1v4M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         </div>
//         <div>
//           <h2 className="text-lg font-semibold text-slate-800">
//             Company Information
//           </h2>
//           <p className="text-sm text-slate-500 mt-1">
//             Basic information about your organization
//           </p>
//         </div>
//       </div>

//       <form className="mt-6 space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <FormField label="Company Name *" defaultValue="Rama & Rama" />
//           <FormField label="Registration Number" defaultValue="RR-2024-001" />

//           <FormField label="Tax ID / GST Number" defaultValue="GST123456789" />
//           <FormField label="Phone Number *" defaultValue="+91-22-1234-5678" />

//           <FormField label="Email Address *" defaultValue="contact@ramarama.com" />
//           <FormField label="Website" defaultValue="www.ramarama.com" />

//           <div className="md:col-span-2">
//             <label className="block text-sm text-slate-600 mb-2">Street Address *</label>
//             <input
//               className="w-full rounded-md bg-gray-100 border border-transparent px-4 py-3 text-sm text-slate-800"
//               defaultValue="123 Security Boulevard, Business District"
//             />
//           </div>

//           <FormField label="City *" defaultValue="Mumbai" />
//           <FormField label="State / Province *" defaultValue="Maharashtra" />

//           <FormField label="ZIP / Postal Code *" defaultValue="400001" />
//         </div>

//         <div>
//           <label className="block text-sm text-slate-600 mb-2">Company Description</label>
//           <textarea
//             defaultValue="Leading provider of corporate and residential security services"
//             className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-slate-800"
//             rows={4}
//           />
//         </div>

//         <div className="flex justify-end">
//           <button
//             type="button"
//             className="inline-flex items-center gap-2 bg-indigo-900 text-white px-4 py-3 rounded-lg shadow hover:opacity-95"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4" fill="none" viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                 d="M5 13l4 4L19 7" />
//             </svg>
//             Save Company Settings
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

// /* -------------------------------------------
//    OTHER TABS PLACEHOLDERS
// -------------------------------------------- */

// function Branding() {
//   return (
//     <div className="text-slate-700">
//       <h2 className="text-xl font-semibold mb-4">Branding</h2>
//       <p className="text-gray-500 mb-4">
//         Upload your company logo, update brand colors, and branding preferences.
//       </p>

//       <div className="border rounded-lg p-6 bg-gray-50">
//         <p className="text-sm text-gray-600">
//           (Add your branding form here… logo upload, color pickers, etc.)
//         </p>
//       </div>
//     </div>
//   );
// }

// function Notifications() {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Notifications</h2>
//       <p className="text-gray-500 mb-4">
//         Configure system alerts, app notifications, and email settings.
//       </p>

//       <div className="bg-gray-50 border rounded-lg p-6">
//         <p className="text-sm text-gray-600">
//           (Add notification settings UI here… toggles, preferences.)
//         </p>
//       </div>
//     </div>
//   );
// }

// function Security() {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
//       <p className="text-gray-500 mb-4">
//         Configure password policies, 2FA, and access restrictions.
//       </p>

//       <div className="bg-gray-50 border rounded-lg p-6">
//         <p className="text-sm text-gray-600">
//           (Add security settings UI here… password rules, 2FA setup.)
//         </p>
//       </div>
//     </div>
//   );
// }

// function Integrations() {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Integrations</h2>
//       <p className="text-gray-500 mb-4">
//         Connect third-party apps, APIs, and data systems.
//       </p>

//       <div className="bg-gray-50 border rounded-lg p-6">
//         <p className="text-sm text-gray-600">
//           (Add integrations UI here… API keys, webhook URLs.)
//         </p>
//       </div>
//     </div>
//   );
// }

// /* -------------------------------------------
//    REUSABLE FORM FIELD
// -------------------------------------------- */

// function FormField({ label, defaultValue }) {
//   return (
//     <div>
//       <label className="block text-sm text-slate-600 mb-2">{label}</label>
//       <input
//         defaultValue={defaultValue}
//         className="w-full rounded-md bg-gray-100 border border-transparent px-4 py-3 text-sm text-slate-800"
//       />
//     </div>
//   );
// }



import React, { useState } from "react";
import CompanyInfo from "./tabs/CompanyInfo";
import Branding from "./tabs/Branding";
import Notifications from "./tabs/Notifications";
import Security from "./tabs/Security";
import Integrations from "./tabs/Integrations";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("company");

  const tabs = [
    { key: "company", label: "Company Info" },
    { key: "branding", label: "Branding" },
    { key: "notifications", label: "Notifications" },
    { key: "security", label: "Security" },
    { key: "integrations", label: "Integrations" },
  ];

  return (
    <>
      {/* Injecting Elastic Bounce Animation Here */}
      <style>{`
        @keyframes elasticBounce {
          0% { transform: scaleX(0); }
          60% { transform: scaleX(1.15); }
          80% { transform: scaleX(0.95); }
          100% { transform: scaleX(1); }
        }
        .animate-elastic {
          animation: elasticBounce 0.35s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
            Settings
            <p className="text-xs sm:text-sm text-gray-400 mt-2 hidden sm:block">
              Manage company-wide settings and configurations
            </p>
          </h1>

          <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-gray-200">

            {/* Tabs Section */}
            <div className="border-b px-4 sm:px-8 py-4">
              <div className="flex flex-wrap gap-3 sm:gap-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative pb-2 text-sm sm:text-base font-medium transition-all duration-300
                      ${activeTab === tab.key
                        ? "text-indigo-600"
                        : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab.label}

                    {/* Elastic Bounce Underline */}
                    {activeTab === tab.key && (
                      <span
                        className="absolute left-0 bottom-0 w-full h-[3px] bg-indigo-600 rounded-full animate-elastic origin-left"
                      ></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-8">
              {activeTab === "company" && <CompanyInfo />}
              {activeTab === "branding" && <Branding />}
              {activeTab === "notifications" && <Notifications />}
              {activeTab === "security" && <Security />}
              {activeTab === "integrations" && <Integrations />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
