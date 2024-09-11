import React from 'react'

const SenarioBasedForm = () => {
    return (
        <div className='px-3 py-5 text-start   bg-[#2F3B44] '>
            <div className='max-w-[1400px] mx-auto w-full'>

                <h2 className='text-white font-bold lg:text-[28px] md:text[20px] text-[18px] text-start md:mb-[40px] mb-[20px]'>Senario-Based Exam</h2>
                <form className=''>
                    <label className='text-white block mb-1'>Name:</label>
                    <input type="text" className='w-full mb-5 py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' />
                    <label className='text-white block mb-1'>Profession:</label>
                    <input type="text" className='w-full mb-5 py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' />
                    <label className='text-white block mb-1'>Upload File:</label>
                    <input type="file" className='w-full mb-5 py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' />
                    <div className='flex justify-center w-full'>
                        <button className='bg-white hover:bg-[#203742] rounded-md text-[#203742] hover:text-white font-normal py-2 transition duration-500 mt-3 px-4 '>Start Exam</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SenarioBasedForm