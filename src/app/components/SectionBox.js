import React from "react";

const SectionBox = ({ imageText, className, imageClass }) => {
  return (
    <div
      className={`flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-1 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white ${className} sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10`}
    >
      <div className="w-10/12 text-[3vw] sm:text-[1vw] flex items-center justify-center xl:text-base">{imageText}</div>
      <img className={` ${imageClass} w-3/12 sm:w-2/12`} src={`/tech-icons/${imageText}.png`} />
    </div>
  );
};

export default SectionBox;
