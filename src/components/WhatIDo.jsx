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
    <section className="flex bg-[#F0F1F3] px-[300px] py-[150px] gap-[143px] w-[1920px] h-[876px]">
      
      {/* Left Side */}
      <div className="flex flex-col gap-[50px] w-[529px] h-[338px] mt-[88px]">

        <div className="flex flex-col gap-[24px] h-[276px]">
          <h2
  className="
    text-[48px]
    leading-[56px]
    font-semibold
    w-[254px]
    h-[56px]
    text-[#333333]
    opacity-100
  "
  style={{ fontFamily: "Work Sans" }}
>
  What I do?
</h2>

<div className="flex flex-col gap-2">
  <p
    className="
      text-[18px]
      leading-[24px]
      font-normal
      w-[529px]
      h-[96px]
      text-[#132238]
      opacity-100
    "
    style={{ fontFamily: "Work Sans" }}
  >
 I design and develop scalable, high-performance web applications using modern technologies. My work focuses on building clean, responsive user interfaces combined with secure and efficient backend systems to deliver seamless digital experiences.

  </p>

  <p
    className="
      text-[18px]
      leading-[24px]
      font-normal
      w-[529px]
      h-[48px]
      text-[#132238]
      opacity-100
    "
    style={{ fontFamily: "Work Sans" }}
  >
  I specialize in full-stack web development, integrating frontend frameworks with robust APIs and databases to create solutions that are both user-friendly and technically sound.
  </p>
</div>


        </div>

        <button className="w-[126px] h-[48px] bg-[#A53DFF] rounded text-white font-semibold text-[16px]">
          Learn More
        </button>
      </div>

      {/* Right Side Boxes */}
      <div className="flex flex-col gap-[24px] w-[648px] h-[576px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-[16px] 
                       w-[648px] h-[176px] 
                       p-[32px] bg-white 
                       rounded-[6px] 
                       shadow-[0_32px_96px_rgba(28,25,25,0.16)]"
          >
            {/* Left Color Bar */}
            <div className="absolute left-0 top-0 w-[5px] h-full bg-[#A53DFF]" />

            <h3 className="text-[24px] font-semibold text-[#132238] leading-[24px]">
              {service.title}
            </h3>

            <p className="text-[16px] text-[#424E60] leading-[24px]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
