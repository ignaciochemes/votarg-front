import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { CardWebService } from "../WebService/CardWebService";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
};

export const ChartComponent = () => {
    const [data, setData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [loading, setLoading] = useState(true);

    const info = {
        labels: labels,
        datasets: [
            {
                label: "Votos",
                data: data,
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    useEffect(() => {
        const loadingFetch = async () => {
            const fetchedData = await CardWebService();
            const fetchedLabels = fetchedData.result.map((card) => card.name);
            const fetchedDataValues = fetchedData.result.map(
                (card) => card.votos
            );
            setData(fetchedDataValues);
            setLabels(fetchedLabels);
        };
        loadingFetch();
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? (
                <Typography variant="h5">Cargando informacion...</Typography>
            ) : (
                <Box
                    style={{
                        marginTop: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingLeft: "0.5rem",
                    }}
                >
                    <Bar data={info} options={options} />
                </Box>
            )}
        </div>
    );
};
