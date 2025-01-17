import './App.css'
import Home from './Components/Home'
import React from 'react'
import {BrowserRouter} from "react-router-dom"
function App() {


  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  )
}

export default App
