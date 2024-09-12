import React, { useState } from 'react';
import skill from '/src/gif-assets/skills.png';

const SenarioBasedForm = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        file: null, // To store the uploaded file
    });

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
            file: e.target.files[0], // Store the uploaded file
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to handle file uploads
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('profession', formData.profession);
        formDataToSend.append('file', formData.file);
        try {
            // Call the API here
            // await axios.post('/your-api-endpoint', formDataToSend);
        } catch (error) {
            console.error('Error uploading the file:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-[#2F3B44] text-white rounded-lg shadow-lg w-full max-w-4xl p-8">
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:w-2/3 w-full lg:pr-8'>
                        <h2 className='text-white font-bold text-2xl mb-6'>Scenario-Based Exam</h2>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label className='block text-sm font-semibold mb-1'>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-semibold mb-1'>Profession:</label>
                                <input
                                    type="text"
                                    name="profession"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                                    value={formData.profession}
                                    onChange={handleInputChange}
                                    placeholder="Enter your profession"
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-semibold mb-1'>Upload File:</label>
                                <input
                                    type="file"
                                    className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className='bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300'
                                >
                                    Start Exam
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='lg:w-1/3 w-full lg:pl-8 flex items-center justify-center mt-8 lg:mt-0'>
                        <img
                            alt="Quiz Image"
                            src={skill}
                            className='rounded-lg'
                            width={300}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SenarioBasedForm;
