import React from "react";
import profile3 from "../img/profile3.jpeg";

// Social Icons
import facebook from "../icons/facebook.jpeg";
import ball from "../icons/ball.jpeg";
import insta from "../icons/insta.jpeg";
import link from "../icons/new1.png";
import Be from "../icons/Be.jpeg";
import download from "../img/download.jpeg";

export default function AboutCard() {
  const socialIcons = [
    { name: "Facebook", img: facebook },
    { name: "Ball", img: ball },
    { name: "Insta", img: insta },
    { name: "LinkedIn", img: link },
    { name: "Behance", img: Be },
  ];

  return (
    <div className="w-full flex justify-center my-12 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-[0_36px_105px_rgba(43,56,76,0.1)] rounded-2xl p-6 md:p-16 gap-8 md:gap-12 max-w-[1320px] w-full">

        {/* LEFT SIDE - IMAGE */}
        <div className="relative w-full md:w-[424px] h-[468px] flex-shrink-0">
          {/* Profile Image */}
          <div
            className="w-full h-full rounded-lg bg-gray-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${profile3})` }}
          />

          {/* Social Icons Card */}
          <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2 md:left-10 md:translate-x-0 flex gap-2 md:gap-3 bg-white shadow-[0_12px_64px_rgba(28,25,25,0.12)] rounded-md p-2 md:p-3">
            {socialIcons.map((icon, index) => {
              const isLinkedIn = icon.name === "LinkedIn";
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center rounded w-10 h-10 md:w-12 md:h-12
                    ${isLinkedIn ? "bg-white" : "bg-gray-50"}`}
                >
                  <img
                    src={icon.img}
                    alt={icon.name}
                    className={`object-contain
                      ${isLinkedIn ? "w-6 h-6" : "w-5 h-5"}
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8 mt-12 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-[38px] font-semibold text-[#132238]">
            I am Professional User Experience Designer
          </h3>

          <div className="flex flex-col gap-2 text-[#556070]">
            <p>
              I design and develop services for customers specializing in creating stylish, modern websites, web services and online stores.
            </p>
            <p>
              My passion is to design digital user experiences with strong visual identity.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-[#A53DFF] text-white rounded-md font-semibold w-full sm:w-auto">
              My Project
            </button>

            <button className="flex items-center gap-2 px-4 py-3 border border-[#A53DFF] text-[#A53DFF] rounded-md font-semibold w-full sm:w-auto justify-center">
              <img src={download} alt="Download" className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
