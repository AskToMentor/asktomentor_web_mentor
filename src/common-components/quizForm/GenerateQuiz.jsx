import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import im from "../../assets/instru.jpg"; // Adjust the path as needed

const GenerateQuiz = () => {
    const [formData, setFormData] = useState({
        name: 'Devam',
        subject: '',
        difficulty: 'easy',
        num_questions: '10',
        api_key: ''
    });
    
    const [isOtherSubject, setIsOtherSubject] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubjectChange = (e) => {
        const value = e.target.value;
        setIsOtherSubject(value === 'other');
        setFormData((prevState) => ({
            ...prevState,
            subject: value === 'other' ? '' : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validQuestions = ['10', '20', '30'];
        if (!validQuestions.includes(formData.num_questions)) {
            alert("Please select a valid number of questions (10, 20, or 30).");
            return;
        }

        const data = {
            api_key: formData.api_key,
            name: formData.name,
            subject: formData.subject,
            difficulty: formData.difficulty,
            num_questions: parseInt(formData.num_questions, 10)
        };

        try {
            const res = await axios.post('http://13.235.67.80:5000/generate_quiz', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Response:", res.data);
            navigate('/Adaptive_questions', { state: { quizData: res.data } });
        } catch (err) {
            console.error("Axios Error:", err);
            alert(err.response ? `Error: ${err.response.status} - ${err.response.data.message}` : "Error: No response received from the server.");
        }
    };

    return (
        <div className='flex h-screen flex-col'>
            <div className='flex flex-col lg:flex-row flex-grow mt-4 mb-8'>
                <div className='lg:w-1/2 w-full flex flex-col justify-between lg:pr-4'>
                    <div className='w-full max-w-[700px] mx-auto bg-[#2F3B44] rounded-lg shadow-xl p-8 flex-grow'>
                        <h2 className='text-white font-bold text-2xl mb-6'>Generate Quiz</h2>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className='w-full max-w-[300px] mx-auto'>
                                    <select
                                        name="subject"
                                        className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                        value={formData.subject}
                                        onChange={handleSubjectChange}
                                    >
                                        <option value="">Select Subject</option>
                                        <option value="Math">Math</option>
                                        <option value="Science">Science</option>
                                        <option value="English">English</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                {isOtherSubject && (
                                    <div className='w-full max-w-[300px] mx-auto'>
                                        <input
                                            type="text"
                                            name="subject"
                                            className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                            placeholder="Enter Custom Subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className='w-full max-w-[300px] mx-auto'>
                                    <select
                                        name="num_questions"
                                        className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                        value={formData.num_questions}
                                        onChange={handleInputChange}
                                    >
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>
                            </div>

                            <div className='w-full max-w-[300px] mx-auto'>
                                <select
                                    name="difficulty"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                    value={formData.difficulty}
                                    onChange={handleInputChange}
                                >
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>

                            <div className='w-full max-w-[300px] mx-auto'>
                                <input
                                    name='api_key'
                                    value={formData.api_key}
                                    type="text"
                                    placeholder='Enter API Key'
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='flex justify-center'>
                                <button type="submit" className='rounded-full max-w-[200px] transition duration-500 w-full bg-[#124E66] hover:bg-[#212a31] text-white py-2'>
                                    Generate Quiz
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='lg:w-1/2 w-full flex flex-col justify-between rounded-lg shadow-xl bg-[#2F3B44] lg:pl-4 flex-grow mr-6'>
                    <div className='w-full max-w-[650px] mx-auto mt-6 mb-3'>
                        <img src={im} alt="Instructions" className='w-full max-w-[200px] h-auto rounded-lg mb-6 mx-auto' />
                        <div className='text-white'>
                            <h3 className='text-lg font-bold mb-4'>Instructions:</h3>
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>The question format will include a mix of multiple-choice, true/false, and question-answer types.</li>
                                <li>There will be no negative marking.</li>
                                <li>The tests will be randomly generated by AI.</li>
                                <li>You must submit your answers within the allotted time.</li>
                                <li>After you complete the questions, your marks will be displayed at the end.</li>
                            </ul>
                            <div className='mt-6'>
                                <h3 className='text-lg font-bold mb-2'>FAQ:</h3>
                                <ul className='list-disc pl-5 space-y-2'>
                                    <li>
                                        <a href="http://www.guruji.com" className='text-blue-400 underline'>How to choose API keys</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateQuiz;
