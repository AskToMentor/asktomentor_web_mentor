import React from 'react'
import { Link } from 'react-router-dom'
import guruji from "/src/gif-assets/guruji.png";
import insta from "/src/gif-assets/ig.png";
import whatsapp from "/src/gif-assets/whatsapp.png";

const ContacUs = () => {
    return (
        <>
            <div className='flex items-stretch w-full flex-wrap h-full overflow-auto'>
                <div className='lg:w-[30%] md:w-[50%] w-full text-center bg-[#212a31] flex flex-col items-center justify-center'>
                    <div className='text-end w-fit mx-auto'>
                        <h1 className='font-bold text-[48px] text-white '>AskToMentor</h1>
                        <p className='text-white block mb-5'>Where Curiosity Meets Knowledge</p>
                        <pictur className="mx-auto">
                            <img src={guruji} width={300} height={200} />
                        </pictur>
                    </div>

                    <div className='flex gap-3 justify-center mt-5 items-center mb-3'>
                        <Link to="/">
                            <img src={whatsapp} width={30} height={30} className='cursor-pointer' alt='facebook' />
                        </Link>
                        <Link to="/">
                            <img src={insta} width={30} height={30} className='cursor-pointer' alt='facebook' />
                        </Link>

                        <Link to="/">
                            <img src={whatsapp} width={30} height={30} className='cursor-pointer' alt='facebook' />
                        </Link>
                    </div>


                </div>
                <div className='lg:w-[70%] md:w-[50%] w-full px-[30px] py-[50px] bg-[#2F3B44] flex flex-col justify-center items-center '>
                    <h2 className='text-white font-bold w-full lg:text-[28px] md:text[20px] text-[18px] text-center md:mb-[40px] mb-[20px]'  >Contact Us</h2>
                    <form className='flex w-full flex-col gap-5 items-center'>
                        <div className='w-full flex gap-5 justify-between flex-wrap'>
                            <input type="text" className='md:w-[calc(50%-10px)] w-full py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' placeholder="First Name" />
                            <input type="text" className='md:w-[calc(50%-10px)] w-full py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' placeholder="Last Name" />
                        </div>
                        <div className='w-full flex gap-5 justify-between flex-wrap'>
                            <input type="email" className='md:w-[calc(50%-10px)] w-full py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' placeholder="Email" />
                            <input type="tel" className='md:w-[calc(50%-10px)] w-full py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white' placeholder="Phone" />
                        </div>

                        <textarea placeholder="Describe your issue" className='w-full resize-none py-2 px-4 rounded-md outline-0 focus:border focus:bordr-white placeholde:text-white bg-[#212a31] text-white'></textarea>
                        <button className='rounded-full max-w-[200px] transition duration-500 w-full bg-[#124E66] hover:bg-[#212a31] text-white'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContacUs