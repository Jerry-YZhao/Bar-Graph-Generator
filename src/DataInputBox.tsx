import React, { useState } from 'react';

interface DataInputBoxProps {
  dataset: number[];
  setDataset: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function DataInputBox({dataset, setDataset}:DataInputBoxProps) {
  const [inputValue, setInputValue] = useState('');
  const [parsedValue, setParsedValue] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      setParsedValue(parsed);
    } else {
      setParsedValue(null);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (parsedValue !== null) {
        const newDataset = [...dataset, parsedValue];
        setDataset(newDataset);
        setInputValue('');
      }
    }
  }

  return (
    <div>
      <h4>Dataset</h4>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter data, then 'enter'"
      />
      <p>Entered Integer: {parsedValue !== null ? parsedValue : 'Invalid input'}</p>
      <p>DataSet: [ {dataset.join(', ')} ]</p>
    </div>
  );
}

