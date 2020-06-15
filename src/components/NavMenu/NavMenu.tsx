import React from 'react';
import {
  Container,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Navbar,
  Row,
  Col,
} from 'reactstrap';

const NavMenu: React.FC = () => {
  return (
    <Container className="pt-4">
      <Navbar>
        <NavbarBrand href="/">
          <img
            src="assets/images/chapa_nome.png"
            className="img-fluid"
            srcSet="assets/images/chapa_nome@2x.png 2x,assets/images/chapa_nome@3x.png 3x"
            alt="meuchapa"
          />
        </NavbarBrand>
        <Nav>
          <Row>
            <Col xs={12} lg="auto" className="text-center">
              <NavItem>
                <NavLink href="#funcionalidades">Como funciona</NavLink>
              </NavItem>
            </Col>
            <Col xs={12} lg="auto" className="text-center">
              <NavItem>
                <NavLink href="#empresa">Para empresas</NavLink>
              </NavItem>
            </Col>
            <Col xs={12} lg="auto" className="text-center">
              <NavItem>
                <NavLink href="#contato">Contato</NavLink>
              </NavItem>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
