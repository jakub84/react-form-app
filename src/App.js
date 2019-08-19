import React, { useState } from 'react';
import { Card, Tabs, Tab } from '@material-ui/core';
import Form from './components/Form';
import Output from './components/Output';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const handleChangeTab = (_e, newValue) => setValue(newValue);
  return (
    <>
      <Card
        style={{
          width: 'calc(100vw - 40px)',
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
            width: 'calc(100vw - 40px)',
            margin: '20px',
          }}
        >
          <Form />
        </Card>
      )}
      {value === 1 && (
        <Card
          style={{
            width: 'calc(100vw - 40px)',
            margin: '20px',
          }}
        >
          <Output />
        </Card>
      )}
    </>
  );
}

export default App;
