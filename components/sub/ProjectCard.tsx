import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-20">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <div className="flex justify-between mb-4">
          <p className="text-2xl font-semibold text-white">{title}</p>
          <Link
            href={url}
            className="text-white hover:text-gray-300 text-3xl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RxGithubLogo />
          </Link>
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
