//  import { useEffect,useState } from "react";

// import PageHeader from "../../components/common/PageHeader";

// import useLead from "../../hooks/useLead";

// const Settings = () => {
//     const [activeSection, setActiveSection] =
//   useState(null);

//   const {
//     state,
//     fetchAgents,
//     getAllLeads,
//     removeLead,
//     removeAgent,
//   } = useLead();

//   useEffect(() => {
//     fetchAgents();
//     getAllLeads();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


//   const handleDeleteLead = (id) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this lead?"
//   );

//   if (!confirmDelete) return;

//   removeLead(id);
// };

// const handleDeleteAgent = (id) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this sales agent?"
//   );

//   if (!confirmDelete) return;

//   removeAgent(id);
// };

//   return (
//     <div className="container py-4">
// {/* <div className="container-fluid py-3 px-2 px-md-4">  */}
//   <PageHeader
//     title="View"
//     subtitle="View CRM Data"
//   />

//   {/* ============================
//       Dashboard Cards
//   ============================ */}

//   {activeSection === null && (
//     <div className="row g-4">

//       <div className="col-md-6">

//         <div
//           className="card shadow-sm h-100"
//           style={{ cursor: "pointer" }}
//           onClick={() =>
//             setActiveSection("agents")
//           }
//         >
//           <div className="card-body text-center py-5">

//             <h2 className="display-5">
//               👥
//             </h2>

//             <h4>Sales Agents</h4>

//             <h2 className="fw-bold text-primary">
//               {state.salesAgents.length}
//             </h2>

//             <p className="text-muted mb-0">
//               Total Agents
//             </p>

//           </div>
//         </div>

//       </div>

//       <div className="col-md-6">

//         <div
//           className="card shadow-sm h-100"
//           style={{ cursor: "pointer" }}
//           onClick={() =>
//             setActiveSection("leads")
//           }
//         >
//           <div className="card-body text-center py-5">

//             <h2 className="display-5">
//               📋
//             </h2>

//             <h4>Sales Leads</h4>

//             <h2 className="fw-bold text-success">
//               {state.leads.length}
//             </h2>

//             <p className="text-muted mb-0">
//               Total Leads
//             </p>

//           </div>
//         </div>

//       </div>

//     </div>
//   )}

//   {/* ============================
//       Agents Section
//   ============================ */}

//   {activeSection === "agents" && (

//     <div className="card shadow-sm">

//       <div className="card-header d-flex justify-content-between align-items-center">

//         <h5 className="mb-0">
//           Sales Agents
//         </h5>

//         <button
//           className="btn btn-outline-secondary btn-sm"
//           onClick={() =>
//             setActiveSection(null)
//           }
//         >
//           ← Back
//         </button>

//       </div>

//       <div className="card-body p-0">

//         <table className="table table-hover mb-0">

//           <thead className="table-light">

//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               {/* <th>Phone</th> */}
//               <th width="120">Action</th>
//             </tr>

//           </thead>

//           <tbody>

//             {state.salesAgents.map((agent) => (

//               <tr key={agent._id}>

//                 <td>{agent.name}</td>

//                 <td>{agent.email}</td>

//                 {/* <td>
//                   {agent.phone || "-"}
//                 </td> */}

//                 <td>

//                   <button
//   className="btn btn-sm btn-outline-danger"
//   onClick={() =>  handleDeleteAgent(agent._id)}
// >
//   Delete
// </button>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>

//   )}

//   {/* ============================
//       Leads Section
//   ============================ */}

//   {activeSection === "leads" && (

//     <div className="card shadow-sm">

//       <div className="card-header d-flex justify-content-between align-items-center">

//         <h5 className="mb-0">
//           Sales Leads
//         </h5>

//         <button
//           className="btn btn-outline-secondary btn-sm"
//           onClick={() =>
//             setActiveSection(null)
//           }
//         >
//           ← Back
//         </button>

//       </div>

//       <div className="card-body p-0">

//         <table className="table table-hover mb-0">

//           <thead className="table-light">

//             <tr>
//               <th>Name</th>
//               <th>Status</th>
//               <th>Priority</th>
//               <th>Agent</th>
//               <th width="120">Action</th>
//             </tr>

//           </thead>

//           <tbody>

//             {state.leads.map((lead) => (

//               <tr key={lead._id}>

//                 <td>{lead.name}</td>

