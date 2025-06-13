import { useState } from 'react';
import './App.css'
import {Routes, Route} from "react-router-dom"
import Nav from './components/Nav';
import { AuthProvider } from './context/AuthContext';

//pages imports

import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';



function App() {

  return (
    <AuthProvider>
      <Nav/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </AuthProvider>
  )
}

export default App
