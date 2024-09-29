import React from 'react';
import { useLocation } from 'react-router-dom';

const DiagnosticResult = () => {
    const location = useLocation();
    const report = location.state?.report;

    if (!report) {
        return <div className='text-white'>No report data available.</div>;
    }

    return (
        <div className='bg-[#2F3B44] p-8 w-full h-screen overflow-y-auto'>
            <h2 className='text-white text-2xl mb-4'>Diagnostic Report</h2>

            <div className='text-white'>
                <h3 className='text-lg font-bold'>Student Information:</h3>
                <p><strong>Name:</strong> {report.name}</p>
                <p><strong>Subject:</strong> {report.subject}</p>
                <p><strong>Difficulty Level:</strong> {report.difficulty}</p>
                <p><strong>Score:</strong> {report.score}</p>
                <p><strong>Percentage:</strong> {report.percentage}</p>
                <p><strong>Performance:</strong> {report.performance}</p>

                <h3 className='text-lg font-bold mt-4'>Question Analysis:</h3>
                <table className='w-full table-auto'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2'>Question Number</th>
                            <th className='border px-4 py-2'>Question</th>
                            <th className='border px-4 py-2'>Your Answer</th>
                            <th className='border px-4 py-2'>Correct Answer</th>
                            <th className='border px-4 py-2'>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {report.question_analysis.map((item) => (
                            <tr key={item.number} className='border-b'>
                                <td className='border px-4 py-2'>{item.number}</td>
                                <td className='border px-4 py-2'>{item.question}</td>
                                <td className='border px-4 py-2'>{item.user_answer}</td>
                                <td className='border px-4 py-2'>{item.correct_answer}</td>
                                <td className={`border px-4 py-2 ${item.is_correct ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.is_correct ? 'Correct' : 'Incorrect'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3 className='text-lg font-bold mt-4'>Recommendations:</h3>
                <ul className='list-disc list-inside'>
                    {report.recommendations.map((recommendation, index) => (
                        <li key={index} className='mt-2'>{recommendation}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DiagnosticResult;