//                 <td>{lead.status}</td>

//                 <td>{lead.priority}</td>

//                 <td>
//                   {lead.salesAgent?.name}
//                 </td>

//                 <td>

//                   <button
//   className="btn btn-sm btn-outline-danger"
//   onClick={() =>  handleDeleteLead(lead._id) }
// >
//   Delete
// </button>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>

//   )}

// </div>
//   );
// };

// export default Settings;
// ------------------------------------------------------------

import { useEffect, useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import useLead from "../../hooks/useLead";

const Settings = () => {
  const [activeSection, setActiveSection] = useState(null);

  const {
    state,
    fetchAgents,
    getAllLeads,
    removeLead,
    removeAgent,
  } = useLead();

  useEffect(() => {
    fetchAgents();
    getAllLeads();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteLead = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    removeLead(id);
  };

  const handleDeleteAgent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this sales agent?"
    );

    if (!confirmDelete) return;

    removeAgent(id);
  };

  return (
    <div className="container-fluid px-2 px-md-4 py-3">
      <PageHeader title="Settings" subtitle="Manage Agents & Leads" />

      {/* Dashboard Cards */}
      {activeSection === null && (
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div
              className="card shadow-sm h-100"
              role="button"
              onClick={() => setActiveSection("agents")}
            >
              <div className="card-body text-center py-4 py-md-5">
                <h2 className="display-5">👥</h2>
                <h4>Sales Agents</h4>

                <h2 className="fw-bold text-primary">
                  {state.salesAgents.length}
                </h2>

                <p className="text-muted mb-0">Total Agents</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="card shadow-sm h-100"
              role="button"
              onClick={() => setActiveSection("leads")}
            >
              <div className="card-body text-center py-4 py-md-5">
                <h2 className="display-5">📋</h2>
                <h4>Sales Leads</h4>

                <h2 className="fw-bold text-success">
                  {state.leads.length}
                </h2>

                <p className="text-muted mb-0">Total Leads</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sales Agents */}
      {activeSection === "agents" && (
        <div className="card shadow-sm">
          <div className="card-header bg-white d-flex flex-wrap justify-content-between align-items-center gap-2 px-3 py-3">
            <h5 className="mb-0">Sales Agents</h5>

            <button
              type="button"
              className="btn btn-outline-secondary btn-sm flex-shrink-0"
              onClick={() => setActiveSection(null)}
            >
              &larr; Back
            </button>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="px-3 text-nowrap">Name</th>
                    <th className="text-nowrap">Email</th>
                    <th className="text-center text-nowrap px-3">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {state.salesAgents.length > 0 ? (
                    state.salesAgents.map((agent) => (
                      <tr key={agent._id}>
                        <td className="px-3 text-nowrap">
                          {agent.name}
                        </td>

                        <td>{agent.email}</td>

                        <td className="text-center px-3">
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm text-nowrap px-3"
                            onClick={() =>
                              handleDeleteAgent(agent._id)
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="text-center text-muted py-4"
                      >
                        No sales agents found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sales Leads */}
      {activeSection === "leads" && (
        <div className="card shadow-sm">
          <div className="card-header bg-white d-flex flex-wrap justify-content-between align-items-center gap-2 px-3 py-3">
            <h5 className="mb-0">Sales Leads</h5>

            <button
              type="button"
              className="btn btn-outline-secondary btn-sm flex-shrink-0"
              onClick={() => setActiveSection(null)}
            >
              &larr; Back
            </button>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="px-3 text-nowrap">Name</th>
                    <th className="text-nowrap">Status</th>
                    <th className="text-nowrap">Priority</th>
                    <th className="text-nowrap">Agent</th>
                    <th className="text-center text-nowrap px-3">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {state.leads.length > 0 ? (
                    state.leads.map((lead) => (
                      <tr key={lead._id}>
                        <td className="px-3 text-nowrap">
                          {lead.name}
                        </td>

                        <td className="text-nowrap">
                          {lead.status}
                        </td>

                        <td className="text-nowrap">
                          {lead.priority}
                        </td>

                        <td className="text-nowrap">
                          {lead.salesAgent?.name || "-"}
                        </td>

                        <td className="text-center px-3">
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm text-nowrap px-3"
                            onClick={() =>
                              handleDeleteLead(lead._id)
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center text-muted py-4"
                      >
                        No sales leads found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
