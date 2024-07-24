"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  link: string;
  preview: string;
  description: string;
}

export default function ProjectCard({
  title,
  imageSrc,
  link,
  preview,
  description,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-1 border rounded-md overflow-hidden shadow-lg p-1 sm:p-5">
      <div className="flex flex-col items-center">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt="Project screenshot"
          className="object-contain"
        />
        <a href={link} className="text-xl font-semibold mt-2 text-center">
          {title}
        </a>
      </div>
      <div>
        {preview}{" "}
        <div
          className={`max-w-80 duration-800 transition-max-height ease-in-out overflow-hidden ${
            isExpanded ? "max-h-96" : "max-h-0"
          }`}
        >
          {description}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-blue-500 hover:underline self-center"
        >
          {isExpanded ? "Show less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
