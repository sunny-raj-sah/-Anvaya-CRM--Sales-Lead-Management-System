//  import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend
// );

// const PipelineChart = ({ data = [] }) => {
//   const chartData = {
//     labels: data.map((item) => item.status),

//     datasets: [
//       {
//         data: data.map((item) => item.count),

//         backgroundColor: [
//           "#0d6efd",
//           "#198754",
//           "#ffc107",
//           "#dc3545",
//           "#6f42c1",
//         ],

//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,

//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//     },
//   };

//   return (
//     <div className="card shadow-sm h-100">
//       <div className="card-header">
//         <h5 className="mb-0">Pipeline by Status</h5>
//       </div>

//       <div className="card-body">
//         <div className="chart-container">
//           <Doughnut data={chartData} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PipelineChart;
// ----------------------------------------------------------------------


import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PipelineChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((item) => item.status),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
        ],
        borderWidth: 2,
        hoverOffset: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 12,
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="card shadow-sm border-0 h-100 w-100 report-card">
      <div className="card-header bg-white py-3">
        <h2 className="mb-0 fs-6 fw-semibold">
          Pipeline by Status
        </h2>
      </div>

      <div className="card-body p-3 p-md-4">
        {data.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center text-muted text-center chart-empty-state">
            No pipeline data available.
          </div>
        ) : (
          <div className="pipeline-chart-container">
            <Doughnut data={chartData} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PipelineChart;
