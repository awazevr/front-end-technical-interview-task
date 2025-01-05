import React, { useState } from 'react';
import './FreeTextInput.css';

const FreeTextInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const char = event.key;

    if (!/[a-z\s]/i.test(char) && char.length === 1) {
      event.preventDefault();
    }

    // Allow only a-z characters and spaces
    if (!/[a-z\s]/i.test(char) && char.length === 1) {
      event.preventDefault();
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      try {
        const response = await fetch(`/api/locations?term=${value}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Search result:', data);
      } catch (error) {
        console.error('Error fetching search data:', error);
      }
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="Type to search..."
        className="search-input"
      />
    </div>
  );
};

export default FreeTextInput;
