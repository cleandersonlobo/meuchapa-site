import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { NavMenu, Header } from './components';

const App: React.FC = () => {
  return (
    <>
      <NavMenu />
      <Header />
    </>
  );
};

export default App;
