import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { newChat, onSent, prevPrompts, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4 small:hidden">
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu block ml-[10px] cursor-pointer w-5"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div
          onClick={() => newChat()}
          className="new-chat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-4 bg-[#e6eaf1] rounded-full text-sm cursor-pointer text-gray-600 "
        >
          <img className="w-5" src={assets.plus_icon} alt="add icon" />
          {extended ? <p className="text-slate-700">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent animate-fadeIn flex flex-col">
            <p className="recent-title mt-8 mb-5 ">Recent</p>
            {prevPrompts.map((item) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-full cursor-pointer text-[#282828] hover:bg-[#e2e6eb]"
                >
                  <img
                    className="w-5"
                    src={assets.message_icon}
                    alt="message icon"
                  />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-full cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.question_icon} alt="question icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-full cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.history_icon} alt="question icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-full cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
          <img className="w-5" src={assets.setting_icon} alt="question icon" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
