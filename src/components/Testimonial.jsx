import folder from "../icons/folder.png"; // purple folder icon

export default function Projects() {
  return (
    <section className="w-full bg-[#FBF7FF] py-[120px] flex justify-center">
      <div className="w-[1320px] flex flex-col items-center gap-[70px]">

        {/* Heading */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[#A53DFF] font-medium tracking-widest uppercase">
            — Projects —
          </span>

          <h2 className="text-[48px] font-semibold text-[#132238]">
            My Recent Works
          </h2>
        </div>

        {/* Empty Project Card */}
        <div className="
          w-full
          h-[280px]
          bg-white
          rounded-[16px]
          shadow-[0_20px_80px_rgba(165,61,255,0.15)]
          flex
          flex-col
          items-center
          justify-center
          gap-4
        ">

          {/* Icon */}
          <div className="
            w-[64px]
            h-[64px]
            bg-[#F3E8FF]
            rounded-full
            flex
            items-center
            justify-center
          ">
            <img src={folder} alt="folder" className="w-7 h-7" />
          </div>

          {/* Text */}
          <h3 className="text-[20px] font-semibold text-[#132238]">
            No Projects Yet
          </h3>

          <p className="text-[16px] text-[#87909D]">
            Check back soon for my latest work!
          </p>
        </div>

      </div>
    </section>
  );
}
