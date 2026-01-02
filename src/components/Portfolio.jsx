import bar from "../icons/bar.jpeg";
import facebook from "../icons/facebook.jpeg";
import node from "../icons/node.png";
import research from "../icons/research.svg";
import python from "../icons/python.png";
import github from "../icons/github.png";
import insta from "../icons/insta.jpeg";
import docker from "../icons/docker.png";
import aws from "../icons/aws.png";
import js from "../icons/js.png";
import postgres from "../icons/postgres.png";
import react from "../icons/react.png";
export default function MySkills() {
  const topRow = [bar, facebook, node, research, python, github];
  const bottomRow = [insta, docker, aws, js, postgres, react];

  return (
    <section className="py-[120px] bg-[#FBF7FF]">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[#A53DFF] tracking-widest uppercase font-medium mb-3">
          — Technologies —
        </p>
        <h2 className="text-[48px] font-bold text-[#132238]">
          My Skills
        </h2>
      </div>

      {/* Glass Container */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#FDF8FF] rounded-[24px] p-10 shadow-[0_20px_80px_rgba(165,61,255,0.15)] overflow-hidden">

          {/* TOP ROW (LEFT MOVE) */}
<div className="overflow-hidden mb-10">
  <div className="flex gap-6 animate-marquee-left">
    {[...topRow, ...topRow].map((icon, i) => (
      <SkillIcon icon={icon} key={i} />
    ))}
  </div>
</div>

{/* BOTTOM ROW (RIGHT MOVE) */}
<div className="overflow-hidden">
  <div className="flex gap-6 animate-marquee-right">
    {[...bottomRow, ...bottomRow].map((icon, i) => (
      <SkillIcon icon={icon} key={i} />
    ))}
  </div>
</div>


        </div>
      </div>
    </section>
  );
}

/* ICON BOX */
function SkillIcon({ icon }) {
  return (
    <div className="
      w-[72px] h-[72px]
      bg-white
      rounded-xl
      shadow-md
      flex items-center justify-center
      transition
      hover:scale-110
      hover:shadow-[0_0_20px_rgba(165,61,255,0.4)]
    ">
      <img src={icon} className="w-8 h-8" />
    </div>
  );
}
