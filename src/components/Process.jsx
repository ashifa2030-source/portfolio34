import React from "react";

import requirements from "../icons/research.svg";
import development from "../icons/analysis1.svg";
import testing from "../icons/design1.svg";
import deployment from "../icons/launch1.svg";

const steps = [
  {
    icon: requirements,
    title: "Requirements",
    desc: "Gathering and analyzing project requirements to understand the scope and technical needs.",
  },
  {
    icon: development,
    title: "Development",
    desc: "Building frontend and backend using React, Next.js, Node.js, Express, and Laravel.",
  },
  {
    icon: testing,
    title: "Testing",
    desc: "Rigorous testing to ensure functionality, performance, and security across features.",
  },
  {
    icon: deployment,
    title: "Deployment",
    desc: "Deploying the application to production with proper configuration and monitoring.",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <p className="text-purple-600 tracking-widest uppercase font-medium mb-4">
            — Process —
          </p>

          <h2 className="text-[48px] font-bold text-[#132238] mb-6">
            My Development Process
          </h2>

          <p className="text-[18px] text-[#697484] leading-7">
            As a full-stack developer, I follow a systematic approach to deliver
            high-quality web applications with modern development practices.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
  key={index}
  className="
    group
    bg-white
    rounded-2xl
    p-8
    text-center
    shadow-lg
    transition-all
    duration-300
    hover:bg-[#A53DFF]
  "
>

            
             <div
  className="
    w-16 h-16 mx-auto mb-6
    flex items-center justify-center
    rounded-xl
    bg-purple-100
    transition-all
    duration-300
    group-hover:bg-[#8F2BFF]
  "
>

                <img src={step.icon} alt="" className="w-8 h-8" />
              </div>
<h3
  className="
    text-[20px]
    font-semibold
    text-[#132238]
    mb-4
    transition-all
    duration-300
    group-hover:text-white
  "
>
  {step.title}
</h3>


           <p
  className="
    text-[16px]
    text-[#556070]
    leading-6
    transition-all
    duration-300
    group-hover:text-purple-100
  "
>
  {step.desc}
</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
