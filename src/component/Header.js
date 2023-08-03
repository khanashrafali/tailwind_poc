import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();
  //   const [showMenu, setShowMenu] = useState(false);

  //   const toggleMenu = () => {
  //     setShowMenu((prevShowMenu) => !prevShowMenu);
  //   };

  const [country, setCountry] = useState("UK");

  const handleChange = (e) => {
    const { value } = e.target;
    setCountry(value);
  };

  const menu = [
    {
      label: "PERSONAL",
      href: "/personal",
    },
    {
      label: "BUSINESS",
      href: "/business",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Spotlight",
      href: "/spotlight",
    },
    {
      label: "ABOUT",
      href: "/about",
    },
    {
      label: "CONTACT",
      href: "/contact-us",
    },
  ];

  return (
    <header className="bg-[#3cbfae] fixed top-0 left-0 z-30 w-full float-left">
      <div className="w-full px-[40px] md:pl-[20px] md:pr-0">
        <div className="flex items-center justify-between">
          <a className="w-[97px] inline-block py-[16px] px-0">
            <img src="/image/logo.svg" />
          </a>
          <div className="inline-block pr-[2px]">
            <ul className="w-auto inline-block float-right">
              {menu.map((item) => {
                return (
                  item && (
                    <li
                      className="inline-block relative w-auto px-0 text-left py-[8px]"
                      key={item?.label}
                    >
                      <button className="flex text-center justify-center items-center box-border select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] border-none leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-transparent h-[36px] border-solid border-[1px] border-[#ff6c00] text-white xl:w-auto xl:h-auto xl:inline-flex">
                        {item?.label}
                      </button>
                    </li>
                  )
                );
              })}
              <li className="inline-block relative w-auto px-0 text-left py-[8px]">
                <a className="flex text-center justify-center items-center box-border min-w-[64px] select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-[#ff6c00] w-[108px] h-[36px] border-none text-white xl:w-auto xl:h-auto xl:inline-flex">
                  Join
                </a>
              </li>
              <li className="inline-block relative w-auto px-0 text-left py-[8px]">
                <button className="flex text-center justify-center items-center box-border min-w-[64px] select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-transparent w-[108px] h-[36px] border-solid border-[1px] border-[#ff6c00] text-white xl:w-auto xl:h-auto xl:inline-flex">
                  Login
                </button>
              </li>
              <li className="inline-block relative w-auto px-0 text-left py-[8px]">
                <div className="w-auto relative py-[8px] mx-6">
                  <select
                    value={country}
                    onChange={handleChange}
                    className="w-full h-8 px-1 pr-0 text-white text-xs font-bold Nobel-Bold focus:outline-none bg-transparent mt-[10px] h-[20px]"
                  >
                    <option
                      className="bg-transparent min-w-[16px] w-full whitespace-nowrap h-auto text-ellipsis overflow-hidden py-[6px] px-[16px] text-[16px] leading-[1.5] text-[#151515]"
                      value="AUS"
                    >
                      AUS
                    </option>
                    <option
                      className="bg-transparent min-w-[16px] w-full whitespace-nowrap h-auto text-ellipsis overflow-hidden py-[6px] px-[16px] text-[16px] leading-[1.5] text-[#151515]"
                      value="UK"
                    >
                      UK
                    </option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
