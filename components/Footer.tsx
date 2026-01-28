import React from "react";
import { SALES_INFO } from "../constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer: React.FC = () => {
  const whatsappNumber = "6281318229451"; // format internasional
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    `Halo ${SALES_INFO.name}, saya tertarik dengan mobil Suzuki.`,
  )}`;

  return (
    <footer className="bg-suzukiBlue text-white">
      <div className="container mx-auto px-6 py-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold mb-3">Suzuki Ciputat</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dealer resmi Suzuki melayani pembelian mobil baru, kredit, test
              drive, dan konsultasi terbaik untuk Anda.
            </p>
          </div>

          {/* KONTAK */}
          <div>
            <h4 className="font-semibold mb-3">Kontak</h4>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-2"
            >
              <Phone size={18} />
              0813-1822-9451 (WhatsApp)
            </a>

            <a
              href="mailto:sales@suzukiciputat.id"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Mail size={18} />
              sales@suzukiciputat.id
            </a>
          </div>

          {/* LOKASI */}
          <div>
            <h4 className="font-semibold mb-3">Lokasi</h4>
            <div className="flex items-start gap-2 text-gray-300">
              <MapPin size={18} className="mt-1" />
              <p className="text-sm">
                Jl. Ir. H. Juanda No. 88
                <br />
                Ciputat, Tangerang Selatan
              </p>
            </div>
          </div>

          {/* JAM LAYANAN */}
          <div>
            <h4 className="font-semibold mb-3">Jam Layanan</h4>
            <div className="flex items-start gap-2 text-gray-300">
              <Clock size={18} className="mt-1" />
              <p className="text-sm">
                Senin – Sabtu
                <br />
                08.00 – 20.00 WIB
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-300">
          © 2026 Suzuki Ciputat • Powered by {SALES_INFO.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
