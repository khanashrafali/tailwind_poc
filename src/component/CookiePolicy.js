import React from "react";
import { useNavigate } from "react-router-dom";

function CookiePolicy() {
  const navigation = useNavigate();
  const cookiePolicyData = [
    {
      question: `Cookie Policy`,
      answer: `We use a variety of technologies to help us better understand how you use pirkx.com`,
    },
    {
      question: `What are Cookies?`,
      answer: `Cookies are small data files placed on your computer by websites you visit in order
          to help them remember certain information about you. At pirkx, we set only a few
          cookies for tracking user preferences, authentication, and collecting anonymous
          analytics data. Additionally, we also use other cookies; each of these uses is
          described in greater detail below:`,
    },
    {
      question: `Strictly necessary cookies`,
      answer: `These are cookies that are required for the operation of our Website. They include,
          for example, cookies that enable you to log into secure areas of our Website.`,
    },
    {
      question: `Browser cookies`,
      answer: `This is a small data file sent from a website to your browser that is stored on your
          computer’s hard drive. You can configure your browser’s settings to reflect your
          preference to accept or reject cookies.`,
    },
    {
      question: `Preference Cookies`,
      answer: (
        <>
          If you logged out,{" "}
          <span className="break-words text-[#ff6c00]">pirkx</span> will place a
          simple cookie to remember your preferences’ for the site.
        </>
      ),
    },
    {
      question: `Authentication Cookies`,
      answer: (
        <>
          When you log into your account,{" "}
          <span className="break-words text-[#ff6c00]">pirkx</span> will place a
          cookie for the sole purpose of creating this session. It contains your
          user id and hashed authentication information.
        </>
      ),
    },
    {
      question: `Analytics Cookies`,
      answer: (
        <>
          We use a tool called Google Analytics to help us understand how users
          interact with our website. It tells us aggregate usage and traffic
          information, such as how the site was accessed, how long visitors
          stayed, and the number of first-time visitors to the site. By knowing
          how people use the site, we can make it better.To learn more about
          Google Analytics and how it uses your data, please visit{" "}
          <span className="break-words text-[#ff6c00]">
            http://www.google.com/analytics/learn/privacy
          </span>
        </>
      ),
    },
    {
      question: `Advertising Cookies`,
      answer: `These cookies may be set through our site by our advertising partners. They may be
          used by those companies to build a profile of your interests and show you relevant
          adverts on other sites. They do not store directly personal information but are
          based on uniquely identifying your browser and internet device. If you do not allow
          these cookies, you will experience less targeted advertising.`,
    },
  ];

  const navigationList = [
    { label: "Terms & Conditions", navigate: "/terms-and-conditions" },
    { label: "Privacy policy", navigate: "/privacy-policy" },
    { label: "Cookie policy", navigate: "/cookie-policy" },
  ];

  return (
    <>
      <div className="flex flex-wrap w-full flex-row gap-[183px] justify-between py-0 px-[120px] 3xl:py-0 3xl:px-[40px] 2xl:gap-[45px] xl:flex-wrap xl:gap-[30px] xmd:flex-col-reverse xmd:gap-[30px] xmd:py-0 xmd:px-[20px]">
        <div className="bg-white flex-col justify-start flex-nowrap max-w-[800px] w-full mb-[88px] mt-[126px] xmd:mt-0 xmd:mb-[88px] xmd:mx-0">
          <div>
            <p className="text-[21px] font-normal tracking-[5.25px] text-[#151515] font-[Nobel-Book] leading-[70px] p-0 uppercase mb-[23px]">
              LEGAL
            </p>
            <p className="text-[35px] tracking-[8.75px] text-[#ff6c00] font-[Nobel-Bold] font-[400] uppercase xmd:text-[30px]">
              COOKIE POLICY
            </p>
            <div className="flex flex-col w-full max-w-[1083px] font-[Corbel] mt-[24px]">
              <p className="tracking-normal leading-[28px] italic font-normal text-[19px] font-[Corbel] text-[#4a4f55] xmd:leading-[1.5]">
                Last updated: 3 April 2020
              </p>
            </div>
            <div className="flex flex-col w-full max-w-[1083px] font-[Corbel] mt-[24px]">
              {cookiePolicyData?.map((item, index) => (
                <>
                  <p className="tracking-normal leading-[28px] not-italic font-bold text-[19px] font-[Corbel] text-[#4a4f55]">
                    {item?.question}
                  </p>
                  <p className="tracking-normal leading-[28px] not-italic font-normal text-[19px] font-[Corbel] mb-[20px] text-[#4a4f55] xmd:leading-[1.5]">
                    {item?.answer}
                  </p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[129px]">
          <div className="flex flex-col w-full shadow-[0_20px_30px_0_rgba(28,40,44,0.2)] bg-white rounded-[5px] pt-[47px] pr-[137px] pb-[49.9px] pl-[47px] 2xl:pt-[47px] 2xl:pr-[100px] 2xl:pb-[49.9px] 2xl:pl-[30px] cxl:pt-[47px] cxl:pr-[20px] cxl:pb-[49.9px] cxl:pl-[15px] xl:pt-[47px] xl:pr-[10px] xl:pb-[49.9px] xl:pl-[10px] xmd:pt-[47px] xmd:pr-[65px] xmd:pb-[49.96px] xmd:pl-[23px] xmd:my-[20px] xmd:mx-0">
            <p className="text-[21px] font-normal tracking-[5.25px] text-[#4a4f55] font-[Nobel-Book] leading-[30px] p-0 uppercase mt-0 mx-0 mb-[31.1px]">
              In this section
            </p>
            {navigationList?.map((item) => (
              <a
                className="text-[12px] text-[#ff6c00] font-bold tracking-[3.6px] no-underline mt-0 mx-0 mb-[25px] font-[Nobel-Bold] cursor-pointer uppercase"
                key={item?.label}
                onClick={() => navigation(item.navigate)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CookiePolicy;
