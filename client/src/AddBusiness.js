import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './AddBussiness.module.css';

export default () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const temp = {};

    temp[e.target.name] = e.target.value;
    this.setState(temp);
  };
  return (
    <div
      className={`container ${styles.mainDiv}`}
      style={{ textAlign: 'center' }}
    >
      <h1 style={{ fontWeight: '700', margin: '30px' }}>Add Your Business</h1>
      <div>
        <Form>
          <Form.Group>
            <input
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              name="name"
              placeholder="NAME"
              className={styles.smallInput}
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              value={address}
              onChange={e => {
                setAddress(e.target.value);
              }}
              name="address"
              placeholder="ADDRESS"
              className={styles.smallInput}
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              value={hours}
              onChange={e => {
                setHours(e.target.value);
              }}
              name="hours"
              placeholder="HOURS"
              className={styles.smallInput}
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
              name="phone"
              placeholder="PHONE"
              className={styles.smallInput}
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              value={website}
              onChange={e => {
                setWebsite(e.target.value);
              }}
              name="website"
              placeholder="WEBSITE"
              className={styles.smallInput}
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
              name="message"
              placeholder="MESSAGE"
              className={styles.smallInput}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={e => {
              e.preventDefault();
              console.log(name, address, hours, phone, website, message);
            }}
            type="submit"
            className={styles.registerButton}
          >
            Submit Business
          </Button>
        </Form>
      </div>
    </div>
  );
};
