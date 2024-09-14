import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import "./SalesChart.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SalesChart() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = [2020, 2021, 2022, 2023, 2024];

  const dailySalesData = {
    "2020": {
      January: [500, 300, 400, 350, 700, 600, 500, 400, 800, 450, 600, 550, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 900, 950, 1150, 1050, 1200, 1350, 1250, 1450, 1550, 1650, 1750],
      February: [400, 300, 500, 450, 600, 500, 350, 400, 550, 600, 500, 650, 450, 700, 550, 850, 750, 700, 650, 500, 750, 850, 950, 1000, 1050, 1100, 1150, 1200],
      March: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      April: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      May: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      June: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      July: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      August: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      September: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      October: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      November: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      December: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
    },
    "2021": {
      January: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      February: Array(28).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      March: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      April: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      May: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      June: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      July: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      August: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      September: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      October: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      November: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      December: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
    },
    "2022": {
      January: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      February: Array(28).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      March: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      April: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      May: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      June: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      July: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      August: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      September: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      October: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      November: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      December: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
    },
    "2023": {
      January: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      February: Array(28).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      March: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      April: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      May: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      June: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      July: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      August: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      September: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      October: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      November: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      December: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
    },
    "2024": {
      January: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      February: Array(28).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      March: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      April: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      May: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      June: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      July: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      August: Array(31).fill().map(() => Math.floor(Math.random() * 1000) + 400),
      September: Array(30).fill().map(() => Math.floor(Math.random() * 1000) + 400),
    }
  };

  const [selectedMonth, setSelectedMonth] = useState("September");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  let navigate = useNavigate();

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    checkDataAvailability(selectedYear, month);
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    checkDataAvailability(year, selectedMonth);
  };

  const checkDataAvailability = (year, month) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-indexed, so October is 9

    if (parseInt(year) === currentYear && months.indexOf(month) > currentMonth) {
      setIsDataAvailable(false);
    } else {
      setIsDataAvailable(true);
    }
  };

  const data = {
    labels: Array.from({ length: dailySalesData[selectedYear][selectedMonth]?.length || 0 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: `Daily Sales in ${selectedMonth} ${selectedYear} (₹)`,
        data: dailySalesData[selectedYear][selectedMonth],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Sales Chart for ${selectedMonth} ${selectedYear}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "₹" + value; // Use ₹ for rupee symbol
          },
        },
      },
    },
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear admin session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="sales-chart-container" style={{ width: "60%", margin: "auto", padding: "40px" }}>
      <h2 className="text-center">Sales Chart</h2>

      {/* Year and Month selection dropdown */}
      <div className="mb-4 text-center">
        <label htmlFor="yearSelect" className="form-label">Select Year: </label>
        <select id="yearSelect" className="form-select w-auto d-inline-block" value={selectedYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <label htmlFor="monthSelect" className="form-label ms-3">Select Month: </label>
        <select id="monthSelect" className="form-select w-auto d-inline-block" value={selectedMonth} onChange={handleMonthChange}>
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      {isDataAvailable ? (
        <Bar data={data} options={options} />
      ) : (
        <div className="text-center">
          <h3>Data for {selectedMonth} {selectedYear} is not available yet.</h3>
        </div>
      )}

      {/* Logout Button */}
      <button
        className="btn btn-danger position-fixed bottom-0 end-0 m-3"
        style={{ zIndex: 1000 }} // Ensure the button is on top
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
