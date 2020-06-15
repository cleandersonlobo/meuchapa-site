import React, { useState } from 'react';
import {
  Container,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Navbar,
  Row,
  Col,
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import classnames from 'classnames';

type Props = {
  isFooter?: boolean;
};

const NavMenu: React.FC<Props> = ({ isFooter }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container className="pt-4">
      <Navbar expand="lg" className="navbar-expand-lg navbar-light">
        <NavbarBrand href="/" className="mr-auto">
          <img
            src="assets/images/chapa_nome.png"
            className="img-fluid"
            srcSet="assets/images/chapa_nome@2x.png 2x,assets/images/chapa_nome@3x.png 3x"
            alt="meuchapa"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={toggle}
          className={classnames('mr-2', { 'd-none': isFooter })}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-lg-auto" navbar>
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
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
