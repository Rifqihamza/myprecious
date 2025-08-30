import Image from "next/image";

export default function WrapperThanks() {
  return (
    <>
      <Image
        src="/starsBackground.png"
        className="w-full h-screen object-cover fixed top-0 left-0 right-0 bottom-0 animate-pulse -z-10"
        width={1920}
        height={1080}
        alt="Stars Background"
      />
      <div className="w-full h-fit flex items-center justify-center p-10">
        <div className="relative bg-white w-full max-w-2xl max-h-[80vh] p-6 rounded-xl shadow-lg border border-dashed border-gray-300 overflow-y-auto">
          {/* Sobekan Kertas Bagian Atas */}
          <div className="absolute -top-3 left-0 w-full h-6 bg-white flex justify-between px-4">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1 h-6 bg-[#f8f4f0] rounded-b-full"></div>
            ))}
          </div>

          {/* Isi Pesan */}
          <div className="text-black text-md leading-relaxed whitespace-pre-line">
            <p className="mb-4 font-bold text-pink-600 text-lg text-center">
              💌 Terima Kasih, Sayang!
            </p>
            <p className="mb-6">
              Makasih udah selalu ada, udah sabar banget ngejalanin semuanya bareng aku.
              Meski banyak naik turunnya, kamu tetap jadi orang paling menyenangkan
              yang pernah aku kenal. Aku bersyukur banget bisa kenal dan punya kamu.
              Semoga kita terus bisa ketawa bareng, cerita bareng, dan tumbuh bareng.
              Pokoknya makasih yaaa, kamu hebat dan aku bangga banget jadi bagian dari hidup kamu 💖
            </p>
            <div className="w-full flex justify-center">
              <button
                className="cursor-pointer pointer-events-auto outline-none uppercase tracking-[5px] text-md font-bold text-[#7f6269] bg-[#e5c5c1] px-8 py-2 rounded-2xl -translate-y-[8px] active:-translate-y-[5px] [box-shadow:0px_8px_0_0_#f4e1e0] active:[box-shadow:0px_5px_0_0_#f4e1e0]"
                onClick={() => window.location.href = '/'}
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
