import React from "react";
import { Link } from "react-router-dom";
import { Car } from "../types";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const startingPrice =
    car.variants.length > 0 ? Math.min(...car.variants.map((v) => v.price)) : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img
        className="w-full h-56 object-cover"
        src={car.image}
        alt={car.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
        <p className="text-gray-600 mt-2">Mulai dari</p>
        <p className="text-suzukiBlue text-2xl font-semibold mt-1">
          {formatPrice(startingPrice)}
        </p>
        <Link
          to={`/car/${car.id}`}
          className="mt-4 inline-block w-full text-center bg-suzukiRed text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
