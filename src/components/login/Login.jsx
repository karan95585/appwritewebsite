// BusinessLogin.js

import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import {login as authLogin} from '../../store/authSlice'
import { useDispatch } from 'react-redux';
import authService  from '../../appwrite/auth';
import {useForm} from "react-hook-form"
import Input from '../Input';
import Button from '../button';
import Logo from '../Logo';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
// Import your internal CSS file

const Login = () => {
  
  const containerStyle = {
    height: '100vh',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const inputStyle = {
    borderRadius: '0.5rem', // Adjust the border-radius as needed
    border: '1px solid #ced4da', // Adjust the border color as needed
    paddingLeft: '10px', // Adjust the padding as needed
    height: '40px', // Adjust the height as needed
  };

  const cardStyle = {
    borderRadius: '1rem',
    maxWidth: '400px',
    backgroundColor: '#ffffff',
  };
  const labelStyle = {
    textAlign: 'left', // Align the label to the left
    marginLeft: '10px', // Adjust the left margin as needed
  };


  const forgotPasswordLinkStyle = {
    color: '#6c757d',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const signUpLinkStyle = {
    color: '#007bff',
  };

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
      setError("")
      try {
          const session = await authService.login(data)
          if (session) {
              const userData = await authService.getCurrentUser()
              if(userData) dispatch(authLogin(userData));
              navigate("/")
          }
      } catch (error) {
          setError(error.message)
      }
  }


  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default Login;
