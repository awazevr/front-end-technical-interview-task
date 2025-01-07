import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationsList from './LocationsList';

describe('LocationsList', () => {
  const mockLocations = [
    { id: 1, name: 'Manchester' },
    { id: 2, name: 'London' },
    { id: 3, name: 'Birmingham' },
  ];

  const mockOnItemClick = jest.fn();

  it('renders a list of locations', () => {
    render(
      <LocationsList locations={mockLocations} onItemClick={mockOnItemClick} />
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockLocations.length);

    mockLocations.forEach((location, index) => {
      expect(listItems[index]).toHaveTextContent(location.name);
    });
  });

  it('calls onItemClick when a location is clicked', () => {
    render(
      <LocationsList locations={mockLocations} onItemClick={mockOnItemClick} />
    );

    const listItem = screen.getByText('London');
    fireEvent.click(listItem);

    expect(mockOnItemClick).toHaveBeenCalledTimes(1);
    expect(mockOnItemClick).toHaveBeenCalledWith('London');
  });

  it('renders an empty list when no locations are provided', () => {
    render(<LocationsList locations={[]} onItemClick={mockOnItemClick} />);

    const list = screen.queryByRole('list');
    expect(list).toBeNull();
  });
});
