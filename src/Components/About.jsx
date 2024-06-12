import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full relative py-36 md:h-screen bg-gradient-to-t from-black via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pt-2 sm:text-start'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-6'>I am currently looking for an opportunity as a fresher front-end developer or intern. I am a skilled web developer with expertise in HTML, CSS, Tailwind, JavaScript, GSAP, React, and GitHub. Currently, I am pursuing a degree in Software Engineering at the University of Haripur. I focus on building dynamic and responsive web applications that provide exceptional user experiences.</p>

                <br />

                <p className='text-xl'>With a passion for front-end development and a keen eye for detail, I aim to create visually appealing and highly functional websites. My goal is to continuously improve my skills and stay updated with the latest industry trends to deliver the best solutions for users and clients.</p>


            </div>
        </div>
    );
}

export default About;
