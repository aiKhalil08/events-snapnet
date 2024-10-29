import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateEvent from './CreateEvent';

describe('<CreateEvent />', () => {
  test('it should mount', () => {
    // render(<CreateEvent />);

    const CreateEvent = screen.getByTestId('CreateEvent');

    expect(CreateEvent).toBeInTheDocument();
  });
});