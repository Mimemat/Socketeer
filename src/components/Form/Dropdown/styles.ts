import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-left: 0.3rem;
    font-size: 16px;
    font-weight: 500;
  }

  .dropdown {
    background-color: ${(props) => props.theme.backgrounds.dark};
    border-radius: 4px;
    border: 1px solid ${(props) => shade(0.1, props.theme.backgrounds.dark)};
  }
`;
