import { useSelector } from "react-redux";
import sidebarBgImage from "../../assets/bg-sidebar-desktop.svg";

function SidebarNav() {
  const activeStep = useSelector((state) => state.activeStep);
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
        backgroundImage: `url(${sidebarBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-w-[300px] relative flex flex-col gap-[28px] pl-[35px] py-[35px] pr-[100px] rounded-[10px]"
    >
      {steps.map((item) => {
        return (
          <div
            key={item.step}
            className="flex items-center flex-row gap-[16px] "
          >
            <div
              className={`cursor-pointer flex items-center justify-center rounded-full border-[1px] w-[39px] h-[39px] ${
                ((item.step === 4 && activeStep === 5) || activeStep === item.step)
                  ? "border-transparent ease-in-out transition-all duration-300 delay-300"
                  : "border-white"
              }`}
            >
              <p
                className={`relative z-20 text-[16px] font-bold ${
                  ((item.step === 4 && activeStep === 5) || activeStep === item.step)
                    ? "text-marine-blue ease-in-out transition-colors duration-300 delay-300"
                    : "text-white"
                }`}
              >
                {item.step}
              </p>
            </div>
            <div className="flex flex-col">
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
          top: activeStep <= 4 ? 37 + (activeStep - 1) * 72 : 37 + 3 * 72,
        }}
        className="transitiona-all duration-500 ease-in-out w-[39px] h-[39px] bg-light-blue absolute top-[37px] rounded-full z-10"
      ></div>
    </div>
  );
}

export default SidebarNav;
