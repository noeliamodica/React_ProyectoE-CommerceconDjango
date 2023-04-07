import React, { useRef } from 'react';
import { Link, redirect } from 'react-router-dom';
import { Form, Row, Button, Col }  from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { setUser } from '../reducers/user/userSlice';

export default function LoginScreen() {
   
    const fullnameField = useRef(null);
    const emailField = useRef(null);
    const passwordField = useRef(null);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailField.current.value;
        const password = passwordField.current.value;
        axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then(response => {
          //me traigo el usuario buscado
          const user = response.data[0];

          if (user) {
            if (user.password === passwordField.current.value) {
              console.log("Credenciales válidas");
              dispatch(setUser({
                email: user.email,
                fullName: `${user.first_name} ${user.last_name}`,
                token: Date.now(),
              }));
            }
          }
        })
        .catch(error => {
            console.error("algo fallo");
        });
    };
    

   

  return (
    <FormContainer>
        <h1> Sign In </h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='fullname'>
                <Form.Label> FullName </Form.Label>
                <Form.Control 
                    type='fullname'
                    placeholder='Enter fullname'
                    ref={fullnameField}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label> Email Address </Form.Label>
                <Form.Control 
                    type='email'
                    placeholder='Enter email'
                    ref={emailField}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label> Password </Form.Label>
                <Form.Control 
                    type='password'
                    placeholder='Enter password'
                    ref={passwordField}
                >
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>  Sign In</Button>

        </Form>

        <Row className='py-3'>
            <Col>
                New Customer? <Link 
                to={redirect ? `/register'=${redirect}` : '/register'}> 
                Register </Link>
            </Col>
        </Row>
    </FormContainer>
  )
}
