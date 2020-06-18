import React from 'react';
import { Col, Row } from 'reactstrap';
import { AiFillTrophy } from 'react-icons/ai';
import { FcServices } from 'react-icons/fc';
import { IoMdHappy } from 'react-icons/io';
import { GiHeartBeats } from 'react-icons/gi';
import { Circle, Title } from './styles';

const Features: React.FC = () => {
  return (
    <Row className="flex-lg-row-reverse align-items-center justify-content-start">
      <Col xs={12} lg={6} className="text-center text-lg-left">
        <Row className="align-items-center pb-5">
          <Col xs={12} lg="auto">
            <Circle color="#51CDA2">
              <GiHeartBeats size={35} color="#ffffff" />
            </Circle>
          </Col>
          <Col xs={12} lg="auto">
            <Title>Saúde Mental</Title>
          </Col>
        </Row>
        <Row className="align-items-center pb-5 pl-0 pl-lg-5">
          <Col xs={12} lg="auto">
            <Circle color="#F67062">
              <IoMdHappy size={35} color="#ffffff" />
            </Circle>
          </Col>
          <Col xs={12} lg="auto">
            <Title>Amigável</Title>
          </Col>
        </Row>
        <Row className="align-items-center pb-5 pl-0 pl-lg-5">
          <Col xs={12} lg="auto" className="text-center">
            <Circle color="#5049E6">
              <AiFillTrophy size={35} color="#ffffff" />
            </Circle>
          </Col>
          <Col xs={12} lg="auto">
            <Title>Gamificação</Title>
          </Col>
        </Row>
        <Row className="align-items-center pb-5">
          <Col xs={12} lg="auto">
            <Circle color="#19147a">
              <FcServices size={35} color="#fff" />
            </Circle>
          </Col>
          <Col xs={12} lg={6}>
            <Title>Serviços do Caminhoneiro</Title>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6} className="text-center text-lg-left">
        <img
          className="img-fluid"
          src="assets/images/Grupo102.png"
          srcSet="assets/images/Grupo102@2x.png 2x"
          alt="meu chapa app"
        />
      </Col>
    </Row>
  );
};

export default Features;
