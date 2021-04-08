import React, { useCallback, useEffect, useRef } from 'react';
import { FiCheck } from 'react-icons/fi';

import { useRecoilState } from 'recoil';
import { dropdownItems } from 'screen/Sidebar/ConnectionEditModal';

import { connectionAtom, selectedConnectionAtom } from '@atoms/connections';
import Dropdown, { IDropdownHandles } from '@components/Dropdown';
import { useToast } from '@contexts/toast';
import { useWs } from '@contexts/ws';

import { updateConnection } from '../../../services/connections/UpdateConnnectionsService';

import { ConnectButton, Container, URLBar } from './styles';

const Header: React.FC = () => {
  const { connect, connected, disconnect, clearMsgs } = useWs();
  const { addToast } = useToast();

  const [selectedConnection, setSelectedConnection] = useRecoilState(
    selectedConnectionAtom
  );
  const [_, setConnections] = useRecoilState(connectionAtom);
  const dropdownRef = useRef<IDropdownHandles>(null);
  const urlBarRef = useRef<HTMLInputElement>(null);

  const handleUpdate = useCallback(() => {
    const value = urlBarRef?.current?.value;
    const type = dropdownRef.current?.selected.value as 'ws' | 'io';
    if (
      (selectedConnection?.url !== value || selectedConnection?.type) !==
        type &&
      selectedConnection
    ) {
      const { id: _id, ...updatedConnection } = {
        ...selectedConnection,
        url: value || 'http://localhost:3333',
        type: dropdownRef.current?.selected.value as 'ws' | 'io',
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
    return () => {
      clearMsgs();
      disconnect();
    };
  }, [selectedConnection]);

  return (
    <Container key={selectedConnection?.id}>
      <Dropdown
        ref={dropdownRef}
        items={dropdownItems}
        defaultValue={dropdownItems.findIndex(
          (item) => item.value === selectedConnection?.type
        )}
      />

      <URLBar
        key={selectedConnection?.url}
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
