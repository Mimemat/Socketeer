import { shade } from 'polished';
import styled from 'styled-components';

import Button from '@components/Button';

interface IButtonProps {
  connected: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 4fr 1fr;
  align-items: center;

  column-gap: 1rem;
`;

export const URLBar = styled.input`
  outline: 0;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.backgrounds.dark};

  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 18px;

  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  border: 0;
`;

export const ConnectButton = styled(Button)<IButtonProps>`
  background-color: ${({ theme, connected }) =>
    connected ? shade(0.1, theme.colors.green) : theme.backgrounds.dark};
`;
