import React from 'react';
import profile_img from '../assets/profile.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div 
        name='home' 
        className='relative py-32 md:h-screen w-full bg-gradient-to-t from-black via-black to-gray-800'
        >
            <div className='py-4 max-w-screen-lg h-full mx-auto flex flex-col items-center justify-center gap-8 md:gap-16 px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl md:text-7xl font-bold text-white pt-6'>I'm <span className="bg-gradient-to-t from-cyan-200 to-blue-500 text-transparent bg-clip-text font-signature">Muhammad Jareer</span> Front-end Developer</h2>
                    <p className='text-gray-500 py-4 text-lg font-bold'>Skilled web developer with expertise in HTML, CSS, Tailwind, JavaScript, GSAP, React, and GitHub. Focused on building dynamic and responsive web applications.</p>


                    <div>
                        <Link 
                        to='portfolio'
                        smooth
                        duration={500}
                        className='group text-white w-fit px-6 py-3 bg-gradient-to-tr from-cyan-500 to-blue-500 flex justify-center items-center gap-1 cursor-pointer rounded-md'>
                            Portfolio 
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} /></span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={profile_img} alt="profile img" className='rsm:ounded-2xl mx-auto w-[300px] h-[350px] rounded-[50%] md:w-[600px] md:h-2/3' />
                </div>
            </div>
        </div>
    );
}

export default Home;
