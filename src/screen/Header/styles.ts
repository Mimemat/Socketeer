import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 40px;
  display: flex;

  -webkit-user-select: none;
  -webkit-app-region: drag;

  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.backgrounds.dark};
  border-bottom: 1px solid
    ${(props) => lighten(0.1, props.theme.backgrounds.ligth)};

  h1 {
    font-size: 20px;
    margin: 0 auto;

    font-family: ${(props) => props.theme.fonts.bold};
    font-weight: 500;
  }
`;

export const ActionContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;
  -webkit-app-region: no-drag;

  &:active {
    opacity: 0.6;
  }

  &:focus {
    outline: 0;
  }
`;

export const WindowsActionButton = styled(ActionButton)<{ hover?: string }>`
  height: 40px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};

  padding: 0.3rem;

  &:hover {
    background-color: ${(props) => props.hover || 'rgba(255, 255, 255, 0.3)'};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const MacActionButton = styled(ActionButton)<{ color: string }>`
  width: 15px;
  height: 15px;
  background: ${(props) => props.color};

  border-radius: 100%;

  & + button {
    margin-left: 8px;
  }

  &:first-child {
    margin-left: 1rem;
  }
`;
