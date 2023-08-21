import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigation = useNavigate();

  const privacyPolicyData = [
    {
      label: `As part of our arrangements with you, Pirkx Limited [“pirkx”] has certain
          obligations under privacy laws and General Data Protection Regulation (GDPR) to
          notify individuals how we will process their personal information we collect. We may
          maintain personal records for a minimum of at least six years.`,
    },
    {
      label: `We will inform individuals how information collected is used, where it is
          transferred, and how they may view or amend it. We will treat all personal
          information as confidential and will not process it other than for a legitimate
          purpose. Steps will be taken to ensure that the information is accurate, kept up to
          date and not kept for longer than is necessary. Measures will also be taken to
          safeguard against unauthorised or unlawful processing and accidental loss,
          destruction or damage to the information.`,
    },
    {
      label: `The information provided to us may include personal and sensitive data. By using our
          services, you consent to us and any company associated with us (including, but not
          necessarily restricted to business partners and strategic alliances, as well as
          product and insurance providers) processing your data for the purposes of providing
          agreed services, administration and management. This processing includes obtaining,
          recording or holding information or data, transferring it to other companies
          associated with us such as service and product providers, insurers or statutory,
          governmental or regulatory bodies for legitimate purposes. The examples of third
          parties provided is not exhaustive and may be updated from time to time as business
          needs and legal requirements dictate. We will not sell personal data to any third
          party.`,
    },
    {
      label: `Some services are provided to our organisation by third parties such as processing
          business or obtaining consultancy, legal or regulatory advice, which may warrant the
          disclosure of more than just your basic contact details. Personal information held
          by us may be disclosed on a confidential basis, and in accordance with the GDPR, to
          any such third parties. This information may be transferred electronically (e.g.
          e-mail) and we, or any such third party, may contact you in future by any means of
          communication which we consider appropriate at the time. We will not pass any of
          your data – including payment details – to any third parties, without your consent
          or for any purpose other than that which consent was given.`,
    },
    {
      label: `Some of the companies we work with will hold data on you in countries outside of
          Europe that do not always have the same standard of Data Protection laws as the UK.
          If this is the case appropriate due diligence will be completed to ensure that your
          information is adequately protected, and the organisations concerned will be bound
          by their obligations under the GDPR when your personal information is processed
          outside Europe.`,
    },
    {
      label: `Where we introduce you to other business partners in order to support service
          delivery to you, they will also have obligations under GDPR to process your personal
          information securely. The parties will share information about you, i.e. we may
          provide updates about the progression and development of your matter for legitimate
          business purposes. We consider this will be of benefit to you in respect of the
          services that we are providing.`,
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
              PRIVACY POLICY
            </p>
            <div className="flex flex-col w-full max-w-[1083px] font-[Corbel] mt-[24px]">
              <p className="tracking-normal leading-[28px] italic font-normal text-[19px] font-[Corbel] text-[#4a4f55] xmd:leading-[1.5]">
                Dated: 6th of July 2020
              </p>
            </div>
            <div className="flex flex-col w-full max-w-[1083px] font-[Corbel] mt-[24px]">
              {privacyPolicyData?.map((item, index) => (
                <p
                  className="tracking-normal leading-[28px] not-italic font-normal text-[19px] font-[Corbel] mb-[20px] text-[#4a4f55] xmd:leading-[1.5]"
                  key={index}
                >
                  {item.label}
                </p>
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
};

export default PrivacyPolicy;
