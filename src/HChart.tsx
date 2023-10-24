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


export default function HChart({dataset, label, color}:InputBoxProps) {

    const options = {
        indexAxis: 'y' as const,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right' as const,
          },
          title: {
            display: true,
            text: 'Horizontal Bar Chart',
          },
        },
      };

    const labels = label;

    // const labels = (label.length >= dataset.length) ? label : label.push('null');
    
      
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