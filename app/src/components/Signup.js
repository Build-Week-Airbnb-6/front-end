import React, { useState, useEffect } from 'react';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';

export default function Form() {
  const defaultState = {
    name: '',
    email: '',
    password: '',
    terms: false
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState, terms: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  
  let formSchema = yup.object().shape({
    name: yup.string().required('Input a username.'),
    email: yup.string().required('Input an email.').email('Not a valid email.'),
    terms: yup.boolean().oneOf([true], 'You must to the terms and conditions')
  });

  useEffect(() => {
    if (formState.terms) {
      setButtonDisabled(!formState.terms);
    }
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    console.log('Submitted!');
    axios
      .post('https://reqres.in/api/users', formState)
      .then(() => console.log('Submitted success'))
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
        name='name'
        onChange={inputChange}
        value={formState.username}
        label='Username'
        errors={errors}
      />
      <Input
        type='email'
        name='email'
        onChange={inputChange}
        value={formState.email}
        label='Email'
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
      <label className='terms' htmlFor='terms'>
        <input name='terms' type='checkbox' onChange={inputChange} />
        Terms & Conditions
      </label>
      <button disabled={buttonDisabled}>Signup!</button>
    </form>
  );
}