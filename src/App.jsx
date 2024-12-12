import React from 'react'
import Register from './register/Register'
import app from './firebase.config'
import   { ToastContainer } from 'react-toastify';
import Login from './Login/Login';
import RootLayout from './RootLayout/RootLayout';
import { Route } from 'react-router-dom';

import { createRoutesFromElements,createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    <Route path="/" element={<RootLayout />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    
      
    </Route>
  )
);       

const App = () => {
  



  return (
    <div>
       <RouterProvider router={router} />
      <ToastContainer/>
  
    </div>
  )
}

export default App
