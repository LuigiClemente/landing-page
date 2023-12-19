import React from "react";

function Logo({ logos = ["/colleges/harvard.svg", "/colleges/kcl-.svg", "/colleges/mgh.svg", "/colleges/stanford.svg"] }) {
  return (
    <div className="CompaniesTicker_SectionHero__companiesList__aInHB h-20 mt-10 mb-10">
      <div className="CompaniesTicker_SectionHero__companiesSlide__Scup9 flex-wrap">
        {logos.map((item) => (
          <img key={item} className="CompaniesTicker_SectionHero__company__JHm0L w-fit h-16 invert opacity-60" src={item} alt="Walmart logo" />
        ))}
      </div>
    </div>
  );
}

export default Logo;
