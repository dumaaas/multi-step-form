import { useDispatch } from "react-redux";

function YourSummary() {
  const dispatch = useDispatch();

  const changePlan = () => {
    dispatch({
      type: "CHANGE_PLAN",
    });
  };
  return (
    <div>
      <div className="rounded-[8px] px-[30px] py-[20px] bg-[rgba(150,153,171,0.1)]">
        <div
          className={`
            items-center border-b pb-[20px] border-light-gray flex-1  flex justify-between`}
        >
          <div className="">
            <h3 className=" text-marine-blue font-bold text-[18px]">
              Ardace(Monthly)
            </h3>
            <p
              onClick={() => changePlan()}
              className="underline transition-colors duration-150 ease-in-out cursor-pointer text-cool-gray hover:text-marine-blue"
            >
              Change
            </p>
          </div>
          <p className="text-[18px] font-bold text-marine-blue">$9/mo</p>
        </div>
        <div className="flex items-center justify-between flex-1 pt-[20px]">
          <p className=" text-cool-gray">Online service</p>

          <p className="text-[16px] text-marine-blue">$9/mo</p>
        </div>
        <div className="flex items-center justify-between flex-1 pt-[20px]">
          <p className=" text-cool-gray">Larger store</p>

          <p className="text-[16px] text-marine-blue">+$2/mo</p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 pt-[25px] px-[30px]">
        <p className=" text-cool-gray">Total (per month)</p>

        <p className="text-[22px] text-purplish-blue font-bold">+$12/mo</p>
      </div>
    </div>
  );
}

export default YourSummary;
