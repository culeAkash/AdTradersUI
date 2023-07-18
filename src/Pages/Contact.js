import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here or make an API call

    // Reset the form fields
    setName('');
    setPhoneNumber('');
    setSubject('');
    setMessage('');
  };

  return (
    <Row className='my-5'>
      <Col
        xs={{
          size: '10',
          offset: '1'
        }
        }
        md={{
          size: '8',
          offset: '2'
        }}
        lg={{
          size: '6',
          offset: '3'
        }}
      >
        <Card outline color='dark'>
          <CardHeader className='text-center'>
            <h2>Contact Us</h2>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Phone Number:</Label>
                <Input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="subject">Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message:</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col></Row>
  );
};

export default Contact;
