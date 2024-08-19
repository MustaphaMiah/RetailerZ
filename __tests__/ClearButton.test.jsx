import { render, fireEvent, screen } from '@testing-library/react-native';
import ClearButton from '../src/components/Buttons/ClearButton';

const mockOnPress = jest.fn();

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return View;
});

describe('Clear Button', () => {
  it('renders Clear Button correctly and calls onPress when clicked', () => {
    render(<ClearButton onPress={mockOnPress} />);
    
    const clearButton = screen.getByTestId('clear-button');
    fireEvent.press(clearButton);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
