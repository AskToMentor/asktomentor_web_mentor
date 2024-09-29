import React from 'react';
import { useLocation } from 'react-router-dom';

const ProblemSolvingReport = () => {
    const location = useLocation();
    const { submissionResult } = location.state || {};

    if (!submissionResult) {
        return <div className="text-red-500 text-center">No submission result available.</div>;
    }

    const { evaluation } = submissionResult.evaluation.generated_problem;

    return (
        <div className='flex flex-col items-stretch justify-start h-screen p-8'>
            <div className='w-full bg-[#2F3B44] rounded-lg shadow-xl p-8'>
                <h2 className='text-white font-bold text-2xl mb-6'>Submission Report</h2>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Problem Name:</h3>
                    <p>{submissionResult.evaluation.generated_problem.problem_name}</p>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>User Solution:</h3>
                    <pre>{submissionResult.user_solution || 'N/A'}</pre>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Evaluation Summary:</h3>
                    <p>{evaluation.evaluation_text || 'N/A'}</p>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Overall Assessment:</h3>
                    <p>{evaluation.overall_assessment || 'N/A'}</p>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Strengths:</h3>
                    <ul className='list-disc list-inside'>
                        {evaluation.strengths.length ? (
                            evaluation.strengths.map((strength, index) => (
                                <li key={index}>{strength}</li>
                            ))
                        ) : (
                            <li>None</li>
                        )}
                    </ul>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Areas for Improvement:</h3>
                    <ul className='list-disc list-inside'>
                        {evaluation.areas_for_improvement.map((area, index) => (
                            <li key={index}>{area}</li>
                        ))}
                    </ul>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Recommendations:</h3>
                    <ul className='list-disc list-inside'>
                        {evaluation.recommendations.map((recommendation, index) => (
                            <li key={index}>{recommendation}</li>
                        ))}
                    </ul>
                </div>

                <div className='text-white mb-4'>
                    <h3 className='font-semibold'>Score:</h3>
                    <p>{evaluation.score || 'N/A'}</p>
                </div>

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

export default ProblemSolvingReport;
