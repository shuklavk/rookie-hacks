import React from 'react';
import { Button } from 'react-bootstrap';

export default () => {
  return (
    <div
      className="container"
      style={{ textAlign: 'center', marginBottom: '40px' }}
    >
      <h1>Considering whether to reopen?</h1>
      <Button variant="primary" size="lg" style={{ width: '70%' }}>
        Compare to our database
      </Button>
    </div>
  );
};
