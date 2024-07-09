import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        errorElement : <App />
    },
    {
        path : '/about',
        element : <AboutPage />
    },
    {
        path : '/post/:id/:name',
        element : <Post />
    },
    {
        path : '/post/:id/',
        element : <Post />
    },
    {
        path : '/post',
        element : <Post />
    }

]);
ReactDOM.render(
    <React.StrictMode>
        {/* <App/> */}
        <RouterProvider router={router} />
    </React.StrictMode>    
,document.querySelector('#root'));