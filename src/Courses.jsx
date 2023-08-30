import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Courses.css';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('asc');
  const [exchangeRates, setExchangeRates] = useState({}); // Dodatno stanje za kursne liste

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  useEffect(() => {
    const sortArray = type => {
      const types = {
        asc: 'asc',
        desc: 'desc',
      };
      const sortProperty = types[type];
      let sorted = [...courses];
      if (sortProperty === 'asc') {
        sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sorted = sorted.sort((a, b) => b.name.localeCompare(a.name));
      }
      setCourses(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/EUR')  
      .then(response => {
        setExchangeRates(response.data.rates);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  const convertCurrency = (amount, currency) => {
    const exchangeRate = exchangeRates[currency];
    return (amount * exchangeRate).toFixed(2);
  };

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div>
        <input 
          type="text" 
          placeholder="Search courses..." 
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price (EUR)</th>
            <th>Price (RSD)</th>
            <th>Open Course</th>
           
          </tr>
        </thead>
        <tbody>
          {courses.filter(course => course.name.toLowerCase().includes(search.toLowerCase())).map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.price}</td>
              <td>{convertCurrency(course.price, 'RSD')}</td>
              <td><Link to={`/kursevi/${course.id}`}>Open Course</Link></td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
