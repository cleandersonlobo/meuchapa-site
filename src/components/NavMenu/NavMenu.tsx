import React from 'react';
import {
  Container,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Navbar,
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
          <NavItem>
            <NavLink href="/">Saiba Mais</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Como funciona</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Contato</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
