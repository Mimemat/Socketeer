import React from 'react';

import '@testing-library/jest-dom/extend-expect.js';

import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import Header from '../src/screen/Header';

import { theme } from '../src/styles/theme';

describe('Render', () => {
  it('Should render header', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const header = screen.getByText('Socketeer');

    expect(header).toBeInTheDocument();
  });
});
