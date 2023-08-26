import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Courses.css';

function Profesor() {
  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div>
    
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Manage</th>
    

          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.price}</td>
              <td><Link to={`/profesor/kursevi/${course.id}`}>Manage </Link></td>
           

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profesor;
