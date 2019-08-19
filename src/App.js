import React, { useState } from 'react';
import { Card, Tabs, Tab, Container } from '@material-ui/core';
import Form from './components/Form';
import Output from './components/Output';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const handleChangeTab = (event, newValue) => setValue(newValue);
  return (
    <Container maxWidth="md">
      <Card
        style={{
          width: 'calc(100% - 40px)',
          margin: '20px',
        }}
      >
        <Tabs value={value} onChange={handleChangeTab}>
          <Tab label="Form" />
          <Tab label="List" />
        </Tabs>
      </Card>
      {value === 0 && (
        <Card
          style={{
            width: 'calc(100% - 40px)',
            margin: '20px',
          }}
        >
          <Form />
        </Card>
      )}
      {value === 1 && (
        <Card
          style={{
            width: 'calc(100% - 40px)',
            margin: '20px',
          }}
        >
          <Output />
        </Card>
      )}
    </Container>
  );
}

export default App;
