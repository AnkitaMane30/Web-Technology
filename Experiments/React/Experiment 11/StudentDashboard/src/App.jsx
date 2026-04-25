import { useState } from 'react'
import { BrowserRouter, Route,Router,Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar';
import StudentList from './Components/StudentList';
import AddStudent from './Components/AddStudent';
import Home from './Components/Home';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) =>{
    const newStudent = {
      ...student,
      id: students.length + 1
    };
    setStudents([...students, newStudent])
  }

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/students" element={<StudentList students= {students}/>} ></Route>
            <Route path="/add" element={<AddStudent addStudent={addStudent} />} ></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
