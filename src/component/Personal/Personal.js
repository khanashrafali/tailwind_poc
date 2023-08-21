import React, { useEffect, useState } from "react";
import { StyledButton } from "./Styled";

function Personal() {
  const [isSticky, setSticky] = useState(false);
  const [tabName, setTabName] = useState("WHY PIRKX?");
  const isSmallScreen = window.innerWidth <= 900;

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

  const [hovering, onMouseEnter, onMouseLeave] = useHover();
  useEffect(() => {
    const handleScroll = () => {
      const windscroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const sections = document.querySelectorAll("div[id], p[id]");
      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (
          section.offsetTop <= windscroll + 250 &&
          id &&
          tabList?.includes(id)
        ) {
          setTabName(id);
        }
      });
      if (window.pageYOffset > window.innerHeight - 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabList = [
    {
      type: "text",
      value: "WHY PIRKX?",
      tabId: "persanal WHY PIRKX?",
    },
    {
      type: "text",
      value: "WHAT DO I GET?",
      tabId: "persanal WHAT DO I GET?",
    },
    {
      type: "text",
      value: "PIRKX360",
      tabId: "persanal PIRKX360",
    },
    {
      type: "text",
      value: "PRICING",
      tabId: "persanal PRICING",
    },
    {
      type: "text",
      value: "GET IN TOUCH",
      tabId: "persanal GET IN TOUCH",
    },
  ];

  const scrollTos = (element, top = 80) => {
    let el = document.getElementById(element);
    if (el) {
      let offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition - top,
        behavior: "smooth",
      });
    }
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

  const bottomCard = Object.values(bottomCardData || {});

  const handleTabChange = (e, newValue) => {
    console.log("tablist", newValue);
    scrollTos(newValue);
    setTabName(newValue);
  };

  const imgTopJson = [
    {
      type: "text",
      text: "WHAT CAN I SAVE?",
      toggle: "true",
      backImage: "/image/bgCalender.png",
      image: "/image/SaveCalculate.svg",
      alt: "bgCalender",
    },
    {
      type: "text",
      text: "HELP ME CHOOSE",
      toggle: "true",
      alt: "Phone",
      backImage: "/image/bgPhone.png",
      image: "/image/help.svg",
    },
    {
      text: "ONLINE DEMO",
      toggle: "true",
      backImage: "/image/bgZoom.png",
      image: "/image/Zoom.png",
      type: "link",
      alt: "bgCalender",
      navigate: "/online_demo",
    },
  ];

  const cardDetails = [
    {
      key: "true",
      playSrc: "/image/play4.svg",
      heading: {
        type: "text",
        value: "HEALTH",
      },
      subheading: {
        type: "text",
        value: "Physical and mental health is our priority",
      },
      bannersImage: {
        type: "image",
        src: "/image/Mask Group 507.png",
      },
      backgroundVideo: {
        type: "video",
        src: "",
      },
      content1Title: {
        type: "text",
        value: "Online GP 24/7",
      },
      content1Subtitle: {
        type: "text",
        value:
          "Unlimited video or telephone GP appointments for you and your household, with prescriptions delivered to your door",
      },
      content2Title: {
        type: "text",
        value: "Telephone counselling 24/7",
      },
      content2Subtitle: {
        type: "text",
        value:
          "Raise an unlimited number of issues and receive 6 structured counselling sessions per issue with our BACP accredited counsellors",
      },
      videoUrl: {
        type: "video",
        playSrc:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      image: {
        type: "image",
        src: "/image/yellowCheck.svg",
      },
    },
    {
      key: "true",
      playSrc: "/image/play2.svg",
      heading: {
        type: "text",
        value: "WEALTH",
      },
      subheading: {
        type: "text",
        value: "We making your money go further",
      },
      bannersImage: {
        type: "image",
        src: "/image/Mask Group 506.png",
      },
      backgroundVideo: {
        type: "video",
        src: "",
      },
      content1Title: {
        type: "text",
        value: "Online GP 24/7",
      },
      content1Subtitle: {
        type: "text",
        value:
          "Unlimited video or telephone GP appointments for you and your household, with prescriptions delivered to your door",
      },
      content2Title: {
        type: "text",
        value: "Telephone counselling 24/7",
      },
      content2Subtitle: {
        type: "text",
        value:
          "Raise an unlimited number of issues and receive 6 structured counselling sessions per issue with our BACP accredited counsellors",
      },
      videoUrl: {
        type: "video",
        playSrc:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      image: {
        type: "image",
        src: "/image/pinkCheck.svg",
      },
    },
    {
      key: "true",
      playSrc: "/image/play5.svg",
      heading: {
        type: "text",
        value: "EDUCATION",
      },
      subheading: {
        type: "text",
        value: "Growing our brains grows a better human",
      },
      bannersImage: {
        type: "image",
        src: "/image/Mask Group 508.png",
      },
      backgroundVideo: {
        type: "video",
        src: "",
      },
      content1Title: {
        type: "text",
        value: "Online GP 24/7",
      },
      content1Subtitle: {
        type: "text",
        value:
          "Unlimited video or telephone GP appointments for you and your household, with prescriptions delivered to your door",
      },
      content2Title: {
        type: "text",
        value: "Telephone counselling 24/7",
      },
      content2Subtitle: {
        type: "text",
        value:
          "Raise an unlimited number of issues and receive 6 structured counselling sessions per issue with our BACP accredited counsellors",
      },
      videoUrl: {
        type: "video",
        playSrc:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      image: {
        type: "image",
        src: "/image/blueCheck.svg",
      },
    },
  ];

  const imgJsonData = [
    {
      iconHeight: "19px",
      type: "text",
      text: "ONLINE DEMO",
      toggle: "true",
      backImage: "/image/online_demo_green.svg",
      image: "/image/Zoom.png",
      alt: "Zoom",
      link: "/online_demo",
    },
    {
      type: "text",
      iconHeight: "24px",
      text: "CALL ME BACK",
      toggle: "true",
      alt: "Phone",
      backImage: "/image/callme_back_green.svg",
      image: "/image/Phone.png",
    },
    {
      text: "BOOK A MEETING",
      iconHeight: "24px",
      toggle: "true",
      backImage: "/image/book_meeting_green.svg",
      image: "/image/Calender.png",
      type: "link",
      alt: "bgCalender",
      href: "https://meetings.hubspot.com/ben1516/pirkx-demo",
      target: "_blank",
    },
  ];

  const footerCardData = [
    {
      bgImage: {
        type: "image",
        srcUrl: "/image/bgCalender.png",
        alt: "bgCalender",
      },
      image: {
        type: "image",
        srcUrl: "/image/SaveCalculate.svg",
        alt: "SaveCalculate",
      },
      title: {
        type: "button",
        value: "What can I save?",
        isShowBtn: "true",
        isShowHideBtn: "true",
      },
      titleBtnLink: {
        type: "link",
        value: "www.link.com",
        linkValue: "www.link.com",
      },
      subText: {
        type: "text",
        value: "pirkx saves our members on average ₤1,912.79 every year!",
      },
      message: {
        type: "text",
        value: "Use our calculator to see what you could save",
      },
      bgcolor: {
        type: "color",
        colorValue: "#ff6c00",
      },
    },
    {
      bgImage: {
        type: "image",
        srcUrl: "/image/bgPhone.png",
        alt: "bgPhone",
      },
      image: {
        type: "image",
        srcUrl: "/image/help.svg",
        alt: "help",
      },
      title: {
        type: "button",
        value: "Help me choose",
        isShowBtn: "true",
        isShowHideBtn: "true",
      },
      titleBtnLink: {
        type: "link",
        value: "www.link.com",
        linkValue: "www.link.com",
      },
      subText: {
        type: "text",
        value: "Curious how pirkx can improve your wellbeing?",
      },
      message: {
        type: "text",
        value: "Tell us the things and experiences you like",
      },
      bgcolor: {
        type: "color",
        colorValue: "#81bc00",
      },
    },
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center flex-col relative h-auto mt-0 md:h-auto">
        <div
          className="absolute top-0 left-0 w-full h-full brightness-50 bg-cover -z-10"
          style={{
            backgroundImage: "url(/image/personalBaner.png)",
          }}
        ></div>
        <div className="px-[5px]">
          <img
            className="w-[215.3px] h-[212.8px] absolute top-[119px] right-[40px] sm:w-[115.3px] sm:h-[112.8px] sm:top-[95px] sm:right-[20px] sm:-z-10"
            src="/image/personalLanding.svg"
            alt="landing top"
          />
          <p className="flex justify-center items-center text-center text-white text-[21px] tracking-[5.25px] font-[400] leading-[1.5] font-[Nobel-book] uppercase mt-0 z-10 md:text-[20px]">
            prikx Membership
          </p>
          <p className="flex justify-center items-center text-center text-white text-[4.375em] tracking-[17.5px] font-bold leading-normal mb-[26px] font-[Nobel-Bold] uppercase mt-[18px] z-10 md:text-[20px]">
            FOR MYSELF
          </p>
          <div className="flex flex-col items-center flex-wrap w-full">
            <p className="flex justify-center items-center max-w-[480px] w-full font-[400] text-center text-white text-[1.5em] tracking-normal leading-[1.29] mb-[20px] font-[Nobel-Light] mt-[18px] z-10 md:text-[20px]">
              Don’t miss out on the wellbeing benefits because you work for
              yourself
            </p>
            <p className="flex justify-center items-center max-w-[510px] font-[400] text-center text-white text-[1.188em] tracking-normal leading-[1.47] mb-[26px] font-[Corbel] mt-[18px] md:text-[20px]">
              With a pirkx membership you can access wellbeing benefits, all in
              one place in and get access in minutes. Plus, there’s no
              unnecessary contracts or commitments.
            </p>
          </div>
          <div className="flex justify-center mt-[32px] flex-wrap w-full">
            <button className="rounded-[30px] font-[Nobel-Bold] uppercase font-bold text-[12px] leading-[1.75] tracking-[3.6px] py-[5px] px-[20px] h-[36px] text-[#ff6c00] bg-white">
              online demo
            </button>
          </div>
        </div>
        <div
          onChange={handleTabChange}
          className={`backdrop-blur-[11.8px] h-[82px] z-30 flex items-center bg-[rgb(0,0,0,0.4)] w-full bottom-0 text-white px-[4%] transition-all duration-200 ease-in-out ${
            isSticky ? "sticky1" : "absolute"
          }`}
        >
          {tabList?.map((item) => {
            let name = item?.value;
            let keyName = item?.tabId || item?.value;
            return (
              <div className="font-[Nobel-Bold] font-bold text-[12px] p-0 min-w-0 tracking-[3.6px] mr-[40px] cursor-pointer">
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex bg-[#3cbfae] text-white flex-wrap w-full">
        <div className="basis-1/2 flex-grow-0 max-w-full bg-[#3cbfae] xmd:basis-full">
          <div className="ml-[8%]">
            <div className="flex flex-wrap w-full items-end justify-between mt-[30px] mb-[14px]">
              <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-white uppercase font-[400] leading-[1.5]">
                individuals deserve pirkx
              </p>
              <div className="mr-[32px]">
                <img
                  className="w-[59px] h-[80px]"
                  src="/image/user-icon.png"
                  alt="user_icon"
                />
              </div>
            </div>
            <div className="mr-[15%]">
              <p className="font-[Nobel-Light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-left text-white mb-[22px]">
                Affordable wellbeing benefits for everyone, all in one place.
              </p>
              <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-white mb-[20px] font-[400]">
                Packed with benefits every member will value, pirkx is fully
                customisable and creates true wellbeing on demand. Whether
                you’re a company or an individual - it pays back to use pirkx.
              </p>
              <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-white mb-[20px] font-[400]">
                Using just one of our 40+ benefits and services such as 24/7
                private GP, discountedgym membership, or using pirkx portal for
                cashback on your weekly shop, delivers greater value than the
                cost of a single membership!
              </p>
              <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-white mb-[20px] font-[400]">
                We believe everyone should have access to workplace benefits and
                by 2025, we aim to positively impact one million people.
              </p>
              <div className="flex flex-wrap w-full gap-[40px] mt-[20px] mb-[60px]">
                {imgTopJson?.map((item, index) => {
                  const {
                    type,
                    href,
                    target,
                    backImage,
                    image,
                    text,
                    value,
                    navigate,
                    alt,
                  } = item || "";
                  return (
                    <div className="flex items-center flex-col cursor-pointer">
                      <div className="flex items-center justify-center relative w-[73px] h-[73px]">
                        <img
                          className="align-middle"
                          src={backImage}
                          alt={alt}
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <img src={image} alt={alt} className="align-middle" />
                        </div>
                      </div>
                      <p className="text-[12px] mt-[5px] font-[Nobel-Bold] font-bold tracking-[3px] leading-[1.5]">
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex-grow-0 max-w-full bg-[#3cbfae] relative xmd:basis-full">
          <img
            className="w-full h-full align-middle"
            src="/image/customer_storie_image.png"
            alt="img"
          />
          <div className="w-full h-full absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer lg:top-3/4 xsm:top-[85%]">
            <img
              className="w-[107px] h-[114px]"
              src="/image/play1.svg"
              alt="overplay"
            />
            <p className="text-[21px] tracking-[5.25px] font-[Nobel-Book] text-center uppercase">
              Customer stories
            </p>
          </div>
        </div>
      </div>
      <div id="WHAT DO I GET?">
        <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[77px] uppercase font-[400] leading-[1.5]">
          what do i get?
        </p>
        <div className="flex flex-wrap w-full items-center flex-col">
          <p className="max-w-[742px] font-[Nobel-Light] text-[28px] font-[300] text-center leading-[1.5] text-[#151515] tracking-normal my-[5px]">
            Here are some of the highlights of benefits of pirkx
          </p>
          <p className="max-w-[798px] font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-center text-[#4a4f55] mb-[37px] font-[400]">
            With a pirkx membership, members have immediate and 24/7 access to
            benefits, all in one place.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center pt-[25px] pr-[35px] pl-[35px] pb-[45px] md:p-0">
          {cardDetails?.map((item, index) => {
            const {
              heading,
              subheading,
              bannersImage,
              playSrc,
              content1Title,
              content1Subtitle,
              content2Title,
              content2Subtitle,
              message,
              btn,
              image,
              overLaySrc,
              backgroundVideo,
            } = item || "";
            const allContent = [
              {
                title: content1Title?.value,
                subtitle: content1Subtitle?.value,
              },
              {
                title: content1Title?.value,
                subtitle: content1Subtitle?.value,
              },
            ];
            return (
              <div
                className={`max-w-[604px] border-solid ${
                  index === 0 || index === 1 ? "border-r-[1px]" : "border-r-0"
                } border-r-[#e7d1d1] z-20 xmd:border-none xmd:basis-full basis-1/3 flex-grow-0`}
                key={index}
              >
                <div className="flex flex-col p-[25px] pb-0 md:p-[10px]">
                  <div className="relative mb-[25px]">
                    <p className="font-[Nobel-Book] text-[21px] tracking-[5.25px] text-[#151515] pb-[3px] font-[400] leading-[1.5]">
                      {heading?.value}
                    </p>
                    <p className="font-[Corbel] text-[19px] mb-[19px] tracking-normal text-[#4a4f55] font-[400] leading-[1.5]">
                      {subheading?.value}
                    </p>
                    <div className="relative w-full h-full">
                      <img
                        className="w-full align-middle"
                        src={bannersImage?.src}
                        alt={heading?.value}
                      />
                      <div></div>
                    </div>
                  </div>
                  {allContent?.map((ele, index) => {
                    return (
                      <>
                        {image?.src && (
                          <div
                            className={`${
                              allContent?.length - 1 === index
                                ? "mb-0"
                                : "mb-[25px]"
                            } ml-[-8px] mr-[52px]`}
                            key={index}
                          >
                            <div className="flex">
                              <div className="mr-[25px] mt-[5px]">
                                <img
                                  className="w-[35px] h-[35px]"
                                  src={image?.src}
                                  alt="img"
                                />
                              </div>
                              <div>
                                <p className="font-[Nobel] text-[28px] text-[#151515] font-bold">
                                  {ele?.title}
                                </p>
                                <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-[#4a4f55] max-w-[407px]">
                                  {ele?.subtitle}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="persanal PIRKX360">
        <div
          id="PIRKX360"
          className="w-full min-h-[456px] bg-[#f5f5f5] relative flex items-center justify-center flex-col py-[85px] px-[10px]"
        >
          <div
            className="absolute right-0 top-0 max-w-[295px] w-full h-[233.6px] bg-contain bg-no-repeat sm:hidden"
            style={{
              backgroundImage: "url(/image/personal_ping_right_curve.svg)",
            }}
          ></div>
          <div
            className="absolute bg-contain bottom-0 right-0 max-w-[441px] w-full h-[131px] sm:hidden"
            style={{
              backgroundImage: "url(/image/personal_yellow_right_curve.svg)",
            }}
          ></div>
          <div
            className="absolute left-0 top-0 max-w-[290px] w-full h-[132px] bg-contain bg-no-repeat sm:hidden"
            style={{
              backgroundImage: "url(/image/personal_green_left_curve.svg",
            }}
          ></div>
          <img
            src="/image/pirkx360.svg"
            alt="pirkx360"
            className="w-[182px] h-[59px]"
          />
          <p className="font-[Nobel-Light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-center text-[#151515] mb-[18px] mt-[27px] z-10">
            Upgrade your membership with pirkx360
          </p>
          <p className="max-w-[658px] font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-center text-[#4a4f55] mb-[30px] z-10 font-[400]">
            With pirkx360, you’ll have access to some incredible extra benefits
            to support you and yourfamily, with access a private mental health
            counsellor, financial and legal advisor for an additional ₤1.50 per
            month, per person.
          </p>
          <button className="rounded-[30px] font-[Nobel-Bold] font-bold text-[12px] tracking-[3.6px] text-white py-[5px] px-[20px] h-[36px] bg-[#3cbfae] z-10 uppercase leading-[1.75] no-underline">
            Find out more
          </button>
        </div>
      </div>
      <div id="persanal PRICING">
        <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[77px] uppercase mb-[25px]">
          No fussy costs or contracts
        </p>
        <div className="flex flex-wrap w-full items-center flex-col">
          <p className="max-w-[950px] font-[Nobel-Light] text-[28px] font-[300] text-center text-[#1515151] mb-[57px]">
            Awesome wellbeing benefits at an extremely affordable price.
          </p>
        </div>
        <div className="flex flex-wrap w-full my-0 p-[30px] px-0 justify-center">
          {bottomCard?.map((item, index) => {
            const { backgroundColor, color, title, isVal, btn } = item || "";
            const RelativePos =
              hovering === title ? title : hovering ? "" : isVal && title;
            const textColor = RelativePos === title ? "#fff" : color;

            const bgColor = RelativePos
              ? `${backgroundColor}`
              : "rgba(255,184,29,0.05)";
            console.log({ hovering, textColor, RelativePos, bgColor });
            return (
              <div
                className={` max-w-[497px] basis-1/3 pt-[54px] pb-[53px] px-0 relative transition-all duration-300 ease-in-out flex justify-center items-center flex-col hover:bg-${backgroundColor} xmd:basis-full`}
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
                      }] `}
                      style={{
                        backgroundColor: !RelativePos
                          ? backgroundColor
                          : "#fff",
                      }}
                    >
                      {btn}
                    </button>
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
        <div className="flex justify-center gap-[40px] mb-[79px] flex-wrap w-full">
          {imgJsonData?.map((item, index) => {
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
                  <img
                    className="w-full h-[49.8px]"
                    src={backImage}
                    alt={alt}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={image} alt={alt} className="w-full h-[19px]" />
                  </div>
                </div>
                <p className="text-[12px] mt-[14px] text-[#3cbfae] tracking-[3px] font-[Nobel-Bold] font-bold leading-normal">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap basis-full w-full">
          <div className="basis-1/2 flex-grow-0 xmd:basis-full">
            <div className="flex flex-wrap w-full">
              {footerCardData?.map((item, index) => {
                const { bgImage, image, title, subText, message, bgcolor } =
                  item || "";
                return (
                  <div
                    style={{ backgroundColor: bgcolor?.colorValue }}
                    className={`basis-1/2 flex-grow-0 pt-[71px] px-[10px] pb-[81.7px] min-h-[480px] flex justify-center items-center flex-col xmd:basis-full`}
                  >
                    <div className="flex items-center justify-center flex-col">
                      <div className="flex items-center justify-center relative w-[73px] h-[73px]">
                        <img src={bgImage?.srcUrl} alt={bgImage?.alt} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <img
                            src={image?.srcUrl}
                            alt={image?.alt}
                            className="w-[27px] h-[33px]"
                          />
                        </div>
                      </div>
                      <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-white mt-[19px] uppercase font-[400] leading-[1.5]">
                        {title?.value}
                      </p>
                      <p className="font-[Nobel-Light] max-w-[392px] text-[2.188em] font-[300] not-italic leading-[1.03] tracking-normal text-center text-white mt-[18px]">
                        {subText?.value}
                      </p>
                      <p className="font-[Corbel] font-[400] text-[19px] leading-[1.47] tracking-normal text-white text-center pt-[15px] pb-[30px]">
                        {message?.value}
                      </p>
                      <StyledButton bgcolor={item?.bgcolor}>
                        {title?.value}
                      </StyledButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-grow-0 basis-1/2 relative pt-[109px] px-[10px] pb-[81.7px] min-h-[480px] h-full flex justify-center items-center flex-col xmd:basis-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover brightness-50"
              style={{
                backgroundImage: "url(/image/familyPic.png)",
              }}
            ></div>
            <p className="font-[Nobel-Bold] font-bold text-[35px] leading-normal tracking-[8.75px] text-center text-white uppercase z-10 mb-[28px]">
              Family access
            </p>
            <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-white z-10 mb-[24px] uppercase font-[400] leading-[1.5]">
              Benefits for the whole household
            </p>
            <p className="font-[Nobel-Light] font-[300] text-[1.75em] not-italic leading-[1.29] tracking-normal text-center text-white max-w-[661px] mb-[38px]">
              Included in your membership, pirkx is for you and those you
              love.There’s something for everyone in pirkx.
            </p>
            <button className="rounded-[30px] font-[Nobel-Bold] font-bold text-[12px] tracking-[3.6px] text-white py-[5px] px-[20px] h-[36px] bg-[#ff6c00] relative inline-flex align-middle no-underline leading-[1.75] min-w-[64px]">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
      <div id="persanal GET IN TOUCH">
        <div className="max-w-[100%] flex flex-wrap w-full py-[120px] px-[40px] bg-[#3cbfae] text-white items-center justify-center relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/image/bgHappy.svg)",
            }}
          ></div>
          <div className="basis-1/2 flex-grow-0 pl-[2%] xmd:basis-full">
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
              <div className="flex gap-[40px] mt-[30px] w-full flex-wrap xmd:basis-full">
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
          <div className="basis-1/2 flex-grow-0 flex justify-center xmd:basis-full">
            <img
              className="max-w-[570.5px] min-h-[559.2px] w-full z-20"
              src="/image/whiteHappier.svg"
              alt="Happy Image"
            />
          </div>
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

export default Personal;
