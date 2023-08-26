import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
 

function Insert() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [lesson, setLesson] = useState({ title: '', content: '', order: 0 ,course_id:Number(id), video: ''});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLesson({...lesson, [name]: value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(lesson)
    axios.post(`http://127.0.0.1:8000/api/lessons`, lesson)
      .then(() => {
        navigate(`/profesor/kursevi/${id}`);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="update-form-container">
      <h2>Create Lesson</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={lesson.title} onChange={handleInputChange} required />
        <label>Content:</label>
        <textarea name="content" value={lesson.content} onChange={handleInputChange} required />
        <label>Order:</label>
        <input type="number" name="order" value={lesson.order} onChange={handleInputChange} required />
        <label>YouTube Link:</label>
        <input type="text" name="video" value={lesson.video} onChange={handleInputChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Insert;
