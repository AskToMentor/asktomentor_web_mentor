import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import im from "../../assets/instru.png"; // Adjust the path as needed

const ProblemSolvingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        field_of_study: '',
        google_api_key: ''
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
            field_of_study: formData.field_of_study,
            google_api_key: formData.google_api_key
        };

        try {
            const response = await axios.post('http://65.2.34.110:5000/generate_problem', dataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.problem) {
                navigate('/problemBasedQuestions', { state: { problem: response.data.problem } });
            } else {
                setError('No problem found in the response.');
            }
        } catch (error) {
            console.error('Error fetching problem:', error);
            setError('Error fetching problem. Please try again.');
        }
    };

    return (
        <div className='flex h-screen flex-col'>
            <div className='flex flex-col lg:flex-row flex-grow mt-4 mb-8'>
                <div className='w-full lg:w-1/2 flex flex-col justify-between lg:pr-4'>
                    <div className='w-full max-w-[700px] mx-auto bg-[#2F3B44] rounded-lg shadow-xl p-8 flex-grow'>
                        <h2 className='text-white font-bold text-2xl mb-6'>Problem Solving Exercise</h2>
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
                                    name="field_of_study"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                                    value={formData.field_of_study}
                                    onChange={handleInputChange}
                                    placeholder="Enter your field of study"
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
                                <button
                                    type="submit"
                                    className='bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300'
                                >
                                    Start Problem Solving
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
                                <li>Follow the problem statement carefully and adhere to all guidelines.</li>
                                <li>Submit your solutions before the deadline.</li>
                                <li>Ensure that your solution is well-explained and well-documented.</li>
                                <li>Refer to the provided instructions and constraints while working.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-16'></div>
        </div>
    );
};

export default ProblemSolvingForm;
