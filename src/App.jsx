import { useState } from 'react'
import './App.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import AddNote from './Pages/AddNote';
import Delete from './Pages/Delete';
import Read from './Pages/Read';
import Layout from './Components/Layout';

function App() {
  

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [

        {
          path: "/",
          element: <Read />,
        },
        // other pages....
        {
          path: "/write",
          element: <AddNote />,
        },
        {
          path: "/delete",
          element: <Delete />,
        },

      ],
    },
    
  ])

  return (
    <RouterProvider router = {router} />
    
  )
}



export default App
