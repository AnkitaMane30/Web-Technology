import { useState } from 'react'
import { BrowserRouter, Route,Router,Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StateEx from './StateEx'
import Counter from './Counter'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact'
import About from './Components/About'
import Home from './Components/Home'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path= "/About" element = {<About/>}></Route>
          <Route path = "Contact" element = {<Contact/>}></Route>
        </Routes>

      </BrowserRouter>
      {/* <StateEx fname="Ankita" age="21" course="AIML"/>
      <Counter/> */}
    </>
  )
}

export default App
