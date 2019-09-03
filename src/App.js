import React, { useState } from 'react';
import {
  Card, Tabs, Tab, Container,
} from '@material-ui/core';
import Users from './components/Users';
import Output from './components/Output';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const handleChangeTab = (event, newValue) => setValue(newValue);
  return (
    <Container maxWidth="xl">
      <Card
        style={{
          width: 'calc(100%)',
          margin: '20px 0',
        }}
      >
        <Tabs value={value} onChange={handleChangeTab}>
          <Tab label="Users" />
          <Tab label="List" />
        </Tabs>
      </Card>
      {value === 0 && <Users />}
      {value === 1 && <Output />}
    </Container>
  );
}

export default App;
