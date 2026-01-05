import folder from "../icons/folder.png"; // purple folder icon

export default function Projects() {
  return (
    <section className="w-full bg-[#FBF7FF] py-24 px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center gap-16">

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[#A53DFF] font-medium tracking-widest uppercase">
            — Projects —
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#132238]">
            My Recent Works
          </h2>
        </div>

        {/* Empty Project Card */}
        <div className="
          w-full max-w-xl
          bg-white
          rounded-2xl
          shadow-lg
          flex flex-col items-center justify-center gap-4
          py-12 px-6
        ">
          {/* Icon */}
          <div className="
            w-16 h-16
            sm:w-20 sm:h-20
            bg-[#F3E8FF]
            rounded-full
            flex items-center justify-center
          ">
            <img src={folder} alt="folder" className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          {/* Text */}
          <h3 className="text-xl sm:text-2xl font-semibold text-[#132238]">
            No Projects Yet
          </h3>

          <p className="text-base sm:text-lg text-[#87909D] text-center">
            Check back soon for my latest work!
          </p>
        </div>

      </div>
    </section>
  );
}
