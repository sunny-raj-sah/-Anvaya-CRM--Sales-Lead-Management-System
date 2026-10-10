// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/common/Sidebar";
// import Navbar from "../components/common/Navbar";

// const DashboardLayout = () => {
//   return (
//     <div className="d-flex min-vh-100">

//       {/* Desktop Sidebar */}
//       <div className="d-none d-md-block">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 min-vw-0 bg-light">

//         <Navbar />

//         <main className="container-fluid py-3 py-md-4 pb-5 pb-md-4">
//           <Outlet />
//         </main>

//       </div>

//       {/* Mobile Bottom Navigation */}
//       <div className="d-md-none fixed-bottom bg-dark border-top">
//         <Sidebar mobile />
//       </div>

//     </div>
//   );
// };


// export default DashboardLayout;


// -------------------------------------------------------------------------------------------


import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const DashboardLayout = () => {
  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Desktop sidebar */}
      <aside className="d-none d-md-flex flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main application area */}
      <div className="flex-grow-1 min-w-0 overflow-x-hidden">
        <Navbar />

        <main className="container-fluid px-2 px-sm-3 px-lg-4 py-3 py-md-4 mobile-main-content">
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="d-md-none fixed-bottom bg-dark border-top mobile-bottom-nav">
        <Sidebar mobile />
      </nav>
    </div>
  );
};

export default DashboardLayout;
