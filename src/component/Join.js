import React from "react";

function Join() {
  return (
    <>
      <div className="relative mt-[82px]">
        <div
          className="absolute left-0 top-0 h-[293px] bg-contain w-[222px] z-10 bg-no-repeat"
          style={{
            backgroundImage: "url(/image/pink-curve-bol.svg)",
          }}
        ></div>
        <div
          className="sm:hidden absolute bg-cover h-[422px] w-[66px] top-1/20 right-0 -z-10"
          style={{
            backgroundImage: "url(/image/rightSlice.svg)",
          }}
        ></div>
        <div className="relative pt-[82px] bg-white xl:h-full h-[600px]">
          <div className="flex justify-center items-center flex-col mb-[20px]">
            <p className="font-[Nobel-Book] text-[21px] uppercase tracking-[5.25px] text-center text-[#151515] mb-[13px]">
              GET PIRKX WELLBEING BENEFITS
            </p>
            <p className="flex font-[Nobel-Bold] font-bold text-[70px] tracking-[17.5px] uppercase text-center leading-normal text-[#3cbfae] sm:tracking-[10px] mb-[34px]">
              Join Us
            </p>
            <p className="font-[Nobel-Light] text-[28px] tracking-normal text-center font-[300] mb-[52px] leading-[1.29] text-[#151515]">
              Select whether you would like a membership for yourself or for
              your business.
            </p>
            <div className="flex w-full justify-center items-center gap-[32px] xmd:flex xmd:flex-col xmd:justify-center">
              <div className="flex flex-wrap flex-col items-center max-w-[480px] w-full pt-[32px] px-[10px] pb-[65.2px] relative rounded-[5px] shadow-[0_20px_30px_0_rgba(28,40,44,0.2)] bg-white z-10 border-none ">
                <div className="flex">
                  <img
                    className="mb-[38px] max-w-[250px] m-h-[250px]"
                    src="/image/personal.png"
                  />
                </div>
                <p className="flex font-[Nobel-Book] text-[21px] font-normal not-italic tracking-[5.25px] text-center uppercase text-[#fab70a] mb-[12px]">
                  Personal Membership
                </p>
                <p className="font-[Nobel-Light] text-[35px] font-[300] not-italic tracking-normal leading-normal text-center text-[#fab70a]">
                  <span className="flex justify-center">For</span>
                  <span className="underline flex justify-center">myself</span>
                </p>
                <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-center color-[#4a4f55] max-w-[355px] my-[32px] mx-auto flex">
                  Join pirkx as a contract worker, director or sole trader,and
                  get all the great wellbeing benefits for yourself.
                </p>
                <div className="flex justify-center text-center">
                  <button className="rounded-[18px] inline-flex items-center justify-center relative no-underline uppercase min-w-[64px] py-[6px] px-[28px] text-white bg-[#fab70a] h-[36px]">
                    Join Now
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap flex-col items-center max-w-[480px] w-full pt-[32px] px-[10px] pb-[65.2px] relative rounded-[5px] shadow-[0_20px_30px_0_rgba(28,40,44,0.2)] bg-white z-10 border-none ">
                <div className="flex">
                  <img
                    className="mb-[38px] max-w-[250px] m-h-[250px]"
                    src="/image/business.png"
                  />
                </div>
                <p className="flex font-[Nobel-Book] text-[21px] font-normal not-italic tracking-[5.25px] text-center uppercase text-[#009ddb] mb-[12px]">
                  Business Membership
                </p>
                <p className="font-[Nobel-Light] text-[35px] font-[300] not-italic tracking-normal leading-normal text-center text-[#009ddb]">
                  <span className="flex justify-center">For my</span>
                  <span className="underline flex justify-center">
                    workforce & clients
                  </span>
                </p>
                <p className="font-[Corbel] text-[19px] leading-[1.47] tracking-normal text-center color-[#4a4f55] max-w-[385px] my-[32px] mx-auto flex">
                  Join pirkx for free and invite your team – whether they’re
                  employees, contract workers or clients - let them enjoy great
                  wellbeing benefits.
                </p>
                <div className="flex justify-center text-center">
                  <button className="rounded-[18px] inline-flex items-center justify-center relative no-underline uppercase min-w-[64px] py-[6px] px-[28px] text-white bg-[#009ddb] h-[36px]">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center flex-col items-center pr-[40px] xmd:text-[18px] bg-[#3cbfae] py-[5%] px-[2%]">
            <p className="uppercase tracking-[2.5px] text-white font-[500] text-[21px] leading-[1.2] text-center font-[Nobel-Book]">
              AFFORDABLE WELLBEING BENEFITS IMPROVING HEALTH, WEALTH AND
              HAPPINESS
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
