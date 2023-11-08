import React from 'react'

function SementaticLayer({
    counting = "16,439",
    countingMembers = "8,890",
    MembersText = "members",
    starText = "stars",
    title = "The Semantic Layer<>for every data app",
    description = "Connect data silos, drive consistent metrics, and power your AI and analytics with context.",

}) {
    return (
        <div style={{ "-section_padding_top": '0px', "-section_padding_bottom": '0px', background: "transparent", marginBottom: "8vh" }} className="Page_Section__WvViv Page_Section--appearance-dark__Qf_N8 Page_Section--gap-xl__E8tSh Home_SectionHeader__RGl79">
            <div className="Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-m__E6wuQ Section--gap-none Home_SectionHeader__content__7eSBQ">
                <div className="Home_SectionHeader__pretitle__uwFAx">
                    <div className="Home_SectionHeader__badges__tOoHc">
                        <a href="https://github.com/cube-js/cube.js" target="_blank" rel="noreferrer" className="Home_SectionHeader__badge__G_8_9">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                                <path d="M11.86 1.6c1.9 0 3.67.44 5.3 1.31a9.8 9.8 0 015.24 8.75c0 2.27-.65 4.32-1.96 6.12a9.95 9.95 0 01-5.09 3.73c-.23.05-.4.03-.53-.07a.52.52 0 01-.2-.42v-3.46c0-.89-.22-1.5-.7-1.9 1.03-.1 1.8-.25 2.3-.42.79-.27 1.39-.7 1.81-1.24.48-.71.7-1.7.7-2.94 0-.52-.1-.99-.3-1.36-.14-.27-.4-.61-.8-1.03.1-.28.18-.62.2-1a4.67 4.67 0 00-.3-1.82c-.22-.05-.62.02-1.13.22-.32.15-.72.32-1.18.57l-.55.37a9.73 9.73 0 00-5.27 0l-.55-.37a8.54 8.54 0 00-1.2-.57c-.5-.2-.88-.24-1.13-.17a3.9 3.9 0 00-.3 1.83c0 .4.05.69.17.94-.32.42-.57.79-.73 1.13-.15.35-.22.77-.22 1.31 0 1.24.22 2.2.68 2.9.4.56.97 1 1.75 1.28.5.17 1.26.3 2.26.42-.35.32-.58.79-.68 1.4-.47.23-.92.3-1.38.25a2.02 2.02 0 01-1.68-1.1c-.17-.3-.4-.55-.68-.75l-.62-.3-.3-.05c-.3 0-.48.05-.48.15-.03.1.05.2.2.32l.2.18c.2.1.4.3.58.54.17.2.3.42.42.67l.18.32c.15.42.4.74.8.94a3 3 0 001.2.37c.33.02.69.02 1.06-.05l.45-.05.05 2.52c0 .17-.07.3-.2.42-.12.1-.3.15-.52.07a10.13 10.13 0 01-5.17-3.73 10.34 10.34 0 01-1.96-6.15c0-1.88.45-3.58 1.33-5.11a9.93 9.93 0 013.69-3.64 10.53 10.53 0 015.24-1.33zM5.21 15.51c.05-.05.13-.07.2-.02.08.05.1.1.08.17-.03.07-.1.07-.2.02s-.1-.12-.08-.17zm.45.35c.05-.05.13-.05.2.05.08.07.1.14.06.2-.05.04-.13.04-.2-.06-.1-.07-.1-.14-.06-.2zm.43.52c.05-.03.1-.03.15-.03a.2.2 0 01.1.1c.08.1.08.2 0 .25a.08.08 0 01-.1 0c-.02-.03-.1-.05-.15-.08-.05-.12-.05-.22 0-.24zm.5.59c.03-.03.08-.03.13-.03l.15.08c.05.05.07.1.07.15.03.05 0 .1-.02.12-.08.07-.18.07-.3-.05a.22.22 0 01-.08-.17c0-.08.03-.08.05-.1zm.68.52c.03-.1.1-.15.25-.1.15.05.2.1.2.17-.02.08-.05.13-.1.15-.05.02-.1.02-.17 0-.08-.02-.1-.07-.15-.1-.05-.05-.05-.07-.03-.12zm1.28.17c0-.02-.02-.05-.08-.07a.4.4 0 00-.2-.05c-.15 0-.2.05-.2.17 0 .1.08.15.23.15.17-.03.25-.08.25-.2zm.55-.25c.15 0 .23.05.23.13.02.07-.05.15-.2.2-.05 0-.1 0-.15-.03-.05-.02-.08-.07-.08-.15 0-.07.08-.12.2-.15z" fill="currentColor" />
                            </svg>
                            {counting}{/* */} {starText}
                        </a>
                        <a href="https://slack.cube.dev" target="_blank" rel="noreferrer" className="Home_SectionHeader__badge__G_8_9">
                            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} fill="none">
                                <path fill="#E01E5A" d="M4.441 9.847c0 .809-.661 1.47-1.47 1.47-.81 0-1.471-.661-1.471-1.47 0-.81.661-1.471 1.47-1.471h1.471v1.47zm.739 0c0-.81.66-1.471 1.47-1.471.81 0 1.47.661 1.47 1.47v3.683c0 .81-.66 1.47-1.47 1.47-.81 0-1.47-.66-1.47-1.47V9.847z" />
                                <path fill="#36C5F0" d="M6.65 3.942c-.81 0-1.47-.662-1.47-1.47C5.18 1.661 5.84 1 6.65 1c.81 0 1.47.662 1.47 1.471v1.47H6.65zm.003.741c.81 0 1.47.66 1.47 1.47 0 .81-.66 1.47-1.47 1.47H2.97c-.81 0-1.471-.66-1.471-1.47 0-.81.661-1.47 1.47-1.47h3.683z" />
                                <path fill="#2EB67D" d="M12.555 6.153c0-.81.66-1.47 1.47-1.47.81 0 1.47.66 1.47 1.47 0 .81-.66 1.47-1.47 1.47h-1.47v-1.47zm-.739 0c0 .81-.661 1.47-1.47 1.47-.81 0-1.471-.66-1.471-1.47V2.471c0-.81.661-1.47 1.47-1.47.81 0 1.471.66 1.471 1.47v3.682z" />
                                <path fill="#ECB22E" d="M10.346 12.058c.809 0 1.47.661 1.47 1.47 0 .81-.661 1.471-1.47 1.471-.81 0-1.471-.66-1.471-1.47v-1.47h1.47zm0-.741c-.81 0-1.471-.661-1.471-1.47 0-.81.661-1.471 1.47-1.471h3.683c.81 0 1.47.661 1.47 1.47 0 .81-.66 1.471-1.47 1.471h-3.682z" />
                            </svg>
                            {countingMembers}{/* */}{MembersText}
                        </a>
                    </div>
                </div>
                <h1 className="Home_SectionHeader__title__aBhZ4">{title?.split("<>")[0]}<br />{title?.split("<>")[1]}</h1>
                <p className="Home_SectionHeader__subtitle__pn9hg">{description}</p>
                <div className="Home_SectionHeader__buttons__jwSY4">
                    <a href="https://cubecloud.dev/auth/signup" className="Button_Button__VQ4Ej Button--appearance-light Button_Button--cherry__FCGeq Button_Button--size-l__ia8eU">Get Started</a>
                    {/* <a style={{visibility:'hidden'}} className="Button_Button__VQ4Ej Button_Button--appearance-dark__b0Eeg Button_Button--cherry__FCGeq Button_Button--size-l__ia8eU Button_Button--variant-outline__oaRuC" href="/contact">Request a demo</a> */}
                </div>

            </div>
        </div>
    )
}

export default SementaticLayer