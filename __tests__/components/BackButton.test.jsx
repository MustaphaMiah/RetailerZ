import { render, fireEvent, screen } from '@testing-library/react-native';
import BackButton from '../../src/components/Buttons/BackButton';

const mockOnPress = jest.fn();

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return View;
});

describe('Back Button', () => {
  it('renders Back Button correctly and calls onPress when clicked', () => {
    render(<BackButton onPress={mockOnPress} title={'Back Button'} />);

    const backButton = screen.getByRole('button', {
      name: 'Back Button',
    });
    fireEvent.press(backButton);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
