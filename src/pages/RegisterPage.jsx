import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';
import "./styles/registerPage.css"
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const createUser = useAuth();
  const {handleSubmit, register,reset} = useForm()

  const submit = data =>{
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    createUser(url,data)
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "", 
    })
  }

  return (
    <div className='reg_cont'>
      <div>
      <form className='reg_form' onSubmit={handleSubmit(submit)}>
        <h3 className='reg_h3'>Sing Up</h3>
        <div className='reg_div'>
          <label htmlFor="name">Name</label>
          <input {...register("firstName")} id='name' type="text" />
        </div>
        <div className='reg_div'>
          <label htmlFor="last">Last Name</label>
          <input {...register("lastName")} id='last' type="text" />
        </div>
        <div className='reg_div'>
          <label htmlFor="email">Email</label>
          <input {...register("email")} id='email' type="email" />
        </div>
        <div className='reg_div'>
          <label htmlFor="password">Password</label>
          <input {...register("password")} id='password' type="password" />
        </div>
        <div className='reg_div'>
          <label htmlFor="phone">Phone</label>
          <input {...register("phone")} id='phone' type="number" />
        </div>
        <button className='log_btn'>Submit</button>
        <p>If you have a account <Link to="/login">"Click here"</Link> </p>
      </form>
      </div>
    </div>
  )
}

export default RegisterPage