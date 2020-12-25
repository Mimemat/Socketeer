import styled from 'styled-components'

import { lighten } from 'polished'

export const Container = styled.header`
  width: 100%;
  height: 40px;
  display: flex;

  -webkit-user-select: none;
  -webkit-app-region: drag;

  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.backgrounds.dark};
  border-bottom: 1px solid ${props => lighten(0.1, props.theme.backgrounds.ligth)};

  h1 {
    font-size: 20px;
    margin: 0 auto;

    font-family: ${props => props.theme.fonts.bold};
    font-weight: 500;
  }
`

export const ActionContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const ActionButton = styled.button<{color: string}>`
  background: ${props => props.color};
  -webkit-app-region: no-drag;
  border: 0;

  width: 15px;
  height: 15px;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  & + button {
    margin-left: 8px;
  }

  &:active {
    opacity: 0.6;
  }

  &:focus {
    outline: 0;
  }

`
