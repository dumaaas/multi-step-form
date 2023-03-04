import { useDispatch, useSelector } from "react-redux";
function StepButtons() {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.activeStep);
  const nextStep = () => {
    if (activeStep + 1 > 5) return;
    dispatch({
      type: "NEXT_STEP",
    });
  };
  const prevStep = () => {
    if (activeStep - 1 < 1) return;

    dispatch({
      type: "PREV_STEP",
    });
  };
  return (
    <div>
      {activeStep < 5 && (
        <div className="flex items-center justify-between gap-[10px]">
          <button
            onClick={() => prevStep()}
            className={`${
              activeStep === 1 ? "opacity-0 cursor-auto" : "opacity-1"
            } font-medium text-[18px] text-cool-gray transition-all duration-500 ease-in-out hover:text-marine-blue`}
          >
            Go Back
          </button>
          <button
            onClick={() => nextStep()}
            className={`${activeStep > 3 ? 'bg-purplish-blue hover:bg-opacity-60' : 'hover:bg-opacity-80 bg-marine-blue'} font-medium text-white  transition-colors duration-[2000] ease-in-out px-[27px] text-[18px] rounded-[8px] text-center py-[12px]`}
          >
            {activeStep > 3 ? "Confirm" : "Next Step"}
          </button>
        </div>
      )}
    </div>
  );
}

export default StepButtons;
