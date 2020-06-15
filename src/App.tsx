import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { NavMenu, Header, Features } from './components';
import { Title, Subtitle } from './styles/ui';

const App: React.FC = () => {
  return (
    <>
      <NavMenu />
      <Header />
      <Container>
        <Title className="text-center pt-2">Funcionalidades</Title>
        <Subtitle className="text-center pb-5">
          Conheça um pouco do Meu Chapa
        </Subtitle>
        <Features />
      </Container>
    </>
  );
};

export default App;
