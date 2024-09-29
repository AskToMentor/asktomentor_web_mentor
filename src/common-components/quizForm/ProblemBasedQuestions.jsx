import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProblemBasedQuestions = () => {
    const location = useLocation();
    const navigate = useNavigate();  // Use useNavigate instead of useHistory
    const { problem } = location.state || {};
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submissionResult, setSubmissionResult] = useState(null);

    if (!problem) {
        return <div className="text-red-500 text-center">No problem data available.</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        const data = {
            name: "Harshita Bhasin",
            user_solution: answer,
        };

        console.log("Submitting data:", JSON.stringify(data));

        try {
            const response = await fetch('http://65.2.34.110:5000/submit_problem_solution', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response data:', errorData);
                throw new Error(`Network response was not ok: ${errorData.message || response.statusText}`);
            }

            const result = await response.json();
            setSubmissionResult(result);

            // Navigate to the report page with the submission result
            navigate('/problemsolvingreport', { state: { submissionResult: result } });

        } catch (error) {
            console.error('Error submitting answer:', error);
            setSubmissionResult({ error: 'Submission failed. Please try again.' });
        }
    };

    return (
        <div className='flex flex-col items-stretch justify-start h-screen p-8'>
            <div className='w-full bg-[#2F3B44] rounded-lg shadow-xl p-8'>
                <h2 className='text-white font-bold text-2xl mb-6'>{problem.problem_name}</h2>
                
                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Instructions:</h3>
                    <p>{problem.instructions}</p>
                </div>
                
                <div className='text-white mb-4 w-full'>
                    <h3 className='font-semibold'>Question:</h3>
                    <p className='whitespace-pre-wrap'>{problem.question}</p>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Rules:</h3>
                    <p>{problem.rules}</p>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Solution Prompt:</h3>
                    <p>{problem.solution_prompt}</p>
                </div>

                <form onSubmit={handleSubmit} className='mb-4'>
                    <textarea
                        rows="4"
                        className='w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                        placeholder="Type your answer here..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                    <div className='w-full max-w-[300px] mt-4'>
                        <button
                            type="submit"
                            className='bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300'
                        >
                            Submit Answer
                        </button>
                    </div>
                </form>

                {submitted && (
                    <div className='text-yellow-500 mt-4'>Submitting your answer...</div>
                )}
                
                <div className='w-full max-w-[300px] mt-4'>
                    <button
                        onClick={() => window.history.back()}
                        className='bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold py-2 px-4 transition duration-300'
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProblemBasedQuestions;
