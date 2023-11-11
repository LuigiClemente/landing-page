import React from 'react'

function Logo({ logos = [
    "https://static.cube.dev/companies/ramsoft-grayscale.svg",
    "https://static.cube.dev/companies/security_scorecard-grayscale.svg",
    "https://static.cube.dev/companies/cloud_academy-grayscale.svg",
    "https://static.cube.dev/companies/ibm-grayscale.svg",
    "https://static.cube.dev/companies/intuit-grayscale.svg",

    "https://static.cube.dev/companies/walmart-grayscale.svg",
    "https://static.cube.dev/companies/ramsoft-grayscale.svg",

] }) {
    return (
        <div className="CompaniesTicker_SectionHero__companiesList__aInHB mt-10 mb-10">
            <div className="CompaniesTicker_SectionHero__companiesSlide__Scup9 flex-wrap gap-8">
                {logos.map((item =>
                    <img
                        className="CompaniesTicker_SectionHero__company__JHm0L"
                        src={item}
                        alt="Walmart logo"
                    />
                ))}

            </div>
        </div>
    )
}

export default Logo