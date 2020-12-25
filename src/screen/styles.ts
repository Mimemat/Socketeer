import styled from 'styled-components'

import { shade } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.backgrounds.ligth};
  
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border: 1px solid ${props => shade(0.1, props.theme.colors.primary)};
`
