import { useSelector } from "react-redux";
import YourInfo from "../YourInfo/YourInfo";
import YourPlan from "../YourInfo/YourPlan";
import YourAddOns from "../YourAddOns/YourAddOns";
import YourSummary from "../YourSummary.js/YourSummary";
import SuccessScreen from "../SuccessScreen/SuccessScreen";

function FormSteps() {
  const activeStep = useSelector((state) => state.activeStep);
  const componentsData = [
    {
      step: 1,
      component: <YourInfo />,
      title: "Personal info",
      subtitle: "Please provide your name, email address, and phone number.",
    },
    {
      step: 2,
      component: <YourPlan />,
      title: "Select your plan",
      subtitle: "You have the option of monhtly or yealry billing",
    },
    {
      step: 3,
      component: <YourAddOns />,
      title: "Pick add-ons",
      subtitle: "Add-ons help enhance your gaming experience.",
    },
    {
      step: 4,
      component: <YourSummary />,
      title: "Finishing up",
      subtitle: "Double-check everything looks OK before confirming.",
    },
  ];
  return (
    <div>
      {activeStep <= 4 && (
        <div className="flex flex-col gap-[8px] pb-[40px] pt-[10px]">
          <h2 className="text-[32px]  font-bold text-marine-blue">
            {componentsData.find((item) => item.step === activeStep).title}
          </h2>
          <p className="text-cool-gray text-[18px]">
            {componentsData.find((item) => item.step === activeStep).subtitle}
          </p>
        </div>
      )}
      {activeStep <= 4 && (
        <div className="relative">
          {componentsData.map((item) => {
            return (
              <div
                key={item.step}
                className={`w-full absolute top-0 transition-all duration-[0.8s] ease-in-out transform ${
                  activeStep === item.step
                    ? "opacity-1 translate-x-0 translate-y-0"
                    : "opacity-0 translate-x-[-100%] "
                }`}
              >
                {item.component}
              </div>
            );
          })}
        </div>
      )}
      <SuccessScreen />
    </div>
  );
}

export default FormSteps;
