import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-md z-40 flex flex-col 
        items-center justify-center transition-all duration-500 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
      role="navigation"
      aria-hidden={!menuOpen}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl font-light focus:outline-none cursor-pointer hover:rotate-90 transition-transform duration-300"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      <nav className="flex flex-col items-center space-y-6 mt-10">
        {menuItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`
              text-2xl font-semibold text-white transition-all duration-500 transform
              ${
                menuOpen
                  ? `opacity-100 translate-y-0 delay-[${index * 100}ms]`
                  : "opacity-0 translate-y-5"
              }
              hover:text-blue-400
            `}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
