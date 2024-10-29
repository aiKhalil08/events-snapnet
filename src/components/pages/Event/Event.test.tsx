import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Event from './Event';

describe('<Event />', () => {
  test('it should mount', () => {
    // render(<Event />);

    const Event = screen.getByTestId('Event');

    expect(Event).toBeInTheDocument();
  });
});