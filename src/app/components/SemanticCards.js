import React from 'react'

function SemanticCards({
    sectionRef = null,
    dataModel = true,
    dataCaching = false,
    dataAccess = false,
    sectionHandler,
    dataApi = false,
    heading = "Check out the rest of Cube's four-part semantic layer",
    cards = [
        {

            title: "Data Modeling",
            description: `Robust
        governance begins with centralized permissions
        management.`,
        },
        {

            title: "Data Access Control",
            description: `Robust
        governance begins with centralized permissions
        management.`,
        },
        {

            title: "Data Caching",
            description: `Robust
        governance begins with centralized permissions
        management.`,
        },
        {

            title: "Data Api's",
            description: `Robust
        governance begins with centralized permissions
        management.`,
        }
    ]
}) {
    const sectionScrollHandler = (type) => {
        sectionHandler(type)
    }
    return (
        <div>
            <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Product_ProductPages__Section__SHAYD Product_ProductPages__Section--animated__q_VW3 Product_ProductPages__Section--inView__V2KYi">
                <div className="Page_SectionHeader__eXcwE Page_SectionHeader--appearance-dark__hGYCv SectionHeader--level-h2">
                    <h2 className="Page_SectionHeader__title__tIV1t">
                        {heading}
                    </h2>
                </div>
                <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-m__E6wuQ Page_Section--gap-xl__E8tSh Product_ProductPages__Content__WMlEv">
                    <article className="LayersCards_LayersCards__Ky23d LayersCards_LayersCards--inView__18wtK">
                        {!dataModel &&

                            <div
                                style={{
                                    backgroundColor: "var(--card-access-bg)",
                                    background: "linear-gradient(316deg, var(--card-access-gradient-1), var(--card-access-gradient-2)",
                                    border: "1px solid var(--card-access-border)"
                                }}
                                className="LayersCards_LayersCards__item__Wz32l" >
                                <p className="LayersCards_LayersCards__title__3Lh_P">
                                    {cards[0].title}
                                </p>
                                <p className="LayersCards_LayersCards__description__ZUeGd">
                                    {cards[0].description}
                                </p>
                                <span onClick={() => sectionScrollHandler("Modeling")} className="LayersCards_LayersCards__link__Lp_Bt" >
                                    <span  >Read
                                        More</span>
                                    <svg className="LayersCards_LayersCards__chevron__ZrBLM" xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
                                        <path fill="currentColor" d="m9.302.184-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302.184Z" />
                                    </svg>
                                </span>
                            </div>
                        }
                        {!dataAccess &&
                            <div style={{
                                backgroundColor: "var(--card-caching-bg)",
                                background: "linear-gradient(318deg, var(--card-caching-gradient-1), var(--card-caching-gradient-2) 75%)",
                                border: "1px solid var(--card-caching-border)"
                            }} className="LayersCards_LayersCards__item__Wz32l" >
                                <p className="LayersCards_LayersCards__title__3Lh_P">
                                    {cards[1].title}
                                </p>
                                <p className="LayersCards_LayersCards__description__ZUeGd">
                                    {cards[1].description}
                                </p>
                                <span onClick={() => sectionScrollHandler("Access")} className="LayersCards_LayersCards__link__Lp_Bt" >
                                    <span  >Read
                                        More</span>
                                    <svg className="LayersCards_LayersCards__chevron__ZrBLM" xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
                                        <path fill="currentColor" d="m9.302.184-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302.184Z" />
                                    </svg>
                                </span>
                            </div>
                        }
                        {!dataCaching &&
                            <div className="LayersCards_LayersCards__item__Wz32l" style={{
                                backgroundColor: "var(--card-api-bg)",
                                background: "linear-gradient(316deg, var(--card-api-gradient-1), var(--card-api-gradient-2) 75%)",
                                border: "1px solid var(--card-api-border)"
                            }}>
                                <p className="LayersCards_LayersCards__title__3Lh_P">
                                    {cards[2].title}
                                </p>
                                <p className="LayersCards_LayersCards__description__ZUeGd">
                                    {cards[2].description}
                                </p>
                                <span onClick={() => sectionScrollHandler("Caching")} className="LayersCards_LayersCards__link__Lp_Bt" >
                                    <span  >Read
                                        More</span>
                                    <svg className="LayersCards_LayersCards__chevron__ZrBLM" xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
                                        <path fill="currentColor" d="m9.302.184-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302.184Z" />
                                    </svg>
                                </span>
                            </div>
                        }
                        {!dataApi &&
                            <div style={{
                                background: 'linear-gradient(316deg, var(--card-modeling-gradient-1), var(--card-modeling-gradient-2))',
                                border: '1px solid var(--card-modeling-border)',
                                backgroundColor: 'var(--card-modeling-bg)',
                            }} className="LayersCards_LayersCards__item__Wz32l" >
                                <p className="LayersCards_LayersCards__title__3Lh_P">
                                    {cards[3].title}
                                </p>
                                <p className="LayersCards_LayersCards__description__ZUeGd">
                                    {cards[3].description}
                                </p>
                                <span onClick={() => sectionScrollHandler("Apis")} className="LayersCards_LayersCards__link__Lp_Bt" >
                                    <span  >Read
                                        More</span>
                                    <svg className="LayersCards_LayersCards__chevron__ZrBLM" xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
                                        <path fill="currentColor" d="m9.302.184-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302.184Z" />
                                    </svg>
                                </span>
                            </div>
                        }
                    </article>
                </div>
            </div>
        </div >
    )
}

export default SemanticCards