import React from "react";

interface menuType {
  title: string;
  href: string;
}

const navMenu: menuType[] = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center gap-4 dark:text-[#858585]">
      {navMenu.map((menu: menuType) => (
        <a
          key={menu.title}
          className="text-sm transition-colors poppins-regular hover:font-semibold dark:hover:text-white"
          href={menu.href}
        >
          {menu.title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
