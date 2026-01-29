import React from "react";

const InPageNav: React.FC = () => {
  const navItems = [
    { href: "#produk", label: "Produk Unggulan" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#artikel", label: "Artikel" },
    { href: "#video", label: "Video Review" },
  ];

  return (
    <div className="sticky top-[68px] bg-white/95 backdrop-blur shadow-sm z-40 border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center space-x-3 md:space-x-6 overflow-x-auto py-3 scrollbar-hide">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-gray-600 hover:text-suzukiBlue font-semibold whitespace-nowrap px-4 py-2 text-sm rounded-full transition-all duration-300 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InPageNav;
