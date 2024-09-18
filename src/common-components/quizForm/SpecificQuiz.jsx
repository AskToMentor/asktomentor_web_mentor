import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import im from "../../assets/instru.jpg";

const SpecificQuiz = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        difficulty: '',
        file: null,
        api_key: ''
    });
    const [isOtherSubject, setIsOtherSubject] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIsOtherSubject(value === "other");
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = 'generate_quiz';
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
        navigate('/question-sheet', { state: { formData: formDataToSend, endpoint } });
    };

    return (
        <div className='flex h-screen flex-col'>
            <div className='flex flex-col lg:flex-row flex-grow'>
                {/* Form Section */}
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
                                    placeholder="Enter your API key"
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
                                <button className='w-full max-w-[200px] bg-[#124E66] hover:bg-[#212a31] text-white rounded-full py-2'>Start Quiz</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='lg:w-1/2 h-[93%] w-[90%] flex flex-col justify-between rounded-lg mr-5 bg-[#2F3B44] lg:pl-4'>
                    <div className='w-full max-w-[650px] mx-auto mt-6 mb-6'>
                        <img src={im} alt="Guruji" className='w-full max-w-[200px] h-auto rounded-lg mb-6 mx-auto' />
                        <div className='text-white'>
                            <h3 className='text-lg font-bold mb-4'>Instructions:</h3>
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>The question format will include a mix of multiple-choice, true/false, and question-answer types.</li>
                                <li>There will be no negative marking.</li>
                                <li>The tests will be randomly generated by AI.</li>
                                <li>You must submit your answers within the allotted time.</li>
                                <li>After you complete the questions, your marks will be displayed at the end.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Padding at the bottom to ensure equal space */}
            <div className='h-16'></div>
        </div>
    );
};

export default SpecificQuiz;
