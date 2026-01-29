import React, { useState } from "react";

const CreditSimulation: React.FC = () => {
  const [hargaMobil, setHargaMobil] = useState("");
  const [dp, setDp] = useState("");
  const [interest, setInterest] = useState("6");
  const [tenor, setTenor] = useState("3");

  const harga = Number(hargaMobil) || 0;
  const uangMuka = Number(dp) || 0;
  const bungaTahunan = Number(interest) / 100 || 0;
  const lamaTenor = Number(tenor) || 0;

  const pokokPinjaman = Math.max(harga - uangMuka, 0);
  const totalBunga = pokokPinjaman * bungaTahunan * lamaTenor;
  const totalPinjaman = pokokPinjaman + totalBunga;
  const cicilanBulanan = lamaTenor > 0 ? totalPinjaman / (lamaTenor * 12) : 0;

  const rupiah = (value: number) =>
    value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

  const sendToWhatsApp = () => {
    const message = `
Simulasi Kredit Suzuki

Harga Mobil: ${rupiah(harga)}
DP: ${rupiah(uangMuka)}
Tenor: ${lamaTenor} Tahun
Bunga: ${interest}% / Tahun

Cicilan / Bulan:
${rupiah(cicilanBulanan)}

Mohon info unit & promo terbaik.
    `;

    window.open(
      `https://wa.me/6281318229451?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      id="simulasi-kredit"
      className="py-20 bg-gradient-to-br from-slate-100 to-slate-200"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-suzukiBlue mb-3">
            Simulasi Kredit Suzuki
          </h2>
          <p className="text-gray-600">
            Estimasi cicilan mobil dengan bunga tahunan
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Harga */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Harga Mobil
              </label>
              <input
                type="number"
                placeholder="250000000"
                value={hargaMobil}
                onChange={(e) => setHargaMobil(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-suzukiBlue outline-none"
              />
            </div>

            {/* DP */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                DP (Uang Muka)
              </label>
              <input
                type="number"
                placeholder="50000000"
                value={dp}
                onChange={(e) => setDp(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-suzukiBlue outline-none"
              />
            </div>

            {/* Bunga */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Bunga / Tahun (%)
              </label>
              <input
                type="number"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-suzukiBlue outline-none"
              />
            </div>

            {/* Tenor */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Tenor
              </label>
              <select
                value={tenor}
                onChange={(e) => setTenor(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-suzukiBlue outline-none"
              >
                <option value="1">1 Tahun</option>
                <option value="2">2 Tahun</option>
                <option value="3">3 Tahun</option>
                <option value="4">4 Tahun</option>
                <option value="5">5 Tahun</option>
              </select>
            </div>
          </div>

          {/* RESULT */}
          <div className="mt-10 bg-gradient-to-r from-suzukiBlue to-blue-900 text-white rounded-xl p-8 text-center">
            <p className="uppercase tracking-widest text-sm opacity-80">
              Cicilan Per Bulan
            </p>
            <p className="text-4xl font-extrabold mt-3">
              {rupiah(cicilanBulanan)}
            </p>
            <p className="text-xs opacity-70 mt-2">
              *Estimasi, dapat berbeda dengan persetujuan leasing
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={sendToWhatsApp}
            className="mt-10 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg"
          >
            Konsultasi via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreditSimulation;
