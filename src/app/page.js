"use client";
import Image from "next/image";
import VideoListImg from "./components/VideoList";
import VideoListVideo from "./components/VideoListVideo";
import HeroTitle from "./components/HeroTitle";
import HeroTitleFirst from "./components/HeroTitleFirst";
import SecondSection from "./components/SecondSection";
import { DetailPageDataModel } from "@/app/components/DetailPageDataModel";
import { DetailPageCaching } from "./components/DetailPageCaching";
import { DetailAccessControl } from "./components/DetailAccessControl";
import { DetailPageApi } from "./components/DetailPageApi";
import SementaticLayer from "./components/SementaticLayer";
import { useEffect, useRef, useState } from "react";
import SementaticLayerBottom from "./components/SementaticLayerBottom";
import SemanticCards from "./components/SemanticCards";
import Logo from "./components/Logo";
import { logging } from "../../next.config";
import FragmentsSvg from "./components/FragmentsSvg";
import Menu from "./components/menu";
const secondSectionTopData = {
  counting: "16,439",
  countingMembers: "8,890",
  MembersText: "members",
  starText: "stars",
  title: "Camada Semântica em Nutrição<>estudos globais personalizados",
  description: "Traduzindo pesquisas de universidades líderes em planos nutricionais únicos, moldando sua jornada de saúde personalizada.",
};
const secondSectionBottomData = {
  title: "O que é a Camada Semântica?",
  description: `A Camada Semântica da Eumaximo é uma inovação em saúde, analisando seu microbioma, 
  níveis de gordura e glicose, e dados nutricionais. Com tecnologia avançada e algoritmos inteligentes, 
  ela oferece orientações personalizadas para compreender e melhorar sua saúde, auxiliando em decisões 
  informadas para o bem-estar máximo.`,
  smallDescription: "Quero saber mais sobre a Camada Semântica da Eumaximo.",
};
const Colors = {
  bodyColor: "#111122",
  footerColor: "#008000",
  heroSectionSecondColor: "#e9ce5d",
  animationCards: [
    {
      backgroundColor: "#7170F4",
      borderColor: "#D3D2FF",
      title: "Blog",
      description: "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a single source of truth.",
      bottomIcon: "/card-icons/microbes.svg",
    },
    {
      backgroundColor: "#4395EB",
      borderColor: "#D5EDFE",
      title: "Access Control",
      description: "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a single source of truth.",
      bottomIcon: "/card-icons/nutrition.svg",
    },
    {
      backgroundColor: "#EB9845",
      borderColor: "#FFF9F0",
      title: "Caching",
      description: "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a single source of truth.",
      bottomIcon: "/card-icons/fat.svg",
    },
    {
      backgroundColor: "#D83E74",
      borderColor: "#FFC1D3",
      title: "Apis",
      description: "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a single source of truth.",
      bottomIcon: "/card-icons/sugar.svg",
    },
  ],
};
export default function Home() {
  const [dataModeling, setDataModeling] = useState(true);
  const [dataCaching, setDataCaching] = useState(false);
  const [dataAccess, setDataAccess] = useState(false);
  const [width, setWidth] = useState(1920);
  const [dataApi, setDataApi] = useState(false);
  const scrolltoDiv = useRef(null);
  const gradientBackground = useRef(null);
  const scrollToHandler = async (type) => {
    scrolltoDiv.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(async () => {
      if (type === "Modeling") {
        await setDataModeling(true);
        await setDataAccess(false);
        await setDataCaching(false);
        await setDataApi(false);
      }
      if (type === "Access") {
        await setDataModeling(false);
        await setDataAccess(true);
        await setDataCaching(false);
        await setDataApi(false);
      }
      if (type === "Caching") {
        await setDataModeling(false);
        await setDataAccess(false);
        await setDataCaching(true);
        await setDataApi(false);
      }
      if (type === "Apis") {
        await setDataModeling(false);
        await setDataAccess(false);
        await setDataCaching(false);
        await setDataApi(true);
      }
    }, 1000);
  };

  useEffect(() => {
    if (dataModeling) {
      gradientBackground.current.style.background = "linear-gradient(180deg,  #111122 8%, #008000 30%, #008000)";
    } else if (dataCaching) {
      gradientBackground.current.style.background = "linear-gradient(180deg,  #111122 7.5%, #e9ce5d 20%)";
    } else if (dataAccess) {
      gradientBackground.current.style.background = "linear-gradient(180deg,  #111122 7.5%, #FFA500 20%)";
    } else if (dataApi) {
      gradientBackground.current.style.background = "linear-gradient(180deg,  #111122 7.5%, #F84F39 20%)";
    }
  }, [dataModeling, dataCaching, dataAccess, dataApi]);

  const [menuIsActive, setMenuIsActive] = useState(false);
  const [menuIsHovered, setMenuIsHovered] = useState(false);

  useEffect(() => {
    const menuItem = document.getElementById("menu");

    const line1 = document.getElementById("menuLine1");
    const line3 = document.getElementById("menuLine3");

    if (!menuIsActive) {
      setMenuIsHovered(false)
    }

    function xIconAnimate(openState) {
      if (openState) {
        line1.classList.remove("rotate-0");
        line3.classList.remove("rotate-0");
        line1.classList.add("rotate-45");
        line3.classList.add("-rotate-45");
        line1.classList.add("relative");
        line1.classList.add("top-[.85rem]");
      } else {
        line1.classList.remove("rotate-45");
        line3.classList.remove("-rotate-45");
        line1.classList.add("rotate-0");
        line3.classList.add("rotate-0");
        line1.classList.remove("relative");
        line1.classList.remove("top-[.85rem]");
      }
    }

    if (menuIsActive) {
      document.body.style.overflow = "hidden";
      menuItem.classList.remove("-translate-y-full");
      menuItem.classList.add("translate-y-0");
      xIconAnimate(true);
    } else {
      document.body.style.overflow = "scroll";
      menuItem.classList.remove("translate-y-0");
      menuItem.classList.add("-translate-y-full");
      xIconAnimate(false);
    }
  }, [menuIsActive]);

  return (
    <main style={{ background: Colors.bodyColor }} className={`bg-[${Colors.bodyColor}]`}>
      <Menu />

      <section id="hero-section" data-w-id="e2240eed-9ecb-9f4e-f566-b74c4e1cb7ac" className="hero-section">
        <div className="hero-wrapper cc-orange" style={{ backgroundColor: Colors.heroSectionSecondColor }}>
          <div className="nav-spacer flex items-center justify-between px-5 sm:px-20 lg:px-48 xl:px-72 gap-10">
            <img className="w-24 sm:w-32" src="/logo/eumaximo-high-res-black.png" />
            <div className="flex items-center justify-center">
              <div className={`z-20 absolute bg-white w-20 h-20 rounded-full ${menuIsActive ? "duration-[2500ms] scale-[500]" : "duration-[800ms] scale-[0]"}`}></div>
              <div
                // className={`flex flex-col justify-center items-center gap-2 cursor-pointer bg-[#111122] w-16 h-16 rounded-full ${menuIsActive ? "z-[120]" : ""}`}
                className={`flex flex-col justify-center items-center gap-2 cursor-pointer bg-[#008000] w-[40px] h-[40px] rounded-full ${menuIsActive ? "z-[120]" : "z-[10]"} ${menuIsHovered ? 'animate-main-wrap transform transition-transform scale-110' : ''}`}
                onClick={() => {
                  setMenuIsActive(!menuIsActive);
                  if (!menuIsActive) {
                    setMenuIsHovered(false);
                  }
                }}
                onMouseEnter={() => {
                  if (!menuIsActive) {
                    setMenuIsHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!menuIsActive) {
                    setMenuIsHovered(false);
                  }
                }}
              >
                <div className={`${menuIsActive ? "relative bottom-[0.4rem]" : null}`}>
                  <div id="menuLine1" className={`h-0.5 duration-500 mb-2 bg-black w-4 ${menuIsHovered ? "animate-top" : ""}`}></div>
                  <div id="menuLine3" className={`h-0.5 duration-500 bg-black w-4 ${menuIsHovered ? "animate-bottom" : ""}`}></div>
                  {/* <div id="menuLine1" className="h-0.5 duration-500 mb-2 bg-white w-4"></div>
                  <div id="menuLine3" className="h-0.5 duration-500 bg-white w-4"></div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-title-flex-wrapper">
            <HeroTitleFirst />
          </div>
          <div style={{ height: "60vh", width: `1920px` }} className="hero-collections_wrapper">
            <div
              className="hero-cards_collection-list-wrapper w-dyn-list"
              style={{
                transform: "translate3d(-45.684%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  <VideoListImg imgUrl={"./Superlist_files/625d7ae44b92b031ab860a57_card-light-01.jpg"} />
                  <VideoListVideo
                    imgUrl={"./Superlist_files/625d7c129fdba028c21d6f2c_card-light-02.jpg"}
                    videoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396239/website/mini%20cards/v2/Renovation_Card_peu5jt.webm"}
                    secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396239/website/mini%20cards/v2/Renovation_Card_peu5jt.mp4"}
                  />
                  <VideoListVideo
                    imgUrl={"./Superlist_files/625d7c2881d0426fcd2ca457_card-light-03.jpg"}
                    videoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396244/website/mini%20cards/v2/Kitchen_Stool_Idea_Card_vn7abp.webm"}
                    secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396244/website/mini%20cards/v2/Kitchen_Stool_Idea_Card_vn7abp.mp4"}
                  />
                  <VideoListImg imgUrl={"./Superlist_files/625d7c969fdba0afeb1de9d4_card-light-04.jpg"} />
                  <VideoListImg imgUrl={"./Superlist_files/6467d07201faed7c16c4db7c_k1-min.png"} />
                  <VideoListImg imgUrl={"./Superlist_files/625d7cefaffa760c78c2d940_card-light-06.jpg"} />
                  <VideoListVideo
                    imgUrl={"./Superlist_files/625d7d01dfd17f3847ef7d07_card-light-07.jpg"}
                    videoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396252/website/mini%20cards/v2/Chat_Scrolling_Card_e7g4et.webm"}
                    secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396252/website/mini%20cards/v2/Chat_Scrolling_Card_e7g4et.mp4"}
                  />
                  <VideoListImg imgUrl={"./Superlist_files/625d7d0cf3930d2d2eb0e8cf_card-light-08.jpg"} />
                  <VideoListImg imgUrl={"./Superlist_files/625d7d20f3930d1c54b102b3_card-light-09.jpg"} />
                  <VideoListImg imgUrl={"./Superlist_files/625d7d376e467ebde3eb163a_card-light-10.jpg"} />
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                  <VideoListImg imgUrl={"./Superlist_files/625d7ae44b92b031ab860a57_card-light-01.jpg"} />
                  <VideoListVideo
                    imgUrl={"./Superlist_files/625d7c129fdba028c21d6f2c_card-light-02.jpg"}
                    videoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396239/website/mini%20cards/v2/Renovation_Card_peu5jt.webm"}
                    secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396239/website/mini%20cards/v2/Renovation_Card_peu5jt.mp4"}
                  />
                  <VideoListVideo
                    imgUrl={"./Superlist_files/625d7c2881d0426fcd2ca457_card-light-03.jpg"}
                    videoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396244/website/mini%20cards/v2/Kitchen_Stool_Idea_Card_vn7abp.webm"}
                    secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396244/website/mini%20cards/v2/Kitchen_Stool_Idea_Card_vn7abp.mp4"}
                  />
                  <VideoListImg imgUrl={"./Superlist_files/625d7c969fdba0afeb1de9d4_card-light-04.jpg"} />
                  <VideoListImg imgUrl={"./Superlist_files/6467d07201faed7c16c4db7c_k1-min.png"} />
                  <VideoListImg imgUrl={"./Superlist_files/625d7cefaffa760c78c2d940_card-light-06.jpg"} />
                  <VideoListVideo
                    imgUrl={"./Superlist_files/625d7d01dfd17f3847ef7d07_card-light-07.jpg"}
                    videoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396252/website/mini%20cards/v2/Chat_Scrolling_Card_e7g4et.webm"}
                    secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653396252/website/mini%20cards/v2/Chat_Scrolling_Card_e7g4et.mp4"}
                  />
                  <VideoListImg imgUrl={"./Superlist_files/625d7d0cf3930d2d2eb0e8cf_card-light-08.jpg"} />
                  <VideoListImg imgUrl={"./Superlist_files/625d7d20f3930d1c54b102b3_card-light-09.jpg"} />
                  <VideoListImg imgUrl={"./Superlist_files/625d7d376e467ebde3eb163a_card-light-10.jpg"} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="073af362-6ea5-34e3-4471-301acdd3fa11" style={{ width: "58.5156%", height: "120vh" }} className="hero-clipping-wrapper">
          <div className="hero-wrapper">
            <div className="nav-spacer g-pointer-events-none flex items-center justify-between px-5 sm:px-20 lg:px-48 xl:px-72 gap-10">
              <img className="w-24 sm:w-32" src="/logo/eumaximo-high-res-white.png" />
              <div
                className={`z-10 flex flex-col justify-center items-center gap-2 cursor-pointer bg-[#eace5d] w-[40px] h-[40px] rounded-full ${menuIsHovered ? 'animate-main-wrap transform transition-transform scale-110' : ''}`}
                onClick={() => {
                  setMenuIsActive(!menuIsActive);
                }}
                onMouseEnter={() => {
                  setMenuIsHovered(true);
                }}
                onMouseLeave={() => {
                  setMenuIsHovered(false);
                }}
              >
                <div>
                  <div id="" className={`h-0.5 duration-500 mb-2 bg-black w-4 ${menuIsHovered ? "translate-y-[10px]" : ""}`}></div>
                  <div id="" className={`h-0.5 duration-500 bg-black w-4 ${menuIsHovered ? "-translate-y-[10px]" : ""}`}></div>
                </div>
              </div>
            </div>
            <div className="hero-title-flex-wrapper">
              <HeroTitle headingColor={Colors.heroSectionSecondColor} />
            </div>
            <div style={{ height: "60vh", width: `1920px` }} className="hero-collections_wrapper">
              <div
                className="hero-cards_collection-list-wrapper w-dyn-list overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                style={{
                  transform: "translate3d(-45.684%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                  <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7ae7005e9ed86c07f9d2_card-dark-01.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/q_auto:good/v1653395915/website/mini%20cards/v2/Navigation_Bar_slpbkv.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/q_auto:good/v1653395915/website/mini%20cards/v2/Navigation_Bar_slpbkv.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7c0ff20543fe572134c7_card-dark-02.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395869/website/mini%20cards/v2/Animation_rel1jl.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395869/website/mini%20cards/v2/Animation_rel1jl.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7c2c02a09d62bd379394_card-dark-03.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395866/website/mini%20cards/v2/Animation_fzjx2c.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395866/website/mini%20cards/v2/Animation_fzjx2c.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7c8f81d042b7eb2cc943_card-dark-04.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395739/website/mini%20cards/v2/Animation_sqmqdq.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395739/website/mini%20cards/v2/Animation_sqmqdq.mp4"}
                    />
                    <VideoListImg imgUrl="./Superlist_files/625d7ca581d04264002cd5b7_card-dark-05.jpg" />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7cf36e467e8560eafb7e_card-dark-06.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395864/website/mini%20cards/v2/Animation_o0vvtn.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395864/website/mini%20cards/v2/Animation_o0vvtn.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/6467fed7899246757f8a5af6_Rep-min.png"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/v1684536003/website/mini%20cards/v2/Repeat_tkjecn.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/v1684536003/website/mini%20cards/v2/Repeat_tkjecn.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7d0f5730251fd2cff4a7_card-dark-08.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395875/website/mini%20cards/v2/Animation_nk2ydp.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395875/website/mini%20cards/v2/Animation_nk2ydp.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7d24676ac8166cabc2c4_card-dark-09.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395889/website/mini%20cards/v2/Pitch_Deck_Covers_dbeuve.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395889/website/mini%20cards/v2/Pitch_Deck_Covers_dbeuve.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7d3a60c6445253d2078a_card-dark-10.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395888/website/mini%20cards/v2/App_Launch_al7bjr.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395888/website/mini%20cards/v2/App_Launch_al7bjr.mp4"}
                    />
                  </ul>
                  <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7ae7005e9ed86c07f9d2_card-dark-01.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/q_auto:good/v1653395915/website/mini%20cards/v2/Navigation_Bar_slpbkv.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/q_auto:good/v1653395915/website/mini%20cards/v2/Navigation_Bar_slpbkv.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7c0ff20543fe572134c7_card-dark-02.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395869/website/mini%20cards/v2/Animation_rel1jl.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395869/website/mini%20cards/v2/Animation_rel1jl.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7c2c02a09d62bd379394_card-dark-03.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395866/website/mini%20cards/v2/Animation_fzjx2c.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395866/website/mini%20cards/v2/Animation_fzjx2c.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7c8f81d042b7eb2cc943_card-dark-04.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395739/website/mini%20cards/v2/Animation_sqmqdq.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395739/website/mini%20cards/v2/Animation_sqmqdq.mp4"}
                    />
                    <VideoListImg imgUrl="./Superlist_files/625d7ca581d04264002cd5b7_card-dark-05.jpg" />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7cf36e467e8560eafb7e_card-dark-06.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395864/website/mini%20cards/v2/Animation_o0vvtn.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395864/website/mini%20cards/v2/Animation_o0vvtn.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/6467fed7899246757f8a5af6_Rep-min.png"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/v1684536003/website/mini%20cards/v2/Repeat_tkjecn.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/v1684536003/website/mini%20cards/v2/Repeat_tkjecn.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7d0f5730251fd2cff4a7_card-dark-08.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395875/website/mini%20cards/v2/Animation_nk2ydp.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395875/website/mini%20cards/v2/Animation_nk2ydp.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7d24676ac8166cabc2c4_card-dark-09.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395889/website/mini%20cards/v2/Pitch_Deck_Covers_dbeuve.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395889/website/mini%20cards/v2/Pitch_Deck_Covers_dbeuve.mp4"}
                    />
                    <VideoListVideo
                      imgUrl="./Superlist_files/625d7d3a60c6445253d2078a_card-dark-10.jpg"
                      videoUrl="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395888/website/mini%20cards/v2/App_Launch_al7bjr.webm"
                      secondVideoUrl={"https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395888/website/mini%20cards/v2/App_Launch_al7bjr.mp4"}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="handlebar_wrapper" style={{ left: "58.5156%" }}>
          <img width={40} src="https://assets-global.website-files.com/625593a881b8ebd169835ca5/6272dd170459e2734bd53502_handlebar.svg" alt="" className="handlebar_image" />
        </div>
      </section>
      {/* <div style={{ marginTop: "4%" }}></div> */}
      <SementaticLayer {...secondSectionTopData} />
      <Logo />

      <SecondSection onPressReadMore={(type) => scrollToHandler(type)} animationCards={Colors.animationCards} />
      <div className="overflow-x-hidden" ref={gradientBackground}>
        <SementaticLayerBottom {...secondSectionBottomData} />
        <div ref={scrolltoDiv}>
          {dataModeling && (
            <DetailPageDataModel>
              <SemanticCards sectionRef={scrolltoDiv} sectionHandler={(type) => scrollToHandler(type)} dataModel={dataModeling} dataCaching={dataCaching} dataAccess={dataAccess} dataApi={dataApi} />
            </DetailPageDataModel>
          )}
          {dataCaching && (
            <DetailPageCaching>
              <SemanticCards sectionRef={scrolltoDiv} sectionHandler={(type) => scrollToHandler(type)} dataModel={dataModeling} dataCaching={dataCaching} dataAccess={dataAccess} dataApi={dataApi} />
            </DetailPageCaching>
          )}
          {dataAccess && (
            <DetailAccessControl>
              <SemanticCards sectionRef={scrolltoDiv} sectionHandler={(type) => scrollToHandler(type)} dataModel={dataModeling} dataCaching={dataCaching} dataAccess={dataAccess} dataApi={dataApi} />
            </DetailAccessControl>
          )}
          {dataApi && (
            <DetailPageApi>
              <SemanticCards sectionRef={scrolltoDiv} sectionHandler={(type) => scrollToHandler(type)} dataModel={dataModeling} dataCaching={dataCaching} dataAccess={dataAccess} dataApi={dataApi} />
            </DetailPageApi>
          )}
        </div>
        {/* <FragmentsSvg /> */}
      </div>
      <div style={{ marginBottom: "4%" }}></div>
      <footer id="signup" data-w-id="8912e0d8-13fa-7635-fd54-54fc5e19c5a3" className="footer footerNew">
        <div className="footer-shape w-embed">
          <svg width="100%" viewBox="0 0 1577 4307" fill="none" className=" relative sm:z-10" xmlns="http://www.w3.org/2000/svg">
            <path fill={Colors.footerColor}>
              <animate
                attributeName="d"
                dur="30s"
                repeatCount="indefinite"
                values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
              M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
              M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
              M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
              ></animate>
            </path>
          </svg>
        </div>
        <div className="container-footer-title relative z-30">
          <p className="heading-medium g-text-align-center g-margin-b-medium">
            <span className="g-text-color-white">Apply</span>
            <span className="text-black">to join our private beta</span>
          </p>
          <p className="text-size-medium g-text-align-center g-font-weight-semibold text-black">Available soon on all major devices.</p>
        </div>
        <div className="container-small g-position-relative">
          <div className="beta-form-block w-form">
            <form
              id="beta-form"
              name="email-form"
              data-name="Email Form"
              redirect="https://form.typeform.com/to/oLQt0t7c"
              data-redirect="https://form.typeform.com/to/oLQt0t7c"
              action="https://superlist.us8.list-manage.com/subscribe/post?u=17f99aef615910508a9c9570e&amp;amp;id=f9c83b2913"
              method="post"
              className="beta-form"
              data-wf-page-id="627d50981442f6dbcf183f2b"
              data-wf-element-id="8912e0d8-13fa-7635-fd54-54fc5e19c5ae"
              aria-label="Email Form"
            >
              <label for="EMAIL-3" className="beta-form_label">
                Your email
              </label>
              <input
                type="email"
                className="beta-form_field w-input"
                autocomplete="off"
                maxlength="256"
                name="EMAIL"
                data-name="EMAIL"
                placeholder=""
                data-w-id="8912e0d8-13fa-7635-fd54-54fc5e19c5b1"
                data-lpignore="true"
                id="EMAIL-3"
                required=""
              />
              <input
                type="submit"
                id="form-button"
                value=""
                data-wait=""
                data-w-id="8912e0d8-13fa-7635-fd54-54fc5e19c5b2"
                className="beta-form_submit-button w-button"
                style={{
                  willChange: "transform",
                  transform: "translate3d(0.0032px, -0.0032px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </form>
            <div className="beta-form_success w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
              <div>We’ll be in touch!</div>
            </div>
            <div className="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
              <div>
                Something went wrong while submitting the form. It appears you might have an ad blocker preventing you from using this form. Please head{" "}
                <a href="https://eepurl.com/hsAKu5" target="_blank" className="g-text-color-black">
                  over here
                </a>{" "}
                to submit your contact details.
              </div>
            </div>
          </div>
          <div className="legal-wrapper">
            <div className="legal-wrapper_left">
              <a href="https://www.superlist.com/" aria-current="page" className="footer-logo w-inline-block w--current">
                <img src="./Superlist_files/6268773a30ee193bf6721a12_logo-superlist-footer.svg" loading="lazy" alt="" />
              </a>
              <div className="legal-wrapper_right">
                <a href="https://twitter.com/superlisthq" target="_blank" className="legal-link text-white">
                  Twitter
                </a>
                <a href="https://github.com/superlistapp" target="_blank" className="legal-link">
                  GitHub
                </a>
                <a href="https://www.superlist.com/open-source" className="legal-link">
                  Open source
                </a>
              </div>
            </div>
            <div className="legal-wrapper_right">
              <div className="legal-link-wrapper">
                <div data-w-id="ec94e8d9-d5ec-3dcd-cb1b-f7be0c2d630e" className="legal-link">
                  Legal
                </div>
                <div className="legal-popup">
                  <h3 className="text-size-medium g-margin-b-small">Superlist Software GmbH</h3>

                  <h3 className="text-size-medium g-margin-b-small">Managing Director</h3>
                  <p className="text-size-xsmall g-margin-b-medium">
                    Niklas Jansen<a href="https://www.superlist.com/#" className="g-text-color-red"></a>
                  </p>
                  <h3 className="text-size-medium g-margin-b-small">Commercial Register</h3>

                  <div data-w-id="dbb4aa3f-de87-cf06-847f-22f3f02f84a7" className="close-legal">
                    <img src="./Superlist_files/627acd6582aaa806139f1d7c_close-popup.svg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <a href="https://www.superlist.com/privacy-policy" className="legal-link text-white">
                Privacy
              </a>
              <a href="mailto:hello@superlist.com" className="legal-link text-white">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
