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
        <Title id="funcionalidades" className="text-center pt-2">
          Funcionalidades
        </Title>
        <Subtitle className="text-center pb-4">
          Conheça um pouco do Meu Chapa
        </Subtitle>
        <Features />
      </Container>
      <Container>
        <Title className="text-center mt-5">Soluções para Empresa</Title>
        <Subtitle className="text-center pb-3">
          Saúde emocional do seus caminhoneiros.
        </Subtitle>
        <Row className="align-items-center">
          <Col>
            <Title>Uma solução eficaz para a sua empresa</Title>
            <Subtitle className="mt-3">
              Meu Chapa faz prevenção, intervenção precoce e tratamento
              complementar, além de promover a busca ativa de casos
              psiquiátricos (cerca de 70% estão escondido).
            </Subtitle>
          </Col>
          <Col>
            <img
              src="assets/images/aajr.png"
              alt="Meu Chapa empresa"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
