import profile3 from "../img/profile3.jpeg";
import ellipse3 from "../icons/Ellipse 3.svg";
import ellipse4 from "../icons/Ellipse 4.svg";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-24">
      {/* Decorative SVGs */}
      <img
        src={ellipse4}
        alt=""
        className="absolute right-[-400px] top-[-200px] w-[900px] blur-[200px] pointer-events-none hidden md:block"
      />

      <img
        src={ellipse3}
        alt=""
        className="absolute right-[-300px] top-[-500px] w-[800px] blur-[250px] pointer-events-none hidden md:block"
      />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-[42px] md:text-[64px] lg:text-[82px] leading-tight font-semibold text-[#132238]">
            Hello, I'm <br />
            <span className="text-[#132238]">Asma Fatima</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#132238] max-w-xl mx-auto md:mx-0">
            I’m a Freelance UI/UX Designer and Full-Stack Web Developer with over
            2 years of experience in creating responsive interfaces and scalable
            web applications using modern technologies.
          </p>

          <button className="bg-[#A53DFF] text-white px-6 py-4 rounded-md font-semibold w-fit mx-auto md:mx-0">
            Say Hello!
          </button>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 w-full h-300 bg-[#EDD8FF80] border border-white rounded-lg p-4">
            <Stat title="2 Y." label="Experience" />
            <Divider />
            <Stat title="50+" label="Projects Completed" />
            <Divider />
            <Stat title="48+" label="Happy Clients" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[400px] md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profile3}
            alt="Hero"
            className="w-[280px] sm:w-[360px] md:w-[850px] lg:w-[536px] rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/* Small Components */
function Stat({ title, label }) {
  return (
    <div className="text-center">
      <h3 className="text-[28px] md:text-[32px] font-semibold text-[#424E60]">
        {title}
      </h3>
      <p className="text-[#697484] text-sm md:text-base">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="hidden sm:block w-px bg-white" />;
}
