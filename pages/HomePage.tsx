import React, { useState, useEffect } from "react";
import {
  CARS,
  TESTIMONIALS,
  ARTICLES,
  HERO_SLIDES,
  VIDEOS,
} from "../constants";
import CarCard from "../components/CarCard";
import TestimonialCard from "../components/TestimonialCard";
import ArticleCard from "../components/ArticleCard";
import TestDriveModal from "../components/TestDriveModal";
import CreditSimulation from "../components/CreditSimulation";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= SLIDER ================= */
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  return (
    <div
      id="home"
      className="bg-gray-100"
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/light-grey-terrazzo.png')",
      }}
    >
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70svh] md:min-h-[80vh] bg-black text-white overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* CONTENT */}
            <div className="relative container mx-auto px-6 min-h-[70svh] md:min-h-[80vh] flex items-center">
              <div
                className={`max-w-2xl transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-suzukiRed px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition"
                >
                  Ajukan Test Drive Sekarang
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* NAVIGATION */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-xl z-10"
        >
          ‹
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-xl z-10"
        >
          ›
        </button>
      </section>

      {/* ================= PRODUK ================= */}
      <section id="produk" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-4">
            Produk Unggulan Suzuki
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Temukan berbagai pilihan mobil Suzuki dengan desain modern, performa
            tangguh, dan efisiensi terbaik untuk kebutuhan Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONI ================= */}
      <section id="testimoni" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Kepuasan pelanggan adalah prioritas kami dalam memberikan layanan
            terbaik.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARTIKEL ================= */}
      <section id="artikel" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-4">
            Artikel & Informasi Terbaru
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Dapatkan tips otomotif, promo terbaru, dan informasi menarik seputar
            mobil Suzuki.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section id="video" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-4">
            Video Review & Test Drive
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Saksikan ulasan lengkap dan pengalaman berkendara langsung dari
            berbagai model Suzuki.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((video) => (
              <div
                key={video.title}
                className="rounded-lg overflow-hidden shadow-md bg-white"
              >
                <div className="relative pb-[56.25%]">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <TestDriveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <CreditSimulation />
    </div>
  );
};

export default HomePage;
