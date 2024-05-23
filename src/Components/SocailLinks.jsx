import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocailLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
              </>
            ),
            href: 'https://www.linkedin.com/in/muhammad-jareer-amiri-0210bb298/',
            style: 'rounded-tr-md bg-blue-800'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
              </>
            ),
            href: 'https://github.com/Muhammad-Jareer',
            style: 'rounded-tr-md bg-gray-700'
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
              </>
            ),
            href: 'mailto:jareerameer@gmail.com',
            style: 'rounded-tr-md bg-green-500'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
              </>
            ),
            href: './resume.pdf',
            style: 'rounded-br-md bg-blue-500',
            download: true,
        },
    ]

  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
      <ul>

        {links.map(({id, child, href, style, download}) => (
              <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 hover:rounded-md" + "" + style}>
              <a 
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="norefferer"         
              >
             {child}
              </a>
            </li>

        ))}

      

      </ul>
    </div>
  );
};

export default SocailLinks;
