import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    let navigate= useNavigate();
    const [lesson, setLesson] = useState({ title: '', content: '', order: 0 });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/lessons/${id}`)
      .then(response => {
        setLesson(response.data.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLesson({...lesson, [name]: value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/lessons/${id}`, lesson)
      .then(() => {
        navigate(`/profesor`);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="update-form-container">
    <h2>Edit Lesson</h2>
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={lesson.title} onChange={handleInputChange} required />
      <label>Content:</label>
      <textarea name="content" value={lesson.content} onChange={handleInputChange} required />
      <label>Order:</label>
      <input type="number" name="order" value={lesson.order} onChange={handleInputChange} required />
      <button type="submit">Update</button>
    </form>
  </div>
  );
};

export default Update;
