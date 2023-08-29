import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OpstaKultura() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = () => {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
             .then(response => {
                 setQuestions(response.data.results);
                 setCurrentQuestion(0);
                 setFeedback(null);
                 setSelectedAnswer(null);
                 setCorrectAnswersCount(0);
                 setQuizFinished(false);
             })
             .catch(error => {
                 console.error("There was an error fetching the questions:", error);
             });
    };

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        if (answer === questions[currentQuestion].correct_answer) {
            setFeedback('Correct answer!');
            setCorrectAnswersCount(prevCount => prevCount + 1);
        } else {
            setFeedback(`Wrong answer! The correct answer is: ${questions[currentQuestion].correct_answer}`);
        }
    };

    const goToNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setFeedback(null);
        } else {
            setQuizFinished(true);
        }
    };

    if (!questions.length) return <div>Loading...</div>;

    const allAnswers = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer].sort(() => Math.random() - 0.5);

    return (
        <div className="quiz-container">
            {!quizFinished ? (
                <>
                    <h2 dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
                    {allAnswers.map(answer => (
                        <button key={answer} onClick={() => handleAnswerClick(answer)} dangerouslySetInnerHTML={{ __html: answer }} />
                    ))}
                    {feedback && <div className="feedback">{feedback}</div>}
                    {feedback && <button onClick={goToNextQuestion}>Next Question</button>}
                </>
            ) : (
                <>
                    <h2>Your result</h2>
                    <p>You answered {correctAnswersCount} out of {questions.length} questions correctly!</p>
                    <button onClick={fetchQuestions}>Start Again</button>
                </>
            )}
        </div>
    );
}

export default OpstaKultura;
