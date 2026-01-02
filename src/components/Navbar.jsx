export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav
        className="
          max-w-[1920px]
          mx-auto
          flex
          items-center
          justify-between
          pt-[20px]
          pb-[20px]
          pl-[300px]
          pr-[300px]
        "
      >
        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div
            className="
              w-[56px]
              h-[56px]
              flex
              items-center
              justify-center
              rounded-full
              bg-[#A53DFF]
              text-white
              text-xl
              font-bold
            "
          >
            A
          </div>

          {/* Name */}
          <span
            className="
              font-['Work_Sans']
              font-semibold
              text-[32px]
              leading-[40px]
              text-[#132238]
            "
          >
            Asma 
          </span>
        </div>

        {/* RIGHT: Menu */}
        <ul className="flex items-center gap-2">
          {["Home", "About", "Process", "Portfolio", "Blog", "Services"].map(
            (item) => (
              <li
                key={item}
                className="
                  px-[24px]
                  py-[12px]
                  text-[#132238]
                  cursor-pointer
                  transition
                  duration-300
                  hover:text-[#A53DFF]
                "
              >
                {item}
              </li>
            )
          )}

          {/* Contact Button */}
          <li
            className="
              ml-2
              px-[24px]
              py-[12px]
              bg-[#A53DFF]
              text-white
              rounded-[4px]
              cursor-pointer
              transition
              duration-300
              hover:bg-purple-700
            "
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
