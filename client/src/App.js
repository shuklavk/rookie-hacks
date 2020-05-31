import React from 'react';
import './App.css';
import OpenBusiness from './OpenBusiness';
import ForBusiness from './ForBusiness';
import Reopen from './Reopen';
import { useHistory } from 'react-router';
function App() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(yellow, #ABEBC6)',
        backgroundSize: 'cover',
        fontFamily: 'Noto Sans HK'
      }}
    >
      <header
        style={{
          textAlign: 'center',
          margin: '0px 0px 70px 0px',
          backgroundColor: '#ffb84d'
        }}
      >
        <h1 style={{ color: 'white', fontSize: '64px' }}>REOPENER</h1>
      </header>
      <div className="container">
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
    </div>
  );
}

export default App;
