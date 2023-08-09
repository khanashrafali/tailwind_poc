import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    };

    // Attach event listener only when the menu is open
    if (anchorEl) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [anchorEl]);

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
                      className="inline-block relative w-auto px-0 text-left py-[8px] xmd:hidden"
                      key={item?.label}
                    >
                      <button
                        active={window?.location?.pathname?.includes(
                          item?.href
                        )}
                        onClick={() => {
                          if (item?.href) {
                            navigate(item?.href);
                          }
                        }}
                        className="flex text-center justify-center items-center box-border select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] border-none leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-transparent h-[36px] border-solid border-[1px] border-[#ff6c00] text-white xl:w-auto xl:h-auto xl:inline-flex"
                      >
                        {item?.label}
                      </button>
                    </li>
                  )
                );
              })}
              <li className="inline-block relative w-auto px-0 text-left py-[8px]">
                <a
                  onClick={() => navigate("/join")}
                  className="flex text-center justify-center items-center box-border min-w-[64px] select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-[#ff6c00] w-[108px] h-[36px] border-none text-white xl:w-auto xl:h-auto xl:inline-flex"
                >
                  Join
                </a>
              </li>
              <li className="inline-block relative w-auto px-0 text-left py-[8px]">
                <button
                  onClick={() => navigate("/login")}
                  className="flex text-center justify-center items-center box-border min-w-[64px] select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-transparent w-[108px] h-[36px] border-solid border-[1px] border-[#ff6c00] text-white xl:w-auto xl:h-auto xl:inline-flex"
                >
                  Login
                </button>
              </li>
              <li className="hidden relative w-auto px-0 xmd:inline-block">
                <button
                  ref={menuRef}
                  onClick={handleClick}
                  className="flex text-center justify-center items-center box-border min-w-[64px] select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-transparent w-[108px] h-[36px] border-none text-white xl:w-auto xl:h-auto xl:inline-flex"
                >
                  <img className="mt-[5px]" src="/image/menu-icon.svg" />
                </button>
              </li>
              {anchorEl && (
                <div className="bg-white text-[rgba(0,0,0,0.87)] rounded-[4px] shadow-my-shadow absolute overflow-y-auto overflow-x-hidden min-w-[16px] min-h-[75px] max-w-menuWidth opacity-100 transform-none top-[16px] left-[770px]">
                  {menu.map((item) => {
                    return (
                      item && (
                        <li
                          className="relative items-center py-[6px] whitespace-nowrap px-[16px] flex justify-center font-[nobel-Bold] font-bold uppercase text-[11px] tracking-[2px] leading-normal transition-all duration-300"
                          key={item?.label}
                          active={window?.location?.pathname?.includes(
                            item?.href
                          )}
                          onClick={() => {
                            if (item?.href) {
                              navigate(item?.href);
                            }
                            handleClose();
                          }}
                        >
                          {/* <button
                          active={window?.location?.pathname?.includes(
                            item?.href
                          )}
                          onClick={() => {
                            if (item?.href) {
                              navigate(item?.href);
                            }
                          }}
                          className="flex text-center justify-center items-center box-border select-none font-[500] py-[6px] px-[8px] font-[Nobel-Bold] uppercase text-[12px] rounded-[30px] tracking-[2px] border-none leading-normal transition-all duration-300 ease-in-out outline-none my-0 mx-[6px] bg-transparent h-[36px] border-solid border-[1px] border-[#ff6c00] text-white xl:w-auto xl:h-auto xl:inline-flex"
                        > */}
                          {item?.label}
                          {/* </button> */}
                        </li>
                      )
                    );
                  })}
                </div>
              )}
              <li className="inline-block relative w-auto px-0 text-left py-[8px] xmd:hidden">
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
