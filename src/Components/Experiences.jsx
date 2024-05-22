import React from "react";

import react from "../assets/react.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import tailwind from "../assets/tailwind.svg";
import gitHub from "../assets/github.svg";
import javascript from "../assets/js.svg";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      style: "shadow-orange-500",
      title: 'HTML'
    },
    {
      id: 2,
      src: css,
      style: "shadow-blue-500",
      title: 'CSS'
    },
    {
      id: 3,
      src: tailwind,
      style: "shadow-sky-500",
      title: 'Tailwind'
    },
    {
      id: 4,
      src: javascript,
      style: "shadow-yellow-500",
      title: 'JavaScript'
    },
    {
      id: 5,
      src: react,
      style: "shadow-blue-600",
      title: 'React'
    },
    {
      id: 6,
      src: gitHub,
      style: "shadow-gray-400",
      title: 'GitHub'
    },
  ];

  return (
    <div name='experience' className="bg-gradient-to-t from-black via-black to-gray-800 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiences
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

        {
            experiences.map(({id, src, title, style}) => (
                <div 
                key={id} 
                className={`shadow-md hover:105 duration-500 py-2 rounded-lg ${style}`}>
                <img className="w-20 mx-auto" src={src} alt="react" />
                <p className="mt-4">{title}</p>
              </div>
            ))
        }

         


        </div>
      </div>
    </div>
  );
};

export default Experiences;
