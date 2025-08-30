"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import RobotComponents from "./components/robotComponent/robotComponents";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      const audio = new Audio("/backsoundAboutYou.mp3");
      audio.play();
    }
  };

  const handleProceed = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      router.push("/wrapped");
    }, 2000);
  };

  return (
    <>
      <RobotComponents />
      <motion.section
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/starsBackground.png"
          className="w-full h-full object-cover fixed top-0 left-0 right-0 bottom-0 -z-10"
          width={1920}
          height={1080}
          alt="Stars Background"
        />
      </motion.section>

      <div
        className="z-50 fixed inset-0 flex justify-center items-center"
        onClick={handleOpen}
      >
        <div className="relative w-[300px] h-[200px] perspective">
          <div className={`relative w-full h-full cursor-pointer ${isOpen ? "open" : ""}`}>
            {/* Amplop tertutup */}
            <div
              className={`absolute w-full h-full bg-pink-300 shadow-md shadow-gray-900 z-20 transition-transform duration-500 ease-out origin-top
                ${isOpen ? "rotate-x-180" : ""}
              `}
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            ></div>

            {/* Amplop terbuka */}
            <div
              className={`absolute w-full h-full bg-pink-200 z-10 transition-transform duration-500 ease-out origin-top
                ${isOpen ? "rotate-x-0" : "rotate-x-180 hidden"}
              `}
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            ></div>

            {/* Isi surat */}
            <div
              className={`absolute w-[90%] h-[85%] bg-white left-[5%] top-[5px] p-4 rounded transition-all duration-500 ease-out delay-200 
                ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                flex flex-col items-center justify-center text-center z-30`}
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold text-black">Letter For You❤️</h2>
                <p className="text-gray-700">Ada sesuatu yang ingin ku ucapkan...</p>
              </div>
              <button
                onClick={handleProceed}
                className="text-white px-8 py-2 rounded-2xl bg-pink-300 hover:bg-pink-200 transition-colors duration-300"
              >
                Open
              </button>
            </div>

            {/* Stempel */}
            <div className={`absolute top-2 right-5 w-[50px] h-[50px] ${isOpen ? "hidden" : ""} bg-yellow-400 text-pink-400 shadow-inner shadow-yellow-600 font-bold rounded-full flex items-center justify-center z-40`}>
              POS
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
