import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const socialIcon = [
    {
      logo: <img src="/image/instagram.svg" />,
      color: "#d50058",
      name: "instagram",
    },
    {
      logo: <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faFacebookF} />,
      color: "#00a1e0",
      name: "facebook",
    },
    {
      logo: <img src="/image/twitter.svg" />,
      color: "#2b9587",
      name: "twitter",
    },
    {
      logo: (
        <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faLinkedinIn} />
      ),
      color: "#fdb821",
      name: "linkedIn",
    },
  ];

  const setting = {
    instagram: {
      linkValue: "https://www.instagram.com/ ",
    },
    facebook: {
      linkValue: "https://www.facebook.com",
    },
    twitter: {
      linkValue: "https://twitter.com",
    },
    linkedIn: {
      linkValue: "https://in.linkedin.com",
    },
  };

  const onClickSocialicon = (selectedIcon) => {
    let name = selectedIcon?.name;
    if (Object.keys(setting || {})?.length > 0 && setting[`${name}`]) {
      window.open(setting[`${name}`]?.linkValue, "_blank");
    }
  };

  return (
    <>
      <div className="py-[60px] pr-[65px] pl-[64px] bg-[#4a4f55] relative w-full bottom-0 cxl: py-[20px] cxl:pl-[35px]">
        <div className="flex flex-col justify-center max-w-full my-0 mx-auto">
          <div className="flex grid-cols-minmax-213 justify-between items-center lg:flex-wrap">
            <div className="mb-[5px] lg:gap-0 lg:items-center lg:justify-center lg:mb-[20px]">
              <img
                src="/image/logo.svg"
                className="h-[75px] w-[95px]"
                alt="pirkx_logo"
              />
              <div className="flex items-center">
                <p className="text-white text-[11px] mt-[22px] mb-[28px] font-[Nobel-bold] font-bold tracking-[3.3px] leading-[1.5] uppercase">
                  UNITED KINGDOM
                </p>
                <span className="ml-2 cursor-pointer mb-[11px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </span>
              </div>
              <div className="flex text-white">
                {socialIcon?.map((item) => {
                  const { logo, color } = item;
                  const bgColor = `bg-[${color}]`;
                  return (
                    <div
                      key={logo}
                      onClick={() => onClickSocialicon(item)}
                      className={`cursor-pointer flex items-center justify-center w-[43px] h-[43px] rounded-full border-solid border-[1px] border-white text-center leading-[43px] my-0 mr-[16px] ml-0 hover:bg-[${color}] hover:transition-all hover:duration-500 hover:ease-in-out xl:my-0 xl:mx-[1px] lg:w-[40px] lg:h-[40px] xmd:my-0 xmd:mx-[7px] xmd:w-[40px] xmd:h-[40px] xmd:leading-[39px]`}
                    >
                      {logo}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-[30px] xmd:gap-[15px] xmd:flex-wrap xmd:w-full xmd:flex xmd:flex-col">
              <div className="flex flex-col text-left">
                <div className="border-l-2 border-solid border-gray-500 pl-[28px] xl:border-l-0 xl:pl-0">
                  <p className="text-[13px] mb-[16px] font-bold text-white opacity-50 font-[Nobel-bold] leading-[1.54] tracking-[3.25px]">
                    COMPANY
                  </p>
                  <div className="flex gap-[25px] xmd:gap-[15px] xmd:flex-wrap xmd:w-full xmd:flex xmd:flex-col">
                    <div>
                      <p
                        onClick={() => navigate("/personal")}
                        className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in"
                      >
                        PERSONAL
                      </p>
                      <p
                        onClick={() => navigate("/business")}
                        className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in"
                      >
                        BUSINESS
                      </p>
                      <p
                        onClick={() => navigate("/pricing")}
                        className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in"
                      >
                        PRICING
                      </p>
                    </div>
                    <div>
                      <p
                        onClick={() => navigate("/spotlight")}
                        className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in"
                      >
                        SPOTLIGHT
                      </p>
                      <p className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in">
                        ABOUT
                      </p>
                      <p
                        onClick={() => navigate("/join")}
                        className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in"
                      >
                        JOIN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="border-l-2 border-solid border-gray-500 pl-[28px] xl:border-l-0 xl:pl-0">
                  <p className="text-[13px] mb-[16px] font-bold text-white opacity-50 font-[Nobel-bold] leading-[1.54] tracking-[3.25px]">
                    HELP
                  </p>
                  <p className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in">
                    CALCULATE MY SAVINGS
                  </p>
                  <p className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in">
                    HELP ME CHOOSE
                  </p>
                  <p className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in">
                    FAQS
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="border-l-2 border-solid border-gray-500 pl-[28px] xl:border-l-0 xl:pl-0">
                  <p className="text-[13px] mb-[16px] font-bold text-white opacity-50 font-[Nobel-bold] leading-[1.54] tracking-[3.25px]">
                    GET IN TOUCH
                  </p>
                  <p className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in">
                    CONTACT US
                  </p>
                  <p className="text-white mb-[5px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in">
                    PRESS
                  </p>
                  <div className="h-[28px]" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="border-l-2 border-solid border-gray-500 pl-[28px] xl:border-l-0 xl:pl-0">
                  <p className="text-[13px] mb-[16px] font-bold text-white opacity-50 font-[Nobel-bold] leading-[1.54] tracking-[3.25px]">
                    NEWSLETTER
                  </p>
                  <p className="text-white mb-[10px] text-[19px] no-underline font-[Nobel-light] font-[300] cursor-pointer leading-[1.47] tracking-normal hover:transition-all hover:duration-200 hover:ease-in">
                    Keep up-to-date with all our exciting news and <br /> get
                    wellbegings tips in your inbox
                  </p>
                  <div className="flex flex-nowrap w-full gap-[15px] xl:flex-wrap">
                    <input
                      className="border-2 border-gray-400 bg-[#404143] px-2 py-1 max-w-[221px] w-full font-[Nobel-Regular] h-[35px] text-[12px] opacity-100 bg-none bg-transparent hover:border-gray-900 hover:border-[2px] placeholder:opacity-[55%] placeholder:font-[Nobel-Regular] placeholder:text-[19px] placeholder:font-normal placeholder:not-italic placeholder:leading-[1.47] placeholder:tracking-normal placeholder:text-left placeholder:text-white caret-white focus:border-blue-600"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button className="w-[128px] h-[32px] pt-[10px] pr-[20px] pb-[11px] pl-[21px] rounded-[17.5px] bg-[#ff6c00] font-[Nobel-bold] font-bold leading-normal text-[11px] text-white tracking-[3.3px] uppercase">
                      SubsCribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center relative py-[28px] pr-[60px] pl-[64px] bg-[#404143] w-full lg:py-[70px] lg:pr-0 lg:pl-[35px] lg:flex-col">
        <div className="bg-[#d30b55] rounded-[50%] h-[59px] w-[59px] absolute right-[65px] z-10 top-0 -m-[40px] flex items-center justify-center">
          <img src="/image/chat.svg" className="text-white text-[36px]" />
        </div>
        <div className="lg:m-0">
          <p className="text-white mb-[20px] mt-[10px] text-[11px] no-underline font-[Nobel-bold] font-bold cursor-pointer leading-[2.09] tracking-[2.75px] hover:transition-all hover:duration-200 hover:ease-in">
            <span>T&CS</span> | <span>PRIVACY POLICY</span> |{" "}
            <span>COOKIE POLICY</span>
          </p>
          <p className="text-white mb-[5px] text-[13px] no-underline font-[Corbel] font-normal cursor-pointer leading-normal tracking-normal hover:transition-all hover:duration-200 hover:ease-in">
            pirkx Limited,71-75 Shefton Street, Convert Garden, London
          </p>
          <p className="text-white mb-[5px] text-[13px] no-underline font-[Corbel] font-normal cursor-pointer leading-normal tracking-normal hover:transition-all hover:duration-200 hover:ease-in">
            © Copyright 2023 pirkx Limited. All rights reserved
          </p>
        </div>
        <div className="flex">
          <img
            className="h-[45px] w-[135px] object-contain mr-[10px]"
            src="/image/appStore.png"
          />
          <img
            className="h-[45px] w-[135px] object-contain"
            src="/image/googlePlay.png"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
