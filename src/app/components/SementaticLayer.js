import React from "react";

function SementaticLayer({
  counting = "16,439",
  countingMembers = "8,890",
  MembersText = "members",
  starText = "stars",
  title = "The Semantic Layer<>for every data app",
  description = "Connect data silos, drive consistent metrics, and power your AI and analytics with context.",
}) {
  return (
    <div
      style={{ "-section_padding_top": "0px", "-section_padding_bottom": "0px", background: "transparent", marginBottom: "8vh" }}
      className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Home_SectionHeader__RGl79"
    >
      <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-m__E6wuQ Section--gap-none Home_SectionHeader__content__7eSBQ">
        <h1 className="Home_SectionHeader__title__aBhZ4">
          {title?.split("<>")[0]}
          <br />
          {title?.split("<>")[1]}
        </h1>
        <p className="Home_SectionHeader__subtitle__pn9hg">{description}</p>
        <div className="Home_SectionHeader__buttons__jwSY4">
          <a href="https://cubecloud.dev/auth/signup" className="Button_Button__VQ4Ej Button--appearance-light Button_Button--cherry__FCGeq Button_Button--size-l__ia8eU">
            Get Started
          </a>
          {/* <a style={{visibility:'hidden'}} className="Button_Button__VQ4Ej Button_Button--appearance-dark__b0Eeg Button_Button--cherry__FCGeq Button_Button--size-l__ia8eU Button_Button--variant-outline__oaRuC" href="/contact">Request a demo</a> */}
        </div>
      </div>
    </div>
  );
}

export default SementaticLayer;
