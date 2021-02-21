import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-left: 0.3rem;
    font-size: 16px;
    font-weight: 500;
  }

  input {
    flex: 1;

    outline: 0;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.backgrounds.dark};

    font-weight: 300;
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 14px;

    padding: 0.4rem 0.5rem;
    border-radius: 4px;
    border: 1px solid ${(props) => shade(0.1, props.theme.backgrounds.dark)};

    transition: border-color 0.2s ease-in;

    &:focus {
      border-color: ${(props) => lighten(0.05, props.theme.backgrounds.ligth)};
    }
  }
`;
