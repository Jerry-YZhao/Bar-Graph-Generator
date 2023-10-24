import React, { useState } from 'react';

interface LabelInputBoxProps {
    label: string[];
    setLabel: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function LabelInputBox({ label, setLabel }: LabelInputBoxProps) {
    const [inputValue, setInputValue] = useState('');
    const [parsedValue, setParsedValue] = useState<string | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setParsedValue(value); // Simply store the string input as is
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (parsedValue !== null) {
                const newLabel = [...label, parsedValue];
                setLabel(newLabel);
                setInputValue('');
            }
        }
    }

    return (
        <div>
            <h4>Labels</h4>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter label, then 'enter'"
            />
            <p>Entered Label: {parsedValue}</p>
            <p>Labels: [ {label.join(', ')} ]</p>
        </div>
    );
}
