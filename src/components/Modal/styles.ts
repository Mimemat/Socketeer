import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 700;
    font-family: ${(props) => props.theme.fonts.bold};

    margin-bottom: 32px;
  }
  hr {
    margin: 16px 0;
    height: 1px;
    width: 100%;
    border: 0;
    background: ${(props) => props.theme.backgrounds.ligth};
  }
`;
