import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Course.css';

function ProfesorKurs() {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]); 

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/courses/${id}/lessons`)
      .then(response => {
        setLessons(response.data.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, [id]);
 
 

  const deleteLesson = lessonId => {
    axios.delete(`http://127.0.0.1:8000/api/lessons/${lessonId}`)
      .then(() => {
        setLessons(prevLessons => prevLessons.filter(lesson => lesson.id !== lessonId));
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

 

  return (
    <div className="course-container">
      <h2>Lessons</h2>

      
      <button><Link to={`/insert/${id}`}>Add </Link></button>
 

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map(lesson => (
            <tr key={lesson.id}>
              <td>{lesson.title}</td>
              <td>{lesson.content}</td>
              <td>{lesson.order}</td>
              <td>
 
                <button><Link to={`/update/${lesson.id}`}>Update </Link></button>
                <button onClick={() => deleteLesson(lesson.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfesorKurs;
