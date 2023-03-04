import iconCheckmark from '../../assets/icon-thank-you.svg'
import { useSelector } from 'react-redux';

function SuccessScreen() {
    const activeStep = useSelector((state) => state.activeStep);
  return (
    <div className={`${activeStep !== 5 ? 'opacity-0 z-[-1]' : 'opacity-1 z-10'} min-w-full left-0 top-[29%] px-[100px] absolute duration-300 transition-all ease-in delay-150 flex flex-col text-center justify-center items-center gap-[12px]`}>
      <img
        className="pb-[18px]"
        src={iconCheckmark}
        alt="icon-checkmark"
      />
      <h2 className="text-[32px]  font-bold text-marine-blue">Thank you!</h2>
      <p className="text-cool-gray text-[18px]">
        Thanks for confiming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default SuccessScreen;
