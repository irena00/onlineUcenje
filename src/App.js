 
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';
import Courses from './Courses';
import Course from './Course'; 
import Profesor from './Profesor';
import ProfesorKurs from './ProfesorKurs';
import Update from './Update';
import Insert from './Insert'; 
import OpstaKultura from './OpstaKultura';
import Statistike from './Statistike';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchCourses();
    fetchUsers();
  }, []);

  const fetchCourses = () => {
    axios.get('http://127.0.0.1:8000/api/courses')
      .then(response => {
        setCourses(response.data.data || []);
      })
      .catch(error => {
        console.error("There was an error fetching the courses!", error);
      });
  };

  const fetchUsers = () => {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        setUsers(response.data.data || []);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  };
  return (
    <Router>
        
        <Navbar></Navbar>
        <Routes>
        <Route path="/insert/:id" element={   <Insert></Insert>} />
         
        <Route path="/update/:id" element={   <Update></Update>} />
        <Route path="/stats" element={   <Statistike users={users} kursevi={courses}></Statistike>} />

        <Route path="/profesor" element={   <Profesor></Profesor>} />
        <Route path="/profesor/kursevi/:id" element={   <ProfesorKurs></ProfesorKurs>} />
        
       
          <Route path="/register" element={   <Register></Register>} />
          <Route path="/opstakultura" element={   <OpstaKultura></OpstaKultura>} />

          <Route path="/kursevi" element={   <Courses></Courses>} />
          <Route path="/kursevi/:id" element={   <Course></Course>} />
         
          <Route path="/" element={   <Login></Login>} />
          
        </Routes>
        
    </Router>
 
  );
}

export default App;
