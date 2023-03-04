
function YourInfo() {
    return (
      <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[6px]">
            <label className="text-marine-blue">Name</label>
            <input type="text" placeholder="e.g. Stephen King"  className="border-light-gray border  rounded-[8px] px-[16px] py-[12px]"/>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="text-marine-blue">Email Address</label>
            <input type="text" placeholder="e.g. stephenking@lorem.com"  className="border-light-gray border  rounded-[8px] px-[16px] py-[12px]"/>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className="text-marine-blue">Phone Number</label>
            <input type="text" placeholder="e.g. + 1 234 567 890"  className="border-light-gray border  rounded-[8px] px-[16px] py-[12px]"/>
          </div>
      </div>
    );
  }
  
  export default YourInfo; 
  