import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import Screen from './screen'
import { theme } from './styles/theme'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Screen />
      <GlobalStyle />
    </ThemeProvider>
  )
}

render(<App />, mainElement)
