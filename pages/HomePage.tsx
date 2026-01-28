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
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/light-grey-terrazzo.png')",
      }}
    >
      {/* ================= HERO / HOME ================= */}
      <section className="relative h-[60vh] md:h-[80vh] bg-black text-white overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentSlide}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative container mx-auto px-6 h-full flex items-center">
              <div
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-suzukiRed px-8 py-3 rounded-md font-bold hover:bg-red-700 transition"
                >
                  Jadwalkan Test Drive
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* ARROWS */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 p-2 rounded-full"
        >
          ›
        </button>
      </section>

      {/* ================= PRODUK ================= */}
      <section id="produk" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">
            Produk Unggulan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONI ================= */}
      <section
        id="testimoni"
        className="py-16 bg-white/80 backdrop-blur-sm rounded-xl m-4"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">
            Apa Kata Mereka?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARTIKEL ================= */}
      <section id="artikel" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">
            Artikel & Tips Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section
        id="video"
        className="py-16 bg-white/80 backdrop-blur-sm rounded-xl m-4"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-12">
            Video Review
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((video) => (
              <div key={video.title} className="rounded-lg overflow-hidden">
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
