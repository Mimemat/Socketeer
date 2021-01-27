import React from 'react';

import Header from './Header';
import Info from './Info';
import Sidebar from './Sidebar';

import { Container, Content } from './styles';

const Screen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Info />
      </Content>
    </Container>
  );
};

export default Screen;
