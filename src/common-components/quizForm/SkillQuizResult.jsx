import React from 'react';
import { useLocation } from 'react-router-dom';

const SkillQuizResult = () => {
    const location = useLocation();
    const { result } = location.state || {};

    if (!result) {
        return <p>No result data available.</p>;
    }

    return (
        <div className='flex flex-col h-screen w-full p-6 bg-[#2F3B44]'>
            <div className='bg-gray-800 p-4 rounded-lg'>
                <h3 className='text-white text-xl font-bold'>Results</h3>
                <p className='text-white'>Name: {result.name}</p>
                <p className='text-white'>Difficulty: {result.difficulty}</p>
                <p className='text-white'>Score: {result.score}</p>
                <p className='text-white'>Percentage: {result.percentage}</p>
                <p className='text-white'>Performance: {result.performance}</p>
                <h4 className='text-white font-bold'>Question Analysis:</h4>
                <ul className='text-white'>
                    {result.question_analysis.map((qa) => (
                        <li key={qa.number}>
                            <strong>Q{qa.number}: </strong>{qa.question} <br />
                            Your Answer: {qa.user_answer} <br />
                            Correct Answer: {qa.correct_answer} <br />
                            {qa.is_correct ? "Status: Correct" : "Status: Incorrect"}
                            <hr />
                        </li>
                    ))}
                </ul>
                <h4 className='text-white font-bold'>Recommendations:</h4>
                <ul className='text-white'>
                    {result.recommendations.map((rec, index) => (
                        <li key={index}>- {rec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillQuizResult;
