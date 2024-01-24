import React from "react";

function SementaticLayerBottom({
  title = "What is a Semantic Layer?",
  description = `A semantic layer is a middleware between your data source and your data
    application. Cube is an API-first, four-part semantic layer that enables
    data engineers and developers to make their data consistent, secure,
    performant, and accessible across every application.`,
  smallDescription = "More about Cube’s Semantic Layer",
}) {
  const clickHandler = () => {
    const element = document.querySelector(".ProductFeatureCard_ProductFeatureCard__title__0ZCuD");
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <div
      style={{ marginTop: "5vh", scale: "0.97", marginBottom: "2vh" }}
      className="Page_SectionHeader__eXcwE Home_SectionHero__whatIs__KSXfn Page_SectionHeader--appearance-dark__hGYCv SectionHeader--level-h2"
    >
      <h2 className="Page_SectionHeader__title__tIV1t">{title}</h2>
      <div className="Page_SectionHeader__content__OvDy1">
        {description}
        <br />
        <a onClick={clickHandler} className="Home_SectionHero__link__6RmKg">
          <span>{smallDescription}</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={32} viewBox="0 0 14 32" fill="none">
              <path
                d="M7.11612 9.76001L5.53612 11.36L8.67612 14.5L7.33612 14.44H1.39612V16.72H7.33612L8.71612 16.66L5.53612 19.84L7.11612 21.42L12.6961 15.86V15.34L7.11612 9.76001Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default SementaticLayerBottom;
