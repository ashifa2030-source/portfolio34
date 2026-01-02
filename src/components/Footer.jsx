export default function Footer() {
  return (
<footer className="bg-[#2B384C] w-full max-w-[1920px] h-[330px] opacity-100 mx-auto">      {/* MAIN CONTAINER */}
      <div className="max-w-[1920px] mx-auto h-[330px] flex items-center justify-center">

        {/* INNER FRAME (Frame 49) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[182px] px-6 md:px-[300px] w-full">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-[56px] h-[56px] bg-[#A53DFF] rounded-full flex items-center justify-center">
              <span className="text-white font-poppins text-[24px] leading-[56px]">
                A
              </span>
            </div>
            <span className="text-white font-semibold text-[32px] leading-[40px] font-['Work Sans']">
              Asma
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-wrap justify-center items-center gap-1">
            {[
              "Home",
              "About",
              "Services",
              "Process",
              "Portfolio",
              "Blog",
              "Contact",
            ].map((item) => (
              <div
                key={item}
                className="px-3 py-3 text-[#F0F1F3] text-[16px] font-normal font-['Work Sans'] cursor-pointer hover:text-[#A53DFF] transition"
              >
                {item}
              </div>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="text-white text-[16px] font-normal font-['Work Sans']">
            © 2022 Picto.
          </p>
        </div>
      </div>
    </footer>
  );
}
