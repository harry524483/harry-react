import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders successfully', () => {
    // Act
    render(<Button />);

    // Assert
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
