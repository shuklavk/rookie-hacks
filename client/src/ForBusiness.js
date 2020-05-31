import React from 'react';
import { Button } from 'react-bootstrap';

export default () => {
  return (
    <div
      className="container"
      style={{ textAlign: 'center', marginBottom: '40px' }}
    >
      <h1 style={{ margin: '30px 50px' }}>For Businesses</h1>
      <Button variant="primary" size="lg" style={{ width: '70%' }}>
        Register as opened
      </Button>
    </div>
  );
};
