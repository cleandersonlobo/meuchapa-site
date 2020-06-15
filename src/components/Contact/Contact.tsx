import React from 'react';
import { Row, Col } from 'reactstrap';
import { Input, ContentInput, Button } from './styles';

const Contact: React.FC = () => {
  return (
    <Row className="justify-content-center">
      <Col
        xs={12}
        lg={{ size: 8, offset: 0 }}
        className="text-center text-lg-left"
      >
        <ContentInput className="align-items-center justify-content-around">
          <Col xs={12} lg="auto" className="text-center text-lg-left">
            <Input
              placeholder="Digite seu e-mail:"
              autoComplete="false"
              autoCapitalize="false"
            />
          </Col>
          <Col xs={12} lg="auto" className="text-center py-3 pt-lg-0">
            <Button className="w-100 w-lg-auto ">Enviar</Button>
          </Col>
        </ContentInput>
      </Col>
    </Row>
  );
};

export default Contact;
