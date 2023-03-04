import { useSelector, useDispatch } from "react-redux";

function YourInfo() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const phone = useSelector((state) => state.phone);

  function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function checkPhone(phone) {
    const regex = /^\+?\s*\d+(\s+\d+)*\s*$/;
    return regex.test(phone);
  }

  const handleNameChange = (e) => {
    dispatch({
      type: "SET_NAME",
      payload: {
        errorText: e.target.value.length ? "" : "Name is required",
        showError: e.target.value.length ? false : true,
        text: e.target.value,
      },
    });
  };

  const handleEmailChange = (e) => {
    var error = false;
    var errorText = "";
    if (e.target.value.length) {
      error = !checkEmail(e.target.value);
      if (error) errorText = "Email is not valid";
    } else {
      errorText = "Email is required";
      error = true;
    }
    dispatch({
      type: "SET_EMAIL",
      payload: {
        errorText: errorText,
        showError: error,
        text: e.target.value,
      },
    });
  };

  const handlePhoneChange = (e) => {
    var error = false;
    var errorText = "";
    if (e.target.value.length) {
      error = !checkPhone(e.target.value);
      if (error) errorText = "Phone number is not valid";
    } else {
      errorText = "Phone number is required";
      error = true;
    }
    dispatch({
      type: "SET_PHONE",
      payload: {
        errorText: errorText,
        showError: error,
        text: e.target.value,
      },
    });
  };
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[6px]">
        <p
          className={`${
            name.showError ? "opacity-1 " : "opacity-0 "
          } text-[14px] text-strawberry-red transition-opacity duration-500 ease-in-out absolute right-0`}
        >
          {name.errorText}
        </p>{" "}
        <label className=" text-marine-blue lg:text-[16px] text-[14px]">
          Name
        </label>
        <input
          onChange={(event) => handleNameChange(event)}
          type="text"
          placeholder="e.g. Stephen King"
          className=" border-light-gray border  rounded-[8px] px-[16px] py-[10px] lg:py-[12px]"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <p
          className={`${
            email.showError ? "opacity-1" : "opacity-0"
          } text-[14px] text-strawberry-red transition-all duration-500 ease-in-out absolute right-0`}
        >
          {email.errorText}
        </p>{" "}
        <label className="text-marine-blue lg:text-[16px] text-[14px]">
          Email Address
        </label>
        <input
          onChange={(event) => handleEmailChange(event)}
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          className="border-light-gray border  rounded-[8px] px-[16px] py-[10px] lg:py-[12px]"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <p
          className={`${
            phone.showError ? "opacity-1" : "opacity-0"
          } text-[14px] text-strawberry-red transition-all duration-500 ease-in-out absolute right-0`}
        >
          {phone.errorText}
        </p>{" "}
        <label className="text-marine-blue lg:text-[16px] text-[14px]">
          Phone Number
        </label>
        <input
          onChange={(event) => handlePhoneChange(event)}
          type="text"
          placeholder="e.g. + 1 234 567 890"
          className="border-light-gray border  rounded-[8px] px-[16px] py-[10px] lg:py-[12px]"
        />
      </div>
    </div>
  );
}

export default YourInfo;
