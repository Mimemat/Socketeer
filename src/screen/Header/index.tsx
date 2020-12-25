import React, { useCallback, memo } from 'react'

import { remote } from 'electron'

import {
  Container,
  ActionContainer,
  ActionButton
} from './styles'

const Header: React.FC = () => {
  const handleCloseWindow = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.close()
  }, [])

  const handleMaximize = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.isMaximized() ? window.unmaximize() : window.maximize()
  }, [])

  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.minimize()
  }, [])

  return (
    <Container>
      <h1>Socketeer</h1>
      <ActionContainer>
        <ActionButton color="#E7DE79" onClick={handleMinimize} />
        <ActionButton color="#67E480" onClick={handleMaximize} />
        <ActionButton color="#E96379" onClick={handleCloseWindow} />
      </ActionContainer>
    </Container>
  )
}

export default memo(Header)
