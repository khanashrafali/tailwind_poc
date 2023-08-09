import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen flex-wrap w-full mt-[82px] bg-white">
        <div className="flex flex-col basis-1/2 flex-grow-0 items-center justify-center w-1/2 bg-cover bg-center bg-no-repeat relative xmd:hidden">
          <div
            className="min-h-screen bg-center bg-cover w-full object-cover"
            style={{
              backgroundImage: "url(/image/bgHappy.svg)",
            }}
          ></div>
          <div
            className="absolute left-0 top-0 h-[64.3%] w-[24.3%] bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://pirkx.com.au/assets/release4/login_header_lgt_bg.png)",
            }}
          ></div>
          <div
            className="absolute right-0 bottom-0 h-1/5 w-[53.5%] bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://pirkx.com.au/assets/release4/login_header_rgt_bg.png)",
            }}
          ></div>
          {/* Your other background images and content */}
        </div>

        <div className="flex flex-col basis-1/2 flex-grow-0 items-start justify-center w-1/2 bg-white px-[70px] xmd:basis-full">
          <div className="w-full pt-[5px] pr-[45px] pb-[35px] pl-[25px] xmd:p-[33px]">
            <p className="uppercase text-[#3CBFAE] tracking-[5px] text-[17px] font-[Roboto] leading-[1.5]">
              WELCOME BACK
            </p>
            <h5 className="font-[Roboto] leading-[1.334] text-xl mt-[30px] text-[#151515]">
              Login for access to your benefits and rewards.
            </h5>

            {/* Login and Signup Tabs */}
            <div className="flex space-x-12 my-[30px] box-border flex-wrap">
              <p className="leading-[1.5] tracking-[0.00938em] font-[Nobel-Bold] uppercase text-[#4a4f55] text-sm font-bold border-solid border-b-[3px] border-[#ff6c04]">
                Login
              </p>
              <p
                onClick={() => navigate("/join")}
                className="leading-[1.5] tracking-[0.00938em] font-[Nobel-Bold] uppercase text-[#4a4f55] font-bold"
              >
                Signup
              </p>
            </div>

            {/* Input Fields */}
            <div className="max-w-[480px] w-full flex flex-wrap flex-col ">
              <input
                className="border-b-[3px] border-solid border-[#3cbfae] px-0 text-[1.75em] font-[Nobel-Light] text-[#151515] block w-full leading-[1.5] h-calc-height focus:outline-none focus: shadow-[0 0 0 red] mb-[40px] mt-[10px] pb-[9px]"
                type="text"
                name="email"
                placeholder="Email address"
              />
              <input
                className="border-b-[3px] border-solid border-[#3cbfae] px-0 text-[1.75em] font-[Nobel-Light] text-[#151515] block w-full leading-[1.5] h-calc-height focus:outline-none focus: shadow-[0 0 0 red] mb-[40px] mt-[10px] pb-[9px]"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            {/* Login Button */}
            <div>
              <button className="inline-flex items-center justify-center relative box-border select-none align-middle bg-[#ff6c00] text-[0.875rem] leading-[1.75] tracking-[0.02857em] uppercase rounded-[32px] px-[8px] py-[6px] min-w-[106px] max-w-[200px]">
                Login
              </button>

              {/* Forgot Password Link */}
              <p className="w-[40%] leading-[1.5] tracking-[0.00938em] text-[#3cbfae] mt-[30px] text-sm border-solid border-b-[3px] border-[#3cbfae] xmd:w-[45%]">
                Forgot password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
