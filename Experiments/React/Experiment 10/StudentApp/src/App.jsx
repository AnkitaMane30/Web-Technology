import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  
  const students = [
    {
      id: 1,
      name: "Ankita",
      age: 21,
      course: "AIML"
    },
    {
      id: 2,
      name: "Rahul",
      age: 22,
      course: "CSE"
    },
    {
      id: 3,
      name: "Priya",
      age: 20,
      course: "IT"
    }
  ];

  const showMessage = () =>{
    alert("Button Clicked!!");
  }

  return (
    <>
    <h1>Student Info: </h1>
    <button onClick={showMessage}> Click Me </button>

      {
        students.map((student)=>(
          <>
          <Student key={student.id} data={student} />
          </>
        ))
      }
    </>
  )
}

export default App
