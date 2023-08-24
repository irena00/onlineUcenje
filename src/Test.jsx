import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Test = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState([]);
    const [naslov, setNaslov] = useState();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/quizzes/${id}`)
            .then(response => {
                setQuiz(Object.values(response.data.data.questions));
                setNaslov(response.data.data.title)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            <h1>{naslov}</h1>
            {quiz && quiz.map((question) => (
                <div key={question.id}>
                    <h3>{question.question}</h3>
                    {question.answers && question.answers.map((answer) => (
                        <div key={answer.id}>
                            <input type="radio" id={`answer${answer.id}`} name={`question${question.id}`} value={answer.id} />
                            <label htmlFor={`answer${answer.id}`} style={{ color: 'black' }}>{answer.answer}</label>
                        </div>
                    ))}
                </div>
            ))}
            <button>Submit</button>
        </div>
    );
};

export default Test;
