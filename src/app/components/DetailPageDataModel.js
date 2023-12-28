import ReadyToUpgrade from "./ReadyToUpgrade";
import SemanticCards from "./SemanticCards";

export const DetailPageDataModel = (
  props,
  {
    mainTitle = "Define your metrics upstack to unify your team’s insights.",
    description = `Defining
    mission-critical business metrics inconsistently leads to
    miscommunication, misalignment, and error. Keep everyone
    on the same page with data modeling upstream of every app.`,
    Sections = [
      {
        title: "Centralize your data models upstream, so that you only have to define them once.",
        description: `Whether you’re
            building an internal application, a dashboard, or an
            embedded analytics application, ensure they’ll all
            be powered by consistent data—and skip manually
            orchestrating metrics for each presentation layer.
            Combined with Cube’s <a href="https://cube.dev/docs/caching#overview">advanced
                caching</a> and <a href="https://cube.dev/docs/caching#pre-aggregations">pre-aggregation</a>
            capabilities, this ensures that every downstream app
            stays updated with the latest
            information—cost-effectively and with low latency.`,
        img: "https://cube.dev/images/product/data-modeling-feature-1.svg",
        canvas: true,
      },
      {
        title: "Seamlessly integrate with every application.",
        description: `Cube’s <a href="https://cube.dev/integrations">integrations</a>
            and <a href="https://cube.dev/docs/rest-api">REST</a>,
            <a href="https://cube.dev/docs/backend/graphql">GraphQL</a>,
            and <a href="https://cube.dev/docs/backend/sql">Postgres-compliant
                SQL APIs</a> ensure compatibility with every
            modern data stack. Plus, reduce development context
            switching: manage data models in your favorite
            language—Python, JavaScript, or YAML—and see them
            visually with <a href="https://cube.dev/docs/cloud/workspace/cube-ide/#data-graph">Data
                Graph</a>.`,
        img: "https://cube.dev/images/product/data-modeling-feature-1.svg",
      },
      {
        title: "Reduce time-to-value with development tools",
        description: `Cube Cloud enables team collaboration and rapid data
            model prototyping with a development toolkit that
            includes <a href="https://cube.dev/docs/dev-tools/dev-playground">Playground</a>,
            <a href="https://cube.dev/docs/cloud/workspace/cube-ide">Data
                Model IDE</a>, <a href="https://cube.dev/docs/cloud/workspace/cube-ide#development-mode">Development
                    Mode</a>, <a href="https://cube.dev/docs/cloud/workspace/cube-ide#data-graph">Data
                        Graph</a>, and more. Reduce time authoring and
            debugging the data model—and more time with your
            actionable insights.`,
        img: "https://cube.dev/images/product/data-modeling-feature-2.svg",
      },
    ],
    SectionCodeBlock = [
      {
        descriptionOne: `Cube is a dataset-oriented semantic layer. When building your data model, you’ll deal with two types of objects: cubes and views.`,
        descriptionTwo: `Cubes represent business entities such as customers, line items, and orders. In cubes, you define all the calculations within measures and dimensions of these entities.`,
        descriptionThree: `All cubes within your data model constitute your data graph.`,
        right: true,
      },
      {
        descriptionOne: `Cube is a dataset-oriented semantic layer. When building your data model, you’ll deal with two types of objects: cubes and views.`,
        descriptionTwo: `Cubes represent business entities such as customers, line items, and orders. In cubes, you define all the calculations within measures and dimensions of these entities.`,
        descriptionThree: `All cubes within your data model constitute your data graph.`,
        left: true,
      },
    ],
    WorkingSecTitle = "How does data modeling with Cube work?",
    WorkingSecSubHeading = `Data Graph visualizes cubes andjoins between them as an entity-relationship diagram (ERD). It allows to have a bird's-eye view of the data model and visually detects connected parts, i.e., groups of cubes that don't have any relationships with other groups.`,
  }
) => {
  return (
    <div className="relative z-50">
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
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div class="ProductHeader_ProductHeader__media__QZkzf">
                        <div class="HeroAnimation_HeroAnimation__llWWz">
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG HeroAnimation_HeroAnimation__card--current__IRhY9"
                            style={{
                              background: "linear-gradient(316deg, var(--card-modeling-gradient-1), var(--card-modeling-gradient-2))",
                              border: "1px solid var(--card-modeling-border)",
                              backgroundColor: "var(--card-modeling-bg)",
                            }}
                          >
                            <img src="/card-icons/microbes.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Data Modeling</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--card-access-gradient-1), var(--card-access-gradient-2))",
                              backgroundColor: "var(--card-access-bg)",
                              border: "1px solid var(--card-access-border)",
                            }}
                          >
                            <img src="/card-icons/nutrition.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u sm:!w-[3.1vw] xl:!w-11" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Access Control</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(318deg, var(--card-caching-gradient-1), var(--card-caching-gradient-2) 75%)",
                              backgroundColor: "var(--card-caching-bg)",
                              border: "1px solid var(--card-caching-border)",
                            }}
                          >
                            <img src="/card-icons/fat.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u sm:!w-[2.6vw] xl:!w-9" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">Caching</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--card-api-gradient-1), var(--card-api-gradient-2) 75%)",
                              backgroundColor: "var(--card-api-bg)",
                              border: "1px solid var(--card-api-border)",
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
                        {Sections.map((item) =>
                          !item.canvas ? (
                            <article key={item?.title} className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                              <div key={item?.title} className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                                <div className="Animation_Animation__IWnaO ProductFeatureCard_ProductFeatureCard__animation__OIH1L">
                                  <div className="Animation_Animation__player__I38FQ">
                                    <img width={496} height={400} className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src={item?.img} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                                <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{item?.title}</h2>
                                <div>
                                  <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                                </div>
                              </div>
                            </article>
                          ) : (
                            <article key={item?.title} className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                              <div key={item?.title} className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                                <img className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src={item?.img} alt="" />
                              </div>
                              <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                                <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{item?.title}</h2>
                                <div>
                                  <p dangerouslySetInnerHTML={{ __html: item?.description }} />
                                </div>
                              </div>
                            </article>
                          )
                        )}
                      </section>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-2xl__hlbVN Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD Product_ProductPages__Section--lastFeatureSection___N3Ho Product_ProductPages__Section--animated__q_VW3 Product_ProductPages__Section--inView__V2KYi">
                    <div className="Page_SectionHeader__eXcwE Product_ProductPages__featureHeader__4hJz7 Page_SectionHeader--appearance-dark__hGYCv Page_SectionHeader--level-h1__TlC8a">
                      <h2 className="Page_SectionHeader__title__tIV1t">{WorkingSecTitle}</h2>
                    </div>

                    <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD">
                      <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none Product_ProductPages__Subsections__1_dT2">
                        {SectionCodeBlock.map((item) =>
                          !item?.right ? (
                            <section key={item?.title} id="how-does-data-modeling-with-cube-work-code-block-1" className="FeatureSection_FeatureSection__rKBQy">
                              <div key={item?.title} className="FeatureSection_FeatureSection__content__QNW1v">
                                <div className="FeatureSection_FeatureSection__text__jloSe">
                                  <p>{item.descriptionOne}</p>
                                  <p>{item.descriptionTwo}</p>
                                  <p>{item.descriptionThree}</p>
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
                          ) : (
                            <section key={item?.descriptionOne} id="how-does-data-modeling-with-cube-work-code-block-2" className="FeatureSection_FeatureSection__rKBQy">
                              <div key={item?.descriptionOne} className="FeatureSection_FeatureSection__content__QNW1v">
                                <div className="FeatureSection_FeatureSection__text__jloSe">
                                  <p>{item.descriptionOne}</p>
                                  <p>{item.descriptionTwo}</p>
                                  <p>{item.descriptionThree}</p>
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
                          )
                        )}
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
            <p>{WorkingSecSubHeading}</p>
          </div>
          <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
            <img className="Product_ProductPages__subSectionBigMedia_img__eZIhg" src="./Data Modeling_files/data-graph-light.png" alt="" />
          </div>
        </div>
      </div>

      {props.children}
      <section id="shadow-host-companion">
        <template shadowrootmode="open" />
      </section>
    </div>
  );
};
