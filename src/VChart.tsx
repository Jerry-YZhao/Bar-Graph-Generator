import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface InputBoxProps {
    dataset: number[];
    label: string[];
    color: string;
}


export default function VChart({ dataset, label, color}: InputBoxProps) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Vertical Bar Chart',
            },
        },
    };

    const unsigned_num = (label.length < dataset.length) ? dataset.length - label.length : 0;

    for (let i = 0; i < unsigned_num; i++) {

        label.push("Unknown");

    }

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                label: 'User Input Data',
                data: dataset,
                backgroundColor: color,
            }
        ],
    };

    return (<Bar data={data} options={options} />);
}