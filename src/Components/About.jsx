import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full relative top-14 md:h-screen bg-gradient-to-t from-black via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pt-2 sm:text-start'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipseniet voluptatum amet officiis maxime? Vel, voluptatum dolorem earum illo, delectus unde quia nostrum in placeat mollitia deserunt sit, veritatis provident minus </p>

                <br />

                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem iste ea facilis excepturi alias temporibus molestias maxime maiores nobis soluta porro, asperiores consectetur commodi. Ex provident eveniet nae culpa! </p>
            </div>
        </div>
    );
}

export default About;
