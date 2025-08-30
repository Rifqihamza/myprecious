import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./galleryStyle.css";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SliderGallery = () => {
  const baseImages = [
    { img: "/imageDummy/P1055936.JPG" },
    { img: "/imageDummy/P1056023.JPG" },
    { img: "/imageDummy/P1056025.JPG" },
    { img: "/imageDummy/P1056062.JPG" },
    { img: "/imageDummy/P1056066.JPG" },
    { img: "/imageDummy/P1056074.JPG" },
    { img: "/imageDummy/P1056126.JPG" },
    { img: "/imageDummy/P1056131.JPG" },
    { img: "/imageDummy/P1056134.JPG" },
    { img: "/imageDummy/P1056144.JPG" },
    { img: "/imageDummy/P1056157.JPG" },
    { img: "/imageDummy/P1056184.JPG" },
    { img: "/imageDummy/P1056399.JPG" },
  ];

  const [groupedImages, setGroupedImages] = useState([]);
  const numRows = 3;

  useEffect(() => {
    const shuffled = shuffleArray(baseImages);
    const duplicated = [...shuffled, ...shuffled];
    const grouped = Array.from({ length: numRows }, (_, rowIndex) =>
      duplicated.filter((_, i) => i % numRows === rowIndex)
    );
    setGroupedImages(grouped);
  }, []);

  if (groupedImages.length === 0) return null; // Hindari SSR mismatch

  return (
    <>
      <div id="gallery" className="h-full items-center flex">
        <div className="container mx-auto rounded-xl p-4 overflow-hidden MyGradient">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >
            {[...groupedImages, ...groupedImages].map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-4">
                {group.map((item, idx) => (
                  <img
                    key={idx}
                    src={item.img}
                    alt={`img-${groupIndex}-${idx}`}
                    className="rounded-xl w-56 h-auto"
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SliderGallery;
