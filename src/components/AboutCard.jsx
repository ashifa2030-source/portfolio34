import React from "react";
import profile3 from "../img/profile3.jpeg";

// Social Icons
import facebook from "../icons/facebook.jpeg";
import ball from "../icons/ball.jpeg";
import insta from "../icons/insta.jpeg";
import link from "../icons/link1.svg";
import Be from "../icons/Be.jpeg";
import download from "../img/download.jpeg";
export default function AboutCard() {
  const socialIcons = [
    { name: "Facebook", img: facebook },
    { name: "ball", img: ball },
    { name: "Insta", img: insta },
    { name: "link", img: link },
    { name: "Be", img: Be },
  ];

  return (
    <div className="w-full flex justify-center my-12">
      <div
        style={{
          width: 1320,
          maxWidth: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 36px 105px rgba(43, 56, 76, 0.1)",
          borderRadius: 16,
          display: "flex",
          padding: 112,
          gap: 136,
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ width: 424, height: 504, position: "relative" }}>
          {/* Profile Image */}
          <div
            style={{
              position: "absolute",
              width: 424,
              height: 468,
              background: "#F0F1F3",
              borderRadius: 10,
              backgroundImage: `url(${profile3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Social Icons Card */}
          <div
            style={{
              position: "absolute",
              width: 264,
              height: 72,
              left: 40,
              bottom: -36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              background: "#FFFFFF",
              boxShadow: "0px 12px 64px rgba(28, 25, 25, 0.12)",
              borderRadius: 4,
            }}
          >
            {socialIcons.map((icon, index) => {
              const isLinkedIn = icon.name === "LinkedIn";

              return (
                <div
                  key={index}
                  style={{
                    width: 48,
                    height: 48,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 4,
                    background: isLinkedIn ? "#8832d3ff" : "#FFFFFF",
                  }}
                >
                  <img
                     
                    src={icon.img}
                    alt={icon.name}
                    style={{
                      width: 20,
                      height: 20,
                      objectFit: "contain",
                      filter: isLinkedIn
                        ? "brightness(0) invert(1)" // white icon on purple
                        : "none",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            width: 536,
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <h3
            style={{
              fontFamily: "Work Sans",
              fontWeight: 600,
              fontSize: 38,
              lineHeight: "50px",
              color: "#132238",
              margin: 0,
            }}
          >
            I am Professional User Experience Designer
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: "24px",
                color: "#556070",
              }}
            >
              I design and develop services for customers specializing in
              creating stylish, modern websites, web services and online
              stores.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: "24px",
                color: "#556070",
              }}
            >
              My passion is to design digital user experiences with strong
              visual identity.
            </p>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                width: 132,
                height: 48,
                background: "#A53DFF",
                color: "#FFFFFF",
                borderRadius: 4,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              My Project
            </button>

            <button
  style={{
    width: 190,
    height: 48,
    background: "#FFFFFF",
    border: "1px solid #A53DFF",
    color: "#A53DFF",
    borderRadius: 4,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    paddingLeft: 15,      // 🔹 left spacing
    gap: 10,              // 🔹 icon & text gap
  }}
>
  {/* ICON – LEFT SIDE */}
  <img
    src={download}
    alt="Download"
    style={{
      width: 18,
      height: 18,
    }}
  />

  {/* TEXT */}
  <span>Download CV</span>
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
