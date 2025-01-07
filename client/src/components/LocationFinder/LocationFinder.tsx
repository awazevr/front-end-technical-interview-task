import React, { useState } from 'react';
import './LocationFinder.css';
import LocationsList from '../LocationsList/LocationsList';

interface Location {
  id: number;
  name: string;
}

const LocationFinder: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [locations, setLocations] = useState<Location[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const char = event.key;

    if (!/[a-z\s]/i.test(char) && char.length === 1) {
      event.preventDefault();
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      try {
        const response = await fetch(`/api/locations?term=${value}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Location[] = await response.json();
        setLocations(data);
        setShowDropdown(true);
      } catch (error) {
        console.error('Error fetching locations term:', error);
      }
    } else {
      setLocations([]);
      setShowDropdown(false);
    }
  };

  const handleItemClick = (locationName: string) => {
    setInputValue(locationName);
    setLocations([]);
    setShowDropdown(false);
  };

  return (
    <div className="location-finder">
      <input
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="Type to search..."
        className="location-finder-input"
      />
      {showDropdown && (
        <LocationsList locations={locations} onItemClick={handleItemClick} />
      )}
    </div>
  );
};

export default LocationFinder;
