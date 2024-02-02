import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const PieChart = ({ progress }) => {
  // const mode = useSelector((state) => state.config.mode);
  // Calculate total expenses for each category
  const categories = [
    "Flooring",
    "Painting",
    "Plumbing",
    "Wiring",
    "Furniture",
  ];

  //   const categoryProgress = categories.map((category) =>
  //     task[category.toLowerCase()].reduce(
  //       (acc, expense) => acc + parseFloat(expense.amount),
  //       0
  //     )
  //   );

  //   const totalExpenses = categoryExpenses.reduce(
  //     (acc, expense) => acc + expense,
  //     0
  //   );

  // Calculate percentage of total expenses for each category
  const series = progress.map((expense) => expense.progress);
  console.log(progress);

  const options = {
    chart: {
      type: "pie",
    },
    labels: progress.map((expense) => expense.taskname),
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        size: 100,
        donut: {
          size: "80%",
        },
      },
      stroke: {
        width: 0,
      },
    },
    colors: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
    annotations: {
      position: "front",
      points: [
        {
          x: 50,
          y: 50,
          marker: {
            size: 0,
          },
          label: {
            text: "Center Text",
            offsetY: 0,
            style: {
              fontSize: "18px",
              color: "white",
            },
          },
        },
      ],
    },
  };

  // useEffect(() => {
  //   if(mode === "dark") {
  //     setOptions((options) => ({...options, theme: { mode: 'dark' }}))
  //   } else if(mode === "light") {
  //     setOptions((options) => ({...options, theme: { mode: 'light' }}))
  //   }
  // }, [mode, setOptions]);
  return (
    <div className="object-contain flex justify-center" id="equity">
      <Chart
        options={options}
        series={series}
        type="pie"
        height={400}
        width={400}
      />
    </div>
  );
};

export default PieChart;
