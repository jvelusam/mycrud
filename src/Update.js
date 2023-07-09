import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Update()
{

    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6428e084ebb1476fcc3f89be.mockapi.io/fakedata/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            <Link to='/Read'>
          </Link>
        })
    }


    return (  <Form className="create-form">
    <Form.Field >
        <label>First Name</label>
        <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field >
        <label>Last Name</label>
        <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field >
        <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
    </Form.Field>
    <Button type='submit' onClick={updateAPIData}>Update</Button>
</Form>);
}