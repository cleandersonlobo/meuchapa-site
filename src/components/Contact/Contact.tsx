import React from 'react';
import { Row, Col } from 'reactstrap';
import { Input, ContentInput, Button } from './styles';

const Contact: React.FC = () => {
  return (
    <Row>
      <Col xs={12} lg={{ size: 8, offset: 2 }}>
        <ContentInput>
          <Input placeholder="Digite seu e-mail: " />
          <Button>Enviar</Button>
        </ContentInput>
      </Col>
    </Row>
  );
};

export default Contact;
