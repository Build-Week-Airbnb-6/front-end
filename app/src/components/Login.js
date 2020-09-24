import React, { useState } from 'react';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';
export default function Login() {
  const defaultState = {
    username: '',
    password: '',
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState});
  let formSchema = yup.object().shape({
    username: yup.string().required('Input a username.'),
    terms: yup.boolean().oneOf([true], 'You must to the terms and conditions')
  });

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted!');
    axios.post(
      'https://camhonis-airbnb.herokuapp.com/login',
      `grant_type=password&username=${formState.username}&password=${formState.password}`,
      {
        headers: {
            Authorization: `Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then(res => {
        localStorage.setItem('token', res.data.access_token)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  const validateChange = e => {

    e.persist();
    if (e.target.value.length === 0) {
      setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} field is required`
      });
    }
  };
  const inputChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  };
  return (
    <form onSubmit={formSubmit}>
      <Input
        type='text'
        name='username'
        onChange={inputChange}
        value={formState.name}
        label='Username'
        errors={errors}
      />
      <Input
        type='password'
        name='password'
        onChange={inputChange}
        value={formState.motivation}
        label='Password'
        errors={errors}
      />
      <button>Submit</button>
    </form>
  );
}