import React, { useState } from "react";

const Faq = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const handleSelectedFaqHeading = (index) => {
    setSelectedSection(index);
  };

  const header = {
    faqs: "FAQS",
    title:
      '<span id="isPasted" style="color: rgb(74, 79, 85); font-family: Nobel-light; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(245, 245, 245); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Struggling to find the help you are looking for, call our team on</span><span style="color: rgb(74, 79, 85); font-family: Nobel-light; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(245, 245, 245); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">&nbsp;</span><span class="css-1fj2azt" color="#151515" style="box-sizing: inherit; margin: 0px; padding: 0px; overflow-wrap: break-word; color: rgb(21, 21, 21); font-family: Nobel; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(245, 245, 245); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">0203 830 7918</span><span style="color: rgb(74, 79, 85); font-family: Nobel-light; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(245, 245, 245); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">&nbsp;</span><span style="color: rgb(74, 79, 85); font-family: Nobel-light; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(245, 245, 245); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">or send us an email to</span><span style="color: rgb(74, 79, 85); font-family: Nobel-light; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(245, 245, 245); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">&nbsp;</span><a class="css-1avfqdy" color="#ff6c00" href="mailto:hello@pirkx.com" style="box-sizing: inherit; margin: 0px; padding: 0px; color: rgb(255, 108, 0); text-decoration: none; font-family: Nobel-light; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(245, 245, 245);">hello@pirkx.com</a>',
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

  const faqHeadingListValue = [
    {
      type: "text",
      value: "All",
      selected: true,
    },
    {
      type: "text",
      value: "General",
      selected: false,
    },
    {
      type: "text",
      value: "Business",
      selected: false,
    },
    {
      type: "text",
      value: "TROUBLESHOOTING",
      selected: false,
    },
  ];

  const general = {
    HeadingName1: {
      type: "text",
      value: "General",
    },
    whatIsPirkx: {
      type: "text",
      value: "WHAT IS PIRKX?",
    },
    whatIsPirkxAnswer: {
      type: "text",
      value:
        '<p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" id="isPasted" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">pirkx is a well-being platform that provides individuals and businesses a range of benefits and savings for people to make their money go a bit further and improve their health.</p><p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Companies, Associations, Charities, Clubs and Public Sector bodies can offer their members pirkx regardless of their employment status. They can join for free and pay for their members or they can offer access on a self-pay basis.</p><p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">If you are self-employed you can join pirkx and access all of the amazing benefits too.</p><p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Prices are &pound;4.50 per month, &pound;12 per quarter or &pound;45 per year per member.</p>',
    },
    whoCanJoinpirkx: {
      type: "text",
      value: "WHO CAN JOIN PIRKX?",
    },
    whoCanJoinpirkxAnswer: {
      type: "text",
      value:
        "The short answer is – everyone! And your family gets access through your subscription too.",
    },
    pirkxBenefit: {
      type: "text",
      value: "WHAT ARE THE PIRKX BENEFIT?",
    },
    pirkxBenefitAnswer: {
      type: "text",
      value:
        '<p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" id="isPasted" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">We have a wide range of benefits covering the five pillars of Health; Wealth; Education; Recognition and Social. They include:</p><div class="MuiGrid-root css-3wfewp-MuiGrid-root" style="box-sizing: border-box; margin: 20px 0px 0px; padding: 0px; flex-direction: row; color: rgba(0, 0, 0, 0.87); font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.15008px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">24/7 GP booking service</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">24/7 dedicated telephone counselling service</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">Discounted gym membership</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">Guidance on financial wellbeing</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">Free entry to a monthly lottery, where you could win up to &pound;3,000</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">Discounted travel money, travel currency and international payments</p></div></div>',
    },
  };

  const {
    HeadingName1,
    whatIsPirkx,
    whatIsPirkxAnswer,
    whoCanJoinpirkx,
    whoCanJoinpirkxAnswer,
    pirkxBenefit,
    pirkxBenefitAnswer,
  } = general || "";

  const business = {
    HeadingName2: {
      type: "text",
      value: "Business",
    },
    whatAreTravialBenefits: {
      type: "text",
      value: "WHAT ARE TRIVIAL BENEFITS?",
    },
    whatAreTravialBenefitsAnswer: {
      type: "text",
      value:
        '<p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" id="isPasted" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">If you are a business using the pirkx platform. HMRC have some fairly strict rules when it comes to what they define as &lsquo;trivial&rsquo; benefits. You don&rsquo;t have to pay tax on benefits for your employees if all of the following conditions are met:</p><div class="MuiGrid-root css-3wfewp-MuiGrid-root" style="box-sizing: border-box; margin: 20px 0px 0px; padding: 0px; flex-direction: row; color: rgba(0, 0, 0, 0.87); font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.15008px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">The benefit doesn&rsquo;t cost you &pound;50 or more to provide (including VAT)</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">The benefit isn&rsquo;t cash or a cash voucher</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">The benefit isn&rsquo;t a reward for your employee&rsquo;s work or performance</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">The benefit is not part of any contractual obligation with your employee</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">Free entry to a monthly lottery, where you could win up to &pound;3,000</p></div><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><span class="css-16b1rbi" style="box-sizing: inherit; margin: 0px; padding: 0px; height: 6px; width: 6px; border-radius: 50%; background-color: rgb(60, 191, 174);"></span><p class="MuiTypography-root MuiTypography-body1 css-1xbnw7w-MuiTypography-root" style="box-sizing: inherit; margin: 0px; padding: 0px; letter-spacing: 0.00938em; color: rgb(74, 79, 85); max-width: 1083px; width: 1082.99px; line-height: 1.33; font-family: Corbel; font-weight: normal; font-size: 19px;">Discounted travel money, travel currency and international payments</p></div></div><p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">For more information, please visit HMRC&rsquo;s official guidance at&nbsp;<span class="css-13vijzr" color="#ff6c00" style="box-sizing: inherit; margin: 0px; padding: 0px; overflow-wrap: break-word; color: rgb(255, 108, 0); font-family: inherit;">https://www.gov.uk/expenses-and-benefits-trivial-benefits</span></p><div class="MuiGrid-root css-3wfewp-MuiGrid-root" style="box-sizing: border-box; margin: 20px 0px 0px; padding: 0px; flex-direction: row; color: rgba(0, 0, 0, 0.87); font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.15008px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><div class="MuiGrid-root MuiGrid-container css-isl4qx-MuiGrid-root" style="box-sizing: border-box; margin: 0px; padding: 0px; display: flex; width: 1123.99px; flex-flow: row; -webkit-box-align: baseline; align-items: baseline; gap: 5px;"><br></div></div>',
    },
  };

  const troubleShooting = {
    HeadingName3: {
      type: "text",
      value: "TROUBLESHOOTING",
    },
    whatShouldIDo: {
      type: "text",
      value:
        "WHAT SHOULD I DO IF MY TEAM MEMBER INVITES ARE PENDING AND THEIR EMAIL ADDRESSES HAVE BEEN FLAGGED?",
    },
    whatShouldIDoAnswer: {
      type: "text",
      value:
        '<p class="MuiTypography-root MuiTypography-body1 css-710a5u-MuiTypography-root" id="isPasted" style="box-sizing: inherit; margin: 20px 0px 0px; padding: 0px; letter-spacing: normal; line-height: 28px; font-stretch: normal; font-size: 21px; font-family: Corbel; color: rgb(74, 79, 85); font-style: normal; font-weight: 400; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span id="isPasted" style="color: rgb(74, 79, 85); font-family: Corbel; font-size: 21px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">When this happens it usually means that some of the email addresses you&rsquo;ve inputted for your team members is incorrect &ndash; we would have sent you an email on how to resolve this issue, but just in case you missed it, all you have to do is go back into your admin account and change the flagged email addresses.</span></p><div class="MuiGrid-root css-3wfewp-MuiGrid-root" style="box-sizing: border-box; margin: 20px 0px 0px; padding: 0px; flex-direction: row; color: rgba(0, 0, 0, 0.87); font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.15008px; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><br></div>',
    },
  };

  const { HeadingName2, whatAreTravialBenefits, whatAreTravialBenefitsAnswer } =
    business || "";
  const { HeadingName3, whatShouldIDo, whatShouldIDoAnswer } =
    troubleShooting || "";

  const rightHandle1 = {
    title: {
      type: "text",
      value: "Have we answered all of your questions?",
    },
    subTitle: {
      type: "text",
      value:
        "If we haven’t please contact customer services by calling us on <span style='font-family:corbelbold;color:#fff;word-wrap:break-word;'>202 830 7918</span> or emailing <span style='font-family:Corbel-Regular;color:#fff;text-decoration:underline; '><mailto:a>hello@pirkx.com</a></span> – we’ll be happy to assist you in any way we can.",
    },
    happyImage: {
      type: "image",
      src: "/image/whiteHappier.svg",
      alt: "happyImg",
    },
  };

  return (
    <>
      <div className="flex flex-wrap w-full items-center flex-col bg-[#f5f5f5] relative">
        <p className="font-[Nobel-Book] font-normal text-[21px] tracking-[5.25px] text-center text-[#3cbfae] uppercase leading-[3.33] mt-[127px] xmd:leading-[1.47] xmd:tracking-[2.25px]">
          {header?.faqs}
        </p>
        <p className="max-w-[694px] w-full font-[Nobel-Light] text-[28px] leading-[1.29] tracking-normal text-center text-[#4a4f55] font-[300] mt-[32px] xmd:text-[22px] xmd:py-0 xmd:px-[10px]">
          {decodeTextToHtml(header?.title)}
        </p>
        <div className="flex flex-wrap w-full items-center justify-center flex-row gap-[20px] mt-[20px] xmd:flex-col">
          {faqHeadingListValue?.map((item, index) => (
            <div
              className={`pt-[10px] pr-[20px] pb-[11px] pl-[21px] rounded-[18px] ${
                selectedSection === index ? "bg-[#3cbfae]" : "bg-[#fff]"
              } cursor-pointer xmd:w-full`}
              onClick={() => handleSelectedFaqHeading(index)}
              selected={selectedSection === index}
              key={index}
            >
              <p
                className={`text-[12px] tracking-[3.6px] uppercase font-[Nobel-Bold] ${
                  selectedSection === index ? "text-[#fff]" : "text-[#3cbfae]"
                } xmd:text-center`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap w-full max-w-[1481px] shadow-[0_20px_30px_0_rgba(28,40,44,0.2)] bg-white mt-[55px] mx-0 mb-[100px] flex-col z-10">
          <div className="pt-[5px] pr-[297px] pb-[150px] pl-[60px] w-full xmd:pt-[60px] xmd:px-[10px] xmd:pb-[50px]">
            {(selectedSection === 0 || selectedSection === 1) && (
              <div id={"General"}>
                <p className="text-[35px] text-left tracking-[8.75px] uppercase text-[#ffb81d] font-[Nobel-Bold] font-[400] leading-[1.5] mt-[55px] xmd:tracking-[4px] xmd:text-[30px] xmd:overflow-hidden xmd:text-ellipsis xmd:whitespace-nowrap xmd:max-w-full">
                  {HeadingName1?.value}
                </p>
                <p className="font-[Nobel-Book] font-normal text-[21px] tracking-[5.25px] text-left text-[#3cbfae] uppercase leading-[3.33] mt-[20px] xmd:leading-[1.47] xmd:tracking-[2.25px]">
                  {whatIsPirkx?.value}
                </p>
                <p className="tracking-normal leading-[28px] not-italic font-normal text-[21px] font-[Corbel] mb-0 text-[#4a4f55] mt-[20px] xmd:leading-[1.5]">
                  {decodeTextToHtml(whatIsPirkxAnswer?.value)}
                </p>
                <p className="font-[Nobel-Book] font-normal text-[21px] tracking-[5.25px] text-left text-[#3cbfae] uppercase leading-[3.33] mt-[20px] xmd:leading-[1.47] xmd:tracking-[2.25px]">
                  {whoCanJoinpirkx?.value}
                </p>
                <p className="tracking-normal leading-[28px] not-italic font-normal text-[21px] font-[Corbel] mb-0 text-[#4a4f55] mt-[20px] xmd:leading-[1.5]">
                  {decodeTextToHtml(whoCanJoinpirkxAnswer?.value)}
                </p>
                <p className="font-[Nobel-Book] font-normal text-[21px] tracking-[5.25px] text-left text-[#3cbfae] uppercase leading-[3.33] mt-[20px] xmd:leading-[1.47] xmd:tracking-[2.25px]">
                  {pirkxBenefit?.value}
                </p>
                <p className="tracking-normal leading-[28px] not-italic font-normal text-[21px] font-[Corbel] mb-0 text-[#4a4f55] mt-[20px] xmd:leading-[1.5]">
                  {decodeTextToHtml(pirkxBenefitAnswer?.value)}
                </p>
              </div>
            )}
            {(selectedSection === 0 || selectedSection === 2) && (
              <div id={"Business"}>
                <p className="text-[35px] text-left tracking-[8.75px] uppercase text-[#ffb81d] font-[Nobel-Bold] font-[400] leading-[1.5] mt-[55px] xmd:tracking-[4px] xmd:text-[30px] xmd:overflow-hidden xmd:text-ellipsis xmd:whitespace-nowrap xmd:max-w-full">
                  {HeadingName2?.value}
                </p>
                <p className="font-[Nobel-Book] font-normal text-[21px] tracking-[5.25px] text-left text-[#3cbfae] uppercase leading-[3.33] mt-[20px] xmd:leading-[1.47] xmd:tracking-[2.25px]">
                  {whatAreTravialBenefits?.value}
                </p>
                <p className="tracking-normal leading-[28px] not-italic font-normal text-[21px] font-[Corbel] mb-0 text-[#4a4f55] mt-[20px] xmd:leading-[1.5]">
                  {decodeTextToHtml(whatAreTravialBenefitsAnswer?.value)}
                </p>
              </div>
            )}
            {(selectedSection === 0 || selectedSection === 3) && (
              <div id={"TROUBLESHOOTING"}>
                <p className="text-[35px] text-left tracking-[8.75px] uppercase text-[#ffb81d] font-[Nobel-Bold] font-[400] leading-[1.5] mt-[55px] xmd:tracking-[4px] xmd:text-[30px] xmd:overflow-hidden xmd:text-ellipsis xmd:whitespace-nowrap xmd:max-w-full">
                  {HeadingName3?.value}
                </p>
                <p className="font-[Nobel-Book] font-normal text-[21px] tracking-[5.25px] text-left text-[#3cbfae] uppercase leading-[3.33] mt-[20px] xmd:leading-[1.47] xmd:tracking-[2.25px]">
                  {whatShouldIDo?.value}
                </p>
                <p className="tracking-normal leading-[28px] not-italic font-normal text-[21px] font-[Corbel] mb-0 text-[#4a4f55] mt-[20px] xmd:leading-[1.5]">
                  {decodeTextToHtml(whatShouldIDoAnswer?.value)}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-wrap w-full bg-[#3cbfae] max-w-[1481px] pt-[105px] pr-[423px] pb-[60px] pl-[406px] relative flex-col items-center justify-center xmd:py-[10px] xmd:px-[20px]">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url(/image/bgHappy.svg)",
              }}
            ></div>
            <p className="font-[Nobel-Light] font-[400] text-[28px] tracking-normal text-center text-white leading-[36px] xmd:text-[22px]">
              {rightHandle1?.title?.value}
            </p>
            <p className="text-[19px] w-full text-center leading-[28px] text-white font-[Corbel-Regular] font-[400] tracking-normal mt-[20px] xmd:text-[12px]">
              {decodeTextToHtml(rightHandle1?.subTitle?.value)}
            </p>
          </div>
        </div>
        <div className="flex justify-center absolute bottom-[-4%] right-[8%] xmd:hidden">
          <img
            className="max-w-[570.4px] min-h-[559.2px] w-full z-20"
            src={rightHandle1?.happyImage?.src}
            alt={rightHandle1?.alt}
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
