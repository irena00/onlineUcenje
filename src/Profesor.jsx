import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  
import './Courses.css';
import { MDBDataTable } from 'mdbreact';

function Profesor() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();   

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Description',
        field: 'description'
      },
      {
        label: 'Price',
        field: 'price'
      },
      {
        label: 'Manage',
        field: 'manage'
      }
    ],
    rows: courses.map(course => ({
      name: course.name,
      description: course.description,
      price: course.price,
      manage: <Link to={`/profesor/kursevi/${course.id}`}>Manage</Link>
    }))
  };

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      
      {/* Dugme za navigaciju ka statistikama */}
      <button 
        className="stats-button" 
        onClick={() => navigate('/stats')}
      >
        Statistike
      </button>

      <MDBDataTable
        striped
        bordered
        hover
        data={data}
      />
    </div>
  );
}

export default Profesor;
