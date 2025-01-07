import React from 'react';
import './LocationsList.css';

interface Location {
  id: number;
  name: string;
}

interface LocationsListProps {
  locations: Location[];
  onItemClick: (locationName: string) => void;
}

const LocationsList: React.FC<LocationsListProps> = ({
  locations,
  onItemClick,
}) => {
  return (
    <>
      {locations.length > 0 ? (
        <ul className="location-list">
          {locations.map((location) => (
            <li
              key={location.id}
              className="location-list-item"
              onClick={() => onItemClick(location.name)}
            >
              {location.name}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default LocationsList;
