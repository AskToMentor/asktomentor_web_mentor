import React, { useState } from 'react';
import quize from '/src/gif-assets/Quiz_image.png';
import { useNavigate } from 'react-router-dom';
import TipsBox from '../TipBox';
const GenerateQuiz = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        difficulty: 'easy',
        num_questions: '5',
        file: null,
        api_key: ''
    });
    const [isTipsVisible, setIsTipsVisible] = useState(true);
    const [isOtherSubject, setIsOtherSubject] = useState(false);
    const navigate = useNavigate();
    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle subject dropdown change
    const handleSubjectChange = (e) => {
        const value = e.target.value;
        if (value === 'other') {
            setIsOtherSubject(true);
            setFormData({
                ...formData,
                subject: '',
            });
        } else {
            setIsOtherSubject(false);
            setFormData({
                ...formData,
                subject: value,
            });
        }
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            setFormData({
                ...formData,
                file: file,
            });
        } else {
            alert("Please upload a PDF or DOC file.");
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const endPoint = 'generate_quiz'
        // Create a new FormData object
        if (formData.file) {
            const formData = new FormData();
            formData.append('name', formData.name);
            formData.append('api_key', formData.api_key);
            formData.append('difficulty', formData.difficulty);
            formData.append('num_questions', formData.num_questions);
            formData.append('file', formData.file);
            navigate('/question-sheet', { state: { formData, endPoint } });
            setFormData({
                name: '',
                subject: '',
                difficulty: 'easy',
                num_questions: '5', // Default value
                file: null, // File upload
                api_key: ''
            })
            return;
        }
        console.log('Form data:', formData);
        navigate('/question-sheet', { state: { formData, endPoint } });
        setFormData({
            name: '',
            subject: '',
            difficulty: 'easy',
            num_questions: '5', // Default value
            file: null, // File upload
            api_key: ''
        })

    };
    const tips = [
        "This is tip-1",
        "This is tip-2",
        "This is tip-3",
        "This is tip-4",
        "This is tip-5",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
        "This is tip-6",
    ]
    return (
        <div className='h-full pt-[16.5rem] overflow-y-auto flex  items-center justify-center p-6'>
            <div className='bg-[#2F3B44]  text-white rounded-lg shadow-lg w-full max-w-4xl p-8 '>
                <div className='flex flex-col lg:flex-row items-center'>
                    {/* Image Section */}
                    <div className='lg:w-1/3 w-full flex justify-center lg:justify-start mb-8 lg:mb-0'>
                        <img
                            src={quize}
                            width={300}
                            height={200}
                            alt="Quiz Image"
                            className='rounded-lg shadow-md'
                        />
                    </div>

                    {/* Form Section */}
                    <div className='lg:w-2/3 w-full' onMouseLeave={() => setIsTipsVisible(false)}>
                        <h2 className='text-white font-bold text-2xl mb-6'>Generate Quiz</h2>
                        <p className='text-white mb-6'>Welcome to the quiz generator! Please fill in the details below to generate a quiz.</p>
                        <form className='space-y-6' onSubmit={handleSubmit} onMouseEnter={() => setIsTipsVisible(true)} >
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className={`w-full lg:w-${isOtherSubject ? '1/2' : 'full'} `}>
                                    <label className='text-white block mb-2'>Subject:</label>
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
                                    <div className='w-full lg:w-1/2'>
                                        <label className='text-white block mb-2'>Enter Subject:</label>
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
                                <div className='w-full'>
                                    <label className='text-white block mb-2'>No. of Questions:</label>
                                    <select
                                        name="num_questions"
                                        className='w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-700 text-white'
                                        value={formData.num_questions}
                                        onChange={handleInputChange}
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className='text- white block mb-2'>Difficulty:</label>
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
                            <div className='flex flex-col'>
                                <label className='text-white block mb-2'>API Key:</label>
                                <input
                                    name='api_key'
                                    value={formData.api_key}
                                    type="text" placeholder='Enter API Key'
                                    className='py-2 px-4 bg-gray-700 text-white rounded-md'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-white block mb-2'>Upload File (Optional):</label>
                                <input
                                    name='file'
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className='py-2 px-4 bg-gray-700 text-white rounded-md'
                                    onChange={handleFileChange}
                                />
                                <p className='text-gray-400 text-sm mt-2'>
                                    Upload PDF, DOC, if you wish to create a test from your own book or document with max size 20MB  only.
                                </p>
                            </div>

                            <div className='flex justify-center'>
                                <button className='rounded-full max-w-[200px] transition duration-500 w-full bg-[#124E66] hover:bg-[#212a31] text-white'>Generate Quiz</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='ml-6 overflow-auto'>
                {
                    isTipsVisible &&
                    <TipsBox tips={tips} />
                }
            </div>
        </div>
    );
};

export default GenerateQuiz;
