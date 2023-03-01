import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutMe from './pages/about_me';
import Contact from './pages/contact'
import MainPage from './pages/main';
import Projects from './pages/projects';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Education from './pages/education';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage/>
      },
      {
        path: "/about_me",
        element: <AboutMe/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/education",
        element: <Education/>
      }
    ]
  },
])

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
