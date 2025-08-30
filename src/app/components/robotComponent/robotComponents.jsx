import React from "react";
import "./robotStyles.css";
const RobotComponents = () => {
  return (
    <>
      <main
        id="robotsBody"
        className="fixed flex flex-col items-center justify-center z-50 w-full top-10 -right-1/4 opacity-75 -rotate-12"
      >
        <div className="h-[10rem] w-1 fixed -top-20 bg-gray-500 border-1 border-gray-500 divide-dashed "></div>
        {/* Head Section */}
        <section id="headRobot" className="mb-4">
          <div className="border border-white/20 bg-[#EC7FA9] w-32 h-20 rounded-3xl px-0 translate-y-3 shadow-md shadow-white">
            <div
              id="containerEyes"
              className=" mx-auto border border-white flex items-center justify-between flex-row p-4 w-[6rem] h-3/4 translate-y-2.5 rounded-xl"
            >
              <div
                id="eyeLeft"
                className="bg-pink-200 w-6 h-8 rounded-lg"
              ></div>
              <div
                id="nose"
                className="absolute bg-pink-200 w-[3rem] h-2 rounded-xl -z-20"
              ></div>
              <div
                id="eyeRight"
                className="bg-pink-200 w-6 h-8 rounded-lg"
              ></div>
            </div>
          </div>
        </section>

        {/* Body Section */}
        <section
          id="bodyRobot"
          className="relative w-24 h-20 bg-[#EC7FA9] border-2 border-white/20 rounded-b-[6rem] rounded-t-xl shadow-md shadow-white"
        >
          {/* Arms */}
          <div className=" bg-[#EC7FA9] rounded-full absolute -left-[2rem] -top-1 w-8 h-16 border border-white/20 transform rotate-45 -z-10 shadow-md shadow-white">
            <div className="bg-[#BE5985] border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>
          <div className="bg-[#EC7FA9] rounded-full absolute -right-[2rem] -top-1 w-8 h-16 border border-white/20 transform -rotate-45 -z-10 shadow-md shadow-white">
            <div className="bg-[#BE5985] border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>

          {/* Chest Detail */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-black/20 rounded-b-[4rem]"></div>
        </section>
        {/* Legs Section */}
        <section id="legsRobot" className="flex justify-between w-64 relative">
          {/* Left leg */}
          <div className="w-8 h-24 bg-[#EC7FA9] border border-white/20 rounded-full rotate-12 absolute left-[5rem] -top-16 -z-10 shadow-md shadow-white">
            <div className="bg-[#BE5985] border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>
          {/* Right Leg */}
          <div className="w-8 h-24 bg-[#EC7FA9] border border-white/20 rounded-b-full -rotate-12 absolute right-[5rem] -top-16 -z-10 shadow-md shadow-white">
            <div className="bg-[#BE5985] border border-white/20 w-full h-6 fixed bottom-0 rounded-full"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RobotComponents;
