import React from "react";

const Footer: React.FC = () => {
  const WHATSAPP_NUMBER = "6281318229451";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo, saya ingin bertanya seputar mobil Suzuki.",
  )}`;

  return (
    <footer id="footer" className="bg-suzukiBlue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* INFO DEALER */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Suzuki Ciputat</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Dealer resmi Suzuki wilayah Ciputat & Tangerang Selatan. Melayani
              pembelian cash & kredit dengan proses cepat dan aman.
            </p>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li>📍 Jl. Ir. H. Juanda, Ciputat – Tangerang Selatan</li>
              <li>🕘 Senin – Sabtu : 09.00 – 17.00 WIB</li>
              <li>
                📞
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline hover:text-green-400"
                >
                  0813-1822-9451 (WhatsApp)
                </a>
              </li>
              <li>
                🗺️
                <a
                  href="https://maps.google.com/?q=Suzuki+Ciputat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline hover:text-blue-300"
                >
                  Lihat di Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* DISCLAIMER */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">
              Disclaimer Kredit
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Simulasi kredit bersifat estimasi. Persetujuan kredit, besaran
              cicilan, dan DP mengikuti ketentuan leasing serta hasil survei &
              verifikasi data.
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Suzuki Ciputat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
