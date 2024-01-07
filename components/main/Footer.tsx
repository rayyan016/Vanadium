import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Connect With Me</div>
            <div className="grid grid-cols-2 gap-x-40">
              <a
                href="https://github.com/rayyan016/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px] hover:text-cyan-200">Github</span>
              </a>
              <a
                href="https://discordapp.com/users/901734678803927060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px] hover:text-cyan-200">Discord</span>
              </a>
              <a
                href="https://twitter.com/rayyanaslam16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px] hover:text-cyan-200">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rayyan-aslam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[15px]"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px] hover:text-cyan-200">Linkedin</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-5 mt-4 text-lg text-center">
          Made with 🩵 by Perseus
        </div>
      </div>
    </div>
  );
};

export default Footer;
