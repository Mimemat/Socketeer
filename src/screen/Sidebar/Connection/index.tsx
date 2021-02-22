import React, { useCallback } from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { FiGlobe, FiTrash } from 'react-icons/fi';
import { SiSocketDotIo } from 'react-icons/si';

import { useRecoilState } from 'recoil';
import { deleteConnection } from 'services/connections/DeleteConnectionService';

import {
  connectionAtom,
  IConnection,
  selectedConnectionAtom,
} from '@atoms/connections';

import { ConnectionMenu, Container, DeleteMenuItem } from './styles';

export interface IConnectionProps {
  connection: IConnection;
}

const Connection: React.FC<IConnectionProps> = ({ connection }) => {
  const [selected, setSelected] = useRecoilState(selectedConnectionAtom);
  const [connections, setConnections] = useRecoilState(connectionAtom);

  const handleClick = () => {
    setSelected(connection);
  };

  const handleDelete = useCallback(() => {
    if (selected?.id === connection.id) {
      const foundIndex = connections.findIndex((c) => c.id === connection.id);

      setSelected(connections[foundIndex - 1]);
    }

    const updatedConnections = deleteConnection(connection.id);

    setConnections(updatedConnections);
  }, [selected]);

  return (
    <>
      <ContextMenuTrigger id={`connection-${connection.id}`}>
        <Container
          onClick={handleClick}
          isSelected={selected?.id === connection.id}
        >
          {connection.type === 'ws' ? <FiGlobe /> : <SiSocketDotIo />}
          <p>{connection.name}</p>
        </Container>
      </ContextMenuTrigger>
      <ConnectionMenu id={`connection-${connection.id}`}>
        <DeleteMenuItem onClick={handleDelete}>
          <p>Delete</p>
          <FiTrash />
        </DeleteMenuItem>
      </ConnectionMenu>
    </>
  );
};

export default Connection;
