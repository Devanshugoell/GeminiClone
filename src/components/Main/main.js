import React from "react";
import { assets } from "../../assets/assets";

const main = () => {
  return (
    <div className="main flex-1 min-h-screen pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-3xl p-5 text-[#585858]">
        <p>Gemini</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
          alt="user-icon"
          className="w-10 rounded-full"
        />
      </div>
      <div className="main-container max-w-4xl m-auto">
        <div className="greet my-12 mx-0 text-[56px] text-[#c4c7c5] font-medium p-5">
          <p>
            <span className="bg-gradient-text ">Hello Developer</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards grid grid-temp-col gap-4 p-5">
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] hover:shadow-2xl delay-75 duration-100 hover:scale-105">
            <p className="text-[#585858] text-base">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
              src={assets.compass_icon}
              alt="Compass icon"
            />
          </div>
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] hover:shadow-2xl delay-75 duration-100 hover:scale-105">
            <p className="text-[#585858] text-base">
              FunFact about the Roman Empire
            </p>
            <img
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
              src={assets.bulb_icon}
              alt="Compass icon"
            />
          </div>
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] hover:shadow-2xl delay-75 duration-100 hover:scale-105">
            <p className="text-[#585858] text-base">
              Briefly summarize the concept of: Urban planning
            </p>
            <img
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
              src={assets.message_icon}
              alt="Compass icon"
            />
          </div>
          <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea] hover:shadow-2xl delay-75 duration-100 hover:scale-105">
            <p className="text-[#585858] text-base">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
              src={assets.code_icon}
              alt="Compass icon"
            />
          </div>
        </div>
        <div className="main-bottom absolute bottom-0 w-full max-w-4xl py-0 px-5 m-auto">
          <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] py-[10px] px-5 rounded-[50px]">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 bg-transparent border-none outline-none p-2 text-base"
            />
            <div className="flex items-center gap-2">
              <img
                className="w-6 cursor-pointer "
                src={assets.gallery_icon}
                alt="Gallery"
              />
              <img
                className="w-6 cursor-pointer "
                src={assets.mic_icon}
                alt="Mic"
              />
              <img
                className="w-6 cursor-pointer "
                src={assets.send_icon}
                alt="Send"
              />
            </div>
          </div>
          <p className="bottom-info text-sm my-4 mx-auto text-center font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
