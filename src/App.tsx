import React, { useEffect, useState } from 'react';
import './App.css';
import VChart from './VChart';
import HChart from './HChart';
import DataInputBox from './DataInputBox';
import LabelInputBox from './LabelInputBox';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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


function App() {

  const [orientation, setOrientation] = useState(true);
  const [dataset, setDataset] = useState<number[]>([]);
  const [label, setLabel] = useState<string[]>([]);
  const [color, setColor] = useState('rgba(52, 152, 219, 0.7)');
  const [index, setIndex] = useState(0);

  const color_list = ['rgba(153, 0, 76, 0.7)', 'rgba(144, 238, 144, 0.7)', 'rgba(255, 165, 0, 0.7)', 'rgba(52, 152, 219, 0.7)']


  const flip = () => {
    setOrientation(!orientation);
  };


  const change_color = () => {
    setColor(color_list[index]);
    if (index == (color_list.length)-1){setIndex(0);}
    else{setIndex(index+1);}
    console.log(index);
  }

  return (
    <div className="App">
      <h1>Jitto-React-Challenge</h1>

      <div className='input'>
        <div className='left_input'><DataInputBox dataset={dataset} setDataset={setDataset} /></div>
        <div className='right_input'><LabelInputBox label={label} setLabel={setLabel} /></div>
      </div>


      <div className="graph">
        {orientation ? 
        <VChart dataset={dataset} label={label} color={color}/> 
        : 
        <HChart dataset={dataset} label={label} color={color}/>}
      </div>
      <div className='buttons'>
      <button onClick={flip}
        className='flip_button'
        style={{ backgroundColor: color}}>
        Set Orientation
      </button>

        <button 
        className='change_color'
        onClick={change_color}>Change Color Theme</button>
      </div>
    </div>
  );
}

export default App;