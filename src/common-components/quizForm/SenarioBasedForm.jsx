import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import im from "../../assets/instru.jpg"; // Adjust the path as needed
import axios from 'axios'; // Import axios for API calls

const SenarioBasedForm = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        file: null,
        api_key: '' // New API key field
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('profession', formData.profession);
        formDataToSend.append('file', formData.file);
        formDataToSend.append('api_key', formData.api_key); // Append API key

        try {
            // Call the API here
            const response = await axios.post('http://http://13.235.67.80:5000/generate_scenarios', formDataToSend); // Replace with your API endpoint
            console.log(response.data);
            navigate('/next-step'); // Adjust the navigation as needed
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className='flex h-screen flex-col'>
            <div className='flex flex-col lg:flex-row flex-grow mt-4 mb-8'>
                {/* Form Section */}
                <div className='w-full lg:w-1/2 flex flex-col justify-between lg:pr-4'>
                    <div className='w-full max-w-[700px] mx-auto bg-[#2F3B44] rounded-lg shadow-xl p-8 flex-grow'>
                        <h2 className='text-white font-bold text-2xl mb-6'>Scenario-Based Exam</h2>
                        <form className='space-y-6 text-center items-center' onSubmit={handleSubmit}>
                            <div className='w-full max-w-[300px] mx-auto'>
                                <input
                                    type="text"
                                    name="name"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className='w-full max-w-[300px] mx-auto'>
                                <input
                                    type="text"
                                    name="profession"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                                    value={formData.profession}
                                    onChange={handleInputChange}
                                    placeholder="Enter your profession"
                                    required
                                />
                            </div>
                            <div className='w-full max-w-[300px] mx-auto'>
                                <input
                                    type="text"
                                    name="api_key" // New API key input
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                                    value={formData.api_key}
                                    onChange={handleInputChange}
                                    placeholder="Enter your API Key"
                                    required
                                />
                            </div>
                            <div className='w-full max-w-[300px] mx-auto'>
                                <p className='text-red-500 text-sm mt-1 text-right'> * Uploading a file is optional.</p>
                                <input
                                    type="file"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='w-full max-w-[300px] mx-auto'>
                                <button
                                    type="submit"
                                    className='bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300'
                                >
                                    Start Exam
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Instructions Section */}
                <div className='lg:w-1/2 w-full flex flex-col justify-between rounded-lg shadow-xl mr-5 bg-[#2F3B44] lg:pl-4 flex-grow'>
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
            <div className='h-16'></div> {/* Padding at the bottom */}
        </div>
    );
};

export default SenarioBasedForm;
