import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { NavMenu, Header, Features, Business } from './components';
import { Title, Subtitle } from './styles/ui';

const App: React.FC = () => {
  return (
    <>
      <NavMenu />
      <Header />
      <Container>
        <Title id="funcionalidades" className="text-center pt-2">
          Funcionalidades
        </Title>
        <Subtitle className="text-center pb-4">
          Conheça um pouco do Meu Chapa
        </Subtitle>
        <Features />
      </Container>
      <Container>
        <Title id="empresa" className="text-center mt-5">
          Soluções para Empresa
        </Title>
        <Subtitle className="text-center pb-3">
          Saúde emocional do seus caminhoneiros.
        </Subtitle>
        <Business />
      </Container>
    </>
  );
};

export default App;
