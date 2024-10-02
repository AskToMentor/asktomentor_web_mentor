import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import im from "../../assets/instru.png"; // Adjust the path as needed
import axios from 'axios'; // Import axios for API calls

const SenarioBasedForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        google_api_key: '' // Updated to match your desired structure
    });
    const [error, setError] = useState(null); // State to store error message
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            name: formData.name,
            profession: formData.profession,
            google_api_key: formData.google_api_key
        };

        try {
            const response = await axios.post('http://13.233.84.146:5000/generate_scenarios', dataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.scenarios && response.data.scenarios.length > 0) {
                navigate('/scenariobasedquestions', { state: { scenarios: response.data.scenarios } });
            } else {
                setError('No scenarios found in the response.');
            }
        } catch (error) {
            console.error('Error fetching scenarios:', error);
            setError('Error fetching scenarios. Please try again.');
        }
    };

    return (
        <div className='flex h-screen flex-col'>
            <div className='flex flex-col lg:flex-row flex-grow mt-4 mb-8'>
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
                                    name="google_api_key"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                                    value={formData.google_api_key}
                                    onChange={handleInputChange}
                                    placeholder="Enter your API Key"
                                    required
                                />

                            </div>
                            
                            <div className='w-full max-w-[300px] mx-auto'>
                            <input
            type='file'
            className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
            onChange={(e) => setFile(e.target.files[0])}
            accept='.pdf,.doc,.docx,.txt' // Adjust accepted file types as needed
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
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>

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
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-16'></div>
        </div>
    );
};

export default SenarioBasedForm;
