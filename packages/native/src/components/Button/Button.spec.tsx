import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('renders successfully', () => {
    // Arrange
    const text = 'foo';

    // Act
    const { getByText } = render(<Button text={text} />);

    // Assert
    expect(getByText(/foo/i)).toBeTruthy();
  });
});
