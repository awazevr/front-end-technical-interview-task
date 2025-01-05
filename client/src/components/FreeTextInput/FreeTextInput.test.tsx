import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FreeTextInput from './FreeTextInput';

describe('FreeTextInput', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the input field', () => {
    render(<FreeTextInput />);
    const inputElement = screen.getByPlaceholderText(/type to search/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('allows alphabetic characters and spaces', () => {
    render(<FreeTextInput />);
    const inputElement = screen.getByPlaceholderText(/type to search/i);
    fireEvent.keyDown(inputElement, { key: 'a', charCode: 97 });
    fireEvent.keyDown(inputElement, { key: ' ', charCode: 32 });
    fireEvent.keyDown(inputElement, { key: 'z', charCode: 122 });
    fireEvent.change(inputElement, { target: { value: 'a z' } });

    expect(inputElement).toHaveValue('a z');
  });

  it('prevents non-alphabetic characters', async () => {
    render(<FreeTextInput />);
    const inputElement = screen.getByPlaceholderText(/type to search/i);
    await userEvent.type(inputElement, '1');
    expect(inputElement).toHaveValue('');
  });

  it('calls fetch when valid input is typed', async () => {
    // @ts-ignore
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<FreeTextInput />);
    const inputElement = screen.getByPlaceholderText(/type to search/i);
    fireEvent.change(inputElement, { target: { value: 'm' } });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/locations?term=m');
  });

  it('does not call fetch if input is empty', () => {
    render(<FreeTextInput />);
    const inputElement = screen.getByPlaceholderText(/type to search/i);
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('handles fetch failure gracefully', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    // @ts-ignore
    global.fetch.mockRejectedValueOnce(new Error('Network Error'));

    render(<FreeTextInput />);
    const inputElement = screen.getByPlaceholderText(/type to search/i);
    fireEvent.change(inputElement, { target: { value: 'abc' } });

    await screen.findByPlaceholderText(/type to search/i);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching search data:',
      expect.any(Error)
    );
    consoleErrorSpy.mockRestore();
  });
});
