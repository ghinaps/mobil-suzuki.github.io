import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CARS, SALES_INFO } from "../constants";
import { Car, CarColor } from "../types";
import TestDriveModal from "../components/TestDriveModal";

const CarDetailPage: React.FC = () => {
  const { carId } = useParams<{ carId: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [selectedColor, setSelectedColor] = useState<CarColor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundCar = CARS.find((c) => c.id === carId);
    if (foundCar) {
      setCar(foundCar);
      setSelectedColor(foundCar.colors.length > 0 ? foundCar.colors[0] : null);
    } else {
      setCar(null);
      setSelectedColor(null);
    }
  }, [carId]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  const getBackgroundColorStyle = (hex: string | string[]) => {
    if (Array.isArray(hex)) {
      return {
        background: `linear-gradient(45deg, ${hex[0]} 50%, ${hex[1]} 50%)`,
      };
    }
    return { backgroundColor: hex };
  };

  if (!car) {
    return (
      <div className="text-center py-24 text-gray-600">
        Mobil tidak ditemukan.
      </div>
    );
  }

  const message = `Halo ${SALES_INFO.name}, saya tertarik dengan mobil ${car.name}. Mohon info lebih lanjut.`;
  const whatsappOrderUrl = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(message)}`;
  const currentImageUrl = selectedColor ? selectedColor.imageUrl : car.image;

  return (
    <>
      <div
        className="py-10 md:py-14"
        style={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/light-grey-terrazzo.png')",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* BACK */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-suzukiBlue hover:text-suzukiRed font-semibold bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow transition"
            >
              ← Kembali ke Beranda
            </Link>
          </div>

          {/* MAIN CARD */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-14">
              {/* IMAGE */}
              <div>
                <img
                  src={currentImageUrl}
                  alt={car.name}
                  className="w-full rounded-xl shadow-lg object-cover"
                />

                {car.colors.length > 0 && selectedColor && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Pilihan Warna:{" "}
                      <span className="text-suzukiBlue">
                        {selectedColor.name}
                      </span>
                    </p>
                    <div className="flex gap-3">
                      {car.colors.map((color) => {
                        const active =
                          JSON.stringify(selectedColor.hex) ===
                          JSON.stringify(color.hex);
                        return (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            className={`w-9 h-9 rounded-full border transition ${
                              active
                                ? "ring-2 ring-offset-2 ring-suzukiBlue"
                                : "border-gray-300"
                            }`}
                            style={getBackgroundColorStyle(color.hex)}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* DETAIL */}
              <div className="mt-10 lg:mt-0">
                <h1 className="text-3xl md:text-4xl font-extrabold text-suzukiBlue">
                  {car.name}
                </h1>
                <p className="mt-2 text-gray-600 text-lg">{car.tagline}</p>

                {/* CTA */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-suzukiRed text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
                  >
                    Jadwalkan Test Drive
                  </button>
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-suzukiBlue text-white py-3 rounded-xl font-semibold text-center hover:bg-blue-800 transition"
                  >
                    Konsultasi via WhatsApp
                  </a>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-10 border-t pt-6">
                  <h2 className="font-bold text-xl text-gray-900 mb-3">
                    Deskripsi Produk
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {car.description}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="mt-8 border-t pt-6">
                  <h2 className="font-bold text-xl text-gray-900 mb-4">
                    Fitur Unggulan
                  </h2>
                  <ul className="grid grid-cols-2 gap-4">
                    {car.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-center gap-3"
                      >
                        <img src={feature.iconUrl} alt="" className="w-6 h-6" />
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* VARIANT */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-center text-suzukiBlue mb-8">
              Varian & Harga
            </h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                      Varian
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase">
                      Harga OTR
                    </th>
                    <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {car.variants.map((variant) => {
                    const text = `Halo ${SALES_INFO.name}, saya tertarik ${car.name} varian ${variant.name}.`;
                    const url = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(text)}`;
                    return (
                      <tr key={variant.name} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {variant.name}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-gray-700">
                          {formatPrice(variant.price)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                          >
                            Pesan
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <TestDriveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCarId={car.id}
      />
    </>
  );
};

export default CarDetailPage;
