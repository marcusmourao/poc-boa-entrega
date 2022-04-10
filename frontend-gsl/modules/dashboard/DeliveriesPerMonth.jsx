import React from "react";
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Entregas por mês",
    },
  },
};

const DeliveriesPerMonth = ({ deliveriesPerMonth }) => {
  const data = {
    labels: deliveriesPerMonth.labels,
    datasets: deliveriesPerMonth.datasets,
  };

  return <Bar options={options} data={data} />;
};
export default DeliveriesPerMonth;
