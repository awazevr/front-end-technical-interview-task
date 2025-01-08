import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationFinder from './LocationFinder';

describe('<LocationFinder />', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = () => {
    render(<LocationFinder />);
    return screen.getByPlaceholderText(/type to search/i);
  };

  describe('Fetch Behavior', () => {
    it('calls fetch when characters typed is >= 3', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => [{ id: 1, name: 'Manchester' }],
      });

      const LocationFinder = setup();

      fireEvent.change(LocationFinder, { target: { value: 'man' } });

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('/api/locations?term=man');

        const dropdownItem = screen.getByText('Manchester');
        expect(dropdownItem).toBeInTheDocument();
      });
    });

    it('handles fetch failure gracefully', async () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error('Network Error')
      );

      const inputElement = setup();

      fireEvent.change(inputElement, { target: { value: 'abc' } });

      await waitFor(() => {
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          'Error fetching locations term:',
          expect.any(Error)
        );
      });

      consoleErrorSpy.mockRestore();
    });
  });
});
