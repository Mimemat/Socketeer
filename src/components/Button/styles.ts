import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.text};
  padding: 0.4rem;

  font-weight: 500;
  font-size: 18px;
  border: 0;

  border-radius: 4px;
  cursor: pointer;
  outline: 0;

  transition: filter 0.2s ease-out;

  svg {
    margin-left: 8px;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(1.1);
  }
`;
