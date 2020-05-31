import React from 'react';
import { Button } from 'react-bootstrap';

export default () => {
  return (
    <div
      className="container"
      style={{ textAlign: 'center', marginBottom: '40px' }}
    >
      <h1>
        Considering{' '}
        <span style={{ color: 'orange' }}>
          <strong>reopening</strong>
        </span>
        ?
      </h1>
      <h2>Let us help</h2>
      <Button variant="primary" size="lg" style={{ width: '70%' }}>
        Compare with our community
      </Button>
    </div>
  );
};
