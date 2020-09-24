import React, { useState, useEffect } from 'react';
import Input from './Input';
import * as yup from 'yup';
import AxiosWithAuth from "./AxiosAuth"

export default function Form() {
  const defaultState = {
    username: '',
    primaryemail: '',
    password: '',
    terms: false
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState, terms: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  
  let formSchema = yup.object().shape({
    username: yup.string().required('Input a username.'),
    primaryemail: yup.string().required('Input an email.').email('Not a valid email.'),
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
    AxiosWithAuth().post('/users/user', formState)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
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
        value={formState.username}
        label='Username'
        errors={errors}
      />
      <Input
        type='email'
        name='primaryemail'
        onChange={inputChange}
        value={formState.primaryemail}
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