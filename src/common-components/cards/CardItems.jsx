import React from 'react'
import { Link } from 'react-router-dom'

const CardItems = (props) => {
    return (
        <div className='flex items-center justify-center  flex-col rounded-2xl p-[30px] m-0 bg-[#24343d] sm:max-w-[300px] max-w-full w-full  hover:rotate-y-360 transition duration-1000 ' >
            <picture className='rounded-md'>
                <img src={props.image} alt='image' height={'60px'} width={'100px'} />
            </picture>
            <h4 className='font-bold text-white py-5 '>{props.title}</h4>
            <Link to={props.link} className=' button bg-[#124E66] hover:bg-[#203742] transition duration-500 text-white font-semibold py-1 mt-3 px-4 rounded-lg  '>Start</Link>
        </div>
    )
}

export default CardItems

// <div className='relative flex items-center justify-center flex-col rounded-2xl p-[40px] m-0 bg-[#212a31cc] sm:w-auto w-full  hover:rotate-y-360 transition duration-1000 preserve-3d'>
//     <div className='w-full h-full flex-col flex items-center justify-center backface-hidden'>
//         <picture className='rounded-md'>
//             <img src={props.image} alt='image' height={'60px'} width={'100px'} />
//         </picture>
//         <h4 className='font-bold text-white py-5 '>{props.title}</h4>
//         <Link to={props.link} className=' button bg-[#124E66] hover:bg-[#203742] transition duration-500 text-white font-semibold py-1 mt-3 px-4 rounded-lg  '>Start</Link>

//     </div>
//     {/* <div className='absolute w-full h-full flex flex-col items-center justify-center rotate-y-360 '>
//         <h2 className='text-white font-bold'>{props.title}</h2>
//         <p className='text-white font-bold'>{props.backContent}</p>
//     </div> */}
// </div>

// <div  className = 'flex items-center justify-center flex-col rounded-2xl p-[40px] m-0 bg-[#212a31cc] sm:w-auto w-full  hover:rotate-y-360 transition duration-1000 ' >
//             <picture className='rounded-md'>
//                 <img src={props.image} alt='image' height={'60px'} width={'100px'} />
//             </picture>
//             <h4 className='font-bold text-white py-5 '>{props.title}</h4>
//             <Link to={props.link} className=' button bg-[#124E66] hover:bg-[#203742] transition duration-500 text-white font-semibold py-1 mt-3 px-4 rounded-lg  '>Start</Link>

//     </div >