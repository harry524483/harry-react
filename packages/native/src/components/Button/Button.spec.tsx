import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('renders successfully', () => {
    // Arrange
    const title = 'foo';

    // Act
    const { getByRole } = render(<Button title={title} />);

    // Assert
    expect(getByRole('button')).toBeTruthy();
  });
});
