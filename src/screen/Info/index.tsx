import React from 'react';

import { useRecoilState } from 'recoil';

import { selectedConnectionAtom } from '../../atoms/connections';
import { WsProvider } from '../../contexts/ws';
import Header from './Header';
import Messages from './Messages';
import SendBox from './SendBox';

import { Container, Content } from './styles';

const Info: React.FC = () => {
  const [selectedConnection] = useRecoilState(selectedConnectionAtom);

  return selectedConnection ? (
    <WsProvider>
      <Container>
        <Header />
        <Content>
          <Messages />
          <SendBox />
        </Content>
      </Container>
    </WsProvider>
  ) : (
    <h1>No connection selected</h1>
  );
};

export default Info;
