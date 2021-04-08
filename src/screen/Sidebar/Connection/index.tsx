import React, { useCallback, useRef } from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { FiGlobe, FiPaperclip, FiTrash } from 'react-icons/fi';
import { SiSocketDotIo } from 'react-icons/si';

import { useRecoilState } from 'recoil';

import {
  connectionAtom,
  IConnection,
  selectedConnectionAtom,
} from '@atoms/connections';
import { IModalHandles } from '@components/Modal';
import { deleteConnection } from '@services/connections/DeleteConnectionService';

import ConnectionEditModal from '../ConnectionEditModal';

import {
  ConnectionMenu,
  Container,
  DeleteMenuItem,
  UpdateMenuItem,
} from './styles';

export interface IConnectionProps {
  connection: IConnection;
}

const Connection: React.FC<IConnectionProps> = ({ connection }) => {
  const modalRef = useRef<IModalHandles>(null);
  const [selected, setSelected] = useRecoilState(selectedConnectionAtom);
  const [connections, setConnections] = useRecoilState(connectionAtom);

  const handleClick = () => {
    setSelected(connection);
  };

  const handleUpdate = useCallback(() => {
    return modalRef.current?.toggle(true);
  }, []);

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
        <UpdateMenuItem onClick={handleUpdate}>
          <p>Edit</p>
          <FiPaperclip />
        </UpdateMenuItem>
      </ConnectionMenu>
      <ConnectionEditModal connection={connection} ref={modalRef} />
    </>
  );
};

export default Connection;
