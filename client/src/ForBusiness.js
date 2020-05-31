import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default props => {
  let history = useHistory();
  console.log(props.history);
  return (
    <div
      className="container"
      style={{ textAlign: 'center', marginBottom: '40px' }}
    >
      <h1 style={{ margin: '30px 50px' }}>For Businesses</h1>
      {/* <Link to="/addbusiness"> */}
      <Button
        variant="primary"
        size="lg"
        style={{ width: '70%' }}
        onClick={e => {
          // e.preventDefault();
          history.push('/addbusiness');
        }}
      >
        Register as opened
      </Button>
      {/* </Link> */}
    </div>
  );
};
