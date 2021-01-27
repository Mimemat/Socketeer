import React, { useCallback, useRef } from 'react';
import { FiCheck } from 'react-icons/fi';

import { useRecoilState } from 'recoil';

import { selectedConnectionAtom } from '../../../atoms/connections';
import Dropdown, { IDropdownHandles } from '../../../components/Dropdown';
import { useWs } from '../../../contexts/ws';

import { ConnectButton, Container, URLBar } from './styles';

const items = [
  { label: 'Websocket', value: 'ws' },
  { label: 'Socket.io', value: 'io' },
];

const Header: React.FC = () => {
  const { connect, connected, disconnect } = useWs();

  const [selectedConnection] = useRecoilState(selectedConnectionAtom);
  const drodownRef = useRef<IDropdownHandles>(null);
  const urlBarRef = useRef<HTMLInputElement>(null);

  const handleConnect = useCallback((): void => {
    if (connected) return disconnect();
    if (!urlBarRef.current?.value) {
      // TODO: add toasts
      return console.error('URL required');
    }
    return connect(urlBarRef.current.value);
  }, [connected]);

  return (
    <Container>
      <Dropdown ref={drodownRef} items={items} />

      <URLBar
        defaultValue={selectedConnection?.url}
        ref={urlBarRef}
        type="text"
      />
      <ConnectButton connected={connected} onClick={handleConnect}>
        {connected ? (
          <>
            Connected <FiCheck />
          </>
        ) : (
          'Connect'
        )}
      </ConnectButton>
    </Container>
  );
};

export default Header;
