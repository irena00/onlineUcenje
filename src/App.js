 
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';
import Courses from './Courses';
import Course from './Course';
import Test from './Test';
import Profesor from './Profesor';
import ProfesorKurs from './ProfesorKurs';
import Update from './Update';
import Insert from './Insert'; 
import OpstaKultura from './OpstaKultura';

function App() {
  return (
    <Router>
        
        <Navbar></Navbar>
        <Routes>
        <Route path="/insert/:id" element={   <Insert></Insert>} />
         
        <Route path="/update/:id" element={   <Update></Update>} />

        <Route path="/profesor" element={   <Profesor></Profesor>} />
        <Route path="/profesor/kursevi/:id" element={   <ProfesorKurs></ProfesorKurs>} />
        
          <Route path="/" element={   <Login></Login>} />
          <Route path="/register" element={   <Register></Register>} />
          <Route path="/opstakultura" element={   <OpstaKultura></OpstaKultura>} />

          <Route path="/kursevi" element={   <Courses></Courses>} />
          <Route path="/kursevi/:id" element={   <Course></Course>} />
          <Route path="/test/:id" element={   <Test></Test>} />

          
        </Routes>
        
    </Router>
 
  );
}

export default App;
