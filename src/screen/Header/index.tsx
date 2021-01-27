import React, { useCallback, memo, useMemo } from 'react';
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';

import { remote } from 'electron';
import os from 'os';

import {
  Container,
  ActionContainer,
  MacActionButton,
  WindowsActionButton,
} from './styles';

const Header: React.FC = () => {
  const isMac = useMemo(() => os.platform() === 'darwin', []);

  const handleCloseWindow = useCallback(() => {
    const window = remote.getCurrentWindow();

    window.close();
  }, []);

  const handleMaximize = useCallback((): void => {
    const window = remote.getCurrentWindow();

    if (window.isMaximized()) {
      return window.unmaximize();
    }
    return window.maximize();
  }, []);

  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow();

    window.minimize();
  }, []);

  return (
    <>
      {isMac ? (
        <Container>
          <ActionContainer>
            <MacActionButton color="#E96379" onClick={handleCloseWindow} />
            <MacActionButton color="#E7DE79" onClick={handleMinimize} />
            <MacActionButton color="#67E480" onClick={handleMaximize} />
          </ActionContainer>
          <h1>Socketeer</h1>
        </Container>
      ) : (
        <Container>
          <h1>Socketeer</h1>
          <ActionContainer>
            <WindowsActionButton onClick={handleMinimize}>
              <FiMinus />
            </WindowsActionButton>
            <WindowsActionButton onClick={handleMaximize}>
              <FiSquare />
            </WindowsActionButton>
            <WindowsActionButton hover="#E96379" onClick={handleCloseWindow}>
              <FiX />
            </WindowsActionButton>
          </ActionContainer>
        </Container>
      )}
    </>
  );
};

export default memo(Header);
