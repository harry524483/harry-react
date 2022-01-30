import { render, screen } from '@testing-library/react';
import Button, { Color } from './Button';

describe('Button', () => {
  it('renders successfully', () => {
    // Act
    render(<Button color={Color.primary} />);

    // Assert
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
