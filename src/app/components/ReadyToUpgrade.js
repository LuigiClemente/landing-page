import React from 'react'

function ReadyToUpgrade({
    upgradeHeading = `Ready to upgrade
    your data stack?`,
    logo = "https://cube.dev/logo_cube_cloud.svg",
    description = `Fully
    managed hosting of your Cube&nbsp;apps`,
}) {
    return (
        <div>
            <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh CTASection_CTASection__q1ETu Product_ProductPages__Section__SHAYD Product_ProductPages__CTA__NxIqz Product_ProductPages__Section--animated__q_VW3 Product_ProductPages__Section--inView__V2KYi CTASection_CTASection--withGradients__18msN">
                <div className="Page_SectionHeader__eXcwE Page_SectionHeader--appearance-dark__hGYCv SectionHeader--level-h2">
                    <h2 className="Page_SectionHeader__title__tIV1t">
                        {upgradeHeading}
                    </h2>
                </div>
                <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-m__E6wuQ Section--gap-none">
                    <article className="CTASection_CTASection__content__oCSS2">
                        <div className="CTASection_CTASection__texts__YGD8d">
                            <img src={logo} alt="" className="CTASection_CTASection__cloudLogo__sC64j" />
                            <p className="CTASection_CTASection__description__7K2dX">
                                {description}
                            </p>
                        </div>
                        {/* <div className="CTASection_CTASection__buttons__dE7__">
                            <a href="https://cubecloud.dev/auth/signup" className="Button_Button__VQ4Ej Button--appearance-light CTAButtons_CTAButtons__button__QA3Zx Button_Button--cherry__FCGeq Button_Button--size-l__ia8eU">Get Started</a>
                        </div> */}
                        <div className="CTASection_CTASection__buttons__dE7__">
                            <a href="/" className="Button_Button__VQ4Ej Button--appearance-light CTAButtons_CTAButtons__button__QA3Zx Button_Button--cherry__FCGeq Button_Button--size-l__ia8eU">
                                Get Started</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default ReadyToUpgrade