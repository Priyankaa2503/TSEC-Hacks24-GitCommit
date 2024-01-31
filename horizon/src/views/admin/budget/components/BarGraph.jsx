import React from 'react';
import Chart from 'react-apexcharts';

const BarGraph = () => {
//   const mode = useSelector((state) => state.config.mode);
  const series = [{
    name: 'Investment',
    data: [23, 44, 55, 57, 56]
  }];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      }
    },
    // theme: {
    //   mode: mode === "light" ? 'light' : 'dark',
    // },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      title: {
        text: 'Months'
      },
      categories: ['Flooring', 'Painting', 'Plumbing', 'Wiring', 'Furniture'],
    },
    yaxis: {
      title: {
        text: '₹ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "₹ " + val + " thousands"
        }
      }
    }
  }

  return (
    <div className='object-contain' id="monthly-investment">
      <Chart options={options} series={series} type="bar" height={380} />
    </div>
  )
}

export default BarGraph;