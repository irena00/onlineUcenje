import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
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
    const generatePdf = () => {
        const content = [];
        
        questions.forEach((question, index) => {
            content.push({ text: `Question ${index + 1}: ${question.question}\n`, bold: true });
            question.incorrect_answers.concat(question.correct_answer).sort(() => Math.random() - 0.5).forEach(answer => {
                content.push(answer + '\n');
            });
            content.push('\n');
        });

        const documentDefinition = {
            content: content
        };

        pdfMake.createPdf(documentDefinition).download("questions.pdf");
    };
    
    return (
        <div className="quiz-container">
             <button onClick={generatePdf}>Generate PDF</button>
             <div id="pdfContent" style={{display: 'none'}}>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
                        {[...question.incorrect_answers, question.correct_answer]
                            .sort(() => Math.random() - 0.5)
                            .map(answer => (
                                <p key={answer} dangerouslySetInnerHTML={{ __html: answer }} />
                            ))}
                    </div>
                ))}
            </div>
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
