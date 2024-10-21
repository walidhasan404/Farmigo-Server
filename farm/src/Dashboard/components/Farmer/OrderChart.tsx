import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FileText, TrendingUp } from 'react-feather';

const data = [
  { x: '2023-01-01', y: 3000 },
  { x: '2023-02-01', y: 2500 },
  { x: '2023-03-01', y: 3500 },
  { x: '2023-04-01', y: 3200 },
  { x: '2023-05-01', y: 3800 },
  { x: '2023-06-01', y: 4000 },
  { x: '2023-07-01', y: 3900 },
];

const OrderChart: React.FC<{title: string; color: string; subtitle:string}> = ({title, color, subtitle}) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: [color],
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => 'Orders',
        },
      },
      marker: {
        show: false,
      },
      theme: 'light',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  const series = [{
    name: 'Orders',
    data: data,
  }];

  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-md p-5">
      <div> 
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500 font-medium"> {title}</span>
        <FileText className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-gray-800">{subtitle}</span>
        <div className="flex items-center text-[#22C55E] text-xs font-medium">
          <TrendingUp className="w-3 h-3 mr-1" />
          0.00%
        </div>
      </div>
      </div>
     
      <div className="h-[40px]">
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="area"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default OrderChart;