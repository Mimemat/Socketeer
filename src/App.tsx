import React from 'react';
import { render } from 'react-dom';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { ToastProvider } from './contexts/toast';
import Screen from './screen';

import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

const App: React.FC = () => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Screen />
        <GlobalStyle />
      </ToastProvider>
    </ThemeProvider>
  </RecoilRoot>
);

render(<App />, document.getElementById('root'));
