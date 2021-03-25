import React, { useCallback, useEffect, useRef } from 'react';
import { FiCheck } from 'react-icons/fi';

import { useRecoilState } from 'recoil';

import { connectionAtom, selectedConnectionAtom } from '@atoms/connections';
import Dropdown, { IDropdownHandles } from '@components/Dropdown';
import { useToast } from '@contexts/toast';
import { useWs } from '@contexts/ws';

import { updateConnection } from '../../../services/connections/UpdateConnnectionsService';

import { ConnectButton, Container, URLBar } from './styles';

const items = [
  { label: 'Websocket', value: 'ws' },
  { label: 'Socket.io', value: 'io' },
];

const Header: React.FC = () => {
  const { connect, connected, disconnect } = useWs();
  const { addToast } = useToast();

  const [selectedConnection, setSelectedConnection] = useRecoilState(
    selectedConnectionAtom
  );
  const [_, setConnections] = useRecoilState(connectionAtom);
  const drodownRef = useRef<IDropdownHandles>(null);
  const urlBarRef = useRef<HTMLInputElement>(null);

  const handleUpdate = useCallback(() => {
    const value = urlBarRef?.current?.value;
    if (selectedConnection?.url !== value && selectedConnection) {
      const { id: _id, ...updatedConnection } = {
        ...selectedConnection,
        url: value || 'http://localhost:3333',
      };

      const updatedConnections = updateConnection(
        selectedConnection.id,
        updatedConnection
      );
      setConnections(updatedConnections);
      setSelectedConnection({
        id: selectedConnection.id,
        ...updatedConnection,
      });
    }
  }, [selectedConnection]);

  const handleConnect = useCallback((): unknown => {
    if (connected) return disconnect();
    const value = urlBarRef.current?.value;
    if (!value) {
      return addToast({
        type: 'info',
        description: 'You need to add an url in order to connect to it!',
        title: 'URL required',
      });
    }
    handleUpdate();
    return connect(value);
  }, [connected, selectedConnection]);

  useEffect(() => {
    return disconnect;
  }, [selectedConnection]);

  return (
    <Container>
      <Dropdown ref={drodownRef} items={items} />

      <URLBar
        key={selectedConnection?.id}
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
