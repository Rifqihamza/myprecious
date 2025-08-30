import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // tambahkan ini


export default function WrapperSecond() {
  const balloonRef = useRef(null);
  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function getRandomStyles() {
    const r = random(255);
    const g = random(255);
    const b = random(255);
    const mt = random(200);
    const ml = random(50);
    const dur = random(5) + 5;
    return `
      background-color: rgba(${r},${g},${b},0.7);
      color: rgba(${r},${g},${b},0.7); 
      box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
      margin: ${mt}px 0 0 ${ml}px;
      animation: float ${dur}s ease-in infinite;
    `;
  }

  function createBalloons(num) {
    if (!balloonRef.current) return;

    for (let i = 0; i < num; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.cssText = getRandomStyles();
      balloon.style.willChange = "transform, opacity";

      // pakai timeout 0 agar trigger animation setelah render
      setTimeout(() => {
        balloon.style.animationPlayState = "running";
      }, 0);

      balloonRef.current.appendChild(balloon);
    }
  }


  useEffect(() => {
    createBalloons(30);

  }, []);

  return (
    <>
      <Image
        src="/starsBackground.png"
        className="w-full h-screen object-cover fixed top-0 left-0 right-0 bottom-0 animate-pulse"
        width={1920}
        height={1080}
        alt="Stars Background"
      />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          ref={balloonRef}
          className="balloon-container fixed pointer-events-none"
        ></div>
        <div className="relative z-10 flex flex-col gap-8 translate-y-1/4">
          <div className="relative rotate-1 shadow shadow-gray-400 bg-white mx-auto w-auto h-[44vh] p-3 pb-8 flex justify-center">
            <div className="flex items-center justify-center absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full">
              <h1 className="helloFont font-bold text-pink-400">
                18
                <span className="text-[10px]">
                  yo
                </span>
              </h1>
            </div>
            <Image
              src="/shePic.jpeg"
              width={250}
              height={250}
              className="object-cover"
              alt="Niki Picture"
            />
            <h1 className="absolute bottom-2 left-3 text-black font-bold text-xs">
              My Lovely GF💕
            </h1>
          </div>
          <div className="relative min-w-fit px-5 mx-auto">
            <h1 className="helloFont text-4xl font-semibold">Happy Birthday</h1>
            <p className="text-xl font-semibold mt-1">My Precious Love💕</p>
            <hr />
          </div>
        </div>
      </motion.div>
    </>

  );
}
