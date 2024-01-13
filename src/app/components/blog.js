import ReadyToUpgrade from "./ReadyToUpgrade";
import SemanticCards from "./SemanticCards";

export const DetailPage = ({
  mainTitle = "Define your metrics upstack to unify your team’s insights.",
  description = `Defining
    mission-critical business metrics inconsistently leads to
    miscommunication, misalignment, and error. Keep everyone
    on the same page with data modeling upstream of every app.`,
  secondDescription = `Centralize your data models upstream, so that you only have to define them once.`,
  thirdDescription = `Whether you’re
    building an internal application, a dashboard, or an
    embedded analytics application, ensure they’ll all
    be powered by consistent data—and skip manually
    orchestrating metrics for each presentation layer.
    Combined with Cube’s
    caching and pre-aggregation
    capabilities, this ensures that every downstream app
    stays updated with the latest
    information—cost-effectively and with low latency.`,
  fourthDescription = "Seamlessly integrate with every application.",
  titleName = "Cube's",
  list = ["integrations", "REST", "GraphQL", "Postgres-compliant", "SQL APIs"],
  leftSideData = `ensure compatibility with every
    modern data stack. Plus, reduce development context
    switching: manage data models in your favorite
    language—Python, JavaScript, or YAML—and see them
    visually with .`,
  leftSideImage = "https://cube.dev/images/product/data-modeling-feature-1.svg",
  RightSideImage = "https://cube.dev/images/product/data-modeling-feature-2.svg",
  RightSidefourthDescription = "Seamlessly integrate with every application.",
  RightSidetitleName = `Cube's`,
  RightSideData = `ensure compatibility with every
modern data stack. Plus, reduce development context
switching: manage data models in your favorite
language—Python, JavaScript, or YAML—and see them
visually with .`,
  workingTitle = `How does data
modeling with Cube work?`,
  workingSectionDescriptionOne = `Cube
is a dataset-oriented semantic layer. When building
your data model, you’ll deal with two types of
objects: cubes and views.`,
  workingSectionDescriptionTwo = `Cubes represent business entities such as
    customers, line items, and orders. In cubes, you
    define all the calculations within measures and
    dimensions of these entities.`,
  workingSectionDescriptionThree = `All cubes within your data model constitute your
    data graph.`,
  DatagraphDescription = `Data
    Graph visualizes cubes
    andjoins
    between them as an entity-relationship diagram (ERD). It
    allows to have a bird's-eye view of the data model and
    visually detects connected parts, i.e., groups of cubes
    that don't have any relationships with other groups.`,
  // mainTitle = "Define your metrics upstack to unify your team’s insights.",
  // mainTitle = "Define your metrics upstack to unify your team’s insights.",
}) => {
  return (
    <div>
      <div>
        <div id="cube-ui-kit-root" className="sc-lllmON iRvEDh">
          <section>
            <div className="sc-bYMpWt fErNNo">
              <div className="Product_ProductPages__backgroundWrapper__945Zw">
                <div
                  style={{ marginBottom: "30px" }}
                  className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Product_ProductPages__Section__SHAYD ProductPages__Section--header"
                >
                  <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
                    <section className="ProductHeader_ProductHeader___JiVt">
                      <div className="ProductHeader_ProductHeader__texts__e3MaF">
                        <div className="Breadcrumbs_Breadcrumbs__DagW7 Breadcrumbs_Breadcrumbs--appearance-dark__jfWk_ ProductHeader_ProductHeader__breadcrumbs__tw6jc" />
                        <h2 className="ProductHeader_ProductHeader__title__7eo8B">{mainTitle}</h2>
                        <p className="ProductHeader_ProductHeader__description__g31s6">{description}</p>
                        <div className="ProductHeader_ProductHeader__buttons__0zKBi">
                          <a
                            target="__blank"
                            href="https://cube.dev/contact"
                            className="Button_Button__VQ4Ej getStartedButton Button--appearance-light ProductHeader_ProductHeader__button__fvePN Button_Button--cherry__FCGeq Button_Button--size-m__DGRm_"
                            style={{
                              height: "40px",
                              padding: "0 16px",
                              fontSize: "16px",
                              borderRadius: "8px",
                              flexGrow: "unset",
                              flexBasis: "unset",
                              flexShrink: "unset",
                            }}
                          >
                            INSCREVER-SE
                          </a>
                        </div>
                      </div>
                      <div class="ProductHeader_ProductHeader__media__QZkzf">
                        <div class="HeroAnimation_HeroAnimation__llWWz">
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG HeroAnimation_HeroAnimation__card--current__IRhY9"
                            style={{
                              background: "linear-gradient(316deg, var(--color-gradient-purple-1), var(--color-gradient-purple-2))",
                              border: "1px solid var(--color-border-purple)",
                              background: "var(--color-purple)",
                            }}
                          >
                            <img src="/card-icons/microbes.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Data Modeling</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--color-gradient-blue-1), var(--color-gradient-blue-2))",
                              backgroundColor: "var(--color-skyblue)",
                              border: "1px solid var(--border-blue)",
                            }}
                          >
                            <img src="/card-icons/nutrition.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Access Control</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(318deg, var(--color-gradient-orange-1), var(--color-gradient-orange-2) 75%)",
                              backgroundColor: "var(--color-orange)",
                              border: "1px solid var(--color-border-orange)",
                            }}
                          >
                            <img src="/images/cube-scheme/badge-caching.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Caching</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--color-gradient-pink-1), var-(--color-gradient-pink-1) 75%)",
                              backgroundColor: "var(--color-pink)",
                              border: "1px solid var(--color-border-pink)",
                            }}
                          >
                            <img src="/card-icons/sugar.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">APIs</span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div>
                  <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD">
                    <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
                      <section className="ProductFeatureList_ProductFeatureList__zCe8z">
                        <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                          <div className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                            <div className="Animation_Animation__IWnaO ProductFeatureCard_ProductFeatureCard__animation__OIH1L">
                              <div className="Animation_Animation__player__I38FQ">
                                <canvas width={496} height={400}></canvas>
                              </div>
                            </div>
                          </div>
                          <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                            <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{secondDescription}</h2>
                            <div>
                              <p>{thirdDescription}</p>
                            </div>
                          </div>
                        </article>
                        <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                          <div className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                            <img className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src={leftSideImage} alt="" />
                          </div>
                          <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                            <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{RightSidefourthDescription}</h2>
                            <div>
                              <p>
                                {RightSidetitleName}
                                <a href="/">{list[0]} </a>
                                <span> and</span> <a href="/"> {list[1]}</a>,<a href="/">{list[2]}</a>, and{" "}
                                <a href="/">
                                  {list[3]}
                                  {list[4]}
                                </a>
                                {RightSideData}
                              </p>
                            </div>
                          </div>
                        </article>
                        <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                          <div className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                            <img className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src={RightSideImage} alt="" />
                          </div>
                          <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                            <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{fourthDescription}</h2>
                            <div>
                              <p>
                                {titleName}
                                <a href="/">{list[0]} </a>
                                <span> and</span> <a href="/"> {list[1]}</a>,<a href="/">{list[2]}</a>, and{" "}
                                <a href="/">
                                  {list[3]}
                                  {list[4]}
                                </a>
                                {leftSideData}
                              </p>
                            </div>
                          </div>
                        </article>
                      </section>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-2xl__hlbVN Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD Product_ProductPages__Section--lastFeatureSection___N3Ho Product_ProductPages__Section--animated__q_VW3 Product_ProductPages__Section--inView__V2KYi">
                    <div className="Page_SectionHeader__eXcwE Product_ProductPages__featureHeader__4hJz7 Page_SectionHeader--appearance-dark__hGYCv Page_SectionHeader--level-h1__TlC8a">
                      <h2 className="Page_SectionHeader__title__tIV1t">{workingTitle}</h2>
                    </div>

                    <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD">
                      <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none Product_ProductPages__Subsections__1_dT2">
                        <section id="how-does-data-modeling-with-cube-work-code-block-1" className="FeatureSection_FeatureSection__rKBQy">
                          <div className="FeatureSection_FeatureSection__content__QNW1v">
                            <div className="FeatureSection_FeatureSection__text__jloSe">
                              <p>{workingSectionDescriptionOne}</p>
                              <p>{workingSectionDescriptionTwo}</p>
                              <p>{workingSectionDescriptionThree}</p>
                            </div>
                          </div>
                          <div>
                            <div className="CodeBlocks_CodeBlocks___5WTs FeatureSection_FeatureSection__codeblocks__4u0G8">
                              <ul className="CodeBlocks_CodeBlocks__tabs__5sy71">
                                <li className="CodeBlocks_CodeBlocks__tab__PyUCf CodeBlocks_CodeBlocks__tab--selected__pPB3G">YAML</li>
                                <li className="CodeBlocks_CodeBlocks__tab__PyUCf">JS</li>
                              </ul>
                              <pre className="CodeBlocks_CodeBlocks__pre__xWkZP prism-code language-yaml">
                                <span className="token plain custom-token"> company_name</span>
                              </pre>
                            </div>
                            <button
                              className="Button_Button__VQ4Ej Button--appearance-light CodeBlocks_CodeBlocks__copy___N1Vj Button_Button--transparent___qkep Button_Button--size-s__pw3fC"
                              type="button"
                            >
                              Copy
                            </button>
                          </div>
                        </section>
                        <section id="how-does-data-modeling-with-cube-work-code-block-2" className="FeatureSection_FeatureSection__rKBQy">
                          <div className="FeatureSection_FeatureSection__content__QNW1v">
                            <div className="FeatureSection_FeatureSection__text__jloSe">
                              <p>{workingSectionDescriptionOne}</p>
                              <p>{workingSectionDescriptionTwo}</p>
                              <p>{workingSectionDescriptionThree}</p>
                            </div>
                          </div>
                          <div>
                            <div className="CodeBlocks_CodeBlocks___5WTs FeatureSection_FeatureSection__codeblocks__4u0G8">
                              <ul className="CodeBlocks_CodeBlocks__tabs__5sy71">
                                <li className="CodeBlocks_CodeBlocks__tab__PyUCf CodeBlocks_CodeBlocks__tab--selected__pPB3G">YAML</li>
                                <li className="CodeBlocks_CodeBlocks__tab__PyUCf">JS</li>
                              </ul>
                            </div>
                            <button
                              className="Button_Button__VQ4Ej Button--appearance-light CodeBlocks_CodeBlocks__copy___N1Vj Button_Button--transparent___qkep Button_Button--size-s__pw3fC"
                              type="button"
                            >
                              Copy
                            </button>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
          <img className="Product_ProductPages__subSectionBigMedia_img__eZIhg" src="./Data Modeling_files/views-diagram-transparent-back.png" alt="" />
        </div>
        <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Page_Section--gap-xl__E8tSh">
          <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-xs__Jdh_4 Section--gap-none">
            <p>{DatagraphDescription}</p>
          </div>
          <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
            <img className="Product_ProductPages__subSectionBigMedia_img__eZIhg" src="./Data Modeling_files/data-graph-light.png" alt="" />
          </div>
        </div>
      </div>

      <SemanticCards />
      <section id="shadow-host-companion">
        <template shadowrootmode="open" />
      </section>
    </div>
  );
};
