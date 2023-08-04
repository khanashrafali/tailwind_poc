import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function Home() {
  const navigate = useNavigate();

  const logoList = {
    type: "logo",
    list: [
      {
        name: "logo1",
        src: "/image/image_yahoo.png",
        altLogo: "logo1",
      },
      {
        name: "logo2",
        src: "/image/image_ifa.png",
        altLogo: "logo2",
      },
      {
        name: "logo3",
        src: "/image/image_pwc.png",
        altLogo: "logo3",
      },
    ],
  };

  const imgTopJsonData = [
    {
      type: "text",
      alt: "pic",
      text: "ONLINE DEMO",
      toggle: true,
      backImage: "/image/bgZoom.png",
      image: "/image/Zoom.png",
      link: "/online_demo",
    },
    {
      alt: "pic",
      type: "text",
      text: "CALL ME BACK",
      toggle: true,
      backImage: "/image/bgPhone.png",
      image: "/image/Phone.png",
    },
    {
      text: "BOOK A MEETING",
      alt: "pic",
      toggle: true,
      backImage: "/image/bgCalender.png",
      image: "/image/Calender.png",
      type: "link",
      href: "https://meetings.hubspot.com/ben1516/pirkx-demo",
      target: "_blank",
    },
  ];

  const featureDetail = [
    {
      type: "toggleFeature",
      label: "Health",
      value: true,
    },
    {
      type: "toggleFeature",
      label: "Wealth",
      value: true,
    },
    {
      type: "toggleFeature",
      label: "Education",
      value: true,
    },
    {
      type: "toggleFeature",
      label: "Recognition",
      value: true,
    },
    {
      type: "toggleFeature",
      label: "Social",
      value: true,
    },
  ];

  const CustomPrevArrow = (props) => (
    <button
      style={{ zIndex: 99 }}
      {...props}
      type="button"
      className="custom-slick-button slick-prev slick-btn"
      aria-label="Previous"
    >
      <img
        src="/image/leftArrow.svg"
        alt="arrowLeft"
        style={{ position: "absolute", opacity: 0.5 }}
      />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      type="button"
      className="custom-slick-button slick-next slick-btn"
      aria-label="Next"
    >
      <img
        src="/image/rightArrow.svg"
        alt="arrowRight"
        style={{ position: "absolute" }}
      />
    </button>
  );

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const bottomCardData = [
    {
      color: "#ffb81d",
      backgroundColor: "#ffb81d",
      title: "PAY AS YOU GO",
      dollar: "£4.50",
      monthMessgae: "per month",
      monthColor: "#151515",
      messgae: "Add pirkx360 for an extra £1.50 per person, per month",
      messageColor: "#4a4f55",
      btn: "JOIN NOW",
      type: "text",
    },
    {
      color: "#d50358",
      isVal: true,
      backgroundColor: "#d50358",
      title: "MOST POPULAR",
      subtitle: "Two months free",
      dollar: "£45",
      monthMessgae: "12 month's",
      monthColor: "#151515",
      messgae: "Add pirkx360 for an extra £18 per person, per year",
      messageColor: "#4a4f55",
      btn: "JOIN NOW",
      type: "text",
    },
    {
      color: "#81bc00",
      backgroundColor: "#81bc00",
      title: "QUARTERLY",
      dollar: "£12",
      monthMessgae: "per quarter",
      monthColor: "#151515",
      messgae: "Add pirkx360 for an extra £4.50 per person, per quarter",
      messageColor: "#4a4f55",
      btn: "JOIN NOW",
      type: "text",
    },
  ];

  const personalMember = {
    hidenSection: {
      isShowBtn: "true",
      isShowHideBtn: "true",
    },
    headline: {
      type: "text",
      maxWordCount: "300",
      value: "Personal membership",
      isRequired: "true",
    },
    subtitle: {
      type: "text",
      maxWordCount: "300",
      value:
        "<p>For&nbsp;<span style='text-decoration:underline; text-underline-position:under;'>myself</span></p>",
      isRequired: "true",
    },
    body: {
      type: "text",
      maxWordCount: "300",
      value:
        "Wellbeing benefits for you and your family, for only £4.50 per person, per month.",
      isRequired: "true",
    },
    buttonLabel: {
      type: "button",
      value: "Find out more",
      isShowBtn: "true",
      isShowHideBtn: "true",
      isRequired: "true",
    },
  };

  const businessMember = {
    hidenSection: {
      isShowBtn: "true",
      isShowHideBtn: "true",
    },
    headline: {
      type: "text",
      maxWordCount: "300",
      value: "Business Membership",
      isRequired: "true",
    },
    subtitle: {
      type: "text",
      maxWordCount: "300",
      value:
        "<p>For my&nbsp;<span style='text-decoration:underline; text-underline-position:under;'>workforce & clients</span></p>",
      isRequired: "true",
    },
    body: {
      type: "text",
      maxWordCount: "300",
      value: "Enhance the health and happiness for your workforce and clients.",
      isRequired: "true",
    },
    buttonLabel: {
      type: "button",
      value: "Find out more",
      isShowBtn: "true",
      isShowHideBtn: "true",
      isRequired: "true",
    },
  };

  const useHover = () => {
    const [hovering, setHovering] = useState(false);
    const onMouseEnter = (item) => {
      setHovering(item || true);
    };
    const onMouseLeave = (item) => {
      setHovering(false);
    };

    return [hovering, onMouseEnter, onMouseLeave];
  };

  const decodeTextToHtml = (text = "", isFromCms = false) => {
    //   return { __html: text };
    return (
      <span
        dangerouslySetInnerHTML={{ __html: text }}
        className="ckSpanMarginBtm"
      />
    );
  };

  const [hovering, onMouseEnter, onMouseLeave] = useHover();
  const bottomCard = Object.values(bottomCardData || {});

  const settings1 = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ChapterCardData = [
    {
      title: "Worry at work",
      subTitle:
        "Chapter 1: Does sharing personal worries at work make life easier?",
      paraText:
        "Our mission is to make sure every worker gets access to wellbeing benefits. In the UK, a third of the UK workforce likes to discuss personal issues at work as it helps them solve dilemmas. Pirkx investigates.",
    },
    {
      title: "Worry at school",
      subTitle:
        "Chapter 1: Does sharing personal worries at work make life easier?",
      paraText:
        "Our mission is to make sure every worker gets access to wellbeing benefits. In the UK, a third of the UK workforce likes to discuss personal issues at work as it helps them solve dilemmas. Pirkx investigates.",
    },
    {
      title: "Worry at Driving",
      subTitle:
        "Chapter 1: Does sharing personal worries at work make life easier?",
      paraText:
        "Our mission is to make sure every worker gets access to wellbeing benefits. In the UK, a third of the UK workforce likes to discuss personal issues at work as it helps them solve dilemmas. Pirkx investigates.",
    },
    {
      title: "Worry at Driving",
      subTitle:
        "Chapter 1: Does sharing personal worries at work make life easier?",
      paraText:
        "Our mission is to make sure every worker gets access to wellbeing benefits. In the UK, a third of the UK workforce likes to discuss personal issues at work as it helps them solve dilemmas. Pirkx investigates.",
    },
  ];

  const onlineButtonLabel = {
    type: "button",
    value: {
      type: "span",
      key: null,
      ref: null,
      props: {
        dangerouslySetInnerHTML: {
          __html: "ONLINE DEMO",
        },
        className: "ckSpanMarginBtm",
      },
      _owner: null,
      _store: {},
    },
    linkValue: "ONLINE DEMO",
    isShowBtn: "true",
    isShowHideBtn: "true",
    isRequired: "true",
    placeHolder: "Online demo",
  };

  const callMeBackButton = {
    type: "button",
    value: {
      type: "span",
      key: null,
      ref: null,
      props: {
        dangerouslySetInnerHTML: {
          __html: "CALL ME BACK",
        },
        className: "ckSpanMarginBtm",
      },
      _owner: null,
      _store: {},
    },
    isShowBtn: "true",
    isShowHideBtn: "true",
    isRequired: "true",
    placeHolder: "Call me back",
    linkValue: "CALL ME BACK",
  };

  const bookMeetingButton = {
    type: "button",
    value: {
      type: "span",
      key: null,
      ref: null,
      props: {
        dangerouslySetInnerHTML: {
          __html: "BOOK A MEETING",
        },
        className: "ckSpanMarginBtm",
      },
      _owner: null,
      _store: {},
    },
    isShowBtn: "true",
    isShowHideBtn: "true",
    isRequired: "true",
    placeHolder: "Book a meeting",
    linkValue: "BOOK A MEETING",
    websiteUrl: "https://",
  };

  return (
    <>
      <div className="flex min-h-screen flex-col relative h-auto mt-0">
        <div
          className="absolute left-0 top-0 w-full h-full brightness-50 bg-cover -z-10 md:h-auto bg-no-repeat bg-top -mt-[4px]"
          style={{
            backgroundImage: "url(/image/header-banner-img.png)",
          }}
        ></div>
        <div className="relative box-border pt-[238px] pr-0 pb-0 pl-[86px]">
          <div
            className="absolute left-0 top-0 w-full h-[700px] brightness-50 bg-cover -z-10 bg-no-repeat md:pt-[156px] md:px-[50px] md:pb-0"
            style={{
              backgroundImage: "url(/image/landing-black-curve.svg)",
            }}
          ></div>
          <div className="max-w-[556px] w-full mb-[33px]">
            <img
              className="max-w-[915px] w-full xmd:max-w-[400px]"
              src="/image/landing-sub-heading-img.svg"
            />
          </div>
          <p className="font-[Nobel-Light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-left text-white max-w-[610px] mb-[23px]">
            Access a world of health and financial wellbeing benefits, online
            and in the app for only £4.50 per person, per month.
          </p>
          <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-white max-w-[530px] mb-[32px]">
            With a pirkx membership you can access wellbeing benefits, all in
            one place in and get access in minutes. Plus, there’s no unnecessary
            contracts or commitments.
          </p>
          <div className="flex justify-start mb-[80px]">
            <button
              onClick={() => navigate("/join")}
              className="rounded-[30px] font-[Nobel-bold] text-[12px] font-bold tracking-[3.6px] mr-[20px] py-[5px] px-[20px] h-[36px] text-white bg-[#ff6c00] hover:bg-[#ff6c00] hover:text-[#fff]"
            >
              Join now
            </button>
            <button className="rounded-[30px] font-[Nobel-bold] text-[12px] font-bold tracking-[3.6px] mr-0 py-[5px] px-[20px] h-[36px] text-[#ff6c00] bg-white hover:bg-white hover:text-[#ff6c00]">
              Help me choose
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer xmd:top-[75%] xsm:top-[85%] w-full h-full absolute top-[54%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-[107px] h-[114px]" src="/image/Ourplay.png" />
          <p className="text-[21px] tracking-[5.25px] font-[Nobel-book] text-center uppercase text-[#3cbfae]">
            WATCH VIDEO
          </p>
        </div>
      </div>
      <div className="flex flex-wrap relative justify-end py-[90px] pr-[40px] pl-[400px] bg-[rgba(60,191,174,0.1)] xl:justify-center xl:flex-col xl:items-center xl:pl-[40px] xl:pb-0">
        <div className="flex flex-wrap w-full">
          <div className="flex justify-center items-center flex-row w-full">
            <div className="basis-1/2 flex-grow-0 max-w-[50%]">
              <p className="mt-0 uppercase font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] leading-[1.5] sm:mb-[10px]">
                trusted by the people we work with
              </p>
            </div>
            <div className="basis-1/2 flex-grow-0 max-w-[50%]">
              <div className="flex items-center justify-center gap-[20px] 2xl:gap-[20px] xl:gap-[50px] lg:gap-[25px] flex-wrap w-full">
                {logoList?.list?.map((item, index) => {
                  return (
                    <div
                      className="max-w-[150px] w-full text-center py-[10px] px-0 2xl:max-w-[120px] xmd:max-w-[150px] sm:py-[20px] sm:px-0"
                      key={index}
                    >
                      <img src={item?.src} alt={item?.altLogo} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 left-[90px] bottom-0 xl:relative xl:left-auto">
          <img
            src="/image/mobile_frame.png"
            className="max-w-[265px] lg:w-full h-full"
          />
        </div>
      </div>
      <div className="flex text-white flex-wrap w-full">
        <div className="basis-1/2 bg-[#3cbfae]">
          <div className="ml-[8%]">
            <div className="flex flex-wrap w-full items-end justify-between mt-[79px] mb-[25px]">
              <p
                className="uppercase font-[Nobel-book] text-[21px] not-italic tracking-[5.25px] text-center text-[#fff]"
                id="WHY PIRKX?"
              >
                WELLBEING AS UNIQUE AS YOU
              </p>
            </div>
            <div className="mr-[15%]">
              <p className="font-[Nobel-Light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-left text-white mb-[22px]">
                Affordable wellbeing benefits for everyone, all in one place.
              </p>
              <p className="font-[Corbel] text-[19px] leading-[1.47] font-[400] tracking-normal text-white mb-[20px]">
                Packed with benefits every member will value, pirkx is fully
                customisable andcreates true wellbeing on demand. Whether you’re
                a company or an individual - itpays back to use pirkx.
              </p>
              <p className="font-[Corbel] text-[19px] leading-[1.47] font-[400] tracking-normal text-white mb-[20px]">
                Using just one of our 40+ benefits and services such as 24/7
                private GP, discountedgym membership, or using pirkx portal for
                cashback on your weekly shop, deliversgreater value than the
                cost of a single membership!
              </p>
              <p className="font-[Corbel] text-[19px] leading-[1.47] font-[400] tracking-normal text-white mb-[20px]">
                We believe everyone should have access to workplace benefits and
                by 2025, we aim topositively impact one million people.
              </p>
              <div className="flex gap-[40px] mt-[20px] mb-[60px] flex-wrap w-full">
                {imgTopJsonData?.map((item, index) => {
                  const {
                    type,
                    href,
                    target,
                    backImage,
                    image,
                    text,
                    alt,
                    link,
                    value,
                  } = item || "";
                  return (
                    <div
                      className="flex items-center flex-col cursor-pointer"
                      key={index}
                    >
                      <div className="flex items-center justify-center relative w-[73px] h-[73px]">
                        <img src={backImage} alt={alt} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <img src={image} alt={alt} />
                        </div>
                      </div>
                      <p className="text-[12px] mt-[5px] tracking-[3px] font-[Nobel-Bold] font-bold leading-[1.5]">
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 bg-[#f5f5f5] relative">
          <div className="flex justify-center flex-col items-center flex-wrap py-0 px-[26px]">
            <p className="font-[Nobel-Book] font-[400] text-[21px] not-italic tracking-[5.25px] text-start text-[#3cbfae] mt-[77px] uppercase mb-[25px]">
              FEATURES
            </p>
            <p className="font-[Nobel-Light] font-[300] text-[1.75em] not-italic leading-[1.29] tracking-[5.25px] text-left text-[#151515] mb-[22px]">
              Improve your health, wealth and happiness.
            </p>
            <p className="font-[Corbel] font-[400] text-[19px] tracking-normal text-[#4a4f55] mb-[26px] max-w-[699px]">
              As a member of pirkx, you’ll be able to channel into our 5 pillars
              of wellbeing, with numerous programmes for each, providing you and
              your household with crucial benefits, so that you can live life to
              the full.
            </p>
          </div>
          <div className="flex justify-center items-center p-[2px] xmd:pb-[30px]">
            <div
              className="w-full h-[210px] py-0 px-[60px] relative"
              {...settings}
            >
              <div
                className="absolute right-[17px] top-0 h-be-height bg-cover w-[123px] z-10 bg-no-repeat bg-right"
                style={{
                  backgroundImage: "url(/image/shadow_img_slider.svg)",
                }}
              ></div>
              <div
                className="absolute bg-cover h-be-height w-[123px] top-0 left-[17px] z-10 bg-no-repeat bg-left"
                style={{
                  backgroundImage: "url(/image/left-shadow-img.svg)",
                }}
              ></div>
              {featureDetail?.map((item, index) => {
                return (
                  <div className="" key={index} itemID={index}>
                    <div className="md:mr-0"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div id="PRICING">
        <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[77px] uppercase mb-[25px]">
          No fussy costs or contracts
        </p>
        <div className="flex flex-wrap w-full items-center flex-col">
          <p className="max-w-[950px] font-[Nobel-Light] text-[28px] font-[300] text-center text-[#1515151] mb-[57px]">
            Awesome wellbeing benefits at an extremely affordable price.
          </p>
        </div>
        <div className="flex flex-wrap w-calc-width my-[52px] p-0 justify-center">
          {bottomCard?.map((item, index) => {
            const { backgroundColor, color, title, isVal } = item || "";
            const RelativePos =
              hovering === title ? title : hovering ? "" : isVal && title;
            const textColor = RelativePos === title ? "#fff" : color;

            const bgColor = RelativePos
              ? `${backgroundColor}`
              : "rgba(255,184,29,0.05)";
            console.log({ hovering, textColor, RelativePos, bgColor });
            return (
              <div
                className={` max-w-[497px] basis-1/3 pt-[54px] pb-[53px] px-0 relative transition-all duration-300 ease-in-out flex justify-center items-center flex-col hover:bg-${backgroundColor}`}
                style={{ backgroundColor: bgColor, color: color }}
                onMouseEnter={() => onMouseEnter(title)}
                onMouseLeave={onMouseLeave}
                itemID={index}
                key={index}
              >
                <div
                  className={`max-w-[375px] p-[${
                    index === 1 ? "30px" : "60px"
                  }]`}
                >
                  {RelativePos && (
                    <div className="absolute top-0 left-0">
                      <img
                        className="w-[6rem]"
                        src="/image/lightbeforeImage.png"
                      />
                    </div>
                  )}
                  {RelativePos && (
                    <div className="absolute bottom-0 right-0">
                      <img
                        className="w-[6rem]"
                        src="/image/lightAfterImage.png"
                      />
                    </div>
                  )}
                  <p
                    className={`text-center text-[2.813em] leading-[0.78] z-10 mb-[16px] font-[Nobel-Regular] text-[${textColor}] font-[400] tracking-[0.00938em]`}
                  >
                    {item?.subtitle}
                  </p>
                  <p
                    className={`text-center text-[1.3125em] leading-[1.5] z-10 font-[Nobel-book] text-[${textColor}] font-[400] tracking-[5.25px]`}
                  >
                    {item?.title}
                  </p>
                  <p
                    className={`text-center text-[4.375em] leading-[1.5] font-[Nobel-bold] text-[${textColor}] font-bold tracking-[7px]`}
                  >
                    {item?.dollar}
                  </p>
                  <p
                    className={`text-center text-[2.188em] leading-[1.03] mb-[10px] font-[Nobel-light] text-[${textColor}] font-[400]`}
                  >
                    {item?.monthMessgae}
                  </p>
                  <p
                    className={`text-center text-[1.188em] leading-[1.16] mb-[17px] font-[Corbel] text-[${textColor}] font-[400]`}
                  >
                    {item?.messgae}
                  </p>
                  <div
                    className={`bg-[${textColor}] w-full h-[2px] mt-[17px] mb-[30px] mx-0`}
                  ></div>
                  <div className="flex justify-center flex-wrap w-full">
                    <button
                      className={`rounded-[30px] font-[Nobel-bold] text-[12px] font-bold tracking-[3.6px] leading-[3px] py-[5px] px-[20px] h-[36px] text-[13px] text-[${
                        RelativePos ? backgroundColor : "#fff"
                      }] bg-[${!RelativePos ? backgroundColor : "#fff"}]`}
                    ></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="max-w-[748px] font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-center text-[#4a4f55] my-0 mx-auto pt-[77px] pb-[36px]">
          pirkx is for all of us! Freelancers, independent contractors, small
          and medium size businesses, at very affordable costs. With a pirkx
          membership, you’ll get access to personal benefits and a resource of
          work related materials worth thousands of pounds.
        </p>
        <div className="flex justify-center mb-[80px] flex-wrap w-full">
          <button className="rounded-[30px] font-[Nobel-bold] text-[12px] font-bold tracking-[3.6px] mr-0 text-white py-[5px] px-[20px] h-[36px] bg-[#3cbfae]">
            PRICING
          </button>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div
          className="relative basis-1/2 flex-grow-0 min-h-[480px] flex justify-center items-center flex-col bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(/image/stella_image.png)" }}
        >
          <div className="absolute w-[480px] h-full w-1/2 mx-0 mr-0 ml-[480px] right-0 pt-[44.7px] pr-[70px] pb-[51.5px] pl-[71px] bg-[rgb(0,0,0,0.5)]">
            <img src="/image/quote_icon.svg" alt="quote" />
            <p className="font-[Corbel] text-[19px] keading-[1.47] tracking-normal text-white mb-[20px] max-w-[699px]">
              We’re here for you when life gets a little complicated too, with
              mental health resilience coaching, counselling, virtual gym
              classes, physiotherapy, nutrition and health tips, budgeting, debt
              advice and so much more, all on demand to address meaningful
              circumstances.
            </p>
            <p className="font-[nobel-book] text-[21px] not-italic tracking-[5.25px] text-start text-[#3cbfae] uppercase mb-[5px]">
              Stella smith
            </p>
            <p className="text-white text-[12px] tracking-[3px] mb-[37px] leading-normal font-[Nobel-bold]">
              Founder, ceo
            </p>
            <div className="flex justify-start mb-[80px] w-full">
              <a className="rounded-[30px] font-[Nobel-bold] text-[12px] font-bold tracking-[3.6px] mr-0 texxt-[#3cbfae] py-[5px] px-[20px] h-[36px] bg-white">
                Our story
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex-grow-0">
          <div className="flex flex-wrap w-full">
            {[personalMember, businessMember]?.map((item, index) => {
              return (
                <div
                  className="pt-[71px] pb-[81.7px] px-[10px] min-h-[480px] flex justify-center items-center flex-col basis-1/2 flex-grow-0"
                  style={{
                    backgroundColor: index === 0 ? "#fab70a" : "#009ddb",
                  }}
                >
                  <div className="flex items-center justify-center flex-col">
                    <p className="font-[Nobel-book] text-[21px] not-italic tracking-[5.25px] text-center text-white mt-[19px] uppercase font-[400] leading-[1.5]">
                      {decodeTextToHtml(item?.headline?.value)}
                    </p>
                    <p className="font-[Nobel-light] text-[30px] font-[300] not-italic tracking-normal leading-normal text-center text-[#151515]">
                      {decodeTextToHtml(item?.subtitle?.value)}
                    </p>
                    <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-white max-w-[355px] text-center pt-[15px] pb-[30px] font-[400]">
                      {decodeTextToHtml(item?.body?.value)}
                    </p>
                    <button
                      className="rounded-[30px] font-[Nobel-bold] text-[12px] font-bold tracking-[3.6px] mr-0 py-[5px] px-[20px] uppercase h-[36px] bg-white"
                      style={{ color: item?.backgroundColor }}
                    >
                      {decodeTextToHtml(item?.buttonLabel?.value)}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="" id={"GET IN TOUCH"}>
        <div className="max-w-[100%] flex flex-wrap w-full py-[120px] px-[40px] bg-[#3cbfae] text-white items-center justify-center relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/image/bgHappy.svg)",
            }}
          ></div>
          <div className="basis-1/2 flex-grow-0 pl-[2%]">
            <div>
              <img src="/image/Icon-Chat.svg" className="w-[27px] h-[30px]" />
              <p className="font-[Nobel-light] text-[28px] my-[20px] font-[300] max-w-[510px] leading-[1.5] tracking-[0.00938em]">
                Discover how you and your family can enjoy pirkx in minutes
              </p>
              <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-white mb-[20px] max-w-[669px] font-[400]">
                {" "}
                We’re humanising benefits that you can only find in large
                corporations. Whoever you are and whatever you do, our
                affordable wellbeing benefits are for everyone.
              </p>
              <div className="flex gap-[40px] mt-[30px] w-full flex-wrap">
                <div className="flex items-center cursor-pointer flex-col">
                  <div className="flex items-center justify-center relative w-[73px] h-[73px]">
                    <img src="/image/bgZoom.png" alt="online demo" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img src="/image/Zoom.png" alt="online demo" />
                    </div>
                  </div>
                  <p className="text-[12px] font-[Nobel-bold] font-bold mt-[3px] tracking-[3px] leading-[1.5]">
                    ONLINE DEMO
                  </p>
                </div>
                <div className="flex items-center cursor-pointer flex-col">
                  <div className="flex items-center justify-center relative w-[73px] h-[73px]">
                    <img src="/image/bgPhone.png" alt="callmeback" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img src="/image/Phone.png" alt="callmeback" />
                    </div>
                  </div>
                  <p className="text-[12px] font-[Nobel-bold] font-bold mt-[3px] tracking-[3px] leading-[1.5]">
                    CALL ME BACK
                  </p>
                </div>
                <div className="flex items-center cursor-pointer flex-col">
                  <div className="flex items-center justify-center relative w-[73px] h-[73px]">
                    <img src="/image/bgCalender.png" alt="book meeting" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img src="/image/Calender.png" alt="book meeting" />
                    </div>
                  </div>
                  <p className="text-[12px] font-[Nobel-bold] font-bold mt-[3px] tracking-[3px] leading-[1.5]">
                    BOOK A MEETING
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex-grow-0 flex justify-center">
            <img
              className="max-w-[570.5px] min-h-[559.2px] w-full z-20"
              src="/image/whiteHappier.svg"
              alt="Happy Image"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <p className="font-[Nobel-book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[62px] mb-[18px]">
          SPOTLIGHT
        </p>
        <p className="font-[Nobel-light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-center text-[#151515] mb-[28px]">
          Check out everything happening at pirkx
        </p>
        <div className="flex justify-center mb-[80px] w-full flex-wrap">
          <button className="rounded-[30px] font-[Nobel-bold] font-bold text-[12px] tracking-[3.6px] mr-0 text-white py-[5px] px-[20px] h-[36px] bg-[#3cbfae] min-w-[64px] uppercase">
            Spotlight
          </button>
        </div>
        {/* <div className="mb-[20px]">
            <div></div>
        </div> */}
      </div>
      <div className="flex bg-[#EC6408] w-full flex-wrap">
        <div className="relative w-full basis-1/2">
          <div
            className="absolute left-0 top-0 h-[293px] bg-contain w-[222px] bg-no-repeat"
            style={{
              backgroundImage: "url(/image/smiley_curve.svg)",
            }}
          ></div>
          <div
            className="absolute left-0 bottom-0 h-full max-w-[442px] w-full bg-contain bg-no-repeat bg-bottom"
            style={{
              backgroundImage: "url(/image/pink-bottom-curve.png)",
            }}
          ></div>
          <div className="flex max-w-[100%]">
            <img src="/image/404-1.svg" alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full relative bg-[rgb(0,0,0,0.09)] flex items-center justify-center basis-1/2 flex-grow-0">
          <div
            className="absolute right-0 top-0 h-full bg-contain w-full bg-no-repeat bg-right"
            style={{
              backgroundImage: "url(/image/green_orange_img.svg)",
            }}
          ></div>
          <dive className="max-w-[700px] w-full">
            {/* {ChapterCardData?.map((item, index) => {
              const { title, subTitle, paraText } = item || "";
              return ( */}
            <div className="py-[40px] px-[10px]">
              <p className="font-[Nobel-book] text-[21px] not-italic tracking-[5.25px] text-start text-white uppercase mb-[25px]">
                Worry at Driving
              </p>
              <p className="font-[Nobel-light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-left text-white mb-[22px]">
                Chapter 1: Does sharing personal worries at work make life
                easier?
              </p>
              <p className="font-[Corbel] text-[19px] max-w-[600px] leading-[1.47] tracking-normal text-white mb-[20px]">
                Our mission is to make sure every worker gets access to
                wellbeing benefits. In the UK, a third of the UK workforce likes
                to discuss personal issues at work as it helps them solve
                dilemmas. Pirkx investigates.
              </p>
              <div className="flex flex-wrap justify-start mb-[80px]">
                <button className="rounded-[30px] font-[Nobel-bold] font-bold text-[12px] tracking-[3.6px] mr-0 text-[#ff6c00] py-[5px] px-[20px] h-[36px] bg-white uppercase">
                  More
                </button>
              </div>
            </div>
            {/* );
            })} */}
          </dive>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center pr-[40px] bg-white py-[5%] px-[5%]">
        <p className="uppercase tracking-[2.5px] text-center font-[Nobel-book] font-[500] leading-[1.2] text-[21px] text-[#3cbfae]">
          AFFORDABLE WELLBEING BENEFITS IMPROVING HEALTH, WEALTH AND HAPPINESS
        </p>
      </div>
    </>
  );
}

export default Home;
