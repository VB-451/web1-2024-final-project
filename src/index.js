import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";

import MainPage from './pages/MainPage';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Generate from './pages/Generate';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/profile/:id",
    element: <Profile/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>,
  },
  {
    path: "/generate",
    element: <Generate/>
  }
]);

// let logged = {loggedIn : false, currentUserID : 0}
// localStorage.setItem('logged', JSON.stringify(logged));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
