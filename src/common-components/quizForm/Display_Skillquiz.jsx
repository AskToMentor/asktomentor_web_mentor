import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const QuizDisplay = () => {
    const location = useLocation();
    const { quizData } = location.state || {}; // Get the quiz data from location state
    const [submitted, setSubmitted] = useState(false);

    if (!quizData) {
        return <p>No quiz data available.</p>; // Handle case with no data
    }

    const handleSubmit = () => {
        setSubmitted(true);
        // Here you can add logic to process the answers
        alert("Quiz submitted!"); // Placeholder for submission action
    };

    return (
        <div className='flex flex-col h-screen w-full'>
            <div className='flex-grow w-full bg-[#2F3B44] rounded-lg shadow-xl p-6 overflow-hidden'>
                <h2 className='text-white text-2xl font-bold mb-4'>Quiz: {quizData.name}</h2>
                <p className='text-white'>Subject: {quizData.subject}</p>
                <p className='text-white'>Difficulty: {quizData.difficulty}</p>
                <h3 className='text-white font-bold mt-4'>Questions:</h3>
                <div className='overflow-y-auto max-h-[60vh] mb-4'>
                    <ul className='list-disc pl-5'>
                        {quizData.questions.map((question) => (
                            <li key={question.number} className='text-white mb-4'>
                                <div>{question.number}. {question.question}</div>
                                <ul className='grid grid-cols-2 gap-4 pl-5'>
                                    {question.options.map((option, i) => (
                                        <li key={i} className='text-white border border-white p-2 rounded-lg hover:bg-[#3B4A55]'>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question-${question.number}`}
                                                    value={option}
                                                    className="mr-2 accent-[#124E66]" // Custom radio color
                                                />
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <button 
                        onClick={handleSubmit} 
                        className='bg-[#124E66] hover:bg-[#0E3A4D] text-white rounded-full py-2 px-6 transition duration-300 ease-in-out'
                    >
                        Submit Answers
                    </button>
                </div>
                {submitted && <p className="text-green-400 mt-4 text-center">Thank you for submitting your answers!</p>}
            </div>
        </div>
    );
};

export default QuizDisplay;
