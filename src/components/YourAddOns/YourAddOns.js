import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "hsl(243, 100%, 62%)",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 17,
    height: 17,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "hsl(243, 100%, 62%)",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

function YourAddOns() {
  const isMonthly = true;
  const addOns = [
    {
      id: 1,
      checked: false,
      title: "Online service",
      subtitle: "Access to multiplayer games",
      yearlyPrice: "10",
      monthlyPrice: "1",
    },
    {
      id: 2,
      checked: false,
      title: "Online service",
      subtitle: "Access to multiplayer games",
      yearlyPrice: "10",
      monthlyPrice: "1",
    },
    {
      id: 3,
      checked: false,
      title: "Online service",
      subtitle: "Access to multiplayer games",
      yearlyPrice: "10",
      monthlyPrice: "1",
    },
  ];
  return (
    <div className="flex flex-col justify-between gap-[20px]">
      {addOns.map((item) => {
        return (
          <div
            key={item.id}
            className={`${
              item.checked
                ? "gap-[50px] bg-alabaster shadow-[0_0_0_1px_rgba(71,61,255,1)] border-transparent"
                : ""
            } items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-alabaster hover:border-transparent hover:shadow-[0_0_0_1px_rgba(71,61,255,1)] rounded-[8px] border border-light-gray flex-1 pl-[11px] pr-[20px] py-[16px] flex justify-between`}
          >
            <div className="flex flex-row gap-[15px] items-center">
              <div>
                <BpCheckbox />
              </div>
              <div className="">
                <h3 className=" text-marine-blue font-bold text-[18px]">
                  {item.title}
                </h3>
                <p className=" text-cool-gray">{item.subtitle}</p>
              </div>
            </div>
            <p className="text-purplish-blue">
              +$
              {!isMonthly
                ? item.monthlyPrice + "/mo"
                : item.yearlyPrice + "/yr"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default YourAddOns;
