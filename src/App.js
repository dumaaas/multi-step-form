import SidebarNav from "./components/SidebarNav/SidebarNav";
import FormSteps from "./components/FormSteps/FormSteps";
import StepButtons from "./components/StepButtons/StepButtons";
import { useSelector } from "react-redux";

function App() {
  const activeStep = useSelector((state) => state.activeStep);
  return (
    <main className="flex items-center justify-center min-h-screen bg-mangolia">
      <div className="flex flex-row min-h-[663px] w-[1018px] bg-white rounded-[16px] p-[20px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <SidebarNav />
        <div className={`flex-1 overflow-hidden flex flex-col  py-[25px] pr-[80px] pl-[100px] gap-[20px] ${activeStep === 5 ? 'items-center justify-center relative' : 'justify-between'}`}>
          <FormSteps/>
          <StepButtons/>
        </div>
      </div>
    </main>
  );
}

export default App;
