import React from 'react';
import './css/App.css';
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/header/Headers';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

import Home from './components/home/Home';
import About from './components/about us/About';

import Layout from './Layout';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';



function App() {
  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
          
            {/* Header as default route */}
            <Route path="/" element={<Layout/>} >
            <Route path="/home" element={<Home />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutUs" element={<About />} />

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
