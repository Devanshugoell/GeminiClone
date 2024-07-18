import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4">
      <div className="top">
        <img
          className="menu block ml-[10px] cursor-pointer w-5"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div className="new-chat mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-4 bg-[#e6eaf1] rounded-full text-sm cursor-pointer text-gray-600 ">
          <img className="w-5" src={assets.plus_icon} alt="add icon" />
          <p className="text-slate-700">New Chat</p>
        </div>
        <div className="recent ">
          <p className="recent-title flex flex-col">Recent</p>
          <div className="recent-entry">
            <img className="w-5" src={assets.message_icon} alt="message icon" />
            <p>What is react....</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img className="w-5" src={assets.question_icon} alt="question icon" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img className="w-5" src={assets.history_icon} alt="question icon" />
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img className="w-5" src={assets.setting_icon} alt="question icon" />
          <p>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
