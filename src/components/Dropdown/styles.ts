import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  outline: 0;
`;

export const Header = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.3rem 0.4rem;

  font-weight: 500;
  font-size: 18px;

  background: transparent;
  transition: background-color 0.2s linear;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.025);
  }

  svg {
    margin-right: 0.8rem;
  }
`;

export const ListContainer = styled.div`
  position: absolute;
  width: 10.5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.backgrounds.ligth};
  border: 1px solid ${(props) => lighten(0.1, props.theme.backgrounds.ligth)};
  border-radius: 4px;

  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-weight: 400;

  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
`;

export const ListItem = styled.li`
  list-style: none;

  padding: 0.3rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.025);
  }
`;
