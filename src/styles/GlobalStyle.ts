import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a:hover {
    cursor: pointer;
  }
  
  body {
    background: ${(props) => props.theme.backgrounds.dark};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: ${(props) => props.theme.fonts.bold};
  }
`
