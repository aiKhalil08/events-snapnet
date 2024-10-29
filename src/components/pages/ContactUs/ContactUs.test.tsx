import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from './ContactUs';


describe('<ContactUs />', () => {
  test('it should mount', () => {
    // render(<ContactUs />);

    const ContactUs = screen.getByTestId('ContactUs');

    expect(ContactUs).toBeInTheDocument();
  });
});