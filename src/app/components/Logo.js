import React from "react";

function Logo({ logos = ["/colleges/harvard.svg", "/colleges/kcl-.svg", "/colleges/mgh.svg", "/colleges/stanford.svg"] }) {
  return (
    <div className="CompaniesTicker_SectionHero__companiesList__aInHB max-sm:!flex max-sm:!items-center max-sm:!justify-center h-20 sm:mt-10 mb-10">
      <div className="CompaniesTicker_SectionHero__companiesSlide__Scup9 sm:flex-wrap !grid !grid-cols-2 max-sm:max-w-none sm:!flex sm:!flex-row !justify-center !items-center !gap-4 !px-10 sm:!px-10 sm:!gap-0">
        {/* {logos.map((item) => ( */}
        <div className="flex items-center justify-start">
          <img
            className="CompaniesTicker_SectionHero__company__JHm0L !flex !items-center !justify-center w-fit !h-[3.5vw] sm:!h-[1.3vw] xl:!h-5 2xl:!h-6 invert opacity-60"
            src={"/colleges/harvard.svg"}
          />
        </div>
        <div className="flex items-center justify-end">
          <img
            className="CompaniesTicker_SectionHero__company__JHm0L !flex !items-center !justify-center w-fit !h-[2.3vw] sm:!ml-8 sm:!h-[1vw] xl:!h-3 2xl:!h-4 invert xl:!ml-20 opacity-60"
            src={"/colleges/kcl-.svg"}
          />
        </div>
        <div className="flex items-center justify-start">
          <img
            className="CompaniesTicker_SectionHero__company__JHm0L !flex !items-center !justify-center w-fit !h-[3.3vw] sm:!ml-8 sm:!h-[1.3vw] xl:!h-5 2xl:!h-6 invert xl:!ml-20 opacity-60"
            src={"/colleges/stanford.svg"}
          />
        </div>
        <div className="flex items-center justify-end">
          <img
            className="CompaniesTicker_SectionHero__company__JHm0L !flex !items-center !justify-center w-fit !h-[4vw] sm:!ml-3 sm:!h-[1.55vw] xl:!h-6 2xl:!h-7 invert xl:!ml-6 opacity-60"
            src={"/colleges/mgh.svg"}
          />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default Logo;
