import ReadyToUpgrade from "./ReadyToUpgrade";
import SemanticCards from "./SemanticCards";

export const DetailPageApi = (
  props,
  {
    sections = [
      {
        title: "Centralize your data models upstream, so that you only have to define them once.",
        description:
          "Whether you’re building an internal application, a dashboard, or an embedded analytics application, ensure they’ll all be powered by consistent data—and skip manually orchestrating metrics for each presentation layer. Combined with Cube’s advanced caching and pre-aggregationcapabilities, this ensures that every downstream app stays updated with the latest information—cost-effectively and with low latency.",
        img: "https://cube.dev/images/product/apis-feature-0.svg",
        canvas: true,
      },
      {
        title: "Seamlessly integrate using the SQL you already know.",
        description:
          "Boost your data’s performance, make it consistent, and centralize its caching and security upstream of every BI platform. Cube’s instant Postgres-compliant SQL API lets you skip the new language learning curve, making it incredibly easy to connect your data sources and semantic layer to any of your downstream tools.",
        img: "https://cube.dev/images/product/apis-feature-0.svg",
      },
      {
        title: "Seamlessly integrate with every application.",
        description:
          "Cube’sintegrationsand REST,GraphQL, and Postgres-compliant SQL APIs ensure compatibility with every modern data stack. Plus, reduce development context switching: manage data models in your favorite language—Python, JavaScript, or YAML—and see them visually with Data Graph.",
        img: "https://cube.dev/images/product/apis-feature-0.svg",
      },
      {
        title: "Seamlessly integrate using the SQL you already know.",
        description:
          "Boost your data’s performance, make it consistent, and centralize its caching and security upstream of every BI platform. Cube’s instant Postgres-compliant SQL API lets you skip the new language learning curve, making it incredibly easy to connect your data sources and semantic layer to any of your downstream tools.",
        img: "https://cube.dev/images/product/apis-feature-0.svg",
      },
      {
        title: "Seamlessly integrate with every application.",
        description:
          "Cube’sintegrationsand REST,GraphQL, and Postgres-compliant SQL APIs ensure compatibility with every modern data stack. Plus, reduce development context switching: manage data models in your favorite language—Python, JavaScript, or YAML—and see them visually with Data Graph.",
        img: "https://cube.dev/images/product/apis-feature-0.svg",
      },
      {
        title: "Connect ready-to-query data models in a couple of clicks.",
        description: `Reduce time-to-insights from hours to minutes and streamline your semantic layer integration with Semantic Layer Sync. SLS complements Cube's SQL API and automatically populates your BI tool with the metrics you defined in Cube, and automatically syncs data model changes from Cube to your BI—without additional set up within the tool.`,
        img: "https://cube.dev/images/product/apis-feature-1.svg",
        canvas: true,
      },
    ],
    mainTitle = "Define your metrics upstack to unify your team’s insights.",
    description = `Defining
mission-critical business metrics inconsistently leads to
miscommunication, misalignment, and error. Keep everyone
on the same page with data modeling upstream of every app.`,
  }
) => {
  return (
    <div className="relative z-50">
      <div>
        <div id="cube-ui-kit-root" className="sc-lllmON iRvEDh">
          <section>
            <div className="sc-bYMpWt fErNNo">
              <div className="Product_ProductPages__backgroundWrapper__945Zw">
                <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Product_ProductPages__Section__SHAYD ProductPages__Section--header">
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
                              background: "linear-gradient(316deg, var(--card-api-gradient-1), var(--card-api-gradient-2) 75%)",
                              backgroundColor: "var(--card-api-bg)",
                              border: "1px solid var(--card-api-border)",
                            }}
                          >
                            <img src="/card-icons/sugar.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u" />
                            <span class="HeroAnimation_HeroAnimation__title__KFqGQ">APIs</span>
                          </div>
                          <div
                            class="HeroAnimation_HeroAnimation__card__IpFlG"
                            style={{
                              background: "linear-gradient(316deg, var(--card-modeling-gradient-1), var(--card-modeling-gradient-2))",
                              border: "1px solid var(--card-modeling-border)",
                              backgroundColor: "var(--card-modeling-bg)",
                            }}
                          >
                            <img src="/card-icons/microbes.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u sm:!w-[3.5vw] xl:!w-12" />
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
                            <img src="/card-icons/nutrition.svg" alt="" class="HeroAnimation_HeroAnimation__badge__Iqx8u sm:!w-[3.5vw] xl:!w-12" />
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
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div>
                  <div className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD">
                    <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none">
                      <section className="ProductFeatureList_ProductFeatureList__zCe8z">
                        {/* <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                                                    <div className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                                                        <div className="Animation_Animation__IWnaO ProductFeatureCard_ProductFeatureCard__animation__OIH1L">
                                                            <div className="Animation_Animation__player__I38FQ">
                                                                <canvas width={496} height={400}>

                                                                </canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                                                        <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">Centralize
                                                            your data models upstream, so that you only have
                                                            to&nbsp;define them once.
                                                        </h2>
                                                        <div>
                                                            <p>Whether you’re
                                                                building an internal application, a dashboard, or an
                                                                embedded analytics application, ensure they’ll all
                                                                be powered by consistent data—and skip manually
                                                                orchestrating metrics for each presentation layer.
                                                                Combined with Cube’s <a href="https://cube.dev/docs/caching#overview">advanced
                                                                    caching</a> and <a href="https://cube.dev/docs/caching#pre-aggregations">pre-aggregation</a>
                                                                capabilities, this ensures that every downstream app
                                                                stays updated with the latest
                                                                information—cost-effectively and with low latency.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </article> */}

                        {sections.map((item) =>
                          !item.canvas ? (
                            <article key={item?.title} className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                              <div key={item?.title} className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc" bis_skin_checked={1}>
                                <img className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src={item?.img} alt="" />
                              </div>
                              <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht" bis_skin_checked={1}>
                                <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">{item?.title}</h2>
                                <div bis_skin_checked={1}>
                                  <p>{item?.description}</p>
                                </div>
                              </div>
                            </article>
                          ) : (
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
                                  <p>{item?.description}</p>
                                </div>
                              </div>
                            </article>
                          )
                        )}
                        {/* <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                                                    <div className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                                                        <img className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src="https://cube.dev/images/product/apis-feature-1.svg" alt="" /></div>
                                                    <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                                                        <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">Seamlessly
                                                            integrate with every&nbsp;application.
                                                        </h2>
                                                        <div>
                                                            <p>Cube’s
                                                                <a href="https://cube.dev/integrations">integrations</a>
                                                                and <a href="https://cube.dev/docs/rest-api">REST</a>,
                                                                <a href="https://cube.dev/docs/backend/graphql">GraphQL</a>,
                                                                and <a href="https://cube.dev/docs/backend/sql">Postgres-compliant
                                                                    SQL APIs</a> ensure compatibility with every
                                                                modern data stack. Plus, reduce development context
                                                                switching: manage data models in your favorite
                                                                language—Python, JavaScript, or YAML—and see them
                                                                visually with <a href="https://cube.dev/docs/cloud/workspace/cube-ide/#data-graph">Data
                                                                    Graph</a>.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </article> */}
                        {/* <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                                                    <div className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc">
                                                        <img className="ProductFeatureCard_ProductFeatureCard__image__hYlZT" src="https://cube.dev/images/product/apis-feature-2.svg" alt="" /></div>
                                                    <div className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht">
                                                        <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">Reduce
                                                            time-to-value with development tools
                                                        </h2>
                                                        <div>
                                                            <p>Cube
                                                                Cloud enables team collaboration and rapid data
                                                                model prototyping with a development toolkit that
                                                                includes <a href="https://cube.dev/docs/dev-tools/dev-playground">Playground</a>,
                                                                <a href="https://cube.dev/docs/cloud/workspace/cube-ide">Data
                                                                    Model IDE</a>, <a href="https://cube.dev/docs/cloud/workspace/cube-ide#development-mode">Development
                                                                        Mode</a>, <a href="https://cube.dev/docs/cloud/workspace/cube-ide#data-graph">Data
                                                                            Graph</a>, and more. Reduce time authoring and
                                                                debugging the data model—and more time with your
                                                                actionable insights.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </article> */}
                        {/* <article className="ProductFeatureCard_ProductFeatureCard__B7f19 ProductFeatureCard_ProductFeatureCard--inView__4EHXT">
                                                    <div
                                                        className="ProductFeatureCard_ProductFeatureCard__media__WE9Tc"
                                                        bis_skin_checked={1}
                                                    >
                                                        <img
                                                            className="ProductFeatureCard_ProductFeatureCard__image__hYlZT"
                                                            src="https://ucarecdn.com/2383faef-e4f8-45f5-a316-343b1f1214ed/"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="ProductFeatureCard_ProductFeatureCard__texts__vB9ht"
                                                        bis_skin_checked={1}
                                                    >
                                                        <h2 className="ProductFeatureCard_ProductFeatureCard__title__0ZCuD">
                                                            Connect ready-to-query data models in a couple of clicks.{" "}
                                                        </h2>
                                                        <div bis_skin_checked={1}>
                                                            <p>
                                                                Reduce time-to-insights from hours to minutes and streamline your
                                                                semantic layer integration with{" "}
                                                                <a href="https://cube.dev/docs/semantic-layer-sync/#semantic-layer-sync">
                                                                    Semantic Layer Sync
                                                                </a>
                                                                . SLS complements Cube's SQL API and automatically populates your BI
                                                                tool with the metrics you defined in Cube, and automatically syncs data
                                                                model changes from Cube to your BI—without additional set up within the
                                                                tool.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </article> */}
                      </section>
                    </div>
                    <div
                      className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-2xl__hlbVN Page_Section--transparent__kCYSU Product_ProductPages__Section__SHAYD Product_ProductPages__Section--lastFeatureSection___N3Ho Product_ProductPages__Section--animated__q_VW3 Product_ProductPages__Section--inView__V2KYi"
                      style={{
                        "--section_padding_top": "0px",
                        "--section_padding_bottom": "var(--space-4xl)",
                      }}
                      bis_skin_checked="1"
                    >
                      <div
                        className="Page_SectionHeader__eXcwE Product_ProductPages__featureHeader__4hJz7 Page_SectionHeader--appearance-dark__hGYCv Page_SectionHeader--level-h1__TlC8a"
                        bis_skin_checked="1"
                      >
                        <h2 className="Page_SectionHeader__title__tIV1t">Leverage limitless integrations.</h2>
                      </div>
                      <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-xs__Jdh_4 Section--gap-none" bis_skin_checked="1">
                        <p>
                          The fact that Cube’s semantic layer includes an API layer solves the many-to-many problem most organizations face. No matter the data sources and downstream apps in your
                          stack, Cube’s instant data APIs infuse your stack with universal compatibility, <a href="https://cube.dev/integrations">easy integrations</a>, and data accessibility.
                        </p>
                      </div>
                      <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none" bis_skin_checked="1">
                        <img className="Product_ProductPages__bigMedia_img_mobile__Q3C92" src="https://cube.dev/images/product/apis.svg" alt="" />
                        <img className="Product_ProductPages__bigMedia_img__sMU7n" src="https://cube.dev/images/product/apis.svg" alt="" />
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
            <p>
              Data Graph visualizes <a href="https://cube.dev/docs/schema/reference/cube">cubes</a>
              and <a href="https://cube.dev/docs/schema/reference/joins">joins</a>
              between them as an entity-relationship diagram (ERD). It allows to have a bird &apos s-eye view of the data model and visually detects connected parts &apos i.e. &apos groups of cubes
              that don &apos t have any relationships with other groups.
            </p>
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
