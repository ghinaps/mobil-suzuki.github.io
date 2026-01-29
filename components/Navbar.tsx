import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SUZUKI_LOGO_URL } from "../constants";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    setOpen(false);
  };

  const navClass =
    "text-gray-200 text-sm font-medium transition hover:text-white";

  return (
    <nav className="bg-suzukiBlue sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 text-white text-xl font-bold uppercase"
            onClick={() => handleScroll("home")}
          >
            <img src={SUZUKI_LOGO_URL} alt="Suzuki" className="w-8 h-8" />
            Suzuki Ciputat
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleScroll("home")} className={navClass}>
              Home
            </button>
            <button onClick={() => handleScroll("produk")} className={navClass}>
              Produk Unggulan
            </button>
            <button
              onClick={() => handleScroll("testimoni")}
              className={navClass}
            >
              Testimoni
            </button>
            <button
              onClick={() => handleScroll("artikel")}
              className={navClass}
            >
              Artikel
            </button>
            <button
              onClick={() => handleScroll("simulasi-kredit")}
              className={navClass}
            >
              Simulasi Kredit
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden mt-4 rounded-lg bg-suzukiBlue shadow-lg">
            <button
              onClick={() => handleScroll("home")}
              className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-white/10 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("produk")}
              className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-white/10 transition"
            >
              Produk Unggulan
            </button>
            <button
              onClick={() => handleScroll("testimoni")}
              className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-white/10 transition"
            >
              Testimoni
            </button>
            <button
              onClick={() => handleScroll("artikel")}
              className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-white/10 transition"
            >
              Artikel
            </button>
            <button
              onClick={() => handleScroll("simulasi-kredit")}
              className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-white/10 transition"
            >
              Simulasi Kredit
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
