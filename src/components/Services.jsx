export default function Services() {
  return (
    <section
      className="bg-[#132238] flex flex-col items-center justify-center py-[100px] px-[650px] gap-8 w-full h-[472px]"
      data-aos="fade-left"
    >
      {/* Heading */}
      <h2 className="text-white text-[48px] font-semibold leading-[56px] text-center w-[621px] h-[112px]">
        Do you have Project Idea? Let's discuss your project!
      </h2>

      {/* Subtitle */}
      <p className="text-[#A5ACB5] text-[18px] font-normal leading-[24px] text-center w-[781px] h-[48px]">
        I build modern, scalable web applications with a strong focus on performance, usability, and clean architecture. From frontend design to backend development, I deliver complete digital solutions.
      </p>

      {/* Button */}
      <button className="mt-4 flex items-center justify-center gap-3 w-[240px] h-[48px] bg-[#A53DFF] rounded hover:bg-[#9224D9] transition">
        <span className="text-white text-[16px] font-semibold leading-[24px]">
          Let’s work Together
        </span>
        {/* Right arrow icon */}
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </section>
  );
}
