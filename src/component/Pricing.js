import React, { useState } from "react";

function Pricing() {
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

  const decodeTextToHtml = (text = "", isFromCms = false) => {
    //   return { __html: text };
    return (
      <span
        dangerouslySetInnerHTML={{ __html: text }}
        className="ckSpanMarginBtm"
      />
    );
  };

  const checkLabel = [
    {
      type: "text",
      value: "Exclusive wellbeing content",
    },
    {
      type: "text",
      value: "24/7 confidential helplines",
    },
    {
      type: "text",
      value: "Online resources and much more",
    },
  ];

  const imageList = [
    {
      image: "/image/health_card_img.png",
      title: "Health",
      subText: "Physical and mental health is our priority",
      textColor: "#ffb81d",
      arrowColor: "#fab70a",
      arrow: "/image/healthArrow.svg",
    },
    {
      image: "/image/wealth_card_img.png",
      title: "Wealth",
      subText: "We making your money go further",
      textColor: "#d30b55",
      arrowColor: "#d30b55",
      arrow: "/image/wealthArrow.svg",
    },
    {
      image: "/image/education_card_img.png",
      title: "Education",
      subText: "Growing our brains grows a better human",
      textColor: "#009ddb",
      arrowColor: "#009ddb",
      arrow: "/image/educationArrow.svg",
    },
    {
      image: "/image/recognition_card_img.png",
      title: "Recognition",
      subText: "Being recognised for what we do counts!",
      textColor: "#ff6c00",
      arrowColor: "#ff6c00",
      topBackgroundImg: "/image/business_orange_curve.svg",
      arrow: "/image/recognitionArrow.svg",
    },
    {
      image: "/image/social_card_img.png",
      title: "Social",
      subText: "Social interactions make us happy",
      textColor: "#81bc00",
      arrowColor: "#81bc00",
      topBackgroundImg: "/image/business_green_curve.svg",
      arrow: "/image/socialArrow.svg",
    },
  ];

  return (
    <>
      <div className="mt-[80px] bg-white items-center flex flex-col relative flex-wrap w-full">
        <div
          className="absolute top-0 left-0 w-[222.7px] h-[293px] bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url(/image/pink-curve-bol.svg)",
          }}
        ></div>
        <div
          className="absolute top-[100px] right-0 w-[67px] h-[380px] bg-no-repeat bg-cover z-20"
          style={{
            backgroundImage: "url(/image/rightSlice.svg)",
          }}
        ></div>
        <p className="font-[Nobel-Book] font-[400] text-[21px] tracking-[5.25px] text-center text-[#151515] uppercase leading-[1.5] pt-[80px]">
          Affordable
        </p>
        <p className="font-[Nobel-Bold] font-bold text-[4.375em] tracking-[17.5px] text-center leading-normal text-[#3cbfae] uppercase pt-[13px] xmd:tracking-[5.5px] xmd:z-10">
          Pricing
        </p>
        <p className="max-w-[800px] font-[Nobel-Light] font-[300] text-[28px] leading-[1.29] tracking-normal pt-[34px] text-center text-[#151515] xmd:z-10">
          There is no commitment beyond whichever payment frequency you choose.
          Join now for affordable wellbeing benefits you can start enjoy in
          minutes.
        </p>
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
        <div className="flex flex-wrap w-full">
          <div className="relative pt-[109px] px-[10px] pb-[81.7px] basis-1/2 flex-grow-0 min-h-[480px] bg-[#f5f5f5] flex justify-center items-center flex-col xmd:basis-full">
            <div
              className="absolute left-0 top-0 max-w-[200px] w-full h-[111px] bg-contain bg-no-repeat"
              style={{
                backgroundImage: "url(/image/pricing_green_curve.svg)",
              }}
            ></div>
            <div
              className="absolute bg-contain bottom-0 right-0 max-w-[220px] w-full h-[86px] xmd:h-[85px]"
              style={{
                backgroundImage: "url(/image/pricing_orange_curve.svg)",
              }}
            ></div>
            <div className="flex justify-center items-center flex-col">
              <div
                className="absolute right-0 top-0 w-[137px] h-[111px] bg-contain bg-no-repeat"
                style={{
                  backgroundImage: "url(/image/pricing_pink_curve.svg)",
                }}
              ></div>
              <img src="/image/pirkx360.svg" alt="pirkx" />
              <p className="font-[Nobel-Light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-center text-[#151515] mb-[18px] mt-[27px] z-10">
                Upgrade your membership with pirkx360
              </p>
              <p className="max-w-[650px] font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-center text-[#4a4f55] z-10 font-[400] mb-[30px]">
                With pirkx360, you’ll have access to some incredible extra
                benefits to support you and your family, with access a private
                mental health counsellor, financial and legal advisor for an
                additional ₤1.50 per month, per person.
              </p>
              <button className="rounded-[30px] font-[Nobel-Bold] text-[12px] font-bold tracking-[3.6px] uppercase text-white py-[5px] px-[20px] h-[36px] bg-[#3cbfae] z-10 leading-[1.75]">
                Find out more
              </button>
            </div>
          </div>
          <div className="basis-1/2 flex-grow-0 xmd:basis-full">
            <div className="flex flex-wrap w-full">
              {[personalMember, businessMember]?.map((item, index) => {
                return (
                  <div
                    className="pt-[71px] pb-[81.7px] px-[10px] min-h-[480px] flex justify-center items-center flex-col basis-1/2 flex-grow-0 xmd:basis-full"
                    style={{
                      backgroundColor: index === 0 ? "#fab70a" : "#009ddb",
                    }}
                  >
                    <div className="flex items-center justify-center flex-col">
                      <p className="font-[Nobel-book] text-[21px] not-italic tracking-[5.25px] text-center text-white mt-[19px] uppercase font-[400] leading-[1.5]">
                        {decodeTextToHtml(item?.headline?.value)}
                      </p>
                      <p className="font-[Nobel-light] text-[35px] font-[300] not-italic tracking-normal leading-normal text-center text-[#151515]">
                        {decodeTextToHtml(item?.subtitle?.value)}
                      </p>
                      <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-white max-w-[355px] text-center pt-[15px] pb-[30px] font-[400]">
                        {decodeTextToHtml(item?.body?.value)}
                      </p>
                      <button className="rounded-[30px] text-[#1976d2] font-[Nobel-bold] text-[12px] font-bold tracking-[3.6px] mr-0 py-[5px] px-[20px] uppercase h-[36px] bg-white">
                        {decodeTextToHtml(item?.buttonLabel?.value)}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[rgb(250,183,10,0.05)] pt-[75px] px-[10px] pb-[81px] w-full flex justify-center items-center flex-col">
          <p className="font-[Nobel-Book] font-[400] text-[21px] tracking-[5.25px] text-center text-[#3cbfae] uppercase leading-[1.5] mb-[20px]">
            Support you can count on
          </p>
          <p className="max-w-[800px] font-[Nobel-Light] font-[300] text-[28px] leading-[1.29] tracking-normal text-center mb-[14px] text-[#151515] xmd:z-10">
            Our five channels give our members what they need
          </p>
          <p className="max-w-[650px] font-[Corbel] font-[400] text-[19px] leading-[1.47] tracking-normal text-center text-[#4a4f55] mb-[44px]">
            pirkx helps you care for yourself, your employees and your clients
            by giving them access to a benefits platform with hundreds of
            wellbeing benefits to choose from all for the cost of a coffee a
            month.
          </p>
          <div className="flex flex-wrap w-full gap-y-2.5 gap-x-[29px] justify-center mb-[73px] sm:justify-start">
            {checkLabel?.map((item) => {
              const { value } = item;
              return (
                <div className="gap-3 flex items-center" key={item?.value}>
                  <img
                    className="w-[30px] h-[30px]"
                    src={"/image/yellowCheck.svg"}
                    alt={"yellowCheck"}
                  />
                  <p className="max-w-[800px] font-[Nobel-Light] text-[28px] font-[300] leading-[1.29] tracking-normal text-left text-[#151515] xmd:z-10">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-nowrap w-full gap-y-5 gap-x-2.5 ps-[45px] pe-[45px] justify-center xmd:flex-wrap">
            {imageList?.map((item) => {
              const {
                title,
                image,
                subText,
                textColor,
                arrowColor,
                topBackgroundImg,
                arrow,
              } = item;
              return (
                <div className="max-w-[358px] w-full relative">
                  <img
                    className="max-w-[358px] w-full max-h-[208px] object-cover"
                    src={image}
                    alt={title}
                  />
                  {topBackgroundImg && (
                    <img
                      className="top-0 right-0 absolute max-w-[158px] w-full h-[54px]"
                      src={topBackgroundImg}
                      alt={subText}
                    />
                  )}
                  {topBackgroundImg && (
                    <p className="absolute top-[13px] right-[1%] font-[Nobel-Book] text-[16px] tracking-[4px] text-white font-[400] leading-[1.5]">
                      BUSINESS
                    </p>
                  )}
                  <p
                    className="font-[Nobel-Book] text-[21px] tracking-[5.25px] text-left uppercase leading-[1.5] font-[400] mt-[20px]"
                    style={{ color: textColor }}
                  >
                    {title}
                  </p>
                  <p className="max-w-[650px] font-[Corbel] font-[400] text-[19px] leading-[1.47] tracking-normal text-left text-[#4a4f55] my-[20px]">
                    {subText}
                  </p>
                  <img className="cursor-pointer text-lg" src={arrow} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
              corporations. Whoever you are and whatever you do, our affordable
              wellbeing benefits are for everyone.
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
      <div className="w-full flex justify-center flex-col items-center pr-[40px] bg-white py-[5%] px-[5%]">
        <p className="uppercase tracking-[2.5px] text-center font-[Nobel-book] font-[500] leading-[1.2] text-[21px] text-[#3cbfae]">
          AFFORDABLE WELLBEING BENEFITS IMPROVING HEALTH, WEALTH AND HAPPINESS
        </p>
      </div>
    </>
  );
}

export default Pricing;
