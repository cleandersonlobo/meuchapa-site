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
          <Col xs={12} lg={8} className="text-center text-lg-left">
            <Input
              placeholder="meuemail@chapa.com"
              autoComplete="false"
              autoCapitalize="false"
              type="email"
            />
          </Col>
          <Col
            xs={{ size: 6 }}
            lg="auto"
            className="text-center py-3 pt-lg-3 justify-content-center align-items-center"
          >
            <Button className="w-100 w-lg-auto align-self-center">
              <span>Enviar</span>
            </Button>
          </Col>
        </ContentInput>
      </Col>
    </Row>
  );
};

export default Contact;
