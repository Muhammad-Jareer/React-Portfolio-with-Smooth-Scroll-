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
            src: portfolio_1,
            href: "https://main--hazara-coffo.netlify.app/",
            code: "https://github.com/Muhammad-Jareer/Coffe-Shop-ReactJS"
        },
        {
            id: 2,
            src: portfolio_2,
            href: "#" // Replace "#" with the appropriate link
        },
        {
            id: 3,
            src: portfolio_3,
            href: "#" // Replace "#" with the appropriate link
        },
        {
            id: 4,
            src: portfolio_4,
        },
        {
            id: 5,
            src: portfolio_5,
            href: "#" // Replace "#" with the appropriate link
        },
        {
            id: 6,
            src: portfolio_6,
            href: "https://main--weatherhazara.netlify.app/",
            code: "https://github.com/Muhammad-Jareer/React-Weather-App"
        },
    ];

    return (
        <div name='portfolio' className='pt-20 bg-gradient-to-t from-black via-black to-gray-800 relative md:h-screen w-full text-white'>
            <div className='max-w-screen px-4 mx-auto flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='pt-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, src, href, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img className='rounded-md duration-200 hover:scale-105 cursor-pointer' src={src} alt="" />
                            <div className='flex items-center justify-center'>
                                <a href={href} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 border-r-2 text-center'>
                                    Demo
                                </a>
                                <a href={code} target="_blank"  className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 text-center'>Code</a> {/* Replace "#" with the appropriate link */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
