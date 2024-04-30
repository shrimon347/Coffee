import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './layout/Root';
import AddCoffee from './pages/AddCoffee';
import UpdateCoffee from './pages/UpdateCoffee';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllProvider from './provider/AllProvider';
import CoffeeDetail from './pages/CoffeeDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        path: "/",
        element: <Home />,
        loader : () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/Coffee/:id",
        element: <CoffeeDetail />,
        loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllProvider><RouterProvider router={router} /></AllProvider>
  </React.StrictMode>,
)
