import React from "react";

const SectionBox = ({ imageText, className }) => {
  return (
    <div className={`flex w-56 h-10 rounded-full text-base bg-white bg-opacity-10 text-white  ${className}`}>
      <div className="w-10/12 flex items-center justify-center">{imageText}</div>
      <img className="w-10" src={`/tech-icons/${imageText}.png`} />
    </div>
  );
};

export default SectionBox;
