import { render, fireEvent, screen } from '@testing-library/react-native';
import PrimaryButton from '../../src/components/Buttons/PrimaryButton';

const mockOnPress = jest.fn();

describe('Primary Button', () => {
  it('renders Primary Button correctly and calls onPress when clicked', () => {
    render(<PrimaryButton title='Primary Button' onPress={mockOnPress} />);

    const primaryButton = screen.getByRole('button', {
      name: 'Primary Button',
    });
    fireEvent.press(primaryButton);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
