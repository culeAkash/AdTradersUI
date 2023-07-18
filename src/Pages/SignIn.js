import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import styles from '../Static/Styles/SignIn.module.css'

export default function SignIn() {
  return (
    <div className={styles.login}>
      <Row>
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
              <h2>SignIn as Admin</h2>
            </CardHeader>
            <div style={{ color: 'red', padding: '10px', marginLeft: '20px' }}>* All fields are mandatory</div>
            <CardBody>


              {/* form */}
              <Form className='mx-2'>
                <FormGroup>
                  <Label for='useremail'>Email : </Label>
                  <Input id='useremail' placeholder='Enter your email' type='email' />
                </FormGroup>

                <FormGroup>
                  <Label for='pass'>Password : </Label>
                  <Input id='pass' placeholder='Enter your password' type='password' />
                </FormGroup>

                <Container className='text-center' fluid>
                  <Button color='primary' type='submit' outline>Login</Button>
                  <Button color='warning' type='reset' className='mx-2'>Reset</Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
