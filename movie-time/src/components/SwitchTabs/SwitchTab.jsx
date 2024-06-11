import React, { useState } from "react";

const SwitchTab = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState("");

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    });
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs cursor-pointer h-[34px] bg-white rounded-[20px] flex justify-center items-center w-[206px] p-2 text-black">
      <div className="tabItems flex items-center h-[30px] relative">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""} h-[100%] flex items-center justify-center w-[100px] text-[#04152d] text-[14px] relative z-10 cursor-pointer transition-colors ease duration-300`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg h-[30px] w-[100px] bg-red-500 rounded-[15px] absolute left-0"  style={{
          left,
          transition: 'left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s'
        }}/>
      </div>
    </div>
  );
};

export default SwitchTab;
