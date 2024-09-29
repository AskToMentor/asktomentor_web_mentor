import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Update to useNavigate
import im from "../../assets/instru.png"; // Adjust the path as needed

const SpecificQuiz = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        name: 'Harsh',
        subject: '',
        difficulty: '',
        file: null,
        api_key: ''
    });
    const [isOtherSubject, setIsOtherSubject] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIsOtherSubject(value === "other");
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { subject, difficulty, api_key } = formData;

        try {
            const response = await axios.post('http://13.235.67.80:5000/generate_quiz', {
                api_key,
                name: formData.name,
                subject,
                difficulty,
                num_questions: 10, // Default value
            });

            console.log("Response Data:", response.data);
            setError(''); // Clear previous errors

            // Navigate to the QuizDisplay page with quizData
            navigate('/Skill_quiz_questions', { state: { quizData: response.data } });

        } catch (error) {
            if (error.response) {
                console.error("Error Response:", error.response.data);
                setError(`Error: ${error.response.status} - ${error.response.data.message}`);
            } else if (error.request) {
                console.error("Error Request:", error.request);
                setError("Error: No response received from the server. Please check the server status.");
            } else {
                console.error("Error Message:", error.message);
                setError(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className='flex h-screen flex-col'>
            <div className='flex flex-col lg:flex-row flex-grow mt-4'>
                <div className='w-full lg:w-1/2 flex flex-col justify-between lg:pr-4'>
                    <div className='w-full max-w-[700px] mx-auto bg-[#2F3B44] rounded-lg shadow-xl p-24'>
                        <h2 className='text-white text-3xl font-bold mb-8 -ml-9 text-left'>Skill-Specific Quiz</h2>
                        <form onSubmit={handleSubmit} className='space-y-6 flex flex-col items-center'>
                            <div className='w-[300px]'>
                                <select
                                    name="subject"
                                    className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white'
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Subject</option>
                                    <option value="Math">Math</option>
                                    <option value="Science">Science</option>
                                    <option value="English">English</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {isOtherSubject && (
                                <div className='w-[300px]'>
                                    <input
                                        type="text"
                                        name="subject"
                                        className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white'
                                        placeholder="Enter quiz subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
                            <div className='w-[300px]'>
                                <select
                                    name="difficulty"
                                    className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white'
                                    value={formData.difficulty}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Difficulty</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                            <div className='w-[300px]'>
                                <input
                                    type="text"
                                    name="api_key"
                                    className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white'
                                    placeholder="Enter API key"
                                    value={formData.api_key}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='w-[300px]'>
                                <input
                                    type="file"
                                    className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white'
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='text-center'>
                                <button className='w-full max-w-[200px] bg-[#124E66] border-none outline-none text-white rounded-full py-2'>Start Quiz</button>
                            </div>
                        </form>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </div>
                </div>

                <div className='lg:w-1/2 h-[95.5%] w-[90%] flex flex-col justify-between rounded-lg shadow-xl mr-5 bg-[#2F3B44] lg:pl-4'>
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
                                        <a href="/howtogenerateapi" className='text-blue-400 underline'>How to choose API keys</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-16'></div>
        </div>
    );
};

export default SpecificQuiz;
