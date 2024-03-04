import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Assignments from './components/Assignments';
import Contact from './components/Contact';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header/>,
    },
    {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/assignments",
        element: <Assignments/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<RouterProvider router={router}>
<App />
</RouterProvider>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
