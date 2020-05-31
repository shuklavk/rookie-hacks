import React from 'react';
import './App.css';
import OpenBusiness from './OpenBusiness';
import ForBusiness from './ForBusiness';
import Reopen from './Reopen';

function App() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', margin: '30px 20px 70px 20px' }}>
        <h1>REOPENER</h1>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ width: '40%' }}>
          <OpenBusiness />
        </div>
        <div
          style={{
            width: '50%'
          }}
        >
          <ForBusiness style={{}} />
          <Reopen />
        </div>
      </div>
    </div>
  );
}

export default App;
