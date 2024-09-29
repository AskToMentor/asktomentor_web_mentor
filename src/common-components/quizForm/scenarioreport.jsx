import React from 'react';
import { useLocation } from 'react-router-dom';

const ResponsePage = () => {
    const location = useLocation();
    const { response } = location.state || {};

    return (
        <div className='p-6 bg-gray-900 text-white min-h-screen'>
            <h2 className='text-3xl font-bold mb-4'>Submission Response</h2>
            {response ? (
                <div className='bg-gray-800 rounded-lg p-4'>
                    <h3 className='text-xl font-semibold'>Summary</h3>
                    <p className='mt-2'><strong>Name:</strong> {response.name}</p>
                    <p><strong>Profession:</strong> {response.profession}</p>
                    <p className='mt-4'><strong>Evaluation Prompt:</strong> {response.evaluation_prompt}</p>

                    <h3 className='text-xl font-semibold mt-4'>Evaluation</h3>
                    <p className='mt-2'><strong>Analysis:</strong> {response.evaluation.analysis}</p>

                    <h4 className='font-semibold mt-2'>Areas for Improvement:</h4>
                    <ul className='list-disc ml-6'>
                        {response.evaluation.areas_for_improvement.split('\n').map((item, index) => {
                            const [title, description] = item.split(':');
                            return (
                                <li key={index}>
                                    <strong>{title.trim()}:</strong> {description ? description.trim() : ''}
                                </li>
                            );
                        })}
                    </ul>

                    <p className='mt-2'><strong>Overall Assessment:</strong> {response.evaluation.overall_assessment}</p>
                    <p className='mt-2'><strong>Strengths:</strong> {response.evaluation.strengths}</p>

                    <h3 className='text-xl font-semibold mt-4'>Answers</h3>
                    <ul className='list-disc ml-6'>
                        {Object.entries(response.answers).map(([question, answer], index) => (
                            <li key={index}>
                                <strong>{question}:</strong> {answer}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className='text-red-500'>No response data available.</p>
            )}
        </div>
    );
};

export default ResponsePage;
