import React, { useState } from "react";

function Business() {
  const [isSticky, setSticky] = useState(false);
  const [tabName, setTabName] = useState("WHY PIRKX?");

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

  const handleTabChange = (e, newValue) => {
    console.log("tablist", newValue);
    scrollTos(newValue);
    setTabName(newValue);
  };

  const tabList = [
    {
      type: "text",
      value: "WHY PIRKX?",
      tabId: "business WHY PIRKX?",
    },
    {
      type: "text",
      value: "BUSINESS BENEFITS",
      tabId: "business BUSINESS BENEFITS",
    },
    {
      type: "text",
      value: "MEMBER BENEFITS",
      tabId: "business MEMBER BENEFITS",
    },
    {
      type: "text",
      value: "PRICING",
      tabId: "business PRICING",
    },
    {
      type: "text",
      value: "GET IN TOUCH",
      tabId: "business GET IN TOUCH",
    },
  ];

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

  const cardData = [
    {
      title: "No setup fees ",
      messgae:
        "There are no hidden fees or setup costs when you sign up with pirkx, just affordable wellbeing benefits for you and your family.",
    },
    {
      title: "No contract",
      marginBottom: "20px",
      messgae:
        "Need to cancel your membership? No problem, you can cancel at any time with no cancellation fee.",
    },
    {
      title: "Get going in minutes ",
      marginBottom: "20px",
      messgae:
        "It’s easy to get started with pirkx, once you’ve signed up, you’ll have access to all your benefits in once place, online and in the app.",
    },
    // {
    //   title: "Your brand matters ",
    //   messgae:
    //     "With your pirkx membership you’ll have your very own copy of pirkx that you can customise with your logo and colours to make it yours.",
    // },
    // {
    //   title: "Make it yours",
    //   marginBottom: "20px",
    //   messgae:
    //     "Pick, choose and curate the programs that matter to you, your workforce and your clients.",
    // },
    // {
    //   title: "Manage content ",
    //   marginBottom: "20px",
    //   messgae:
    //     "With your pirkx homepage you can add your own content in minutes, giving your clients easy insight on what you have to offer.",
    // },
    // {
    //   title: "Recognition",
    //   marginBottom: "20px",
    //   messgae:
    //     "Let your workforce know that you are grateful for their hard work. pirkx gives you the ability to send personalised messages, gift cards and more.",
    // },
    // {
    //   title: "Invite your clients ",
    //   marginBottom: "20px",
    //   messgae:
    //     "You can easily invite your team, clients and corporate clients to your pirkx page and choose what content is readily available.",
    // },
    // {
    //   title: "Pulse Surveys ",
    //   messgae:
    //     "Accurate data is the backbone of any company – with pirkx you’ll be able to send out tailored surveys and easily get the answers you need.",
    // },
    // {
    //   title: "Data dashboard",
    //   marginBottom: "20px",
    //   messgae:
    //     "See how your workforce and clients have engaged with different channels and programmes.",
    // },
    // {
    //   title: "Access from any device ",
    //   marginBottom: "20px",
    //   messgae:
    //     "Whether you’re on a PC, Mac or your phone, you can access your pirkx account from anywhere, at any time.",
    // },
  ];

  const cardValueData = [
    {
      type: "text",
      value:
        "69% of workers say they would work harder if they were better appreciated",
      linkValue: "69%",
      maxWidth: "447px",
      justifyContent: "flex-start",
    },
    {
      type: "text",
      value: "Happy workers are up to 20% more productive",
      linkValue: "20%",
      maxWidth: "447px",
      justifyContent: "flex-start",
    },
    {
      type: "text",
      value: "Highly engaged workplaces have 41% lower absenteeism",
      linkValue: "41%",
      maxWidth: "447px",
      justifyContent: "flex-start",
    },
  ];

  const cardsDetails = [
    {
      key: true,
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
      playSrc: "/image/play4.svg",
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
      key: true,
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
      playSrc: "/image/play2.svg",
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
      key: true,
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
      playSrc: "/image/play5.svg",
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

  const cardsDetails1 = [
    {
      key: true,
      heading: {
        type: "text",
        value: "RECOGNITION",
      },
      subheading: {
        type: "text",
        value: "Being recognised for what we do counts!",
      },
      bannersImage: {
        type: "image",
        src: "/image/Mask Group 507.png",
      },
      playSrc: "/image/play3.svg",
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
        src: "/image/orangeCheck.svg",
      },
    },
    {
      key: true,
      heading: {
        type: "text",
        value: "SOCIAL",
      },
      subheading: {
        type: "text",
        value: "Social interactions make us happy",
      },
      bannersImage: {
        type: "image",
        src: "/image/Mask Group 506.png",
      },
      playSrc: "/image/play6.svg",
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
        src: "/image/greenCheck.svg",
      },
    },
    {
      heading: {
        type: "text",
        value: "PIRKX 360",
      },
      subheading: {
        type: "text",
        value: "Upgrade your membership with pirkx360",
      },
      bannersImage: {
        type: "image",
        src: "/image/Mask Group 511.svg",
      },
      overLaySrc: "/image/pirkx360.svg",
      message: {
        type: "text",
        value:
          "With pirkx360, you’ll have access to some incredible extra benefits to support you and your family, with access a private mental health counsellor, financial and legal advisor for an additional £1.50 per month, per person. ",
      },
      btn: {
        type: "button",
        value: "FIND OUT MORE",
        isShowBtn: true,
        isShowHideBtn: true,
      },
    },
  ];

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

  return (
    <>
      <div className="min-h-screen flex justify-center flex-col relative h-auto mt-0 md:h-auto">
        <div
          className="absolute top-0 left-0 w-full h-full brightness-50 bg-cover -z-10 bg-no-repeat"
          style={{
            backgroundImage: "url(/image/Component.png)",
          }}
        ></div>
        <div className="px-[5px]">
          <img
            className="w-[215.3px] h-[212.8px] absolute top-[119px] right-[40px] sm:w-[115.3px] sm:h-[112.8px] sm:top-[95px] sm:right-[20px] sm:-z-10"
            src="/image/landingTop.svg"
            alt="landing top"
          />
          <p className="flex justify-center items-center text-center text-white text-[21px] tracking-[5.25px] font-[400] leading-[1.5] font-[Nobel-book] uppercase mt-0 z-10 md:text-[20px]">
            prikx Membership
          </p>
          <p className="flex justify-center items-center text-center text-white text-[4.375em] tracking-[17.5px] font-bold leading-normal mb-[26px] font-[Nobel-Bold] uppercase mt-[18px] z-10 md:text-[20px]">
            FOR BUSINESS
          </p>
          <div className="flex flex-col items-center flex-wrap w-full">
            <p className="flex justify-center items-center max-w-[480px] w-full font-[400] text-center text-white text-[1.5em] tracking-normal leading-[1.29] mb-[20px] font-[Nobel-Light] mt-[18px] z-10 md:text-[20px]">
              Improving mental, physical and financial wellbeing for your
              workforce and your clients.
            </p>
            <p className="flex justify-center items-center max-w-[510px] font-[400] text-center text-white text-[1.188em] tracking-normal leading-[1.47] mb-[26px] font-[Corbel] mt-[18px] md:text-[20px]">
              An all-in-one employee benefits platform, helping your business
              attract, engage and retain the best talent for just £4.50 per
              person, per month.
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
          className={`backdrop-blur-[11.8px] h-[82px] flex items-center bg-[rgb(0,0,0,0.4)] sticky w-full bottom-0 text-white px-[4%] transition-all duration-200 ease-in-out ${
            isSticky ? "sticky1" : ""
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
                BUSINESSES NEED PIRKX
              </p>
              <div className="mr-[32px]">
                <img
                  className="w-[59px] h-[80px]"
                  src="/image/business2.svg"
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
                private GP, discounted gym membership, or using pirkx portal for
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
            src="/image/Mask Group 505.png"
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
      <div>
        <div className="w-full pt-[20px] pb-[0px] px-[20px] bg-[#f5f5f5]">
          <p
            className="font-[Noble-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[20px]"
            id="BUSINESS BENEFITS"
          >
            BUSINESS BENEFITS
          </p>
          <div className="flex items-center flex-col flex-wrap w-full">
            <p className="max-w-[742px] font-[Nobel-Light] text-[28px] font-[300] text-center text-[#151515] my-[5px] tracking-[0.00938em] leading-[1.5]">
              Powerful and easy-to-use wellbeing management software.
            </p>
            <p className="max-w-[670px] font-[Corbel] leading-[1.47] tracking-normal text-center text-[#4a4f55] mb-[40px] font-[400]">
              pirkx centralises all of your company benefits with our package of
              wellbeing programs designed to recognise and reward your employees
              and clients.
            </p>
          </div>
          {/* <div className="flex flex-col">
            <div className="flex flex-wrap w-full justify-center h-[300px]">
              {cardData?.map((item, index) => (
                <div
                  className={`max-w-[497px] w-full basis-1/3 flex-grow-0 xmd:basis-full`}
                  key={index}
                  itemID={index}
                >
                  <div className="md:mr-0">
                    <div className="h-[300px] pt-[58.5px] px-[37px] pb-[70px] bg-white shadow-[0_0px_0px_0px_rgb(0,0,0,0.2)] cxl:w-[330px]">
                      <div className="text-center">
                        <img src="/image/skyCheck.svg" alt="img" />
                        <p className="text-[1.75em] font-[Nobel] font-bold my-[20px]">
                          {item?.title}
                        </p>
                        <p className="text-[19px] font-[Corbel] leading-normal text-[#4a4f55]">
                          {item?.messgae}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-[59px] pb-[79px] px-0">
              <button className="rounded-[18px] uppercase min-w-[250px] max-w-[400px] font-[Nobel-Bold] font-bold text-[12px] tracking-[3.6px] bg-[#ff6c00] text-white leading-[3px] h-[36px] w-[135px]">
                JOIN NOW
              </button>
            </div>
          </div> */}
        </div>
        <div className="w-full min-h-[250px] flex bg-[#d30b55] ps-[4%] pe-[4%] md:flex-wrap md:text-center">
          {cardValueData?.map((item, index) => {
            const {
              title,
              messgae,
              linkValue,
              value,
              maxWidth,
              justifyContent,
            } = item;
            return (
              <div
                className="flex justify-start pt-[36px] pb-[41px] w-full md:text-center"
                key={index}
              >
                <div className="max-w-[447px]">
                  <p className="text-white tracking-[7px] mb-[15px] font-[Nobel] text-[70px] font-bold leading-normal">
                    {linkValue}
                  </p>
                  <p className="max-w-[380px] font-[Nobel-Light] text-[28px] font-[300] leading-[1.29] tracking-normal text-white md:maxmax-w-none">
                    {value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="business MEMBER BENEFITS">
        <div className="w-full px-[20px] pt-[20px] pb-0">
          <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[77px] font-[400] leading-[1.5]">
            MEMBER BENEFITS
          </p>
          <div className="flex items-center flex-col flex-wrap w-full">
            <p className="max-w-[742px] font-[Nobel-Light] text-[28px] font-[300] text-center text-[#151515] my-[5px] leading-[1.5]">
              Here are some of the highlights of benefits of pirkx
            </p>
            <p className="max-w-[798px] font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-center text-[#4a4f55] mb-[40px]">
              With a pirkx membership, members have immediate and 24/7 access to
              benefits, all in one place.
            </p>
          </div>
          <div className="flex justify-center flex-wrap w-full pt-[25px] pb-[45px] px-[35px] md:p-0">
            {cardsDetails?.map((item, index) => {
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
          <hr className="border-b-[1px] border-solid border-[#e7d1d1] my-0 mx-[35px]" />
          <div className="flex justify-center flex-wrap w-full pt-[25px] pb-[45px] px-[35px] md:p-0">
            {cardsDetails1?.map((item, index) => {
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
                    {message?.value && (
                      <div className="mb-[30px]">
                        <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-[#4a4f55] font-[400]">
                          {message?.value}
                        </p>
                      </div>
                    )}
                    {btn?.value && (
                      <div className="mb-[25px]">
                        <button className="rounded-[18px] min-w-[250px] max-w-[400px] font-[Nobel-Bold] text-[12px] font-bold tracling-[3.6px] bg-[#3cbfae] text-white leading-[3px] h-[36px] w-[190px]">
                          {btn?.value}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="business PRICING">
        <div className="w-full pt-[20px] pb-0 px-[20px] bg-[#f5f5f5]">
          <p
            className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[77px] font-[400] leading-[1.5]"
            id="PRICING"
          >
            WHAT IS IT GOING TO COST?
          </p>
          <p className="flex justify-center items-center text-[#151515] text-[28px] font-[Nobel-Light] text-center my-[25px]">
            Enter your team size to find out the cost of pirkx for your business
          </p>
          <form
            className="border-solid border-[5px] border-[#b1e7df] rounded-[3px] flex justify-center w-fit my-0 mx-auto"
            noValidate
            autoComplete="off"
          >
            <div className="text-center border-solid border-[1px] border-[#606060] rounded-[3px]">
              <input
                className="text-center w-[180px] h-[80px] text-[#3cbfae] font-[Nobel] text-[40px]"
                value="2"
              />
            </div>
          </form>
          <div className="flex flex-wrap w-full my-0 p-[30px] px-0 justify-center px-0 pt-[50px] pb-[80px]">
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
                        }] bg-[${!RelativePos ? backgroundColor : "#fff"}]`}
                      ></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center flex-wrap w-full">
            <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-[#4a4f55] max-w-[749px] text-center font-[400]">
              Get easy access to helpful tools that manage your mental and
              physical health, all for a monthly price that is less than a
              couple cups of coffee.
            </p>
          </div>
          <div className="flex justify-center pt-[31px] px-0 pb-[85px]">
            <button className="rounded-[18px] min-w-[250px] max-w-[400px] font-[Nobel-Bold] font-bold text-[12px] tracking-[3.6px] bg-[#ff6c00] text-white leading-[3px] h-[36px] w-full">
              EMAIL MY QUOTE
            </button>
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
        <div className="w-full pt-[20px] pb-0 px-[20px] bg-[#f5f5f5]">
          <p className="font-[Nobel-Book] text-[21px] not-italic tracking-[5.25px] text-center text-[#3cbfae] mt-[77px] font-[400] leading-[1.5]">
            ENGAGE YOUR TEAM
          </p>
          <p className="flex justify-center items-center text-[#151515] text-[28px] font-[Nobel-Light] text-center mt-[25px] mb-[30px] leading-[1.5]">
            Who says you can’t rival the biggest companies in the world?
          </p>
          <div className="flex justify-center flex-wrap w-full">
            <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-[#4a4f55] text-center max-w-[715px] font-[400]">
              Big businesses are able to offer the bells and whistles when it
              comes to employee benefits. It’s time to level the playing field
              and give every businesses access to something just as compelling,
              yet easier to manage and more affordable.
            </p>
          </div>
          <div className="flex justify-center p-[30px]">
            <button className="rounded-[18px] min-w-[250px] max-w-[400px] font-[Nobel-Bold] font-bold text-[12px] tracking-[3.6px] bg-[#ff6c00] text-white leading-[3px] h-[36px] w-[135px]">
              JOIN NOW
            </button>
          </div>
          <div className="flex justify-center flex-wrap w-full mt-[30px]">
            <div className="max-w-[1000px] max-h-[385px] w-full h-full text-center relative">
              <img
                className="max-h-[385px] w-[80%] h-full z-10 relative ml-[90px] mb-[-3.6px]"
                src="/image/device.png"
                alt="img"
              />
              <img
                className="absolute left-[3px] bottom-0 w-[290px] h-[100px]"
                src="https://pirkx.com.au/assets/release4/login_header_rgt_bg.png"
                alt="img"
              />
              <img
                className="absolute right-0 bottom-0 w-[250px] h-[100px] transform -scale-x-100"
                src="https://pirkx.com.au/assets/release4/login_header_rgt_bg.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center flex-col items-center pr-[40px] bg-[#3cbfae] py-[5%] px-[5%]">
          <p className="uppercase tracking-[2.5px] text-center font-[Nobel-book] font-[500] leading-[1.2] text-[21px] text-white">
            AFFORDABLE WELLBEING BENEFITS IMPROVING HEALTH, WEALTH AND HAPPINESS
          </p>
        </div>
      </div>
    </>
  );
}

export default Business;
