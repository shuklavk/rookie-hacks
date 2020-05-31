import React, { useState } from 'react';
import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
import states from './arrayOfStates';
import counties from './arrayOfCounties';
import typesOfBusiness from './arrayTypesOfBusiness';

export default () => {
  const [state, setState] = useState('');
  const [county, setCounty] = useState('');
  const [business, setBusiness] = useState('');

  const stateOptions = states.map(state => {
    return <option>{state}</option>;
  });

  const countyOptions = counties.map(county => {
    return <option>{county}</option>;
  });

  const businessOptions = typesOfBusiness.map(business => {
    return <option>{business}</option>;
  });
  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>See Which Businesses Are Open</h1>
      </header>
      <Form>
        <Form.Group controlId="ControlSelect1">
          <Form.Label>Your State</Form.Label>
          <Form.Control
            as="select"
            onChange={e => {
              setState(e.target.value);
            }}
          >
            {stateOptions}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="ControlSelect2">
          <Form.Label>Your County</Form.Label>
          <Form.Control
            as="select"
            onChange={e => {
              setCounty(e.target.value);
            }}
          >
            {countyOptions}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="ControlSelect3">
          <Form.Label>Type of Business</Form.Label>
          <Form.Control
            as="select"
            onChange={e => {
              setBusiness(e.target.value);
            }}
          >
            {businessOptions}
          </Form.Control>
        </Form.Group>
      </Form>
      <div className="mb-2" style={{ textAlign: 'center' }}>
        <Button
          variant="primary"
          size="lg"
          style={{ width: '70%' }}
          onClick={e => {
            console.log(state, county, business);
          }}
        >
          Go
        </Button>
      </div>
    </div>
  );
};
