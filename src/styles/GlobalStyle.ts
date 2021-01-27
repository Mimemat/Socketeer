import { createGlobalStyle } from 'styled-components';

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

  .react-resizable {
    position: relative;
  }

  .react-resizable-handle {
    display: flex;
    justify-content: center;
    user-select: none;
    cursor: ew-resize;
    position: absolute;
    font-size: 24px;
    
    &::before {
      width: 1px;
      height: 24px;
      background: rgba(255, 255, 255, 0.1);
      content: '';
    }
  }

  .react-resizable-handle-e {
    right: 0;
    padding-right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
