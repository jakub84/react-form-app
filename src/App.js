import React, { useState } from 'react';
import {
  Card, Tabs, Tab, Container,
} from '@material-ui/core';
import Users from './components/Users';
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
        </Tabs>
      </Card>
      {value === 0 && <Users />}
    </Container>
  );
}

export default App;
