import profile3 from "../img/profile3.jpeg";
import ellipse3 from "../icons/Ellipse 3.svg";
import ellipse4 from "../icons/Ellipse 4.svg";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between p-12 bg-white-100 mt-24 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-[1920px] mx-auto pl-[300px] pr-[300px] w-full flex items-center justify-between">
      {/* Decorative blur backgrounds */}
     {/* Decorative SVG backgrounds */}
<img

  src={ellipse4}
  alt="Ellipse 4"
  style={{
    position: "absolute",
    width: "1044.3157787795094px",
    height: "1044.3157787795094px",
    top: "0px",
    left: "1396px",
    transform: "rotate(130.44deg)",
    opacity: 1,
    pointerEvents: "none",
    zIndex: 0,
      backdropFilter: "blur(600px)",
    WebkitBackdropFilter: "blur(600px)",
  
  }}
/>

<img
  src={ellipse3}
  alt="Ellipse 3"
  style={{
    position: "absolute",
    width: "900.2134256600555px",
    height: "1040.2134256600555px",
    top: "-603px",
    left: "1288px",
    transform: "rotate(50.44deg)",
    opacity: 1,
    pointerEvents: "none",
    zIndex: 0,
      backdropFilter: "blur(700px)",
    WebkitBackdropFilter: "blur(700px)",
  }}
/>

      {/* Left side: Text + Stats */}
      <div
        style={{
          width: "648px",
          height: "446px",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
          opacity: 1,
          transform: "translateX(-37px)",
        }}
      >
        <h1
          style={{
            width: "579px",
            height: "180px",
            opacity: 1,
            fontFamily: "Work Sans",
            fontWeight: 600,
            fontSize: "82px",
            lineHeight: "84px",
            letterSpacing: "0%",
            color: "#132238",
            margin: 0,
          }}
        >
          Hello, I'm    
         
          Asma Fatima 
        </h1>
        <p
          style={{
            width: "648px",
            height: "62px",
            opacity: 1,
            fontFamily: "Work Sans",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0%",
            margin: 0,
            color: "#132238",
          }}
        >
         I’m a Freelance UI/UX Designer and Full-Stack Web Developer with over 2 years of experience in creating responsive interfaces and scalable web applications using modern technologies.
        </p>

        {/* Button */}
        <button
          style={{
            width: "126px",
            height: "70px",
            padding: "12px 24px",
            gap: "12px",
            borderRadius: "4px",
            background: "#A53DFF",
            opacity: 1,
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Say Hello!
        </button>

        {/* Frame1 (stats row) - moved under text */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 0,
            gap: "12px",
            width: "648px",
            height: "106px",
            marginTop: "24px",
            background: "#EDD8FF80",
            border: "1px solid #FFFFFF",
            borderRadius: "6px",
            zIndex: 20,
          }}
        >
          {/* Frame 17 */}
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: 0, gap: "8px", width: "200px", height: "72px"}}>
            <div style={{width: "200px", height: "40px", fontFamily: "Work Sans", fontWeight: 600, fontSize: "32px", lineHeight: "40px", textAlign: "center", color: "#424E60"}}>2 Y.</div>
            <div style={{width: "200px", height: "24px", fontFamily: "Work Sans", fontWeight: 400, fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#697484"}}>Experience</div>
          </div>

          {/* Separator (after 15 Y. Experience) */}
          <div style={{width: "0px", height: "72px", borderLeft: "3px solid #FFFFFF"}} />

          {/* Frame 18 */}
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: 0, gap: "8px", width: "200px", height: "72px"}}>
            <div style={{width: "200px", height: "40px", fontFamily: "Work Sans", fontWeight: 600, fontSize: "32px", lineHeight: "40px", textAlign: "center", color: "#424E60"}}>50+</div>
            <div style={{width: "200px", height: "24px", fontFamily: "Work Sans", fontWeight: 400, fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#697484"}}>Projects Completed</div>
          </div>

          {/* Separator (after Projects Completed) */}
          <div style={{width: "0px", height: "72px", borderLeft: "3px solid #FFFFFF"}} />

          {/* Frame 19 */}
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: 0, gap: "8px", width: "200px", height: "72px"}}>
            <div style={{width: "200px", height: "40px", fontFamily: "Work Sans", fontWeight: 600, fontSize: "32px", lineHeight: "40px", textAlign: "center", color: "#424E60"}}>48+</div>
            <div style={{width: "200px", height: "24px", fontFamily: "Work Sans", fontWeight: 400, fontSize: "16px", lineHeight: "24px", textAlign: "center", color: "#697484"}}>Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Right side: Image placeholder */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:ml-0 flex justify-end relative">
        <img
          src={profile3} alt="Rectangle" 

          alt="Hero"
          style={{
            width: "536px",
            height: "536px",
            opacity: 1,
            borderRadius: "25px",
            background: "#FFFFFF",
            boxShadow: "0px 24px 116px 0px #2B384C17",
            transform: "translateX(40px)",
          }}
        />
      </div>
      </div>
    </section>
  );
}
