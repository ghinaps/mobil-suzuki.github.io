import React, { useState } from "react";
import { CARS, SALES_INFO } from "../constants";
import { TestDriveData } from "../types";

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCarId?: string;
}

const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  onClose,
  initialCarId,
}) => {
  const [formData, setFormData] = useState<TestDriveData>({
    name: "",
    car: initialCarId || (CARS.length > 0 ? CARS[0].id : ""),
    address: "",
    date: "",
    time: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCar = CARS.find((c) => c.id === formData.car);
    const carName = selectedCar ? selectedCar.name : "Mobil Suzuki";

    const message = `Halo ${SALES_INFO.name}, saya ${formData.name}, ingin menjadwalkan test drive untuk mobil ${carName}.
Alamat saya di ${formData.address}.
Jadwal: ${formData.date}, jam ${formData.time}.
Terima kasih.`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          type="button"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-suzukiBlue mb-4 text-center">
          Jadwalkan Test Drive
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-suzukiBlue focus:border-suzukiBlue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobil Pilihan
            </label>
            <select
              name="car"
              value={formData.car}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-suzukiBlue focus:border-suzukiBlue"
            >
              {CARS.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Alamat
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-suzukiBlue focus:border-suzukiBlue"
            />
          </div>

          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Tanggal
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-suzukiBlue focus:border-suzukiBlue"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Jam
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-suzukiBlue focus:border-suzukiBlue"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-suzukiRed text-white font-bold py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestDriveModal;
