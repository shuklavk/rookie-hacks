import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './AddBussiness.module.css';
import { useHistory } from 'react-router';

export default () => {
  let history = useHistory();
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
      style={{ backgroundImage: 'linear-gradient(to right, yellow , #8eedb6)' }}
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
      <div
        className={`container ${styles.mainDiv}`}
        style={{
          textAlign: 'center'
        }}
      >
        <h1 style={{ color: 'orange' }}>
          <strong>Congrats on pulling through!</strong>
        </h1>
        <h2>Let your community know</h2>
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
                placeholder="FRIENDLY REMINDERS"
                className={styles.smallInput}
              />
            </Form.Group>
            <h6
              style={{ fontSize: '10px', color: 'grey', paddingRight: '81px' }}
            >
              Ex: We will operate at 25 percent capacity, and masks will be
              required for customers and employees.
            </h6>
            <Button
              variant="primary"
              onClick={e => {
                e.preventDefault();
                history.push('/');
              }}
              type="submit"
              className={styles.registerButton}
            >
              Submit Business
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
