import React, { useEffect, useState } from "react";

function Spotlight() {
  const [isSticky, setSticky] = useState(false);
  const [tabName, setTabName] = useState("WHY PIRKX?");

  const scrollTos = (element, top = 80) => {
    let el = document.getElementById(element);
    if (el) {
      let offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition - top,
        behavior: "smooth",
      });
    }
  };

  const tabList = [
    {
      type: "text",
      value: "NEWS & EVENTS",
      tabId: "spotlight NEWS & EVENTS",
    },
    {
      type: "text",
      value: "FEATURES",
      tabId: "spotlight FEATURES",
    },
    {
      type: "text",
      value: "MAKING AN IMPACT",
      tabId: "spotlight MAKING AN IMPACT",
    },
    {
      type: "text",
      value: "PEOPLE WE HELP",
      tabId: "spotlight PEOPLE WE HELP",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windscroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const sections = document.querySelectorAll("div[id], p[id]");
      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (
          section.offsetTop <= windscroll + 250 &&
          id &&
          tabList?.includes(id)
        ) {
          setTabName(id);
        }
      });
      if (window.pageYOffset > window.innerHeight - 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabChange = (e, newValue) => {
    console.log("tablist", newValue);
    scrollTos(newValue);
    setTabName(newValue);
  };
  const [showCardButton, setShowCardButton] = useState(false);

  const handleOnMouseEnter = () => {
    setShowCardButton(true);
  };
  const handleOnMouseLeave = () => {
    setShowCardButton(false);
  };

  const helpData = [
    {
      id: 132,
      title: "Testing Impact 1",
      subtitle: "<p>I am page titlte&nbsp;</p>\r\n",
      body: "checkinggggggg",
      published: true,
      published_at: "2023-07-31T11:14:53.082Z",
      image: {
        url: "https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/article/image/private/223/lufy2.png?X-Amz-Expires=1800&X-Amz-Date=20230731T111453Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAW4XC4GRIFKSLK3HP%2F20230731%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=600c0669d5d4b3a33ee3744ef7c71678a9d57969079530a00b26d62f6d76a815",
      },
      read_time: null,
      publisher: null,
      publisher_title: "Ranvir",
      publisher_image: {
        url: "",
      },
      created_at: "2023-07-31T11:14:53.077Z",
      updated_at: "2023-07-31T11:14:53.083Z",
      last_updated: "2023-07-31T11:14:53.080Z",
      category_id: 4,
      admin_blog_id: 223,
      bgImage: "/image/green_img.png",
      playImg: "/image/play1.svg",
      publish_json:
        '{"banner":{"image":{"type":"image","src":"https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/blog/228/223/jsons/263d4c79-53c0-4ff8-8c5b-ac975fd7e60b.jpeg","alt":"","isEdit":false,"overlayValue":40,"scaleValue":1,"flip":"scaleY(1)","rotate":0,"overLayColor":{"r":0,"g":0,"b":0}},"text":{"type":"text","value":"<p style=\\"text-align:center;\\"><span style=\\"color: rgb(255,255,255);\\">BENEFITS</span></p>\\n<h1 style=\\"text-align:center;\\"><span style=\\"color: rgb(255,255,255);\\"><strong>Title goes here</strong></span></h1>\\n<p style=\\"text-align:center;\\"><span style=\\"color: rgb(255,255,255);\\">Subtitle</span></p>\\n","isEdit":false}},"leftList":[],"rightList":[]}',
    },
    {
      id: 136,
      title: "People can we help 1",
      subtitle: "<p>testing page title</p>\r\n",
      body: "Description of people who can see",
      published: true,
      published_at: "2023-08-01T11:40:39.135Z",
      image: {
        url: "https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/article/image/private/4/lufy2.png?X-Amz-Expires=600&X-Amz-Date=20230801T114039Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAW4XC4GRIFKSLK3HP%2F20230801%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=44066f1a05778ae32ae7e2229cf7b361721555f643ba522219d9738e3c0db53e",
      },
      read_time: null,
      publisher: null,
      publisher_title: "Prashant",
      publisher_image: {
        url: "https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/article/publisher_image/private/4/allu1.jpeg?X-Amz-Expires=600&X-Amz-Date=20230801T114039Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAW4XC4GRIFKSLK3HP%2F20230801%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=1d0b1ff9b88cbe3493a970f612a099c4cb3519cf5e1e3e4b64315fc5e0132195",
      },
      created_at: "2023-08-01T11:40:39.124Z",
      updated_at: "2023-08-01T11:40:39.137Z",
      last_updated: "2023-08-01T11:40:39.131Z",
      category_id: 4,
      admin_blog_id: 4,
      bgImage: "/image/ping_bg.png",
      playImg: "/image/play2.svg",
      publish_json:
        '{"banner":{"image":{"type":"image","src":"https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/blog/14/4/jsons/a45348c4-2f17-4186-b382-5553b6d973d4.jpeg","alt":"","isEdit":false,"overlayValue":40,"scaleValue":1,"flip":"scaleY(1)","rotate":0,"overLayColor":{"r":0,"g":0,"b":0}},"text":{"type":"text","value":"<p style=\\"text-align:center;\\"><span style=\\"color: rgb(255,255,255);\\">BENEFITS</span></p>\\n<h1 style=\\"text-align:center;\\"><span style=\\"color: rgb(255,255,255);\\"><strong>Title goes here</strong></span></h1>\\n<p style=\\"text-align:center;\\"><span style=\\"color: rgb(255,255,255);\\">Subtitle</span></p>\\n","isEdit":false}},"leftList":[{"id":"ea908c48-ff22-48f6-a035-a70988a7172e","type":"image","src":"https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/benefit/14/undefined/jsons/270acb81-f27a-4c91-89b2-8de78c9f5c82.jpeg","alt":"","isEdit":true,"scaleValue":1,"flip":"scaleY(1)","rotate":0},{"id":"8193c953-6341-4086-9dfd-795384da384f","type":"imageGroup2","card1":{"image":{"type":"image","src":"https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/benefit/14/undefined/jsons/4690665a-4431-452b-b9d5-a03c64bb6cf8.jpeg","isEdit":true,"scaleValue":1,"flip":"scaleY(1)","rotate":0},"text":{"type":"text","value":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum id magna sit amet vulputate. <p>","isDeleted":false,"isEdit":false},"button":{"type":"button","value":"Submit","isEdit":false,"isDeleted":false,"backgroundColor":"#FF0000","fontColor":"#FFFFFF","src":""}},"card2":{"image":{"type":"image","src":"https://admin-microservice-stage.s3.eu-west-2.amazonaws.com/uploads/benefit/14/undefined/jsons/6dfff89f-12ed-4390-a0fa-046b8c3b05ac.jpeg","isEdit":true,"scaleValue":1,"flip":"scaleY(1)","rotate":0},"text":{"type":"text","value":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum id magna sit amet vulputate. <p>","isDeleted":false,"isEdit":false},"button":{"type":"button","value":"Submit","isEdit":false,"isDeleted":false,"backgroundColor":"#FF0000","fontColor":"#FFFFFF","src":""}}}],"rightList":[]}',
    },
  ];

  const SpotimgJson = [
    {
      image: "/image/spotlite_Screenshot1.png",
      title: "Health",
      subText: "Physical and mental health is our priority",
      textColor: "#ffb81d",
      arrowColor: "#fab70a",
    },
    {
      image: "/image/instagram_img_2.png",
      title: "Wealth",
      subText: "We making your money go further",
      textColor: "#d30b55",
      arrowColor: "#d30b55",
    },
    {
      image: "/image/instagram_img_3.png",
      title: "Education",
      subText: "Growing our brains grows a better human",
      textColor: "#009ddb",
      arrowColor: "#009ddb",
    },
    {
      image: "/image/instagram_img_4.png",
      title: "RECOGNITION",
      subText: "Being recognised for what we do counts!",
      textColor: "#ff6c00",
      arrowColor: "#ff6c00",
      topBackgroundImg: "/image/business_orange_curve.svg",
    },
    {
      image: "/image/instagram_img_5.png",
      title: "Social",
      subText: "Social interactions make us happy",
      textColor: "#81bc00",
      arrowColor: "#81bc00",
      topBackgroundImg: "/image/business_green_curve.svg",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center flex-col relative h-auto mt-0 md:h-auto">
        <div
          className="absolute top-0 left-0 w-full h-full brightness-50 bg-cover -z-10 bg-no-repeat"
          style={{
            backgroundImage: "url(/image/spotlight_banner.png)",
          }}
        ></div>
        <div className="px-[5px]">
          <p className="flex justify-center items-center text-center text-white text-[21px] tracking-[5.25px] font-[400] leading-[1.5] font-[Nobel-book] uppercase mt-0 z-10 md:text-[20px]">
            WHAT’S HAPPENING IN PIRKX
          </p>
          <p className="flex justify-center items-center text-center text-white text-[4.375em] tracking-[17.5px] font-bold leading-normal mb-[26px] font-[Nobel-Bold] uppercase mt-[18px] z-10 md:text-[20px]">
            SPOTLIGHT
          </p>
          <div className="flex flex-col items-center flex-wrap w-full">
            <p className="flex justify-center items-center max-w-[480px] w-full font-[400] text-center text-white text-[1.5em] tracking-normal leading-[1.29] mb-[20px] font-[Nobel-Light] mt-[18px] z-10 md:text-[20px]">
              News and views on wellbeing, as well as announcements of new
              programmes to keep you happy and healthy.
            </p>
          </div>
        </div>
        <div
          onChange={handleTabChange}
          className={`backdrop-blur-[11.8px] h-[82px] z-20 flex items-center bg-[rgb(0,0,0,0.4)] w-full bottom-0 text-white px-[4%] transition-all duration-200 ease-in-out ${
            isSticky ? "sticky1" : "absolute"
          }`}
        >
          {tabList?.map((item) => {
            let name = item?.value;
            let keyName = item?.tabId || item?.value;
            return (
              <div className="font-[Nobel-Bold] font-bold text-[12px] p-0 min-w-0 tracking-[3.6px] mr-[40px] cursor-pointer">
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative">
        <div className="pt-[237px] pb-[295px] flex justify-center flex-col relative h-auto mt-0">
          <div
            className="absolute top-0 left-0 w-full h-full brightness-50 bg-cover -z-10 bg-no-repeat"
            style={{
              backgroundImage: "url(/image/hair_beauty_banner.png)",
            }}
          ></div>
          <div className="px-[5px]">
            <p className="flex justify-center items-center text-center text-white text-[1rem] tracking-[0.00938em] leading-[1.5] md:text-[20px]">
              <img
                className="h-[75px] w-[144px]"
                src="/image/logo.svg"
                alt="pirkx_logo"
              />
            </p>
            <p className="flex justify-center items-center text-center text-white text-[19px] font-[Corbel] font-[400] tracking-[0.00938em] leading-[0.84] z-10 mt-[10px] md:text-[20px]">
              pirks features
            </p>
            <p className="flex justify-center items-center text-center text-white text-[19px] font-[Nobel-Bold] font-bold tracking-[6.3px] leading-[0.84] z-10 mt-[10px] md:text-[20px] xmd:tracking-[3.5px]">
              HAIR & BEAUTY
            </p>
            <p className="flex justify-center items-center text-center text-white text-[21px] font-[Nobel-Light] font-[600] tracking-[5.2px] leading-[3.33] z-10 mt-[15px] md:text-[20px] xmd:tracking-[3.5px]">
              RECOGNIZE TALENT OF THE HAIR AND BEAUTY INDUSTRY
            </p>
            <div className="flex flex-col items-center flex-wrap w-full">
              <p className="flex justify-center items-center text-center text-white text-[1.5em] max-w-[938px] font-[Nobel-Light] font-[400] tracking-[0.00938em] leading-[1.29] z-10 mb-[20px] md:text-[20px]">
                Workplace benefits are generally missing from the hair and
                beauty industry, so to raise awareness, we partnered with the
                National Hair and Beauty Federation.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`relative flex justify-center items-center z-10 mt-[-118px] mx-auto mb-0 pb-[70px]`}
        >
          <div
            className="w-full max-w-[477px] py-0 px-[15px] md:mr-0"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <div className="min-h-[300px] py-[15px] px-[37px] bg-white rounded-[5px] border-solid border-[4px] border-transparent shadow-card-shadow transition-all duration-300 ease-in-out flex justify-center items-center hover:border-[#ff6c00] 2xl:min-h-[260px]">
              <div className="text-center">
                <p className="font-[Corbel] text-[19px] mt-[20px] mb-[10px] text-[#4a4f55] font-normal leading-[1.5] tracking-[0.00938em]">
                  pirkx features
                </p>
                <p className="font-[Nobel] font-bold text-[21px] text-center tracking-[6.2px] uppercase mb-[20px] leading-[1.5]">
                  Feature Blog 1
                </p>
                {!showCardButton ? (
                  <p className="text-[19px] font-[Corbel] leading-[1.7] text-[#4a4f55] font-[400] tracking-[0.00938em] hover:bg-[]">
                    <div className="break-words">
                      <p>Feature Blog 1</p>
                    </div>
                  </p>
                ) : (
                  <button className="bg-[#ff6c00] text-white uppercase leading-[1.75] min-w-[64px] rounded-[30px] font-[Nobel-Bold] font-bold text-[12px] tracking-[3.6px] min-h-[36px] py-[5px] px-[20px]">
                    Hair And Beauty
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex bg-[#EC6408] w-full flex-wrap">
          <div className="relative w-full basis-1/2 xmd:basis-full">
            <div
              className="absolute left-0 top-0 h-[293px] bg-contain w-[222px] bg-no-repeat"
              style={{
                backgroundImage: "url(/image/smiley_curve.svg)",
              }}
            ></div>
            <div
              className="absolute left-0 bottom-0 h-full max-w-[442px] w-full bg-contain bg-no-repeat bg-bottom"
              style={{
                backgroundImage: "url(/image/pink-bottom-curve.png)",
              }}
            ></div>
            <div className="flex max-w-[100%]">
              <img src="/image/404-1.svg" alt="" className="w-full" />
            </div>
          </div>
          <div className="w-full relative bg-[rgb(0,0,0,0.09)] flex items-center justify-center basis-1/2 flex-grow-0 xmd:basis-full">
            <div
              className="absolute right-0 top-0 h-full bg-contain w-full bg-no-repeat bg-right"
              style={{
                backgroundImage: "url(/image/green_orange_img.svg)",
              }}
            ></div>
            <dive className="max-w-[700px] w-full">
              <div className="py-[40px] px-[10px]">
                <p className="font-[Nobel-book] text-[21px] not-italic tracking-[5.25px] text-start text-white uppercase mb-[25px]">
                  Worry at Driving
                </p>
                <p className="font-[Nobel-light] text-[1.75em] font-[300] not-italic leading-[1.29] tracking-normal text-left text-white mb-[22px]">
                  Chapter 1: Does sharing personal worries at work make life
                  easier?
                </p>
                <p className="font-[Corbel] text-[19px] max-w-[600px] leading-[1.47] tracking-normal text-white mb-[20px]">
                  Our mission is to make sure every worker gets access to
                  wellbeing benefits. In the UK, a third of the UK workforce
                  likes to discuss personal issues at work as it helps them
                  solve dilemmas. Pirkx investigates.
                </p>
                <div className="flex flex-wrap justify-start mb-[80px]">
                  <button className="rounded-[30px] font-[Nobel-bold] font-bold text-[12px] tracking-[3.6px] mr-0 text-[#ff6c00] py-[5px] px-[20px] h-[36px] bg-white uppercase">
                    More
                  </button>
                </div>
              </div>
            </dive>
          </div>
        </div>
        <div>
          <div
            className={`relative flex justify-center items-center z-10 mt-[-118px] mx-auto mb-0 pb-[70px]`}
          >
            <div
              className="w-full max-w-[477px] py-0 px-[15px] md:mr-0"
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            >
              <div className="min-h-[300px] py-[15px] px-[37px] bg-white rounded-[5px] border-solid border-[4px] border-transparent shadow-card-shadow transition-all duration-300 ease-in-out flex justify-center items-center hover:border-[#ff6c00] 2xl:min-h-[260px]">
                <div className="text-center">
                  <p className="font-[Corbel] text-[19px] mt-[20px] mb-[10px] text-[#4a4f55] font-normal leading-[1.5] tracking-[0.00938em]">
                    Making an impact
                  </p>
                  <p className="font-[Nobel] font-bold text-[21px] text-center tracking-[6.2px] uppercase mb-[20px] leading-[1.5]">
                    Making An Impact Test 1
                  </p>
                  {!showCardButton ? (
                    <p className="text-[19px] font-[Corbel] leading-[1.7] text-[#4a4f55] font-[400] tracking-[0.00938em] hover:bg-[]">
                      <div className="break-words">
                        <p>Testing title is</p>
                      </div>
                    </p>
                  ) : (
                    <button className="bg-[#ff6c00] text-white uppercase leading-[1.75] min-w-[64px] rounded-[30px] font-[Nobel-Bold] font-bold text-[12px] tracking-[3.6px] min-h-[36px] py-[5px] px-[20px]">
                      Woory At Work
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full max-h-[612.5px] z-10">
        <p className="flex justify-center items-center text-[#3cbfae] text-[21px] font-[Nobel-Light] font-[400] leading-[1.5] text-center mt-0 mr-[67.7px] mb-[32px] ml-[78px] tracking-[5.25px]">
          HEAR FROM OUR MEMBERS
        </p>
        <p className="flex justify-center items-center text-[#151515] text-[28px] font-[Nobel-Light] leading-[0.00938em] tracking-[0.00938em] text-center">
          Don’t just take our word for it!
        </p>
        <div className="max-w-[1451px] w-full flex justify-center my-0 py-[75px] mx-auto block relative">
          <div className="opacity-100 w-[968px] flex justify-center items-center">
            {helpData?.map((item, index) => (
              <div className="outline-none w-[484px]" key={index}>
                <div className="w-full inline-block relative">
                  <div className="w-[365px] h-[372px] overflow-hidden relative">
                    <div
                      className="absolute w-full h-full bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${item?.bgImage})`,
                      }}
                    ></div>
                    <img
                      src="/image/detailUserAvatar.png"
                      alt="logo"
                      className="w-[433px] h-[435px]"
                    />
                  </div>
                  <div className="absolute right-[47px] z-20 top-auto bottom-[41px] cursor-pointer">
                    <img src={item?.playImg} alt="img" className="w-[107px]" />
                  </div>
                  <p className="mt-[10px] font-[Nobel-Light] text-[#3cbfae] uppercase tracking-[4px] font-[400] leading-[1.5]">
                    {item?.publisher_title}&apos;story
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="m-auto md:mt-[100px] md:mx-0 md:mb-0">
        <div className="font-[Nobel-Light] flex justify-center text-[21px] font-normal not-italic leading-[3.33] tracking-[5.25px] text-center text-[#3cbfae] md:tracking-[3.25px] md:leading-[2] md:text-[15px]">
          <img src="/image/insta.svg" className="h-[39.7px] w-[48.9px]" />
        </div>
        <div className="font-[Nobel-Light] flex justify-center text-[21px] font-normal not-italic leading-[3.33] tracking-[5.25px] text-center text-[#3cbfae] md:tracking-[3.25px] md:leading-[2] md:text-[15px]">
          CHECK WHAT WE’VE BEEN UP TO
        </div>
        <div className="font-[Nobel-Light] flex justify-center text-[28px] font-normal not-italic leading-[3.33] tracking-[5.25px] text-center text-[#151515] md:tracking-[3.25px] md:leading-[2] md:text-[15px]">
          #pirkx
        </div>
        <div className="flex flex-wrap w-full gap-y-5 gap-x-2.5 justify-center flex-wrap mt-[51px] mr-[19px] mb-[80px] ml-0">
          {SpotimgJson?.map((item) => {
            const { title, image } = item;
            return (
              <div className="max-w-[282px] relative sm:basis-full" key={title}>
                <img
                  src={image}
                  alt={title}
                  className="max-w-[282px] max-h-[282px] w-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center flex-col items-center pr-[40px] bg-[#3cbfae] py-[5%] px-[5%]">
          <p className="uppercase tracking-[2.5px] text-center font-[Nobel-book] font-[500] leading-[1.2] text-[21px] text-white">
            AFFORDABLE WELLBEING BENEFITS IMPROVING HEALTH, WEALTH AND HAPPINESS
          </p>
        </div>
      </div>
    </>
  );
}

export default Spotlight;
