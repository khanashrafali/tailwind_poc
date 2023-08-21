import React from "react";
import { useNavigate } from "react-router-dom";

function TermsAndConditions() {
  const navigation = useNavigate();
  const listJson = [
    {
      label: `A pirkx Corporate Member (for example, your employer) has invited you to become a Paid-For pirkx Member, free of charge to you, to show you their appreciation and you would like to accept this invitation and apply to become a Paid-For pirkx Member;
          `,
    },
    {
      label: `A pirkx Corporate Member has invited you to become a Self-Paid pirkx Member and you would like to accept the invitation and apply to become a Self-Paid pirkx Member;`,
    },
    {
      label: `You are no longer a Paid-For pirkx Member but would like to continue being a pirkx Member and are therefore applying to become a Self-Paid pirkx Member; or`,
    },
    {
      label: `You have otherwise heard about pirkx and are therefore applying to become a Self-Paid pirkx Member; or`,
    },
    {
      label: `You are a pirkx Member and would like to read the current version of the terms and conditions that apply to our pirkx Platform and the Membership Services we provide.`,
    },
  ];

  const termsAndConditionsData = [
    {
      description: [
        {
          label: `pirkx TERMS AND CONDITIONS (for pirkx MEMBERS)`,
        },
        {
          label: `PLEASE READ THESE TERMS CAREFULLY BEFORE YOU APPLY FOR A MEMBERSHIP AND/OR USE THE
              pirkx PLATFORM. WE WOULD LIKE TO DRAW YOUR PARTICULAR ATTENTION TO CLAUSE 16 OF
              THESE TERMS, WHICH SETS OUT THE LIMITATIONS OF OUR LIABILITY TO YOU.`,
        },
      ],
      subDescription: [
        {
          heading: `1. PURPOSE OF THESE TERMS`,
          label: `If you are looking at these Terms, it most likely means one of the following:`,
          subLabel: [...listJson],
        },
      ],
    },
    {
      description: [
        {
          label: `Either way, welcome (again) to pirkx!`,
        },
        {
          label: `These Terms explain who can become a pirkx Member, what you have to do to become a
              pirkx Member and the basis on which we make the pirkx Platform available, and
              provide our Membership Services, to pirkx Members from time to time. They also
              contain some further information about our Membership Programmes and our pirkx
              Suppliers. pirkx Suppliers are the third parties we have selected to provide the
              Benefits that form part of our Membership Programmes.`,
        },
        {
          label: `We have given some words and expressions a specific meaning in these Terms. For
              example, when we use the term “Business Day” in these Terms this means “any day
              other than Saturday, Sunday or a public holiday on which banks in London are open
              for business”. You can find a list of the relevant words and expressions and the
              meaning we have given to them at Schedule 1 of these Terms.`,
        },
        {
          label: `These Terms apply irrespective whether you access the pirkx Platform`,
        },
      ],
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
              TERMS AND CONDITIONS
            </p>
            <p className="tracking-normal leading-[28px] italic font-normal text-[19px] font-[Corbel] mb-[20px] mt-[24px] text-[#4a4f55] xmd:leading-[1.5]">
              Last updated: 15 September 2021
            </p>
            {termsAndConditionsData?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full max-w-[1083px] font-[Corbel] mt-[24px]"
              >
                {item?.description?.map((description, ind) => (
                  <p
                    key={ind}
                    className="tracking-normal leading-[28px] not-italic font-normal text-[19px] font-[Corbel] mb-[20px] text-[#4a4f55] xmd:leading-[1.5]"
                  >
                    {description?.label}
                  </p>
                ))}{" "}
                {item?.subDescription?.map((subDescription) => (
                  <>
                    <p className="tracking-normal leading-[28px] not-italic font-normal text-[19px] font-[Corbel] mb-[20px] text-[#3cbfae] xmd:leading-[1.5]">
                      {subDescription?.heading}
                    </p>
                    <p className="tracking-normal leading-[28px] not-italic font-normal text-[19px] font-[Corbel] mb-[20px] text-[#4a4f55] xmd:leading-[1.5]">
                      {subDescription?.heading}
                    </p>
                    {subDescription?.subLabel?.map((subLabel, i) => (
                      <div className="flex flex-initial w-full items-baseline gap-[10px]">
                        <span className="h-[6px] w-[6px] rounded-[50%] bg-[#3cbfae]"></span>
                        <p className="text-[#4a4f55] max-w-[1083px] w-full leading-[28px] font-[Corbel] font-normal text-[19px]">
                          {subLabel?.label}
                        </p>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            ))}
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

export default TermsAndConditions;
