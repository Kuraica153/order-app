import { useState } from 'react'
import { Routes, Route, useParams, useLocation, useNavigate, Navigate } from 'react-router-dom'  
import SignUp from './components/SignUp/SignUp'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UpdatePage } from './pages/UpdatePage'
import { AgregarOrden } from './pages/AgregarOrden'
import { useEffect } from 'react'

const setToken = (token) => {
  sessionStorage.setItem('token', JSON.stringify(token));
}

const getToken = () => {
  return sessionStorage.getItem('token')
}

const clearToken = () => {
  sessionStorage.removeItem('token');
  <Navigate to="/" />
}

function App() {
  
  const token = getToken();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (!token) {
      if( pathname !== '/signup' && pathname !== '/'){
        navigate('/');
      }
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="556630088210-j00tptsmnast1kc4csb0oap1cudq8h29.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} />} />
        <Route path="/signup" element={<SignUpPage setToken={setToken} />} />
        <Route path="/home" element={<HomePage clearToken={clearToken} />} />
        <Route path="/edit/:id" element={<UpdatePage clearToken={clearToken} />} />
        <Route path="/order" element={<AgregarOrden clearToken={clearToken} />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
