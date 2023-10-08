/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Error from '../components/Error/Error';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import CardDetails from '../components/CardDetails/CardDetails';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>
                
            },
           {
            path: "/about",
            element: <About></About>
           },
           {
            path: "/contact",
            element: <Contact></Contact>
           },
           {
            path: "/register",
            element: <Register></Register>
           },
           {
            path: "/login",
            element: <Login></Login>
           },
           {
            path: "/cards/:id",
            element: <CardDetails></CardDetails>,
            loader: ()=>fetch('/event.json')
           }
        ]
    }
])
export default Router;