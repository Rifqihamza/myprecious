"use client";

import { useEffect, useState } from "react";
import WrapperFirst from "./wrapper_first";
import WrapperSecond from "./wrapper_second";
import WrapperThird from "./wrapper_third";
import WrapperThanks from "./wrapper_thanks";

const components = [WrapperFirst, WrapperSecond, WrapperThird, WrapperThanks];
const duration = 15000;

export default function WrappedPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progressBar, setProgressBar] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Timer for page change
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev < components.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, duration);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    // Timer for progress bar segment
    useEffect(() => {
        if (!isAutoPlay) return

        setProgressBar(0);
        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const percentage = Math.min((elapsed / duration) * 100, 100);
            setProgressBar(percentage);

            if (percentage >= 100) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlay]);

    const CurrentComponent = components[currentIndex];

    return (
        <div className="relative">
            {/* Progress bar container */}
            <div className="flex gap-2 px-4 w-full fixed top-4 z-50">
                {components.map((_, idx) => (
                    <div
                        key={idx}
                        className="flex-1 h-2 bg-white/40 rounded-full overflow-hidden"
                    >
                        <div
                            className="h-full bg-[var(--foreground)] transition-all duration-500"
                            style={{
                                width:
                                    idx < currentIndex
                                        ? "100%"
                                        : idx === currentIndex
                                            ? `${progressBar}%`
                                            : "0%",
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center gap-4 mt-4">
                <button
                    onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                    Back
                </button>
                <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`px-4 py-2 text-white rounded ${isAutoPlay ? "bg-blue-500" : "bg-blue-600"}`}
                >
                    {isAutoPlay ? "Pause" : "Play"}
                </button>
                <button
                    onClick={() => setCurrentIndex((i) => Math.min(i + 1, components.length - 1))}
                    disabled={currentIndex === components.length - 1}
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                    Next
                </button>
            </div>

            <div className="w-full max-w-md h-screen overflow-hidden mx-auto">
                {/* Content */}
                <CurrentComponent />
            </div>
        </div>
    );
}
