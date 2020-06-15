import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Image, Title, Subtitle, ButtonHelper, ButtonIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center flex-lg-row-reverse">
        <Col xs={12} lg={6} className="text-lg-center">
          <Image
            src="assets/images/CellPhone.png"
            srcSet="assets/images/CellPhone@2x.png 2x"
          />
        </Col>
        <Col xs={12} lg={6}>
          <Title>O Companheiro de viagem dos caminhoneiros.</Title>
          <Subtitle>
            Aplicativo para acompanhar o caminhoneiro no seu cotidiano e olhar
            para a sua saúde.
          </Subtitle>
          <Row className="align-items-center">
            <Col xs={12} lg="auto" className="text-center text-lg-left">
              <ButtonHelper
                color="danger"
                className="rounded"
                href="#funcionalidades"
              >
                Saiba Mais
              </ButtonHelper>
            </Col>
            <Col
              xs={12}
              lg="auto"
              className="text-center mt-4 mt-lg-0 text-lg-left"
            >
              <ButtonIcon
                color="link"
                target="blank"
                href="https://www.youtube.com/watch?v=UoUB45ikNcY&rel=0&utm_source=broadcast&utm_medium=email&utm_campaign=Transactional-Publish-success"
              >
                <AiFillPlayCircle size={30} color="#FDD051" />
                <span>Assista Video</span>
              </ButtonIcon>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
