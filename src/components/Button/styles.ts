import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.backgrounds.dark};
  color: ${(props) => props.theme.colors.text};
  padding: 0.4rem;

  font-weight: 500;
  font-size: 18px;
  border: 0;

  border-radius: 4px;
  cursor: pointer;
  outline: 0;

  svg {
    margin-left: 8px;
  }
`;
