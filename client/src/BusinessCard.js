import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default ({ card }) => {
  return (
    <div>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={card.img} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>{card.address}</Card.Text>
          <Card.Text>{card.hours}</Card.Text>
          <Card.Text>{card.phone}</Card.Text>
          <Card.Text>{card.website}</Card.Text>
          <Card.Text>{card.message}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};
