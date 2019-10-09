import React from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Users from './components/Users';
import './App.css';

function App() {
  return (
    <Container
      style={{
        borderBottom: '5px solid #F36E27',
        borderTop: '5px solid #F36E27',
        padding: '60px 30px',
        minHeight: '100vh',
        backgroundColor: '#F4F4F4',
        maxWidth: '100%',
      }}
    >
      <Header />
      <Users />
    </Container>
  );
}

export default App;
