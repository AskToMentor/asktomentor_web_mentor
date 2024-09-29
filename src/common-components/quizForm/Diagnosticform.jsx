import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DiagnosticQuizGenerator = () => {
    const navigate = useNavigate();
    const [apiKey, setApiKey] = useState('');
    const [name, setName] = useState('');
    const [numQuestions, setNumQuestions] = useState(10);
    const [subject, setSubject] = useState('science');
    const [difficulty, setDifficulty] = useState('medium');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const requestData = { api_key: apiKey, name, num_questions: numQuestions, subject, difficulty };

        try {
            const response = await fetch('http://13.233.30.179:5000/generate_diagnostic_quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) throw new Error('Failed to fetch quiz data');

            const data = await response.json();
            // Navigate to quizresult page and pass the quiz data
            navigate('/quizresult', { state: { quizData: data } });
        } catch (error) {
            console.error('Error fetching quiz data:', error);
            setError('Failed to generate quiz. Please check your inputs and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center justify-start h-screen p-8'>
            <form onSubmit={handleSubmit} className='bg-[#2F3B44] rounded-lg shadow-xl p-8 w-full max-w-md'>
                <h2 className='text-white font-bold text-2xl mb-6'>Generate Diagnostic Quiz</h2>

                <input
                    type='text'
                    className='w-full p-2 mb-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                    placeholder='API Key'
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    required
                />
                <input
                    type='text'
                    className='w-full p-2 mb-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type='number'
                    className='w-full p-2 mb-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                    placeholder='Number of Questions'
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(Number(e.target.value))}
                    required
                />
                <input
                    type='text'
                    className='w-full p-2 mb-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                    placeholder='Subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <input
                    type='text'
                    className='w-full p-2 mb-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                    placeholder='Difficulty'
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    required
                />

                <button
                    type='submit'
                    className='bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300'
                >
                    Generate Quiz
                </button>
            </form>

            {loading && <div className='text-white mt-4'>Loading...</div>}
            {error && <div className='text-red-500 mt-4'>{error}</div>}
        </div>
    );
};

export default DiagnosticQuizGenerator;
