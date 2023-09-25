import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import Home from './home/Home';
import './index.css'
import Donation from './donation/Donation';
import Statistics from './statistics/Statistics';
import ErrorPage from './errorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
    element: <Home></Home>
      },
      {
        path: "/donation",
    element: <Donation></Donation>
      },
      {
        path: "/statistics",
    element: <Statistics></Statistics>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
