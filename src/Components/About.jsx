import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-t from-black via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center sm:text-start'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem dolorum, maxime commodi atque voluptatibus! Inventore eius eveniet voluptatum amet officiis maxime? Vel, voluptatum dolorem earum illo, delectus unde quia nostrum in placeat mollitia deserunt sit, veritatis provident minus nulla? Quisquam, deserunt quae! Dolorum provident dignissimos cum maxime, est veritatis.</p>

                <br />

                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem iste ea facilis excepturi alias temporibus molestias maxime maiores nobis soluta porro, asperiores consectetur commodi. Ex provident eveniet nostrum ipsum, dignissimos magni distinctio nobis officia beatae culpa! Modi nihil tenetur quibusdam saepe laudantium nulla, commodi deleniti, voluptas accusamus a quaerat.</p>
            </div>
        </div>
    );
}

export default About;
