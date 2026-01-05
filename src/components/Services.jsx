export default function Services() {
  return (
    <section
      className="bg-[#132238] min-h-screen w-full flex items-center justify-center px-6 md:px-12"
      data-aos="fade-left"
    >
      {/* Inner Container */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-6 text-center">
        
        {/* Heading */}
        <h2 className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-tight">
          Do you have a Project Idea? <br className="hidden sm:block" />
          Let's discuss your project!
        </h2>

        {/* Subtitle */}
        <p className="text-[#A5ACB5] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-3xl">
          I build modern, scalable web applications with a strong focus on
          performance, usability, and clean architecture. From frontend design
          to backend development, I deliver complete digital solutions.
        </p>

        {/* Button */}
        <button className="mt-6 flex items-center gap-3 px-8 py-3 bg-[#A53DFF] rounded-md hover:bg-[#9224D9] transition">
          <span className="text-white text-[16px] font-semibold">
            Let’s work Together
          </span>

          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
