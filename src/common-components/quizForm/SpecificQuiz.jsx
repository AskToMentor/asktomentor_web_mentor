import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SpecificQuiz = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        difficulty: '',
        file: null,
        api_key: ''
    });
    const [isOtherSubject, setIsOtherSubject] = useState(false);
    const navigate = useNavigate();
    // Handle input changes for text inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (value === "other") {
            setIsOtherSubject(true);
            setFormData({
                ...formData,
                [name]: value,
            });
            return;
        } else {
            setIsOtherSubject(false);
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    // Handle file upload changes
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = 'generate_quiz'
        // Create a FormData object for file upload
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('api_key', formData.api_key);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('difficulty', formData.difficulty);
        formDataToSend.append('file', formData.file);

        navigate('/question-sheet', { state: { formData: formDataToSend, endpoint } });
    };

    return (
        <div className='px-6 py-10  h-full overflow-y-auto flex items-center justify-center'>
            <div className='max-w-[700px]   w-full mx-auto bg-[#2F3B44] rounded-lg shadow-xl p-8'>
                <h2 className='text-white text-3xl font-bold mb-8 text-center'>Skill-Specific Quiz</h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label className='text-white block mb-2 text-lg font-medium'>Subject</label>
                        <select
                            name="subject"
                            className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none'
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
                    {
                        isOtherSubject && <div>
                            <label className='text-white block mb-2 text-lg font-medium'>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                placeholder="Enter quiz subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                        </div>
                    }

                    <div>
                        <label className='text-white block mb-2 text-lg font-medium'>Difficulty</label>
                        <input
                            type="text"
                            name="difficulty"
                            className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder="Enter difficulty level"
                            value={formData.difficulty}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className='text-white block mb-2 text-lg font-medium'>API Key</label>
                        <input
                            type="text"
                            name="api_key"
                            className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder="Enter your name"
                            value={formData.api_key}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className='text-white block mb-2 text-lg font-medium'>Upload File</label>
                        <input
                            type="file"
                            className='w-full py-3 px-4 rounded-lg bg-[#1F2A33] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='text-center'>
                        <button className='rounded-full max-w-[200px] transition duration-500 w-full bg-[#124E66] hover:bg-[#212a31] text-white'> Start Quiz</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpecificQuiz;
