import React from "react";

function HeroTitle({ color = "#F84F39", heading = "Supernatural ao", headingColor }) {
  return (
    <div
      style={{
        transform: "translate3d(0%, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      class="container-hero-title w-clearfix !max-w-xl !text-left"
    >
      <h1 class="heading-large g-text-align-center g-display-inline-text max-[400px]:text-[2.8rem]">
        {heading}
        <span class="g-visuallyhidden">team</span>
      </h1>
      <div class="handwritten-text-wrapper pt-4">
        <div class="hero-line-embed w-embed" style={{ display: "block" }}>
          <img src="/title/anoitecer.png" className="relative max-sm:top-0 top-3 max-sm:right-24 max-sm:!w-64 sm:right-[6rem] md:w-[23.5rem] max-[400px]:!w-[13rem] max-[365px]:right-[3rem] max-[400px]:right-[4rem]" />
        </div>
      </div>
    </div>
  );
}

export default HeroTitle;
