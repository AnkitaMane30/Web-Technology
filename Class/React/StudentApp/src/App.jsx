import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StateEx from './StateEx'
import Counter from './Counter'

function App() {
  return (
    <>
      <StateEx fname="Ankita" age="21" course="AIML"/>
      <Counter/>
    </>
  )
}

export default App
