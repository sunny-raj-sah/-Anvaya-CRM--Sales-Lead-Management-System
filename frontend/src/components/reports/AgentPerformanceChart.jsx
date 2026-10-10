//  import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AgentPerformanceChart = ({ data = [] }) => {
//   const chartData = {
//     labels: data.map((agent) => agent.name),

//     datasets: [
//       {
//         label: "Closed Leads",
//         data: data.map((agent) => agent.totalClosed),
//         backgroundColor: "#0d6efd",
//         borderRadius: 8,
//         borderSkipped: false,
//         barThickness: "flex",
//         maxBarThickness: 35,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,

//     indexAxis: "y",

//     plugins: {
//       legend: {
//         display: false,
//       },

//       title: {
//         display: false,
//       },

//       tooltip: {
//         responsive: true,
//       },
//     },

//     scales: {
//       x: {
//         beginAtZero: true,

//         ticks: {
//           stepSize: 1,
//         },

//         grid: {
//           drawBorder: false,
//         },
//       },

//       y: {
//         grid: {
//           display: false,
//           drawBorder: false,
//         },

//         ticks: {
//           autoSkip: false,
//         },
//       },
//     },
//   };

//   // Dynamically increase chart height when there are more agents
//   const chartHeight = Math.max(250, data.length * 55);

//   return (
//     <div className="card shadow-sm h-100">

//       <div className="card-header py-3">
//         <h5 className="mb-0 fs-6 fs-md-5">
//           Closed Leads by Agent
//         </h5>
//       </div>

//       <div className="card-body p-3 p-md-4">

//         {data.length === 0 ? (
//           <div className="d-flex justify-content-center align-items-center text-muted py-5">
//             No agent performance data available.
//           </div>
//         ) : (
//           <div
//             style={{
//               width: "100%",
//               height: `${chartHeight}px`,
//               maxWidth: "100%",
//             }}
//           >
//             <Bar
//               data={chartData}
//               options={options}
//             />
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default AgentPerformanceChart;

// --------------------------------------------------------------

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgentPerformanceChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((agent) => agent.name),
    datasets: [
      {
        label: "Closed Leads",
        data: data.map((agent) => agent.totalClosed),
        backgroundColor: "#0d6efd",
        borderRadius: 6,
        borderSkipped: false,
        maxBarThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
        grid: {
          drawTicks: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          font: {
            size: 11,
          },
        },
      },
    },
  };

  const chartHeight = Math.max(220, data.length * 42);

  return (
    <div className="card shadow-sm border-0 h-100 w-100 report-card">
      <div className="card-header bg-white py-3">
        <h2 className="mb-0 fs-6 fw-semibold">
          Closed Leads by Agent
        </h2>
      </div>

      <div className="card-body p-3 p-md-4">
        {data.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center text-muted text-center chart-empty-state">
            No agent performance data available.
          </div>
        ) : (
          <div
            className="agent-chart-container"
            style={{ height: `${chartHeight}px` }}
          >
            <Bar data={chartData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentPerformanceChart;
