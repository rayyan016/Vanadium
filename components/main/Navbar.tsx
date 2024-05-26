import React from "react";

import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] text-gray-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Perseus
          </span>
        </a>

        <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between ml-14 md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-white cursor-pointer text-2xl">
          <a
            href="https://github.com/rayyan016/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/rayyan-aslam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <RxLinkedinLogo />
          </a>
          <a
            href="https://discordapp.com/users/901734678803927060"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxDiscordLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
