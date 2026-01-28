import React, { useState } from "react";

const CreditSimulation: React.FC = () => {
  const [price, setPrice] = useState(300000000);
  const [dp, setDp] = useState(60000000);
  const [tenor, setTenor] = useState(60);
  const [interest, setInterest] = useState(6);

  const loanAmount = price - dp;
  const monthlyInterest = interest / 100 / 12;
  const monthlyInstallment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -tenor));

  return (
    <section
      id="simulasi"
      className="py-16 bg-white/90 backdrop-blur rounded-xl m-4"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-suzukiBlue mb-8">
          Simulasi Kredit Suzuki
        </h2>

        <div className="grid gap-6">
          {/* Harga Mobil */}
          <div>
            <label className="block font-medium mb-1">Harga Mobil</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* DP */}
          <div>
            <label className="block font-medium mb-1">DP</label>
            <input
              type="number"
              value={dp}
              onChange={(e) => setDp(Number(e.target.value))}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Tenor */}
          <div>
            <label className="block font-medium mb-1">Tenor (bulan)</label>
            <select
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="w-full border rounded-lg px-4 py-2"
            >
              {[12, 24, 36, 48, 60].map((t) => (
                <option key={t} value={t}>
                  {t} bulan
                </option>
              ))}
            </select>
          </div>

          {/* Bunga */}
          <div>
            <label className="block font-medium mb-1">
              Bunga per tahun (%)
            </label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* HASIL */}
          <div className="bg-suzukiBlue text-white p-6 rounded-xl text-center">
            <p className="text-sm">Estimasi Cicilan / Bulan</p>
            <p className="text-3xl font-bold mt-2">
              Rp {Math.round(monthlyInstallment).toLocaleString("id-ID")}
            </p>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/6281318229451?text=${encodeURIComponent(
              `Halo, saya ingin simulasi kredit Suzuki.\n\nHarga: Rp ${price.toLocaleString(
                "id-ID",
              )}\nDP: Rp ${dp.toLocaleString(
                "id-ID",
              )}\nTenor: ${tenor} bulan\nCicilan: Rp ${Math.round(
                monthlyInstallment,
              ).toLocaleString("id-ID")}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-semibold transition"
          >
            Kirim ke WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreditSimulation;
