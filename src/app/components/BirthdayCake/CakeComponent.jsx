export default function CakeComponent() {
    return (
        <>
            <section className="w-full h-full flex items-center justify-center relative z-40">
                <div className="w-[70vw] h-[17vh] shadow-md shadow-black/40 bg-white rounded-[50%] flex items-center justify-center">
                    <div className="bg-rose-400 rounded-b-[50%] -translate-y-4">
                        <div className="bg-rose-400 w-[60vw] h-[17vh] rounded-[50%] -translate-y-2">
                            <div className="bg-rose-400 w-[60vw] h-[16vh] rounded-[50%] border-b-2 border-white -translate-y-2">
                                <div className="bg-rose-400 w-[60vw] h-[20vh] rounded-[50%] border-b-2 border-white -translate-y-14 flex items-center justify-center">
                                    <div className="w-[55vw] h-[15vh] rounded-[50%] bg-pink-100 z-10 -translate-y-2.5 relative" />
                                    {/* Drips */}
                                    <div className="absolute top-[42%] left-[4%] w-9 h-15 bg-pink-100 rounded-b-full" />
                                    <div className="absolute top-[50%] left-[35%] w-11 h-24 bg-pink-100 rounded-b-full" />
                                    <div className="absolute top-[50%] left-[65%] w-10 h-19 bg-pink-100 rounded-b-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Candle Angka 18 */}
                <div className="absolute top-[29%] left-1/2 transform -translate-x-1/2 z-20 flex items-end">
                    {/* Angka 1 */}
                    <div className="relative flex flex-col items-center">
                        {/* Api di atas angka 1 */}
                        <div className="w-3 h-5 bg-orange-300 rounded-full animate-pulse shadow-lg "
                            style={{
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                boxShadow: '0 0 15px rgba(255, 165, 0, 0.6)'
                            }}
                        ></div>
                        {/* Angka 1 */}
                        <h1 className="text-pink-500 text-[28px] leading-none helloFont font-bold">1</h1>
                    </div>

                    {/* Angka 8 */}
                    <div className="relative flex flex-col items-center">
                        {/* Api di atas angka 8 */}
                        <div className="w-3 h-5 bg-orange-300 rounded-full animate-pulse shadow-lg"
                            style={{
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                boxShadow: '0 0 15px rgba(255, 165, 0, 0.6)'
                            }}
                        ></div>
                        {/* Angka 8 */}
                        <h1 className="text-pink-500 text-[28px] leading-none helloFont font-bold">8</h1>
                    </div>
                    <h1 className="font-bold font-mono w-full absolute top-10 -left-10 text-pink-400 text-lg text-center whitespace-nowrap helloFont">Happy Birthday </h1>
                    <h1 className="font-bold font-mono w-full absolute top-15 -left-4 text-pink-400 text-lg text-center whitespace-nowrap helloFont">Sayang 💕</h1>
                </div>

            </section>
        </>
    )
}