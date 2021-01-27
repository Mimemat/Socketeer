import React from 'react';
import { render } from 'react-dom';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Screen from './screen';

import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

const App: React.FC = () => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Screen />
      <GlobalStyle />
    </ThemeProvider>
  </RecoilRoot>
);

render(<App />, document.getElementById('root'));
