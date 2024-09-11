import React from 'react'
const GenerateQuiz = () => {
    const options = [
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
    ];
    return (
        <div className='px-3 py-5 text-start   bg-[#2F3B44] '>
            <div className='max-w-[1400px] mx-auto w-full'>

                <h2 className='text-white font-bold lg:text-[28px] md:text[20px] text-[18px] text-start md:mb-[20px] mb-[10px]'>Generate Quiz</h2>
                <p className='text-white block mb-5'>Welcome to the quiz Generator! Please fill in the details below to generate a quiz.</p>
                <form className=''>
                    <label className='text-white block mb-1'>Name:</label>
                    <input type="text" className='w-full mb-5 py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' />
                    <label className='text-white block mb-1'>Subject:</label>
                    <input type="text" className='w-full mb-5 py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' />
                    <label className='text-white block mb-1'>Difficulty:</label>
                    <select className='w-full mb-5 py-2 px-4 rounded-md outline-0 focus:border focus:border-white placeholder:text-white bg-[#212a31] text-white'>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <div className='flex justify-center w-full'>
                        <button className='rounded-full max-w-[200px] transition duration-500 w-full bg-white hover:bg-[#212a31] text-black'>Generate Quiz</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default GenerateQuiz