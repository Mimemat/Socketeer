import React, { useCallback } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

import {
  connectionAtom,
  IConnection,
  selectedConnectionAtom,
} from '../../atoms/connections';
import { createConnection } from '../../services/connections/CreateConnectionService';
import Connection from './Connection';

import { Container, Header } from './styles';

const Sidebar: React.FC = () => {
  const [connections, setConnections] = useRecoilState(connectionAtom);
  const [_, setSelected] = useRecoilState(selectedConnectionAtom);

  const handleAddConnetions = useCallback(() => {
    const newConnection: IConnection = {
      id: uuid(),
      name: 'localhost',
      type: 'ws',
      url: 'ws://localhost:3333',
    };

    const newConnections = createConnection(newConnection);

    setConnections(newConnections);
    setSelected(newConnection);
  }, []);

  return (
    <Container
      width={200}
      height={Infinity}
      minConstraints={[200, Infinity]}
      maxConstraints={[300, Infinity]}
    >
      <>
        <Header>
          Servers
          <FiPlusCircle onClick={handleAddConnetions} />
        </Header>
        {connections.map((connection) => (
          <Connection key={connection.id} connection={connection} />
        ))}
      </>
    </Container>
  );
};

export default Sidebar;
