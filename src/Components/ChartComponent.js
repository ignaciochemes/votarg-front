import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Liberales', 'Izquierda', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Votos',
            data: [7, 2, 3, 4, 5, 6, 7],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const ChartComponent = () => {
    return (
        <Bar
            data={data}
            options={options}
        />
    );
}