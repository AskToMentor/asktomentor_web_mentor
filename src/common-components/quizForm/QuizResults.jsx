import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuizResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const quizData = location.state?.quizData;

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [textAnswers, setTextAnswers] = useState({});

    // Check if quizData is available from location state
    if (!quizData) {
        return <div className='text-white'>No quiz data available.</div>;
    }

    const handleAnswerSelect = (questionNumber, option) => {
        const answerLetter = option.split(')')[0].trim(); // Get 'a', 'b', 'c', or 'd'
        
        if (['a', 'b', 'c', 'd'].includes(answerLetter)) {
            setSelectedAnswers((prev) => ({
                ...prev,
                [questionNumber]: answerLetter,
            }));
        } else {
            console.warn(`Invalid option selected for question ${questionNumber}: ${option}`);
        }
    };

    const handleTextChange = (questionNumber, text) => {
        setTextAnswers((prev) => ({
            ...prev,
            [questionNumber]: text,
        }));
    };

    const handleSubmit = async () => {
        const apiKey = "AIzaSyC-rVIkqo29VSv3wWojloYqS8T4V2gP-NQ"; // Hard-coded API key
        const userId = "Devam";  // User ID

        const formattedAnswers = Object.entries({ ...selectedAnswers, ...textAnswers }).reduce((acc, [questionNumber, answer]) => {
            acc[questionNumber.toString()] = answer; // Ensure question numbers are strings
            return acc;
        }, {});

        console.log("Formatted answers being sent to API:", formattedAnswers);

        try {
            const response = await axios.post('http://13.233.30.179:5000/submit_answers', {
                api_key: apiKey,
                name: userId,
                answers: formattedAnswers,
            });
            console.log('Response:', response.data);

            // Navigate to the diagnostic report page with the API response data
            navigate('/diagnosticresult', {
                state: { report: response.data },
            });
        } catch (error) {
            console.error('Error submitting answers:', error.response ? error.response.data : error.message);
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Error Status:', error.response.status);
                // Handle 429 error specifically
                if (error.response.status === 429) {
                    console.warn("Rate limit exceeded. Please try again later.");
                }
            }
        }
    };

    return (
        <div className='bg-[#2F3B44] p-8 w-full h-screen overflow-y-auto'>
            <h2 className='text-white font-bold text-2xl mb-6'>Quiz Questions</h2>
            {quizData.questions.map((question, index) => (
                <div key={question.number} className='mb-4 p-4 border border-gray-600 rounded-lg bg-gray-800'>
                    <h3 className='text-white mb-2'>{`${question.number}. ${question.question}`}</h3>
                    {question.type === 'multiple_choice' && (
                        <div className={index < 2 ? 'flex flex-col' : 'flex flex-row'}>
                            {question.options.map(option => (
                                <button
                                    key={option}
                                    onClick={() => handleAnswerSelect(question.number, option)}
                                    className={`flex-1 p-2 m-1 rounded-md ${
                                        selectedAnswers[question.number] === option.split(')')[0].trim()
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-700 text-white hover:bg-blue-500'
                                    }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                    {index >= 7 && (
                        <textarea
                            className='w-full p-2 mt-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                            placeholder='Type your answer here...'
                            value={textAnswers[question.number] || ''}
                            onChange={(e) => handleTextChange(question.number, e.target.value)}
                        />
                    )}
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className='mt-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300'
            >
                Submit Answers
            </button>
        </div>
    );
};

export default QuizResults;
