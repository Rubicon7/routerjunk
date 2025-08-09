import {
    Chart as ChartJS, ArcElement,
    Tooltip as ChartTooltip,
    Legend as ChartLegend,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  ChartTooltip,
  ChartLegend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler
);

interface leafNodeData{
    type: string;
    name: string;
    flavortext: string;
    value_count: number;
    value_max: number;
    graph: number[];

}



export default function ModbusLeaf({ data }: { data: leafNodeData }) {
    
    const donutData = {
        labels: [],
        datasets: [{
            data: [
                data.value_count, data.value_max
            ],
            backgroundColor: [
                "#36FFBA",
                "#000000"
            ],
            borderWidth: 0,
            cutout: "75%",
            
        }]
    }

    const doughnutOptions: any = {
        
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        elements: {
            arc: { borderWidth: 2 },
        },
    };

      // Line/points data
  const lineData = {
    // simple labels so chart draws points in order — we'll hide axes
    labels: data.graph.map((_, i) => String(i + 1)),
    datasets: [
      {
        label: "series",
        data: data.graph,
        borderWidth: 2,
        tension: 0.25,
        pointRadius: 5,
        pointHoverRadius: 7,
        showLine: true,
        fill: false,
        // subtle line color, points match
        borderColor: "rgba(84,61,145,0.95)",
        backgroundColor: "rgba(84,61,145,0.95)",
      },
    ],
  };

  const lineOptions: any = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      point: {
        hitRadius: 0,
      },
    },
  };





    return <div className="border-2 border-gray-400 p-2 flex max-h-16">
        <div className="flex-1/4">
            <p>
                {data.name}
            </p>
            <p>
                {data.flavortext}
            </p>
        </div>
        <div className="flex-1/4 max-h-16 border-gray-400 border-2">
            <div className="">
                <div className="relative flex-shrink-0 max-w-10 max-h-10">
                    <Doughnut data={donutData} options={doughnutOptions} />
                    {/* center label */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <div className="text-md font-semibold text-primary">{data.value_count}</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1/2 border-gray-400 border-1">
            <div className="w-40 h-10"> {/* md:h-48 - 48 height only on medium screens */}
                <Line data={lineData} options={lineOptions} />
            </div>
        </div>
    </div>
}