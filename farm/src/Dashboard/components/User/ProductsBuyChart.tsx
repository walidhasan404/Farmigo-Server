import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { BaggageClaim } from 'lucide-react';

interface IncomeWidgetProps {
  totalIncome: number;
  percentageChange: number;
  chartData: number[];
  title: string;
}

const ProductsBuyChart: React.FC<IncomeWidgetProps> = ({totalIncome, percentageChange, chartData, title}) => {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      min: 0,
      labels: {
        show: false
      }
    },
    colors: ['#FF6B00'],
    tooltip: {
      enabled: false
    }
  };

  const series = [{
    name: 'Income',
    data: chartData
  }];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-orange-500 rounded-full p-3 mr-4">
          <BaggageClaim/>
        </div>
        <div>
          <p className="text-gray-500 text-md">{title}</p>
          <p className="text-2xl font-bold">${totalIncome.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center text-sm text-red-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span>{Math.abs(percentageChange)}%</span>
      </div>
      <div className="h-16 w-full">
        <ReactApexChart options={options} series={series} type="area" height="100%" width="100%" />
      </div>
    </div>
  );
};

export default ProductsBuyChart;