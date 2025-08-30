"use client";
import { motion } from "framer-motion";
import CakeComponent from "../components/BirthdayCake/CakeComponent";
import Confetti from "react-confetti";
import Image from "next/image";
export default function WrapperFirst() {
    return (
        <>
            <Image
                src="/starsBackground.png"
                className="w-full h-screen object-cover fixed top-0 left-0 right-0 bottom-0 animate-pulse"
                width={1920}
                height={1080}
                alt="Stars Background"
            />

            {/* Konfeti */}
            <motion.div
                className="w-full h-full flex flex-col items-center justify-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Image src="/decoration/decoration1.png" width={300} height={300} alt="Balloon" className="absolute -top-5 -left-15 opacity-90" />
                <Image src="/decoration/decoration1.png" width={300} height={300} alt="Balloon" className="absolute -top-5 -right-15 scale-x-[-1] opacity-90" />
                <Image src="/decoration/decoration3.png" width={300} height={300} alt="Balloon" className="absolute top-30 opacity-90" />
                {/* Komponen Kue */}
                <CakeComponent />
                <Confetti width={500} height={1000} numberOfPieces={300} className="" />
            </motion.div>
        </>
    );
}
