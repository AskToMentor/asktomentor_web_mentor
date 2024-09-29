import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScenarioQuestions = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { scenarios } = location.state || { scenarios: [] };
    const [answers, setAnswers] = useState(Array(scenarios.length).fill(''));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!scenarios.length) {
            setError("No scenarios available. Please go back and submit the form.");
        }
    }, [scenarios]);

    const handleInputChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formattedAnswers = {};
        answers.forEach((answer, index) => {
            formattedAnswers[`q${index + 1}`] = answer;
        });

        const payload = {
            name: "Harshita Bhasin",
            google_api_key: "AIzaSyD2c4c0YMF7EGx9EfABRsEVy8n7rkpEyVk",
            answers: formattedAnswers,
        };

        try {
            const res = await fetch('http://13.233.84.146:5000/submit_scenario_answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorMsg = await res.text();
                throw new Error(`Error: ${res.status} - ${errorMsg}`);
            }

            const data = await res.json();
            alert('Answers submitted successfully!');
            // Navigate to the response page (replace '/response' with your actual route)
            navigate('/scenarioreport', { state: { response: data } });
        } catch (error) {
            console.error('Error submitting answers:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-start h-screen bg-gray-900 text-white p-4'>
            <h2 className='text-3xl font-bold mb-6 w-full'>Scenario Questions</h2>
            {error ? (
                <p className='text-red-500'>{error}</p>
            ) : (
                <form onSubmit={handleSubmit} className='w-full space-y-4'>
                    {scenarios.map((scenario, index) => (
                        <div key={index} className='bg-gray-800 rounded-lg p-4 w-full'>
                            <p className='font-bold text-lg'>{scenario.question}</p>
                            <p className='text-gray-400'>{scenario.scenario}</p>
                            <textarea
                                value={answers[index]}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                rows={3}
                                className='w-full mt-2 p-2 rounded-md border border-gray-600 bg-gray-700 text-white'
                                placeholder="Type your answer here"
                                required
                            />
                        </div>
                    ))}
                    {scenarios.length > 0 && (
                        <div className='mt-4 w-full'>
                            <button
                                type="submit"
                                className='bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300 w-full'
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit Answers'}
                            </button>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
};

export default ScenarioQuestions;
