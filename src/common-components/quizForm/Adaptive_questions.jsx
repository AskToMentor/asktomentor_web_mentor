import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Adaptive_questions.css';

const DisplayQuiz = () => {
    const location = useLocation();
    const { quizData } = location.state;

    const [selectedAnswers, setSelectedAnswers] = useState(
        quizData.questions.reduce((acc, question) => {
            acc[question.number] = '';
            return acc;
        }, {})
    );

    const handleAnswerChange = (questionNumber, option) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionNumber]: option,
        }));
    };

    const handleSubmit = async () => {
        const data = {
            name: quizData.name,
            subject: quizData.subject,
            difficulty: quizData.difficulty,
            answers: selectedAnswers,
        };

        try {
            const res = await axios.post('http://127.0.0.1:5000/submit_answers', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert(`Results: ${res.data.message}`);
        } catch (err) {
            console.error('Error submitting answers:', err);
            alert(err.response ? `Error: ${err.response.data.message}` : 'Error: Unable to submit answers.');
        }
    };

    return (
        <div className='quiz-body'>
            <h2 className='text-white font-bold text-2xl mb-6'>Quiz: {quizData.name}</h2>
            <p className='text-white'>Subject: {quizData.subject}</p>
            <p className='text-white'>Difficulty: {quizData.difficulty}</p>
            <h3 className='text-white font-bold'>Questions:</h3>
            <div className='overflow-y-auto max-h-[60vh] w-full'>
                <ul className='list-disc pl-5'>
                    {quizData.questions.map((question) => (
                        <li key={question.number} className='text-white mb-4'>
                            {question.number}. {question.question}
                            <div className='options-container'>
                                {question.options.map((option, i) => (
                                    <div key={i} className='option'>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${question.number}`}
                                                value={option}
                                                checked={selectedAnswers[question.number] === option}
                                                onChange={() => handleAnswerChange(question.number, option)}
                                                className="mr-2"
                                            />
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button 
                onClick={handleSubmit}
                className='submit-button'
            >
                Submit Answers
            </button>
        </div>
    );
};

export default DisplayQuiz;
