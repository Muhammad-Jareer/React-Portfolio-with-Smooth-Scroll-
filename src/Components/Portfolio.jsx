import React from 'react';

import portfolio_1 from '../assets/portfolio_1.png'
import portfolio_2 from '../assets/portfolio_2.png'
import portfolio_3 from '../assets/portfolio_3.png'
import portfolio_4 from '../assets/portfolio_4.png'
import portfolio_5 from '../assets/portfolio_5.png'
import portfolio_6 from '../assets/portfolio_6.png'

const Portfolio = () => {


    const portfolio = [
        {
            id: 1,
            src: portfolio_1
        },
        {
            id: 2,
            src: portfolio_2
        },
        {
            id: 3,
            src: portfolio_3
        },
        {
            id: 4,
            src: portfolio_4
        },
        {
            id: 5,
            src: portfolio_5
        },
        {
            id: 6,
            src: portfolio_6
        },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-t from-black via-black to-gray-800 relative top-14 md:h-screen w-full text-white'>

        <div className='max-w-screen p-4 mx-auto flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolio.map(({id, src}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img className='rounded-md duration-200 hover:scale-105 cursor-pointer' src={src} alt="" />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                    ))
            }
            </div>
            
        </div>
        </div>
    );
}

export default Portfolio;
