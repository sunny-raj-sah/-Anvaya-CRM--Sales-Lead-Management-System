// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// const ClosedLastWeekChart = ({ data = [] }) => {
//   const chartData = {
//     labels: data.map((lead) =>
//       new Date(lead.closedAt).toLocaleDateString()
//     ),

//     datasets: [
//       {
//         label: "Closed Leads",

//         data: data.map(() => 1),

//         borderColor: "#198754",
//         backgroundColor: "#198754",

//         tension: 0.4,

//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,

//     plugins: {
//       legend: {
//         display: false,
//       },
//     },

//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 1,
//         },
//       },
//     },
//   };

//   return (
//     <div className="card shadow-sm h-100">
//       <div className="card-header">
//         <h5 className="mb-0">Closed Last Week</h5>
//       </div>

//       <div className="card-body">
//         <div className="chart-container">
//           <Line data={chartData} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClosedLastWeekChart;
// --------------------------------------------------------------------


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ClosedLastWeekChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((lead) =>
      new Date(lead.closedAt).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Closed Leads",
        data: data.map(() => 1),
        borderColor: "#198754",
        backgroundColor: "#198754",
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="card shadow-sm border-0 h-100 w-100 report-card">
      <div className="card-header bg-white py-3">
        <h2 className="mb-0 fs-6 fw-semibold">
          Closed Last Week
        </h2>
      </div>

      <div className="card-body p-3 p-md-4">
        {data.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center text-muted text-center chart-empty-state">
            No closed leads available.
          </div>
        ) : (
          <div className="line-chart-container">
            <Line data={chartData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClosedLastWeekChart;
