import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu, Header, Contact, Features, Business } from './components';
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
          Conheça as princípais funcionalidades do Meu Chapa
        </Subtitle>
        <Features />
      </Container>
      <Container>
        <Title id="empresa" className="text-center mt-5">
          Soluções para Empresa
        </Title>
        <Subtitle className="text-center pb-3">
          Cuide da saúde emocional do seus caminhoneiros
        </Subtitle>
        <Business />
      </Container>
      <Container>
        <Title id="Contato" className="text-center mt-5">
          Contato
        </Title>
        <Subtitle className="text-center pb-3">
          Deixei seu e-mail que iremos entrar em contato.
        </Subtitle>
        <Contact />
      </Container>
      <footer className="mt-5">
        <NavMenu />
      </footer>
    </>
  );
};

export default App;
