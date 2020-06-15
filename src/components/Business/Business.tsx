import React from 'react';
import { Col, Row } from 'reactstrap';
import { Title, Subtitle } from '../../styles/ui';

const Business: React.FC = () => {
  return (
    <Row className="align-items-center">
      <Col xs={12} lg={6}>
        <Title>Uma solução eficaz para a sua empresa</Title>
        <Subtitle className="mt-3">
          Meu Chapa faz prevenção, intervenção precoce e tratamento
          complementar, além de promover a busca ativa de casos psiquiátricos
          (cerca de 70% estão escondido).
        </Subtitle>
      </Col>
      <Col xs={12} lg={6}>
        <img
          src="assets/images/aajr.png"
          alt="Meu Chapa empresa"
          className="img-fluid"
        />
      </Col>
    </Row>
  );
};

export default Business;
