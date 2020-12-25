import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyle'
import Screen from './screen'
import { theme } from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Screen />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
