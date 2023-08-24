import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Course.css';

function Course() {
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

  return (
    <div className="course-container">
      <h2>Lessons</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Order</th>
            <th>Lesson</th>

          </tr>
        </thead>
        <tbody>
          {lessons.map(lesson => (
            <tr key={lesson.id}>
              <td>{lesson.title}</td>
              <td>{lesson.content}</td>
              <td>{lesson.order}</td>
              <td><a href={lesson.video} target="_blank"  >POGLEDAJ LEKCIJU</a></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Course;
