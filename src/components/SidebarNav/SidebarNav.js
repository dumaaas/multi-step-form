import { useSelector } from "react-redux";
import sidebarBgImageDesktop from "../../assets/bg-sidebar-desktop.svg";
import sidebarBgImageMobile from "../../assets/bg-sidebar-mobile.svg";

import { useState, useEffect } from "react";

function SidebarNav() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const activeStep = useSelector((state) => state.activeStep);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ovdje koristimo screenWidth kako bismo odabrali željenu sliku
  const backgroundImage =
    screenWidth < 1024 ? sidebarBgImageMobile : sidebarBgImageDesktop;

  const steps = [
    {
      step: 1,
      title: "Your info",
    },
    {
      step: 2,
      title: "Select plan",
    },
    {
      step: 3,
      title: "Add-ons",
    },
    {
      step: 4,
      title: "Summary",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex justify-center lg:min-w-[300px] lg:pl-[35px] lg:py-[35px] pt-[30px] pb-[120px] lg:pr-[100px] lg:rounded-[10px]"
    >
      <div className="lg:justify-start justify-center relative flex lg:flex-col gap-[28px]">
        {steps.map((item) => {
          return (
            <div
              key={item.step}
              className="flex items-center flex-row gap-[16px] "
            >
              <div
                className={`cursor-pointer flex items-center justify-center rounded-full border-[1px] w-[39px] h-[39px] ${
                  (item.step === 4 && activeStep === 5) ||
                  activeStep === item.step
                    ? "border-transparent ease-in-out transition-all duration-300 delay-300"
                    : "border-white"
                }`}
              >
                <p
                  className={`relative z-20 text-[16px] font-bold ${
                    (item.step === 4 && activeStep === 5) ||
                    activeStep === item.step
                      ? "text-marine-blue ease-in-out transition-colors duration-300 delay-300"
                      : "text-white"
                  }`}
                >
                  {item.step}
                </p>
              </div>
              <div className="flex-col hidden lg:flex">
                <label className="uppercase font-normal text-[14px] text-light-gray">
                  Step {item.step}
                </label>
                <p className="uppercase font-bold text-[15px] tracking-[1px] text-white">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
        <div
          style={{
            top:
              activeStep <= 4
                ? screenWidth >= 1024
                  ? 2 + (activeStep - 1) * 72
                  : 0
                : screenWidth >= 1024
                ? 2 + 3 * 72
                : 0,
            left:
              activeStep <= 4
                ? screenWidth >= 1024
                  ? 0
                  : (activeStep - 1) * 67
                : screenWidth >= 1024
                ? 0
                : 3 * 67,
          }}
          className="transitiona-all duration-500 ease-in-out w-[39px] h-[39px] bg-light-blue absolute top-[37px] rounded-full z-10"
        ></div>
      </div>
    </div>
  );
}

export default SidebarNav;
