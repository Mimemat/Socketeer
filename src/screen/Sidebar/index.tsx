import React, { useCallback, useRef } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { useRecoilState } from 'recoil';

import { connectionAtom } from '@atoms/connections';
import { IModalHandles } from '@components/Modal';

import Connection from './Connection';
import ConnectionModal from './ConnectionModal';

import { Container, Header } from './styles';

const Sidebar: React.FC = () => {
  const [connections] = useRecoilState(connectionAtom);
  const modalRef = useRef<IModalHandles>(null);

  const handleAddConnetions = useCallback(() => {
    return modalRef.current?.toggle(true);
  }, []);

  return (
    <>
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
      <ConnectionModal ref={modalRef} />
    </>
  );
};

export default Sidebar;
