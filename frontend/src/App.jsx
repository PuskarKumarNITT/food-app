import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster></Toaster>
      <Outlet></Outlet>
      </>
  )
}

export default App
