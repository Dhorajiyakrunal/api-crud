import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

function Addpost() {

    // const [email, setemail] = useState('')
    // const [password, setpassword] = useState('')

    const navigate = useNavigate();

    const OnclickHandel = async (event) => {

        event.preventDefault()

        const data = {
            email : event.target.email.value,
            password : event.target.password.value
        }

        await axios ({
          method : "POST",
          url : "http://localhost:3000/posts",
          data,
        })

        navigate('/Home')
        console.log("DATA",data);
    }


  return (
    <Form className='col-4 mx-auto' onSubmit={OnclickHandel}>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Addpost;