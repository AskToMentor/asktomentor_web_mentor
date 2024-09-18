import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../interceptor/interceptor';
const QuestionSheet = () => {
    const [questions, setQuestions] = useState([
        {
            question: 'Which CSS property is used to change the text color of an element?',
            options: ['color', 'background-color', 'text-color', 'font-color'],
        },
        {
            question: 'Which CSS selector targets all <p> elements inside a <div> element?',
            options: ['div p', 'div + p', 'div ~ p', 'div > p'],
        },
        {
            question: 'Which CSS selector targets all <p> elements inside a <div> element?',
            options: ['div p', 'div + p', 'div ~ p', 'div > p'],
        },
        {
            question: 'Which CSS selector targets all <p> elements inside a <div> element?',
            options: ['div p', 'div + p', 'div ~ p', 'div > p'],
        },
        {
            question: 'Which CSS selector targets all <p> elements inside a <div> element?',
            options: ['div p', 'div + p', 'div ~ p', 'div > p'],
        },

    ]);
    const [answers, setAnswers] = useState({});
    const location = useLocation();
    const { formData, endPoint } = location.state || {};

    // Fetch questions from API on component mount
    const fetchQuestions = async () => {
        try {
            const response = await axiosInstance.post(
                `https://your-api-endpoint.com/${endPoint}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };
    useEffect(() => {
        fetchQuestions();
    }, []);

    // Handle answer selection for each question
    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(answers).length !== questions.length) {
            alert("Please answer all questions");
            return;
        };
        console.log('Submitted Answers:', answers);
        const finalData = {
            name: "Test name",
            answers
        }
    };

    return (
        <div className="max-h-screen flex flex-col items-center justify-center bg-[#212a31] p-4 h-full ">
            <div className="bg-[#2F3B44] text-white p-6 rounded-lg shadow-md w-full max-w-4xl h-[600px] overflow-y-auto scrollbar-hide ">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Subject: CSS</h2>
                    <p className="text-lg">Name: Harsh Bhasin</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {questions.length > 0 ? (
                        questions.map((question, index) => (
                            <div key={index} className="mb-6 bg-gray-700 p-4 rounded-lg shadow-lg">
                                <h3 className="font-bold mb-4">{`Question ${index + 1}: ${question.question}`}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {question.options.map((option, optionIndex) => {
                                        const optionLetter = String.fromCharCode(97 + optionIndex); // ASCII 'a', 'b', 'c', 'd'...
                                        const questionNumber = index + 1;
                                        return (
                                            <label
                                                key={optionIndex}
                                                className={`flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer transition-all
                ${answers[questionNumber] === optionLetter ? 'shadow-lg border border-indigo-500' : 'shadow-sm'}
                `}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`${questionNumber}`}
                                                    value={optionLetter}
                                                    checked={answers[questionNumber] === optionLetter}
                                                    onChange={(e) => handleChange(e)}
                                                    className="form-radio text-indigo-600 mr-2 hidden"
                                                />
                                                <span className="text-white mr-2">{`${optionLetter})`}</span>
                                                <span className="text-white">{option}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400">Loading questions...</p>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                        >
                            Submit Quiz
                        </button>
                    </div>
                </form>

                    
            </div>
        </div>
    );
};

export default QuestionSheet;
