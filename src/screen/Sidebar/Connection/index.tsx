import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import { SiSocketDotIo } from 'react-icons/si';

import { useRecoilState } from 'recoil';

import { IConnection, selectedConnectionAtom } from '@atoms/connections';

import { Container } from './styles';

export interface IConnectionProps {
  connection: IConnection;
}

const Connection: React.FC<IConnectionProps> = ({ connection }) => {
  const [selected, setSelected] = useRecoilState(selectedConnectionAtom);

  const handleClick = () => {
    setSelected(connection);
  };

  return (
    <Container
      onClick={handleClick}
      isSelected={selected?.id === connection.id}
    >
      {connection.type === 'ws' ? <FiGlobe /> : <SiSocketDotIo />}
      <p>{connection.name}</p>
    </Container>
  );
};

export default Connection;
