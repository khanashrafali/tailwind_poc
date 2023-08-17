import React, { useEffect, useState } from "react";

function About() {
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
      tabId: "about WHY PIRKX?",
    },
    {
      type: "text",
      value: "OUR STORY",
      tabId: "about OUR STORY",
    },
    {
      type: "text",
      value: "MEET THE TEAM",
      tabId: "about MEET THE TEAM",
    },
    {
      type: "text",
      value: "THE BOARD",
      tabId: "about THE BOARD",
    },
  ];

  const handleTabChange = (e, newValue) => {
    console.log("tablist", newValue);
    scrollTos(newValue);
    setTabName(newValue);
  };

  const problemSolution = [
    {
      image: {
        type: "image",
        src: "/image/Group 5745.svg",
        alt: "blub",
      },
      title: {
        type: "text",
        value:
          "<p><span style={{ color: '#6a4848', fontFamily: 'Nobel-Light', letterSpacing: '3px' }}>THE PROBLEM{' '}</span></p>",
      },
      description: {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      bottomImage: {
        type: "image",
        src: "/image/Mask Group 452.svg",
        alt: "happy face",
      },
    },
    {
      image: {
        type: "image",
        src: "https://img.freepik.com/premium-vector/lamp-flat-icon-white-background-vector-illustration_609547-1027.jpg?w=740",
        alt: "blub",
      },
      title: {
        type: "text",
        value:
          "<p><span style={{ color: '#3cbfae', fontFamily: 'Nobel-Light', letterSpacing: '3px' }}>THE SOLUTION{' '}</span></p>",
      },
      description: {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      bottomImage: {
        type: "image",
        src: "/image/happier.svg",
        alt: "happy face",
      },
    },
  ];

  const decodeTextToHtml = (text = "", isFromCms = false) => {
    //   return { __html: text };
    return (
      <span
        dangerouslySetInnerHTML={{ __html: text }}
        className="ckSpanMarginBtm"
      />
    );
  };

  const missionData = [
    {
      title: {
        type: "text",
        value: "IN THE BEGINNING",
      },
      subTitle: {
        type: "text",
        value:
          "Driven by our mission to treat everyone fairly, we have global ambition to bring wellbeing benefits to one million members by 2025",
      },
      description: {
        type: "text",
        value:
          "We want everyone to feel good, about themselves and the world around them. With pirkx360 you have access to a trusted team offering specialist support 24 hours a day to help you reach your potential.",
      },
      playImage: {
        type: "image",
        src: "/images/Ourplay.png",
        alt: "ourplay",
      },
      playImageText: {
        type: "text",
        value: "OUR STORY",
      },
      image: {
        type: "image",
        src: "https://loveventures.co.uk/wp-content/uploads/2022/08/Pirkx-whole-team-1024x683.jpeg",
        alt: "img",
      },
      video: {
        type: "video",
        src: "",
        alt: "video",
      },
    },
    {
      title: {
        type: "text",
        value: "OUR MISSION",
      },
      subTitle: {
        type: "text",
        value:
          "Driven by our mission to treat everyone fairly, we have global ambition to bring wellbeing benefits to one million members by 2025",
      },
      description: {
        type: "text",
        value:
          "We want everyone to feel good, about themselves and the world around them. With pirkx360 you have access to a trusted team offering specialist support 24 hours a day to help you reach your potential.",
      },
      image: {
        type: "image",
        src: "https://loveventures.co.uk/wp-content/uploads/2022/08/Pirkx-whole-team-1024x683.jpeg",
        alt: "img",
      },
    },
    {
      title: {
        type: "text",
        value: "OUR ADVANTAGE",
      },
      subTitle: {
        type: "text",
        value:
          "Driven by our mission to treat everyone fairly, we have global ambition to bring wellbeing benefits to one million members by 2025",
      },
      description: {
        type: "text",
        value:
          "We want everyone to feel good, about themselves and the world around them. With pirkx360 you have access to a trusted team offering specialist support 24 hours a day to help you reach your potential.",
      },
      image: {
        type: "image",
        src: "https://loveventures.co.uk/wp-content/uploads/2022/08/Pirkx-whole-team-1024x683.jpeg",
        alt: "img",
      },
    },
  ];

  const membersArray = [
    {
      name: "CLARE",
      src: "/image/Clare.svg",
      playSrc: "/image/play1.svg",
      videoSrc: "",
    },

    {
      name: "ANDRE",
      src: "/image/Andre.svg",
      playSrc: "/image/play2.svg",
      videoSrc: "",
    },
    {
      name: "NANETTE",
      src: "/image/Nanetee.svg",
      playSrc: "/image/play3.svg",
      videoSrc: "",
    },
  ];

  const boardMemberData = [
    {
      name: "STELLA SMITH",
      image: "/image/stela.png",
      profession: "FOUNDER, CEO",
    },
    {
      name: "CRAIG CAVENEY",
      image: "/image/craig.png",
      profession: "CO-FOUNDER, CTO",
    },
    {
      name: "JANE HOLLAND",
      image: "/image/Jane.svg",
      profession: "GROUP FINANCE DIRECTOR",
    },
    {
      name: "DAN COBELY",
      image: "/image/doncobely.png",
      profession: "NON-EXECUTIVE CHAIRMAN",
    },
    {
      name: "TODD RUPPERT",
      image: "/image/Todd.svg",
      profession: "NON-EXECUTIVE DIRECTOR",
    },
  ];

  return (
    <>
      <div
        className="h-auto mt-[80px] flex justify-center flex-col relative h-auto bg-no-repeat bg-cover mt-0 md:h-auto"
        style={{
          backgroundImage:
            "url(https://loveventures.co.uk/wp-content/uploads/2022/08/Pirkx-whole-team-1024x683.jpeg)",
        }}
      >
        <div className="p-[130px] md:p-[55px]">
          <p className="flex justify-center items-center text-center text-white text-[14px] tracking-[5px] font-[400] leading-[1.5] font-[Nobel-book] uppercase mt-[20px]">
            ABOUT US
          </p>
          <p className="flex justify-center items-center text-center text-white text-[20px] tracking-[6px] font-bold leading-[1.5] mb-[26px] font-[Nobel-Bold] uppercase mt-[20px]">
            HAPPIER. HEALTHIER. HUMAN
          </p>
          <p className="flex justify-center items-center text-center text-white text-[16px] tracking-[0.00938em] font-[400] leading-[1.5] mb-[26px] font-[Nobel-Book] uppercase mt-[20px]">
            We wanted to create something aordable which brought wellbeing
            benefits to
          </p>
          <p className="flex justify-center items-center text-center text-white text-[12px] tracking-[0.00938em] font-[400] leading-[1.5] mb-[26px] font-[Nobel-Book] uppercase mt-[20px]">
            From humble beginnings we are now a global team, whose sole <br />{" "}
            mission is to bring affordable wellbeing benefits to 1M people by
            2025.
          </p>
          <div className="flex flex-col items-center flex-wrap w-full"></div>
          <div className="flex flex-wrap w-full justify-center mt-[40px]">
            <img src="/image/curveArrow.svg" />
          </div>
        </div>
        <div
          onChange={handleTabChange}
          className={`backdrop-blur-[11.8px] h-[82px] flex items-center bg-[rgb(0,0,0,0.4)] w-full bottom-0 text-white px-[4%] transition-all duration-200 ease-in-out ${
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
      <div>
        <div className="flex justify-center items-baseline mr-[15px] mt-[20px] lg:mr-0 lg:flex-wrap">
          {problemSolution?.map((item, index) => (
            <div className="basis-1/2 w-full xmd:basis-full" key={index}>
              <div className="md:mr-0">
                <div className="w-full max-w-[800px] shadow-about-shadow bg-white">
                  <div className="flex justify-center items-center">
                    <img
                      src={item?.image?.src}
                      alt={item?.image?.alt}
                      className={`${
                        index === 0
                          ? "w-[100px] h-[80px]"
                          : "w-[120px] h-[100px] transform rotate-12"
                      }`}
                    />
                  </div>
                  <div className="pt-[5px] px-[100px] pb-[20px] ml-[20px] flex justify-center items-center flex-col md:p-[10px]">
                    <p className="font-[400] text-[1rem] leading-[1.5] tracking-[0.00938em]">
                      {decodeTextToHtml(item?.title?.value)}
                    </p>
                    <p
                      className={`${
                        index === 1 ? "20px" : undefined
                      } font-[400] text-[1rem] leading-[1.5] tracking-[0.00938em] font-auto`}
                    >
                      {decodeTextToHtml(item?.description?.value)}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={item?.bottomImage?.src}
                      alt={item?.bottomImage?.alt}
                      className={`${
                        index === 0
                          ? "w-[250px] h-[235px]"
                          : "w-[155px] h-[180px] mb-[25px]"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-[100vh] flex justify-center items-center xmd:min-h-[135vh] sm:min-h-[158vh] xsm:min-h-[172vh]">
        <div className="flex flex-col flex-wrap w-full">
          {missionData?.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-[#f5fcfb] flex-row-reverse"
                  : "bg-none flex-row"
              } flex flex-wrap w-full relative`}
            >
              <div className="basis-1/2 flex-grow-0 overflow-hidden xmd:basis-full">
                <img
                  src={item?.image?.src}
                  alt={item?.image?.alt}
                  className="w-full"
                />
              </div>
              {/* <div className="absolute right-[19%] bottom-[40%] flex items-center justify-center flex-col"></div> */}
              <div className="basis-1/2 flex-grow-0 m-auto xmd:basis-full">
                <div className="m-auto w-[70%]">
                  <p className="my-[20px] tracking-[4px] font-[Nobel-Light] font-[400] leading-[1.5] text-[1rem]">
                    {item?.title?.value}
                  </p>
                  <p className="mb-[20px] font-[400] text-[1rem] leading-[1.5] tracking-[0.00938em]">
                    {item?.subTitle?.value}
                  </p>
                  <p className="mb-[20px] font-[400] text-[1rem] leading-[1.5] font-[Nobel-Light] tracking-[0.00938em]">
                    {item?.description?.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[20px]">
        <p className="flex justify-center items-center text-[#3cbfae] mt-[20px] text-[18px] tracking-[3px] font-[Nobel-Light] font-[400] leading-[1.5] uppercase md:text-[14px]">
          OUR PEOPLE MAKE PIRKX
        </p>
        <p className="flex justify-center items-center text-black mt-[20px] text-[20px] tracking-[3px] font-[Nobel-Light] font-[400] leading-[1.5] md:text-[14px]">
          Let our team tell you a little bit about pirkx
        </p>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center xmd:flex-col">
            {membersArray?.map((item, index) => (
              <div
                key={item?.id}
                itemID={item?.id}
                className="w-[380px] h-[385px] flex justify-center items-center flex-col mr-[22px] ml-[10px] mb-[16px] sm:mr-[15px] sm:w-[300px]"
              >
                <div className="w-[250px] h-[261px] relative">
                  <img
                    className="w-[250px] h-[261px]"
                    src={item?.src}
                    alt={item?.alt}
                  />
                  <div className="absolute right-[32%] bottom-[42%]">
                    <p className="text-white tracking-[3px] font-[Nobel-Bold] font-bold leading-[1.5]">
                      REPLACE
                    </p>
                  </div>
                </div>
                <p className="mt-[10px] font-[Nobel-Light] text-[#3cbfae] tracking-[4px] leading-[1.5] font-[400]">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f5f5f5] p-5">
        <p className="flex justify-center items-center text-[3cbfae] mt-5 text-[18px] font-[Nobel-Light] leading-[1.5] font-[400] tracking-[3px] uppercase">
          THE BOARD
        </p>
        <p className="flex justify-center items-center text-black font-[Nobel-Light] font-[400] text-center my-0 mx-auto mb-10 text-[20px] max-w-[400px]">
          pirkx is made up of serial entrepreneurs who share the passion of
          simplifying wellbeing benefits.
        </p>
        <div className="flex justify-center items-center p-[30px] gap-[35px] flex-wrap xmd:flex-col">
          {boardMemberData?.map((item, index) => (
            <div className="m-auto mb-[30px] max-w-[250px] flex justify-center w-full items-center flex-col xmd:mr-[10px] sm:mr-0">
              <img className="w-full" src={item?.image} alt="people" />
              <p className="mt-[10px] font-[Nobel-Light] text-[#3cbfae] tracking-[4px] leading-[1.5] font-[400]">
                {item?.name}
              </p>
              <p className="mt-[10px] font-[Nobel-Bold] text-[12px] leading-[1.5] tracking-[0.00938em] font-bold">
                {item?.profession}
              </p>
            </div>
          ))}
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

export default About;
