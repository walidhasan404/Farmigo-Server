import { ArrowBigUpIcon, DollarSignIcon } from "lucide-react";
import { useEffect } from "react";


const ShowChartCard: React.FC<{title: string}> = ({title}) => {
    useEffect(() => {
        const options = {
            chart: {
                type: 'area',
                height: 50,
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                opacity: 0.3
            },
            series: [{
                data: [8, 15, 18, 15, 20, 15, 25,]
            }],
            colors: ['#22c55e'],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: () => ''
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }, []);

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md justify-between">
            <div className=" flex justify-between w-full">
                <div className="flex">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                        <DollarSignIcon/>
                    </div>
                    <div className="ml-2">
                        <div className="text-gray-500">{title}</div>
                        <div className="text-2xl font-bold">34,945</div>
                    </div>
                   
                </div>
                <div className="ml-auto text-right">
                        <div className="text-green-500 flex items-center">
                            <ArrowBigUpIcon />
                            <span className="ml-1">1.56%</span>
                        </div>

                    </div>
            </div>


            <div className="mt-2" id="chart"></div>
        </div>
    );
};

export default ShowChartCard;