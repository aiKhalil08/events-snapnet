import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Events from './Events';

describe('<Events />', () => {
  test('it should mount', () => {
    // render(<Events />);

    const Events = screen.getByTestId('Events');

    expect(Events).toBeInTheDocument();
  });
});