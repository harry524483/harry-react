import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('renders successfully', () => {
    // Arrange
    const text = 'foo';

    // Act
    const { getByRole } = render(<Button text={text} />);

    // Assert
    expect(getByRole('button')).toBeTruthy();
  });
});
