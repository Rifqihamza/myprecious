import Image from "next/image";

export default function WrapperThird() {
  return (
    <>
      <Image
        src="/starsBackground.png"
        className="w-full h-screen object-cover fixed top-0 left-0 right-0 bottom-0 animate-pulse"
        width={1920}
        height={1080}
        alt="Stars Background"
      />
      <div className="w-full h-fit translate-y-1/4 flex items-center justify-center p-10">
        <div className="relative bg-white w-full max-w-2xl p-6 rounded-xl shadow-lg border border-dashed border-gray-300">
          {/* Sobekan Kertas Bagian Atas */}
          <div className="absolute -top-3 left-0 w-full h-6 bg-white flex justify-between px-4">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1 h-6 bg-[#f8f4f0] rounded-b-full"></div>
            ))}
          </div>

          {/* Isi Ucapan */}
          <div className="text-black text-md leading-relaxed whitespace-pre-line">
            <p className="mb-4 font-bold text-pink-600 text-lg text-center">
              🎉 Selamat Ulang Tahun 🎉 <br /> ke-18!
            </p>
            <p>
              Yeaayyyy, sayang akhirnya kamu udah resmi jadi 'anak dewasa' nih yaaa... 😄
              Semoga semua mimpi dan rencana hidup kamu satu per satu mulai terwujud.
              Doa terbaik selalu untuk kamu yaa dan tetep sayang sama aku yaa hehehe.
              Tetap jadi kamu yang ceria, kuat, dan penuh semangat ya sayanggkuuu!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
