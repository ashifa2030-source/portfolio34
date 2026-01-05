import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Process", "Portfolio", "Blog", "Services"];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav
        className="
          max-w-[1320px]
          mx-auto
          flex
          items-center
          justify-between
          px-6
          lg:px-[300px]
          py-4
        "
      >
        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-4">
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-[#A53DFF] text-white text-xl font-bold">
            A
          </div>

          <span className="font-semibold text-[28px] lg:text-[32px] text-[#132238]">
            Asma
          </span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className="px-6 py-3 text-[#132238] cursor-pointer transition hover:text-[#A53DFF]"
            >
              {item}
            </li>
          ))}

          <li className="ml-2 px-6 py-3 bg-[#A53DFF] text-white rounded cursor-pointer transition hover:bg-purple-700">
            Contact
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#132238] text-3xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col items-center py-6 gap-4">
            {menuItems.map((item) => (
              <li
                key={item}
                className="text-[#132238] text-[18px] cursor-pointer hover:text-[#A53DFF]"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}

            <li
              className="mt-2 px-6 py-3 bg-[#A53DFF] text-white rounded cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
