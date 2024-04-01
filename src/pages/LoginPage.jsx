import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom';
import "./styles/loginPage.css"

const LoginPage = () => {

  const createToken = useAuth();
  const {handleSubmit, register, reset} = useForm()
  const [token, setToken] = useState(localStorage.getItem('token'));


  useEffect(() => {
  }, []);

  const submit = data =>{
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
    createToken(url, data)
    reset({
      email: "",
      password: "",
    })
    setToken(data)
  }

  const handleLogout = () =>{
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <div className="back_login">
      {token ? (
        <div className="log_global">
          <button className="log_btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="log_global">
          <h3>Welcome! Enter your email and password to continue</h3>
          <form className="log_form" onSubmit={handleSubmit(submit)}>
            <div className="log_div">
              <label htmlFor="user">Email:</label>
              <input {...register('email')} id="user" type="email" />
            </div>
            <div className="log_div">
              <label htmlFor="key">Password:</label>
              <input {...register('password')} id="key" type="password" />
            </div>
            <button className="log_btn">Submit</button>
          </form>
          <p className="pad">
            If you are not registered yet then you can{' '}
            <Link to="/register">register here</Link>
          </p>
        </div>
      )}
    </div>
  )
}

export default LoginPage