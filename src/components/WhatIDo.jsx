export default function WhatIDo() {
  const services = [
    {
      title: "Frontend Development",
      desc: "I create responsive and interactive user interfaces using modern frontend technologies such as React, Next.js, HTML, CSS, and Tailwind CSS. My focus is on performance, accessibility, and delivering smooth user experiences across all devices.",
    },
    {
      title: "Backend Development",
      desc: "I build secure and scalable backend systems using Node.js, Express, Laravel, and RESTful APIs. I ensure efficient data handling, authentication, and seamless communication between the frontend and databases.",
    },
    {
      title: "Full-Stack Web Development",
      desc: "I develop complete web solutions by combining frontend and backend technologies. From database design to deployment, I manage the full development lifecycle to deliver fast, reliable, and scalable web applications.",
    },
  ];

  return (
    <section className="w-full bg-[#F0F1F3] px-6 lg:px-[300px] py-[100px] lg:py-[150px]">
      
      <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[143px]">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-[40px] w-full lg:w-[529px] lg:mt-[88px]">

          <div className="flex flex-col gap-[24px]">
            <h2
              className="text-[32px] lg:text-[48px] leading-tight lg:leading-[56px] font-semibold text-[#333333]"
              style={{ fontFamily: "Work Sans" }}
            >
              What I do?
            </h2>

            <p
              className="text-[16px] lg:text-[18px] leading-[24px] text-[#132238]"
              style={{ fontFamily: "Work Sans" }}
            >
              I design and develop scalable, high-performance web applications using modern technologies. My work focuses on building clean, responsive user interfaces combined with secure and efficient backend systems to deliver seamless digital experiences.
            </p>

            <p
              className="text-[16px] lg:text-[18px] leading-[24px] text-[#132238]"
              style={{ fontFamily: "Work Sans" }}
            >
              I specialize in full-stack web development, integrating frontend frameworks with robust APIs and databases to create solutions that are both user-friendly and technically sound.
            </p>
          </div>

          <button className="w-[140px] h-[48px] bg-[#A53DFF] rounded text-white font-semibold text-[16px]">
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE BOXES */}
        <div className="flex flex-col gap-[24px] w-full lg:w-[648px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-[16px]
                         p-[24px] lg:p-[32px]
                         bg-white
                         rounded-[6px]
                         shadow-[0_32px_96px_rgba(28,25,25,0.16)]"
            >
              {/* LEFT COLOR BAR */}
              <div className="absolute left-0 top-0 w-[5px] h-full bg-[#A53DFF]" />

              <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#132238]">
                {service.title}
              </h3>

              <p className="text-[15px] lg:text-[16px] leading-[24px] text-[#424E60]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
