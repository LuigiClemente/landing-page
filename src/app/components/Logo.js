import React from "react";

function Logo({ logos = ["/colleges/harvard.svg", "/colleges/kcl-.svg", "/colleges/mgh.svg", "/colleges/stanford.svg"] }) {
  return (
    <div className="CompaniesTicker_SectionHero__companiesList__aInHB h-20 mt-10 mb-10">
      <div className="CompaniesTicker_SectionHero__companiesSlide__Scup9 flex-wrap max-sm:max-w-none !px-10 !gap-y-4 sm:!gap-0">
        {/* {logos.map((item) => ( */}
        <img className="CompaniesTicker_SectionHero__company__JHm0L w-fit !h-[2.3vw] sm:!h-[1.3vw] xl:!h-5 2xl:!h-6 invert opacity-60" src={"/colleges/harvard.svg"} />
        <img className="CompaniesTicker_SectionHero__company__JHm0L w-fit !h-[1.4vw] sm:!ml-8 sm:!h-[1vw] xl:!h-3 2xl:!h-4 invert xl:!ml-20 opacity-60" src={"/colleges/kcl-.svg"} />
        <img className="CompaniesTicker_SectionHero__company__JHm0L w-fit !h-[2.5vw] sm:!ml-8 sm:!h-[1.55vw] xl:!h-6 2xl:!h-7 invert xl:!ml-20 opacity-60" src={"/colleges/mgh.svg"} />
        <img className="CompaniesTicker_SectionHero__company__JHm0L w-fit !h-[2.3vw] sm:!ml-3 sm:!h-[1.3vw] xl:!h-5 2xl:!h-6 invert xl:!ml-6 opacity-60" src={"/colleges/stanford.svg"} />
        {/* ))} */}
      </div>
    </div>
  );
}

export default Logo;
