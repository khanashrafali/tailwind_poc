import React from "react";
import TextField from "./TextField";
import PhoneNumberInput from "./PhoneNumberInput";
import Recaptcha from "./Recaptcha";

function Contact() {
  const imgJsonValue = [
    {
      backImage: "/image/bgZoom.png",
      image: "/image/Zoom.png",
      text: "ONLINE DEMO",
      navigate: `/online_demo`,
    },
    {
      backImage: "/image/bgPhone.png",
      image: "/image/Phone.png",
      text: "CALL ME BACK",
      tabId: "CALL ME BACK",
    },
    {
      backImage: "/image/bgCalender.png",
      image: "/image/Calender.png",
      text: "BOOK A MEETING",
      type: "link",
      href: "https://meetings.hubspot.com/ben1516/pirkx-demo",
      target: "_blank",
    },
    {
      backImage: "/image/bgZoom.png",
      image: "/image/Email.png",
      text: "EMAIL",
      type: "link",
      href: "mailto:hello@pirkx.com",
      target: "_self",
    },
  ];

  return (
    <>
      <div className="mt-[83px]">
        <div className="relative pt-[108px] text-white flex w-full h-[760px] bg-[#3cbfae] gap-[54px] flex-nowrap 2xl:gap-[20px] xl:h-[900px] xmd:h-full xmd:flex-wrap xmd:flex-col">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover z-0 bg-no-repeat"
            style={{
              backgroundImage: "url(/image/bgHappy.svg)",
            }}
          ></div>
          <div className="flex pl-[40px] items-end flex-col basis-5/12 xmd:basis-5/12 xmd:items-center">
            <div className="relative max-w-[669px] z-10">
              <p className="text-[30px] pb-[2rem] tracking-[12px] uppercase font-[Nobel-Bold] font-[400] leading-[1.5] md:text-[20px] md:tracking-[6.5px]">
                UK OFFICEee
              </p>
              <img
                className="w-[27px] h-[30px]"
                src="/image/Icon-Chat.svg"
                alt="chat"
              />
              <p className="font-[Nobel-Light] font-[300] text-[28px] leading-[1.29] my-[20px] max-w-[487px] w-full tracking-[0.00938em]">
                Discover how you and your family can enjoy pirkx in minutes
                <span className="font-[Nobel-Regular] font-normal"></span>.
              </p>
              <p className="font-[Corbel] text-[19px] mb-[20px] tracking-normal leading-[28px] font-[400]">
                We’re humanising benefits that you can only find in large
                corporations. Whoever you are and whatever you do, our
                affordable wellbeing benefits are for everyone.
              </p>
              <div className="flex flex-wrap w-full justify-between mt-[20px]">
                {imgJsonValue?.map((item, index) => {
                  const {
                    type,
                    href,
                    target,
                    backImage,
                    image,
                    text,
                    navigate,
                    tabId,
                  } = item || "";
                  return (
                    <div className="flex items-center cursor-pointer flex-col">
                      <div className="flex items-center justify-center relative w-[73px] h-[73px]">
                        <img
                          className="max-w-[72px] max-h-[72px] object-contain"
                          src={backImage}
                          alt={"back"}
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <img
                            className="max-w-[37px] max-h-[23px] object-contain"
                            src={image}
                            alt={"back"}
                          />
                        </div>
                      </div>
                      <p className="text-[12px] font-[Nobel-Bold] font-bold mt-[3px] whitespace-nowrap tracking-[3px] leading-[1.5]">
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap w-full w-calc-contackWidth mt-[121px] 2xl:mt-[50px] justify-evenly ml-0">
                <div className="flex flex-grow-0 pl-[20px] pt-[20px] basis-1/2 xmd:basis-1/2">
                  <div className="w-full pt-[37px] pr-[50px] pb-[41px] pl-[30px] bg-white shadow-[0_20px_30px_0_rgba(28,40,44,0.2)] z-10 max-w-[335px] rounded-[5px]">
                    <p className="text-[21px] tracking-[5.25px] uppercase font-[Nobel-Book] mb-[6px] text-[#3cbfae] leading-[1.5] font-[400]">
                      UK OFFICE
                    </p>
                    <p className="mb-[10px] text-[#4a4f55] font-[Corbel] max-w-[180px] text-[19px] font-[400] leading-[1.5] tracking-[0.00938em]">
                      25 Newton Street, Covent Garden, London, WC2B 5EL
                    </p>
                    <button
                      className="text-[#ff6c00] py-[10px] px-0 text-[12px] font-bold tracking-[3.6px]"
                      onClick={() =>
                        window.open("https://goo.gl/maps/rPprrqmx2fV8w9Ns7")
                      }
                    >
                      <img src="/image/Room.svg" /> DIRECTIONS
                    </button>
                  </div>
                </div>
                <div className="flex flex-grow-0 pl-[20px] pt-[20px] basis-1/2 xmd:basis-1/2">
                  <div className="w-full pt-[37px] pr-[50px] pb-[41px] pl-[30px] bg-[#3cbfae] shadow-[0_20px_30px_0_rgba(28,40,44,0.2)] z-10 max-w-[335px] rounded-[5px]">
                    <p className="text-[21px] tracking-[5.25px] uppercase font-[Nobel-Book] mb-[6px] text-white leading-[1.5] font-[400]">
                      NEED HELP?
                    </p>
                    <p className="mb-[20px] text-white font-[Corbel] max-w-[240px] text-[17px] font-[400] leading-[1.5] tracking-[0.00938em]">
                      Our frequently asked questions may have the help you are
                      looking for.
                    </p>
                    <button className="inline-block align-middle text-center font-[Nobel-Bold] font-bold uppercase text-[11px] rounded-[30px] tracking-[3.3px] w-[84px] py-[10px] px-[25px] border-solid border-[1px] border-[#ff6c00] leading-normal transition-all duration-200 ease-in-out bg-[#ff6c00] text-white">
                      FAQS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-7/12 flex-grow-0 pr-[98px] xmd:pr-0">
            <div className="flex flex-wrap flex-col">
              <div className="w-full pt-[54px] pr-[59px] pb-[57px] pl-[58px] bg-white shadow-[0_20px_30px_0_rgba(28,40,44,0.2)] z-10 max-w-[958px]">
                <div className="flex-nowrap flex justify-between w-full xmd:flex-wrap">
                  <div className="">
                    <p className="text-[21px] tracking-[5.25px] uppercase font-[Nobel-Book] mb-[6px] text-[#3cbfae] font-[400] leading-[1.5]">
                      REQUEST INFORMATION
                    </p>
                    <p className="mb-[10px] text-[#151515] font-[Nobel-Light] text-[1.75em] font-[400] leading-[1.5] tracking-[0.00938em]">
                      Enter your details and our team will get back to you
                    </p>
                  </div>
                  <div>
                    <img
                      src="/image/happier_health_image.png"
                      className="h-[209px] w-[213px]"
                    />
                  </div>
                </div>
                <label className="text-[21px] font-[Nobel-Book] tracking-[5.25px] text-[#151515] uppercase whitespace-normal pb-[30px] leading-[0.00938em] sm:tracking-[2px]">
                  YOUR DETAILS
                </label>
                <div className="flex flex-wrap w-calc-formWidth mb-[30px]">
                  <div className="basis-1/2 flex-grow-0">
                    <TextField
                      placeholder="First name"
                      type="text"
                      value=""
                      name="first_name"
                      required
                    />
                  </div>
                  <div className="basis-1/2 flex-grow-0">
                    <TextField
                      placeholder="Last name"
                      type="text"
                      value=""
                      name="last_name"
                      required
                    />
                  </div>
                  <div className="basis-1/2 flex-grow-0">
                    <TextField
                      placeholder="Email Address"
                      type="email"
                      value=""
                      name="email"
                      required
                    />
                  </div>
                  <div className="basis-1/2 flex-grow-0 mt-[14px]">
                    <PhoneNumberInput placeholder="Phone number" value="" />
                  </div>
                </div>
                <label className="text-[21px] font-[Nobel-Book] tracking-[5.25px] text-[#151515] uppercase whitespace-normal pb-[30px] leading-[0.00938em] sm:tracking-[2px]">
                  HOW CAN WE HELP?
                </label>
                <TextField
                  placeholder="Start writing your message here…"
                  type="text"
                  name="message"
                  value=""
                  multiline={true}
                  rows={4}
                />
                <div className="mt-[54px]">
                  <label className="inline-flex cursor-pointer ml-[-11px] mr-[16px] items-start font-[Corbel] text-[19px] tracking-normal text-[#4a4f55]">
                    <span
                      className="relative h-[35px] w-[42px] bg-cover mr-[8px] bg-no-repeat rounded-[50%] p-[9px]"
                      style={{
                        backgroundImage: "url(/image/checkbox-outline.svg )",
                      }}
                    >
                      <input
                        className="absolute opacity-0 w-full h-full top-0 left-0 m-0 p-0 z-10 bg-white border-solid border-b-[1px] border-b-[#d50458] text-[#151515]"
                        type="checkbox"
                        name="isTermAccepted"
                        checked={false}
                      />
                    </span>
                    <p className="pt-[6px] font-[400] font-[Corbel] text-[1rem] leading-[1.5] tracking-[0.00938em]">
                      Please tick to agree to our{" "}
                      <span className="text-[#ff6c00] underline text-[19px] font-[Corbel]">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-[#ff6c00] underline text-[19px] font-[Corbel]">
                        Privacy Policy
                      </span>
                      .
                    </p>
                  </label>
                </div>
                <div className="mb-[22px]">
                  <label className="inline-flex cursor-pointer ml-[-11px] mr-[16px] items-start font-[Corbel] text-[19px] tracking-normal text-[#4a4f55]">
                    <span
                      className="relative h-[35px] w-[42px] bg-cover mr-[8px] bg-no-repeat rounded-[50%] p-[9px]"
                      style={{
                        backgroundImage: "url(/image/checkbox-outline.svg )",
                      }}
                    >
                      <input
                        className="absolute opacity-0 w-full h-full top-0 left-0 m-0 p-0 z-10 bg-white border-solid border-b-[1px] border-b-[#d50458] text-[#151515]"
                        type="checkbox"
                        name="isTermAccepted"
                        checked={false}
                      />
                    </span>
                    <span className="pt-[6px] font-[400] font-[Corbel] text-[1rem] leading-[1.5] tracking-[0.00938em]">
                      Tick if you would like to be kept up-to-date with all our
                      exciting news
                    </span>
                  </label>
                </div>
                <Recaptcha />
                <div className="mt-[36px]">
                  <button className="cursor-pointer inline-block text-center uppercase font-[Nobel-Bold] text-[11px] rounded-[30px] tracking-[3.3px] w-[170px] py-[10px] px-[25px] leading-normal outline-none bg-[#ff6c00] text-white transition-all duration-200 ease-in-out">
                    GET IN TOUCH
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative">
        <img
          className="w-full object-cover"
          src="https://loveventures.co.uk/wp-content/uploads/2022/08/Pirkx-whole-team-1024x683.jpeg"
          alt="map"
        />
        <div className="absolute top-[42%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
          <img src="/image/location.svg" alt="marker" />
        </div>
      </div>
    </>
  );
}

export default Contact;
